"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBlobs } from "@/components/section-blobs";
import { SectionReveal } from "@/components/section-reveal";
import { ServicesVisual } from "@/components/section-visual";
import { useTilt } from "@/lib/use-tilt";
import { services, type Service } from "@/lib/content";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } =
    useTilt<HTMLDivElement>(6);

  return (
    <SectionReveal variant="right" delay={0.08 * index}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ y: -4 }}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group h-full"
      >
        <Card className="h-full border-border/80 bg-card/60 transition-colors hover:border-primary/40">
          <CardContent className="flex flex-col gap-4 p-6">
            <service.icon
              className="size-5 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              strokeWidth={1.75}
            />
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
  );
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden px-6 py-28">
      <SectionBlobs variant="a" />
      <div className="relative mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionReveal variant="left" delay={0.1}>
          <ServicesVisual />
        </SectionReveal>

        <div>
          <SectionReveal variant="right">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              04 / What we do
            </p>
          </SectionReveal>

          <SectionReveal variant="right" delay={0.05}>
            <h2 className="mt-4 max-w-xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              Capabilities
            </h2>
          </SectionReveal>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {services.map((service, i) => (
              <ServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
