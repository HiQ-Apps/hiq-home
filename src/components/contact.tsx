"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionBlobs } from "@/components/section-blobs";
import { SectionReveal } from "@/components/section-reveal";
import { site, socials } from "@/lib/content";
import { useI18n } from "@/lib/i18n/context";

export function Contact() {
  const { t } = useI18n();

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <SectionBlobs variant="b" />
      <div className="relative mx-auto max-w-5xl">
        <SectionReveal variant="blur">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            05 / {t.contact.eyebrow}
          </p>
        </SectionReveal>

        <SectionReveal variant="blur" delay={0.05}>
          <h2 className="mt-4 flex max-w-xl items-center gap-3 text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            {t.contact.heading}
            <motion.span
              className="inline-block origin-[70%_70%]"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, 16, -8, 16, -4, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              👋
            </motion.span>
          </h2>
        </SectionReveal>

        <SectionReveal variant="blur" delay={0.1}>
          <motion.a
            href={`mailto:${site.email}`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
            className="group mt-10 inline-flex flex-wrap items-baseline gap-2 break-all text-2xl font-medium text-foreground sm:text-3xl md:text-4xl"
          >
            {site.email}
            <ArrowUpRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:size-6" />
          </motion.a>
        </SectionReveal>

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border pt-8">
          <SectionReveal variant="blur" delay={0.15}>
            <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
              {t.contact.location}
            </span>
          </SectionReveal>
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.4, delay: 0.18 + i * 0.06 }}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {social.label}
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
