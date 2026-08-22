import type { LucideIcon } from "lucide-react";
import { Boxes, Cloud, Smartphone, Sparkles } from "lucide-react";

export const site = {
  name: "HiQ-Apps",
  tagline: "High-quality software, built with intent.",
  blurb:
    "HiQ-Apps is a small studio designing and engineering web and mobile products for teams who care about the details. Fewer, better decisions — shipped fast.",
  email: "hello@hiq-apps.com",
  location: "Remote — Worldwide",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
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
      "A direct-to-consumer storefront for an Oakland craft cannabis cultivator — strain education, terpene profiles, and dispensary sourcing built around a living-soil, slow-grown brand story.",
    href: "https://floraflame.vercel.app",
    tags: ["Web Design", "E-commerce"],
  },
  {
    title: "The Good Standard",
    description:
      "An editorial and lifestyle site for sustainable living — sustainable fashion, natural design, and eco-friendly home upgrades built around thoughtful consumption and enduring style.",
    href: "https://thegoodstandard.org",
    tags: ["Web Design", "Editorial"],
  },
];

export const services: Service[] = [
  {
    icon: Boxes,
    title: "Web Applications",
    description:
      "Fast, accessible product interfaces built on modern frameworks — from first prototype to production.",
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
      "Interfaces that stay out of the way — clear systems, considered motion, and a strong visual identity.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales quietly — CI/CD, observability, and cloud architecture done right.",
  },
];
