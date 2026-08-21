"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/content";

const headlineWords = site.tagline.split(" ");

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

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
  }, []);

  return (
    <section
      id="top"
      className="flex min-h-svh flex-col justify-center px-6 pt-24"
    >
      <div className="mx-auto w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary"
        >
          {site.name} — Software Studio
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
          {site.blurb}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button size="lg" render={<a href="#contact" />}>
            Get in touch
          </Button>
          <Button size="lg" variant="outline" render={<a href="#work" />}>
            See our work
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="mx-auto mt-16 flex flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll to About"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">
          Scroll
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
