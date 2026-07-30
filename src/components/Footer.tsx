import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, Youtube, Mail, ArrowRight } from "lucide-react";

const quickLinks = [
  { to: "/", label: "Home" },
];
const resourceLinks = [
  { to: "/", label: "Blog" },
  { to: "/", label: "Careers" },
  { to: "/", label: "Privacy" },
  { to: "/", label: "Terms" },
];

export function Footer() {
  return (
    <footer className="mt-24 bg-navy text-navy-foreground">
      <div className="mx-auto grid gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div className="max-w-sm">
          <div className="flex items-center gap-2.5">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary to-[oklch(0.42_0.24_265)] text-primary-foreground shadow-soft">
              <span className="text-lg font-black">H</span>
            </div>
            <div className="leading-tight">
              <div className="text-[18px] font-extrabold tracking-tight">HireLeap</div>
              <div className="text-[10.5px] text-navy-foreground/60">Better Decisions. Better Careers.</div>
            </div>
          </div>
          <p className="mt-5 text-[13.5px] leading-relaxed text-navy-foreground/70">
            The career decision platform trusted by professionals worldwide to make confident, data-driven career leaps.
          </p>
          <div className="mt-6 flex items-center gap-2.5">
            {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 text-navy-foreground/80 transition hover:border-primary/60 hover:bg-primary/20 hover:text-white">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 text-[12px] font-bold uppercase tracking-widest text-navy-foreground/50">Quick Links</div>
          <ul className="space-y-3 text-[13.5px]">
            {quickLinks.map((l) => (
              <li key={l.label}><Link to={l.to as string} className="text-navy-foreground/80 transition hover:text-white">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-5 text-[12px] font-bold uppercase tracking-widest text-navy-foreground/50">Resources</div>
          <ul className="space-y-3 text-[13.5px]">
            {resourceLinks.map((l) => (
              <li key={l.label}><a href="#" className="text-navy-foreground/80 transition hover:text-white">{l.label}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-5 text-[12px] font-bold uppercase tracking-widest text-navy-foreground/50">Newsletter</div>
          <p className="text-[13.5px] leading-relaxed text-navy-foreground/70">Career insights delivered monthly. No spam.</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1.5 pl-4 backdrop-blur">
            <Mail className="h-4 w-4 shrink-0 text-navy-foreground/50" />
            <input type="email" required placeholder="you@work.com" className="min-w-0 flex-1 bg-transparent text-[13px] text-white placeholder:text-navy-foreground/40 focus:outline-none" />
            <button type="submit" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition hover:brightness-110">
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex flex-col items-start justify-between gap-3 px-6 py-5 text-[12.5px] md:flex-row md:items-center lg:px-10">
          <div className="text-navy-foreground/70">© 2026 HireLeap Global LLC</div>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-navy-foreground/70">CAREER DECISION PLATFORM</span>
            <span className="text-navy-foreground/30">|</span>
            <span className="font-semibold text-navy-accent">Better Decisions. Better Careers.</span>
          </div>
          <div className="text-navy-foreground/80">www.hireleap.com</div>
        </div>
      </div>
    </footer>
  );
}
