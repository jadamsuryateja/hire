import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { CloudRain, Briefcase, CalendarClock, Cpu, Users, CircleDollarSign, Compass, Quote, Ear, Search, FileText, Target, Rocket, Check, Sparkles, ShieldCheck, Shield, FileCheck, Award, Lightbulb, Eye, Heart, ArrowRight, Headset } from "lucide-react";
import whyWeExistImg from "../assets/whyweexist.png";

export default function WhyWeExist() {
  return (
    <PageShell>
      <Helmet>
        <title>Why We Exist — HireLeap</title>
        <meta name="description" content="Every career reaches moments where the next decision matters more than the next opportunity. HireLeap exists for those moments." />
      </Helmet>
      <Hero />
      <TheReality />
      <OurBelief />
      <WhatMakesUsDifferent />
      <ThePromise />
      <MissionVision />
      <CorePrinciples />
      <FinalCTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="grid w-full items-center gap-8 lg:grid-cols-[3fr_7fr] lg:gap-10">
      <div className="px-5 py-8 sm:px-6 sm:py-10 lg:py-14 lg:pl-10">
        <div className="mb-5 text-[12px] font-bold uppercase tracking-widest text-primary">
          Why We Exist
        </div>
        <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-foreground sm:text-[48px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] min-[1920px]:text-[52px]">
          Every career reaches moments where the next decision matters more than the next opportunity.
          <br />
          <br />
          <span className="text-primary block">
            HireLeap exists for those{" "}
            <span className="relative inline-block">
              moments.
              <svg className="absolute -bottom-[0.2em] left-0 w-full h-[0.35em] text-primary" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 15,18 Q 50,10 85,18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
          </span>
        </h1>
        <div className="mt-8">
          <Link to="/career-journeys" className="inline-flex items-center justify-center space-x-2 rounded-full bg-primary px-6 py-2.5 font-bold text-white transition-transform hover:scale-105 hover:shadow-lg">
            <span className="text-[15px]">Career Journeys</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Visual */}
      <div className="relative self-stretch overflow-hidden min-h-[280px] sm:min-h-[420px]">
        <img
          src={whyWeExistImg}
          alt="Professional working at desk with laptop and notes"
          width={1408}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)] lg:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)]"
        />
      </div>
    </section>
  );
}

function TheReality() {
  const painPoints = [
    { icon: CloudRain, label: "Uncertainty" },
    { icon: Briefcase, label: "Layoffs &\nJob Market" },
    { icon: CalendarClock, label: "Visa Deadlines\n& Constraints" },
    { icon: Cpu, label: "AI & Tech\nDisruption" },
    { icon: Users, label: "Family\nResponsibilities" },
    { icon: CircleDollarSign, label: "Financial\nPressure" },
    { icon: Compass, label: "Confidence\n& Direction" },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-4">
      <div className="mx-auto flex w-full max-w-full flex-col gap-8 lg:flex-row lg:items-center">
        {/* Left Column */}
        <div className="w-full lg:w-[22%] xl:w-[18%] flex-shrink-0 lg:border-r lg:border-border/50 pl-5 sm:pl-6 lg:pl-8 lg:pr-8">
          <h2 className="mb-6 whitespace-nowrap font-serif text-[32px] font-bold text-foreground sm:text-[40px]">
            The Reality
          </h2>
          <p className="mb-4 text-[16px] font-bold leading-snug text-foreground sm:text-[18px]">
            Career decisions aren't made<br className="hidden lg:block" /> in perfect conditions.
          </p>
          <p className="text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
            People are trying to decide while facing uncertainty, pressure and constant change in the world around them.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex w-full flex-col lg:w-[78%] xl:w-[82%] lg:pl-6 pr-5 sm:pr-6 lg:pr-8">
          {/* Icons Row */}
          <div className="mb-6 flex overflow-x-auto snap-x snap-mandatory flex-nowrap hide-scrollbar gap-4 pb-4 sm:grid sm:grid-cols-4 lg:flex lg:justify-between w-full">
            {painPoints.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex shrink-0 w-[120px] sm:w-auto flex-col px-1 sm:px-2 snap-center lg:flex-1 items-center text-center ${idx !== painPoints.length - 1 ? 'lg:border-r lg:border-border/50' : ''}`}
              >
                <item.icon className="mb-4 h-7 w-7 text-primary" strokeWidth={1.5} />
                <div className="whitespace-pre-line text-[11px] font-semibold leading-tight text-foreground sm:text-[12px]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-center">
            <p className="text-[16px] font-medium text-foreground sm:text-[18px]">
              These decisions deserve more than random advice.<br />
              They deserve <span className="font-bold text-primary">clarity, guidance</span> and a partner you can trust.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurBelief() {
  return (
    <section className="w-full bg-[#F8FAFC] py-4">
      <div className="mx-auto flex w-full max-w-full flex-col gap-8 lg:flex-row lg:items-center">
        {/* Left Column */}
        <div className="w-full lg:w-[22%] xl:w-[18%] flex-shrink-0 lg:border-r lg:border-border/50 pl-5 sm:pl-6 lg:pl-8 lg:pr-8">
          <h2 className="mb-6 whitespace-nowrap font-serif text-[32px] font-bold text-foreground sm:text-[40px]">
            Our Belief
          </h2>
          <Quote className="h-16 w-16 fill-[#E0E7FF] text-[#E0E7FF]" />
        </div>

        {/* Right Column */}
        <div className="flex w-full flex-col gap-3 lg:w-[78%] xl:w-[82%] lg:pl-6">
          <p className="font-serif text-[28px] font-medium leading-tight text-foreground lg:text-[34px]">
            We don't believe better careers<br className="hidden lg:block" /> begin with better resumes.
          </p>
          <p className="font-serif text-[28px] font-medium leading-tight text-primary lg:text-[34px]">
            We believe better careers<br className="hidden lg:block" /> begin with better{" "}
            <span className="relative inline-block">
              decisions.
              <svg className="absolute -bottom-[0.12em] left-0 w-full h-[0.3em] text-primary" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M 2,17 Q 50,-2 98,17" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function WhatMakesUsDifferent() {
  const steps = [
    {
      title: "1. We Listen",
      subtitle: "Before advice, we understand.",
      icon: Ear,
      bullets: ["Your goals", "Your challenges", "Your strengths", "Your constraints", "Your dreams"],
    },
    {
      title: "2. We Evaluate",
      subtitle: "Industry experts review what matters.",
      icon: Search,
      bullets: ["Current profile", "Technical strengths", "Technical gaps", "Market readiness", "Career direction", "Life stage"],
    },
    {
      title: "3. We Prepare",
      subtitle: "We reposition you for the market.",
      icon: FileText,
      bullets: ["Resume", "LinkedIn", "Portfolio & Branding", "Communication", "Technical readiness", "Interview readiness"],
    },
    {
      title: "4. We Execute",
      subtitle: "We don't hand you advice and disappear.",
      icon: Target,
      bullets: ["Structured applications", "ATS optimization", "Targeted opportunities", "Interview preparation", "Salary negotiation", "Career decisions"],
    },
    {
      title: "5. We Stay",
      subtitle: "We stay with you beyond placement.",
      icon: Users,
      bullets: ["Next promotion", "Next relocation", "Next leadership role", "Next career leap"],
    },
    {
      title: "6. We Grow Together",
      subtitle: "Your success is our success.",
      icon: Rocket,
      bullets: ["Long-term guidance", "Skill & career growth", "Continuous support"],
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-20">
      <div className="mx-auto w-full max-w-full">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-8">
          
          {/* Left Column */}
          <div className="w-full lg:w-[22%] xl:w-[18%] flex-shrink-0 pl-5 sm:pl-6 lg:pl-8">
            <h2 className="mb-8 font-serif text-[32px] font-bold leading-[1.1] text-foreground sm:text-[36px] xl:text-[30px]">
              What Makes<br />
              HireLeap<br />
              Different
            </h2>
            <div className="text-[16px] font-medium leading-relaxed text-foreground/80 xl:text-[14px]">
              A clear journey. <span className="hidden sm:inline"><br /></span>
              Real partnership. <span className="hidden sm:inline"><br /></span>
              Measurable impact.
            </div>
          </div>

          {/* Right Column (Timeline Grid) */}
          <div className="relative w-full lg:w-[78%] xl:w-[82%]">
            {/* The actual horizontal line connecting circles, hidden on smaller screens where they wrap to avoid broken lines */}
            <div className="absolute left-8 right-8 top-6 hidden h-[1px] bg-[#E0E7FF] xl:block" />
            
            <div className="flex overflow-x-auto snap-x snap-mandatory flex-nowrap hide-scrollbar gap-4 pb-4 w-full sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 xl:gap-2">
              {steps.map((step, idx) => (
                <div key={idx} className="relative flex shrink-0 w-[260px] sm:w-auto flex-col items-center snap-center">
                  
                  {/* Icon Circle */}
                  <div className="relative z-10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md">
                    <step.icon className="h-5 w-5" />
                  </div>

                  {/* Card Body */}
                  <div className="flex h-full w-full flex-col rounded-[20px] border border-border/40 bg-white p-5 xl:p-3 2xl:p-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] text-center sm:text-left">
                    <h3 className="mb-1 text-[15px] xl:text-[13px] 2xl:text-[15px] font-bold text-foreground text-center sm:text-left">{step.title}</h3>
                    <p className="mb-4 text-[13px] xl:text-[11px] 2xl:text-[13px] leading-snug text-muted-foreground text-center sm:text-left">{step.subtitle}</p>
                    <ul className="flex flex-col gap-2">
                      {step.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start text-[13px] xl:text-[11px] 2xl:text-[13px] xl:tracking-tight text-foreground/80 justify-center sm:justify-start">
                          <Check className="mr-2 mt-[2px] h-[14px] w-[14px] xl:h-[12px] xl:w-[12px] xl:mt-[3px] 2xl:h-[14px] 2xl:w-[14px] 2xl:mt-[2px] shrink-0 text-primary" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Pill Banner */}
            <div className="mt-8 flex w-full flex-col items-center justify-center rounded-[30px] bg-[#F4F7FF] px-6 py-4 text-center sm:flex-row sm:px-8">
              <Sparkles className="mb-2 h-6 w-6 text-primary sm:mb-0 sm:mr-4 shrink-0" />
              <p className="text-[15px] text-foreground text-center sm:text-left">
                We combine <span className="font-semibold text-primary">AI intelligence, expert guidance,</span> and <span className="font-semibold text-primary">structured execution</span><br className="hidden sm:block" /> to turn your career goals into real outcomes.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function ThePromise() {
  const promiseItems = [
    { icon: ShieldCheck, label: "More\ninformed" },
    { icon: FileCheck, label: "Better\nprepared" },
    { icon: Shield, label: "More\nconfident" },
    { icon: Rocket, label: "Better\npositioned" },
    { icon: Award, label: "Better\nequipped\nto decide" },
    { icon: Target, label: "Closer to building\nthe career you\naspire to" },
  ];

  return (
    <section className="w-full bg-[#050814] py-8 sm:py-10 relative overflow-hidden">
      {/* Background gradients for a subtle dark tech atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(56,34,143,0.15),transparent_50%)]" />
      <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none bg-[radial-gradient(ellipse_at_bottom_right,rgba(56,34,143,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-8 px-5 sm:px-6 xl:flex-row xl:items-center relative z-10">
        
        {/* Left Column */}
        <div className="flex w-full flex-col xl:w-[20%] xl:pr-8">
          <h2 className="mb-4 font-serif text-[28px] font-bold leading-[1.1] text-white sm:text-[32px] xl:text-[28px]">
            The HireLeap<br className="hidden sm:block" /> Promise
          </h2>
        </div>

        {/* Middle Column */}
        <div className="flex w-full flex-col xl:w-[50%] xl:border-l xl:border-border/10 xl:px-8">
          <h3 className="mb-4 text-[15px] font-semibold text-white/90">
            Every interaction with HireLeap should leave you:
          </h3>
          
          <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-3 md:grid-cols-6 md:gap-x-2">
            {promiseItems.map((item, idx) => (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center ${idx !== promiseItems.length - 1 ? 'md:border-r md:border-border/10' : ''} px-2`}
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center">
                  <item.icon className="h-7 w-7 text-[#8B5CF6]" strokeWidth={1.25} />
                </div>
                <div className="whitespace-pre-line text-[11px] font-medium leading-[1.3] text-white/80">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex w-full flex-col xl:w-[30%] xl:border-l xl:border-border/10 xl:pl-10">
          <p className="mb-4 text-[14px] leading-relaxed text-white/90">
            We measure our success by the confidence, clarity, and preparedness you gain—not by a single milestone.
          </p>
          <p className="mb-4 text-[14px] leading-relaxed text-white/90">
            Every resume we refine. Every strategy we build. Every interview we prepare you for. Every career decision we help you make.
          </p>
          <p className="text-[15px] font-semibold text-[#8B5CF6]">
            Should leave you stronger than before.
          </p>
        </div>

      </div>
    </section>
  );
}

function MissionVision() {
  return (
    <section className="w-full bg-white">
      <div className="w-full relative">
        <div className="flex flex-col lg:flex-row gap-1 relative">
          
          {/* Middle & Circle */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-sm z-20">
            <span className="font-serif text-[26px] font-bold text-navy">&amp;</span>
          </div>

          {/* Left Card: Mission */}
          <div className="relative w-full lg:w-1/2 rounded-none lg:rounded-r-[20px] bg-[#EEF2FC] overflow-hidden min-h-[240px] sm:min-h-[280px] flex items-center">
            
            {/* Image Container restricted to left side */}
            <div className="absolute top-0 left-0 bottom-0 w-[60%] z-0">
              <div 
                className="absolute inset-0 opacity-80 mix-blend-multiply"
                style={{ 
                  backgroundImage: "url('/images/mission_flag.png')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'left center' 
                }} 
              />
              {/* Fade out to the right */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#EEF2FC]" />
            </div>

            <div className="relative z-20 w-full sm:w-[85%] lg:w-[80%] ml-auto py-8 px-6 sm:py-10 sm:px-10 lg:pl-4 lg:pr-12">
              <div className="mb-2 flex items-center space-x-3">
                <span className="text-[12px] font-bold text-primary tracking-wide uppercase">OUR MISSION</span>
              </div>
              <h2 className="mb-2 font-serif text-[24px] font-bold leading-[1.15] text-navy sm:text-[28px]">
                To help people make better career decisions
              </h2>
              <p className="text-[14px] font-medium leading-relaxed text-navy">
                through AI intelligence, expert guidance, <br className="hidden sm:block" />and structured execution.
              </p>
            </div>
          </div>

          {/* Right Card: Vision */}
          <div className="relative w-full lg:w-1/2 rounded-none lg:rounded-l-[20px] bg-[#EEF2FC] overflow-hidden min-h-[240px] sm:min-h-[280px] flex items-center">
            
            {/* Image Container restricted to right side */}
            <div className="absolute top-0 right-0 bottom-0 w-[60%] z-0">
              <div 
                className="absolute inset-0 opacity-80 mix-blend-multiply"
                style={{ 
                  backgroundImage: "url('/images/vision_person.png')", 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'right center' 
                }} 
              />
              {/* Fade out to the left */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#EEF2FC]" />
            </div>
            
            <div className="relative z-20 w-full sm:w-[85%] lg:w-[80%] mr-auto py-8 px-6 sm:py-10 sm:px-10 lg:pr-4 lg:pl-12">
              <div className="mb-2 flex items-center space-x-3">
                <span className="text-[12px] font-bold text-primary tracking-wide uppercase">OUR VISION</span>
              </div>
              <h2 className="mb-2 font-serif text-[24px] font-bold leading-[1.15] text-navy sm:text-[28px]">
                To become the world's most trusted digital experience
              </h2>
              <p className="text-[14px] font-medium leading-relaxed text-navy">
                for career decision-making.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CorePrinciples() {
  const principles = [
    {
      icon: ShieldCheck,
      title: "Trust",
      text: "We earn trust through actions, honesty and confidentiality."
    },
    {
      icon: Lightbulb,
      title: "Clarity",
      text: "We simplify complexity so you can make confident decisions."
    },
    {
      icon: Eye,
      title: "Transparency",
      text: "We are open about our processes, expectations and recommendations."
    },
    {
      icon: Rocket,
      title: "Execution",
      text: "We don't stop at advice. We help you take meaningful action."
    },
    {
      icon: Award,
      title: "Accountability",
      text: "We take ownership of our guidance and your outcomes."
    },
    {
      icon: Heart,
      title: "Respect",
      text: "We respect your journey, your background and your aspirations."
    }
  ];

  return (
    <section className="w-full bg-[#EEF2FC] pt-8 sm:pt-10 pb-8 sm:pb-10">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6">
        <div className="mb-6 flex items-center space-x-4">
          <h2 className="text-[20px] font-bold text-navy sm:text-[24px]">
            Our Core Principles
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
          {principles.map((principle, index) => (
            <div key={index} className="flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-shadow duration-300">
              <div className="mb-4 text-primary">
                <principle.icon className="h-8 w-8 stroke-[1.5]" />
              </div>
              <h3 className="mb-2 font-serif text-[16px] font-bold text-navy">
                {principle.title}
              </h3>
              <p className="text-[12px] sm:text-[13px] font-medium leading-relaxed text-gray-600">
                {principle.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="w-full bg-[#EEF2FC] pb-10 sm:pb-16">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6">
        <div className="relative w-full overflow-hidden rounded-[24px] bg-[#0A102A]">
          {/* Subtle topography/wave background lines can be achieved via the image or CSS. We'll use the generated image to add the visual interest. */}
          <div className="absolute inset-0 z-0">
            {/* The base navy is already applied, adding a subtle gradient over it for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A102A] via-[#0D1636] to-[#0A102A]" />
          </div>
          
          <div className="relative z-10 flex items-center justify-center py-4 px-6 md:px-12 md:py-5">
            
            {/* Left Image Background */}
            <div className="absolute left-0 top-0 bottom-0 w-[50%] md:w-[35%] max-w-[300px] pointer-events-none rounded-l-[24px] overflow-hidden">
              <img 
                src="/images/compass_cta.png" 
                alt="" 
                className="w-full h-full object-cover object-center mix-blend-screen opacity-90 -translate-x-[10%]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0A102A]" />
            </div>

            {/* Centered Text Area */}
            <div className="relative z-20 w-full max-w-[700px] flex flex-col items-center text-center">
              <h2 className="mb-2 font-serif text-[24px] sm:text-[28px] md:text-[32px] font-bold leading-[1.2] text-white">
                Your next career decision deserves clarity.
              </h2>
              <p className="mb-6 text-[15px] sm:text-[16px] font-medium leading-relaxed text-gray-300">
                Not pressure. Not guesswork. Not luck. <span className="text-primary font-bold">Start with understanding.</span>
              </p>
              
              <Link to="/consultation" className="flex items-center justify-center space-x-2 rounded-full bg-white px-6 py-2.5 font-bold text-primary transition-transform hover:scale-105 hover:shadow-lg">
                <span className="text-[15px]">Book a Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
