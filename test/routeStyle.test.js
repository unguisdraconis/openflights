import assert from "node:assert/strict";
import test from "node:test";

import {
  createLineDistances,
  partitionRouteGroups,
} from "../src/scene/routeStyle.js";

test("partitions domestic and international routes without duplication", () => {
  const a = { id: "A" };
  const b = { id: "B" };
  const c = { id: "C" };
  const d = { id: "D" };
  const links = [
    { source: a, target: b, international: false },
    { source: a, target: c, international: true },
    { source: b, target: d, international: false },
    { source: c, target: d, international: true },
  ];

  const groups = partitionRouteGroups(links, null);

  assert.deepEqual(groups.contextDomestic, [links[0], links[2]]);
  assert.deepEqual(groups.contextInternational, [links[1], links[3]]);
  assert.deepEqual(groups.focusDomestic, []);
  assert.deepEqual(groups.focusInternational, []);
  assert.equal(Object.values(groups).flat().length, links.length);
  assert.equal(new Set(Object.values(groups).flat()).size, links.length);
});

test("selected routes retain their domestic or international group", () => {
  const selected = { id: "A" };
  const b = { id: "B" };
  const c = { id: "C" };
  const d = { id: "D" };
  const domestic = { source: selected, target: b, international: false };
  const international = { source: selected, target: c, international: true };
  const context = { source: b, target: d, international: false };

  const groups = partitionRouteGroups(
    [domestic, international, context],
    selected,
  );

  assert.deepEqual(groups.focusDomestic, [domestic]);
  assert.deepEqual(groups.focusInternational, [international]);
  assert.deepEqual(groups.contextDomestic, [context]);
});

test("accumulates distance across a multi-segment route", () => {
  const positions = new Float32Array([
    0, 0, 0, 3, 0, 0,
    3, 0, 0, 3, 4, 0,
  ]);

  assert.deepEqual(
    [...createLineDistances(positions, [[0, 4]])],
    [0, 3, 3, 7],
  );
});

test("resets line distance at each route boundary", () => {
  const positions = new Float32Array([
    0, 0, 0, 3, 0, 0,
    10, 0, 0, 10, 0, 2,
  ]);

  assert.deepEqual(
    [...createLineDistances(positions, [[0, 2], [2, 4]])],
    [0, 3, 0, 2],
  );
});

test("calculates distance for a single topology segment", () => {
  const positions = new Float32Array([0, 0, 0, 0, 0, 5]);

  assert.deepEqual(
    [...createLineDistances(positions, [[0, 2]])],
    [0, 5],
  );
});
