import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono text-xs text-muted-foreground">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
