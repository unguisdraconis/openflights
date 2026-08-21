import * as THREE from "three";

import { slerpArc } from "../data/geometry.js";

// Route arcs. Unlike the node sprites these are rebuilt wholesale on every
// filter change — the segment count varies with density, so the buffers cannot
// be reused. They are the most expensive thing in the scene.
//
// The arcs are split across two objects rather than one. With a selection
// active, an airport's own routes have to compete with every other route on
// screen, and tinting them a different colour is not enough: at ~19,000 arcs
// the field saturates, and under additive blending the pile-up is brighter
// than any single line in it. So the selected airport's routes are drawn as a
// separate object at high opacity and on top, while everything else drops back
// to faint context. WebGL cannot help here either — `linewidth` is ignored on
// essentially every platform, so weight is not available as an emphasis
// channel and opacity plus draw order have to carry it.
export function createRouteLines(scene, data, positions) {
  let contextObj = null,
    focusObj = null;
  // Scratch vectors so arc building allocates nothing per link.
  const a = new THREE.Vector3(),
    b = new THREE.Vector3();
  const endpoints = (view, link) => {
    positions.read(view, link.source.index, a);
    positions.read(view, link.target.index, b);
  };

  const disposeOne = (obj) => {
    if (!obj) return;
    scene.remove(obj);
    obj.geometry.dispose();
    obj.material.dispose();
  };

  // Build one LineSegments for a set of links. `lift` raises the arc midpoints
  // slightly so focused routes clear the tangle they sit in rather than
  // z-fighting through it; endpoints stay anchored because the altitude is
  // shaped by sin(pi*t).
  const build = (links, opts, palette, selectedNode, lift, opacity, order) => {
    if (!links.length) return null;
    let segmentCount = 0;
    for (const l of links)
      segmentCount +=
        opts.view === "globe"
          ? (endpoints("globe", l), a.angleTo(b)) > 1.25
            ? 11
            : 7
          : 1;
    const pos = new Float32Array(segmentCount * 2 * 3),
      col = new Float32Array(segmentCount * 2 * 3);
    let p = 0;
    for (const l of links) {
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
          alt = 0.025 + Math.min(0.34, angle * 0.18) + lift;
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
    const obj = new THREE.LineSegments(
      geo,
      new THREE.LineBasicMaterial({
        vertexColors: true,
        transparent: true,
        opacity,
        depthWrite: false,
        blending: palette.routeBlending,
      }),
    );
    obj.renderOrder = order;
    scene.add(obj);
    return obj;
  };

  const makeLinks = (opts, selectedNode, palette) => {
    disposeOne(contextObj);
    disposeOne(focusObj);
    contextObj = focusObj = null;

    const maxLinks = Math.ceil((data.links.length * opts.density) / 100);
    const context = [],
      focus = [];
    let taken = 0;
    for (const l of data.links) {
      if (taken >= maxLinks) break;
      if (opts.scope === "international" && !l.international) continue;
      if (opts.scope === "domestic" && l.international) continue;
      if (
        opts.country &&
        l.source.country !== opts.country &&
        l.target.country !== opts.country
      )
        continue;
      if (l.source.degree < opts.minDegree || l.target.degree < opts.minDegree)
        continue;
      taken++;
      if (
        selectedNode &&
        (l.source === selectedNode || l.target === selectedNode)
      )
        focus.push(l);
      else context.push(l);
    }

    const view = opts.view === "globe" ? "globe" : "topology";
    // Unrelated routes only recede while something is actually selected.
    const contextOpacity = focus.length
      ? palette.routeContextOpacity[view]
      : palette.routeOpacity[view];
    contextObj = build(context, opts, palette, selectedNode, 0, contextOpacity, 1);
    focusObj = build(
      focus,
      opts,
      palette,
      selectedNode,
      opts.view === "globe" ? 0.02 : 0,
      palette.routeFocusOpacity,
      2,
    );
  };

  return {
    // Both objects, so callers that need to hide the routes (the GPU pick
    // pass) do not silently miss the focused ones.
    get objects() {
      return [contextObj, focusObj].filter(Boolean);
    },
    get object() {
      return contextObj;
    },
    update: makeLinks,
    dispose() {
      disposeOne(contextObj);
      disposeOne(focusObj);
      contextObj = focusObj = null;
    },
  };
}
