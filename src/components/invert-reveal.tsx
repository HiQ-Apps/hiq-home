import type { ReactNode } from "react";

export function InvertReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className="relative isolate block overflow-hidden">
      <span className={className}>{children}</span>
      <span
        aria-hidden
        className={`absolute inset-0 flex translate-y-full items-start bg-primary text-primary-foreground transition-transform duration-300 ease-out group-hover:translate-y-0 ${className}`}
      >
        {children}
      </span>
    </span>
  );
}
