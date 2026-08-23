"use client";

import { motion } from "framer-motion";
import { AnimatedStatValue } from "@/components/animated-stat";
import { SectionBlobs } from "@/components/section-blobs";
import { SectionReveal } from "@/components/section-reveal";
import { TextureReveal } from "@/components/texture-reveal";
import { useI18n } from "@/lib/i18n/context";

export function About() {
  const { t } = useI18n();
  const stats = t.about.stats;
  const valueProps = t.about.valueProps;

  return (
    <section id="about" className="relative overflow-hidden px-6 py-28">
      <SectionBlobs variant="a" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionReveal variant="left">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              01 / {t.about.eyebrow}
            </p>
          </SectionReveal>

          <SectionReveal variant="left" delay={0.05}>
            <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              {t.about.heading}
            </h2>
          </SectionReveal>

          <SectionReveal variant="left" delay={0.1}>
            <div className="mt-6 flex flex-wrap gap-2">
              {valueProps.map((prop, i) => (
                <motion.span
                  key={prop}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary"
                >
                  {prop}
                </motion.span>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal variant="left" delay={0.15}>
            <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-xl font-medium text-foreground">
                    <AnimatedStatValue value={stat.value} />
                  </p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>

        <SectionReveal variant="right" delay={0.1} className="order-first lg:order-last">
          <TextureReveal variant="about" />
        </SectionReveal>
      </div>
    </section>
  );
}
