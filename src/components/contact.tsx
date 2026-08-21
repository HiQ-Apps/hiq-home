"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/section-reveal";
import { site, socials } from "@/lib/content";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            03 — Contact
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2 className="mt-4 max-w-xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            Have a project in mind? Get in touch.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <motion.a
            href={`mailto:${site.email}`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="group mt-10 inline-flex items-baseline gap-2 text-3xl font-medium text-foreground sm:text-4xl"
          >
            {site.email}
            <ArrowUpRight className="size-6 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {site.location}
            </span>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
              >
                {social.label}
              </a>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
