# Picking: resolving a cursor to one of thousands of GPU-drawn marks

Read this when implementing or debugging hover/click over a `THREE.Points`
batch — including "the tooltip fires on things I can't see", "hovering empty
space selects something", or deciding between the CPU and GPU approaches.

## Why not raycasting

Raycasting against thousands of points on every pointer move is wasteful and
scales badly. Both approaches below beat it.

## Screen-space quadtree (CPU)

Project visible nodes to 2D, index them in a `d3.quadtree`, and rebuild only
when a `projectionDirty` flag is set (camera `change` event, resize, filter or
selection change) — never per frame. Throttle `pointermove` to one
`requestAnimationFrame` in flight. Look up with `quadtree.find(x, y, radius)`.
Separate click from drag by squared pointer delta before treating a `pointerup`
as a selection.

Cancel any pending throttled frame on `pointerleave`. A `pointermove` scheduled
just before the pointer exits will otherwise run afterwards with stale
coordinates and re-show a tooltip that was correctly dismissed.

### The occlusion problem, and the limits of the analytic fix

A screen-space index is flat, so it cannot know the globe is in the way:
far-side nodes project onto the visible disc and steal the hover. Symptom:
hovering empty ocean shows an airport on the other side of the planet, and
clicking spins the globe somewhere you never pointed.

The patch is a horizon test. For a sphere of radius R at the origin, a point
faces the camera when:

```
dot(p, cameraPosition) >= R²
```

This is exact only for points *on* the sphere. Markers sitting slightly above
it — airports at radius 1.014 over a radius-1 globe — can legitimately peek
over the limb, and the analytic test culls them. Measured against exact
segment/sphere intersection in one 3,265-airport scene: 1,380 airports were
genuinely visible but only 1,221 passed the test, leaving **159 (11.5%)
visible and unhoverable**.

If that matters, use GPU picking, where the depth buffer answers the question
exactly.

## GPU picking (preferred when picking must be exact)

Render the pickable objects into a small offscreen target with each index
encoded as colour, then read back the pixels under the cursor. The depth buffer
resolves occlusion for free: nothing behind the planet can be picked, and the
horizon test disappears along with the quadtree, the reprojection and the
staleness heuristic.

Cost is one small render pass plus a `readPixels` stall per pointer sample,
which is affordable at rAF rates.

### Implementation notes that matter

- **Render only the region under the cursor**, at 1:1 scale:
  `camera.setViewOffset(fullW, fullH, x - r, y - r, size, size)`, then
  `camera.clearViewOffset()` afterwards. At 1:1 the `gl_PointSize` — and
  therefore the hit area — matches what is on screen.
- **Reserve id 0 for "nothing"**: encode `index + 1`.
- **Sample a small square**, not one pixel, and take the hit nearest the
  centre. That reproduces the forgiving radius of a quadtree search; a
  radius of ~8 CSS px is a good default.
- **Give the pass its own view of the scene.** Hide decorative objects that
  would write colour (stars, graticule, route lines, atmosphere), and swap the
  occluding body to a material that writes depth but emits id 0. Record every
  swap and restore it afterwards. If marks are drawn across more than one
  object (see focus/context emphasis), hide *all* of them — the one you miss
  keeps writing colour into the pick buffer.
- **Gate pickability with a per-vertex `aPickable` attribute**, not an alpha
  threshold. Otherwise changing how dimmed items *look* silently changes what
  is *clickable*.
- **Work in device pixels** (`renderer.getPixelRatio()`), and remember
  `readRenderTargetPixels` returns rows bottom-up.
- **Never colour-manage the pick shaders.** They encode an integer id, not a
  colour; `#include <colorspace_fragment>` there corrupts the id and breaks
  hover and click. Comment this, or someone will later "fix" it.

### Verifying it

Do not trust a visual check. Compute a node's projected screen position
yourself, call the pick function at that coordinate, and assert it returns that
exact index. Then test the two negatives: a truly occluded node (verify with
segment/sphere intersection, not the horizon approximation) must return null,
and empty sky must return null.

Force `camera.updateMatrixWorld(true)` and recompute `matrixWorldInverse`
before projecting, or your maths uses last frame's matrices while the renderer
uses this frame's and the two disagree — which looks exactly like a picking
bug.
