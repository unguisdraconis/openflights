import assert from "node:assert/strict";
import test from "node:test";
import * as THREE from "three";

import {
  createPositionTables,
  NODE_ALTITUDE,
} from "../src/data/positions.js";

const FLOAT32_TOLERANCE = 1e-6;

function approximately(actual, expected) {
  assert.ok(
    Math.abs(actual - expected) <= FLOAT32_TOLERANCE,
    `expected ${actual} to be within ${FLOAT32_TOLERANCE} of ${expected}`,
  );
}

function tripleApproximately(table, offset, expected) {
  approximately(table[offset], expected[0]);
  approximately(table[offset + 1], expected[1]);
  approximately(table[offset + 2], expected[2]);
}

test("creates index-aligned geographic and topology tables", () => {
  const tables = createPositionTables([
    { lat: 0, lon: 0 },
    { lat: 90, lon: 73 },
  ]);

  assert.equal(tables.count, 2);
  assert.equal(tables.geo.length, 6);
  assert.equal(tables.topology.length, 6);
  tripleApproximately(tables.geo, 0, [NODE_ALTITUDE, 0, 0]);
  tripleApproximately(tables.geo, 3, [0, NODE_ALTITUDE, 0]);
  assert.deepEqual([...tables.topology], [0, 0, 0, 0, 0, 0]);
});

test("falls back to geographic positions until topology is ready", () => {
  const tables = createPositionTables([{ lat: 0, lon: 0 }]);

  assert.equal(tables.topologyReady, false);
  assert.strictEqual(tables.table("topology"), tables.geo);
  assert.strictEqual(tables.table("globe"), tables.geo);

  tables.markTopologyReady();

  assert.equal(tables.topologyReady, true);
  assert.strictEqual(tables.table("topology"), tables.topology);
  assert.strictEqual(tables.table("globe"), tables.geo);
});

test("reads a mutated topology coordinate into and returns the supplied vector", () => {
  const tables = createPositionTables([{ lat: 0, lon: 0 }]);
  tables.topology.set([0.25, -0.5, 0.75]);
  tables.markTopologyReady();
  const target = new THREE.Vector3();

  const returned = tables.read("topology", 0, target);

  assert.strictEqual(returned, target);
  assert.deepEqual(target.toArray(), [0.25, -0.5, 0.75]);
});
