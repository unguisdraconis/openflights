import * as THREE from "three";
import { latLonVector } from "./geometry.js";

// Render positions live here, in index-aligned typed arrays, rather than being
// stapled onto the airport records. Domain objects stay owned by parseData and
// read-only downstream; each subsystem writes into its own table instead.
//
// Storing them packed also means a view switch is one memcpy into the geometry
// buffer rather than 3,265 individual Vector3 -> array copies.
export const NODE_ALTITUDE = 1.014;

export function createPositionTables(nodes) {
  const count = nodes.length;
  const geo = new Float32Array(count * 3);
  const topology = new Float32Array(count * 3);
  let topologyReady = false;

  const v = new THREE.Vector3();
  nodes.forEach((n, i) => {
    v.copy(latLonVector(n.lat, n.lon, NODE_ALTITUDE));
    geo[i * 3] = v.x;
    geo[i * 3 + 1] = v.y;
    geo[i * 3 + 2] = v.z;
  });

  return {
    count,
    geo,
    topology,
    get topologyReady() {
      return topologyReady;
    },
    markTopologyReady() {
      topologyReady = true;
    },
    // The table a given view should draw from. Topology falls back to
    // geographic until the force layout has finished its ticks.
    table(view) {
      return view === "globe" || !topologyReady ? geo : topology;
    },
    // Read one node's position into a caller-supplied Vector3 (no allocation).
    read(view, index, target) {
      const t = this.table(view);
      return target.set(t[index * 3], t[index * 3 + 1], t[index * 3 + 2]);
    },
  };
}
