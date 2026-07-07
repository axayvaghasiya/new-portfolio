"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ACCENTS = [
  new THREE.Color("#00ff87"),
  new THREE.Color("#6d4caf"),
  new THREE.Color("#c95f52"),
];
// Weighted palette — mostly green, then purple, then gold
const PALETTE_WEIGHTS = [0, 0, 0, 1, 1, 2];

const BOUNDS = { x: 110, y: 62, z: 46 };
const LINK_DISTANCE = 26;

function makeDotTexture() {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.35, "rgba(255,255,255,0.8)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/**
 * Particle constellation background for the hero.
 * Pauses its RAF loop when scrolled off-screen and renders a single
 * static frame when the user prefers reduced motion.
 */
export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 70 : 140;
    const MAX_LINKS = COUNT * 6;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      1,
      500
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // --- Particles -------------------------------------------------
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 2 * BOUNDS.x;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2 * BOUNDS.y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 2 * BOUNDS.z;
      velocities[i * 3] = (Math.random() - 0.5) * 0.055;
      velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.045;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.03;
      const c = ACCENTS[PALETTE_WEIGHTS[Math.floor(Math.random() * PALETTE_WEIGHTS.length)]];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const dotTexture = makeDotTexture();
    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pointsMat = new THREE.PointsMaterial({
      size: 2.4,
      map: dotTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(pointsGeo, pointsMat);

    // --- Constellation lines --------------------------------------
    const linePositions = new Float32Array(MAX_LINKS * 6);
    const lineColors = new Float32Array(MAX_LINKS * 6);
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    linesGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage)
    );
    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.5,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(linesGeo, linesMat);

    const group = new THREE.Group();
    group.add(points);
    group.add(lines);
    scene.add(group);

    // --- Interaction ----------------------------------------------
    const mouse = { x: 0, y: 0 };
    const onPointerMove = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };

    const updateLines = () => {
      let linkIndex = 0;
      for (let i = 0; i < COUNT && linkIndex < MAX_LINKS; i++) {
        for (let j = i + 1; j < COUNT && linkIndex < MAX_LINKS; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (dist < LINK_DISTANCE) {
            const fade = (1 - dist / LINK_DISTANCE) * 0.55;
            const p = linkIndex * 6;
            linePositions[p] = positions[i * 3];
            linePositions[p + 1] = positions[i * 3 + 1];
            linePositions[p + 2] = positions[i * 3 + 2];
            linePositions[p + 3] = positions[j * 3];
            linePositions[p + 4] = positions[j * 3 + 1];
            linePositions[p + 5] = positions[j * 3 + 2];
            for (let k = 0; k < 2; k++) {
              const src = (k === 0 ? i : j) * 3;
              lineColors[p + k * 3] = colors[src] * fade;
              lineColors[p + k * 3 + 1] = colors[src + 1] * fade;
              lineColors[p + k * 3 + 2] = colors[src + 2] * fade;
            }
            linkIndex++;
          }
        }
      }
      linesGeo.setDrawRange(0, linkIndex * 2);
      linesGeo.attributes.position.needsUpdate = true;
      linesGeo.attributes.color.needsUpdate = true;
    };

    const step = () => {
      for (let i = 0; i < COUNT; i++) {
        for (let axis = 0; axis < 3; axis++) {
          const idx = i * 3 + axis;
          positions[idx] += velocities[idx];
          const bound = axis === 0 ? BOUNDS.x : axis === 1 ? BOUNDS.y : BOUNDS.z;
          if (positions[idx] > bound || positions[idx] < -bound) velocities[idx] *= -1;
        }
      }
      pointsGeo.attributes.position.needsUpdate = true;
      updateLines();

      group.rotation.y += 0.0006;
      camera.position.x += (mouse.x * 7 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 4 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    // --- Loop control ----------------------------------------------
    let raf = 0;
    let visible = true;
    let running = false;

    const loop = () => {
      step();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!running && !reducedMotion) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0.02 }
    );
    io.observe(container);

    const onResize = () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
      if (reducedMotion) step();
    };
    window.addEventListener("resize", onResize);

    if (reducedMotion) {
      // Single static frame — no loop, no pointer tracking
      step();
    } else {
      window.addEventListener("pointermove", onPointerMove);
      start();
    }

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      pointsGeo.dispose();
      linesGeo.dispose();
      pointsMat.dispose();
      linesMat.dispose();
      dotTexture.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="absolute inset-0 [mask-image:radial-gradient(ellipse_75%_70%_at_50%_45%,black_35%,transparent_100%)]"
    />
  );
}
