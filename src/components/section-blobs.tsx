"use client";

import { motion } from "framer-motion";

export function SectionBlobs({ variant = "a" }: { variant?: "a" | "b" }) {
  const flip = variant === "b";

  return (
    <>
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute -z-10 size-64 rounded-full bg-primary/10 blur-3xl ${
          flip ? "-right-20 top-10" : "-left-16 top-0"
        }`}
        animate={{
          x: [0, flip ? -25 : 25, 0],
          y: [0, flip ? 20 : -20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className={`pointer-events-none absolute -z-10 size-72 rounded-full bg-accent-foreground/10 blur-3xl ${
          flip ? "-left-10 bottom-0" : "-right-16 bottom-10"
        }`}
        animate={{
          x: [0, flip ? 20 : -20, 0],
          y: [0, flip ? -15 : 25, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </>
  );
}
