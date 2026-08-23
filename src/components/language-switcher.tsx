"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { languages } from "@/lib/i18n/languages";
import { useClickOutside } from "@/lib/use-click-outside";

export function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => setOpen(false));

  const current = languages.find((l) => l.code === lang) ?? languages[0];

  return (
    <div ref={ref} className="relative">
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Change language"
        aria-expanded={open}
        className="flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 px-2.5 py-1.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
      >
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Globe className="size-3.5" />
        </motion.span>
        <span className="font-mono text-[11px] uppercase tracking-widest">
          {current.flag} {current.code}
        </span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-full z-50 mt-2 w-40 overflow-hidden rounded-xl border border-border/80 bg-card/95 p-1 shadow-lg backdrop-blur-md"
          >
            {languages.map((l) => (
              <li key={l.code}>
                <motion.button
                  type="button"
                  onClick={() => {
                    setLang(l.code);
                    setOpen(false);
                  }}
                  whileHover={{ x: 3 }}
                  className={`flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left text-sm transition-colors ${
                    l.code === lang
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-primary/5 hover:text-foreground"
                  }`}
                >
                  <span className="text-base">{l.flag}</span>
                  {l.label}
                </motion.button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
