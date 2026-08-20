import * as THREE from "three";

// Light-mode globe surface: a hypsometric relief map drawn from one texture.
//
// The texture packs two things the renderer needs and nothing else:
//   R = land elevation, 0 at sea level, rising to the highest peaks
//   G = land/water mask derived from vector coastlines and lake polygons
//
// The mask is deliberately NOT taken from the elevation channel. The source
// raster clamps everything at or below sea level to zero, so thresholding it
// would drown the Netherlands, the Bangladesh delta and every other low-lying
// coast. Vector polygons give a coastline that is both correct and crisp.
//
// Colour comes from an Okabe-Ito ramp rather than a photographic texture, so
// the terrain belongs to the same palette as the airports and routes.

const vertexShader = /* glsl */ `
varying vec2 vUv;
varying vec3 vNormal;
void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}`;

const fragmentShader = /* glsl */ `
uniform sampler2D uTerrain;
uniform vec2 uTexel;
uniform vec3 uOcean;
uniform vec3 uOceanDeep;
uniform vec3 uShore;
uniform vec3 uRamp[6];
uniform float uRampAt[6];
uniform float uRelief;
uniform vec3 uLightDir;
varying vec2 vUv;
varying vec3 vNormal;

// Piecewise-linear lookup through the hypsometric ramp.
vec3 hypsometric(float h) {
  vec3 col = uRamp[0];
  for (int i = 1; i < 6; i++) {
    float t = smoothstep(uRampAt[i - 1], uRampAt[i], h);
    col = mix(col, uRamp[i], t);
  }
  return col;
}

void main() {
  vec4 t = texture2D(uTerrain, vUv);
  float elevation = t.r;
  float land = t.g;

  // Hillshade from the height gradient. Sampling neighbours in texture space
  // is cheap and, because the sphere's uv is equirectangular, lines up with
  // north/east on the ground.
  float hL = texture2D(uTerrain, vUv - vec2(uTexel.x, 0.0)).r;
  float hR = texture2D(uTerrain, vUv + vec2(uTexel.x, 0.0)).r;
  float hD = texture2D(uTerrain, vUv - vec2(0.0, uTexel.y)).r;
  float hU = texture2D(uTerrain, vUv + vec2(0.0, uTexel.y)).r;
  // Cosine of latitude: longitude texels converge at the poles, so the
  // east-west slope has to be rescaled or the poles shear into streaks.
  float latScale = max(sin(vUv.y * 3.14159265), 0.08);
  vec3 slope = normalize(vec3(-(hR - hL) / latScale, -(hU - hD), 0.12));
  float shade = clamp(dot(slope, normalize(uLightDir)), 0.0, 1.0);
  shade = mix(1.0, 0.45 + shade, uRelief);

  vec3 landColor = hypsometric(elevation) * shade;
  // A shore tint, keyed to the softened edge of the coastline mask rather
  // than to absolute height. Keying it to elevation washed every low-lying
  // basin — the Amazon, the Congo, the Gangetic plain — out to a water-like
  // pale blue, because those are only a few metres above sea level.
  float coast = 1.0 - smoothstep(0.55, 0.90, land);
  landColor = mix(landColor, uShore, coast * 0.45);

  // No bathymetry is available, so ocean depth is faked gently from distance
  // to land: the mask blurs across the coast under linear filtering.
  vec3 waterColor = mix(uOceanDeep, uOcean, smoothstep(0.0, 0.5, land));

  vec3 base = mix(waterColor, landColor, smoothstep(0.35, 0.65, land));

  // A little diffuse so the globe still reads as a sphere rather than a disc.
  float diffuse = clamp(dot(vNormal, normalize(uLightDir)), 0.0, 1.0);
  gl_FragColor = vec4(base * (0.78 + 0.30 * diffuse), 1.0);
  // A raw ShaderMaterial gets none of the built-in output processing, so the
  // linear working-space colour has to be encoded for the sRGB framebuffer
  // here. Without this the whole ramp renders dark and oversaturated.
  #include <colorspace_fragment>
}`;

export function createTerrainMaterial(terrain, texture, textureSize) {
  const ramp = terrain.land;
  return new THREE.ShaderMaterial({
    transparent: false,
    uniforms: {
      uTerrain: { value: texture },
      uTexel: {
        value: new THREE.Vector2(1 / textureSize.x, 1 / textureSize.y),
      },
      uOcean: { value: terrain.ocean.clone() },
      uOceanDeep: { value: terrain.oceanDeep.clone() },
      uShore: { value: terrain.shore.clone() },
      uRamp: { value: ramp.map((s) => s.color.clone()) },
      uRampAt: { value: ramp.map((s) => s.at) },
      uRelief: { value: terrain.relief },
      uLightDir: { value: new THREE.Vector3(0.6, 0.45, 0.66).normalize() },
    },
    vertexShader,
    fragmentShader,
  });
}
