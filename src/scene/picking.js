import * as THREE from "three";

// Hover/click hit-testing by GPU readback.
//
// Airports are GPU-drawn points with nothing in the DOM to listen on. Rather
// than keeping a CPU-side screen-space index of every node — which has to be
// rebuilt whenever the camera moves, and which cannot know that the globe is
// in the way — this renders the airports into a tiny offscreen buffer with
// their index encoded as colour. The depth buffer then resolves occlusion for
// free: anything behind the planet loses the depth test, so a far-side airport
// can never be picked.
//
// The cost is one small render pass plus a readPixels stall per pointer
// sample, which is affordable at requestAnimationFrame rates.

// Hit tolerance in CSS pixels — the cursor takes the nearest drawn airport
// within this radius, matching how forgiving the previous quadtree search was.
const PICK_RADIUS = 8;

const pickVertexShader = [
  "attribute float aSize;",
  "attribute float aIndex;",
  "attribute float aPickable;",
  "varying vec3 vId;",
  "void main() {",
  "  if (aPickable < 0.5) {",
  // Push non-pickable nodes outside the clip volume instead of drawing them.
  "    gl_Position = vec4(2.0, 2.0, 2.0, 1.0);",
  "    gl_PointSize = 0.0;",
  "    return;",
  "  }",
  "  float id = aIndex + 1.0;", // 0 is reserved for "nothing here"
  "  vId = vec3(",
  "    floor(id / 65536.0),",
  "    floor(mod(id, 65536.0) / 256.0),",
  "    mod(id, 256.0)",
  "  ) / 255.0;",
  "  vec4 mv = modelViewMatrix * vec4(position, 1.0);",
  "  gl_PointSize = clamp(aSize * (260.0 / -mv.z), 2.0, 18.0);",
  "  gl_Position = projectionMatrix * mv;",
  "}",
].join("\n");

const pickFragmentShader = [
  "varying vec3 vId;",
  "void main() {",
  "  if (length(gl_PointCoord - 0.5) > 0.5) discard;", // keep a round hit area
  // Deliberately NO colorspace conversion here: this value is an airport
  // index, not a colour, and encoding it for sRGB would corrupt the id.
  "  gl_FragColor = vec4(vId, 1.0);",
  "}",
].join("\n");

// Ids travel as raw shader values rather than material colours: a THREE.Color
// would be subject to colour-management conversion and could decode wrong.
const solidIdMaterial = (THREE) =>
  new THREE.ShaderMaterial({
    uniforms: { uId: { value: new THREE.Vector3() } },
    vertexShader:
      "void main(){gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",
    fragmentShader:
      "uniform vec3 uId;void main(){gl_FragColor=vec4(uId,1.0);}",
  });

const encodeId = (id, target) =>
  target.set(
    Math.floor(id / 65536) / 255,
    (Math.floor(id / 256) % 256) / 255,
    (id % 256) / 255,
  );

export function createPicking({
  renderer,
  scene,
  camera,
  data,
  sprites,
  world,
  routes,
  selectedRef,
  onHover,
  onSelect,
  onClear,
}) {
  let pointerFrame = 0,
    pointerDown = null,
    dragged = false,
    size = 0,
    target = null,
    buffer = null;

  const pickMaterial = new THREE.ShaderMaterial({
    vertexShader: pickVertexShader,
    fragmentShader: pickFragmentShader,
    transparent: false,
    depthTest: true,
    depthWrite: true,
  });
  // The globe still has to be drawn so that it occludes, but it must write
  // id 0 rather than a colour that would decode to some airport.
  const occluderMaterial = solidIdMaterial(THREE); // uId stays (0,0,0)
  const heroPickMaterial = solidIdMaterial(THREE);

  const ensureTarget = (px) => {
    const want = Math.max(1, Math.round(PICK_RADIUS * 2 * px) + 1);
    if (want === size && target) return;
    target?.dispose();
    size = want;
    target = new THREE.WebGLRenderTarget(size, size, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      depthBuffer: true,
    });
    target.texture.colorSpace = THREE.NoColorSpace;
    target.texture.generateMipmaps = false;
    buffer = new Uint8Array(size * size * 4);
  };

  // Render the region under the cursor and return an airport index, or null.
  const pickAt = (clientX, clientY) => {
    const el = renderer.domElement,
      rect = el.getBoundingClientRect();
    if (
      clientX < rect.left ||
      clientY < rect.top ||
      clientX > rect.right ||
      clientY > rect.bottom
    )
      return null;
    const px = renderer.getPixelRatio();
    ensureTarget(px);
    const fullW = Math.round(rect.width * px),
      fullH = Math.round(rect.height * px),
      cx = (clientX - rect.left) * px,
      cy = (clientY - rect.top) * px;

    const heroIndex = sprites.heroIndex;
    const restore = [];
    const hide = (obj) => {
      if (!obj) return;
      restore.push([obj, "visible", obj.visible]);
      obj.visible = false;
    };
    const swapMaterial = (obj, mat) => {
      restore.push([obj, "material", obj.material]);
      obj.material = mat;
    };

    // Only the airports and the things that occlude them take part.
    hide(world.starsObj);
    hide(world.grid);
    hide(world.atmosphere);
    hide(routes.object);
    swapMaterial(world.globe, occluderMaterial);
    swapMaterial(sprites.points, pickMaterial);
    if (heroIndex >= 0) {
      encodeId(heroIndex + 1, heroPickMaterial.uniforms.uId.value);
      swapMaterial(sprites.heroMesh, heroPickMaterial);
    } else {
      hide(sprites.heroMesh);
    }

    const prevTarget = renderer.getRenderTarget();
    const prevClear = renderer.getClearColor(new THREE.Color());
    const prevClearAlpha = renderer.getClearAlpha();
    // Render only the square of pixels under the cursor, at 1:1 scale, so
    // point sizes — and therefore hit areas — match what is on screen.
    camera.setViewOffset(
      fullW,
      fullH,
      Math.round(cx) - (size >> 1),
      Math.round(cy) - (size >> 1),
      size,
      size,
    );
    renderer.setRenderTarget(target);
    renderer.setClearColor(0x000000, 1);
    renderer.clear();
    renderer.render(scene, camera);
    renderer.readRenderTargetPixels(target, 0, 0, size, size, buffer);

    camera.clearViewOffset();
    renderer.setRenderTarget(prevTarget);
    renderer.setClearColor(prevClear, prevClearAlpha);
    for (let i = restore.length - 1; i >= 0; i--) {
      const [obj, key, value] = restore[i];
      obj[key] = value;
    }

    // Nearest hit to the centre of the sampled square wins.
    const mid = size >> 1;
    let best = null,
      bestD = Infinity;
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        // readRenderTargetPixels returns rows bottom-up.
        const o = ((size - 1 - row) * size + col) * 4;
        const id = (buffer[o] << 16) | (buffer[o + 1] << 8) | buffer[o + 2];
        if (!id) continue;
        const d = (col - mid) * (col - mid) + (row - mid) * (row - mid);
        if (d < bestD) {
          bestD = d;
          best = id - 1;
        }
      }
    }
    return best !== null && best < data.nodes.length ? best : null;
  };

  const pointerMove = (e) => {
    if (pointerFrame) return;
    pointerFrame = requestAnimationFrame(() => {
      pointerFrame = 0;
      if (selectedRef.current) return;
      const hit = pickAt(e.clientX, e.clientY);
      renderer.domElement.style.cursor = hit === null ? "grab" : "pointer";
      onHover(
        hit === null ? null : data.nodes[hit],
        hit === null ? null : { x: e.clientX, y: e.clientY },
      );
    });
  };
  const pointerDownFn = (e) => {
    pointerDown = { x: e.clientX, y: e.clientY };
    dragged = false;
  };
  const pointerUpFn = (e) => {
    if (!pointerDown) return;
    const dx = e.clientX - pointerDown.x,
      dy = e.clientY - pointerDown.y;
    dragged = dx * dx + dy * dy > 36;
    pointerDown = null;
    if (dragged) return;
    const hit = pickAt(e.clientX, e.clientY);
    if (hit === null) onClear();
    else onSelect(data.nodes[hit], { x: e.clientX, y: e.clientY });
  };
  // A pointermove throttled through rAF can land after the pointer has already
  // left the canvas; cancel it so a stale frame cannot re-show the tooltip.
  const pointerLeave = () => {
    if (pointerFrame) {
      cancelAnimationFrame(pointerFrame);
      pointerFrame = 0;
    }
    if (!selectedRef.current) onHover(null, null);
  };

  const el = renderer.domElement;
  el.addEventListener("pointermove", pointerMove, { passive: true });
  el.addEventListener("pointerdown", pointerDownFn);
  el.addEventListener("pointerup", pointerUpFn);
  el.addEventListener("pointerleave", pointerLeave);

  return {
    pickAt,
    dispose() {
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      el.removeEventListener("pointermove", pointerMove);
      el.removeEventListener("pointerdown", pointerDownFn);
      el.removeEventListener("pointerup", pointerUpFn);
      el.removeEventListener("pointerleave", pointerLeave);
      target?.dispose();
      pickMaterial.dispose();
      occluderMaterial.dispose();
      heroPickMaterial.dispose();
    },
  };
}
