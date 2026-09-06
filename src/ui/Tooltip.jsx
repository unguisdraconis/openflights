import { fmt } from "../constants.js";

export function Tooltip({ node, pinned, point }) {
  if (!node || !point) return null;
  const tooltipWidth = 295;
  const offsetX = 18;
  const rightPosition = point.x + offsetX;
  const fitsRight = rightPosition + tooltipWidth <= innerWidth;
  const left = fitsRight
    ? rightPosition
    : Math.max(0, point.x - tooltipWidth - offsetX);
  const top = Math.max(12, Math.min(point.y - 20, innerHeight - 190));
  return (
    <div
      className={`tooltip ${pinned ? "pinned" : ""}`}
      style={{ left, top }}
    >
      <div className="tooltip-top">
        <div className="airport-code">{node.iata || node.icao || "—"}</div>
        <div>
          <h2>{node.name}</h2>
          <div className="tooltip-sub">
            {node.city}, {node.country}
          </div>
        </div>
      </div>
      <div className="tooltip-grid">
        <div className="tooltip-metric">
          <b>{fmt.format(node.degree)}</b>
          <span>Dataset connections</span>
        </div>
        <div className="tooltip-metric">
          <b>{fmt.format(node.routeCount)}</b>
          <span>Route records</span>
        </div>
        <div className="tooltip-metric">
          <b>
            {node.lat.toFixed(1)}°, {node.lon.toFixed(1)}°
          </b>
          <span>Coordinates</span>
        </div>
      </div>
      <div className="tooltip-note">
        {pinned
          ? "Pinned — click empty space or press Escape to close."
          : "Click to pin this airport."}
      </div>
    </div>
  );
}
