import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary-soft px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
      {children}
    </div>
  );
}

export function SectionHeader({ kicker, title, subtitle, center = true }: { kicker?: string; title: ReactNode; subtitle?: ReactNode; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {kicker && <div className="mb-4 flex justify-center"><Badge>{kicker}</Badge></div>}
      <h2 className="text-[32px] font-extrabold tracking-tight text-foreground md:text-[44px] md:leading-[1.08]">{title}</h2>
      {subtitle && <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">{subtitle}</p>}
    </div>
  );
}

type BtnProps = { to?: string; href?: string; children: ReactNode; variant?: "primary" | "ghost" | "outline"; className?: string };

export function CTA({ to, href, children, variant = "primary", className = "" }: BtnProps) {
  const base = "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[14px] font-semibold transition-all duration-300";
  const styles = {
    primary: "bg-gradient-to-r from-primary to-[oklch(0.48_0.24_265)] text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.55_0.22_265/0.6)] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-12px_oklch(0.55_0.22_265/0.75)]",
    outline: "border border-border bg-white text-foreground hover:border-primary hover:text-primary",
    ghost: "text-foreground hover:text-primary",
  }[variant];
  const cls = `${base} ${styles} ${className}`;
  const inner = (
    <>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
    </>
  );
  if (to) return <Link to={to as string} className={cls}>{inner}</Link>;
  return <a href={href ?? "#"} className={cls}>{inner}</a>;
}

export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-3xl border border-border/70 bg-white/70 p-8 shadow-[0_4px_20px_-8px_oklch(0.2_0.05_265/0.1)] backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_60px_-20px_oklch(0.55_0.22_265/0.25)] ${className}`}>
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-40 bg-gradient-to-b from-primary/10 to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function FloatingBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-primary/15 blur-[120px]" />
      <div className="absolute right-[-100px] top-60 h-[380px] w-[380px] rounded-full bg-[oklch(0.7_0.18_295/0.25)] blur-[120px]" />
    </div>
  );
}
