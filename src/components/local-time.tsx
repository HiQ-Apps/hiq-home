"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";
import { LocalTimeClock } from "@/components/three/local-time-clock";
import { useI18n } from "@/lib/i18n/context";
import { useNow } from "@/lib/use-now";

export function LocalTime() {
  const { t } = useI18n();
  const now = useNow();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 1.4, 0.7]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    [0.2, 1, 1, 0.2],
  );

  const timeString = now
    ? now.toLocaleTimeString(undefined, { hour12: false })
    : "--:--:--";
  const dateString = now
    ? now.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "";
  const timeZone = now ? Intl.DateTimeFormat().resolvedOptions().timeZone : "";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-6 py-20"
    >
      <div className="relative mx-auto max-w-5xl">
        <SectionReveal variant="scale">
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t.time.eyebrow}
          </p>
        </SectionReveal>

        <motion.div
          style={{ scale, opacity }}
          className="relative mx-auto mt-4 h-[42vh] max-h-[420px] min-h-[280px] w-full"
        >
          {now && <LocalTimeClock timeString={timeString} />}
        </motion.div>

        <SectionReveal variant="scale" delay={0.1}>
          <p className="-mt-6 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {dateString}
            {timeZone && (
              <>
                {" "}
                &middot; {t.time.viewingFrom} {timeZone}
              </>
            )}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
