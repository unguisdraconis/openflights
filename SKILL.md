---
name: webgl-globe-network
description: >-
  Build high-performance interactive 3D globe and network-graph
  visualizations with React, Three.js (WebGL), and D3, including light/dark
  theming, hypsometric terrain, country borders, correct colour management in
  custom shaders, and accessible contrast in both themes. Use when the task
  involves rendering thousands of geographic points or graph nodes on a
  canvas, drawing great-circle arc "flight paths" on a globe, a force-directed
  topology view, hover/click picking over many points, adding a light or dark
  mode to a WebGL scene, shading a globe from elevation data, making a
  selected item stand out in a dense field, or wiring an imperative Three.js
  scene into a React component without fighting the render loop. Use it as
  well whenever colours come out darker than the palette says, when a light
  background makes glowing additive lines wash out, when a theme toggle leaves
  controls showing the previous theme's colours, when a WAVE or WCAG contrast
  check fails after adding a theme, when a canvas must resize as surrounding
  chrome collapses, or when a dataset has to be fetched from an upstream
  source with a local fallback. Triggers: "globe", "3D map", "flight network",
  "network graph in three.js", "point cloud", "great-circle arcs",
  "force-directed layout", "instanced/points rendering", "canvas
  visualization performance", "d3 quadtree picking", "GPU picking", "webgl in
  react", "dark mode", "light mode", "theme toggle", "hypsometric",
  "topography", "terrain shader", "hillshade", "country borders", "TopoJSON",
  "colour space", "sRGB", "washed out colours", "contrast", "WCAG", "WAVE",
  "collapse sidebar", "highlight selection".
---

# WebGL Globe & Network Visualization

A field guide for building an interactive 3D globe / force-directed network on
a WebGL canvas driven by React, Three.js, and D3. It encodes the patterns that
keep such an app fast, accessible and maintainable. Follow the architecture
below rather than reinventing it — most of these choices exist to avoid a
specific trap, and several of them are things that look right in the source and
are wrong on screen.

## Reference files

This file carries the architecture and the traps worth knowing before you write
anything. Four companions hold the depth; read the relevant one when you reach
that work rather than up front.

| File | Read it when |
|---|---|
| `references/picking.md` | Implementing or debugging hover/click over a Points batch; choosing CPU quadtree vs GPU picking; "the tooltip fires on things I can't see" |
| `references/theming-and-contrast.md` | Adding light/dark mode; a theme toggle misbehaving; any WCAG/WAVE contrast failure |
| `references/terrain-and-vectors.md` | Shading a globe from elevation data; drawing coastlines or borders; preparing raster/vector assets |
| `references/verification.md` | You cannot see the canvas, or you are about to claim a rendering fix works |

## Core architectural rule: React owns state, Three.js owns the frame

Keep the 60fps render loop entirely outside React's reconciliation. React
manages UI state (filters, selection, search, tooltips) and passes it *down*
into the scene; it must never re-render on animation ticks.

- Build the whole Three.js scene **once** in a single `useEffect` keyed on the
  parsed `data`, and tear it down completely in that effect's cleanup. The
  WebGL context is expensive — do not rebuild it when options or selection
  change.
- Expose an imperative handle via a ref (e.g.
  `apiRef.current = { update, focusNode, resetCamera, resize }`). Secondary
  effects keyed on `[options, selected, ...]` call `apiRef.current.update(...)`
  to push new state in. This is the bridge between declarative React and
  imperative Three.js.
- The `requestAnimationFrame` loop only reads mutable closure variables and
  calls `controls.update()` + `renderer.render()`. It never touches React state
  setters.
- Read the latest selection inside event handlers through a
  `selectedRef.current = selected` mirror ref, so listeners registered once at
  setup always see current state without re-registering.

### Keep the scene modular, but not as components

Once the setup effect passes a few hundred lines, split it into plain
imperative factories — `createGlobe(scene, palette)`, `createNodeSprites(...)`,
`createRouteLines(...)`, `createPicking({...})` — each returning the objects it
owns plus `update` and `dispose`. The effect becomes a short composition root.

Resist turning these into React components (the react-three-fiber shape). That
puts the scene back under the reconciler and forfeits the main benefit of the
architecture. Factories give you file boundaries without reconciliation.

### Hover and focus belong in CSS, not React state

React's event system is delegated and synthetic, and it does not behave the way
the prop names suggest. `onMouseEnter` is implemented over delegated
`mouseover`/`mouseout` with `relatedTarget` logic, so a dispatched native
`mouseenter` never reaches it — which makes such handlers awkward to drive from
a test as well as easy to get subtly wrong in use.

For anything that opens on hover or focus, express it in CSS and keep React for
state that genuinely persists:

```css
.title-wrap:hover .popover,
.title-wrap:focus-within .popover,
.popover[data-open="true"] { visibility: visible; opacity: 1; }
```

`:focus-within` covers keyboard users for free, scoping to a wrapper keeps the
popover open while the pointer travels onto it to read, and the whole thing
applies synchronously with no re-render. Leave React holding only the pinned
state a click toggles.

The same asynchrony bites when reading back: React state updates do not apply
in the tick you triggered them, so a click followed immediately by a read of
the DOM or the scene shows the *previous* value. That is a measurement
artifact, not a bug in the wiring — verify in a later tick.

### Keep render state off your domain objects

It is tempting to write `node.geo = vector3` and `node.topology = vector3` onto
parsed entities. Prefer index-aligned typed arrays beside the graph:

```
positions.geo      Float32Array(n * 3)   // built once
positions.topology Float32Array(n * 3)   // filled by the layout
```

Ownership stays clear — the parser owns domain objects, each renderer owns its
own table — and it is measurably faster: switching views becomes one
`buffer.set(table)` memcpy instead of `n` separate `Vector3.toArray()` copies.
Freezing parsed entities in development (`Object.freeze`) turns an accidental
write into an immediate throw rather than a slow drift.

## Data pipeline

Parse raw CSV (OpenFlights `.dat` is headerless CSV) with `d3.csvParseRows`.
Build the graph in a pure function returning `{ nodes, links, countries }`:

- Index entities two ways (numeric id **and** code) so cross-references resolve
  in O(1) regardless of which identifier a row uses.
- Deduplicate edges into undirected links keyed by a **sorted** pair of ids;
  accumulate `weight` and per-edge sets on first creation.
- Drop unusable rows early (missing coords, self-loops, unresolved endpoints).
- Compute `degree` from deduplicated neighbor sets, not the raw edge list.
- **Exclude orphan nodes** so the graph only contains connected entities.
- Score links (`weight*20 + sqrt(srcDeg*tgtDeg)`) and sort descending. A
  density slider then takes a **prefix** of the sorted array, always keeping the
  most significant edges rather than a random subset.

Run parsing off the initial paint (`setTimeout(..., 30)` or a worker) and show a
loader; parsing a large network blocks the main thread.

### Sourcing the data

Check whether the "API" you are reaching for exists. Many open datasets —
OpenFlights among them — publish flat files in a repository and have no
endpoint at all. Fetching those files *is* the integration.

Prefer a fallback chain: bundled files first (same origin, fast, offline,
deterministic), then upstream, then a drag-and-drop picker. Reading a static
dataset over the network on every cold load buys little and puts a third party
in your startup path.

- **Pin an immutable ref, not a branch.** A CDN serves a pinned commit with
  `immutable` and a year-long cache where a moving ref gets days, and the
  dataset cannot change under the app without a code change.
- **Reject HTML that arrives with a 200.** Dev servers and static hosts answer
  a missing path with `index.html`. A naive `response.ok` check hands markup to
  the CSV parser, which "succeeds" into an empty graph. Test the first bytes
  for `<!doctype`/`<html>`.
- **Abort in flight on cleanup.** Wire an `AbortController` to the effect
  cleanup. React StrictMode invokes effects twice in development; without this
  you download everything twice.
- Report what was actually tried when every source fails; a bare loader cannot
  distinguish a missing file from a blocked network.

## Layout math

**Globe positions.** Convert lat/lon to a unit-sphere Vector3:
```
phi   = (90 - lat) * PI/180
theta = (lon + 180) * PI/180
v = (-sin(phi)cos(theta), cos(phi), sin(phi)sin(theta)) * radius
```

**Great-circle arcs.** Interpolate spherically between endpoints, lifting the
midpoint outward by a sine-shaped altitude (`1.012 + sin(PI*t) * altitude`).
Scale segment count with arc length (7 normally, 11 for arcs > ~1.25 rad) so
long arcs stay smooth without over-tessellating short ones.

**Force-directed topology.** Use `d3-forceSimulation` with link + many-body +
centering + weak x/y forces, but **do not** run it on d3's timer. Call `.stop()`
and drive `simulation.tick()` manually inside `requestIdleCallback` batches, up
to a cap (~85 ticks). A `forceSimulation` starts itself on construction via
`d3-timer`'s own rAF loop, so without `.stop()` you get two animation loops
competing for the frame budget. On convergence, rescale extents into a fixed box
with `d3.scaleLinear` and add a small z-offset from `log1p(degree)` so hubs sit
forward.

Know what this costs before tuning anything else: on a 3,265-node /
18,972-link graph the simulation is **~5.4s of main-thread work, ~63ms per
tick** — roughly seventy times the cost of loading the data it runs on. Note
also that idle chunking does not save you when a single tick exceeds an idle
slice (~50ms): every tick overruns, so the "yield politely" design degrades
into sustained contention with the render loop.

Deferring it until the topology view is opened is the obvious fix and is
usually the wrong one. The work costs the same either way; running it eagerly
spends it while the user is busy with the default view, while deferring spends
it exactly when they are waiting for the thing they just asked for. Move a cost
only if you are moving it somewhere nobody is waiting — otherwise make it
cheaper (a worker, fewer ticks, a link subset) or leave it where it is.

## The scene: batch everything into as few draw calls as possible

Draw-call count, not GPU fill rate, is the usual bottleneck at these node
counts. **Never create one mesh per node.**

- **All nodes = one `THREE.Points`** with a single `BufferGeometry` and custom
  shaders. Store per-node `position`, `color`, `aSize`, `aAlpha` as attribute
  buffers. On filter/selection change, mutate the typed arrays in place and set
  `attribute.needsUpdate = true`.
  - Vertex shader: `gl_PointSize = clamp(aSize * (260.0/-mv.z), 2.0, 18.0)` for
    free distance attenuation with min/max clamp.
  - Fragment shader: soft circular dot via `smoothstep(.5,.25,d)` on
    `gl_PointCoord`, `discard` near-transparent fragments. No texture needed.
- **All edges = one `THREE.LineSegments`**, rebuilt into fresh buffers when
  filters change. Pre-count segments, allocate once, dispose the old
  geometry/material before replacing.
- Effects that need no geometry (atmosphere rim, fog) are cheap
  `ShaderMaterial` shells, not post-processing passes.

### Solid bodies must be opaque

A planet drawn with `transparent: true` (even at `opacity: 0.985`) joins the
transparency queue, where it is sorted and blended against the node sprites
instead of being laid down first as a depth-writing occluder. The symptom is
distinctive: sprites vanish everywhere inside the globe's silhouette and survive
only in the thin ring where they project past the limb — the one place they are
not painted over.

If a body is meant to be solid, set `transparent: false` and delete any
`opacity` beside it; opacity is ignored on an opaque material and misleads the
next reader.

### Hybrid "hero" mesh (optional emphasis)

A single node (the selection, or the top-degree hub) can render as a real lit
`SphereGeometry` + `MeshStandardMaterial` — **one** extra draw call, buying real
lighting and depth occlusion. Hide that node's sprite (alpha 0) but keep its
index pickable. A mesh has no `gl_PointSize` trick, so invert the perspective
projection to convert the intended pixel size to a world radius, and recompute
on resize.

## Emphasis: focus and context

Selecting something in a dense field is a rendering problem, not a colour
choice. Tinting one route differently inside a single `LineSegments` of ~19,000
arcs does almost nothing: it draws at the same opacity, interleaved among
everything else, and under additive blending the pile-up of unrelated lines is
brighter than any single line in it. **Line weight is not available** — WebGL
ignores `linewidth` on essentially every platform — so opacity and draw order
have to carry the emphasis.

Split the marks into two objects:

- **Context**: everything else, dropped to a much lower opacity *only while a
  selection exists* (e.g. 0.29 → 0.08). Restore it when nothing is selected.
- **Focus**: the selected item's marks, at high opacity (~0.95) and a higher
  `renderOrder` so they draw on top.

On a globe, give focused arcs a small extra midpoint lift so they ride clear of
the tangle rather than z-fighting through it; endpoints stay anchored because
altitude is shaped by `sin(pi*t)`.

Measure the result rather than eyeballing it (see `references/verification.md`):
toggling the focus object and diffing pixels took one scene's selected routes
from mean contrast 72 to 230 — **3.2x** — while pixel coverage barely moved,
which is exactly the difference between "drawn" and "visible".

Any pass that hides the routes (the GPU pick pass) must hide *both* objects, or
the one it misses keeps writing colour.

## Colour management: the trap that makes everything look wrong

This is the most common source of "the colours are off and I can't say why" in a
Three.js app, and it is invisible until you compare against a built-in material.

Three.js colour-manages `THREE.Color`: setting one from hex stores **linear**
working-space values. Built-in materials (`MeshStandardMaterial`,
`LineBasicMaterial`, …) encode that back to sRGB on output for you. A raw
`ShaderMaterial` receives none of that, so whatever you assign to `gl_FragColor`
goes straight into an sRGB framebuffer. Linear values read as sRGB render
**darker and more saturated** than the palette says.

End every custom fragment shader that outputs a colour with:

```glsl
gl_FragColor = vec4(colour, alpha);
#include <colorspace_fragment>
```

The tell: a hero node drawn with a built-in material looks right while the
sprites around it — same nominal hex — look muddy.

Two corollaries:

- **Author uniforms as colours, not raw numbers.** A hand-tuned
  `vec3(0.22, 0.62, 0.92)` was tuned against the *un*-converted output, so
  adding the conversion changes it. Store `new THREE.Color("#389eeb")` and the
  round trip lands on the same pixels, by a correct route.
- **Never convert a shader that encodes data.** GPU picking writes an integer id
  as RGB; encoding it for sRGB corrupts the id and breaks hover and click.

## Interaction: picking

Raycasting thousands of points per pointer move is wasteful. Two workable
approaches, covered in `references/picking.md`:

- **Screen-space `d3.quadtree`** over projected positions, rebuilt on a dirty
  flag rather than per frame. Cheap, but flat: it cannot know the globe occludes
  far-side nodes, so it needs a horizon test — and that analytic test is exact
  only for points *on* the sphere, so markers sitting above the surface get
  over-culled (11.5% of airports in one measured scene).
- **GPU picking**, rendering indices as colour into a small offscreen target.
  The depth buffer resolves occlusion exactly, which deletes the quadtree, the
  reprojection and the horizon test together.

Read the reference before implementing either; the details that matter
(`setViewOffset`, id 0 reserved, per-vertex `aPickable`, restoring swapped
materials) are all places where a plausible implementation is subtly wrong.

Camera fly-to animations lerp `camera.position` and `controls.target` with a
cubic ease, collapsing to instant under reduced motion.

## Theming

Treat a theme as data, not branching code: define both looks in one module so
scene modules hold no colour literals, push the palette through the `options`
object that already carries filters, and **swap** prebuilt materials rather than
rebuilding the scene.

More differs between dark and light than hue — blending mode, inverted mark
colours, fog, backdrop elements, light intensities. Keep a colourblind-safe
palette (Okabe–Ito) and derive light from the same hues so both read as one
system.

Two traps that will cost you an afternoon, both detailed in
`references/theming-and-contrast.md`:

- **Variables only help if the stylesheet consumes them.** Rules that hardcode
  `background: #11131a` leave surfaces dark while text flips to the new palette
  — dark-on-dark, and hundreds of contrast failures at once.
- **Never transition a property whose value comes from a theme custom
  property.** It freezes on the old theme's colour permanently. Setting the
  colour explicitly does not help; nor does suppressing transitions during the
  swap. Remove those properties from the transition list.

Read that reference before shipping a theme, and audit contrast in **both**
themes and after a live toggle, not just on load.

## Layout: collapsible chrome around a canvas

Letting the user collapse a sidebar is mostly CSS, with two traps:

- **`display: none` removes a grid item.** Setting the collapsed column to `0`
  and hiding the sidebar makes auto-placement drop the canvas *into* that empty
  zero-width track, so the canvas gets no width at all. Switch the grid to a
  single column when collapsed.
- **Resize the renderer explicitly.** A `ResizeObserver` is right for genuine
  window resizes, but for a layout change the app makes itself, call `resize()`
  directly from an effect on the toggle. Browsers throttle observer delivery,
  and in a non-compositing context it may not fire at all — leaving the CSS size
  correct while the drawing buffer stays stale and the globe renders stretched.

Prefer removing collapsed controls (`display: none`) over merely hiding them, so
they leave the tab order and the accessibility tree rather than becoming
invisible tab stops.

## Verifying visual work

When you cannot see the canvas — headless, hidden pane, paused rAF — measure
instead of reasoning. `references/verification.md` covers driving the renderer
by hand, sampling rendered pixels at known coordinates, diffing with a layer
toggled, and reading `renderer.info.render` to separate "not drawn" from "drawn
but invisible".

Three environment effects produce convincing false conclusions and are worth
remembering even without reading the file: **React state is asynchronous** (a
click and a read in the same tick shows the previous state), **rAF and
observers may not run** in a non-compositing page (prove it with a control
observer before blaming the code), and **a dev server can serve a stale module**
(fetch what the server is actually serving before debugging code that looks
correct).

If you have asserted a root cause twice without a measurement, stop and
instrument.

## Performance patterns (apply throughout)

**Profile the whole startup before optimising the obvious suspect.** In this
project the suspected culprit was the 3.4 MB of data being fetched; measured,
it was 79ms — **1.4%** of startup — while the force layout nobody suspected was
5,376ms. Time every phase (fetch, parse, geometry build, layout, texture
decode) and let the numbers pick the target. A plausible story about which part
is slow is worth nothing against a measurement.

- Clamp `renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75))` up front.
- **Adaptive quality:** sample recent frame deltas; if the rolling mean exceeds
  ~24ms while pixel ratio is still >1, drop it to 1 and resize.
- Use a `ResizeObserver` on the host element, not window resize, and
  `renderer.setSize(w, h, false)` so CSS size is left alone.
- Avoid per-node allocation in update paths: write `color.r/g/b` into the buffer
  directly instead of `buffer.set(color.toArray(), i*3)`.
- Memoize derived React values and stabilize effect deps with `useCallback`.
- **Dispose everything on unmount:** cancel the rAF and idle callbacks,
  disconnect observers, remove DOM listeners, `scene.traverse` disposing every
  geometry/material, dispose render targets, then `renderer.dispose()` and
  remove the canvas. WebGL buffers are not garbage-collected like JS objects.

## Accessibility patterns (apply throughout)

- Skip-link past the header into the controls.
- Give the canvas `role="img"` + a descriptive `aria-label` summarizing
  node/edge counts, and `tabindex=0` with a visible `:focus-visible` outline.
- A visually-hidden `aria-live="polite"` region announces the selected/hovered
  entity — the visual tooltip alone is invisible to screen readers.
- Keyboard shortcuts (`/` search, `Esc` clear, `R` reset) must not fire while an
  `<input>` is focused.
- Toggles use `aria-pressed` / `aria-expanded` (plus `aria-controls` when they
  govern a region); every slider and select has a label.
- **Choose disclosure over tooltip for anything meant to be read.** A tooltip
  suits a short label; content of a sentence or more needs a `<button
  aria-expanded aria-controls>` and a panel that stays open, with `hidden` on
  the panel so it leaves the tab order and the accessibility tree when closed.
  Put explanatory content where users already look for it — provenance next to
  the attribution, not attached to a page title, which nobody expects to be
  interactive.
- **Announce loading states.** During startup lead with what is happening in a
  `role="status" aria-live="polite"` region rather than showing file-picker
  instructions, which read as an error when nothing is wrong. Mark a progress
  bar `aria-hidden`; an `aria-label` on a bare `div` is not announced.
- Respect `prefers-reduced-motion` at **both** layers: a JS `matchMedia` check
  to disable camera easing and auto-rotate, and a CSS block flattening
  transitions.
- Audit contrast programmatically in both themes — see
  `references/theming-and-contrast.md`. A text-only audit misses non-text
  contrast, and unstyled links fall back to `#0000ee`, which fails on both.

## Stack & authoring notes

- Vite + `@vitejs/plugin-react`. Pin `vite` to a range the React plugin's
  peer-deps list (a too-new major triggers `ERESOLVE`).
- Write real **JSX**, not htm tagged templates — it unlocks `jsx-a11y` and
  `react-hooks/exhaustive-deps` lint and better stack traces, at no runtime
  cost.
- Import Three.js addons from `three/addons/...`.
- Serve large assets from `public/` and fetch with `import.meta.env.BASE_URL` so
  they survive a non-root deployment base.
- Geographic vectors: `world-atlas` (TopoJSON countries/land) plus Natural Earth
  GeoJSON for lakes.

## Common traps

- Rebuilding the scene on every option change (key the setup effect on `data`).
- One mesh per node (batch into Points/LineSegments/InstancedMesh).
- Raycasting for hover at scale (project + quadtree, or GPU picking).
- Re-rendering React on animation frames (drive the loop with refs).
- Forgetting to dispose GPU resources.
- `depthWrite: true` on additive-blended transparent lines (ordering artifacts).
- Marking a solid body `transparent: true` (it paints over your markers).
- Omitting `#include <colorspace_fragment>` from custom shaders (everything
  renders dark), or adding it to a shader that encodes ids (picking breaks).
- Reusing additive blending in a light theme (arcs wash out to white).
- Expecting colour alone to make a selection visible in a dense field.
- Adding theme variables while rules still hardcode colours (dark-on-dark).
- Transitioning a property whose value comes from a theme custom property (it
  freezes on the old theme's colour).
- Deriving a water mask by thresholding elevation (low-lying land floods).
- Rasterising lon/lat polygons without unwrapping the antimeridian (stripes) or
  closing polar rings (missing ice caps).
- Collapsing a grid column to `0` while `display: none` removes the item (the
  canvas lands in the empty track and gets no width).
- Trusting a `ResizeObserver` for a layout change you made yourself.
- Driving hover or focus UI from React state instead of CSS `:hover` /
  `:focus-within` (see below — the synthetic events do not behave as they look).
- Deferring expensive work to a moment when the user is waiting for it.
- Assuming the biggest asset is the slowest part of startup.
