export function partitionRouteGroups(links, selectedNode) {
  const groups = {
    contextDomestic: [],
    contextInternational: [],
    focusDomestic: [],
    focusInternational: [],
  };
  for (const link of links) {
    const focused =
      selectedNode &&
      (link.source === selectedNode || link.target === selectedNode);
    const key = focused
      ? link.international
        ? "focusInternational"
        : "focusDomestic"
      : link.international
        ? "contextInternational"
        : "contextDomestic";
    groups[key].push(link);
  }
  return groups;
}

export function createLineDistances(positions, routeRanges) {
  const distances = new Float32Array(positions.length / 3);
  for (const [startVertex, endVertex] of routeRanges) {
    let distance = 0;
    for (let vertex = startVertex; vertex < endVertex; vertex += 2) {
      const start = vertex * 3;
      const end = (vertex + 1) * 3;
      distances[vertex] = distance;
      distance += Math.hypot(
        positions[end] - positions[start],
        positions[end + 1] - positions[start + 1],
        positions[end + 2] - positions[start + 2],
      );
      distances[vertex + 1] = distance;
    }
  }
  return distances;
}
