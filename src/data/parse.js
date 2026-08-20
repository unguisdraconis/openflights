import * as d3 from "d3";

function validCode(v) {
  return v && v !== "\\N";
}
export function parseData(airportsText, routesText) {
  const rawAirports = d3.csvParseRows(airportsText);
  const byNumericId = new Map(),
    byCode = new Map();
  for (const r of rawAirports) {
    if (r.length < 8) continue;
    const lat = +r[6],
      lon = +r[7];
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) continue;
    const airport = {
      numericId: r[0],
      name: r[1],
      city: r[2],
      country: r[3],
      iata: validCode(r[4]) ? r[4] : null,
      icao: validCode(r[5]) ? r[5] : null,
      lat,
      lon,
      degree: 0,
      routeCount: 0,
      international: 0,
      domestic: 0,
      neighbors: new Set(),
      index: -1,
      topology: null,
    };
    airport.id = airport.iata || airport.icao || `ID-${airport.numericId}`;
    byNumericId.set(airport.numericId, airport);
    if (airport.iata) byCode.set(airport.iata, airport);
    if (airport.icao) byCode.set(airport.icao, airport);
  }
  const linkMap = new Map();
  let rawRouteCount = 0,
    skipped = 0;
  for (const r of d3.csvParseRows(routesText)) {
    if (r.length < 6) continue;
    const source =
      (validCode(r[3]) && byNumericId.get(r[3])) ||
      (validCode(r[2]) && byCode.get(r[2]));
    const target =
      (validCode(r[5]) && byNumericId.get(r[5])) ||
      (validCode(r[4]) && byCode.get(r[4]));
    if (!source || !target || source === target) {
      skipped++;
      continue;
    }
    rawRouteCount++;
    const ordered =
      source.numericId < target.numericId ? [source, target] : [target, source];
    const key = `${ordered[0].numericId}|${ordered[1].numericId}`;
    let link = linkMap.get(key);
    if (!link) {
      link = {
        source: ordered[0],
        target: ordered[1],
        weight: 0,
        carriers: new Set(),
        international: ordered[0].country !== ordered[1].country,
      };
      linkMap.set(key, link);
    }
    link.weight++;
    if (r[0]) link.carriers.add(r[0]);
  }
  const links = [...linkMap.values()];
  const used = new Set();
  for (const l of links) {
    used.add(l.source);
    used.add(l.target);
    l.source.neighbors.add(l.target.numericId);
    l.target.neighbors.add(l.source.numericId);
    l.source.routeCount += l.weight;
    l.target.routeCount += l.weight;
    if (l.international) {
      l.source.international += l.weight;
      l.target.international += l.weight;
    } else {
      l.source.domestic += l.weight;
      l.target.domestic += l.weight;
    }
  }
  const nodes = [...used];
  nodes.forEach((n, i) => {
    n.index = i;
    n.degree = n.neighbors.size;
  });
  links.forEach((l, i) => {
    l.index = i;
    l.score = l.weight * 20 + Math.sqrt(l.source.degree * l.target.degree);
  });
  links.sort((a, b) => b.score - a.score);
  const countries = d3
    .rollups(
      nodes,
      (v) => v.length,
      (d) => d.country,
    )
    .sort((a, b) => d3.descending(a[1], b[1]));
  // Airport records are the domain model and nothing downstream may write to
  // them — render positions live in index-aligned side tables (see
  // data/positions.js). Freezing in dev turns any violation into a throw.
  if (import.meta.env?.DEV) for (const n of nodes) Object.freeze(n);
  return { nodes, links, countries, rawRouteCount, skipped };
}
