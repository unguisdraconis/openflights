import * as THREE from "three";
import { DIMMED_ALPHA } from "../constants.js";
import { nodeStyle, pixelSizeToWorldRadius } from "../data/geometry.js";

// All airports draw as a single THREE.Points call with per-vertex colour, size
// and alpha. Filter changes rewrite those typed arrays in place — geometry is
// never reallocated. The one exception is the "hero" node, a real lit sphere.
export function createNodeSprites(
  scene,
  data,
  positions,
  renderer,
  camera,
  getViewportHeight,
) {
  const nodePositions = new Float32Array(data.nodes.length * 3);
  const nodeColors = new Float32Array(data.nodes.length * 3);
  const nodeSizes = new Float32Array(data.nodes.length);
  const nodeAlpha = new Float32Array(data.nodes.length);
  const nodeIndex = new Float32Array(data.nodes.length);
  const nodePickable = new Float32Array(data.nodes.length);
  for (let i = 0; i < nodeIndex.length; i++) nodeIndex[i] = i;
  nodePositions.set(positions.geo);
  // Colour, size and alpha are all written by the first update() before
  // anything is rendered, so they are left at zero here rather than computed
  // twice against a palette this module would otherwise have to know about.
  data.nodes.forEach((n, i) => {
    nodeSizes[i] = 4.2 + Math.min(8, Math.sqrt(n.degree) * 0.72);
    nodeAlpha[i] = 0.88;
  });
  const nodesGeo = new THREE.BufferGeometry();
  nodesGeo.setAttribute(
    "position",
    new THREE.BufferAttribute(nodePositions, 3),
  );
  nodesGeo.setAttribute("color", new THREE.BufferAttribute(nodeColors, 3));
  nodesGeo.setAttribute("aSize", new THREE.BufferAttribute(nodeSizes, 1));
  nodesGeo.setAttribute("aAlpha", new THREE.BufferAttribute(nodeAlpha, 1));
  // Picking reads these: aIndex identifies the airport, aPickable gates which
  // ones may be hit (dimmed context nodes are drawn but not hoverable).
  nodesGeo.setAttribute("aIndex", new THREE.BufferAttribute(nodeIndex, 1));
  nodesGeo.setAttribute("aPickable", new THREE.BufferAttribute(nodePickable, 1));
  const nodesMat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    vertexColors: true,
    uniforms: { uPixelRatio: { value: renderer.getPixelRatio() } },
    vertexShader: `attribute float aSize;attribute float aAlpha;varying vec3 vColor;varying float vAlpha;void main(){vColor=color;vAlpha=aAlpha;vec4 mv=modelViewMatrix*vec4(position,1.);gl_PointSize=clamp(aSize*(260.0/-mv.z),2.0,18.0);gl_Position=projectionMatrix*mv;}`,
    // The trailing colorspace_fragment encodes the linear working-space colour
    // for the sRGB framebuffer. Without it a raw ShaderMaterial writes linear
    // values straight out and every sprite renders darker than its palette
    // hex — which also made the sprites disagree with the hero node, drawn
    // with a built-in material that does this conversion for you.
    fragmentShader: `varying vec3 vColor;varying float vAlpha;void main(){float d=length(gl_PointCoord-.5);float a=smoothstep(.5,.25,d)*vAlpha;if(a<.015)discard;gl_FragColor=vec4(vColor,a);
      #include <colorspace_fragment>
    }`,
  });
  const nodePoints = new THREE.Points(nodesGeo, nodesMat);
  scene.add(nodePoints);

  // The selected node (or, absent a selection, the highest-degree hub)
  // renders as a real lit sphere instead of a point sprite. It's one
  // extra draw call, so the cost is negligible, but it buys real geometry,
  // lighting off the existing scene lights, and correct depth occlusion
  // for the single node that most deserves the emphasis.
  const topHubNode = data.nodes.reduce(
    (best, n) => (n.degree > best.degree ? n : best),
    data.nodes[0],
  );
  const heroGeo = new THREE.SphereGeometry(1, 24, 16);
  const heroMat = new THREE.MeshStandardMaterial({
    roughness: 0.32,
    metalness: 0.2,
  });
  const heroMesh = new THREE.Mesh(heroGeo, heroMat);
  heroMesh.visible = false;
  scene.add(heroMesh);
  let heroPixelSize = 0,
    heroDistance = 3.55;
  const updateHero = (opts, selectedNode, heroNode, palette) => {
    if (!heroNode) {
      heroMesh.visible = false;
      return;
    }
    const { color, pixelSize } = nodeStyle(heroNode, selectedNode, palette);
    positions.read(opts.view, heroNode.index, heroMesh.position);
    heroIndex = heroNode.index;
    heroMat.color.copy(color);
    heroMat.emissive.copy(color).multiplyScalar(0.32);
    heroPixelSize = pixelSize;
    heroDistance = opts.view === "globe" ? 3.55 : 4.2;
    heroMesh.scale.setScalar(
      pixelSizeToWorldRadius(
        heroPixelSize,
        camera,
        getViewportHeight(),
        heroDistance,
      ),
    );
    heroMesh.visible = true;
  };

  let visibleNodeIndices = data.nodes.map((_, i) => i);
  let lastTable = positions.geo;
  let heroIndex = -1;
  const updateNodes = (opts, selectedNode, heroNode, palette) => {

    visibleNodeIndices = [];
    // One memcpy for the whole shell when the view changes, instead of a
    // per-node copy on every filter tweak.
    const table = positions.table(opts.view);
    if (table !== lastTable) {
      nodePositions.set(table);
      nodesGeo.attributes.position.needsUpdate = true;
      lastTable = table;
    }
    data.nodes.forEach((n, i) => {
      const passesCountry = !opts.country || n.country === opts.country;
      const passesDegree = n.degree >= opts.minDegree;
      const passesFilters = passesCountry && passesDegree;
      const { color, pixelSize, isSelected, connected } = nodeStyle(
        n,
        selectedNode,
        palette,
      );
      let alpha = isSelected
        ? 1
        : passesFilters
          ? 0.9
          : connected
            ? 0.75
            : DIMMED_ALPHA;
      const isHero = n === heroNode;
      if (isHero) alpha = 0; // hero node is drawn as a mesh, not a sprite
      nodeColors[i * 3] = color.r;
      nodeColors[i * 3 + 1] = color.g;
      nodeColors[i * 3 + 2] = color.b;
      nodeAlpha[i] = alpha;
      nodeSizes[i] = pixelSize;
      // Dimmed nodes are context, not hover targets, so picking keys off the
      // filters themselves rather than off an alpha threshold — otherwise
      // brightening DIMMED_ALPHA would silently make them pickable. The hero
      // node stays pickable even though its sprite is hidden: it's drawn as a
      // mesh, and its position in the shared buffer is still updated above,
      // so hover/click resolve to the same airport.
      const pickable = isSelected || connected || passesFilters || isHero;
      nodePickable[i] = pickable ? 1 : 0;
      if (pickable) visibleNodeIndices.push(i);
    });
    nodesGeo.attributes.color.needsUpdate = true;
    nodesGeo.attributes.aAlpha.needsUpdate = true;
    nodesGeo.attributes.aSize.needsUpdate = true;
    nodesGeo.attributes.aPickable.needsUpdate = true;
  };

  return {
    points: nodePoints,
    topHubNode,
    geometry: nodesGeo,
    material: nodesMat,
    heroMesh,
    get heroIndex() {
      return heroMesh.visible ? heroIndex : -1;
    },
    positions: nodePositions,
    get visibleIndices() {
      return visibleNodeIndices;
    },
    update(opts, selectedNode, heroNode, palette) {
      updateNodes(opts, selectedNode, heroNode, palette);
      updateHero(opts, selectedNode, heroNode, palette);
    },
    resize() {
      if (heroMesh.visible)
        heroMesh.scale.setScalar(
          pixelSizeToWorldRadius(
            heroPixelSize,
            camera,
            getViewportHeight(),
            heroDistance,
          ),
        );
    },
    dispose() {
      nodesGeo.dispose();
      nodesMat.dispose();
      heroGeo.dispose();
      heroMat.dispose();
    },
  };
}
