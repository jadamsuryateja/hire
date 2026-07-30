import { CTA } from "./Primitives";
import { Reveal } from "./Reveal";

export function CTASection({ kicker, title, primary, secondary }: { kicker?: string; title: string; primary: { label: string; to?: string }; secondary?: { label: string; to?: string } }) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/30 blur-[140px]" />
        <div className="absolute -right-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[oklch(0.65_0.22_295/0.35)] blur-[140px]" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          {kicker && <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.14em] text-navy-accent backdrop-blur">{kicker}</div>}
          <h2 className="text-[34px] font-extrabold leading-[1.1] tracking-tight md:text-[52px]">{title}</h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CTA to={primary.to ?? "/contact"}>{primary.label}</CTA>
            {secondary && <CTA to={secondary.to ?? "/contact"} variant="outline" className="bg-white/5 text-white hover:bg-white hover:text-primary">{secondary.label}</CTA>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
