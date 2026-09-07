"use client";

import { useRef, useSyncExternalStore } from "react";
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
  const isDark = useIsDark();
  const color = isDark ? "#5eead4" : "#1f6b52";

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      // Gentle vertical breathing only. The old yaw swing (~10deg) pushed the
      // glyphs visibly left/right under the perspective camera, which read as
      // the clock "jumping around".
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;
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
