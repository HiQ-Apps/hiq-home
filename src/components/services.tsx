"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            02 — What we do
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2 className="mt-4 max-w-xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            Capabilities
          </h2>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {services.map((service, i) => (
            <SectionReveal key={service.title} delay={0.08 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="h-full"
              >
                <Card className="h-full border-border/80 bg-card/60 transition-colors hover:border-primary/40">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <service.icon className="size-5 text-primary" strokeWidth={1.75} />
                    <div>
                      <h3 className="text-base font-medium text-foreground">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
