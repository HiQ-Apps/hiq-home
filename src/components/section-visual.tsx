"use client";

import { motion } from "framer-motion";
import { Boxes, Code2, Layers, Sparkles } from "lucide-react";

function VisualFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border/80 bg-card/40 shadow-sm">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30"
      />
      {children}
    </div>
  );
}

export function AboutVisual() {
  return (
    <VisualFrame>
      <motion.div
        aria-hidden
        className="absolute -left-10 top-6 size-40 rounded-full bg-primary/25 blur-3xl"
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -right-8 bottom-0 size-48 rounded-full bg-accent-foreground/20 blur-3xl"
        animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative flex h-full flex-col items-center justify-center gap-4 p-8">
        <motion.div
          className="flex size-16 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary shadow-sm"
          animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="size-7" strokeWidth={1.5} />
        </motion.div>
        <div className="flex gap-3">
          {[Code2, Layers, Boxes].map((Icon, i) => (
            <motion.div
              key={i}
              className="flex size-11 items-center justify-center rounded-xl border border-border bg-background/70 text-muted-foreground"
              animate={{ y: [0, i % 2 === 0 ? 6 : -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3 * i,
              }}
            >
              <Icon className="size-5" strokeWidth={1.5} />
            </motion.div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

export function ServicesVisual() {
  const bars = [60, 85, 45, 70];
  return (
    <VisualFrame>
      <motion.div
        aria-hidden
        className="absolute right-0 top-0 size-56 rounded-full bg-primary/20 blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative flex h-full flex-col justify-center gap-3 p-8">
        {bars.map((w, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="size-2 shrink-0 rounded-full bg-primary/60" />
            <motion.div
              className="h-2.5 rounded-full bg-gradient-to-r from-primary/70 to-primary/20"
              style={{ width: `${w}%` }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 * i, ease: "easeOut" }}
            />
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

export function BrowserVisual({ title }: { title: string }) {
  return (
    <VisualFrame>
      <div className="relative flex h-full flex-col p-4">
        <div className="flex items-center gap-1.5 rounded-t-lg border border-b-0 border-border bg-background/70 px-3 py-2">
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="size-2 rounded-full bg-muted-foreground/30" />
          <span className="ml-3 truncate rounded-full bg-muted-foreground/10 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
            {title}
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-b-lg border border-t-0 border-border bg-background/50 p-4">
          <motion.div
            aria-hidden
            className="absolute -right-10 -top-10 size-40 rounded-full bg-primary/20 blur-2xl"
            animate={{ x: [0, 10, 0], y: [0, 8, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="h-3 w-2/5 rounded-full bg-primary/30" />
          <div className="mt-3 h-2 w-4/5 rounded-full bg-muted-foreground/15" />
          <div className="mt-2 h-2 w-3/5 rounded-full bg-muted-foreground/15" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-12 rounded-md border border-border bg-card/60"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}
