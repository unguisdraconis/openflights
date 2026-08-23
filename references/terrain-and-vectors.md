# Terrain, coastlines and vector overlays on a globe

Read this when shading a globe from elevation data, drawing country or
coastline geometry, or preparing the raster/vector assets those need.

## Terrain from a packed raster

To shade a globe with real topography while staying on-palette, sample data in
a shader and colour it yourself rather than wrapping a photographic texture.
You keep control of the palette, and the same data drives both hypsometric
tinting and relief.

**Pack the channels.** One RGB texture carries everything:

```
R = land elevation, 0 at sea level, rising to the highest peaks
G = land/water mask derived from vector coastlines and lakes
```

One fetch, one sampler, no risk of two layers drifting out of alignment. Set
the texture's `colorSpace` to `NoColorSpace` — it carries measurements, not
colour, and must not be decoded.

### Do not derive water from elevation

This is the trap that looks correct until you check a specific place. Public
elevation rasters routinely clamp everything at or below sea level to zero, so
the elevation channel cannot distinguish sea from low-lying land: an ocean
trench and Amsterdam both read 0. Thresholding it floods the Netherlands, the
Bangladesh delta, and every other low coast.

Build the mask from vector polygons instead — `world-atlas` land, with Natural
Earth lake polygons punched back out so the Caspian, the Great Lakes, Victoria
and Baikal read as water.

**Sanity-check by area, not by pixel count.** Weight each row by
`cos(latitude)` and compare against Earth's ~29% land. Raw pixel fraction runs
high (33%+) because equirectangular projection inflates the poles, so an
unweighted check will make a correct mask look wrong.

Spot-check the cases that motivated the vector mask: Amsterdam and the
Bangladesh delta must be LAND at elevation 0; the Caspian and Lake Superior
must be WATER.

### Colour and relief

Use a hypsometric ramp through your palette — bluish green lowlands, yellow,
orange, vermillion, bleaching to near-white at the peaks — interpolating with
`smoothstep` between stops. Mixing happens in linear working space, so if you
replicate the ramp offline for preview, convert sRGB → linear, mix, convert
back.

Hillshade from the height gradient: sample four neighbours, build a slope
normal, dot it with a light direction. **Rescale the east-west component by
`sin(v * PI)`** — the cosine of latitude. Longitude texels converge at the
poles, and without the correction polar terrain shears into streaks.

**Tie shore tints to the coastline, not to height.** Keying a pale shore colour
to low elevation turns whole continental basins — the Amazon, the Congo, the
Gangetic plain — into what looks like water, because they sit only metres above
sea level. Key it to the softened edge of the mask instead
(`1.0 - smoothstep(0.55, 0.90, land)`), which is a thin band at the actual
coast.

Remember a raw `ShaderMaterial` needs `#include <colorspace_fragment>` at the
end, or the whole ramp renders dark and oversaturated.

## Preparing the raster offline

Sphere UVs from `THREE.SphereGeometry` are already equirectangular and line up
with a standard `(lon+180)/360`, `(90-lat)/180` image under the default
`flipY`, so no UV gymnastics are needed.

Two failure modes dominate when rasterising vector polygons into that image.
Both are obvious once you look at the whole map, and invisible on a sphere:

### Antimeridian wrap

A ring crossing 180° jumps +179 → −179 and rasterises as a band straight across
the entire map. Fiji, Chukotka and Antarctica's closing edge all hit this.

Fix by unwrapping longitudes so each ring stays continuous:

```python
def unwrap(pts):
    out, prev = [], None
    for lon, lat in pts:
        if prev is not None:
            while lon - prev > 180.0:  lon -= 360.0
            while lon - prev < -180.0: lon += 360.0
        out.append((lon, lat)); prev = lon
    return out
```

Then draw each polygon at three horizontal offsets (−W, 0, +W) and let the
canvas clip, so a shape spanning the seam appears on both edges.

### Polar rings

A ring whose unwrapped longitude spans a full turn encircles the globe and is
closed by the *edge of the map*, not by a segment back to its start. Antarctica
is the real case: it runs −180 → +180 along about −84° with the ice cap below
it implied. Close it explicitly over the pole, or the cap is sliced off and the
South Pole renders as ocean:

```python
if abs(pts[-1][0] - pts[0][0]) > 350.0:
    pole = -90.0 if sum(p[1] for p in pts) / len(pts) < 0 else 90.0
    pts = pts + [(pts[-1][0], pole), (pts[0][0], pole)]
```

Detect both by scanning row means of the finished mask for rows that differ
sharply from their neighbours — a full-width stripe or an abrupt land/water
transition at a fixed latitude is one of these two bugs.

## Vector overlays and level of detail

Draw country outlines as `LineSegments` tessellated along great circles.
Subdivide any segment longer than a few degrees, or long borders cut straight
through the sphere instead of following it.

Place them just above the surface and *below* your markers — 1.0025 over a
radius-1 globe with nodes at 1.014 — so they neither z-fight with the surface
nor occlude a node sprite.

Load coarse geometry first (110m, ~100 KB) and fetch finer geometry (50m,
~750 KB) only when the camera moves inside a distance threshold, keeping both
built so the swap is a geometry assignment rather than a rebuild. Guard the
fetch with a loading flag, or a camera lingering near the threshold requests
the same file repeatedly.

Decoding TopoJSON directly is about 30 lines and avoids a dependency:
delta-decode the arcs, apply the quantisation transform, stitch rings, and
treat a negative arc index as `~i` reversed.
