import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { fmt } from "./constants.js";
import { parseData } from "./data/parse.js";
import { createPositionTables } from "./data/positions.js";
import { loadFlightData } from "./data/source.js";
import { useGraphLayout } from "./data/useGraphLayout.js";
import { GlobeScene } from "./scene/GlobeScene.jsx";
import { Sidebar } from "./ui/Sidebar.jsx";
import { Tooltip } from "./ui/Tooltip.jsx";
import { LoadScreen } from "./ui/LoadScreen.jsx";
import { Stat } from "./ui/Stat.jsx";

// An explicit choice is remembered; otherwise follow the OS. Read once at
// startup so the first paint is already in the right theme.
// Above this width the sidebar is a column beside the globe; below it, an
// overlay drawer. Kept in sync with the breakpoint in App.css.
const DESKTOP = "(min-width: 681px)";
const isDesktop = () =>
  typeof window === "undefined" || !window.matchMedia
    ? true
    : window.matchMedia(DESKTOP).matches;

const initialTheme = () => {
  if (typeof window === "undefined") return "dark";
  try {
    const saved = localStorage.getItem("openflights-theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    // localStorage can throw in private modes; fall through to the OS setting.
  }
  return window.matchMedia?.("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

function App() {
  const [data, setData] = useState(null),
    [loading, setLoading] = useState(true),
    [error, setError] = useState("");
  const [options, setOptions] = useState({
    view: "globe",
    density: 55,
    minDegree: 0,
    scope: "all",
    country: "",
    autoRotate: false,
    theme: initialTheme(),
  });
  const [query, setQuery] = useState(""),
    [selected, setSelected] = useState(null),
    [hover, setHover] = useState(null),
    [tipPoint, setTipPoint] = useState(null),
    [focusRequest, setFocusRequest] = useState(null),
    [sidebarOpen, setSidebarOpen] = useState(isDesktop),
    [isDesktopViewport, setIsDesktopViewport] = useState(isDesktop),
    [topologyVersion, setTopologyVersion] = useState(0);
  const sidebarToggleRef = useRef(null);
  const focusSearchAfterOpenRef = useRef(false);
  const focusControlsAfterOpenRef = useRef(false);
  const restoreSidebarFocusRef = useRef(false);
  const graphReady = useCallback(() => setTopologyVersion((v) => v + 1), []);
  // Render positions live in index-aligned tables beside the graph, never on
  // the airport records themselves.
  const positions = useMemo(
    () => (data ? createPositionTables(data.nodes) : null),
    [data],
  );
  useGraphLayout(data, positions, graphReady);
  // Until the simulation finishes, the topology view falls back to geographic
  // positions, so say what is happening rather than showing an unexplained
  // sphere of points where a graph was expected.
  const layoutPending = options.view === "topology" && topologyVersion === 0;
  const load = useCallback((airportsText, routesText, customError) => {
    if (customError) {
      setError(customError);
      setLoading(false);
      return;
    }
    setLoading(true);
    setError("");
    setTimeout(() => {
      try {
        const parsed = parseData(airportsText, routesText);
        if (!parsed.nodes.length || !parsed.links.length)
          throw new Error("No usable airport-route pairs were found.");
        setData(parsed);
      } catch (e) {
        setError(`Could not parse the files: ${e.message}`);
      } finally {
        setLoading(false);
      }
    }, 30);
  }, []);
  useEffect(() => {
    // Guard against the effect running twice (StrictMode) or the component
    // unmounting mid-flight, so a late response cannot revive dead state.
    let cancelled = false;
    const controller = new AbortController();
    loadFlightData({ signal: controller.signal })
      .then(({ airports, routes, source }) => {
        if (cancelled) return;
        if (source !== "local")
          console.info(`OpenFlights data loaded from ${source}.`);
        load(airports, routes);
      })
      .catch((error) => {
        if (cancelled || controller.signal.aborted) return;
        // Say what was actually tried; a bare loader with no explanation
        // leaves no way to tell a missing file from a blocked network.
        load(
          null,
          null,
          `Could not load the flight data (${error.message}). Select or drop airports.dat and routes.dat below.`,
        );
      });
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [load]);
  useEffect(() => {
    const root = document.documentElement;
    // Flag the swap so CSS can disable transitions for this frame, then clear
    // it once the new colours have been painted.
    root.dataset.themeSwitching = "";
    root.dataset.theme = options.theme;
    // Clear after the new colours have painted. requestAnimationFrame is the
    // right signal, but it is paused in a hidden tab — without the timer the
    // flag would stick and transitions would stay disabled indefinitely.
    let cleared = false;
    const clear = () => {
      if (cleared) return;
      cleared = true;
      delete root.dataset.themeSwitching;
    };
    const frame = requestAnimationFrame(() => requestAnimationFrame(clear));
    const timer = setTimeout(clear, 300);
    try {
      localStorage.setItem("openflights-theme", options.theme);
    } catch {
      // Persisting is a convenience; ignore quota or private-mode failures.
    }
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
      clear();
    };
  }, [options.theme]);
  // Follow the OS while the user has not made an explicit choice.
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-color-scheme: light)");
    if (!mq) return;
    const onChange = (e) => {
      let stored = null;
      try {
        stored = localStorage.getItem("openflights-theme");
      } catch {
        stored = null;
      }
      if (stored) return;
      setOptions((o) => ({ ...o, theme: e.matches ? "light" : "dark" }));
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  useEffect(() => {
    const mq = window.matchMedia?.(DESKTOP);
    if (!mq) return;
    const onChange = (event) => setIsDesktopViewport(event.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  useEffect(() => {
    const skipLink = document.getElementById("skip-to-controls");
    if (!skipLink) return;
    const onActivate = (event) => {
      if (!isDesktopViewport && !sidebarOpen) {
        event.preventDefault();
        focusControlsAfterOpenRef.current = true;
        setSidebarOpen(true);
      }
    };
    skipLink.addEventListener("click", onActivate);
    return () => skipLink.removeEventListener("click", onActivate);
  }, [isDesktopViewport, sidebarOpen]);
  useLayoutEffect(() => {
    if (sidebarOpen && focusSearchAfterOpenRef.current) {
      focusSearchAfterOpenRef.current = false;
      document.getElementById("airport-search")?.focus();
    }
    if (sidebarOpen && focusControlsAfterOpenRef.current) {
      focusControlsAfterOpenRef.current = false;
      window.location.hash = "controls";
      document.getElementById("airport-search")?.focus();
    }
    if (!sidebarOpen && restoreSidebarFocusRef.current) {
      restoreSidebarFocusRef.current = false;
      sidebarToggleRef.current?.focus();
    }
  }, [sidebarOpen]);
  useEffect(() => {
    const key = (e) => {
      if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
        e.preventDefault();
        const search = document.getElementById("airport-search");
        if (!search) return;
        if (!isDesktopViewport && !sidebarOpen) {
          focusSearchAfterOpenRef.current = true;
          setSidebarOpen(true);
        } else search.focus();
      }
      if (e.key === "Escape") {
        setSelected(null);
        setHover(null);
        setTipPoint(null);
      }
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, [isDesktopViewport, sidebarOpen]);
  const selectNode = (node, point, fromSidebar = false) => {
    setSelected(node);
    setHover(null);
    setTipPoint(point || { x: innerWidth * 0.56, y: innerHeight * 0.3 });
    setFocusRequest({ node, id: performance.now() });
    if (!isDesktopViewport) {
      if (fromSidebar) restoreSidebarFocusRef.current = true;
      setSidebarOpen(false);
    }
  };
  const clearSelection = () => {
    setSelected(null);
    setHover(null);
    setTipPoint(null);
  };
  const tooltipNode = selected || hover;
  const filteredCount = useMemo(
    () =>
      data
        ? data.links.filter(
            (l) =>
              (options.scope === "all" ||
                (options.scope === "international") === l.international) &&
              (!options.country ||
                l.source.country === options.country ||
                l.target.country === options.country) &&
              l.source.degree >= options.minDegree &&
              l.target.degree >= options.minDegree,
          ).length
        : 0,
    [data, options.scope, options.country, options.minDegree],
  );
  return (
    <div className={`app ${sidebarOpen ? "" : "sidebar-collapsed"}`}>
      <header className="topbar">
        <button
          ref={sidebarToggleRef}
          className="icon-btn menu-btn"
          onClick={() => setSidebarOpen((v) => !v)}
          aria-label={sidebarOpen ? "Hide controls" : "Show controls"}
          aria-expanded={sidebarOpen}
          aria-controls="controls"
          title={sidebarOpen ? "Hide controls" : "Show controls"}
        >
          ☰
        </button>
        <div className="brand">
          <div className="eyebrow">Global aviation intelligence</div>
          <h1>OpenFlights Network</h1>
        </div>
        {data && (
          <div className="stats" aria-label="Network summary">
            <Stat value={fmt.format(data.nodes.length)} label="Airports" />
            <Stat value={fmt.format(data.links.length)} label="Connections" />
            <Stat value={fmt.format(filteredCount)} label="Visible pool" />
            <Stat value={fmt.format(data.countries.length)} label="Countries" />
          </div>
        )}
        <div className="top-actions">
          <button
            className="icon-btn desktop-only"
            onClick={() =>
              setOptions((o) => ({ ...o, autoRotate: !o.autoRotate }))
            }
            aria-label="Toggle automatic rotation"
            aria-pressed={options.autoRotate}
          >
            ◌
          </button>
        </div>
      </header>
      <main className="main">
        {data && (
          <Sidebar
            data={data}
            options={options}
            setOptions={setOptions}
            query={query}
            setQuery={setQuery}
            selected={selected}
            selectNode={selectNode}
            clearSelection={clearSelection}
            isDesktopViewport={isDesktopViewport}
            open={sidebarOpen}
            inert={!isDesktopViewport && !sidebarOpen}
          />
        )}
        <section className="stage" aria-label="3D flight visualization">
          {data && (
            <GlobeScene
              data={data}
              positions={positions}
              sidebarOpen={sidebarOpen}
              options={options}
              selected={selected}
              topologyVersion={topologyVersion}
              focusRequest={focusRequest}
              onHover={(n, p) => {
                setHover(n);
                setTipPoint(p);
              }}
              onSelect={selectNode}
              onClear={clearSelection}
            />
          )}
          {data && (
            <div className="stage-badge">
              <span className="dot"></span>
              <span>
                {options.view === "globe"
                  ? "GEOGRAPHIC GLOBE"
                  : "FORCE-DIRECTED TOPOLOGY"}{" "}
                · {layoutPending ? "COMPUTING LAYOUT…" : `${options.density}% ROUTES`}
              </span>
            </div>
          )}
          <Tooltip node={tooltipNode} pinned={!!selected} point={tipPoint} />
          {!data && (
            <LoadScreen onLoaded={load} loading={loading} error={error} />
          )}
          <div className="sr-only" role="status" aria-live="polite">
            {layoutPending ? "Computing force-directed layout." : ""}
          </div>
          <div className="sr-only" aria-live="polite">
            {tooltipNode
              ? `${tooltipNode.name}, ${tooltipNode.city}, ${tooltipNode.country}. ${tooltipNode.degree} direct connections.`
              : ""}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
