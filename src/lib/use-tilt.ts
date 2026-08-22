"use client";

import { useRef } from "react";
import type { MouseEvent } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useTilt<T extends HTMLElement>(intensity = 8) {
  const ref = useRef<T>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30,
  });

  function onMouseMove(e: MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}
