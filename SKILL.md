---
name: webgl-globe-network
description: >-
  Build high-performance interactive 3D globe and network-graph
  visualizations with React, Three.js (WebGL), and D3, including light/dark
  theming, hypsometric terrain, country borders, and correct colour
  management in custom shaders. Use when the task involves rendering
  thousands of geographic points or graph nodes on a canvas, drawing
  great-circle arc "flight paths" on a globe, a force-directed topology view,
  hover/click picking over many points, adding a light or dark mode to a
  WebGL scene, shading a globe from elevation data, or wiring an imperative
  Three.js scene into a React component without fighting the render loop.
  Use it as well whenever colours come out darker or more saturated than the
  palette says, when a light background makes glowing additive lines wash
  out, or when a map's coastlines, mountains, or water bodies need to be
  drawn from real data. Triggers: "globe", "3D map", "flight network",
  "network graph in three.js", "point cloud", "great-circle arcs",
  "force-directed layout", "instanced/points rendering", "canvas
  visualization performance", "d3 quadtree picking", "GPU picking", "webgl in
  react", "dark mode", "light mode", "theme toggle", "hypsometric",
  "topography", "terrain shader", "hillshade", "country borders", "TopoJSON",
  "colour space", "sRGB", "washed out colours".
---

# WebGL Globe & Network Visualization

A field guide for building an interactive 3D globe / force-directed network
on a WebGL canvas driven by React, Three.js, and D3. It encodes the specific
patterns that keep such an app fast, accessible, and maintainable. Follow the
architecture below rather than reinventing it — most of these choices exist to
avoid a specific performance or correctness trap.

## Core architectural rule: React owns state, Three.js owns the frame

Keep the 60fps render loop entirely outside React's reconciliation. React
manages UI state (filters, selection, search, tooltips) and passes it *down*
into the scene; it must never re-render on animation ticks.

- Build the whole Three.js scene **once** in a single `useEffect` keyed on the
  parsed `data`, and tear it down completely in that effect's cleanup. The
  WebGL context is expensive — do not rebuild it when options or selection
  change.
- Expose an imperative handle from the effect via a ref (e.g.
  `apiRef.current = { update, focusNode, resetCamera }`). Secondary effects
  keyed on `[options, selected, ...]` call `apiRef.current.update(...)` to push
  new state into the scene. This is the bridge between declarative React and
  imperative Three.js.
- The `requestAnimationFrame` loop only reads mutable closure variables and
  calls `controls.update()` + `renderer.render()`. It never touches React
  state setters.
- Read the latest selection inside event handlers through a
  `selectedRef.current = selected` mirror ref, so listeners registered once at
  setup always see current state without re-registering.

### Keep the scene modular, but not as components

Once the setup effect passes a few hundred lines, split it into plain
imperative factories — `createGlobe(scene, palette)`, `createNodeSprites(...)`,
`createRouteLines(...)`, `createPicking({...})` — each returning the objects it
owns plus `update` and `dispose`. The effect becomes a short composition root.

Resist the urge to turn these into React components (the react-three-fiber
shape). Doing so puts the scene back under the reconciler and forfeits the main
benefit of the architecture. Factories give you the file boundaries without the
reconciliation cost.

### Keep render state off your domain objects

It is tempting to write `node.geo = vector3` and `node.topology = vector3`
directly onto parsed entities. Prefer index-aligned typed arrays held beside
the graph:

```
positions.geo      Float32Array(n * 3)   // built once
positions.topology Float32Array(n * 3)   // filled by the layout
```

This keeps ownership clear — the parser owns the domain objects, each renderer
owns its own table — and it is measurably faster: switching views becomes one
`buffer.set(table)` memcpy instead of `n` separate `Vector3.toArray()` copies.
Freezing the parsed entities in development (`Object.freeze`) turns any
accidental write into an immediate throw rather than a slow drift.

## Data pipeline

Parse raw CSV (OpenFlights `.dat` is headerless CSV) with `d3.csvParseRows`.
Build the graph in a pure function that returns `{ nodes, links, countries }`:

- Index entities two ways (numeric id **and** code) so cross-references resolve
  in O(1) regardless of which identifier a row uses.
- Deduplicate edges into undirected links keyed by a **sorted** pair of ids;
  accumulate a `weight` and any per-edge sets (carriers, etc.) on first
  creation.
- Drop unusable rows early (missing coords, self-loops, unresolved endpoints).
- Compute `degree` from the deduplicated neighbor sets, not the raw edge list.
- **Exclude orphan nodes** (zero links) from the node array so the graph only
  contains connected entities.
- Score links (`weight*20 + sqrt(srcDeg*tgtDeg)`) and sort descending. A
  density slider can then take a **prefix** of the sorted array to always keep
  the most significant edges rather than a random subset.

Run parsing off the initial paint (wrap in `setTimeout(..., 30)` or a worker)
and show a loader; parsing a large network blocks the main thread.

## Layout math

**Globe positions.** Convert lat/lon to a unit-sphere Vector3:
```
phi   = (90 - lat) * PI/180
theta = (lon + 180) * PI/180
v = (-sin(phi)cos(theta), cos(phi), sin(phi)sin(theta)) * radius
```

**Great-circle arcs.** Draw flight paths with spherical interpolation (slerp)
between the two endpoint vectors, lifting the midpoint outward by a
sine-shaped altitude (`1.012 + sin(PI*t) * altitude`). Scale segment count
with arc length (e.g. 7 segments normally, 11 for arcs > ~1.25 rad) so long
arcs stay smooth without over-tessellating short ones.

**Force-directed topology.** Use `d3-forceSimulation` with link + many-body +
centering + weak x/y forces, but **do not** run it on d3's timer. Call
`.stop()` and drive `simulation.tick()` manually inside `requestIdleCallback`
batches, ticking as many times as fit in each idle slice up to a cap (~85).
A `forceSimulation` starts itself on construction via `d3-timer`'s own rAF
loop, so without that `.stop()` you get two animation loops competing for the
frame budget. On convergence, rescale node extents into a fixed viewport box
with `d3.scaleLinear`, and add a small z-offset from `log1p(degree)` so hubs
sit forward.

## The scene: batch everything into as few draw calls as possible

Draw-call count, not GPU fill rate, is the usual bottleneck at these node
counts. **Never create one mesh per node.**

- **All nodes = one `THREE.Points`** with a single `BufferGeometry` and custom
  shaders. Store per-node `position`, `color`, `aSize`, `aAlpha` as attribute
  buffers. On filter/selection change, mutate the typed arrays in place and set
  `attribute.needsUpdate = true` — a few typed-array writes, not object churn.
  - Vertex shader: `gl_PointSize = clamp(aSize * (260.0/-mv.z), 2.0, 18.0)` for
    free distance attenuation and min/max clamp.
  - Fragment shader: soft circular dot via `smoothstep(.5,.25,d)` on
    `gl_PointCoord`, `discard` near-transparent fragments. No texture needed.
  - `transparent: true, depthWrite: false, vertexColors: true`.
- **All edges = one `THREE.LineSegments`**, rebuilt into fresh position/color
  buffers when filters/selection change. Pre-count total segments, allocate
  `Float32Array(segments*2*3)` once, fill it, dispose the old geometry/material
  before replacing.
- Effects that don't need geometry (atmosphere rim light, fog) are cheap
  `ShaderMaterial` shells or built-ins, not post-processing passes.

### Solid bodies must be opaque

A planet drawn with `transparent: true` (even at `opacity: 0.985`) joins the
transparency queue, where it is sorted and blended against the node sprites
instead of being laid down first as a depth-writing occluder. The symptom is
disorienting: sprites vanish everywhere inside the globe's silhouette and
survive only in the thin ring where they project past the limb, because that
ring is the only place they aren't painted over.

If a body is meant to be solid, set `transparent: false` and delete any
`opacity` beside it — opacity is ignored on an opaque material and will
mislead the next reader.

### Hybrid "hero" mesh (optional emphasis)

A single node (the selection, or the top-degree hub as a default) can render
as a real lit `SphereGeometry` + `MeshStandardMaterial` for premium shading and
correct depth occlusion — it's **one** extra draw call, so cost is negligible.
Hide that node's point sprite (set its alpha to 0) but keep its index in the
pickable set so hover/click still resolve to it. Because a mesh has no
`gl_PointSize` trick, convert the intended pixel size to a world radius by
inverting the perspective projection at a reference camera distance, and
recompute on resize. Do **not** promote many nodes to meshes — the whole point
of the Points batch is to avoid thousands of draw calls.

## Colour management: the trap that makes everything look wrong

This is the single most common source of "the colours are off and I can't say
why" in a Three.js app, and it is invisible until you compare against a
built-in material.

Three.js colour-manages `THREE.Color`: setting one from a hex string stores
**linear** working-space values. Built-in materials (`MeshStandardMaterial`,
`LineBasicMaterial`, …) encode that back to sRGB on output for you. A raw
`ShaderMaterial` receives none of that processing, so whatever you assign to
`gl_FragColor` is written straight into an sRGB framebuffer. Linear values
interpreted as sRGB render **darker and more saturated** than the palette says.

End every custom fragment shader that outputs a colour with:

```glsl
gl_FragColor = vec4(colour, alpha);
#include <colorspace_fragment>
```

The tell that you have this bug: a hero node drawn with a built-in material
looks right while the sprites around it — same nominal hex — look muddy.

Two corollaries worth internalising:

- **Author uniforms as colours, not raw numbers.** A hand-tuned
  `vec3(0.22, 0.62, 0.92)` was tuned against the *un*-converted output, so
  adding the conversion changes it. Store it as `new THREE.Color("#389eeb")`
  instead and the round trip lands on the same pixels — authored in sRGB,
  converted to linear on assignment, encoded back on output.
- **Never convert a shader that encodes data.** GPU picking writes an integer
  id as RGB. Colour-space encoding that value corrupts the id and breaks
  hover and click. Leave those shaders raw and put a comment saying why, or
  someone will later "fix" them.

## Interaction: picking

### Screen-space quadtree (CPU)

Raycasting against thousands of points every pointer move is wasteful. Project
visible node world-positions to 2D and index them in a `d3.quadtree`. Cache it;
rebuild only when a `projectionDirty` flag is set (camera `change`, resize,
filter/selection change) — not every frame. Throttle `pointermove` to one
`requestAnimationFrame` in flight, look up with `quadtree.find(x, y, radius)`,
and distinguish click from drag by squared pointer delta before treating a
pointerup as a selection.

A screen-space index is flat, so it cannot know the globe is in the way: nodes
on the far hemisphere project onto the visible disc and steal the hover. The
patch is a horizon test — for a sphere of radius R at the origin, a point is
camera-facing when `dot(p, cameraPosition) >= R²`. Be aware this is exact only
for points *on* the sphere. Markers sitting slightly above it (radius 1.014
over a radius-1 globe) can legitimately peek over the limb, and the analytic
test culls them: in one 3,265-airport scene it made **159 visible airports
(11.5%) unhoverable**.

### GPU picking (preferred when picking must be exact)

Render the pickable objects into a small offscreen target with their index
encoded as colour, then read back the pixels under the cursor. The depth buffer
resolves occlusion for free, so nothing behind the planet can ever be picked
and the horizon test disappears along with the quadtree, the reprojection, and
the staleness heuristic.

- Use `camera.setViewOffset(fullW, fullH, x-r, y-r, size, size)` to render only
  the region under the cursor at 1:1 scale, so `gl_PointSize` — and therefore
  the hit area — matches what is on screen. Clear it with `clearViewOffset()`.
- Reserve id 0 for "nothing", so encode `index + 1`.
- Sample a small square rather than one pixel and take the hit nearest the
  centre; that reproduces the forgiving radius of a quadtree search.
- Give the pick pass its own view of the scene: hide decorative objects that
  would write colour (stars, graticule, route lines, atmosphere), and swap the
  occluding body to a material that writes depth but emits id 0. Record every
  swap and restore it afterwards.
- Gate pickability with a per-vertex `aPickable` attribute rather than an alpha
  threshold, so changing how dimmed items *look* can never silently change what
  is *clickable*.
- Work in device pixels (multiply by `renderer.getPixelRatio()`), and remember
  `readRenderTargetPixels` returns rows bottom-up.

Camera focus animations (fly-to) lerp `camera.position` and `controls.target`
with a cubic ease, and collapse to instant when reduced motion is requested.

## Theming: two looks from one scene

Treat a theme as data, not as branching code. Define every look in one module
so a change to one is visible against the other, and so scene modules hold no
colour literals:

```js
export const THEMES = {
  dark:  { fog, node: {hub, mid, low}, route: {...}, routeBlending,
           routeOpacity, globe, grid, atmosphere, stars, terrain, borders, lights },
  light: { /* same shape */ },
};
```

Then push the palette through the bridge you already have — put `theme` in the
same `options` object that carries filters, so `apiRef.current.update(options,
selected)` re-themes the scene by the existing path. Build both materials up
front and **swap** them (`globe.material = terrainMaterial`) rather than
rebuilding the scene; a theme toggle should not cost a WebGL context.

What actually has to change between a dark and a light scene — more than
beginners expect:

- **Blending.** `AdditiveBlending` makes overlapping routes glow against black
  and washes out to white against a light ground. Light themes need
  `NormalBlending`, darker inks, and slightly lower opacity so arcs read as
  lines drawn on a map rather than light emitted in space.
- **Mark colours must invert, not just shift.** The least-connected nodes are
  near-white on dark and near-black on light. A palette that only re-tints hues
  will leave your smallest marks invisible.
- **Fog colour and density** must track the page background, or the globe fades
  into the wrong colour at its edges.
- **Backdrop elements** that only make sense in one theme (a star field) get
  hidden rather than recoloured.
- **Lights.** A hemisphere light tuned for a dark scene leaves a light map
  muddy; raise ambient and lower the directional contribution.

Keep a colourblind-safe palette (Okabe–Ito: sky `#56b4e9`, orange `#e69f00`,
green `#009e73`, blue `#0072b2`, vermillion `#d55e00`, purple `#cc79a7`, yellow
`#f0e442`) and derive the light theme from the *same* hues rather than
introducing new ones, so the two themes read as one system. Re-weight for
contrast: an accent that works on black (sky blue) usually needs to drop to the
darker blue on white.

### Theme selection and the DOM half

Mirror the scene theme onto the document so CSS follows the same switch:

- Resolve the initial theme once, before first paint: an explicit stored choice
  wins, otherwise `matchMedia("(prefers-color-scheme: light)")`.
- Write `document.documentElement.dataset.theme` and define
  `:root[data-theme="light"]` overrides for your CSS custom properties, plus
  `color-scheme` so form controls and scrollbars follow.
- Persist only *explicit* choices, and keep listening to the media query while
  none is stored so the app tracks the OS until the user overrides it. Wrap
  `localStorage` in try/catch — it throws in some privacy modes.

## Map surfaces: terrain from packed rasters

To shade a globe with real topography while staying on-palette, sample data in
a shader and colour it yourself rather than wrapping a photographic texture.

**Pack the channels.** One RGB texture carries everything: elevation in red,
a land/water mask in green. One fetch, one sampler, no alignment risk between
layers.

**Do not derive water from elevation.** Public elevation rasters routinely
clamp everything at or below sea level to zero, so thresholding the elevation
channel floods the Netherlands, the Bangladesh delta, and every other low-lying
coast — while a genuine ocean trench reads identically to Amsterdam. Build the
mask from vector coastlines (`world-atlas` land polygons) with lake polygons
punched out. Sanity-check it by area: weight each row by `cos(latitude)` and
compare against Earth's ~29% land. Unweighted pixel counts run high because
equirectangular projection inflates the poles.

**Colour with a hypsometric ramp** through your existing palette — bluish green
lowlands, yellow, orange, vermillion, bleaching to near-white at the peaks.
Interpolate with `smoothstep` between stops.

**Hillshade from the height gradient.** Sample four neighbours and build a
slope normal. Rescale the east-west component by `sin(v * PI)` (the cosine of
latitude): longitude texels converge at the poles, and without the correction
polar terrain shears into streaks.

**Tie shore tints to the coastline, not to height.** Keying a pale shore colour
to low elevation turns entire continental basins — the Amazon, the Congo, the
Gangetic plain — into what looks like water, because they sit only metres above
sea level. Key it to the softened edge of the mask instead.

Set the data texture's `colorSpace` to `NoColorSpace`: it carries measurements,
not colour, and must not be decoded.

### Preparing the raster offline

Sphere UVs from `THREE.SphereGeometry` are already equirectangular and line up
with a standard `(lon+180)/360`, `(90-lat)/180` image if you leave the default
`flipY`. Two failure modes dominate when rasterising vector polygons into that
image, and both produce obvious artifacts:

- **Antimeridian wrap.** A ring crossing 180° jumps +179 → −179 and rasterises
  as a band straight across the whole map. Unwrap longitudes so they stay
  continuous, then draw each polygon at three horizontal offsets (−W, 0, +W)
  and let the canvas clip.
- **Polar rings.** A ring whose unwrapped longitude spans a full turn encircles
  the globe and is closed by the *edge of the map*, not by a segment back to
  its start. Antarctica is the real case: it runs −180 → +180 along ~−84° and
  the cap below is implied. Close it explicitly over the pole or the cap gets
  sliced off.

## Vector overlays and level of detail

Draw country outlines as `LineSegments` tessellated along great circles —
subdivide any segment longer than a few degrees, or long borders cut through
the sphere. Place them just above the surface and *below* your markers (e.g.
1.0025 over a radius-1 globe with nodes at 1.014) so they neither z-fight nor
occlude a node.

Load coarse geometry first (110m) and fetch finer geometry (50m) only when the
camera moves inside a distance threshold, keeping both built so the swap is a
geometry assignment. Guard the fetch with a "loading" flag or a camera that
lingers near the threshold will request the file repeatedly.

Theme-specific assets — the terrain texture, the border files — should be
fetched lazily on first use of the theme that needs them, so a session that
never leaves dark mode never downloads them.

## Verifying visual work you cannot screenshot

Headless environments, hidden panes, and paused `requestAnimationFrame` all
make "just look at it" unavailable. These techniques are more rigorous than
eyeballing anyway, and worth using even when you *can* see the canvas:

- **Drive the renderer by hand.** If the rAF loop is paused, call
  `renderer.render(scene, camera)` directly, then `gl.readPixels`. Before
  projecting anything yourself, force `camera.updateMatrixWorld(true)` and
  recompute `matrixWorldInverse` — otherwise your maths uses last frame's
  matrices while the renderer uses this frame's, and the two disagree.
- **Sample rendered pixels at known coordinates.** Point the camera at a known
  lat/lon, render, read the centre pixel, and compare against the palette hex.
  This catches colour-space bugs, ramp errors, and mask errors precisely, and
  it tells you *which* stage is wrong.
- **Isolate by toggling.** Hide layers one at a time to find what is covering
  what. A single keypress that hides the globe answers "is this occlusion or
  shading?" faster than any amount of reasoning.
- **Count what reached the GPU.** `renderer.info.render` (`calls`, `points`,
  `lines`) separates "not drawn" from "drawn but invisible" — completely
  different bugs with the same symptom.
- **Render the same maths offline.** Reimplementing a shader's ramp in
  NumPy over the real texture produces a full-map preview in seconds and
  reveals data artifacts (stripes, missing caps) that are nearly impossible to
  spot on a sphere.
- **Instrument the running app early.** When a symptom cannot be reproduced
  locally, a small debug HUD behind a query flag — camera position, pixel
  ratio, draw counts, buffer stats — beats another round of reading the source.
  Reading code is weak evidence next to a measurement from the machine where
  the bug actually happens.

## Performance patterns (apply throughout)

- Clamp `renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75))` up front.
- **Adaptive quality:** sample recent frame deltas in the animate loop; if the
  rolling mean exceeds ~24ms (sub-40fps) while pixel ratio is still >1, drop it
  to 1 and resize. A runtime fallback beats a fixed low cap.
- Use a `ResizeObserver` on the host element, not window resize, and pass
  `renderer.setSize(w, h, false)` (don't touch CSS size).
- Avoid per-node allocation in update paths: write `color.r/g/b` into the
  buffer directly instead of `buffer.set(color.toArray(), i*3)`, which
  allocates an array per node per update.
- Memoize expensive derived React values (`useMemo` for search results,
  filtered counts) and stabilize effect deps with `useCallback`.
- **Dispose everything on unmount:** cancel the rAF and any idle callback,
  disconnect the ResizeObserver, remove all DOM listeners, `scene.traverse`
  disposing every geometry/material, dispose render targets, then
  `renderer.dispose()` and remove the canvas. WebGL buffers are not
  garbage-collected like JS objects — leaks here crash long sessions.

## Accessibility patterns (apply throughout)

- Skip-link to jump past the header into the controls.
- Give the canvas `role="img"` + a descriptive `aria-label` summarizing
  node/edge counts, and `tabindex=0` with a visible `:focus-visible` outline.
- A visually-hidden `aria-live="polite"` region announces the
  selected/hovered entity (name, location, degree) — the visual tooltip alone
  is invisible to screen readers.
- Keyboard shortcuts (`/` focus search, `Esc` clear, `R` reset camera) must
  guard against firing while an `<input>` is focused.
- Toggles use `aria-pressed` / `aria-expanded`; listboxes use
  `role="listbox"`/`role="option"`; every slider/select has a label.
- Respect `prefers-reduced-motion` at **both** layers: a JS check (via
  `matchMedia`, read once) to disable camera-fly easing and auto-rotate, and a
  CSS block flattening transitions/animations.
- Check contrast in **both** themes. A palette validated on black can fail on
  white, particularly for thin route lines and small marks.

## Stack & authoring notes

- Vite + `@vitejs/plugin-react`. Pin `vite` to a range the React plugin's
  peer-deps actually list (a too-new `vite` major triggers `ERESOLVE`).
- Write real **JSX**, not htm tagged templates — it unlocks `jsx-a11y` and
  `react-hooks/exhaustive-deps` lint, better stack traces, and IDE tooling,
  with no runtime cost.
- Import Three.js addons from `three/addons/...` (e.g. `OrbitControls`).
- Serve large data assets from `public/` and `fetch` them at runtime with
  `import.meta.env.BASE_URL` so they survive a non-root deployment base;
  provide a drag-and-drop file fallback for when local `fetch` is blocked.
- Geographic vectors: `world-atlas` (TopoJSON countries/land) plus Natural
  Earth GeoJSON for lakes. Decoding TopoJSON is ~30 lines (delta-decode arcs,
  apply the quantisation transform, stitch rings, negative index means
  reversed) if you would rather not add `topojson-client`.

## Common traps

- Rebuilding the scene on every option change (keep the setup effect keyed on
  `data` only).
- One mesh per node (batch into Points/LineSegments/InstancedMesh).
- Raycasting for hover at scale (project + quadtree, or GPU picking).
- Re-rendering React on animation frames (drive the loop with refs).
- Forgetting to dispose GPU resources (leaks accumulate per remount).
- Using `depthWrite: true` on additive-blended transparent lines (causes
  ordering artifacts — keep it false for the glow layers).
- Marking a solid body `transparent: true` (it joins the transparent queue and
  paints over your markers).
- Omitting `#include <colorspace_fragment>` from custom shaders (everything
  renders dark), or adding it to a shader that encodes ids (picking breaks).
- Reusing additive blending in a light theme (arcs wash out to white).
- Deriving a water mask by thresholding elevation (low-lying land floods).
- Rasterising lon/lat polygons without unwrapping the antimeridian (stripes
  across the map) or closing polar rings (missing ice caps).
