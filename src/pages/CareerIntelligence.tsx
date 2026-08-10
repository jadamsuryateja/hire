import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { VideoModal } from "../components/VideoModal";
import {
  Play,
  Target,
  Users,
  Compass,
  ArrowRight,
  PlayCircle,
  User,
  FileText,
  Briefcase,
  XCircle,
  CheckCircle2,
  Quote,
  TrendingUp,
  Search,
  Send,
  MessageSquare,
  BrainCircuit,
  Globe,
  ClipboardList,
  MapPin,
  LineChart,
  Bell,
  UserCheck,
  Heart,
} from "lucide-react";
import careerIntelligenceImg from "../assets/careerintelligence.png";

export default function CareerIntelligence() {
  return (
    <PageShell>
      <Helmet>
        <title>Career Intelligence — HireLeap</title>
        <meta
          name="description"
          content="Long before your interview begins, our preparation already has."
        />
      </Helmet>
      <Hero />
      <StorySection />
      <PreparationProcessSection />
      <IntelligenceDiagramSection />
      <CapabilitiesSection />
      <StripSection />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="grid w-full items-center gap-8 lg:grid-cols-[4fr_6fr] lg:gap-10 bg-[#0A102A]">
      {/* Text Content */}
      <div className="px-5 py-8 sm:px-6 sm:py-10 lg:py-14 lg:pl-10 flex flex-col justify-center">
        <div className="flex flex-col mb-2 gap-1">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-pink-600">
            EXPERIENCE OS
          </div>
          <div className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-primary">
            CAREER INTELLIGENCE
          </div>
        </div>

        <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-white sm:text-[48px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] min-[1920px]:text-[52px]">
          Long before
          <br />
          your interview begins,
          <br />
          <span className="text-[#818cf8]">
            our preparation
            <br />
            already has.
          </span>
        </h1>

        <p className="mt-6 text-[15px] leading-relaxed text-gray-300 max-w-[500px]">
          Every recommendation from HireLeap is backed by Career Intelligence—a combination of
          advanced AI, real-time market insights, experienced professionals, and disciplined
          execution—working together long before you ever hit "Apply".
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
          <Link
            to="/journey"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-6 text-[14px] sm:text-[15px] font-semibold text-white transition-all hover:bg-[#1D4ED8] w-full sm:w-auto whitespace-nowrap"
          >
            Start Your Career Journey{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <VideoModal>
            <button className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-lg border border-white/20 bg-transparent px-6 text-[14px] sm:text-[15px] font-semibold text-white transition-all hover:bg-white/5 hover:border-white/40 w-full sm:w-auto whitespace-nowrap">
              <PlayCircle className="h-5 w-5" /> See How We Prepare
            </button>
          </VideoModal>
        </div>

        {/* Feature row at bottom */}
        <div className="mt-8 flex flex-col sm:flex-row justify-start items-start gap-8 sm:gap-6 lg:gap-8 border-t border-gray-800 pt-8 w-full">
          <div className="flex items-start gap-3 max-w-[200px]">
            <Target className="h-6 w-6 text-indigo-400 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-[13px]">No Guesswork</span>
              <span className="text-gray-400 text-[11px] leading-relaxed font-medium">
                Data, insights, and expertise behind every decision.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 max-w-[200px]">
            <Users className="h-6 w-6 text-indigo-400 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-[13px]">Human + AI</span>
              <span className="text-gray-400 text-[11px] leading-relaxed font-medium">
                Advanced technology powered by experienced professionals.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-3 max-w-[200px]">
            <Compass className="h-6 w-6 text-indigo-400 shrink-0 mt-0.5" />
            <div className="flex flex-col gap-1">
              <span className="text-white font-bold text-[13px]">Purpose Driven</span>
              <span className="text-gray-400 text-[11px] leading-relaxed font-medium">
                Every action is aligned with your goals and long-term success.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual */}
      <div className="relative self-stretch overflow-hidden min-h-[280px] sm:min-h-[420px] bg-[#0A102A]">
        <img
          src={careerIntelligenceImg}
          alt="Team collaborating on career strategy with dashboards"
          width={1408}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Horizontal fade for desktop */}
        <div className="absolute top-0 bottom-0 left-0 bg-gradient-to-r from-[#0A102A] via-[#0A102A]/70 to-transparent w-[30%] lg:w-[45%] hidden lg:block"></div>
        {/* Vertical fade for mobile */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#0A102A] via-[#0A102A]/70 to-transparent h-[40%] lg:hidden"></div>
      </div>
    </section>
  );
}

/* ---------------- STORY SECTION ---------------- */
function StorySection() {
  return (
    <section className="w-full bg-[#f8f9fc] pt-8 pb-16 sm:pt-12 sm:pb-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr_1fr] gap-12 lg:gap-8 xl:gap-12 items-start">
          {/* Column 1: Title and Image */}
          <div className="flex flex-col">
            <div className="mb-4 lg:mb-6">
              <p className="text-[#3b2dd0] font-semibold text-[17px] mb-2 font-serif tracking-tight">
                Real stories. Real impact.
              </p>
              <h2 className="text-gray-900 font-serif text-[36px] lg:text-[40px] leading-[1.1] tracking-tight">
                <span className="whitespace-nowrap">Preparation changes</span>
                <br className="hidden sm:block" /> everything.
              </h2>
            </div>

            <div className="flex flex-col lg:block relative gap-0">
              <div className="rounded-2xl overflow-hidden lg:ml-[110px] aspect-[4/5] sm:aspect-[16/9] lg:aspect-[4/5] bg-gray-200 shadow-sm border border-gray-200 order-1 lg:order-none">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                  alt="Professional looking at laptop"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Card (Desktop) / Centered Overlapping Card (Mobile) */}
              <div className="lg:absolute lg:top-14 lg:left-8 bg-white rounded-2xl p-6 lg:p-7 shadow-[0_12px_40px_rgb(0,0,0,0.12)] border border-gray-100 lg:min-w-[240px] lg:max-w-[280px] z-10 relative -mt-16 sm:-mt-24 mx-4 sm:mx-auto sm:max-w-[320px] lg:mx-0 lg:mt-0 order-2 lg:order-none">
                <div className="flex flex-col gap-1 mb-6">
                  <span className="font-bold text-[#0f172a] text-[18px] tracking-tight">
                    Meet Arjun
                  </span>
                  <span className="text-[#64748b] text-[14px]">Software Engineer</span>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3.5 text-[14.5px] font-medium text-[#334155]">
                    <User className="w-[18px] h-[18px] text-[#6366f1]" strokeWidth={1.5} />
                    <span>8 Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-[14.5px] font-medium text-[#334155]">
                    <FileText className="w-[18px] h-[18px] text-[#6366f1]" strokeWidth={1.5} />
                    <span>147 Applications</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-[14.5px] font-medium text-[#334155]">
                    <Briefcase className="w-[18px] h-[18px] text-[#6366f1]" strokeWidth={1.5} />
                    <span>2 Interviews</span>
                  </div>
                  <div className="flex items-center gap-3.5 text-[14.5px] font-medium text-[#334155]">
                    <XCircle className="w-[18px] h-[18px] text-[#6366f1]" strokeWidth={1.5} />
                    <span>0 Offers</span>
                  </div>
                </div>

                <div className="mt-6 text-[#ef4444] text-[14.5px] font-semibold text-center border-t border-gray-100 pt-5">
                  4 Months of Frustration
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The Story */}
          <div className="flex flex-col lg:pt-[90px]">
            <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
              Arjun had 8 years of experience. Every evening after work, he spent three hours
              applying for jobs. After four months, he had 147 applications, 2 interviews, and zero
              offers. He started believing the market had no opportunities left.
            </p>

            <h3 className="text-[#3b2dd0] text-[22px] font-medium font-serif leading-snug mb-5">
              The market wasn't his problem.
              <br />
              Preparation was.
            </h3>

            <p className="text-gray-900 font-bold text-[15px] mb-3">
              Here's what we did for Arjun:
            </p>

            <ul className="space-y-3 mb-6">
              {[
                "Optimized resume & LinkedIn for his goals.",
                "Identified companies matching his profile.",
                "Applied to roles with targeted strategy.",
                "Prepared him with tailored interview prep.",
                "Helped evaluate offers and negotiate.",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#3b2dd0] shrink-0 bg-[#f0f0fe] rounded-full" />
                  <span className="text-gray-700 text-[14px] whitespace-nowrap lg:whitespace-normal">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f0f0fe] rounded-xl p-5 border border-[#e0e0fd]">
              <p className="text-[#3b2dd0] font-medium leading-relaxed text-[15px]">
                Eight weeks later, Arjun wasn't applying more. He was getting interviews—and
                receiving offers.
              </p>
            </div>
          </div>

          {/* Column 3: Testimonial */}
          <div className="flex flex-col lg:pt-[90px]">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 flex flex-col h-full">
              <Quote className="w-8 h-8 text-[#3b2dd0] mb-6" fill="currentColor" />

              <blockquote className="text-[#101828] text-[20px] font-serif italic leading-relaxed mb-6">
                HireLeap didn't just help me find jobs. They helped me make the right move.
              </blockquote>

              <p className="text-gray-600 text-sm mb-6">— Arjun</p>

              <div className="mt-auto border-t border-gray-100 pt-8 grid grid-cols-3 gap-2">
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#f0f0fe] flex items-center justify-center mb-3">
                    <Briefcase className="w-5 h-5 text-[#3b2dd0]" />
                  </div>
                  <div className="font-bold text-gray-900 text-[19px] leading-none mb-1">3</div>
                  <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide">
                    Offers
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#f0f0fe] flex items-center justify-center mb-3">
                    <TrendingUp className="w-5 h-5 text-[#3b2dd0]" />
                  </div>
                  <div className="font-bold text-gray-900 text-[19px] leading-none mb-1">62%</div>
                  <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide leading-tight px-1">
                    Higher Salary
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 rounded-full bg-[#f0f0fe] flex items-center justify-center mb-3">
                    <Target className="w-5 h-5 text-[#3b2dd0]" />
                  </div>
                  <div className="font-bold text-gray-900 text-[19px] leading-none mb-1">
                    8 Weeks
                  </div>
                  <div className="text-[11px] font-medium text-gray-500 uppercase tracking-wide leading-tight px-1">
                    From Start to Offers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PREPARATION PROCESS SECTION ---------------- */
function PreparationProcessSection() {
  const steps = [
    {
      number: "1",
      icon: User,
      title: "We understand you.",
      desc: "Your goals, strengths, challenges, constraints, and aspirations.",
    },
    {
      number: "2",
      icon: Search,
      title: "We understand the market.",
      desc: "Hiring demand, salary movement, ATS behavior, skill trends, and industry changes.",
    },
    {
      number: "3",
      icon: FileText,
      title: "We build your positioning.",
      desc: "Resume, LinkedIn, career narrative, technical readiness, and interview roadmap.",
    },
    {
      number: "4",
      icon: Send,
      title: "We execute for you with precision.",
      desc: "We apply on your behalf to the right opportunities with a targeted and strategic approach.",
    },
    {
      number: "5",
      icon: MessageSquare,
      title: "We prepare you to perform.",
      desc: "Interview coaching, technical guidance, behavioral preparation, offer evaluation, and salary negotiation.",
    },
    {
      number: "6",
      icon: TrendingUp,
      title: "We stay with you for your growth.",
      desc: "Joining, performance, promotion, and long-term career success.",
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 lg:py-12">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-8 lg:mb-12">
          <div className="text-[12px] font-bold uppercase tracking-widest text-[#3b2dd0] mb-2">
            BEFORE WE RECOMMEND ANYTHING.
          </div>
          <h2 className="text-[#0A102A] text-[36px] sm:text-[44px] font-serif leading-tight">
            We <span className="text-[#3b2dd0] italic">prepare.</span>
          </h2>
        </div>

        {/* 6 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-4 xl:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col relative text-center items-center">
              {/* Top Icons & Connecting Arrow */}
              <div className="relative flex flex-col items-center mb-6 lg:mb-8 w-full">
                {/* Dotted Arrow to next step (hidden on last step and mobile) */}
                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-[calc(50%+45px)] xl:left-[calc(50%+55px)] w-[calc(100%-70px)] xl:w-[calc(100%-80px)] h-[2px] -translate-y-1/2 z-0">
                    <div className="w-full h-full border-t-[1.5px] border-dotted border-[#3b2dd0]/40 relative">
                      <div className="absolute -right-1 top-[calc(50%-4px)] w-2 h-2 border-t-[1.5px] border-r-[1.5px] border-[#3b2dd0]/60 transform rotate-45"></div>
                    </div>
                  </div>
                )}

                {/* The Step Number Circle (small, dark) */}
                <div className="absolute top-0 left-[calc(50%-55px)] xl:left-[calc(50%-60px)] -translate-y-1 w-7 h-7 rounded-full bg-[#0A102A] flex items-center justify-center text-white text-[13px] font-bold z-20 shadow-md">
                  {step.number}
                </div>

                {/* The Large Faint Circle */}
                <div className="w-20 h-20 xl:w-24 xl:h-24 rounded-full bg-[#f0f0fe] flex items-center justify-center relative z-10 border border-[#e0e0fd] transition-transform hover:scale-105 duration-300">
                  <step.icon className="w-8 h-8 xl:w-10 xl:h-10 text-[#2a1b9b]" strokeWidth={2} />
                </div>
              </div>

              {/* Content block */}
              <div className="flex flex-col text-center px-2">
                <h4 className="text-[14px] xl:text-[15.5px] font-bold text-[#0A102A] mb-3 leading-tight lg:min-h-[46px]">
                  {step.title}
                </h4>
                <p className="text-[12.5px] xl:text-[13.5px] leading-relaxed text-gray-600 font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INTELLIGENCE DIAGRAM SECTION ---------------- */
function IntelligenceDiagramSection() {
  return (
    <section className="w-full bg-[#040b16] py-8 lg:py-12 text-white overflow-hidden">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-8 items-center">
          {/* Left Text */}
          <div className="flex flex-col">
            <div className="flex flex-col mb-4">
              <span className="text-[#818cf8] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] leading-tight mb-1">
                THE INTELLIGENCE BEHIND
              </span>
              <span className="text-[#818cf8] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] leading-tight">
                EVERY RECOMMENDATION
              </span>
            </div>

            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-serif text-white leading-[1.1] tracking-tight mb-4">
              Career Intelligence.
            </h2>

            <h3 className="text-[22px] sm:text-[26px] font-serif text-[#818cf8] leading-[1.25] mb-6 max-w-[400px]">
              Intelligence only becomes valuable when it leads to better decisions.
            </h3>

            <p className="text-[14px] sm:text-[15px] text-gray-400 leading-relaxed max-w-[440px]">
              Our intelligence engine combines the power of AI, live market data, industry
              expertise, and structured execution to deliver recommendations that are more accurate,
              more relevant, and more impactful.
            </p>
          </div>

          {/* Right Diagram */}
          <div className="relative w-full flex items-center justify-center lg:min-h-[550px] overflow-visible">
            {/* Scalable Container for diagram */}
            <div className="relative w-[700px] min-w-[700px] shrink-0 h-[500px] transform scale-[0.45] sm:scale-[0.6] md:scale-100 transform-origin-center -my-[130px] sm:-my-[100px] md:my-0">
              {/* Center glowing circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[230px] h-[230px] rounded-full border-[1.5px] border-[#818cf8] bg-gradient-to-br from-[#4f38f0] to-[#140b66] shadow-[0_0_80px_rgba(79,56,240,0.6)] z-10 flex flex-col items-center justify-center">
                {/* Logo inside */}
                <div className="mb-3 relative">
                  {/* HireLeap custom SVG logo */}
                  <div className="flex items-center justify-center w-14 h-14">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 40 40"
                      fill="none"
                      className="text-white"
                    >
                      <rect x="8" y="6" width="5.5" height="28" rx="2" fill="currentColor" />
                      <rect x="26.5" y="6" width="5.5" height="28" rx="2" fill="currentColor" />
                      <path
                        d="M 13.5 24 L 26.5 14"
                        stroke="currentColor"
                        strokeWidth="4.5"
                        strokeLinecap="round"
                      />
                      <circle cx="20" cy="11" r="3.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <span className="text-white font-medium text-[20px] leading-tight text-center tracking-tight">
                  Career
                  <br />
                  Intelligence
                </span>
              </div>

              {/* Top Left Item */}
              <div className="absolute top-[70px] left-[0px] flex gap-4 w-[240px]">
                <div className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#d8b4fe]/60 flex items-center justify-center shrink-0 bg-transparent">
                  <BrainCircuit className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-white font-semibold text-[13.5px] mb-1 leading-tight">
                    Advanced AI
                  </span>
                  <span className="text-gray-400 text-[11px] leading-[1.4]">
                    Analyzing millions of data points in real time
                  </span>
                </div>
              </div>

              {/* Bottom Left Item */}
              <div className="absolute bottom-[70px] left-[0px] flex gap-4 w-[240px]">
                <div className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#f472b6]/60 flex items-center justify-center shrink-0 bg-transparent">
                  <Users className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-white font-semibold text-[13.5px] mb-1 leading-tight">
                    Industry Expertise
                  </span>
                  <span className="text-gray-400 text-[11px] leading-[1.4]">
                    20+ years of experience across multiple domains
                  </span>
                </div>
              </div>

              {/* Top Right Item */}
              <div className="absolute top-[70px] right-[0px] flex gap-4 w-[240px]">
                <div className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#6ee7b7]/60 flex items-center justify-center shrink-0 bg-transparent">
                  <Globe className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-white font-semibold text-[13.5px] mb-1 leading-tight">
                    Live Market Intelligence
                  </span>
                  <span className="text-gray-400 text-[11px] leading-[1.4]">
                    Real-time data on roles, companies, locations, and opportunities
                  </span>
                </div>
              </div>

              {/* Bottom Right Item */}
              <div className="absolute bottom-[70px] right-[0px] flex gap-4 w-[240px]">
                <div className="w-[48px] h-[48px] rounded-full border-[1.5px] border-[#fdba74]/60 flex items-center justify-center shrink-0 bg-transparent">
                  <ClipboardList className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col pt-1">
                  <span className="text-white font-semibold text-[13.5px] mb-1 leading-tight">
                    Structured Execution
                  </span>
                  <span className="text-gray-400 text-[11px] leading-[1.4]">
                    Disciplined processes that turn intelligence into results
                  </span>
                </div>
              </div>

              {/* Connecting lines / SVGs */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ zIndex: 0 }}
              >
                <defs>
                  <marker
                    id="arrow"
                    markerWidth="5"
                    markerHeight="5"
                    refX="4"
                    refY="2.5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 5 2.5 L 0 5 z" fill="#e2e8f0" />
                  </marker>
                  <marker
                    id="arrow-down"
                    markerWidth="5"
                    markerHeight="5"
                    refX="4"
                    refY="2.5"
                    orient="auto-start-reverse"
                  >
                    <path d="M 0 0 L 5 2.5 L 0 5 z" fill="#9ca3af" />
                  </marker>
                </defs>

                {/* TL -> Center */}
                <path
                  d="M 245 94 L 265 94 L 295 150"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />

                {/* TR -> Center */}
                <path
                  d="M 455 94 L 435 94 L 405 150"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />

                {/* BL -> Center */}
                <path
                  d="M 245 406 L 265 406 L 295 350"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />

                {/* BR -> Center */}
                <path
                  d="M 455 406 L 435 406 L 405 350"
                  fill="none"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  markerEnd="url(#arrow)"
                />

                {/* Center -> Bottom Pill */}
                <path
                  d="M 350 370 L 350 425"
                  fill="none"
                  stroke="#9ca3af"
                  strokeWidth="1"
                  markerEnd="url(#arrow-down)"
                />
              </svg>

              {/* Bottom Pill */}
              <div className="absolute -bottom-[20px] left-1/2 -translate-x-1/2 border border-[#475569]/60 bg-[#0f172a]/80 backdrop-blur-sm rounded px-6 py-2 w-max max-w-[95%] text-center">
                <span className="text-gray-300 font-serif italic text-[14.5px]">
                  One Better Recommendation. Every Time.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CAPABILITIES SECTION ---------------- */
function CapabilitiesSection() {
  const cards = [
    {
      title: "Career Strategy",
      desc: "Helping you choose the right direction based on your goals and the market.",
      image:
        "https://images.unsplash.com/photo-1501250987900-211872d97eaa?auto=format&fit=crop&w=600&q=80",
      icon: MapPin,
    },
    {
      title: "Career Positioning",
      desc: "Crafting a standout profile that communicates your value and gets noticed.",
      image:
        "https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=600&q=80",
      icon: LineChart,
    },
    {
      title: "Market Intelligence",
      desc: "Tracking opportunities and trends to put you ahead of the curve.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
      icon: Bell,
    },
    {
      title: "Interview Excellence",
      desc: "Preparing you to perform with clarity, confidence, and impact.",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
      icon: UserCheck,
    },
    {
      title: "Candidate Success",
      desc: "Supporting your growth well beyond your first offer.",
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=600&q=80",
      icon: Heart,
    },
  ];

  return (
    <section className="w-full bg-[#f8f9fc] pt-6 pb-16 lg:pt-8 lg:pb-24">
      <div className="max-w-[1536px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="flex flex-col text-center items-center justify-center mb-12 lg:mb-16">
          <span className="text-[#3b2dd0] text-[11.5px] font-bold uppercase tracking-[0.2em] mb-3">
            HOW WE PREPARE YOU TO WIN
          </span>
          <h2 className="text-[#0f172a] font-serif text-[32px] sm:text-[38px] lg:text-[42px] leading-[1.1] tracking-tight">
            Every capability. One purpose—your success.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-shadow"
            >
              <div className="h-[140px] xl:h-[150px] w-full relative overflow-hidden bg-gray-100">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col p-5 xl:p-6 flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-7 h-7 rounded-full bg-[#f0f0fe] flex items-center justify-center shrink-0 border border-[#e0e0fd]">
                    <card.icon className="w-3.5 h-3.5 text-[#3b2dd0]" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-[13.5px] xl:text-[14px] font-bold text-[#0f172a] leading-tight">
                    {card.title}
                  </h4>
                </div>
                <p className="text-[12px] xl:text-[12.5px] text-gray-500 leading-[1.6] font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- STRIP SECTION ---------------- */
function StripSection() {
  return (
    <section className="w-full bg-[#040a15] flex flex-col lg:flex-row max-h-[1000px] lg:max-h-[320px]">
      <div className="w-full lg:w-5/12 h-[200px] lg:h-auto relative">
        <img
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
          alt="Professional looking forward"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark vintage fade vignette and right-side blend */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_#040a15_100%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#040a15]/30 to-[#040a15] pointer-events-none"></div>
        <div className="absolute inset-0 shadow-[inset_0_0_80px_#040a15] pointer-events-none"></div>
      </div>

      <div className="w-full lg:w-7/12 flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-8 lg:py-6 border-l border-white/5">
        <div className="max-w-[600px]">
          <div className="flex items-start gap-3 mb-2">
            <span className="font-serif text-[42px] lg:text-[48px] text-white leading-none mt-1 lg:mt-0">
              “
            </span>
            <div className="flex flex-col gap-1 mt-3 lg:mt-2">
              <p className="text-white text-base lg:text-[17px] font-serif tracking-wide">
                One day you'll celebrate the opportunity.
              </p>
              <p className="text-[#6366f1] text-[20px] lg:text-[24px] font-serif leading-[1.2]">
                We'll celebrate the journey that helped you earn it.
              </p>
            </div>
          </div>

          <div className="pl-[45px] lg:pl-[52px]">
            <p className="text-gray-200 text-[13px] mb-4">That's the HireLeap difference.</p>

            <Link
              to="/journey"
              className="flex items-center justify-center gap-2 bg-[#3b2dd0] hover:bg-[#3b2dd0]/90 text-white px-5 py-2.5 rounded transition-all mb-5 max-w-[300px] font-medium text-sm"
            >
              Start Your Career Journey
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>

            <div className="flex items-center gap-6 border-t border-white/10 pt-4 text-gray-300">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 opacity-70 shrink-0" />
                <span className="text-[11px]">Better preparation.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClipboardList className="w-3.5 h-3.5 opacity-70 shrink-0" />
                <span className="text-[11px]">Better decisions.</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 opacity-70 shrink-0" />
                <span className="text-[11px]">Better careers.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
