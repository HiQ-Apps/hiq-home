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
        className="group relative h-full"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -inset-px -z-10 rounded-xl bg-gradient-to-br from-primary/40 via-primary/0 to-primary/40 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
        />
        <Card className="h-full border-border/80 bg-card/60 transition-colors hover:border-primary/40">
          <CardContent className="flex h-full flex-col gap-4 p-6">
            <motion.div
              className="flex size-10 items-center justify-center rounded-lg bg-primary/10"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <idea.icon
                className="size-5 text-primary transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110"
                strokeWidth={1.75}
              />
            </motion.div>
            <div className="flex flex-1 flex-col">
              <h3 className="text-base font-medium text-foreground">
                {idea.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {idea.description}
              </p>
              <Badge
                variant="outline"
                className="mt-4 w-fit gap-1.5 overflow-hidden"
              >
                <motion.span
                  className="size-1.5 rounded-full bg-primary"
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                {idea.tag}
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
            What we build
          </h2>
        </SectionReveal>

        <SectionReveal variant="rotate" delay={0.08}>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            From content sites to full-stack products, here&apos;s where we
            spend most of our time.
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
