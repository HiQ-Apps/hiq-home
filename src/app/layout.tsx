import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AmbientField } from "@/components/three/ambient-field";
import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
import { site, socials } from "@/lib/content";
import { I18nProvider } from "@/lib/i18n/context";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "HiQ-Apps | Software Studio",
  description:
    "HiQ-Apps is a small, senior software studio designing and engineering web and mobile products at studio-friendly rates. See our work and get in touch.",
  keywords: [
    "software studio",
    "web development agency",
    "mobile app development",
    "product design studio",
    "affordable software development",
    "Next.js development",
  ],
  authors: [{ name: "HiQ-Apps" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "HiQ-Apps | Software Studio",
    description:
      "HiQ-Apps is a small, senior software studio designing and engineering web and mobile products at studio-friendly rates.",
    url: siteUrl,
    siteName: "HiQ-Apps",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HiQ-Apps | Software Studio",
    description:
      "HiQ-Apps is a small, senior software studio designing and engineering web and mobile products at studio-friendly rates.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.blurb,
  url: siteUrl,
  email: site.email,
  areaServed: "Worldwide",
  sameAs: socials.map((social) => social.href),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          <ScrollProgress />
          <AmbientField />
          <Nav />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
