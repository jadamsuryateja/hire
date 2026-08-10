import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { ArrowRight, Sparkles, GraduationCap, PlayCircle, Briefcase, Linkedin, Users, Lightbulb, Compass, Brain, CheckCircle2, MountainSnow, Star, User, Rocket, ShieldCheck, Heart, Handshake, Infinity as InfinityIcon } from "lucide-react";
import aboutUsImg from "../assets/About Us.png";

export default function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us — HireLeap</title>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600&display=swap" rel="stylesheet" />
        <meta name="description" content="We didn't build HireLeap because careers are difficult. We built it because career decisions shouldn't be made alone." />
      </Helmet>
      
      <PageShell>
      {/* Hero Section */}
      <section className="grid w-full items-center gap-8 lg:grid-cols-[3fr_7fr] lg:gap-10">
        <div className="px-5 py-8 sm:px-6 sm:py-10 lg:py-14 lg:pl-10">
          <div className="mb-5 text-[12px] font-bold uppercase tracking-widest text-primary">
            Why We Believe
          </div>
          <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-foreground sm:text-[48px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] min-[1920px]:text-[52px]">
            We didn't build HireLeap because careers are difficult.
            <br />
            <span className="text-primary block mt-2">
              We built it because career decisions shouldn't be made alone.
            </span>
          </h1>
          
          {/* Horizontal separator line */}
          <div className="w-12 h-[2px] bg-primary my-6" />
          
          <div className="space-y-4 text-muted-foreground text-[14px] leading-relaxed max-w-[480px]">
            <p>
              Every career reaches moments where one decision quietly changes everything.
            </p>
            <p>
              We exist for those moments—not to make decisions for you, but to help you make better ones.
            </p>
          </div>
        </div>

        {/* Visual */}
        <div className="relative self-stretch overflow-hidden min-h-[280px] sm:min-h-[420px]">
          <img
            src={aboutUsImg}
            alt="Stepping stones leading out into a lake at sunset representing the career journey"
            className="absolute inset-0 h-full w-full object-cover object-[75%_center] lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)] lg:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)]"
          />
        </div>
      </section>

      {/* Progression Section */}
      <ProgressionSection />
    </PageShell>
    </>
  );
}

function ProgressionSection() {
  const miniCards = [
    { icon: <Sparkles className="w-5 h-5 text-primary" />, label: "AI Tools" },
    { icon: <GraduationCap className="w-5 h-5 text-primary" />, label: "Online Courses" },
    { icon: <PlayCircle className="w-5 h-5 text-primary" />, label: "Videos & Content" },
    { icon: <Briefcase className="w-5 h-5 text-primary" />, label: "Job Boards" },
    { icon: <Linkedin className="w-5 h-5 text-primary" />, label: "LinkedIn" },
    { icon: <Users className="w-5 h-5 text-primary" />, label: "Communities" },
    { icon: <User className="w-5 h-5 text-primary" />, label: "Recruiters" },
    { icon: <Lightbulb className="w-5 h-5 text-primary" />, label: "Career Advice" },
  ];

  return (
    <>
      <section className="w-full bg-[#fbfbfb] py-16 px-5 sm:px-6 lg:px-10 border-t border-border">
        <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 relative">
          
          {/* Column 1: Intro */}
          <div className="flex-1 flex flex-col justify-start lg:pr-6">
            <h2 className="text-[32px] sm:text-[38px] lg:text-[40px] font-serif leading-[1.1] text-foreground font-medium mb-6">
              The world <br />
              <span className="text-primary italic">changed.</span>
            </h2>
            <div className="w-8 h-[1.5px] bg-primary/40 mb-6" />
            <p className="text-[14px] leading-relaxed text-muted-foreground max-w-[280px]">
              Careers have never offered more opportunities.
            </p>
          </div>

          {/* Column 2: More of everything */}
          <div className="flex-[2] flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground text-center mb-4">
              More of everything.
            </span>
            <div className="grid grid-cols-3 gap-3 bg-white p-5 rounded-[12px] border border-border/50 shadow-sm flex-1">
              {miniCards.map((card, i) => (
                <div 
                  key={i} 
                  className="flex flex-col items-center justify-center p-3 rounded-[8px] bg-[#fbfbfb] border border-border/40 hover:shadow-md transition-shadow duration-200 text-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                    {card.icon}
                  </div>
                  <span className="text-[11px] font-bold text-foreground leading-tight">{card.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary/40" />
          </div>

          {/* Column 3: The Question */}
          <div className="flex-[1.5] flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground text-center mb-4">
              But the question remains.
            </span>
            <div className="relative overflow-hidden bg-white p-6 rounded-[12px] border border-border/50 shadow-sm flex-1 flex flex-col items-center justify-center text-center min-h-[220px]">
              {/* Giant faint question mark in the background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <span className="text-[320px] font-bold select-none leading-none -mt-12">?</span>
              </div>
              <p className="text-[20px] sm:text-[24px] font-serif italic text-primary leading-snug relative z-10">
                “What should I do <br /> next?”
              </p>
            </div>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-primary/40" />
          </div>

          {/* Column 4: The Real Challenge */}
          <div className="flex-[1.8] flex flex-col">
            <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground text-center mb-4">
              The real challenge.
            </span>
            <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_center,_#ffffff_40%,_#f6f6fc_100%)] p-6 rounded-[12px] border border-border/50 shadow-sm flex-1 flex flex-col items-center justify-center text-center min-h-[220px]">
              {/* Concentric ovals SVG in the background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.06] text-primary">
                <svg className="w-full h-full scale-[1.35]" viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <ellipse key={i} cx="100" cy="150" rx={65 + i * 8} ry={95 + i * 14} stroke="currentColor" strokeWidth="0.8" />
                  ))}
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center gap-4 py-4">
                <div className="text-[14px] sm:text-[15px] text-foreground font-bold leading-[1.6]">
                  Information<br />
                  became<br />
                  abundant.
                </div>
                <div className="w-6 h-[2px] bg-primary/40 rounded-full" />
                <div className="text-[14px] sm:text-[15px] text-primary font-bold leading-[1.6]">
                  Clarity<br />
                  became<br />
                  rare.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* What We Believe Strip */}
      <section className="w-full bg-[#fafafa] border-y border-border/50 py-8 lg:py-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            
            {/* Title Column */}
            <div className="lg:w-[220px] flex-shrink-0 lg:pr-8 py-8 lg:py-12 lg:border-r border-border/50 flex flex-col justify-start">
              <h2 className="text-3xl lg:text-4xl font-serif text-foreground leading-tight">
                What<br />We Believe
              </h2>
            </div>

            {/* Grid Items */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-t lg:border-t-0 border-border/50">
              
              {/* Item 1 */}
              <div className="flex flex-col items-center justify-start text-center px-4 py-8 lg:py-12 border-b lg:border-b-0 lg:border-r border-border/50">
                <Compass className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                <p className="text-[13px] text-foreground font-medium leading-relaxed max-w-[180px]">
                  Better careers<br />begin with better<br />decisions.
                </p>
                <div className="w-8 h-[2px] bg-primary mt-6 rounded-full" />
              </div>
              
              {/* Item 2 */}
              <div className="flex flex-col items-center justify-start text-center px-4 py-8 lg:py-12 border-b lg:border-b-0 lg:border-r border-border/50">
                <Brain className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                <p className="text-[13px] text-foreground font-medium leading-relaxed max-w-[180px]">
                  Technology should<br />strengthen human<br />judgment.<br /><br />Never replace it.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center justify-start text-center px-4 py-8 lg:py-12 border-b md:border-b-0 lg:border-r border-border/50">
                <CheckCircle2 className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                <p className="text-[13px] text-foreground font-medium leading-relaxed max-w-[180px]">
                  Advice without<br />execution changes<br />very little.<br /><br />People deserve both.
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col items-center justify-start text-center px-4 py-8 lg:py-12 border-b md:border-b-0 lg:border-r border-border/50">
                <MountainSnow className="w-8 h-8 text-primary mb-6" strokeWidth={1.5} />
                <p className="text-[13px] text-foreground font-medium leading-relaxed max-w-[180px]">
                  Every career<br />deserves intentional<br />planning.<br /><br />Not accidental<br />progress.
                </p>
              </div>

              {/* Item 5 */}
              <div className="flex flex-col items-center justify-start text-center px-4 py-8 lg:py-12">
                <div className="relative w-8 h-8 mb-6 mx-auto text-primary">
                  <Star className="w-[14px] h-[14px] absolute top-[2px] left-1/2 -translate-x-1/2" strokeWidth={2} />
                  <svg className="w-8 h-8 absolute inset-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  </svg>
                </div>
                <p className="text-[13px] text-foreground font-medium leading-relaxed max-w-[180px]">
                  Real success isn't<br />getting one offer.<br /><br />It's building a career<br />you'll be proud of<br />years from now.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Success Section */}
      <section className="w-full bg-white pt-6 pb-8 px-5 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10">
          
          {/* Left Column */}
          <div className="w-full lg:w-[28%] flex flex-col pt-2">
            <h2 className="text-[32px] sm:text-[38px] font-serif leading-[1.1] text-foreground font-medium">
              Success<br />isn't what<br />we count.
            </h2>
            <h2 className="text-[32px] sm:text-[38px] font-serif leading-[1.1] text-foreground font-medium mt-6">
              It's what<br />people become.
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[72%] flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Card 1 */}
              <div className="bg-[#f8f7fd] rounded-[16px] p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-5">
                  <div className="w-[84px] h-[84px] flex-shrink-0 bg-[#f0ebfe] rounded-full flex items-center justify-center text-[#4922ca]">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="11" r="3" />
                      <path d="M8 7.5A6 6 0 0 1 16 7.5" />
                      <path d="M5 11a8 8 0 0 1 14 0" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[14px] font-bold text-[#4922ca] mb-1">Better Decisions</h3>
                    <p className="text-[13px] text-foreground/80 font-medium leading-[1.5]">
                      People gain clarity about their direction and next steps.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f6faf7] rounded-[16px] p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-5">
                  <div className="w-[84px] h-[84px] flex-shrink-0 bg-[#ecf7ef] rounded-full flex items-center justify-center text-[#2e6d4c]">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H12a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="11" r="3" />
                      <path d="M12 4V2" />
                      <path d="M17 6l1.5-1.5" />
                      <path d="M7 6L5.5 4.5" />
                      <path d="M19 11h2" />
                      <path d="M5 11H3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[14px] font-bold text-[#2e6d4c] mb-1">Greater Confidence</h3>
                    <p className="text-[13px] text-foreground/80 font-medium leading-[1.5]">
                      People believe in their potential and make decisions with conviction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#fdf8f4] rounded-[16px] p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-5">
                  <div className="w-[84px] h-[84px] flex-shrink-0 bg-[#fceee4] rounded-full flex items-center justify-center text-[#a85923]">
                    <Rocket className="w-10 h-10" strokeWidth={1.2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[14px] font-bold text-[#a85923] mb-1">Meaningful Careers</h3>
                    <p className="text-[13px] text-foreground/80 font-medium leading-[1.5]">
                      The opportunity becomes the beginning—not the destination.
                    </p>
                  </div>
                </div>
              </div>

            </div>
            
            <div className="mt-6 text-center w-full">
              <p className="text-[13px] font-bold text-foreground">
                Long-term growth. Lasting impact. That's the success we care about.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Promises Section 04 */}
      <section className="w-full bg-[#0d0c1b] py-16 lg:py-24 px-5 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10">
          
          {/* Left Column */}
          <div className="w-full lg:w-[20%] flex flex-col pt-2">
            <h2 className="text-[32px] sm:text-[38px] font-serif leading-[1.1] text-white font-medium">
              The Promises<br />We Make
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[80%] flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
              
              {/* Promise 1 */}
              <div className="flex flex-col px-6 lg:px-8 py-6 lg:py-0 border-b lg:border-b-0 lg:border-l border-white/10">
                <ShieldCheck className="w-8 h-8 text-[#987bf5] mb-6" strokeWidth={1.5} />
                <h3 className="text-[14px] font-bold text-white mb-4 leading-[1.5]">
                  We promise to<br />tell you the truth.
                </h3>
                <p className="text-[13px] text-white/60 font-medium leading-[1.6]">
                  Even when it isn't the easiest answer.
                </p>
              </div>

              {/* Promise 2 */}
              <div className="flex flex-col px-6 lg:px-8 py-6 lg:py-0 border-b lg:border-b-0 lg:border-l border-white/10">
                <Heart className="w-8 h-8 text-[#987bf5] mb-6" strokeWidth={1.5} />
                <h3 className="text-[14px] font-bold text-white mb-4 leading-[1.5]">
                  We promise to<br />recommend what's<br />right for your career.
                </h3>
                <p className="text-[13px] text-white/60 font-medium leading-[1.6]">
                  Not what's easiest<br />for us.
                </p>
              </div>

              {/* Promise 3 */}
              <div className="flex flex-col px-6 lg:px-8 py-6 lg:py-0 border-b lg:border-b-0 lg:border-l border-white/10">
                <Handshake className="w-8 h-8 text-[#987bf5] mb-6" strokeWidth={1.5} />
                <h3 className="text-[14px] font-bold text-white mb-4 leading-[1.5]">
                  We promise to<br />combine intelligence<br />with human experience.
                </h3>
                <p className="text-[13px] text-white/60 font-medium leading-[1.6]">
                  Never sacrificing one<br />for the other.
                </p>
              </div>

              {/* Promise 4 */}
              <div className="flex flex-col px-6 lg:px-8 py-6 lg:py-0 lg:border-l border-white/10">
                <InfinityIcon className="w-8 h-8 text-[#987bf5] mb-6" strokeWidth={1.5} />
                <h3 className="text-[14px] font-bold text-white mb-4 leading-[1.5]">
                  We promise to remain<br />a long-term career<br />partner.
                </h3>
                <p className="text-[13px] text-white/60 font-medium leading-[1.6]">
                  Not simply a service<br />provider.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Hope People Say Section 05 */}
      <section className="w-full bg-[#fafafa] py-10 lg:py-12 px-5 sm:px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-10">
          
          {/* Left Column */}
          <div className="w-full lg:w-[25%] flex flex-col pt-2">
            <h2 className="text-[32px] sm:text-[38px] font-serif leading-[1.1] text-foreground font-medium">
              What We Hope<br />People Say About<br />HireLeap
            </h2>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[75%] flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              
              {/* Paper Card 1 */}
              <div className="bg-[#fcfaf5] shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-6 lg:p-5 flex flex-col justify-between min-h-[180px]">
                <p 
                  className="text-[20px] leading-[1.3] text-foreground/90 font-medium"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  "They helped me make better decisions."
                </p>
                <div className="w-8 h-[2px] bg-[#4922ca]/60 mt-6" />
              </div>

              {/* Paper Card 2 */}
              <div className="bg-[#fcfaf5] shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-6 lg:p-5 flex flex-col justify-between min-h-[180px]">
                <p 
                  className="text-[20px] leading-[1.3] text-foreground/90 font-medium"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  "I finally understood what direction to take."
                </p>
                <div className="w-8 h-[2px] bg-[#4922ca]/60 mt-6" />
              </div>

              {/* Paper Card 3 */}
              <div className="bg-[#fcfaf5] shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-6 lg:p-5 flex flex-col justify-between min-h-[180px]">
                <p 
                  className="text-[20px] leading-[1.3] text-foreground/90 font-medium"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  "They cared about my career, not just my next offer."
                </p>
                <div className="w-8 h-[2px] bg-[#4922ca]/60 mt-6" />
              </div>

              {/* Paper Card 4 */}
              <div className="bg-[#fcfaf5] shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-6 lg:p-5 flex flex-col justify-between min-h-[180px]">
                <p 
                  className="text-[20px] leading-[1.3] text-foreground/90 font-medium"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  "I became more confident because someone genuinely believed in me."
                </p>
                <div className="w-8 h-[2px] bg-[#4922ca]/60 mt-6" />
              </div>

              {/* Paper Card 5 */}
              <div className="bg-[#fcfaf5] shadow-[0_2px_10px_rgba(0,0,0,0.04)] p-6 lg:p-5 flex flex-col justify-between min-h-[180px]">
                <p 
                  className="text-[20px] leading-[1.3] text-foreground/90 font-medium"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  "I still rely on HireLeap years after my first opportunity."
                </p>
                <div className="w-8 h-[2px] bg-[#4922ca]/60 mt-6" />
              </div>

            </div>
          </div>

        </div>
      </section>
      {/* Final CTA Section 06 */}
      <section 
        className="w-full relative py-10 lg:py-12 px-5 sm:px-6 lg:px-10 flex justify-center bg-[#1a103c]"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(15, 8, 38, 0.85), rgba(41, 15, 85, 0.7)), url('https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=2560&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay"
        }}
      >
        <div className="max-w-[1000px] w-full flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
          
          {/* Icon */}
          <div className="flex-shrink-0 md:mt-2">
            <div className="w-[120px] h-[120px] rounded-full border border-white/30 flex items-center justify-center">
              <MountainSnow className="w-[50px] h-[50px] text-white/80" strokeWidth={1} />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col text-white">
            <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] font-serif leading-[1.25] font-medium mb-10 text-white/95 tracking-tight">
              The careers we help shape today...<br />
              will one day shape families, businesses,<br />
              communities, and <span className="text-[#a78bfa]">future leaders.</span>
            </h2>

            <div className="flex items-center gap-6 mb-10">
              <div className="w-10 h-[2px] bg-white/60"></div>
              <p className="text-[17px] sm:text-[19px] text-white/90">
                That's why every career decision matters.
              </p>
            </div>

            <div>
              <Link to="/contact" className="inline-flex bg-[#4922ca] hover:bg-[#3b1ba8] text-white px-8 py-4 rounded-[6px] font-medium transition-colors items-center gap-3">
                Start Your Career Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
