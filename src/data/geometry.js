import * as THREE from "three";


export function latLonVector(lat, lon, radius = 1) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;
  return new THREE.Vector3(
    -Math.sin(phi) * Math.cos(theta),
    Math.cos(phi),
    Math.sin(phi) * Math.sin(theta),
  ).multiplyScalar(radius);
}
export function slerpArc(a, b, t, altitude) {
  const ua = a.clone().normalize(),
    ub = b.clone().normalize();
  const omega = Math.acos(THREE.MathUtils.clamp(ua.dot(ub), -1, 1));
  let p;
  if (omega < 0.0001) p = ua.clone().lerp(ub, t).normalize();
  else {
    const so = Math.sin(omega);
    p = ua
      .multiplyScalar(Math.sin((1 - t) * omega) / so)
      .add(ub.multiplyScalar(Math.sin(t * omega) / so));
  }
  return p.multiplyScalar(1.012 + Math.sin(Math.PI * t) * altitude);
}

// Shared color/size rule for a node, used both by the bulk point-sprite
// buffer and by the single "hero" mesh so the two stay visually consistent.
export function nodeStyle(n, selectedNode, palette) {
  const isSelected = n === selectedNode;
  const connected = !!(selectedNode && selectedNode.neighbors.has(n.numericId));
  const color = isSelected
    ? palette.nodeSelected
    : connected
      ? palette.nodeConnected
      : n.degree > 45
        ? palette.node.hub
        : n.degree > 15
          ? palette.node.mid
          : palette.node.low;
  const pixelSize =
    (4.2 + Math.min(8, Math.sqrt(n.degree) * 0.72)) *
    (isSelected ? 1.65 : connected ? 1.2 : 1);
  return { color, pixelSize, isSelected, connected };
}

// The point-sprite shader gets a node's on-screen size "for free" by scaling
// gl_PointSize with 1/-viewZ. A real mesh has no such trick — its apparent
// size depends on world-space radius and camera distance — so this inverts
// the perspective-projection math to pick a radius that reads at roughly the
// same pixel size the sprite would have used, at a given reference distance.
export function pixelSizeToWorldRadius(pixelSize, camera, viewportHeightPx, distance) {
  const vFov = THREE.MathUtils.degToRad(camera.fov);
  const worldHeightAtDist = 2 * Math.tan(vFov / 2) * distance;
  const pxPerWorldUnit = viewportHeightPx / worldHeightAtDist;
  return pixelSize / (2 * pxPerWorldUnit);
}
