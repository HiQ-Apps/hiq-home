import type { LucideIcon } from "lucide-react";
import { BookOpen, Boxes, Building2, Cloud, Layers, ShoppingCart, Smartphone, Sparkles } from "lucide-react";

export const site = {
  name: "HiQ-Apps",
  tagline: "Professional software, without the agency price tag.",
  blurb:
    "HiQ-Apps is a dedicated team designing and engineering web and mobile products people actually enjoy using. We move fast, price fairly, and sweat every detail so you don't have to.",
  email: "hello@hiq-apps.com",
  location: "Remote, Worldwide",
};

export const socials = [
  { label: "GitHub", href: "https://github.com/hiq-apps" },
  { label: "LinkedIn", href: "https://linkedin.com/company/hiq-apps" },
  { label: "X", href: "https://x.com/hiqapps" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Work = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

export const works: Work[] = [
  {
    title: "Flora & Flame",
    description:
      "A direct-to-consumer storefront for an Oakland craft cannabis cultivator, built around strain education, terpene profiles, and a living-soil, slow-grown brand story.",
    href: "https://floraflame.vercel.app",
    tags: ["Web Design", "E-commerce"],
  },
  {
    title: "The Good Standard",
    description:
      "An editorial and lifestyle site for sustainable living, covering sustainable fashion, natural design, and eco-friendly home upgrades built around thoughtful consumption.",
    href: "https://thegoodstandard.org",
    tags: ["Web Design", "Editorial"],
  },
  {
    title: "Git Universe",
    description:
      "A visual explorer for Git repositories, mapping commits, branches, and contributor activity into an interactive, navigable universe.",
    href: "https://git-universe-nine.vercel.app",
    tags: ["Web App", "Developer Tools"],
  },
];

export type Idea = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag: string;
};

export const ideas: Idea[] = [
  {
    icon: BookOpen,
    title: "Blogs & Editorial",
    description:
      "Content-first sites built for readers: fast pages, clean typography, and a CMS your team can actually use without our help.",
    tag: "Frontend",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Storefronts, product catalogs, and checkout flows tuned for conversion, from a handful of SKUs to a full inventory.",
    tag: "Full-stack",
  },
  {
    icon: Building2,
    title: "Business Sites",
    description:
      "Brochure sites and landing pages that make a strong first impression and turn visitors into leads.",
    tag: "Frontend",
  },
  {
    icon: Layers,
    title: "Full-Stack Apps",
    description:
      "Dashboards, internal tools, and products with real logic behind them, databases, auth, and everything in between.",
    tag: "Full-stack",
  },
];

export const services: Service[] = [
  {
    icon: Boxes,
    title: "Web Applications",
    description:
      "Fast, accessible product interfaces built on modern frameworks, taking you from first prototype to production without the bloat.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native-feeling iOS and Android apps, built for speed and polish across the whole experience.",
  },
  {
    icon: Sparkles,
    title: "Product Design",
    description:
      "Interfaces that stay out of the way: clear systems, considered motion, and a visual identity people remember.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales quietly, with CI/CD, observability, and cloud architecture handled right the first time.",
  },
];
