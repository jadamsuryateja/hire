import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PageShell } from "@/components/PageShell";
import { VideoModal } from "@/components/VideoModal";
import heroImg from "@/assets/hero-career.jpg";
import infinityLoopAsset from "@/assets/infinity-loop.png";
import {
  Sparkles,
  Play,
  HelpCircle,
  Move,
  User,
  TrendingUp,
  Target,
  Compass,
  Scale,
  CheckCircle2,
  Rocket,
  Quote,
  ChevronRight,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <PageShell>
      <Helmet>
        <title>HireLeap — Career Decision Platform</title>
        <meta name="description" content="Every career has defining moments. HireLeap combines AI intelligence with expert guidance to help you make career decisions with clarity and confidence." />
      </Helmet>
      <Hero />
      <SoundFamiliar />
      <MethodSection />
      <LogosStrip />
      <TestimonialSection />
    </PageShell>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="grid w-full items-center gap-8 lg:grid-cols-[3fr_7fr] lg:gap-10">
      <div className="px-5 py-8 sm:px-6 sm:py-10 lg:py-14 lg:pl-10">

        <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-foreground sm:text-[48px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] min-[1920px]:text-[52px]">
          Every career has<br />defining moments.
          <br />
          <span className="text-primary">
            The next one<br />deserves{" "}
            <span className="relative inline-block">
              clarity
              <svg className="absolute -bottom-[0.12em] left-0 w-full h-[0.3em] text-primary" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 2,17 Q 50,-2 98,17" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
            .
          </span>
        </h1>
        <p className="mt-6 max-w-[480px] text-[15px] leading-relaxed text-muted-foreground sm:text-[15.5px]">
          Whether you're taking your{" "}
          <Link to="/" className="font-semibold text-primary underline underline-offset-2">
            first career step
          </Link>{" "}
          or navigating what's next, HireLeap combines AI intelligence with expert guidance to help you make career decisions with clarity and confidence.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="#plan"
            onClick={() => console.log('Analytics Event: Primary CTA Clicked - Plan Your Next Leap')}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-[14px] font-semibold text-primary-foreground shadow-soft transition-all hover:brightness-110 sm:text-[15px]"
          >
            Plan Your Next Leap <span aria-hidden>→</span>
          </Link>
          <VideoModal>
            <button 
              onClick={() => console.log('Analytics Event: Secondary CTA Clicked - Explore How It Works Video')}
              aria-label="Play introductory video"
              className="inline-flex items-center gap-2.5 rounded-lg border border-border bg-background px-5 py-3.5 text-[14px] font-semibold text-foreground transition-colors hover:border-primary sm:text-[15px]"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-primary-foreground">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Explore How It Works
            </button>
          </VideoModal>
        </div>
      </div>

      {/* Visual */}
      <div className="relative self-stretch overflow-hidden min-h-[280px] sm:min-h-[420px]">
        <img
          src={heroImg}
          alt="Professional gazing at a sunset city skyline"
          width={1408}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)] lg:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)]"
        />
      </div>
    </section>
  );
}

/* ---------------- SOUND FAMILIAR ---------------- */
function SoundFamiliar() {
  const items = [
    { icon: <HelpCircle className="h-5 w-5" />, tint: "bg-danger/10 text-danger", title: "Not sure if", desc: "you're on the right career path?" },
    { icon: <Move className="h-5 w-5" />, tint: "bg-warning/10 text-warning", title: "Confused about", desc: "your next move or transition?" },
    { icon: <User className="h-5 w-5" />, tint: "bg-[oklch(0.75_0.15_75)]/10 text-[oklch(0.65_0.15_75)]", title: "Wondering how", desc: "to grow or pivot with confidence?" },
    { icon: <TrendingUp className="h-5 w-5" />, tint: "bg-success/10 text-success", title: "Overwhelmed by", desc: "too many options and advice?" },
    { icon: <Target className="h-5 w-5" />, tint: "bg-violet/10 text-violet", title: "Looking for clarity", desc: "and a clear plan for your future?" },
  ];
  return (
    <section className="relative z-10 mt-6 w-full px-4 sm:px-6 lg:-mt-5 lg:px-10">
      <div className="grid items-center gap-6 rounded-2xl border border-border bg-card px-5 py-6 shadow-card sm:px-6 sm:py-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.2fr_repeat(5,1fr)] xl:gap-0 xl:px-6 xl:py-10">
        <div className="flex flex-col items-center text-center md:col-span-2 md:pb-4 lg:col-span-3 xl:col-span-1 xl:items-start xl:pb-0 xl:text-left xl:border-r xl:border-border xl:pr-4">
          <div className="text-[15px] font-extrabold leading-tight text-primary">SOUND FAMILIAR?</div>
          <div className="mt-1 text-[12.5px] leading-tight text-muted-foreground">You're not alone.<br />We can help.</div>
        </div>
        {items.map((it, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 xl:px-4 ${i !== items.length - 1 ? "xl:border-r xl:border-border" : ""}`}
          >
            <div className={`grid h-11 w-11 flex-none place-items-center rounded-full sm:h-12 sm:w-12 ${it.tint}`}>
              {it.icon}
            </div>
            <div className="flex flex-col text-[12.5px] leading-[1.35] text-foreground">
              <span className="font-semibold">{it.title}</span>
              <span>{it.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



/* ---------------- METHOD (dark) ---------------- */
function MethodSection() {
  const steps = [
    { icon: <Target className="h-5 w-5" />, title: "Understand Yourself", desc: "Gain deep clarity about your strengths, interests and goals." },
    { icon: <Compass className="h-5 w-5" />, title: "Explore Options", desc: "Discover the right paths and opportunities." },
    { icon: <Scale className="h-5 w-5" />, title: "Evaluate Confidently", desc: "Make data-informed decisions with expert insights." },
    { icon: <CheckCircle2 className="h-5 w-5" />, title: "Decide Clearly", desc: "Build confidence in your best next step." },
    { icon: <Rocket className="h-5 w-5" />, title: "Leap Forward", desc: "Take action and create the career you deserve." },
  ];
  const avatars = [
    "https://i.pravatar.cc/80?img=12",
    "https://i.pravatar.cc/80?img=32",
    "https://i.pravatar.cc/80?img=52",
    "https://i.pravatar.cc/80?img=45",
  ];

  return (
    <section className="mt-10 w-full px-4 sm:px-6 lg:px-10">
      <div className="grid gap-8 rounded-2xl bg-navy px-6 py-8 text-navy-foreground shadow-card sm:px-8 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[2.2fr_1.4fr_1fr_1fr] lg:gap-0 lg:px-10 lg:py-10">
        {/* Method steps */}
        <div className="md:col-span-2 lg:col-span-1 lg:border-r lg:border-white/10 lg:pr-8">
          <h4 className="mb-6 text-[11px] font-extrabold tracking-[0.18em] text-navy-accent">THE HIRELEAP METHOD™</h4>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:flex lg:items-start lg:gap-0">
            {steps.map((s, i) => (
              <div key={s.title} className="relative flex flex-col items-center text-center lg:flex-1 lg:px-1">
                <div className="grid h-14 w-14 place-items-center rounded-full border border-white/25 bg-white/[0.03] text-navy-foreground">
                  {s.icon}
                </div>
                <h5 className="mt-3 text-[12.5px] font-bold leading-tight">{s.title}</h5>
                <p className="mt-2 text-[10.5px] leading-[1.45] text-navy-foreground/60">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="pointer-events-none absolute left-[calc(50%+1.75rem)] right-[calc(-50%+1.75rem)] top-7 -translate-y-1/2 hidden items-center gap-0.5 text-white/50 lg:flex">
                    <div className="h-px flex-1 border-t border-dotted border-white/50" />
                    <ChevronRight className="h-3.5 w-3.5 -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* AI + Human */}
        <div className="md:col-span-2 lg:col-span-1 lg:border-r lg:border-white/10 lg:px-6 lg:mt-0">
          <h4 className="mb-6 text-[11px] font-extrabold tracking-[0.18em] text-navy-accent">AI + HUMAN GUIDANCE</h4>
          <div className="relative mx-auto w-full max-w-[260px]">
            {/* Infinity loop image */}
            <img
              src={infinityLoopAsset}
              alt="AI and human guidance infinity loop"
              className="block w-full"
            />

            {/* AI label centered in left loop */}
            <div className="pointer-events-none absolute left-[22%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-[10px] font-semibold leading-tight text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]">
              AI<br />Intelligence
            </div>

            {/* Expert label centered in right loop */}
            <div className="pointer-events-none absolute left-[78%] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center text-[10px] font-semibold leading-tight text-white drop-shadow-[0_0_6px_rgba(0,0,0,0.9)]">
              Expert<br />Guidance
            </div>
          </div>
          <p className="mt-5 text-center text-[10.5px] leading-[1.55] text-navy-foreground/65">
            AI analyzes thousands of data points to uncover opportunities and insights—while our career experts provide the human perspective to guide you forward.
          </p>
        </div>

        {/* Trusted */}
        <div className="lg:border-r lg:border-white/10 lg:px-6 lg:mt-0">
          <h4 className="mb-6 text-[11px] font-extrabold tracking-[0.18em] text-navy-accent">TRUSTED BY PROFESSIONALS</h4>
          <div className="text-[28px] font-extrabold leading-[1.1] tracking-tight">Proven<br/>Impact</div>
          <div className="mt-2 text-[12px] text-navy-foreground/70">Real career leaps</div>
          <div className="mt-5 flex items-center">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                loading="lazy"
                width={36}
                height={36}
                className="-mr-2 h-9 w-9 rounded-full border-2 border-navy object-cover"
              />
            ))}
            <div className="grid h-9 w-9 place-items-center rounded-full border-2 border-navy bg-white/10 text-[13px] font-bold">+</div>
          </div>
        </div>

        {/* Quote */}
        <div className="lg:pl-6 lg:mt-0">
          <Quote className="h-5 w-5 fill-primary text-primary" />
          <p className="mt-3 text-[12px] leading-[1.55] text-navy-foreground/90">
            "HireLeap helped me gain the clarity I needed to make a bold move. Best decision of my career."
          </p>
          <div className="mt-4">
            <div className="text-[12.5px] font-bold">– Anjali S.</div>
            <div className="text-[11px] text-navy-foreground/60">Product Manager</div>
          </div>
          <div className="mt-2 flex gap-0.5 text-warning">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-current" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LOGOS ---------------- */
function LogosStrip() {
  const logos = [
    { name: "Google", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/google.svg" },
    { name: "Microsoft", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoft.svg" },
    { name: "Amazon", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/amazon.svg", customClass: "scale-110" },
    { name: "Deloitte", url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Logo_of_Deloitte.svg" },
    { name: "JPMorgan Chase & Co.", url: "https://upload.wikimedia.org/wikipedia/commons/0/07/J_P_Morgan_Chase_Logo_2008_1.svg" },
    { name: "Accenture", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/accenture.svg" },
    { name: "IBM", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/ibm.svg", customClass: "scale-[1.7]" },
    { name: "Adobe", url: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/adobe.svg" },
  ];
  
  return (
    <section className="w-full px-6 pb-2 pt-10 text-center lg:px-10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
      <div className="mb-5 text-[11.5px] font-extrabold tracking-widest text-primary">
        TRUSTED BY PROFESSIONALS FROM LEADING COMPANIES
      </div>
      <div className="group relative flex overflow-hidden w-full max-w-full">
        <div className="flex animate-marquee items-center gap-x-14 gap-y-4 text-[18px] font-bold text-muted-foreground/80 group-hover:[animation-play-state:paused] motion-reduce:animate-none pr-14">
          {[...logos, ...logos, ...logos].map((l, i) => (
            <div key={`${l.name}-${i}`} className="flex items-center justify-center shrink-0">
              <img 
                src={l.url} 
                alt={`${l.name} logo`} 
                title={l.name}
                className={`h-7 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 ${l.customClass || ""}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function TestimonialSection() {
  return (
    <section className="w-full px-6 py-20 lg:px-10 bg-muted/30">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-[28px] font-extrabold tracking-tight sm:text-[36px]">Real Stories. Real Results.</h2>
        <p className="mt-4 text-[15px] text-muted-foreground">Hear from professionals who used HireLeap to navigate their career paths.</p>
        
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:gap-8">
          <div className="rounded-2xl border border-border bg-background p-6 text-left shadow-soft">
            <Quote className="h-6 w-6 text-primary/40 mb-4" />
            <p className="text-[14.5px] leading-relaxed text-foreground/90">
              "HireLeap helped me transition from a mid-level role to a leadership position within 6 months. The AI insights were spot on, and the human coaching gave me the confidence I needed."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?img=33" alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="text-[13px] font-bold">Sarah Jenkins</div>
                <div className="text-[11px] text-muted-foreground">VP of Engineering</div>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6 text-left shadow-soft">
            <Quote className="h-6 w-6 text-primary/40 mb-4" />
            <p className="text-[14.5px] leading-relaxed text-foreground/90">
              "I was stuck in a rut for years. The platform didn't just give me advice; it gave me a step-by-step roadmap. Highly recommended for anyone feeling lost in their career."
            </p>
            <div className="mt-6 flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?img=11" alt="" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <div className="text-[13px] font-bold">David Chen</div>
                <div className="text-[11px] text-muted-foreground">Product Marketing Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
