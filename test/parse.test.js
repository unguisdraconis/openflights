import assert from "node:assert/strict";
import test from "node:test";

import { parseData } from "../src/data/parse.js";

const NO_CODE = "\\N";

function airport(id, name, country, iata, icao, lat, lon) {
  return [id, name, `${name} City`, country, iata, icao, lat, lon].join(",");
}

function route(carrier, sourceCode, sourceId, targetCode, targetId) {
  return [carrier, "1", sourceCode, sourceId, targetCode, targetId].join(",");
}

function lines(...rows) {
  return rows.join("\n");
}

function nodeByNumericId(data, numericId) {
  return data.nodes.find((node) => node.numericId === numericId);
}

test("parses valid airports and resolves route endpoints by numeric ID", () => {
  const airports = lines(
    airport("1", "Alpha", "Country A", "AAA", "KAAA", "10.5", "20.25"),
    airport("2", "Bravo", "Country A", "BBB", "KBBB", "-30.5", "40.75"),
  );
  const routes = route("Carrier", "WRONG", "1", "NOPE", "2");

  const data = parseData(airports, routes);

  assert.equal(data.nodes.length, 2);
  assert.equal(data.links.length, 1);
  assert.equal(typeof nodeByNumericId(data, "1").lat, "number");
  assert.equal(typeof nodeByNumericId(data, "2").lon, "number");
  assert.equal(data.links[0].source.numericId, "1");
  assert.equal(data.links[0].target.numericId, "2");
});

test("excludes undersized and non-finite airport rows", () => {
  const airports = lines(
    airport("1", "Alpha", "Country A", "AAA", "KAAA", "0", "0"),
    airport("2", "Bravo", "Country A", "BBB", "KBBB", "1", "1"),
    "3,Too Short,City,Country,CCC,KCCC,5",
    airport("4", "Not A Number", "Country A", "DDD", "KDDD", "NaN", "2"),
    airport("5", "Infinite", "Country A", "EEE", "KEEE", "3", "Infinity"),
  );
  const routes = lines(
    route("Carrier", "AAA", "1", "BBB", "2"),
    route("Carrier", "CCC", "3", "AAA", "1"),
    route("Carrier", "DDD", "4", "AAA", "1"),
    route("Carrier", "EEE", "5", "AAA", "1"),
  );

  const data = parseData(airports, routes);

  assert.deepEqual(
    data.nodes.map((node) => node.numericId).sort(),
    ["1", "2"],
  );
  assert.equal(data.links.length, 1);
});

test("uses IATA, ICAO, and generated display IDs and resolves shared code lookups", () => {
  const airports = lines(
    airport("1", "IATA Airport", "Country A", "AAA", "KAAA", "0", "0"),
    airport("2", "ICAO Airport", "Country A", NO_CODE, "KBBB", "1", "1"),
    airport("3", "Numeric Airport", "Country B", NO_CODE, NO_CODE, "2", "2"),
  );
  const routes = lines(
    route("Carrier A", "AAA", NO_CODE, "KBBB", NO_CODE),
    route("Carrier B", "KBBB", NO_CODE, NO_CODE, "3"),
  );

  const data = parseData(airports, routes);

  assert.equal(nodeByNumericId(data, "1").id, "AAA");
  assert.equal(nodeByNumericId(data, "2").id, "KBBB");
  assert.equal(nodeByNumericId(data, "3").id, "ID-3");
  assert.equal(data.links.length, 2);
  assert.ok(
    data.links.some(
      (link) =>
        link.source.numericId === "1" && link.target.numericId === "2",
    ),
  );
});

test("discards unresolved routes and self-links and records them as skipped", () => {
  const airports = lines(
    airport("1", "Alpha", "Country A", "AAA", "KAAA", "0", "0"),
    airport("2", "Bravo", "Country A", "BBB", "KBBB", "1", "1"),
  );
  const routes = lines(
    route("Carrier", "MISSING", NO_CODE, "BBB", "2"),
    route("Carrier", "AAA", "1", "AAA", "1"),
  );

  const data = parseData(airports, routes);

  assert.equal(data.links.length, 0);
  assert.equal(data.nodes.length, 0);
  assert.equal(data.skipped, 2);
  assert.equal(data.rawRouteCount, 0);
});

test("collapses repeated directions into one weighted link with unique carriers", () => {
  const airports = lines(
    airport("1", "Alpha", "Country A", "AAA", "KAAA", "0", "0"),
    airport("2", "Bravo", "Country A", "BBB", "KBBB", "1", "1"),
  );
  const routes = lines(
    route("Carrier A", "AAA", "1", "BBB", "2"),
    route("Carrier B", "BBB", "2", "AAA", "1"),
    route("Carrier A", "AAA", "1", "BBB", "2"),
    route("", "AAA", "1", "BBB", "2"),
  );

  const data = parseData(airports, routes);
  const [link] = data.links;

  assert.equal(data.links.length, 1);
  assert.equal(link.weight, 4);
  assert.deepEqual([...link.carriers].sort(), ["Carrier A", "Carrier B"]);
  assert.equal(data.rawRouteCount, 4);
});

test("classifies links and weighted node counters by exact country equality", () => {
  const airports = lines(
    airport("1", "Alpha", "Country A", "AAA", "KAAA", "0", "0"),
    airport("2", "Bravo", "Country A", "BBB", "KBBB", "1", "1"),
    airport("3", "Charlie", "Country B", "CCC", "KCCC", "2", "2"),
  );
  const routes = lines(
    route("Carrier", "AAA", "1", "BBB", "2"),
    route("Carrier", "AAA", "1", "BBB", "2"),
    route("Carrier", "AAA", "1", "CCC", "3"),
  );

  const data = parseData(airports, routes);
  const domestic = data.links.find((link) => !link.international);
  const international = data.links.find((link) => link.international);

  assert.equal(domestic.weight, 2);
  assert.equal(international.weight, 1);
  assert.deepEqual(
    {
      domestic: nodeByNumericId(data, "1").domestic,
      international: nodeByNumericId(data, "1").international,
    },
    { domestic: 2, international: 1 },
  );
  assert.equal(nodeByNumericId(data, "2").domestic, 2);
  assert.equal(nodeByNumericId(data, "3").international, 1);
});

test("drops orphan airports while degree counts neighbors and routeCount uses weights", () => {
  const airports = lines(
    airport("1", "Alpha", "Country A", "AAA", "KAAA", "0", "0"),
    airport("2", "Bravo", "Country A", "BBB", "KBBB", "1", "1"),
    airport("3", "Charlie", "Country A", "CCC", "KCCC", "2", "2"),
    airport("4", "Orphan", "Country A", "DDD", "KDDD", "3", "3"),
  );
  const routes = lines(
    route("Carrier", "AAA", "1", "BBB", "2"),
    route("Carrier", "AAA", "1", "BBB", "2"),
    route("Carrier", "AAA", "1", "CCC", "3"),
  );

  const data = parseData(airports, routes);

  assert.equal(nodeByNumericId(data, "4"), undefined);
  assert.equal(nodeByNumericId(data, "1").degree, 2);
  assert.equal(nodeByNumericId(data, "1").routeCount, 3);
  assert.equal(nodeByNumericId(data, "2").degree, 1);
  assert.equal(nodeByNumericId(data, "2").routeCount, 2);
  assert.equal(nodeByNumericId(data, "3").routeCount, 1);
});

test("calculates link scores, sorts descending, and aggregates surviving countries", () => {
  const airports = lines(
    airport("1", "Alpha", "Country A", "AAA", "KAAA", "0", "0"),
    airport("2", "Bravo", "Country A", "BBB", "KBBB", "1", "1"),
    airport("3", "Charlie", "Country B", "CCC", "KCCC", "2", "2"),
    airport("4", "Orphan", "Country C", "DDD", "KDDD", "3", "3"),
  );
  const routes = lines(
    route("Carrier", "AAA", "1", "BBB", "2"),
    route("Carrier", "AAA", "1", "BBB", "2"),
    route("Carrier", "AAA", "1", "CCC", "3"),
  );

  const data = parseData(airports, routes);
  const [first, second] = data.links;

  assert.equal(first.weight, 2);
  assert.equal(second.weight, 1);
  assert.equal(
    first.score,
    first.weight * 20 + Math.sqrt(first.source.degree * first.target.degree),
  );
  assert.equal(
    second.score,
    second.weight * 20 + Math.sqrt(second.source.degree * second.target.degree),
  );
  assert.ok(first.score > second.score);
  assert.deepEqual(data.countries, [
    ["Country A", 2],
    ["Country B", 1],
  ]);
});
