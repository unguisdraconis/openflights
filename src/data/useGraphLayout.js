import { useEffect } from "react";
import * as d3 from "d3";
import { idle, cancelIdle } from "../constants.js";

// The force layout is the most expensive thing this app does — on a
// 3,265-node / 18,972-link graph it is ~5.4s of main-thread work, around 63ms
// per tick, which is more than an idle slice can absorb. It runs eagerly at
// startup anyway: deferring it until the topology view is opened moved the
// cost to a point where the user is waiting on it, which reads worse than
// absorbing it in the background while they explore the globe.
export function useGraphLayout(data, positions, onReady) {
  useEffect(() => {
    if (!data) return;
    let cancelled = false,
      idleId;
    const nodes = data.nodes.map((n) => ({
      id: n.numericId,
      x: n.lon * 2.1,
      y: -n.lat * 2.1,
      ref: n,
    }));
    const links = data.links.map((l) => ({
      source: l.source.numericId,
      target: l.target.numericId,
      weight: l.weight,
    }));
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance((l) => 18 + 22 / Math.sqrt(l.weight))
          .strength(0.045),
      )
      .force("charge", d3.forceManyBody().strength(-17).distanceMax(190))
      .force("center", d3.forceCenter(0, 0))
      .force("x", d3.forceX(0).strength(0.012))
      .force("y", d3.forceY(0).strength(0.012))
      .stop();
    let ticks = 0;
    const work = (deadline) => {
      while (!cancelled && ticks < 85 && deadline.timeRemaining() > 1) {
        simulation.tick();
        ticks++;
      }
      if (cancelled) return;
      if (ticks < 85) idleId = idle(work);
      else {
        const ex = d3.extent(nodes, (d) => d.x),
          ey = d3.extent(nodes, (d) => d.y);
        const sx = d3.scaleLinear().domain(ex).range([-1.5, 1.5]);
        const sy = d3.scaleLinear().domain(ey).range([1.1, -1.1]);
        const topo = positions.topology;
        for (const n of nodes) {
          const i = n.ref.index;
          topo[i * 3] = sx(n.x);
          topo[i * 3 + 1] = sy(n.y);
          topo[i * 3 + 2] = 0.08 * Math.log1p(n.ref.degree);
        }
        positions.markTopologyReady();
        onReady();
      }
    };
    idleId = idle(work);
    return () => {
      cancelled = true;
      cancelIdle(idleId);
      simulation.stop();
    };
  }, [data, onReady]);
}
