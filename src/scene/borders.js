import * as THREE from "three";
import { latLonVector } from "../data/geometry.js";

// Country and territory outlines, drawn as great-circle line segments sitting
// just above the globe surface.
//
// Two levels of detail are used. 110m loads first because it is a tenth the
// size and good enough at default zoom; 50m is fetched lazily the first time
// the camera moves in close, then kept. Only light mode asks for borders, so a
// dark-mode session never downloads either file.

// Just clear of the globe (1.0) and below the airports (1.014), so borders sit
// on the surface without z-fighting and never occlude a node sprite.
const BORDER_ALTITUDE = 1.0025;
// Longer arcs get subdivided so they follow the curvature instead of cutting
// through the sphere.
const MAX_SEGMENT_DEGREES = 4;
// Camera distance at which the finer outlines become worth their download.
const DETAIL_DISTANCE = 2.6;

// Minimal TopoJSON reader: enough for the world-atlas country files, which are
// quantised MultiPolygons sharing an arc table.
function decodeArcs(topology) {
  const { scale, translate } = topology.transform;
  return topology.arcs.map((arc) => {
    let x = 0,
      y = 0;
    return arc.map(([dx, dy]) => {
      x += dx;
      y += dy;
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]];
    });
  });
}

function ringsOf(topology, arcs) {
  const object = topology.objects.countries || topology.objects.land;
  const rings = [];
  const stitch = (indexes) => {
    const out = [];
    for (const i of indexes) {
      const arc = i < 0 ? arcs[~i].slice().reverse() : arcs[i];
      if (out.length) out.push(...arc.slice(1));
      else out.push(...arc);
    }
    return out;
  };
  for (const geometry of object.geometries) {
    const polygons =
      geometry.type === "Polygon"
        ? [geometry.arcs]
        : geometry.type === "MultiPolygon"
          ? geometry.arcs
          : [];
    for (const polygon of polygons)
      for (const ring of polygon) rings.push(stitch(ring));
  }
  return rings;
}

// Build one LineSegments for every outline, tessellating along great circles.
function buildGeometry(rings) {
  const points = [];
  const a = new THREE.Vector3(),
    b = new THREE.Vector3();
  for (const ring of rings) {
    for (let i = 0; i < ring.length - 1; i++) {
      const [lon1, lat1] = ring[i],
        [lon2, lat2] = ring[i + 1];
      // Natural Earth splits shapes at the antimeridian, but guard anyway:
      // a segment that appears to wrap the globe would cut straight through.
      if (Math.abs(lon2 - lon1) > 180) continue;
      const span = Math.max(Math.abs(lon2 - lon1), Math.abs(lat2 - lat1));
      const steps = Math.max(1, Math.ceil(span / MAX_SEGMENT_DEGREES));
      a.copy(latLonVector(lat1, lon1, BORDER_ALTITUDE));
      for (let s = 1; s <= steps; s++) {
        const t = s / steps;
        b.copy(
          latLonVector(
            lat1 + (lat2 - lat1) * t,
            lon1 + (lon2 - lon1) * t,
            BORDER_ALTITUDE,
          ),
        );
        points.push(a.x, a.y, a.z, b.x, b.y, b.z);
        a.copy(b);
      }
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(new Float32Array(points), 3),
  );
  return geometry;
}

export function createBorders(scene) {
  const material = new THREE.LineBasicMaterial({
    color: 0x2b3038,
    transparent: true,
    opacity: 0.5,
    depthWrite: false,
  });
  const lines = new THREE.LineSegments(new THREE.BufferGeometry(), material);
  lines.visible = false;
  // Drawn before the route arcs so flight paths stay on top of the map.
  lines.renderOrder = 0;
  scene.add(lines);

  const levels = { "110m": null, "50m": null };
  const loading = {};
  let enabled = false;
  let active = null;

  const use = (level) => {
    if (!levels[level] || active === level) return;
    lines.geometry = levels[level];
    active = level;
  };

  const load = (level, onReady) => {
    if (levels[level] || loading[level]) return;
    loading[level] = true;
    fetch(`${import.meta.env.BASE_URL}geo/countries-${level}.json`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
      .then((topology) => {
        const arcs = decodeArcs(topology);
        levels[level] = buildGeometry(ringsOf(topology, arcs));
        loading[level] = false;
        // Only adopt it if it is still the level we want.
        if (enabled && (level === "110m" ? !levels["50m"] : true)) {
          use(level);
          onReady?.();
        }
      })
      .catch(() => {
        // Borders are decoration: a failed fetch leaves the globe plain.
        loading[level] = false;
      });
  };

  return {
    object: lines,
    setTheme(palette, onReady) {
      enabled = !!palette.borders;
      lines.visible = enabled;
      if (!enabled) return;
      material.color.set(palette.borders.color);
      material.opacity = palette.borders.opacity;
      if (!levels["110m"]) load("110m", onReady);
      else use(levels["50m"] ? "50m" : "110m");
    },
    // Called as the camera moves: pull in the finer outlines once close.
    updateDetail(cameraDistance, onReady) {
      if (!enabled) return;
      if (cameraDistance <= DETAIL_DISTANCE) {
        if (!levels["50m"]) load("50m", onReady);
        else use("50m");
      } else if (levels["110m"]) {
        use("110m");
      }
    },
    dispose() {
      material.dispose();
      for (const level of Object.keys(levels)) levels[level]?.dispose();
      scene.remove(lines);
    },
  };
}
