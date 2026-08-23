# Theming a WebGL scene, and passing contrast in both themes

Read this when adding a light or dark mode to a canvas app, when a theme toggle
misbehaves, or when a contrast check (WAVE, axe, WCAG) fails after a theme was
introduced.

## Structure: a theme is data

Define both looks in one module so a change to one is visible against the
other, and so scene modules hold no colour literals:

```js
export const THEMES = {
  dark:  { fog, fogDensity, node: {hub, mid, low}, nodeSelected, nodeConnected,
           route: {intl, domestic, selected}, routeBlending, routeOpacity,
           routeContextOpacity, routeFocusOpacity, globe, grid, atmosphere,
           stars, terrain, borders, lights },
  light: { /* same shape */ },
};
```

Push the palette through the bridge that already exists: put `theme` in the
same `options` object that carries filters, so `update(options, selected)`
re-themes the scene by the path state already travels. Build both materials up
front and **swap** them (`globe.material = terrainMaterial`) rather than
rebuilding the scene — a theme toggle should not cost a WebGL context.

Fetch theme-specific assets lazily on first use of the theme that needs them,
so a session that never leaves dark mode never downloads the light-mode
texture or border files.

## What actually differs between dark and light

More than hue. Each of these is a separate correction:

- **Blending.** `AdditiveBlending` makes overlapping routes glow against black
  and washes out to white against a light ground. Light mode needs
  `NormalBlending`, darker inks and lower opacity, so arcs read as lines drawn
  on a map rather than light emitted in space.
- **Mark colours must invert, not shift.** The least-connected nodes are
  near-white on dark and near-black on light. A palette that only re-tints hues
  leaves your smallest marks invisible.
- **Fog colour and density** must track the page background, or the globe fades
  into the wrong colour at its edges.
- **Backdrop elements** that only make sense in one theme (a star field) get
  hidden, not recoloured.
- **Lights.** A hemisphere light tuned for a dark scene leaves a light map
  muddy; raise ambient and lower the directional contribution.

Keep a colourblind-safe palette (Okabe–Ito: sky `#56b4e9`, orange `#e69f00`,
green `#009e73`, blue `#0072b2`, vermillion `#d55e00`, purple `#cc79a7`, yellow
`#f0e442`) and derive the light theme from the *same* hues rather than
introducing new ones, so the two read as one system. Re-weight for contrast: an
accent that works on black (sky blue) usually has to drop to the darker blue on
white.

## The DOM half

Resolve the initial theme once, before first paint: an explicit stored choice
wins, otherwise `matchMedia("(prefers-color-scheme: light)")`. Write
`document.documentElement.dataset.theme`, define `:root[data-theme="light"]`
overrides for your custom properties, and set `color-scheme` so form controls
and scrollbars follow.

Persist only *explicit* choices, and keep listening to the media query while
none is stored, so the app tracks the OS until the user overrides it. Wrap
`localStorage` in try/catch — it throws in some privacy modes.

## Two traps that will cost you an afternoon

### Variables only help if the stylesheet consumes them

Adding a light palette is not the same as theming the app. If rules hardcode
`background: #11131a`, text flips to the new palette while surfaces stay dark
— dark-on-dark, and a contrast checker reports *hundreds* of failures at once.

Before declaring a theme done, grep the stylesheet for colour literals outside
the `:root` blocks and route every one through a variable. Gradients, overlay
panels, inputs, selects and segmented controls are the usual offenders because
they were written before a second theme existed.

### Never transition a property whose value comes from a theme custom property

A transitioned property pins the value it had when the transition was declared.
Swap the theme and the control keeps showing the previous theme's colours
**indefinitely** — not a brief animation glitch but a permanent wrong colour
that reads as a contrast failure.

Things that do *not* fix it:

- Setting the colour explicitly (`color: var(--text)`) instead of inheriting.
- Suppressing transitions for the frame of the swap via a temporary attribute.

What fixes it is removing those properties from the transition list. Transition
`transform` and leave colour, background and border instant — which is the
right behaviour for a theme change anyway.

Diagnosis: set `transition: none` on a stuck element. If it snaps to the
correct colour immediately, this is your bug. Note the freeze affects
`background` and `border-color` too, not just text — and a stale *background*
is reported by a text-contrast checker as a text failure, which sends you
chasing the wrong property.

Suppressing transitions across the swap is still worth doing as polish, so the
interface changes at once instead of cross-fading property by property. Just do
not mistake it for the fix.

## Auditing contrast

Do not eyeball this, and do not check only the theme you developed in.

Walk the DOM, take each element's computed `color`, composite the effective
background through translucent ancestors (a `rgba()` panel over a gradient is
not the colour a naive check reads), and compute the WCAG ratio against 4.5 —
3.0 for large text (≥24px, or ≥18.66px bold).

Run it three times: on load, after a live theme toggle, and after toggling
back. Those states differ, and the toggle path is exactly where stale-value
bugs surface. A load-only audit will pass while the app is broken in use.

Two limits to state plainly when reporting results:

- A text-only audit misses non-text contrast — icon strokes, legend swatches,
  focus indicators — which WCAG 1.4.11 also covers.
- Unstyled links fall back to the browser default `#0000ee`, which fails on
  both themes. Anything relying on the UA stylesheet needs an explicit colour.

Check the loading screen too. It renders before the main UI and is easy to
forget; hold it open artificially if it resolves too fast to inspect.
