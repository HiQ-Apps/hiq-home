"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBlobs } from "@/components/section-blobs";
import { SectionReveal } from "@/components/section-reveal";
import { useTilt } from "@/lib/use-tilt";
import { ideas, type Idea } from "@/lib/content";

function IdeaCard({ idea, index }: { idea: Idea; index: number }) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } =
    useTilt<HTMLDivElement>(6);

  return (
    <SectionReveal variant="rotate" delay={0.08 * index}>
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
          <CardContent className="flex h-full flex-col gap-4 p-6">
            <idea.icon
              className="size-5 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
              strokeWidth={1.75}
            />
            <div className="flex flex-1 flex-col">
              <h3 className="text-base font-medium text-foreground">
                {idea.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {idea.description}
              </p>
              <Badge variant="outline" className="mt-4 w-fit">
                Inspired by {idea.inspiredBy}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </SectionReveal>
  );
}

export function Ideas() {
  return (
    <section id="ideas" className="relative overflow-hidden px-6 py-28">
      <SectionBlobs variant="b" />
      <div className="relative mx-auto max-w-5xl">
        <SectionReveal variant="rotate">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            03 / Ideas
          </p>
        </SectionReveal>

        <SectionReveal variant="rotate" delay={0.05}>
          <h2 className="mt-4 max-w-xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            Spin-offs we&apos;d love to build
          </h2>
        </SectionReveal>

        <SectionReveal variant="rotate" delay={0.08}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            A few app concepts that grew out of client work, the kind of
            thing we&apos;d build next if the right partner showed up.
          </p>
        </SectionReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {ideas.map((idea, i) => (
            <IdeaCard key={idea.title} idea={idea} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
