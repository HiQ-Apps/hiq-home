"use client";

import { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(#n)'/></svg>`
  );

type Variant = "about" | "ideas";

const gradients: Record<Variant, string> = {
  about:
    "radial-gradient(circle at 20% 20%, var(--chart-1), transparent 55%), radial-gradient(circle at 80% 30%, var(--chart-3), transparent 50%), radial-gradient(circle at 50% 85%, var(--chart-5), transparent 55%)",
  ideas:
    "radial-gradient(circle at 15% 30%, var(--chart-2), transparent 50%), radial-gradient(circle at 85% 25%, var(--chart-4), transparent 55%), radial-gradient(circle at 55% 90%, var(--chart-1), transparent 55%)",
};

export function TextureReveal({
  variant,
  radius = 220,
  className = "",
}: {
  variant: Variant;
  radius?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(-9999);
  const my = useMotionValue(-9999);
  const smx = useSpring(mx, { damping: 30, stiffness: 250, mass: 0.5 });
  const smy = useSpring(my, { damping: 30, stiffness: 250, mass: 0.5 });
  const mask = useMotionTemplate`radial-gradient(circle ${radius}px at ${smx}px ${smy}px, black 0%, black 55%, transparent 100%)`;

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(e.clientX - rect.left);
    my.set(e.clientY - rect.top);
  }

  function onLeave() {
    mx.set(-9999);
    my.set(-9999);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/80 bg-card/40 ${className}`}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40 grayscale"
        style={{ backgroundImage: gradients[variant] }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{ backgroundImage: `url(${GRAIN_SVG})`, backgroundSize: "180px" }}
      />

      <motion.div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: gradients[variant],
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      />
      <motion.div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay opacity-50"
        style={{
          backgroundImage: `url(${GRAIN_SVG})`,
          backgroundSize: "180px",
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      />

      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-20"
      />
    </div>
  );
}
