import { SectionReveal } from "@/components/section-reveal";

const stats = [
  { label: "Founded", value: "2023" },
  { label: "Shipped", value: "20+ products" },
  { label: "Based", value: "Remote-first" },
];

export function About() {
  return (
    <section id="about" className="px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            01 — About
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2 className="mt-4 max-w-2xl text-2xl font-medium leading-snug text-foreground sm:text-3xl">
            A small, senior team that prefers finished work over busywork
            — clean code, considered design, and honest communication.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-8 border-t border-border pt-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mt-2 text-xl font-medium text-foreground">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
