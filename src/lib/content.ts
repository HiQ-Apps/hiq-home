import type { LucideIcon } from "lucide-react";
import { Boxes, Cloud, Leaf, Repeat2, Shirt, Smartphone, Sparkles, Sprout } from "lucide-react";

export const site = {
  name: "HiQ-Apps",
  tagline: "Senior-level software, without the agency price tag.",
  blurb:
    "HiQ-Apps is a small, senior team designing and engineering web and mobile products people actually enjoy using. We move fast, price fairly, and sweat every detail so you don't have to.",
  email: "hello@hiq-apps.com",
  location: "Remote, Worldwide",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Ideas", href: "#ideas" },
  { label: "Contact", href: "#contact" },
];

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
];

export type Idea = {
  icon: LucideIcon;
  title: string;
  description: string;
  inspiredBy: string;
};

export const ideas: Idea[] = [
  {
    icon: Leaf,
    title: "Strain Match",
    description:
      "A quiz-driven app that pairs customers with strains and terpene profiles based on the effects they want, synced live to dispensary inventory.",
    inspiredBy: "Flora & Flame",
  },
  {
    icon: Sprout,
    title: "Grow Journal",
    description:
      "A living-soil cultivation log for home growers: feeding schedules, soil health notes, and harvest history in one place.",
    inspiredBy: "Flora & Flame",
  },
  {
    icon: Shirt,
    title: "Mend or Replace",
    description:
      "A wardrobe app that tracks garment care and cost-per-wear, nudging you to repair natural-fiber pieces instead of replacing them.",
    inspiredBy: "The Good Standard",
  },
  {
    icon: Repeat2,
    title: "Swap Standard",
    description:
      "A local swap-and-resell marketplace for secondhand sustainable fashion, built around the same raise-your-standard ethos.",
    inspiredBy: "The Good Standard",
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
