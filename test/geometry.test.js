import assert from "node:assert/strict";
import test from "node:test";
import * as THREE from "three";

import { latLonVector, slerpArc } from "../src/data/geometry.js";

const TOLERANCE = 1e-10;

function approximately(actual, expected, tolerance = TOLERANCE) {
  assert.ok(
    Math.abs(actual - expected) <= tolerance,
    `expected ${actual} to be within ${tolerance} of ${expected}`,
  );
}

function vectorApproximately(actual, expected, tolerance = TOLERANCE) {
  approximately(actual.x, expected.x, tolerance);
  approximately(actual.y, expected.y, tolerance);
  approximately(actual.z, expected.z, tolerance);
}

test("projects equator cardinal coordinates at unit radius", () => {
  vectorApproximately(latLonVector(0, 0), new THREE.Vector3(1, 0, 0));
  vectorApproximately(latLonVector(0, 90), new THREE.Vector3(0, 0, -1));
});

test("projects poles with finite components and the requested radius", () => {
  const north = latLonVector(90, 37, 2);
  const south = latLonVector(-90, -123, 2);

  vectorApproximately(north, new THREE.Vector3(0, 2, 0));
  vectorApproximately(south, new THREE.Vector3(0, -2, 0));
  approximately(north.length(), 2);
  approximately(south.length(), 2);
  assert.ok(north.toArray().every(Number.isFinite));
  assert.ok(south.toArray().every(Number.isFinite));
});

test("keeps spherical arc endpoints on the route shell in endpoint directions", () => {
  const start = new THREE.Vector3(2, 0, 0);
  const end = new THREE.Vector3(0, 3, 0);
  const atStart = slerpArc(start, end, 0, 0.25);
  const atEnd = slerpArc(start, end, 1, 0.25);

  vectorApproximately(atStart.clone().normalize(), start.clone().normalize());
  vectorApproximately(atEnd.clone().normalize(), end.clone().normalize());
  approximately(atStart.length(), 1.012);
  approximately(atEnd.length(), 1.012);
});

test("lifts an orthogonal arc midpoint along the great-circle direction", () => {
  const altitude = 0.2;
  const midpoint = slerpArc(
    new THREE.Vector3(1, 0, 0),
    new THREE.Vector3(0, 1, 0),
    0.5,
    altitude,
  );
  const expectedDirection = new THREE.Vector3(1, 1, 0).normalize();

  assert.ok(midpoint.toArray().every(Number.isFinite));
  approximately(midpoint.length(), 1.012 + altitude);
  vectorApproximately(midpoint.clone().normalize(), expectedDirection);
});
