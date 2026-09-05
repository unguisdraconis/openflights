import * as THREE from "three";
import { GLOBE_RADIUS } from "../constants.js";
import { createTerrainMaterial } from "./terrainMaterial.js";

// The planet and its backdrop: globe, wireframe graticule, atmospheric rim
// shell and star field. Returned as plain objects — no React involvement.
//
// Both themes are built up front and swapped by applyTheme, so switching is a
// material assignment rather than a scene rebuild. The dark look is unchanged
// from before light mode existed.
export function createGlobe(scene) {
  const globeGroup = new THREE.Group();
  scene.add(globeGroup);

  const darkGlobeMaterial = new THREE.MeshPhongMaterial({
    color: 0x101a26,
    emissive: 0x07101a,
    specular: 0x29445c,
    shininess: 22,
    // The globe must stay opaque. As a transparent material it joined the
    // transparency queue, where it is blended and ordered against the node
    // sprites instead of being laid down first as a depth-writing occluder
    // — which let it paint over the sprites inside its own silhouette,
    // leaving only the ring where they project past the limb.
    transparent: false,
  });

  const globe = new THREE.Mesh(
    // The light theme shades per-fragment from a texture, so the sphere needs
    // enough segments to keep the silhouette smooth but no more.
    new THREE.SphereGeometry(GLOBE_RADIUS, 96, 64),
    darkGlobeMaterial,
  );
  globeGroup.add(globe);

  const gridMaterial = new THREE.LineBasicMaterial({
    color: 0x355068,
    transparent: true,
    opacity: 0.13,
    depthWrite: false,
  });
  const grid = new THREE.LineSegments(
    new THREE.WireframeGeometry(new THREE.SphereGeometry(1.003, 36, 18)),
    gridMaterial,
  );
  globeGroup.add(grid);

  const atmosphereMaterial = new THREE.ShaderMaterial({
    transparent: true,
    side: THREE.BackSide,
    depthWrite: false,
    uniforms: {
      uColor: { value: new THREE.Color("#389eeb") },
      uStrength: { value: 0.26 },
    },
    vertexShader: `varying vec3 vN; varying vec3 vW; void main(){vN=normalize(normalMatrix*normal); vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}`,
    fragmentShader: `uniform vec3 uColor; uniform float uStrength; varying vec3 vN; varying vec3 vW; void main(){vec3 V=normalize(cameraPosition-vW);float rim=pow(1.0-max(dot(vN,V),0.0),2.4);gl_FragColor=vec4(uColor,rim*uStrength);
      #include <colorspace_fragment>
    }`,
  });
  const atmosphere = new THREE.Mesh(
    new THREE.SphereGeometry(1.045, 48, 32),
    atmosphereMaterial,
  );
  globeGroup.add(atmosphere);

  const starsGeo = new THREE.BufferGeometry();
  const stars = new Float32Array(900 * 3);
  for (let i = 0; i < 900; i++) {
    const r = 7 + Math.random() * 8,
      u = Math.random() * 2 - 1,
      t = Math.random() * Math.PI * 2,
      q = Math.sqrt(1 - u * u);
    stars[i * 3] = r * q * Math.cos(t);
    stars[i * 3 + 1] = r * u;
    stars[i * 3 + 2] = r * q * Math.sin(t);
  }
  starsGeo.setAttribute("position", new THREE.BufferAttribute(stars, 3));
  const starsObj = new THREE.Points(
    starsGeo,
    new THREE.PointsMaterial({
      color: 0x7d9bb7,
      size: 0.012,
      transparent: true,
      opacity: 0.42,
      depthWrite: false,
    }),
  );
  scene.add(starsObj);

  // Built lazily on first use of the light theme so dark-mode sessions never
  // pay for the terrain texture download.
  let terrainMaterial = null;
  let terrainTexture = null;
  let terrainPending = false;
  let currentTheme = null;

  const loadTerrain = (palette, onReady) => {
    if (terrainMaterial || terrainPending || !palette.terrain) return;
    terrainPending = true;
    new THREE.TextureLoader().load(
      `${import.meta.env.BASE_URL}geo/terrain-4096.png`,
      (tex) => {
        terrainPending = false;
        tex.colorSpace = THREE.NoColorSpace; // packed data, not colour
        tex.wrapS = THREE.RepeatWrapping;
        tex.wrapT = THREE.ClampToEdgeWrapping;
        tex.minFilter = THREE.LinearMipmapLinearFilter;
        tex.magFilter = THREE.LinearFilter;
        tex.generateMipmaps = true;
        tex.anisotropy = 8;
        terrainTexture = tex;
        terrainMaterial = createTerrainMaterial(palette.terrain, tex, {
          x: tex.image.width,
          y: tex.image.height,
        });
        if (currentTheme && currentTheme.terrain) globe.material = terrainMaterial;
        onReady?.();
      },
      undefined,
      () => {
        // Missing texture is not fatal: the flat globe still renders.
        terrainPending = false;
      },
    );
  };

  const applyTheme = (palette, onReady) => {
    currentTheme = palette;
    if (palette.terrain) {
      if (terrainMaterial) globe.material = terrainMaterial;
      else loadTerrain(palette, onReady);
    } else {
      globe.material = darkGlobeMaterial;
    }
    gridMaterial.color.set(palette.grid.color);
    gridMaterial.opacity = palette.grid.opacity;
    atmosphereMaterial.uniforms.uColor.value.copy(palette.atmosphere.color);
    atmosphereMaterial.uniforms.uStrength.value = palette.atmosphere.strength;
    starsObj.visible = palette.stars;
  };

  return {
    globeGroup,
    globe,
    grid,
    atmosphere,
    starsObj,
    starsGeo,
    applyTheme,
    dispose() {
      terrainTexture?.dispose();
      terrainMaterial?.dispose();
      darkGlobeMaterial.dispose();
    },
  };
}
