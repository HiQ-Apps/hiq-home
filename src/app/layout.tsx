import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AmbientField } from "@/components/three/ambient-field";
import { Nav } from "@/components/nav";
import { ScrollProgress } from "@/components/scroll-progress";
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
  title: "HiQ-Apps — Software Studio",
  description:
    "HiQ-Apps is a small studio designing and engineering web and mobile products.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollProgress />
        <AmbientField />
        <Nav />
        {children}
      </body>
    </html>
  );
}
