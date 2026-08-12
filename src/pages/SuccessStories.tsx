import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import {
  ArrowRight,
  Sun,
  Compass,
  BookOpen,
  DoorOpen,
  Award,
  TrendingUp,
  XCircle,
  Check,
  CheckCircle2,
} from "lucide-react";
import heroImg from "../assets/successstories.webp";
import heroMobileImg from "../assets/successstories-mobile.webp";

export default function SuccessStories() {
  return (
    <PageShell>
      <Helmet>
        <title>Success Stories — HireLeap</title>
        <meta
          name="description"
          content="Every remarkable career transformation begins with a moment that almost nobody sees."
        />
      </Helmet>
      <Hero />
      <ChaptersSection />
      <PathSection />
      <ComparisonSection />
      <AlumniMentorsSection />
      <CtaBannerSection />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="grid w-full items-center gap-0 lg:grid-cols-[45fr_55fr] bg-[#0A102A] text-white">
      {/* Left Text */}
      <div className="px-5 py-12 sm:px-6 sm:py-16 lg:py-20 lg:pl-10 xl:pl-20 flex flex-col justify-center h-full">
        <div className="mb-5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7161fa]">
          CAREER TRANSFORMATION JOURNEYS
        </div>
        <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] min-[1920px]:text-[52px] mb-6">
          Every remarkable
          <br />
          career transformation
          <br />
          begins with a moment
          <br />
          that <span className="text-[#7161fa]">almost nobody sees.</span>
        </h1>

        {/* Thin divider line */}
        <div className="w-16 h-[1.5px] bg-white/20 mb-8" />

        <div className="text-[14px] sm:text-[15px] leading-relaxed text-gray-300 max-w-[460px] font-normal space-y-2 mb-8">
          <p>The offer letter is celebrated.</p>
          <p>The preparation, doubt, courage, and persistence that earned it are rarely seen.</p>
          <p>Every great career has a chapter like this.</p>
        </div>

        <div>
          <Link
            to="/career-journeys"
            className="inline-flex items-center justify-center space-x-2 rounded-[6px] bg-[#3b2dd0] px-7 py-3 font-bold text-white transition-transform hover:scale-105 hover:bg-[#2f22a8] shadow-lg"
          >
            <span className="text-[14px]">Start Your Career Journey</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Visual */}
      <div className="relative w-full overflow-hidden h-auto min-h-0 lg:min-h-[600px] lg:self-stretch">
        <picture className="block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:w-full">
          <source media="(max-width: 768px)" srcSet={heroMobileImg} />
          <img loading="lazy"
            src={heroImg}
            alt="Professional working at desk at night"
            className="w-full h-auto block lg:h-full lg:w-full lg:object-cover lg:object-center"
          />
        </picture>
        {/* Horizontal fade for desktop */}
        <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#0A102A] via-[#0A102A]/50 to-transparent w-[30%] lg:w-[40%] hidden lg:block"></div>
        {/* Vertical fade for mobile */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#0A102A] via-[#0A102A]/50 to-transparent h-[20%] lg:hidden"></div>
      </div>
    </section>
  );
}

function ChaptersSection() {
  const chapters = [
    {
      number: "01",
      title: <>You're graduating.</>,
      description: "Everyone keeps asking what's next. You don't have the answer yet.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/graduation.svg",
      bgColor: "bg-[#f3f4f6]",
    },
    {
      number: "02",
      title: (
        <>
          You've built
          <br />
          experience.
        </>
      ),
      description: "Yet the interviews have quietly stopped coming.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/working-late.svg",
      bgColor: "bg-[#faf5ff]",
    },
    {
      number: "03",
      title: (
        <>
          You want to
          <br />
          change careers.
        </>
      ),
      description: "You're excited. You're also terrified.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/road-sign.svg",
      bgColor: "bg-[#fffbeb]",
    },
    {
      number: "04",
      title: (
        <>
          You've taken a<br />
          career break.
        </>
      ),
      description: "Now you're wondering if the industry has moved on.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/through-the-window.svg",
      bgColor: "bg-[#f0fdf4]",
    },
    {
      number: "05",
      title: <>You lost your job.</>,
      description: "Not your ambition.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/unboxing.svg",
      bgColor: "bg-[#fdf2f8]",
    },
    {
      number: "06",
      title: (
        <>
          You've become
          <br />a leader.
        </>
      ),
      description: "Now you're responsible for helping others grow.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/goal.svg",
      bgColor: "bg-[#eff6ff]",
    },
  ];

  return (
    <section className="w-full bg-white border-t border-gray-100 px-5 sm:px-6 lg:px-10 xl:px-20 pt-16 sm:pt-20 pb-4 sm:pb-6 flex flex-col items-start">
      <div className="max-w-[800px] mb-6">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b2dd0] mb-3">
          WHAT CHAPTER ARE YOU LIVING TODAY?
        </div>
        <h2 className="text-[#0A102A] text-[28px] sm:text-[34px] lg:text-[40px] font-serif font-normal leading-[1.2]">
          Different people. Different stories. One thing in common.
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
        {chapters.map((chapter) => (
          <div
            key={chapter.number}
            className="bg-white border border-gray-100 rounded-[12px] p-5 flex flex-col items-start shadow-sm hover:shadow-md transition-shadow h-full"
          >
            <div
              className={`w-full h-36 flex items-center justify-center mb-6 overflow-hidden ${chapter.bgColor} rounded-lg`}
            >
              <img loading="lazy"
                src={chapter.illustration}
                alt="Illustration"
                className="h-24 w-auto object-contain p-2"
              />
            </div>
            <div className="text-[14px] font-sans font-medium text-[#7161fa] mb-2">
              {chapter.number}
            </div>
            <h3 className="text-[#0A102A] text-[17px] font-serif font-bold leading-snug mb-3">
              {chapter.title}
            </h3>
            <p className="text-[#52525b] text-[13px] font-sans font-normal leading-relaxed">
              {chapter.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function PathSection() {
  const steps = [
    {
      title: "Decision",
      description: "You decide that change is possible.",
      icon: Sun,
      highlight: false,
    },
    {
      title: "Direction",
      description: "You gain clarity on where you want to go.",
      icon: Compass,
      highlight: false,
    },
    {
      title: "Preparation",
      description: "You build the skills, strategy, and mindset.",
      icon: BookOpen,
      highlight: false,
    },
    {
      title: "Opportunity",
      description: "You position yourself for the right opportunities.",
      icon: DoorOpen,
      highlight: false,
    },
    {
      title: "Confidence",
      description: "You show up prepared and stand out.",
      icon: Award,
      highlight: false,
    },
    {
      title: "Growth",
      description: "You continue to grow, create impact, and inspire others.",
      icon: TrendingUp,
      highlight: true,
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfb] border-t border-gray-100 px-5 sm:px-6 lg:px-10 xl:px-20 pt-6 sm:pt-8 pb-6 sm:pb-8 flex flex-col items-start relative overflow-hidden">
      <div className="max-w-[800px] mb-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b2dd0] mb-3">
          TRANSFORMATION ISN'T LUCK.
        </div>
        <h2 className="text-[#0A102A] text-[28px] sm:text-[34px] lg:text-[40px] font-serif font-normal leading-[1.2]">
          It follows a path.
        </h2>
      </div>

      <div className="w-full relative">
        {/* Dotted horizontal line for desktop */}
        <div className="absolute top-[40px] left-[8.33%] right-[8.33%] h-[1.5px] border-t border-dashed border-gray-300 z-0 hidden lg:block" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 lg:gap-4 w-full relative z-10">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center px-2">
                {/* Icon wrapper circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-sm border ${
                    step.highlight
                      ? "bg-[#3b2dd0] border-[#3b2dd0] text-white"
                      : "bg-white border-gray-100 text-[#0A102A]"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                {/* Text content */}
                <h3 className="text-[#0A102A] text-[15px] font-sans font-bold mb-2">
                  {step.title}
                </h3>
                <p className="text-[#52525b] text-[12px] font-sans font-normal leading-relaxed max-w-[150px] mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote summary at bottom */}
      <div className="mt-10 w-full text-center max-w-[800px] mx-auto">
        <p className="font-serif text-[18px] sm:text-[22px] text-[#0A102A] leading-relaxed">
          Every career transformation is unique.
          <br />
          The principles behind lasting success rarely are.
        </p>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const beforeItems = [
    "Unsure",
    "Overwhelmed",
    "Applying randomly",
    "Hoping",
    "Nervous",
    "Looking for work",
  ];

  const afterItems = [
    "Clear",
    "Focused",
    "Applying strategically",
    "Preparing",
    "Confident",
    "Building a career",
  ];

  return (
    <section className="w-full bg-white border-t border-gray-100 px-5 sm:px-6 lg:px-10 xl:px-20 pt-6 pb-16 sm:pt-8 sm:pb-20 flex flex-col items-start relative">
      <div className="max-w-[800px] mb-12">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b2dd0] mb-3">
          WHAT REALLY CHANGES?
        </div>
        <h2 className="text-[#0A102A] text-[28px] sm:text-[34px] lg:text-[40px] font-serif font-normal leading-[1.2]">
          Not just your career. You.
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 relative">
        {/* Central arrow button (only visible on desktop, overlapping the gap) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white border border-gray-100 shadow-lg flex items-center justify-center z-20 hidden lg:flex">
          <ArrowRight className="h-6 w-6 text-[#3b2dd0]" />
        </div>

        {/* BEFORE Card */}
        <div className="relative rounded-[16px] lg:rounded-r-none overflow-hidden min-h-[300px] flex items-center bg-[#f3f4f6] text-[#0A102A] border-r border-gray-100 lg:border-r-0">
          {/* Background image of stressed guy */}
          <div className="absolute inset-0 z-0">
            <img loading="lazy"
              src={heroImg}
              alt="Stressed professional working late"
              className="w-full h-full object-cover object-right opacity-90"
            />
            {/* Fade overlay restricted to left side for text readability */}
            <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[60%] bg-gradient-to-r from-[#f3f4f6] via-[#f3f4f6]/95 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 w-full max-w-[340px] flex flex-col items-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#475569] mb-4">
              BEFORE
            </span>
            <ul className="space-y-3">
              {beforeItems.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-[#334155]">
                  <XCircle className="h-4 w-4 text-[#475569] shrink-0" />
                  <span className="text-[13px] font-sans font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AFTER Card */}
        <div className="relative rounded-[16px] lg:rounded-l-none overflow-hidden min-h-[300px] flex items-center bg-[#faf8ff] text-[#0A102A]">
          {/* Background image of person looking at sunset */}
          <div className="absolute inset-0 z-0">
            <img loading="lazy"
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1200&q=80"
              alt="Confident professional looking out at city sunset"
              className="w-full h-full object-cover object-right opacity-90"
            />
            {/* Fade overlay restricted to left side for text readability */}
            <div className="absolute inset-y-0 left-0 w-[55%] sm:w-[60%] bg-gradient-to-r from-[#faf8ff] via-[#faf8ff]/95 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 w-full max-w-[340px] flex flex-col items-start">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b2dd0] mb-4">
              AFTER
            </span>
            <ul className="space-y-3">
              {afterItems.map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3 text-[#0A102A]">
                  <div className="w-4 h-4 rounded-full bg-[#3b2dd0] flex items-center justify-center shrink-0">
                    <Check className="h-2.5 w-2.5 text-white" />
                  </div>
                  <span className="text-[13px] font-sans font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function AlumniMentorsSection() {
  const steps = [
    {
      title: "Aspirant",
      description: "Seeking clarity and the right guidance.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/education.svg",
    },
    {
      title: "Professional",
      description: "Achieving goals and creating impact.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/programming.svg",
    },
    {
      title: "Mentor",
      description: "Inspiring and guiding the next generation.",
      illustration:
        "https://raw.githubusercontent.com/balazser/undraw-svg-collection/refs/heads/main/svgs/collaboration.svg",
    },
  ];

  return (
    <section className="w-full bg-[#fbfbfb] border-t border-gray-100 px-5 sm:px-6 lg:px-10 xl:px-20 pt-10 sm:pt-12 pb-12 sm:pb-16 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-16">
      {/* Left Column: Text */}
      <div className="w-full lg:w-[35%] flex flex-col items-start text-left lg:pt-4">
        <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b2dd0] mb-3">
          ONE DAY...
        </div>
        <h2 className="text-[#0A102A] text-[24px] sm:text-[28px] lg:text-[32px] font-serif font-normal leading-[1.25]">
          The encouragement you needed may become the encouragement someone else needs.
        </h2>
      </div>

      {/* Right Column: Flow Steps */}
      <div className="w-full lg:w-[65%] relative flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-4 mt-6 lg:mt-0">
        {/* Desktop connection lines */}
        {/* Curved dotted line on left (entering first circle) */}
        <div className="hidden md:block absolute top-[70px] left-[-3%] w-[10%] h-[50px] border-l-2 border-b-2 border-dashed border-gray-300 rounded-bl-[40px] pointer-events-none" />

        {/* Dotted horizontal arrow between 1 & 2 */}
        <div className="hidden md:block absolute top-[70px] left-[24%] w-[18%] border-t-2 border-dashed border-gray-300 pointer-events-none" />
        <div className="hidden md:block absolute top-[66px] left-[40.5%] w-2 h-2 border-r-2 border-t-2 border-gray-300 rotate-45 pointer-events-none" />

        {/* Dotted horizontal arrow between 2 & 3 */}
        <div className="hidden md:block absolute top-[70px] left-[58%] w-[18%] border-t-2 border-dashed border-gray-300 pointer-events-none" />
        <div className="hidden md:block absolute top-[66px] left-[74.5%] w-2 h-2 border-r-2 border-t-2 border-gray-300 rotate-45 pointer-events-none" />

        {/* Curved dotted line on right (exiting third circle) */}
        <div className="hidden md:block absolute top-[70px] right-[-3%] w-[10%] h-[50px] border-r-2 border-b-2 border-dashed border-gray-300 rounded-br-[40px] pointer-events-none" />

        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center px-2 w-full md:w-1/3 relative z-10"
          >
            {/* Round illustration card */}
            <div className="w-36 h-36 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden mb-5 relative">
              <div className="absolute inset-0 bg-[#eff6ff]/35" />
              <img loading="lazy"
                src={step.illustration}
                alt={step.title}
                className="h-24 w-auto object-contain p-2 relative z-10"
              />
            </div>
            {/* Title */}
            <h3 className="text-[#3b2dd0] text-[14px] font-sans font-bold mb-2">{step.title}</h3>
            {/* Description */}
            <p className="text-[#52525b] text-[12px] font-sans font-normal leading-relaxed max-w-[160px] mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CtaBannerSection() {
  return (
    <section className="w-full bg-[#fbfbfb] px-5 sm:px-6 lg:px-10 xl:px-20 pb-20 pt-10">
      <div className="relative w-full max-w-7xl mx-auto rounded-[12px] bg-[#0A102A] overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[110px] shadow-lg">
        {/* Background Image (Left side) */}
        <div className="absolute inset-y-0 left-0 w-[40%] md:w-[25%] lg:w-[20%] z-0">
          <img loading="lazy"
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop"
            alt="Person standing on path at sunset"
            className="w-full h-full object-cover object-left opacity-90"
          />
          {/* Gradient to blend image seamlessly into the dark canvas */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0A102A]/60 to-[#0A102A]" />
        </div>

        {/* Dotted Wave Pattern (Right side) */}
        <div className="hidden md:block absolute inset-y-0 right-0 w-[40%] z-0 opacity-20 pointer-events-none">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 400 130"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 130 C 100 80, 200 150, 400 0"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            <path
              d="M0 150 C 150 100, 250 170, 400 20"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            <path
              d="M0 170 C 200 120, 300 190, 400 40"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            <path
              d="M0 190 C 250 140, 350 210, 400 60"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            <path
              d="M0 210 C 300 160, 400 230, 400 80"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
          </svg>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between py-6 px-6 md:py-7 md:px-10 lg:px-12 gap-6 md:gap-4">
          {/* Left Text */}
          <div className="w-full md:w-auto flex flex-col items-start text-left md:ml-[15%] lg:ml-[12%]">
            <span className="text-[15px] sm:text-[17px] font-serif text-white/90 mb-0.5 leading-tight">
              One day...
            </span>
            <h2 className="text-[20px] sm:text-[23px] lg:text-[26px] font-serif font-normal text-white leading-[1.2]">
              Someone may read your story
              <br className="hidden md:block" /> the way you just imagined theirs.
            </h2>
          </div>

          {/* Right Button & Text */}
          <div className="w-full md:w-auto flex flex-col items-start md:items-start justify-center shrink-0 z-10 md:mr-4">
            <Link
              to="/career-journeys"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-[6px] bg-[#4f46e5] text-white font-sans text-[13px] font-medium tracking-wide hover:bg-[#4338ca] transition-colors mb-2.5"
            >
              Start Your Career Journey
              <ArrowRight className="ml-2 w-4 h-4 font-normal" />
            </Link>
            <div className="flex items-center space-x-1.5 text-white/80 text-[10.5px] font-medium tracking-wide">
              <CheckCircle2 className="h-3.5 w-3.5 text-white/80" strokeWidth={1.5} />
              <span>Better decisions today. A better career tomorrow.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
