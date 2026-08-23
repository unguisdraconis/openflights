# Verifying visual work you cannot screenshot

Read this when you cannot see the canvas — headless runs, a hidden preview
pane, a paused animation loop — or whenever you are about to claim a rendering
fix works. These techniques are more rigorous than eyeballing anyway, and
several bugs in this project were only found because a measurement contradicted
a reasonable-sounding explanation.

## The techniques

**Drive the renderer by hand.** If the rAF loop is paused, call
`renderer.render(scene, camera)` directly, then `gl.readPixels`. Before
projecting anything yourself, force `camera.updateMatrixWorld(true)` and
recompute `matrixWorldInverse` — otherwise your maths uses last frame's
matrices while the renderer uses this frame's, and the disagreement looks
exactly like a picking or projection bug.

**Sample rendered pixels at known coordinates.** Point the camera at a known
lat/lon, render, read the centre pixel, and compare against the palette hex.
This catches colour-space errors, ramp errors and mask errors precisely, and
tells you *which* stage is wrong rather than that something is.

**Diff with a layer toggled.** Render with an object hidden and again with it
shown, then count differing pixels and mean delta. This is the honest way to
answer "is this more visible now?" — and it distinguishes coverage from
contrast, which are different fixes. A change can leave pixel count flat while
tripling contrast; that is a win, and only a diff shows it.

**Isolate by toggling.** Hide layers one at a time to find what covers what. A
single keypress that hides the globe answers "occlusion or shading?" faster
than any amount of reasoning about draw order.

**Count what reached the GPU.** `renderer.info.render` (`calls`, `points`,
`lines`) separates "not drawn" from "drawn but invisible" — different bugs with
an identical symptom. If the geometry is being submitted at full opacity and
you still cannot see it, stop looking at culling and start looking at what is
painted over it.

**Render the same maths offline.** Reimplementing a shader's ramp in NumPy over
the real texture produces a full-map preview in seconds and reveals data
artifacts — stripes, missing polar caps — that are nearly impossible to spot
wrapped on a sphere.

**Instrument the running app early.** When a symptom cannot be reproduced
locally, a small debug HUD behind a query flag — camera position, pixel ratio,
draw counts, buffer stats, alpha histogram — beats another round of reading
source. Reading code is weak evidence next to a measurement from the machine
where the bug actually happens. If you have asserted a root cause twice without
a measurement, stop and instrument.

## Environment effects that will mislead you

Each of these has produced a convincing false conclusion:

**React state is asynchronous.** Clicking a control and reading the scene in
the same tick shows the *previous* state. The scene looks unchanged and you
conclude the wiring is broken. Measure in a later call.

**rAF and observers may not run.** In a hidden or non-compositing page,
`requestAnimationFrame` is paused, so the render loop never advances,
`renderer.info.render.frame` stays 0, and anything scheduled on a frame — a
cleanup, a LOD check — never fires. `ResizeObserver` may never deliver either.

Before concluding the app is broken, prove which it is: install a control
`ResizeObserver` on the same element, trigger a real size change, and see
whether *it* fires. If a fresh observer sees nothing, the environment is the
problem, not the code.

This also argues for a design choice: for a layout change the app makes itself,
call `resize()` directly from an effect rather than waiting on an observer.

**A dev server can serve a stale module.** Watchers occasionally miss a file,
and the browser then runs code that does not match disk — producing errors that
make no sense against the source you are reading (`Cannot read properties of
undefined` for a key that is plainly there). Fetch the module the server is
actually serving and grep it. If it disagrees with disk, clear the bundler
cache and restart before debugging further.

Accumulated hot-module reloads can also leave a page in a state that no clean
load would produce. When behaviour is inexplicable, hard-reload once before
investigating.

## Reporting honestly

Say which theme, viewport and state you measured in, and name what you did not
check. "0 contrast failures across 270 text nodes in both themes, text only —
non-text contrast not covered" is a useful claim. "Accessibility fixed" is not.

If a verification could not be completed — the pane would not composite, the
observer would not fire — say so rather than implying the check passed.
