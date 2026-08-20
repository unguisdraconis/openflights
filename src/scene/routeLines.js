import * as THREE from "three";

import { slerpArc } from "../data/geometry.js";

// Route arcs. Unlike the node sprites this object is rebuilt wholesale on every
// filter change — the segment count varies with density, so the buffers cannot
// be reused. It is the most expensive thing in the scene.
export function createRouteLines(scene, data, positions) {
  let linksObj = null;
  // Scratch vectors so arc building allocates nothing per link.
  const a = new THREE.Vector3(),
    b = new THREE.Vector3();
  const endpoints = (view, link) => {
    positions.read(view, link.source.index, a);
    positions.read(view, link.target.index, b);
  };
  const makeLinks = (opts, selectedNode, palette) => {
    if (linksObj) {
      scene.remove(linksObj);
      linksObj.geometry.dispose();
      linksObj.material.dispose();
    }
    const maxLinks = Math.ceil((data.links.length * opts.density) / 100);
    const eligible = [];
    for (const l of data.links) {
      if (eligible.length >= maxLinks) break;
      if (opts.scope === "international" && !l.international) continue;
      if (opts.scope === "domestic" && l.international) continue;
      if (
        opts.country &&
        l.source.country !== opts.country &&
        l.target.country !== opts.country
      )
        continue;
      if (
        l.source.degree < opts.minDegree ||
        l.target.degree < opts.minDegree
      )
        continue;
      eligible.push(l);
    }
    let segmentCount = 0;
    for (const l of eligible)
      segmentCount +=
        opts.view === "globe"
          ? (endpoints("globe", l), a.angleTo(b)) > 1.25
            ? 11
            : 7
          : 1;
    const pos = new Float32Array(segmentCount * 2 * 3),
      col = new Float32Array(segmentCount * 2 * 3);
    let p = 0;
    for (const l of eligible) {
      const selectedLink =
        selectedNode &&
        (l.source === selectedNode || l.target === selectedNode);
      const c = selectedLink
        ? palette.route.selected
        : l.international
          ? palette.route.intl
          : palette.route.domestic;
      if (opts.view === "globe") {
        endpoints("globe", l);
        const angle = a.angleTo(b),
          seg = angle > 1.25 ? 11 : 7,
          alt = 0.025 + Math.min(0.34, angle * 0.18);
        let prev = slerpArc(a, b, 0, alt);
        for (let s = 1; s <= seg; s++) {
          const next = slerpArc(a, b, s / seg, alt);
          pos.set(prev.toArray(), p);
          col.set(c.toArray(), p);
          p += 3;
          pos.set(next.toArray(), p);
          col.set(c.toArray(), p);
          p += 3;
          prev = next;
        }
      } else {
        endpoints("topology", l);
        pos.set(a.toArray(), p);
        col.set(c.toArray(), p);
        p += 3;
        pos.set(b.toArray(), p);
        col.set(c.toArray(), p);
        p += 3;
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    linksObj = new THREE.LineSegments(
      geo,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity:
          opts.view === "globe"
            ? palette.routeOpacity.globe
            : palette.routeOpacity.topology,
        depthWrite: false,
        blending: palette.routeBlending,
      }),
    );
    linksObj.renderOrder = 1;
    scene.add(linksObj);
  };

  return {
    get object() {
      return linksObj;
    },
    update: makeLinks,
    dispose() {
      if (linksObj) {
        scene.remove(linksObj);
        linksObj.geometry.dispose();
        linksObj.material.dispose();
        linksObj = null;
      }
    },
  };
}
