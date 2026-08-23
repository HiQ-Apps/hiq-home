"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/section-reveal";
import { LocalTimeClock } from "@/components/three/local-time-clock";
import { useI18n } from "@/lib/i18n/context";
import { useNow } from "@/lib/use-now";

export function LocalTime() {
  const { t } = useI18n();
  const now = useNow();

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
    <section className="relative overflow-hidden px-6 py-20">
      <div className="relative mx-auto max-w-5xl">
        <SectionReveal variant="scale">
          <p className="text-center font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {t.time.eyebrow}
          </p>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
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
