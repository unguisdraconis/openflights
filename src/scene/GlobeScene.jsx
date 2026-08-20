import { useEffect, useRef } from "react";
import * as d3 from "d3";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { fmt, reducedMotion } from "../constants.js";
import { createGlobe } from "./createGlobe.js";
import { createNodeSprites } from "./nodeSprites.js";
import { createRouteLines } from "./routeLines.js";
import { createPicking } from "./picking.js";
import { createBorders } from "./borders.js";
import { themeFor } from "../theme.js";

// Composition root for the Three.js side. React renders the host div and
// nothing else — the scene is built imperatively here, once per dataset, and
// torn down by the returned cleanup. State flows in through apiRef; events
// flow out through the onHover/onSelect/onClear callbacks.
export function GlobeScene({
  data,
  positions,
  options,
  selected,
  onHover,
  onSelect,
  onClear,
  focusRequest,
  topologyVersion,
}) {
  const hostRef = useRef();
  const apiRef = useRef();
  const selectedRef = useRef(selected);
  selectedRef.current = selected;

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !data) return;
    let disposed = false,
      raf = 0,
      lastFrame = performance.now(),
      frameSamples = [],
      currentView = "globe";

    let palette = themeFor(options.theme);
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(palette.fog, palette.fogDensity);
    const camera = new THREE.PerspectiveCamera(42, 1, 0.01, 100);
    camera.position.set(0, 0.3, 3.55);
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.75));
    renderer.setSize(host.clientWidth, host.clientHeight, false);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.tabIndex = 0;
    renderer.domElement.setAttribute("role", "img");
    renderer.domElement.setAttribute(
      "aria-label",
      `Interactive 3D flight network with ${fmt.format(data.nodes.length)} airports and ${fmt.format(data.links.length)} connections`,
    );
    host.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.065;
    controls.enablePan = false;
    controls.minDistance = 1.55;
    controls.maxDistance = 8;
    controls.autoRotateSpeed = 0.32;

    const hemi = new THREE.HemisphereLight(0x9acff2, 0x0a1020, 1.15);
    scene.add(hemi);
    const sun = new THREE.DirectionalLight(0xffffff, 1.4);
    sun.position.set(3, 2, 4);
    scene.add(sun);

    const viewportHeight = () => host.clientHeight || 800;
    const world = createGlobe(scene, palette);
    const borders = createBorders(scene);
    const sprites = createNodeSprites(
      scene,
      data,
      positions,
      renderer,
      camera,
      viewportHeight,
    );
    const routes = createRouteLines(scene, data, positions);
    const picking = createPicking({
      renderer,
      scene,
      camera,
      data,
      sprites,
      world,
      routes,
      selectedRef,
      onHover,
      onSelect,
      onClear,
    });

    const resetCamera = (view = currentView) => {
      controls.target.set(0, 0, 0);
      camera.position.set(0, 0.3, view === "globe" ? 3.55 : 4.2);
      controls.update();
    };
    const focusNode = (node) => {
      const v = positions.read(currentView, node.index, new THREE.Vector3());
      if (currentView === "globe") {
        const end = v.clone().normalize().multiplyScalar(2.35),
          start = camera.position.clone(),
          targetStart = controls.target.clone(),
          t0 = performance.now(),
          dur = reducedMotion ? 1 : 650;
        const fly = (now) => {
          const t = Math.min(1, (now - t0) / dur),
            q = 1 - Math.pow(1 - t, 3);
          camera.position.lerpVectors(start, end, q);
          controls.target.lerpVectors(
            targetStart,
            v.clone().multiplyScalar(0.18),
            q,
          );
          controls.update();
          if (t < 1) requestAnimationFrame(fly);
        };
        requestAnimationFrame(fly);
      } else {
        controls.target.copy(v);
        camera.position.set(v.x, v.y, v.z + 2.4);
        controls.update();
      }
    };
    const applyTheme = () => {
      scene.fog.color.set(palette.fog);
      scene.fog.density = palette.fogDensity;
      hemi.color.set(palette.lights.hemiSky);
      hemi.groundColor.set(palette.lights.hemiGround);
      hemi.intensity = palette.lights.hemi;
      sun.intensity = palette.lights.sun;
      world.applyTheme(palette);
      borders.setTheme(palette);
      // Borders only make sense on the geographic globe.
      borders.object.visible = !!palette.borders && currentView === "globe";
    };

    const update = (opts, selectedNode) => {
      currentView = opts.view;
      palette = themeFor(opts.theme);
      applyTheme();
      controls.autoRotate =
        opts.autoRotate && !reducedMotion && opts.view === "globe";
      const heroNode = selectedNode || sprites.topHubNode;
      sprites.update(opts, selectedNode, heroNode, palette);
      routes.update(opts, selectedNode, palette);
      world.globeGroup.visible = opts.view === "globe";
      controls.enablePan = opts.view === "topology";
      controls.minDistance = opts.view === "globe" ? 1.55 : 1.2;
      controls.maxDistance = opts.view === "globe" ? 8 : 10;
    };
    apiRef.current = { update, focusNode, resetCamera };
    update(options, selected);

    const resize = () => {
      const w = host.clientWidth,
        h = host.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      sprites.resize();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(host);
    resize();

    const animate = (now) => {
      if (disposed) return;
      const dt = now - lastFrame;
      lastFrame = now;
      frameSamples.push(dt);
      if (frameSamples.length > 90) frameSamples.shift();
      if (
        frameSamples.length === 90 &&
        renderer.getPixelRatio() > 1 &&
        d3.mean(frameSamples) > 24
      ) {
        renderer.setPixelRatio(1);
        sprites.material.uniforms.uPixelRatio.value = 1;
        resize();
        frameSamples = [];
      }
      controls.update();
      borders.updateDetail(camera.position.length());
      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const key = (e) => {
      if (
        e.key.toLowerCase() === "r" &&
        document.activeElement?.tagName !== "INPUT"
      )
        resetCamera();
    };
    window.addEventListener("keydown", key);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("keydown", key);
      picking.dispose();
      borders.dispose();
      world.dispose();
      controls.dispose();
      scene.traverse((o) => {
        o.geometry?.dispose?.();
        if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
        else o.material?.dispose?.();
      });
      renderer.dispose();
      renderer.domElement.remove();
      apiRef.current = null;
    };
  }, [data]);

  useEffect(() => {
    apiRef.current?.update(options, selected);
  }, [options, selected, topologyVersion]);
  useEffect(() => {
    if (focusRequest?.node) apiRef.current?.focusNode(focusRequest.node);
  }, [focusRequest]);
  return <div ref={hostRef} className="canvas-host"></div>;
}
