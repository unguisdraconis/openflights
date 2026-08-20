import { useMemo } from "react";
import { fmt } from "../constants.js";
import { LinkedInIcon, GitHubIcon } from "./icons.jsx";

export function Sidebar({
  data,
  options,
  setOptions,
  query,
  setQuery,
  selected,
  selectNode,
  clearSelection,
  open,
}) {
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return data.nodes
      .filter((n) =>
        `${n.id} ${n.name} ${n.city} ${n.country}`.toLowerCase().includes(q),
      )
      .sort((a, b) => b.degree - a.degree)
      .slice(0, 8);
  }, [data, query]);
  return (
    <aside
      id="controls"
      className={`sidebar ${open ? "open" : ""}`}
      aria-label="Network controls"
    >
      <section className="section">
        <div className="section-title">
          <span>Find an airport</span>
          <span className="value-pill">{fmt.format(data.nodes.length)}</span>
        </div>
        <div className="search-wrap">
          <input
            id="airport-search"
            className="search"
            value={query}
            onInput={(e) => setQuery(e.target.value)}
            placeholder="Code, city, airport…"
            aria-label="Search airports"
            autoComplete="off"
          />
          <span className="search-icon">⌕</span>
        </div>
        {results.length > 0 && (
          <div className="results" role="listbox">
            {results.map((n) => (
              <button
                key={n.id}
                className="result-btn"
                role="option"
                onClick={() => {
                  selectNode(n);
                  setQuery("");
                }}
              >
                <span className="result-name">{n.name}</span>
                <span className="result-code">{n.iata || n.icao}</span>
              </button>
            ))}
          </div>
        )}
        {selected && (
          <div className="selected-chip">
            <div>
              <strong>{selected.name}</strong>
              <span>
                {selected.city}, {selected.country}
              </span>
            </div>
            <button
              className="clear-btn"
              onClick={clearSelection}
              aria-label="Clear selected airport"
            >
              ×
            </button>
          </div>
        )}
      </section>

      <section className="section">
        <div className="section-title">
          <span>View</span>
        </div>
        <div className="segmented" role="group" aria-label="Visualization mode">
          <button
            className={`seg-btn ${options.view === "globe" ? "active" : ""}`}
            aria-pressed={options.view === "globe"}
            onClick={() => setOptions((o) => ({ ...o, view: "globe" }))}
          >
            3D globe
          </button>
          <button
            className={`seg-btn ${options.view === "topology" ? "active" : ""}`}
            aria-pressed={options.view === "topology"}
            onClick={() => setOptions((o) => ({ ...o, view: "topology" }))}
          >
            Topology
          </button>
        </div>
        <div
          className="segmented"
          role="group"
          aria-label="Colour theme"
          style={{ marginTop: "8px" }}
        >
          <button
            className={`seg-btn ${options.theme === "dark" ? "active" : ""}`}
            aria-pressed={options.theme === "dark"}
            onClick={() => setOptions((o) => ({ ...o, theme: "dark" }))}
          >
            Dark
          </button>
          <button
            className={`seg-btn ${options.theme === "light" ? "active" : ""}`}
            aria-pressed={options.theme === "light"}
            onClick={() => setOptions((o) => ({ ...o, theme: "light" }))}
          >
            Light map
          </button>
        </div>
        <label className="check-row">
          <input
            type="checkbox"
            checked={options.autoRotate}
            onChange={(e) =>
              setOptions((o) => ({ ...o, autoRotate: e.target.checked }))
            }
          />
          Auto-rotate globe
        </label>
      </section>

      <section className="section">
        <div className="section-title">
          <span>Route filters</span>
          <span className="value-pill">{options.density}%</span>
        </div>
        <div className="control-row">
          <div className="control-label">
            <span>Route density</span>
            <span>{options.density}%</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            value={options.density}
            aria-label="Route density: adjust from 5% to 100%"
            onInput={(e) =>
              setOptions((o) => ({ ...o, density: +e.target.value }))
            }
          />
        </div>
        <div className="control-row">
          <div className="control-label">
            <span>Minimum hub degree</span>
            <span>{options.minDegree}</span>
          </div>
          <input
            type="range"
            min="0"
            max="80"
            step="1"
            value={options.minDegree}
            aria-label="Minimum hub degree: adjust from 0 to 80 connections"
            onInput={(e) =>
              setOptions((o) => ({ ...o, minDegree: +e.target.value }))
            }
          />
        </div>
        <div className="control-row">
          <label className="control-label" htmlFor="scope">
            <span>Route scope</span>
          </label>
          <select
            id="scope"
            value={options.scope}
            onChange={(e) =>
              setOptions((o) => ({ ...o, scope: e.target.value }))
            }
          >
            <option value="all">All routes</option>
            <option value="international">International only</option>
            <option value="domestic">Domestic only</option>
          </select>
        </div>
        <div className="control-row">
          <label className="control-label" htmlFor="country">
            <span>Country focus</span>
          </label>
          <select
            id="country"
            value={options.country}
            onChange={(e) =>
              setOptions((o) => ({ ...o, country: e.target.value }))
            }
          >
            <option value="">All countries</option>
            {data.countries.map(([c, n]) => (
              <option key={c} value={c}>
                {c} ({n})
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="section">
        <div className="section-title">
          <span>Legend</span>
        </div>
        <div className="legend">
          <div className="legend-row">
            <span className="swatch" style={{ background: "#56b4e9" }}></span>
            <span>International connection</span>
          </div>
          <div className="legend-row">
            <span className="swatch" style={{ background: "#009e73" }}></span>
            <span>Domestic connection</span>
          </div>
          <div className="legend-row">
            <span className="swatch" style={{ background: "#e69f00" }}></span>
            <span>Selected-airport connection</span>
          </div>
        </div>
      </section>

      <section className="section help">
        Drag to orbit · scroll to zoom · click an airport to pin.
        <br />
        <br />
        <kbd>/</kbd> Search &nbsp; <kbd>Esc</kbd> Clear selection &nbsp;
        <kbd>R</kbd> Reset camera
      </section>

      <footer className="sidebar-footer">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/jeremiahjking/"
            className="social-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/unguisdraconis"
            className="social-btn"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
        </div>
        <p className="data-source">© 2026 Jeremiah King</p>
        <p className="data-source">
          Data from{""}
          <a href="https://openflights.org" target="_blank" rel="noreferrer">
            OpenFlights.org
          </a>
        </p>
      </footer>
    </aside>
  );
}
