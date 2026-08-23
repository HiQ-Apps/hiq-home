"use client";

import { useMemo, useRef, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const POINT_COUNT = 420;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

// Deterministic PRNG so point placement stays pure across renders.
function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function subscribeReducedMotion(callback: () => void) {
  const mql = window.matchMedia(REDUCED_MOTION_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function Field() {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const random = mulberry32(1337);
    const array = new Float32Array(POINT_COUNT * 3);
    for (let i = 0; i < POINT_COUNT; i++) {
      const radius = 6 + random() * 6;
      const theta = random() * Math.PI * 2;
      const y = (random() - 0.5) * 8;
      array[i * 3] = Math.cos(theta) * radius;
      array[i * 3 + 1] = y;
      array[i * 3 + 2] = Math.sin(theta) * radius - 4;
    }
    return array;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = t * 0.015;
    pointsRef.current.position.y = Math.sin(t * 0.08) * 0.3;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#1f6b52"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

export function AmbientField() {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );

  if (prefersReducedMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_20%,black,transparent)]"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Field />
      </Canvas>
    </div>
  );
}
