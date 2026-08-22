"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";
import { works } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            02 — Work
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2 className="mt-4 max-w-xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            A few things we&apos;ve shipped
          </h2>
        </SectionReveal>

        <div className="mt-12 flex flex-col gap-4">
          {works.map((work, i) => (
            <SectionReveal key={work.title} delay={0.08 * i}>
              <motion.a
                href={work.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group block"
              >
                <Card className="border-border/80 bg-card/60 transition-colors group-hover:border-primary/40">
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium text-foreground">
                          {work.title}
                        </h3>
                        <ArrowUpRight className="size-4 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                      <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted-foreground">
                        {work.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {work.tags.map((tag) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
