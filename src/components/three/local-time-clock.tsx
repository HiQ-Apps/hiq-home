"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";

const DARK_QUERY = "(prefers-color-scheme: dark)";

function subscribeDark(callback: () => void) {
  const mql = window.matchMedia(DARK_QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getDarkSnapshot() {
  return window.matchMedia(DARK_QUERY).matches;
}

function getDarkServerSnapshot() {
  return false;
}

function useIsDark() {
  return useSyncExternalStore(
    subscribeDark,
    getDarkSnapshot,
    getDarkServerSnapshot,
  );
}

function ClockScene({ timeString }: { timeString: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const prevSecond = useRef(timeString.slice(-2));
  const flip = useRef(0);
  const isDark = useIsDark();
  const color = isDark ? "#5eead4" : "#1f6b52";

  useEffect(() => {
    const second = timeString.slice(-2);
    if (second !== prevSecond.current) {
      prevSecond.current = second;
      flip.current = 1;
    }
  }, [timeString]);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 0.6) * 0.12;
      groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.18;
      if (flip.current > 0) {
        groupRef.current.rotation.x = -0.35;
        flip.current = 0;
      }
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        0,
        Math.min(delta * 8, 1),
      );
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.12;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 4, 6]} intensity={40} color={color} />
      <mesh ref={ringRef} position={[0, 0, -1.2]}>
        <torusGeometry args={[3.4, 0.03, 16, 100]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.35}
        />
      </mesh>
      <group ref={groupRef}>
        <Text
          fontSize={1.5}
          color={color}
          anchorX="center"
          anchorY="middle"
          letterSpacing={0.02}
        >
          {timeString}
        </Text>
      </group>
    </>
  );
}

export function LocalTimeClock({ timeString }: { timeString: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ClockScene timeString={timeString} />
    </Canvas>
  );
}
