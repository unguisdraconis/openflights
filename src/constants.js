import * as THREE from "three";

export const COLORS = {
  sky: new THREE.Color("#56b4e9"),
  blue: new THREE.Color("#0072b2"),
  green: new THREE.Color("#009e73"),
  orange: new THREE.Color("#e69f00"),
  red: new THREE.Color("#d55e00"),
  purple: new THREE.Color("#cc79a7"),
  dim: new THREE.Color("#364152"),
  white: new THREE.Color("#f3f4f6"),
};

export const fmt = new Intl.NumberFormat("en-US");
// Radius of the globe mesh. Airports sit just above it (see latLonVector
// calls), and hover picking uses it to cull the occluded far hemisphere.
export const GLOBE_RADIUS = 1;
// Airports that fail the country/degree filters stay on screen as geographic
// context rather than vanishing. This has to clear the point shader's
// `a < .015` discard by enough to survive the sprite's edge falloff —
// too low and whole regions of the map read as empty, which is what a
// hemisphere of low-degree airports looks like under a hub-degree filter.
export const DIMMED_ALPHA = 0.25;
export const reducedMotion =
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;
export const idle =
  typeof window !== "undefined" && window.requestIdleCallback
    ? window.requestIdleCallback.bind(window)
    : (fn) => setTimeout(() => fn({ timeRemaining: () => 8 }), 0);
export const cancelIdle =
  typeof window !== "undefined" && window.cancelIdleCallback
    ? window.cancelIdleCallback.bind(window)
    : clearTimeout;
