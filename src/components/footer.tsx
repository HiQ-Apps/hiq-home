"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useI18n();

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
        <p className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          {t.footer.builtWith}
          <motion.span
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
          >
            <Heart className="size-3 fill-primary text-primary" />
          </motion.span>
          {t.footer.and}
        </p>
      </div>
    </motion.footer>
  );
}
