# Third-Party Notices

This file documents third-party data and static assets redistributed with OpenFlights 3D Network. Those materials remain subject to their respective source licenses, terms, or public-domain status. Any future license for original project code or documentation will not supersede those terms.

This is a source and notice record, not a complete restatement of every applicable term. Consult the linked source and license texts for the full terms.

## OpenFlights database material

Affected files:

- `public/airports.dat`
- `public/routes.dat`

Source and terms:

- OpenFlights database documentation: <https://openflights.org/data.php>
- OpenFlights repository: <https://github.com/jpatokal/openflights>
- Open Database License (ODbL) 1.0: <https://opendatacommons.org/licenses/odbl/1-0/>
- Database Contents License (DbCL) 1.0: <https://opendatacommons.org/licenses/dbcl/1-0/>

OpenFlights states that its databases are made available under the ODbL 1.0 and that individual database contents are licensed under the DbCL 1.0. Database licensing is separate from the licensing of this application's source code.

Attribution statement:

> OpenFlights 3D Network displays information from the OpenFlights Airport and Route Databases. The databases are made available under the Open Database License (ODbL) 1.0, and rights in individual contents are licensed under the Database Contents License (DbCL) 1.0.

The ODbL includes notice, attribution, and share-alike conditions that can apply differently to public conveyance or use of the Database, Derivative Databases, and Produced Works. Consult the full license text before redistribution or reuse. This notice does not classify this application's output as either a Produced Work or a Derivative Database.

OpenFlights reports that route-data updates ceased in June 2014. The bundled data is therefore historical and non-current and is not suitable for navigation, operational flight planning, or current schedule information. The repository does not establish the files' acquisition dates or exact equivalence to a particular upstream revision.

## Natural Earth data

Affected material and uses:

- Natural Earth country geometry underlying `public/geo/countries-110m.json` and `public/geo/countries-50m.json`, delivered through `world-atlas`.
- Natural Earth land geometry used to construct the land/water mask for `public/geo/terrain-4096.png`, delivered through `world-atlas`.
- Natural Earth 1:50m Physical — Lakes + Reservoirs (`ne_50m_lakes`) polygons used to remove lakes from that land mask. The repository documentation identifies the source only as version 5.x; the exact minor version and retrieval date are unresolved.

Source and terms:

- Natural Earth terms of use: <https://www.naturalearthdata.com/about/terms-of-use/>
- Natural Earth 1:50m Lakes + Reservoirs: <https://www.naturalearthdata.com/downloads/50m-physical-vectors/50m-lakes-reservoirs/>

Natural Earth states that its maps and data are in the public domain and that permission is granted to use them for any purpose. Attribution is not required by Natural Earth, but this notice retains the provenance of the data used by the project.

## world-atlas 2.0.2

Affected files:

- `public/geo/countries-110m.json`
- `public/geo/countries-50m.json`

The repository's locked dependency version is `world-atlas` 2.0.2. The two files above have been verified as exact matches to the corresponding files distributed in that installed package. Natural Earth's underlying geography is public-domain data, while the `world-atlas` package and its distributed artifacts carry the following ISC license notice.

Source and license:

- `world-atlas` repository: <https://github.com/topojson/world-atlas>
- Upstream license file: <https://github.com/topojson/world-atlas/blob/master/LICENSE>

The complete notice from `world-atlas` 2.0.2 is preserved below:

```text
Copyright 2013-2019 Michael Bostock

Permission to use, copy, modify, and/or distribute this software for any purpose
with or without fee is hereby granted, provided that the above copyright notice
and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
THIS SOFTWARE.
```

## Packed terrain texture

Affected file:

- `public/geo/terrain-4096.png`

Verified source lineage and processing:

- Elevation derives from NASA's SRTM RAMP2 global topography, a composite of Shuttle Radar Topography Mission (SRTM) data from NASA/JPL and NGA, RADARSAT Antarctic Mapping Project (RAMP II) data for Antarctica, and USGS GTOPO30 data north of SRTM coverage.
- The land/water mask derives from Natural Earth land geometry delivered through `world-atlas`, with Natural Earth `ne_50m_lakes` version 5.x polygons removed.
- The application shader in `src/scene/terrainMaterial.js` generates the visible terrain colors and hillshade at runtime; the texture does not contain sourced color imagery.

Source and usage documentation:

- NASA Earth Observations, SRTM RAMP2 topography: <https://neo.gsfc.nasa.gov/view.php?datasetId=SRTM_RAMP2_TOPO>
- NASA media usage guidelines: <https://www.nasa.gov/nasa-brand-center/images-and-media/>

NASA's media guidelines state that NASA media content generally is not subject to copyright in the United States, while noting that third-party material may remain separately protected. NASA asks to be acknowledged as the source and prohibits use that implies NASA endorsement. NASA is acknowledged here as the source of the SRTM RAMP2 elevation lineage. This acknowledgement does not imply NASA endorsement.

The repository does not establish the exact upstream raster artifact or version used, the generator and commands used to create the packed texture, the intermediate files, the exact Natural Earth lake-data minor version, or the final derived image's copyright and ownership status. No license is assigned to `public/geo/terrain-4096.png` by this notice, and it is not represented as covered by any future project code or documentation license.

## JavaScript package dependencies

Package-dependency notices are outside the scope of this file's current data-and-static-asset inventory. They should be evaluated separately against the actual production bundle and its retained notices before distribution. This section does not imply that dependency licensing or notice requirements have been resolved.
