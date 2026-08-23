"use client";

import { motion } from "framer-motion";
import { LanguageSwitcher } from "@/components/language-switcher";
import { site } from "@/lib/content";
import { useI18n } from "@/lib/i18n/context";

export function Nav() {
  const { t } = useI18n();
  const navLinks = [
    { key: "about", href: "#about", label: t.nav.about },
    { key: "work", href: "#work", label: t.nav.work },
    { key: "ideas", href: "#ideas", label: t.nav.ideas },
    { key: "contact", href: "#contact", label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-foreground"
        >
          <span className="relative flex size-1.5">
            <motion.span
              className="absolute inline-flex size-full rounded-full bg-primary"
              animate={{ scale: [1, 2.2], opacity: [0.7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
            />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          {site.name}
        </a>
        <div className="flex items-center gap-4 sm:gap-6">
          <ul className="flex items-center gap-4 sm:gap-6">
            {navLinks.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="group relative inline-block font-mono text-[11px] uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground sm:text-xs"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitcher />
        </div>
      </nav>
    </motion.header>
  );
}
