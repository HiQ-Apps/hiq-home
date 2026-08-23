"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBlobs } from "@/components/section-blobs";
import { SectionReveal } from "@/components/section-reveal";
import { BrowserVisual } from "@/components/section-visual";
import { useTilt } from "@/lib/use-tilt";
import { works, type Work as WorkItem } from "@/lib/content";
import { useI18n } from "@/lib/i18n/context";
import type { Translations } from "@/lib/i18n/translations";

function WorkCard({
  work,
  copy,
  index,
}: {
  work: WorkItem;
  copy: Translations["work"]["items"][number];
  index: number;
}) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } =
    useTilt<HTMLAnchorElement>(4);
  const flip = index % 2 === 1;

  return (
    <SectionReveal variant="scale" delay={0.08 * index}>
      <motion.a
        ref={ref}
        href={work.href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ y: -4 }}
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="group block"
      >
        <Card className="border-border/80 bg-card/60 transition-colors group-hover:border-primary/40">
          <CardContent
            className={`grid gap-6 p-6 sm:grid-cols-2 sm:items-center ${
              flip ? "sm:[&>*:first-child]:order-last" : ""
            }`}
          >
            <BrowserVisual title={work.href.replace(/^https?:\/\//, "")} />
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-medium text-foreground">
                  {work.title}
                </h3>
                <ArrowUpRight className="size-4 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </div>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                {copy.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {copy.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.a>
    </SectionReveal>
  );
}

export function Work() {
  const { t } = useI18n();

  return (
    <section id="work" className="relative overflow-hidden px-6 py-28">
      <SectionBlobs variant="b" />
      <div className="relative mx-auto max-w-5xl">
        <SectionReveal variant="scale">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            02 / {t.work.eyebrow}
          </p>
        </SectionReveal>

        <SectionReveal variant="scale" delay={0.05}>
          <h2 className="mt-4 max-w-xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            {t.work.heading}
          </h2>
        </SectionReveal>

        <div className="mt-12 flex flex-col gap-4">
          {works.map((work, i) => (
            <WorkCard key={work.title} work={work} copy={t.work.items[i]} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
