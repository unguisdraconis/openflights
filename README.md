# OpenFlights 3D Network

OpenFlights 3D Network is an interactive portfolio visualization of a historical airport-route dataset. It is not a live aviation service, flight tracker, schedule, or source of current route intelligence.

**Project URL:** [https://unguisdraconis.github.io/openflights/](https://unguisdraconis.github.io/openflights/)

![Interactive OpenFlights historical route network shown as a 3D globe with network controls and selected route connections.](docs/images/openflights-network-overview.png)

## Project features

- A React and Vite interface around an interactive 3D globe rendered with Three.js .
- D3-based CSV parsing, aggregation, and force-directed layout.
- Index-aligned typed arrays for geographic and topology positions.
- Custom shaders for airport sprites, atmosphere, GPU picking, and light-theme terrain relief.
- Data indexing, undirected route deduplication, route weighting, filtering, and airport selection.
- Two coordinated views: a geographic globe and a force-directed topology view.
- Search, camera orbit and zoom, airport selection, route-density and hub-degree controls, domestic/international scope, country filtering, theme switching, and optional globe rotation.
- Keyboard shortcuts, live-region updates, visible focus styles, reduced-motion handling, and labelled controls.

These are project-specific implementation choices.

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

Pointer selection uses an offscreen GPU ID pass rather than raycasting or a D3 quadtree. The globe participates in the depth pass so far-side airports are occluded, and pointer sampling is limited to one requested animation frame at a time. Selecting an airport updates React state and, in globe view, normally requests a 650 ms eased camera move. The reduced-motion preference is observed reactively during the session: airport focus still occurs, but the camera repositions immediately instead of using animated travel. Manual orbit and zoom remain available. Preference changes affect future focus actions without requiring a reload and do not cancel a camera flight that is already running.

The render loop samples frame times and can lower the renderer's pixel ratio after sustained slower frames. Scene teardown cancels the primary render frame, disconnects the resize observer, removes registered interaction listeners, and disposes the scene resources owned by the main scene modules. This is deliberately narrower than claiming that every possible asynchronous resource is cancelled or disposed.

## Architecture

| Area                   | Important files                                                                                                                           | Responsibility                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Application state      | `src/App.jsx`                                                                                                                             | Loading state, filters, selection, view/theme state, global shortcuts, and UI/scene coordination                |
| Data acquisition       | `src/data/source.js`                                                                                                                      | Base-aware bundled data loading, pinned upstream fallback, timeout handling, and source selection               |
| Data model             | `src/data/parse.js`                                                                                                                       | Parsing, identifier indexes, endpoint resolution, deduplication, counts, degree, score, and country aggregation |
| Coordinates and layout | `src/data/geometry.js`, `src/data/positions.js`, `src/data/useGraphLayout.js`                                                             | Globe projection, route arcs, position tables, and force layout                                                 |
| Scene composition      | `src/scene/GlobeScene.jsx`                                                                                                                | Camera, renderer, controls, scene lifecycle, adaptive pixel ratio, and React integration                        |
| Visual layers          | `src/scene/createGlobe.js`, `src/scene/terrainMaterial.js`, `src/scene/borders.js`, `src/scene/nodeSprites.js`, `src/scene/routeLines.js` | Globe, terrain shader, borders, airport sprites, and context/focus route geometry                               |
| Picking                | `src/scene/picking.js`                                                                                                                    | Depth-aware offscreen GPU airport picking                                                                       |
| Interface              | `src/ui/*`, `src/App.css`, `src/theme.js`                                                                                                 | Controls, search, loading fallback, tooltips, responsive styling, themes, focus, and reduced-motion styles      |
| Static assets          | `public/airports.dat`, `public/routes.dat`, `public/geo/*`                                                                                | Bundled network data, country geometry, and packed terrain/mask texture                                         |
| Build and deployment   | `vite.config.js`, `package.json`, `.github/workflows/ci.yml`                                                                              | `/openflights/` production base path, validation-only CI, and manual `gh-pages` publication                     |

### Performance

The bundle is intentionally substantial, and the production build currently reports Vite's advisory for a JavaScript chunk larger than 500 kB. This is an accepted tradeoff for an interactive visualization built with React, Three.js, and D3, rather than an optimization target in itself. The implementation emphasizes low-cost runtime behavior through shared buffer geometry, GPU-based picking, bounded route rendering, adaptive pixel ratio, and preservation of long-lived scene resources.

## Data sources, provenance, and licensing

### Airport and route network

The application contains information from the [OpenFlights Airport, Airline and Route Databases](https://openflights.org/data.php), whose source repository is [jpatokal/openflights](https://github.com/jpatokal/openflights). OpenFlights makes the database available under the [Open Database License (ODbL) 1.0](https://opendatacommons.org/licenses/odbl/1-0/); individual database contents are subject to the [Database Contents License (DbCL) 1.0](https://opendatacommons.org/licenses/dbcl/1-0/).

OpenFlights states that its route data was last updated in June 2014. The bundled files must therefore be treated as historical reference data rather than a representation of current airports or services. OpenFlights documents additional upstream contributors and caveats on its data page; those source-specific limitations continue to apply.

The application prefers the copies committed under `public/` and has a network fallback pinned to an immutable [OpenFlights source commit](https://github.com/jpatokal/openflights/commit/e3bc6dedbcceb8b7b74248a00dcd6207254da6bd). The repository does not document when the bundled copies were obtained or establish that they exactly match the pinned fallback.

### Terrain relief

The packed terrain texture uses elevation from NASA's SRTM + RAMP II + GTOPO30 composite, distributed as [SRTM RAMP2 topography](https://neo.gsfc.nasa.gov/view.php?datasetId=SRTM_RAMP2_TOPO). This project does not use bathymetry, and the shader colors water separately.

The texture's land/water channel was derived from Natural Earth land geometry delivered through `world-atlas`, with separately obtained Natural Earth lake polygons removed. The repository contains the resulting texture, but not the generator, original source files, or enough metadata to reproduce it independently.

The project generates the hypsometric palette and hillshade in `src/scene/terrainMaterial.js`; it does not use sourced color imagery. NASA's [media usage guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/) should be consulted for reuse of NASA material.

### Land, borders, and lake mask

- Land and country geometry: [Natural Earth](https://www.naturalearthdata.com/) via the [`world-atlas`](https://github.com/topojson/world-atlas) TopoJSON package. Natural Earth identifies its data as public domain; `world-atlas` is distributed under the [ISC License](https://github.com/topojson/world-atlas/blob/master/LICENSE).
- Lake subtraction mask: Natural Earth 1:50m Physical, Lakes + Reservoirs (`ne_50m_lakes`), v5.x, obtained as direct GeoJSON. The exact minor version and retrieval date are not recorded. See the [Natural Earth 1:50m lakes page](https://www.naturalearthdata.com/downloads/50m-physical-vectors/50m-lakes-reservoirs/) and [terms of use](https://www.naturalearthdata.com/about/terms-of-use/).

## Licensing

Project-controlled software and associated project documentation are available under the [MIT License](LICENSE), only to the extent Jeremiah King holds or is authorized to license the applicable rights.

The project-level MIT License does not supersede third-party licenses or terms. Bundled data, static assets, dependencies, Vite-derived template material, generated output, and other third-party content remain subject to their own licenses, terms, notices, or public-domain status. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md) for the relevant third-party licensing and provenance record.

## Accessibility decisions and limits

Repository evidence shows:

- A skip link to the controls and visible `:focus-visible` styles for buttons, inputs, selects, and the canvas.
- Native buttons, inputs, and selects with labels, plus `aria-pressed` and `aria-expanded` state on relevant controls.
- A focusable canvas with `role="img"`, a dataset-derived accessible label, and a separate keyboard description. Individual GPU-rendered airport marks are not direct tab stops; `/` moves keyboard users to Search airports, where native result buttons select an airport.
- Search and pointer selection share the same camera-focus path, including reactive reduced-motion behavior.
- Polite status/live-region updates for topology-layout progress, airport-search results, and current airport details.
- Global shortcuts: `/` focuses airport search, `Esc` clears airport selection, and `R` resets the camera. `/` and `R` yield to focused interactive/editable controls and browser-modified shortcut contexts.
- CSS motion reduction and reactive JavaScript handling for `prefers-reduced-motion: reduce`. Automatic globe rotation is suspended while reduced motion is active without changing the user's auto-rotate preference, and resumes when reduced motion is removed if that preference remains enabled.
- Domestic routes use solid lines and international routes use dashed lines, with color retained as a secondary category cue. Selected-route emphasis adds color, opacity, draw order, and, on the globe, a small elevation offset while retaining the underlying solid or dashed category pattern.

These are implemented behaviors, not a WCAG conformance claim. Manual keyboard, screen-reader, zoom/reflow, contrast, pointer, and reduced-motion testing is still required. Direct structured airport exploration from the canvas remains a follow-up area.

## Local setup

The supported project runtime is Node.js 24.12 or later within the Node 24 release line. The repository was validated locally with Node.js 24.14.0 and npm 11.9.0 for a clean `npm ci`, production build, development-server startup, and production-preview startup. That runtime validation did not include manual browser verification of rendered interactions, WebGL behavior, accessibility, or complete application functionality.

```bash
npm ci
npm run lint
npm test
npm run dev
```

Vite prints the local development URL. The data loader resolves bundled assets through `import.meta.env.BASE_URL`, so development and `/openflights/` production paths use the same loading code.

To create and inspect a production build after installing dependencies:

```bash
npm run build
npm run preview
```

Reproducible linting is configured through `npm run lint`. Deterministic unit tests for core data parsing, geometry, and position-table behavior run with Node's built-in test runner via `npm test`. The repository does not yet have automated component, browser, accessibility, or end-to-end tests. No automated type-check or broken-link-check script is configured.

## Continuous integration and deployment

GitHub Actions validates commits. Publishing is manual through `npm run deploy`.

`.github/workflows/ci.yml` runs on pull requests targeting `master`, pushes to `master`, and manual dispatch. Its `Validate` job checks out the repository, uses Node.js 24 with npm caching, runs `npm ci`, lint, tests, and a production build. GitHub Actions does not deploy the site or upload a Pages artifact. `Validate` is a suitable required status check if branch protection is configured; this repository does not establish whether branch protection is currently enabled.

Before publishing, the operator should confirm that the working tree is clean, local `master` is current with the intended remote state, and the relevant CI validation passed:

```bash
git switch master
git status --short
npm ci
npm run deploy
```

The npm lifecycle runs `predeploy` automatically before `deploy`. Here, `predeploy` runs `npm run validate`, which runs lint, tests, and the production build exactly once; `deploy` then publishes the resulting `dist` directory to the `gh-pages` branch. A lint, test, or build failure prevents publication, while a `gh-pages` failure is reported after successful local validation.

This local gate does not verify that the current branch is `master`, that the working tree is clean, that local `master` matches `origin/master`, or that GitHub CI is green. Those remain operator release-policy checks.

In the GitHub repository UI, Pages should be configured with **Source: Deploy from a branch**, **Branch: `gh-pages`**, and **Folder: `/ (root)`**. These settings are external to the repository and have not been independently verified here. `vite.config.js` retains the `/openflights/` production base path.

## Limitations and next steps

- The airport and route records are historical and are unsuitable for navigation, booking, schedules, operational decisions, or claims about today's network.
- The force simulation runs on the main thread; idle scheduling does not eliminate long individual ticks.
- Accessibility work has addressed the repository's source-backed keyboard, focus, semantics, mobile-drawer, reduced-motion, non-color, and contrast issues. Broader assistive-technology, forced-colors, zoom/reflow, touch, and cross-browser validation remains outstanding.
- Automated tests currently cover only deterministic core data parsing, geometry, and position-table behavior; component, browser, accessibility, and end-to-end tests are not configured. No automated type-check or broken-link-check safeguards are configured.
- Terrain creation is not fully reproducible from repository contents because the source inputs and generation process are not included.
- A README screenshot with meaningful alternative text is not currently present.

## AI assistance

This project was developed with substantial AI assistance used as a guided copilot throughout. Anthropic Claude created the initial scaffold and contributed much of the implementation; OpenAI Codex later supported refactoring, debugging, documentation, accessibility work, and further visualization refinements.

My role was to set the project’s direction—exploring the performance limits of a combined D3, React, and Three.js interactive visualization—and guide development through repeated testing and feedback. Much of the work required trial and error: the AI tools could not independently observe or verify interaction behavior, rendering artifacts, hemisphere and occlusion errors, or the practical effect of performance changes. I identified those issues in the running application, described the observed behavior, evaluated proposed adjustments, and continued the iteration until the results were acceptable.

AI performed substantial code generation and technical problem-solving; I provided the goals, experiential evaluation, feedback, and final judgment. This project should therefore be understood as human-directed, AI-assisted work rather than either wholly hand-authored or autonomously AI-generated.
