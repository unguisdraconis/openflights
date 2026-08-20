// Where the airport and route data comes from.
//
// OpenFlights has no API — its own data page directs you to the CSV dumps in
// its GitHub repository — so "fetching from upstream" means reading those flat
// files. They are served with `Access-Control-Allow-Origin: *`, so a browser
// can read them directly.
//
// Sources are tried in order and the first complete pair wins:
//   1. files bundled in public/ — same origin, fast, works offline
//   2. upstream via jsDelivr    — so the app still runs if they are absent
// A drag-and-drop file picker remains the last resort, handled by LoadScreen.
//
// Local is tried first deliberately. This dataset is effectively static, so
// there is little to gain from reading it over the network on every cold load,
// and plenty to lose: a third-party dependency in the startup path.

// Pinned to an immutable commit rather than a branch. jsDelivr serves a pinned
// ref with `immutable` and a one-year cache (a moving ref gets a week), and
// more importantly the dataset cannot change under the app without this line
// changing — an upstream edit should never silently shift the airport count.
const UPSTREAM_COMMIT = "e3bc6dedbcceb8b7b74248a00dcd6207254da6bd";
const UPSTREAM_BASE = `https://cdn.jsdelivr.net/gh/jpatokal/openflights@${UPSTREAM_COMMIT}/data`;

// Upstream is a fallback, not the main path: fail over to the file picker
// rather than leaving the loader spinning on a stalled connection.
const UPSTREAM_TIMEOUT_MS = 20000;

const FILES = ["airports", "routes"];

async function fetchText(url, timeout, signal) {
  // One controller per request, aborted by whichever comes first: the caller
  // giving up (unmount, or React re-running the effect) or the timeout. This
  // is what stops an abandoned load from finishing on the wire.
  const controller = new AbortController();
  const abort = () => controller.abort(signal?.reason);
  if (signal?.aborted) controller.abort(signal.reason);
  else signal?.addEventListener("abort", abort, { once: true });
  const timer = timeout
    ? setTimeout(() => controller.abort(new Error("timed out")), timeout)
    : null;
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const text = await response.text();
    // A dev server or static host that rewrites unknown paths to index.html
    // answers 200 with markup. Treat that as a miss instead of handing HTML
    // to the CSV parser, which would "succeed" into an empty graph.
    if (/^\s*<(?:!doctype|html)/i.test(text))
      throw new Error("received HTML, not data");
    return text;
  } finally {
    if (timer) clearTimeout(timer);
    signal?.removeEventListener("abort", abort);
  }
}

export const SOURCES = {
  local: {
    id: "local",
    label: "bundled data files",
    url: (name) => `${import.meta.env.BASE_URL}${name}.dat`,
  },
  upstream: {
    id: "upstream",
    label: "OpenFlights upstream (jsDelivr)",
    url: (name) => `${UPSTREAM_BASE}/${name}.dat`,
    timeout: UPSTREAM_TIMEOUT_MS,
  },
};

// `?data=local` / `?data=upstream` pins one source, which makes each path
// testable without moving files around.
function sourceChain() {
  const requested =
    typeof window === "undefined"
      ? null
      : new URLSearchParams(window.location.search).get("data");
  if (requested === "local") return [SOURCES.local];
  if (requested === "upstream") return [SOURCES.upstream];
  return [SOURCES.local, SOURCES.upstream];
}

/**
 * Resolve the raw data text, trying each source in turn.
 * Resolves to `{ airports, routes, source, attempts }`; rejects only when
 * every source failed, with `error.attempts` describing each failure.
 */
export async function loadFlightData({ signal } = {}) {
  const attempts = [];
  for (const source of sourceChain()) {
    try {
      const [airports, routes] = await Promise.all(
        FILES.map((name) => fetchText(source.url(name), source.timeout, signal)),
      );
      return { airports, routes, source: source.id, attempts };
    } catch (error) {
      // A caller who gave up does not want the next source tried.
      if (signal?.aborted) throw error;
      attempts.push(`${source.label}: ${error.message}`);
    }
  }
  const error = new Error(
    attempts.join("; ") || "no data sources configured",
  );
  error.attempts = attempts;
  throw error;
}
