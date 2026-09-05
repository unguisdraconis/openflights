import { useRef } from "react";

export function LoadScreen({ onLoaded, loading, error }) {
  const inputRef = useRef();
  const processFiles = async (files) => {
    const list = [...files];
    const airports = list.find((f) => /airport/i.test(f.name));
    const routes = list.find((f) => /route/i.test(f.name));
    if (!airports || !routes)
      return onLoaded(null, null, "Select both airports.dat and routes.dat.");
    onLoaded(await airports.text(), await routes.text());
  };
  return (
    <div
      className="load-screen"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        processFiles(e.dataTransfer.files);
      }}
    >
      <div className="load-card">
        <div className="eyebrow">OpenFlights data loader</div>
        {/* While loading, lead with what is happening. The file-picker copy
            below is guidance for when loading fails, and reading it first is
            confusing when nothing is actually wrong yet. */}
        <h2>
          {loading
            ? "Loading the global aviation network…"
            : "Load the global aviation network"}
        </h2>
        {loading ? (
          <p role="status" aria-live="polite">
            Fetching and parsing the airport and route data. This usually takes
            a few seconds.
          </p>
        ) : (
          <p>
            The dashboard first looks for <b>airports.dat</b> and{" "}
            <b>routes.dat</b> beside this HTML file. If your browser blocks
            local file requests, select or drop both supplied files here.
          </p>
        )}
        <div className="drop-zone">
          <div>
            <button
              className="primary-btn"
              onClick={() => inputRef.current.click()}
              disabled={loading}
            >
              {loading ? "Building network…" : "Choose both data files"}
            </button>
            <input
              ref={inputRef}
              hidden
              type="file"
              multiple
              accept=".txt,.dat,text/plain"
              onChange={(e) => processFiles(e.target.files)}
            />
            <div className="file-note">
              You can also drag and drop both files onto this panel.
            </div>
          </div>
        </div>
        {loading && <div className="loading-bar" aria-hidden="true"></div>}
        {error && (
          <div className="error" role="alert">
            {error}
          </div>
        )}
      </div>
    </div>
  );
}
