import * as THREE from "three";

// The Okabe-Ito qualitative palette, which this visualisation already used for
// its node and route colours. Light mode extends the same eight hues rather
// than introducing new ones, so the two themes stay part of one system.
export const OKABE_ITO = {
  black: "#000000",
  orange: "#e69f00",
  sky: "#56b4e9",
  green: "#009e73",
  yellow: "#f0e442",
  blue: "#0072b2",
  vermillion: "#d55e00",
  purple: "#cc79a7",
};

const c = (hex) => new THREE.Color(hex);

// Everything the 3D scene needs to know about a theme. Keeping both looks side
// by side here means a change to one is visible against the other, and the
// scene modules stay free of colour literals.
export const THEMES = {
  dark: {
    fog: 0x0b0d12,
    fogDensity: 0.055,
    // Node sprite colours by connectivity. On the dark globe the least
    // connected airports are near-white; on light they have to invert.
    node: { hub: c("#e69f00"), mid: c("#56b4e9"), low: c("#f3f4f6") },
    nodeSelected: c(OKABE_ITO.orange),
    nodeConnected: c(OKABE_ITO.purple),
    route: {
      intl: c(OKABE_ITO.sky),
      domestic: c(OKABE_ITO.green),
      selected: c(OKABE_ITO.orange),
    },
    // Additive blending makes overlapping arcs glow against black. Over a
    // light background it would wash out to white, so light mode differs.
    routeBlending: THREE.AdditiveBlending,
    routeOpacity: { globe: 0.29, topology: 0.2 },
    globe: {
      color: 0x101a26,
      emissive: 0x07101a,
      specular: 0x29445c,
      shininess: 22,
    },
    grid: { color: 0x355068, opacity: 0.13 },
    atmosphere: { color: new THREE.Color("#389eeb"), strength: 0.26 },
    stars: true,
    terrain: false,
    borders: null,
    lights: { hemiSky: 0x9acff2, hemiGround: 0x0a1020, hemi: 1.15, sun: 1.4 },
  },

  light: {
    fog: 0xeef1f4,
    fogDensity: 0.03,
    node: { hub: c(OKABE_ITO.vermillion), mid: c(OKABE_ITO.blue), low: c("#1c1f26") },
    nodeSelected: c(OKABE_ITO.vermillion),
    nodeConnected: c(OKABE_ITO.purple),
    route: {
      intl: c(OKABE_ITO.blue),
      domestic: c(OKABE_ITO.green),
      selected: c(OKABE_ITO.vermillion),
    },
    // Normal blending, darker inks and lower opacity: arcs have to read as
    // lines drawn on a map rather than light emitted against space.
    routeBlending: THREE.NormalBlending,
    routeOpacity: { globe: 0.26, topology: 0.22 },
    globe: {
      color: 0xdfe6ec,
      emissive: 0x000000,
      specular: 0x223344,
      shininess: 4,
    },
    grid: { color: 0x4b5563, opacity: 0.12 },
    atmosphere: { color: new THREE.Color("#5c8cb8"), strength: 0.16 },
    stars: false,
    // Hypsometric tinting, entirely from Okabe-Ito: shallow water through the
    // sky blue, land rising green -> yellow -> orange -> vermillion, with the
    // highest peaks bleaching toward white the way printed relief maps do.
    terrain: {
      ocean: new THREE.Color("#a9d3ee"),
      oceanDeep: new THREE.Color("#7fbde4"),
      shore: new THREE.Color("#cfe8f7"),
      land: [
        { at: 0.0, color: new THREE.Color("#5fae8d") },
        { at: 0.18, color: new THREE.Color("#9ac68a") },
        { at: 0.38, color: new THREE.Color("#f0e442") },
        { at: 0.58, color: new THREE.Color("#e69f00") },
        { at: 0.78, color: new THREE.Color("#d55e00") },
        { at: 1.0, color: new THREE.Color("#f4f1ec") },
      ],
      // Strength of the hillshade derived from the height gradient.
      relief: 0.55,
    },
    borders: { color: 0x2b3038, opacity: 0.5, coastOpacity: 0.75 },
    lights: { hemiSky: 0xffffff, hemiGround: 0xc9d4de, hemi: 1.35, sun: 0.85 },
  },
};

export const themeFor = (name) => THEMES[name] || THEMES.dark;
