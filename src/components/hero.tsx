"use client";

import { useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import gsap from "gsap";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/magnetic";
import { AmbientField } from "@/components/three/ambient-field";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n/context";

export function Hero() {
  const { t } = useI18n();
  const headlineWords = t.hero.tagline.split(" ");
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(30);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotlightX}% ${spotlightY}%, rgba(31,107,82,0.14), transparent 70%)`;

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    spotlightX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotlightY.set(((e.clientY - rect.top) / rect.height) * 100);
  }

  useEffect(() => {
    if (!headlineRef.current) return;
    const words = headlineRef.current.querySelectorAll("[data-word]");

    const tl = gsap.timeline({ delay: 0.3 });
    tl.fromTo(
      words,
      { yPercent: 110, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.06,
      },
    );

    return () => {
      tl.kill();
    };
  }, [t.hero.tagline]);

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-24"
    >
      <AmbientField />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: spotlight }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-1/4 size-72 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 size-96 rounded-full bg-accent-foreground/10 blur-3xl"
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 25, -15, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{
            opacity: 1,
            y: [0, -3, 0],
          }}
          transition={{
            opacity: { duration: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
          }}
          className="mb-6 inline-block font-mono text-xs uppercase tracking-[0.2em] text-primary"
        >
          {site.name}, {t.hero.eyebrowSuffix}
        </motion.p>

        <h1
          ref={headlineRef}
          className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-6xl"
        >
          {headlineWords.map((word, i) => (
            <span key={i} className="mr-3 inline-block overflow-hidden pb-1 align-bottom last:mr-0">
              <span data-word className="inline-block">
                {word}
              </span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {t.hero.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Magnetic>
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button size="lg" nativeButton={false} render={<a href="#contact" />}>
                {t.hero.ctaPrimary}
              </Button>
              <motion.span
                aria-hidden
                className="pointer-events-none absolute -right-2 -top-2 text-primary opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: -20 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.3, ease: "backOut" }}
              >
                <Sparkles className="size-4" fill="currentColor" />
              </motion.span>
            </motion.div>
          </Magnetic>
          <Magnetic>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href="#work" />}
              >
                {t.hero.ctaSecondary}
              </Button>
            </motion.div>
          </Magnetic>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="relative mx-auto mt-16 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          {t.hero.scroll}
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
