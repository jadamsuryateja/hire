import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { ShieldCheck, UserCheck, Target, Briefcase, Phone, UserPlus, TrendingUp, CircleDollarSign, Globe, RefreshCcw, MapPin, User, Mountain, Search, Split, CheckCircle2, GraduationCap, ArrowRight, Lightbulb, Compass, Trophy, LineChart, Smile, Users, BarChart2 } from "lucide-react";

export default function HireLeapMethod() {
  return (
    <PageShell>
      <Helmet>
        <title>The HireLeap Method™ — HireLeap</title>
        <meta name="description" content="Whatever your career goal, we have a system to help you achieve it." />
      </Helmet>
      <Hero />
      <GoalsSection />
      <FrameworkSection />
      <AdaptsToYouSection />
      <SuccessLooksLikeSection />
    </PageShell>
  );
}

function GoalsSection() {
  const goals = [
    { icon: Briefcase, text: "Land my first job", color: "text-teal-600" },
    { icon: Phone, text: "Get more interview calls", color: "text-blue-600" },
    { icon: UserPlus, text: "Crack interviews with confidence", color: "text-indigo-600" },
    { icon: TrendingUp, text: "Earn a promotion or leadership role", color: "text-orange-500" },
    { icon: CircleDollarSign, text: "Increase my salary", color: "text-green-600" },
    { icon: Globe, text: "Build an international career", color: "text-blue-700" },
    { icon: RefreshCcw, text: "Change my career path", color: "text-pink-600" },
    { icon: UserCheck, text: "Return to work with confidence", color: "text-blue-800" },
  ];

  return (
    <section className="pt-2 sm:pt-4 pb-8 sm:pb-12 bg-white w-full">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-[12px] font-bold uppercase tracking-widest text-primary mb-4 text-center">
          WHAT ARE YOU TRYING TO ACHIEVE?
        </div>
        <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0A102A] text-center mb-6">
          We help you reach <i className="text-primary">your career goals.</i>
        </h2>

        {/* 8 Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4 w-full mb-8">
          {goals.map((goal, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow bg-white min-h-[140px]">
              <goal.icon className={`h-8 w-8 mb-4 ${goal.color}`} strokeWidth={1.5} />
              <span className="text-[12px] font-bold text-[#0A102A] leading-tight">{goal.text}</span>
            </div>
          ))}
        </div>

        <div className="w-full bg-[#F8FAFC] rounded-2xl border border-gray-100 overflow-hidden flex flex-col lg:flex-row items-center p-6 lg:py-6 lg:px-8 gap-6">
          {/* Left Graphic (SVG Illustration) */}
          <div className="w-full lg:w-1/2 flex justify-center items-center relative min-h-[220px]">
            <img 
              src="/hireleap_method.png" 
              alt="HireLeap Method Graphic" 
              className="w-full h-auto max-w-[400px] object-contain"
            />
          </div>
          
          {/* Right Text */}
          <div className="w-full lg:w-1/2 flex flex-col pl-0 lg:pl-6">
            <h3 className="text-[26px] lg:text-[28px] font-extrabold text-[#0A102A] leading-tight mb-3">
              Different dreams.<br />One trusted system.
            </h3>
            <p className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed mb-4 font-medium">
              Every career journey is unique. The destination may be different, but the principles behind lasting career success are the same.
            </p>
            <p className="text-[16px] font-extrabold text-primary leading-snug">
              That's why every journey at HireLeap<br className="hidden sm:block" />is guided by The HireLeap Method™.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section className="grid w-full items-center gap-8 lg:grid-cols-[4fr_6fr] xl:grid-cols-[4fr_6fr] lg:gap-10">
      {/* Text Content */}
      <div className="px-5 py-8 sm:px-6 sm:py-10 lg:py-14 lg:pl-10 xl:pl-20 flex flex-col justify-center h-full">
        <div className="mb-5 text-[12px] font-bold uppercase tracking-widest text-primary">
          THE HIRELEAP METHOD™
        </div>
        <h1 className="text-[40px] font-normal leading-[1.08] tracking-tight text-[#0A102A] sm:text-[48px] lg:text-[42px] xl:text-[52px]">
          Whatever your career goal, we have a system to help you <i className="text-primary">achieve it.</i>
        </h1>
        
        <p className="mt-8 text-[16px] leading-relaxed text-gray-700 max-w-[480px]">
          The HireLeap Method™ is our career operating system that adapts to your journey—giving you clarity, the right opportunities, expert guidance, and the execution support you need to succeed and grow.
        </p>

        <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-row justify-start sm:justify-between items-start sm:items-center gap-6 sm:gap-4 lg:gap-6 text-[13px] font-semibold text-gray-600 w-full overflow-hidden sm:overflow-visible">
          <div className="flex items-start gap-2 lg:gap-3 whitespace-nowrap">
            <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="text-[#0A102A] font-bold text-[13px] lg:text-[14px]">Proven Framework</span>
              <span className="text-gray-500 text-[11px] lg:text-[12px] font-medium">Trusted by thousands</span>
            </div>
          </div>
          <div className="flex items-start gap-2 lg:gap-3 whitespace-nowrap">
            <UserCheck className="h-5 w-5 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="text-[#0A102A] font-bold text-[13px] lg:text-[14px]">Expert Guidance</span>
              <span className="text-gray-500 text-[11px] lg:text-[12px] font-medium">Human experts + AI</span>
            </div>
          </div>
          <div className="flex items-start gap-2 lg:gap-3 whitespace-nowrap">
            <Target className="h-5 w-5 text-primary shrink-0" />
            <div className="flex flex-col">
              <span className="text-[#0A102A] font-bold text-[13px] lg:text-[14px]">Measurable Results</span>
              <span className="text-gray-500 text-[11px] lg:text-[12px] font-medium">Outcomes that matter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Visual */}
      <div className="relative self-stretch overflow-hidden min-h-[350px] sm:min-h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
          alt="Two professionals discussing a career roadmap on a laptop"
          width={1408}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-center lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)] lg:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)]"
        />
      </div>
    </section>
  );
}

function FrameworkSection() {
  const steps = [
    {
      number: "1",
      icon: Mountain,
      title: "Build Your Foundation",
      color: "text-teal-600",
      bgSoft: "bg-teal-50",
      iconBg: "bg-teal-50/50",
      desc: "Get clear on who you are, what you want, and where you're going.",
      checks: ["Self-awareness", "Strengths & skills", "Career goals", "Personal brand"],
      helpDesc: "We help you gain clarity, define direction, and build a strong career foundation."
    },
    {
      number: "2",
      icon: Search,
      title: "Find Better Opportunities",
      color: "text-blue-600",
      bgSoft: "bg-blue-50",
      iconBg: "bg-blue-50/50",
      desc: "Discover the right opportunities that match your goals, skills, and future potential.",
      checks: ["Market & role research", "Industry insights", "Opportunity mapping", "Connections that matter"],
      helpDesc: "We bring market intelligence and AI-powered insights to help you find better opportunities."
    },
    {
      number: "3",
      icon: Split,
      title: "Choose Wisely",
      color: "text-indigo-600",
      bgSoft: "bg-indigo-50",
      iconBg: "bg-indigo-50/50",
      desc: "Evaluate and choose the opportunities that align with your growth and values.",
      checks: ["Role evaluation", "Company analysis", "Career fit assessment", "Risk vs. reward analysis"],
      helpDesc: "We help you make confident, future-focused decisions that drive long-term success."
    },
    {
      number: "4",
      icon: Target,
      title: "Prepare for Success",
      color: "text-pink-600",
      bgSoft: "bg-pink-50",
      iconBg: "bg-pink-50/50",
      desc: "Prepare, position, and present yourself to win interviews and offers with confidence.",
      checks: ["Resume & LinkedIn strategy", "ATS optimization", "Interview preparation", "Salary negotiation"],
      helpDesc: "We prepare you to stand out, perform confidently, and secure the best outcomes."
    },
    {
      number: "5",
      icon: TrendingUp,
      title: "Grow with Confidence",
      color: "text-orange-600",
      bgSoft: "bg-orange-50",
      iconBg: "bg-orange-50/50",
      desc: "Succeed in your role and continue growing into new milestones and opportunities.",
      checks: ["Onboarding success", "Performance & visibility", "Career growth planning", "Long-term advancement"],
      helpDesc: "We support you beyond the offer—so you grow, lead, and achieve more."
    }
  ];

  return (
    <section className="pt-8 sm:pt-10 pb-10 sm:pb-16 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-[12px] font-bold uppercase tracking-widest text-primary mb-2">
            THE HIRELEAP METHOD™
          </div>
          <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#0A102A]">
            A proven 5-step framework for building <i className="text-primary">meaningful career success.</i>
          </h2>
        </div>

        {/* 5 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col relative group">
              
              {/* Top Icons & Connecting Arrow */}
              <div className="relative flex flex-col items-center mb-6">
                
                {/* Arrow to next step (hidden on last step and mobile) */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-[calc(50%+60px)] w-[calc(100%-120px)] h-[2px] -translate-y-1/2 z-0">
                    <div className={`w-full h-full border-t-2 border-dashed ${step.color.replace('text-', 'border-').replace('600', '300')} opacity-50 relative`}>
                      <div className={`absolute right-0 top-[calc(50%-4px)] w-2 h-2 border-t-2 border-r-2 ${step.color.replace('text-', 'border-').replace('600', '300')} transform rotate-45`}></div>
                    </div>
                  </div>
                )}
                
                {/* The Step Number Circle (small) */}
                <div className={`absolute top-0 left-1/2 -translate-x-[40px] -translate-y-2 w-6 h-6 rounded-full flex items-center justify-center text-white text-[12px] font-bold z-20 ${step.color.replace('text-', 'bg-')}`}>
                  {step.number}
                </div>

                {/* The Large Faint Circle */}
                <div className={`w-24 h-24 rounded-full flex items-center justify-center relative z-10 border border-gray-100 ${step.iconBg}`}>
                  <step.icon className={`w-10 h-10 ${step.color}`} strokeWidth={1.5} />
                </div>
              </div>

              {/* Content block */}
              <div className="flex flex-col flex-grow text-center md:text-left">
                <h4 className={`text-[17px] font-bold mb-3 ${step.color}`}>{step.title}</h4>
                <p className="text-[13px] leading-relaxed text-gray-700 font-medium mb-6 min-h-[60px]">
                  {step.desc}
                </p>

                {/* Checkmarks */}
                <ul className="flex flex-col gap-2 mb-6 flex-grow">
                  {step.checks.map((check, i) => (
                    <li key={i} className="flex items-start gap-2 text-[12px] text-gray-600 font-medium text-left">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-[2px] ${step.color}`} strokeWidth={2.5} />
                      {check}
                    </li>
                  ))}
                </ul>

                {/* How HireLeap Helps Box */}
                <div className={`rounded-xl p-4 text-left ${step.bgSoft}`}>
                  <h5 className={`text-[12px] font-bold mb-2 ${step.color}`}>How HireLeap helps</h5>
                  <p className="text-[12px] text-gray-700 leading-relaxed font-medium">
                    {step.helpDesc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function AdaptsToYouSection() {
  const personas = [
    {
      icon: Mountain,
      title: "Foundation",
      color: "text-teal-600",
      desc: "Build a strong base for your long-term career growth."
    },
    {
      icon: Lightbulb,
      title: "Clarity",
      color: "text-blue-600",
      desc: "Understand your unique value and ideal career path."
    },
    {
      icon: Target,
      title: "Readiness",
      color: "text-indigo-600",
      desc: "Prepare to stand out and perform in every interview."
    },
    {
      icon: MapPin,
      title: "Positioning",
      color: "text-pink-600",
      desc: "Align your personal brand with market opportunities."
    },
    {
      icon: TrendingUp,
      title: "Momentum",
      color: "text-blue-700",
      desc: "Accelerate your job search with actionable strategies."
    },
    {
      icon: ShieldCheck,
      title: "Confidence",
      color: "text-orange-500",
      desc: "Navigate your career journey with expert assurance."
    }
  ];

  return (
    <section className="pb-8 sm:pb-12 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 lg:p-12 border border-gray-100">
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="text-[12px] font-bold uppercase tracking-widest text-primary mb-2">
              ONE FRAMEWORK. EVERY JOURNEY.
            </div>
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#0A102A]">
              The HireLeap Method™ <i className="text-primary">adapts to you.</i>
            </h2>
          </div>

          {/* 6 Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {personas.map((persona, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-all aspect-square">
                <persona.icon className={`w-8 h-8 mb-3 ${persona.color}`} strokeWidth={1.5} />
                <h4 className={`text-[13px] font-bold mb-2 ${persona.color}`}>
                  {persona.title}
                </h4>
                <p className="text-[11px] text-gray-600 leading-snug font-medium">
                  {persona.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function SuccessLooksLikeSection() {
  const steps = [
    {
      icon: User,
      title: "Understand",
      desc: "Get clarity on yourself and your direction.",
      color: "text-teal-600",
      borderColor: "border-teal-200",
    },
    {
      icon: Lightbulb,
      title: "Plan",
      desc: "Build a smart plan tailored to you.",
      color: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      icon: Compass,
      title: "Take Action",
      desc: "Execute with confidence and expert support.",
      color: "text-indigo-600",
      borderColor: "border-indigo-200",
    },
    {
      icon: LineChart,
      title: "Achieve",
      desc: "Secure the right opportunity and deliver results.",
      color: "text-pink-600",
      borderColor: "border-pink-200",
    },
    {
      icon: Trophy,
      title: "Thrive",
      desc: "Grow your career and create lasting impact.",
      color: "text-orange-500",
      borderColor: "border-orange-200",
    }
  ];

  return (
    <section className="bg-white pt-0 pb-0">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 5 Steps */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <div className="text-[10px] sm:text-[12px] font-bold uppercase tracking-widest text-primary mb-2">
              WHAT SUCCESS LOOKS LIKE WITH HIRELEAP
            </div>
            <h2 className="text-[24px] sm:text-[32px] font-extrabold text-[#0A102A]">
              A clearer path from where <i className="text-primary font-serif italic">you are</i> to where you want to be.
            </h2>
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-start relative max-w-6xl mx-auto gap-y-8 md:gap-y-0">
            {/* Hidden dotted line connecting circles on desktop */}
            <div className="hidden md:block absolute top-[36px] left-[10%] right-[10%] h-[2px] border-t-2 border-dashed border-gray-200 z-0"></div>
            
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col items-center text-center w-full md:w-1/5 relative z-10 px-2 ${index === steps.length - 1 ? 'col-span-2 md:col-span-1' : ''}`}>
                <div className={`w-[72px] h-[72px] bg-white rounded-full border-2 ${step.borderColor} flex items-center justify-center mb-4 shadow-sm`}>
                  <step.icon className={`w-8 h-8 ${step.color}`} strokeWidth={1.5} />
                </div>
                <h4 className="text-[14px] font-bold text-[#0A102A] mb-1">{step.title}</h4>
                <p className="text-[12px] text-gray-600 leading-snug font-medium max-w-[160px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-[#0A102A] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 lg:gap-12 relative overflow-hidden mb-12">
          
          {/* subtle background stars/glows for the banner */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -bottom-[50%] -left-[10%] w-[60%] h-[100%] rounded-full bg-primary/10 blur-[100px]"></div>
            <div className="absolute top-[20%] right-[10%] w-[40%] h-[80%] rounded-full bg-blue-500/10 blur-[80px]"></div>
            {/* some subtle curved lines like in the screenshot */}
            <svg className="absolute bottom-0 left-0 w-1/2 h-full opacity-20" viewBox="0 0 400 400" fill="none">
              <path d="M0 400 C 100 300, 200 400, 400 200" stroke="url(#gradient)" strokeWidth="2" fill="none" />
              <path d="M0 350 C 150 250, 250 450, 400 150" stroke="url(#gradient)" strokeWidth="2" fill="none" />
              <path d="M0 300 C 200 200, 300 500, 400 100" stroke="url(#gradient)" strokeWidth="1" fill="none" />
              <defs>
                <linearGradient id="gradient" x1="0" y1="400" x2="400" y2="150" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6" />
                  <stop offset="1" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center">
            <h3 className="text-white text-[28px] sm:text-[36px] font-extrabold leading-tight mb-4">
              Your ambitions deserve more than guesswork.
            </h3>
            <p className="text-gray-300 text-[13px] sm:text-[15px] leading-relaxed font-medium mb-8 max-w-[480px]">
              The HireLeap Method™ gives you the structure, expert guidance, and execution support you need to achieve meaningful and lasting career success.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link to="/consultation" className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center transition-colors text-[14px]">
                Start Your Career Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <div className="flex items-center text-gray-300">
                <ShieldCheck className="w-5 h-5 mr-2 text-gray-400" />
                <span className="text-[13px] font-medium">No commitment. Just clarity.</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-gray-700/50 pt-8 lg:pt-0 lg:pl-10">
            <h4 className="text-white text-[18px] sm:text-[20px] font-bold mb-6">Real impact. Real careers.</h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3">
                  <Users className="w-5 h-5 text-teal-400" />
                </div>
                <div className="text-white font-bold text-[20px] mb-1">5K+</div>
                <div className="text-gray-400 text-[11px] leading-tight">Aspirants<br/>Guided</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3">
                  <Smile className="w-5 h-5 text-blue-400" />
                </div>
                <div className="text-white font-bold text-[20px] mb-1">98%</div>
                <div className="text-gray-400 text-[11px] leading-tight">Satisfaction<br/>Rate</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-3">
                  <BarChart2 className="w-5 h-5 text-indigo-400" />
                </div>
                <div className="text-white font-bold text-[20px] mb-1">3X</div>
                <div className="text-gray-400 text-[11px] leading-tight">More Interview<br/>Calls</div>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3">
                  <Target className="w-5 h-5 text-orange-400" />
                </div>
                <div className="text-white font-bold text-[20px] mb-1">2X</div>
                <div className="text-gray-400 text-[11px] leading-tight">Career Growth<br/>Avg. Increase</div>
              </div>
            </div>

            <div className="relative">
              <div className="text-[13px] text-gray-300 italic font-medium leading-relaxed mb-3 pr-4">
                "HireLeap didn't just help me get a better job. It helped me build the confidence, clarity, and strategy to grow in my career."
              </div>
              <div className="text-[12px] font-bold text-white">— Senior Product Manager</div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
