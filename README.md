# OpenFlights 3D Network

OpenFlights 3D Network is an interactive portfolio visualization of a historical airport-route dataset. It lets portfolio reviewers and other readers explore the same network geographically on a 3D globe and structurally as a force-directed graph. It is not a live aviation service, flight tracker, schedule, or source of current route intelligence.

**Published project URL:** [https://unguisdraconis.github.io/openflights/](https://unguisdraconis.github.io/openflights/)

The repository is configured to deploy to that GitHub Pages URL. Its current availability has not been independently verified as part of this documentation-only update.

## What the project demonstrates

- A React and Vite interface around an imperative Three.js scene.
- D3-based CSV parsing, aggregation, and force-directed layout.
- Index-aligned typed arrays for geographic and topology positions.
- Custom shaders for airport sprites, atmosphere, GPU picking, and light-theme terrain relief.
- Data indexing, undirected route deduplication, route weighting, filtering, and airport selection.
- Two coordinated views: a geographic globe and a force-directed topology view.
- Search, camera orbit and zoom, airport selection, route-density and hub-degree controls, domestic/international scope, country filtering, theme switching, and optional globe rotation.
- Keyboard shortcuts, live-region updates, visible focus styles, reduced-motion handling, and labelled controls.
- A GitHub Actions workflow configured for GitHub Pages.

These are project-specific implementation choices, not claims of production operation, current aviation coverage, accessibility conformance, or broad expertise beyond the evidence in this repository.

## How it works

### Data loading and transformation

`src/data/source.js` first requests the bundled `public/airports.dat` and `public/routes.dat` files using Vite's configured base path. If either bundled request fails, it tries OpenFlights files exposed through jsDelivr at the pinned upstream commit `e3bc6dedbcceb8b7b74248a00dcd6207254da6bd`. The load screen also supports manually supplying the two data files.

`src/data/parse.js` uses D3 to parse the CSV rows. It:

1. Rejects malformed airport rows or rows without finite coordinates.
2. Indexes airports by OpenFlights numeric ID and by available IATA or ICAO code.
3. Resolves route endpoints by numeric ID first and code second.
4. Excludes unresolved endpoints and self-links.
5. Converts route records into deduplicated, undirected airport pairs.
6. Counts route records and distinct carrier codes for each pair and classifies the pair as domestic or international from the airport country fields.
7. Removes airports without a surviving link, calculates each remaining airport's unique-neighbor degree, and aggregates airport counts by country.
8. Scores each link as `weight * 20 + sqrt(source.degree * target.degree)` and sorts links in descending order before density and other filters are applied.

The resulting network describes records in the historical source data. A route record is not evidence of a current flight, timetable, frequency, fare, or operational service.

### Layout, rendering, and interaction

Geographic positions are projected from latitude and longitude onto a unit sphere. The topology view uses a stopped D3 force simulation that is advanced manually for up to 85 ticks, then rescales the result into a fixed viewport and adds a small degree-based z offset. The work is scheduled in idle batches but still runs on the main thread; this scheduling does not guarantee that an individual simulation tick is non-blocking.

The Three.js scene is created once per loaded dataset outside React's render cycle. Airport positions and visual attributes use shared buffer geometry and mutable attributes. Route buffers are rebuilt when filters or selection change and are rendered as a context object plus, when applicable, a separate selected-airport focus object. Focused routes use opacity, draw order, and a small globe-view lift in addition to color.

Pointer selection uses an offscreen GPU ID pass rather than raycasting or a D3 quadtree. The globe participates in the depth pass so far-side airports are occluded, and pointer sampling is limited to one requested animation frame at a time. Selecting an airport updates React state and, in globe view, requests an eased camera move unless reduced motion was detected at startup.

The render loop samples frame times and can lower the renderer's pixel ratio after sustained slower frames. Scene teardown cancels the primary render frame, disconnects the resize observer, removes registered interaction listeners, and disposes the scene resources owned by the main scene modules. This is deliberately narrower than claiming that every possible asynchronous resource is cancelled or disposed.

## Architecture

| Area | Important files | Responsibility |
| --- | --- | --- |
| Application state | `src/App.jsx` | Loading state, filters, selection, view/theme state, global shortcuts, and UI/scene coordination |
| Data acquisition | `src/data/source.js` | Base-aware bundled data loading, pinned upstream fallback, timeout handling, and source selection |
| Data model | `src/data/parse.js` | Parsing, identifier indexes, endpoint resolution, deduplication, counts, degree, score, and country aggregation |
| Coordinates and layout | `src/data/geometry.js`, `src/data/positions.js`, `src/data/useGraphLayout.js` | Globe projection, route arcs, position tables, and force layout |
| Scene composition | `src/scene/GlobeScene.jsx` | Camera, renderer, controls, scene lifecycle, adaptive pixel ratio, and React integration |
| Visual layers | `src/scene/createGlobe.js`, `src/scene/terrainMaterial.js`, `src/scene/borders.js`, `src/scene/nodeSprites.js`, `src/scene/routeLines.js` | Globe, terrain shader, borders, airport sprites, and context/focus route geometry |
| Picking | `src/scene/picking.js` | Depth-aware offscreen GPU airport picking |
| Interface | `src/ui/*`, `src/App.css`, `src/theme.js` | Controls, search, loading fallback, tooltips, responsive styling, themes, focus, and reduced-motion styles |
| Static assets | `public/airports.dat`, `public/routes.dat`, `public/geo/*` | Bundled network data, country geometry, and packed terrain/mask texture |
| Build and deployment | `vite.config.js`, `.github/workflows/deploy.yml` | `/openflights/` production base path and GitHub Pages workflow |

## Data sources, provenance, and licensing

### Airport and route network

The application contains information from the [OpenFlights Airport, Airline and Route Databases](https://openflights.org/data.php), whose source repository is [jpatokal/openflights](https://github.com/jpatokal/openflights). OpenFlights makes the database available under the [Open Database License (ODbL) 1.0](https://opendatacommons.org/licenses/odbl/1-0/); individual database contents are subject to the [Database Contents License (DbCL) 1.0](https://opendatacommons.org/licenses/dbcl/1-0/).

OpenFlights states that its route data was last updated in June 2014. The bundled files must therefore be treated as historical reference data rather than a representation of current airports or services. OpenFlights documents additional upstream contributors and caveats on its data page; those source-specific limitations continue to apply.

The application prefers the copies committed under `public/` and has a network fallback pinned to an immutable [OpenFlights source commit](https://github.com/jpatokal/openflights/commit/e3bc6dedbcceb8b7b74248a00dcd6207254da6bd). The repository does not document when the bundled copies were obtained or establish that they exactly match the pinned fallback.

### Terrain relief

The packed terrain texture uses elevation from NASA's SRTM + RAMP II + GTOPO30 composite, distributed as [SRTM RAMP2 topography](https://neo.gsfc.nasa.gov/view.php?datasetId=SRTM_RAMP2_TOPO). The source has no ocean bathymetry for this use; the shader colors water separately.

The texture's land/water channel was derived from Natural Earth land geometry delivered through `world-atlas`, with separately obtained Natural Earth lake polygons removed. The repository contains the resulting texture, but not the generator, original source files, or enough metadata to reproduce it independently.

The project generates the hypsometric palette and hillshade in `src/scene/terrainMaterial.js`; it does not use sourced color imagery. NASA's [media usage guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) should be consulted for reuse of NASA material.

### Land, borders, and lake mask

- Land and country geometry: [Natural Earth](https://www.naturalearthdata.com/) via the [`world-atlas`](https://github.com/topojson/world-atlas) TopoJSON package. Natural Earth identifies its data as public domain; `world-atlas` is distributed under the [ISC License](https://github.com/topojson/world-atlas/blob/master/LICENSE).
- Lake subtraction mask: Natural Earth 1:50m Physical, Lakes + Reservoirs (`ne_50m_lakes`), v5.x, obtained as direct GeoJSON. The exact minor version and retrieval date are not recorded. See the [Natural Earth 1:50m lakes page](https://www.naturalearthdata.com/downloads/50m-physical-vectors/50m-lakes-reservoirs/) and [terms of use](https://www.naturalearthdata.com/about/terms-of-use/).

This repository does not currently declare a project-level license for its own code and other original material. The source notices above document third-party inputs; they do not license the project as a whole or replace the cited license terms.

## Accessibility decisions and limits

Repository evidence shows:

- A skip link to the controls and visible `:focus-visible` styles for buttons, inputs, selects, and the canvas.
- Native buttons, inputs, and selects with labels, plus `aria-pressed` and `aria-expanded` state on relevant controls.
- A focusable canvas with `role="img"` and a dataset-derived accessible label.
- Polite live regions for topology-layout status and the current airport details.
- Global shortcuts: `/` focuses airport search, `Esc` clears selection, and `R` resets the camera. `/` and `R` are suppressed while an `input` element has focus.
- CSS motion reduction and startup-time JavaScript detection that disables camera-fly easing and automatic rotation when `prefers-reduced-motion: reduce` is active.
- Selected-route emphasis that supplements color with opacity, draw order, and, on the globe, a small elevation offset.

These are implemented behaviors, not a WCAG conformance claim. Manual keyboard, screen-reader, zoom/reflow, contrast, pointer, and reduced-motion testing is still required. Known follow-up areas include an equivalent keyboard path for airport selection on the canvas, focus management for pinned airport details, complete combobox/listbox semantics for search, preventing visually closed mobile controls from remaining reachable, and ensuring domestic/international route meaning is not communicated by color alone.

## Local setup

The existing lockfile is intended for reproducible npm installation. The locked Vite version requires Node.js `^20.19.0 || >=22.12.0`; this is narrower than the current `package.json` declaration of Node.js `>=18`.

```bash
npm ci
npm run dev
```

Vite prints the local development URL. The data loader resolves bundled assets through `import.meta.env.BASE_URL`, so development and `/openflights/` production paths use the same loading code.

To create and inspect a production build after installing dependencies:

```bash
npm run build
npm run preview
```

The repository currently has no lint, automated test, type-check, accessibility-test, or broken-link-check script.

## Deployment configuration

`.github/workflows/deploy.yml` is configured to run on pushes to `master` or by manual dispatch. It checks out the repository, uses Node.js 20, runs `npm ci` and `npm run build`, uploads `dist`, and deploys that artifact with GitHub Pages Actions. `vite.config.js` sets the production base to `/openflights/`.

The separate `npm run deploy` script builds and publishes `dist` with `gh-pages`; the repository does not document which path should be treated as canonical. No deployment was run for this README update.

## Limitations and next steps

- The airport and route records are historical and are unsuitable for navigation, booking, schedules, operational decisions, or claims about today's network.
- The force simulation runs on the main thread; idle scheduling does not eliminate long individual ticks.
- The in-app phrase “Global aviation intelligence” can imply currency that the historical dataset does not provide and should be aligned in a later UI-copy change.
- The accessibility behaviors above require manual verification, and the known keyboard, focus, semantics, mobile-drawer, and non-color communication gaps remain open.
- No automated lint, test, type-check, accessibility, or link-check safeguards are configured.
- The Node.js engine declaration does not match the locked Vite requirement.
- The GitHub Actions and `gh-pages` deployment paths have not been consolidated or documented as alternatives.
- Terrain creation is not fully reproducible from repository contents because the source inputs and generation process are not included.
- A project-level license and a README screenshot with meaningful alternative text are not currently present.

## AI assistance

This project was developed with substantial AI assistance used as a guided copilot throughout. Anthropic Claude created the initial scaffold and contributed much of the implementation; OpenAI Codex later supported refactoring, debugging, documentation, accessibility work, and further visualization refinements.

My role was to set the project’s direction—exploring the performance limits of a combined D3, React, and Three.js interactive visualization—and guide development through repeated testing and feedback. Much of the work required trial and error: the AI tools could not independently observe or verify interaction behavior, rendering artifacts, hemisphere and occlusion errors, or the practical effect of performance changes. I identified those issues in the running application, described the observed behavior, evaluated proposed adjustments, and continued the iteration until the results were acceptable.

AI performed substantial code generation and technical problem-solving; I provided the goals, experiential evaluation, feedback, and final judgment. This project should therefore be understood as human-directed, AI-assisted work rather than either wholly hand-authored or autonomously AI-generated.
