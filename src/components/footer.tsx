"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-border px-6 py-8"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with Next.js
        </p>
      </div>
    </motion.footer>
  );
}
