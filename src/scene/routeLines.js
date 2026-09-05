import * as THREE from "three";

import { slerpArc } from "../data/geometry.js";
import {
  createLineDistances,
  partitionRouteGroups,
} from "./routeStyle.js";

const INTERNATIONAL_DASH_SIZE = 0.025;
const INTERNATIONAL_GAP_SIZE = 0.015;

// Route arcs. Unlike the node sprites these are rebuilt wholesale on every
// filter change — the segment count varies with density, so the buffers cannot
// be reused. They are the most expensive thing in the scene.
//
// The arcs are split by context/focus emphasis and domestic/international
// category. With a selection active, an airport's own routes have to compete
// with every other route on screen, and tinting them a different colour is not
// enough: at ~19,000 arcs the field saturates, and under additive blending the
// pile-up is brighter than any single line in it. So the selected airport's
// routes are drawn at high opacity and on top, while everything else drops
// back to faint context. WebGL cannot help here either — `linewidth` is ignored
// on essentially every platform, so weight is not available as an emphasis
// channel and opacity plus draw order have to carry it.
export function createRouteLines(scene, data, positions) {
  let routeObjects = [];
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

  // Build one category/style group. `lift` raises focused globe arcs slightly
  // so they clear the tangle they sit in rather than z-fighting through it;
  // endpoints stay anchored because the altitude is shaped by sin(pi*t).
  const build = (
    links,
    opts,
    color,
    blending,
    dashed,
    lift,
    opacity,
    order,
  ) => {
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
      col = new Float32Array(segmentCount * 2 * 3),
      routeRanges = [];
    let p = 0;
    for (const l of links) {
      const startVertex = p / 3;
      if (opts.view === "globe") {
        endpoints("globe", l);
        const angle = a.angleTo(b),
          seg = angle > 1.25 ? 11 : 7,
          alt = 0.025 + Math.min(0.34, angle * 0.18) + lift;
        let prev = slerpArc(a, b, 0, alt);
        for (let s = 1; s <= seg; s++) {
          const next = slerpArc(a, b, s / seg, alt);
          pos.set(prev.toArray(), p);
          col.set(color.toArray(), p);
          p += 3;
          pos.set(next.toArray(), p);
          col.set(color.toArray(), p);
          p += 3;
          prev = next;
        }
      } else {
        endpoints("topology", l);
        pos.set(a.toArray(), p);
        col.set(color.toArray(), p);
        p += 3;
        pos.set(b.toArray(), p);
        col.set(color.toArray(), p);
        p += 3;
      }
      routeRanges.push([startVertex, p / 3]);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    if (dashed)
      geo.setAttribute(
        "lineDistance",
        new THREE.BufferAttribute(createLineDistances(pos, routeRanges), 1),
      );
    const Material = dashed
      ? THREE.LineDashedMaterial
      : THREE.LineBasicMaterial;
    const obj = new THREE.LineSegments(
      geo,
      new Material({
        vertexColors: true,
        transparent: true,
        opacity,
        depthWrite: false,
        blending,
        ...(dashed
          ? {
              dashSize: INTERNATIONAL_DASH_SIZE,
              gapSize: INTERNATIONAL_GAP_SIZE,
            }
          : {}),
      }),
    );
    obj.renderOrder = order;
    scene.add(obj);
    return obj;
  };

  const disposeRoutes = () => {
    routeObjects.forEach(disposeOne);
    routeObjects = [];
  };

  const makeLinks = (opts, selectedNode, palette) => {
    disposeRoutes();

    const maxLinks = Math.ceil((data.links.length * opts.density) / 100);
    const visibleLinks = [];
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
      visibleLinks.push(l);
    }

    const groups = partitionRouteGroups(visibleLinks, selectedNode);
    const view = opts.view === "globe" ? "globe" : "topology";
    // Unrelated routes only recede while something is actually selected.
    const hasFocusRoutes =
      groups.focusDomestic.length > 0 || groups.focusInternational.length > 0;
    const contextOpacity = hasFocusRoutes
      ? palette.routeContextOpacity[view]
      : palette.routeOpacity[view];
    const focusLift = opts.view === "globe" ? 0.02 : 0;
    routeObjects = [
      build(
        groups.contextDomestic,
        opts,
        palette.route.domestic,
        palette.routeBlending,
        false,
        0,
        contextOpacity,
        1,
      ),
      build(
        groups.contextInternational,
        opts,
        palette.route.intl,
        palette.routeBlending,
        true,
        0,
        contextOpacity,
        1,
      ),
      build(
        groups.focusDomestic,
        opts,
        palette.route.selected,
        palette.routeBlending,
        false,
        focusLift,
        palette.routeFocusOpacity,
        2,
      ),
      build(
        groups.focusInternational,
        opts,
        palette.route.selected,
        palette.routeBlending,
        true,
        focusLift,
        palette.routeFocusOpacity,
        2,
      ),
    ].filter(Boolean);
  };

  return {
    // Every group, so callers that need to hide the routes (the GPU pick pass)
    // do not silently miss focused or category-specific geometry.
    get objects() {
      return routeObjects;
    },
    get object() {
      return routeObjects[0] || null;
    },
    update: makeLinks,
    dispose() {
      disposeRoutes();
    },
  };
}
