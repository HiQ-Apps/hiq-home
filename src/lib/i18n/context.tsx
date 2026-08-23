"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { defaultLang, type Lang } from "@/lib/i18n/languages";
import { translations, type Translations } from "@/lib/i18n/translations";

const STORAGE_KEY = "hiq-lang";

type I18nContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function detectLang(): Lang {
  if (typeof navigator === "undefined") return defaultLang;
  const supported: Lang[] = ["en", "es", "fr", "zh"];
  const primary = navigator.language.slice(0, 2).toLowerCase();
  return (supported as string[]).includes(primary)
    ? (primary as Lang)
    : defaultLang;
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(defaultLang);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    setLangState((stored as Lang | null) ?? detectLang());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
