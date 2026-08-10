import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PageShell } from "../components/PageShell";
import { ArrowRight, Play, Quote, BrainCircuit, User, ShieldCheck, Handshake, Plus, Minus, Check, MapPin, Flag } from "lucide-react";
import { useState } from "react";
import careerInvestmentImg from "../assets/career-investment.png";

export default function CareerInvestment() {
  return (
    <PageShell>
      <Helmet>
        <title>Career Investment | HireLeap</title>
        <meta name="description" content="You're not choosing a price. You're choosing how deeply we partner with your future." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full bg-white flex flex-col lg:flex-row items-stretch min-h-[600px] xl:min-h-[650px] overflow-hidden">
        
        {/* Right side - Image & Graphic (Rendered first in code so it can sit under the left gradient on mobile if needed, though we use grid/flex) */}
        <div className="absolute inset-0 lg:relative lg:w-[60%] lg:order-2 z-0">
          {/* Main Zen Background */}
          <img 
            src={careerInvestmentImg}
            alt="Zen garden sand ripples" 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Overlay text simulating the engraved stone in the center - Removed as it is baked into the image */}

          {/* Fading gradient from the left (white) to blend the image into the content on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          
          {/* Dark card in bottom right */}
          <div className="hidden md:flex absolute bottom-10 right-10 lg:bottom-16 lg:right-16 bg-[#27272a] text-white p-7 rounded-[12px] w-[240px] flex-col items-start shadow-2xl z-20">
            <Quote className="w-5 h-5 text-[#7161fa] mb-3 fill-current rotate-180" />
            <p className="text-[13.5px] font-sans font-medium leading-relaxed">
              Small decisions today create the career you'll be proud of tomorrow.
            </p>
          </div>
        </div>

        {/* Left side - Content */}
        <div className="relative z-10 w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center px-6 py-16 sm:px-10 lg:pl-16 xl:pl-24 bg-white/95 lg:bg-transparent lg:order-1">
          <div className="w-8 border-t-2 border-[#a199fa] mb-4" />
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#3b2dd0] mb-6">
            CAREER INVESTMENT
          </div>
          
          <h1 className="text-[36px] sm:text-[42px] lg:text-[46px] xl:text-[52px] font-serif font-normal text-[#0A102A] leading-[1.1] mb-6 tracking-tight">
            You're not choosing a price.<br />
            You're choosing how deeply we partner with <span className="italic text-[#3b2dd0]">your future.</span>
          </h1>

          <p className="text-[14px] sm:text-[15px] text-[#52525b] font-medium leading-relaxed max-w-[420px] mb-10">
            The right guidance today can shape your opportunities, your confidence, and your career for years to come.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Link 
              to="/career-journeys" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-[#3b2dd0] text-white font-sans text-[13px] font-bold tracking-wide hover:bg-[#3226b3] transition-transform hover:scale-105 shadow-xl whitespace-nowrap"
            >
              Plan Your Next Leap
              <ArrowRight className="ml-2 w-4 h-4 font-normal shrink-0" />
            </Link>
            
            <button className="flex items-center space-x-2 text-[#3b2dd0] font-sans text-[13px] font-bold tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap text-left">
              <Play className="w-4 h-4 fill-current shrink-0" />
              <span>See How HireLeap Creates Impact</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating Foundation Banner */}
      <FoundationBanner />

      {/* Pricing Comparison Section */}
      <PricingSection />

      {/* Alumni Benefit / Membership Section */}
      <MembershipSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Strip Section */}
      <CTAStrip />

    </PageShell>
  );
}

function CTAStrip() {
  return (
    <section className="relative w-full bg-[#0a061d] text-white py-6 sm:py-8 overflow-hidden">
      {/* Soft Background Glows */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(161,153,250,0.03)_0%,transparent_70%)] -translate-x-1/2" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(161,153,250,0.03)_0%,transparent_70%)] translate-x-1/2" />

      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10 relative z-10">
        
        {/* Decorative Dashed Lines (Hidden on small screens) */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M 180 75 Q 300 10 400 65" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
            <path d="M 800 65 Q 900 10 1020 75" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="6 6" fill="none" />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative">
          
          {/* Left Marker */}
          <div className="flex flex-col items-center flex-1 text-center mt-4 lg:mt-0 lg:-translate-y-4">
            <div className="mb-3 relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a061d]">
              <MapPin className="w-5 h-5 text-[#a199fa]" strokeWidth={2} />
            </div>
            <span className="text-[12px] sm:text-[13px] text-white/70 tracking-wide font-medium">Where you are today</span>
          </div>

          {/* Center Content */}
          <div className="flex-[2] flex flex-col items-center text-center max-w-[700px]">
            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-serif leading-[1.3] mb-5 font-medium">
              The best careers aren't built by chance.<br className="hidden sm:block" />
              They're built through <span className="text-[#a199fa]">better decisions</span>,<br className="hidden sm:block" />
              <span className="text-[#a199fa]">meaningful preparation, and consistent execution.</span>
            </h2>
            
            <Link 
              to="/career-journeys" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-[6px] bg-[#5a4add] text-white font-sans text-[12px] font-bold tracking-wide hover:bg-[#4839c3] transition-transform hover:scale-105 shadow-xl whitespace-nowrap mb-4"
            >
              Start Your Career Journey
              <ArrowRight className="ml-2 w-4 h-4 font-normal shrink-0" />
            </Link>

            <p className="text-[12px] sm:text-[13px] font-medium text-white/90">
              Better Decisions. Better Careers.
            </p>
          </div>

          {/* Right Marker */}
          <div className="flex flex-col items-center flex-1 text-center mt-4 lg:mt-0 lg:-translate-y-4">
            <div className="text-[#a199fa] mb-3 relative flex items-center justify-center w-12 h-12">
              <Flag className="w-6 h-6 fill-[#a199fa]/20" strokeWidth={1.5} />
              {/* Little vertical stick for the flag */}
              <div className="absolute top-[85%] left-1/2 -translate-x-1/2 w-[1.5px] h-3 bg-[#a199fa]" />
              <div className="absolute top-[110%] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#a199fa]" />
            </div>
            <span className="text-[12px] sm:text-[13px] text-white/70 tracking-wide font-medium mt-1">Where you want to be</span>
          </div>

        </div>
      </div>
    </section>
  );
}

// --- CONFIGURATION ---
// All prices, inclusions, and disclaimers are production-approved and editable here.
const CAREER_INVESTMENT_CONFIG = {
  disclaimer: "Flexible payment plans available for all packages. Post-placement fees are split into four manageable installments.",
  consultationEmail: "consultation@hireleap.com",
  plans: [
    {
      name: "BASIC",
      tagline: "Build Your Foundation",
      description: "Best for professionals who are comfortable managing their own job search but want expert preparation and a proven strategy.",
      price: "$1,500",
      stats: { apps: "Up to 70", interviews: "5 Sessions", access: "Common" },
      features: [
        "Expert resume preparation",
        "RUC session included",
        "5 interview coaching sessions",
        "Application strategy guidance"
      ],
      guarantee: "Job Guarantee: 0 Days",
      color: "purple",
      themeClasses: {
        accent: "text-[#3b2dd0]",
        iconBg: "bg-[#f5f3ff]",
        border: "border-gray-100",
        btn: "bg-[#3b2dd0] hover:bg-[#3226b3] text-white",
        badge: "text-[#3b2dd0]",
        cardBg: "bg-white",
      }
    },
    {
      name: "ELITE",
      tagline: "Increase Your Momentum",
      description: "Best for professionals who want HireLeap to actively support their search while remaining closely involved.",
      price: "$3,000",
      stats: { apps: "Up to 90", interviews: "15 Sessions", access: "Professional" },
      features: [
        "Expert resume preparation",
        "RUC session included",
        "15 interview coaching sessions",
        "Active recruiter engagement"
      ],
      guarantee: "Job Guarantee: 150 Days",
      color: "green",
      themeClasses: {
        accent: "text-[#0f766e]",
        iconBg: "bg-[#f0fdfa]",
        border: "border-gray-100",
        btn: "bg-[#0f766e] hover:bg-[#115e59] text-white",
        badge: "text-[#0f766e]",
        cardBg: "bg-white",
      }
    },
    {
      name: "PREMIUM",
      tagline: "Accelerate Your Career",
      description: "Best for busy professionals who want the ideal balance of expert strategy, active execution, and dedicated partnership.",
      price: "$5,000",
      stats: { apps: "Up to 110", interviews: "30 Sessions", access: "Professional" },
      features: [
        "Expert resume preparation",
        "RUC session included",
        "30 interview coaching sessions",
        "Dedicated career partner"
      ],
      guarantee: "Job Guarantee: 110 Days",
      recommended: true,
      color: "blue",
      themeClasses: {
        accent: "text-[#1d4ed8]",
        iconBg: "bg-[#eff6ff]",
        border: "border-[#1d4ed8]/30 shadow-md scale-102 relative z-10",
        btn: "bg-[#1d4ed8] hover:bg-[#1e40af] text-white",
        badge: "text-[#1d4ed8]",
        cardBg: "bg-white",
      }
    },
    {
      name: "PLATINUM",
      tagline: "Private Career Partnership",
      description: "Best for senior professionals and executives seeking HireLeap's highest level of personalization, strategic guidance, and white-glove execution.",
      price: "$15,000",
      stats: { apps: "Up to 150", interviews: "Unlimited", access: "Executive" },
      features: [
        "Expert resume preparation",
        "RUC session included",
        "Unlimited interview coaching",
        "Executive-level career partner",
        "Certification course included"
      ],
      guarantee: "Job Guarantee: 95 Days",
      color: "platinum",
      themeClasses: {
        accent: "text-[#b45309]",
        iconBg: "bg-[#fef3c7]",
        border: "border-[#b45309]/10",
        btn: "bg-[#b45309] hover:bg-[#92400e] text-white",
        badge: "text-[#b45309]",
        cardBg: "bg-[#fffbeb]/60",
      }
    }
  ]
};
// -----------------------

function PricingSection() {
  return (
    <section className="w-full bg-[#fbfbfb] pt-12 pb-8 px-5 sm:px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Eyebrow / Section Title */}
        <div className="text-center mb-10">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3b2dd0]">
            CHOOSE YOUR LEVEL OF PARTNERSHIP
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {CAREER_INVESTMENT_CONFIG.plans.map((p, idx) => {
            const classes = p.themeClasses;
            return (
              <div 
                key={idx} 
                className={`relative rounded-[12px] border p-5 flex flex-col justify-between ${classes.cardBg} ${classes.border}`}
              >
                {/* Recommended Badge */}
                {p.recommended && (
                  <div className="absolute -top-3.5 right-4 bg-[#1e1b4b] text-white text-[8px] font-bold px-2.5 py-1 rounded-[4px] uppercase tracking-wider shadow">
                    RECOMMENDED FOR MOST PROFESSIONALS
                  </div>
                )}

                <div>
                  {/* Icon & Plan Info */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-7 h-7 rounded-full ${classes.iconBg} flex items-center justify-center shrink-0`}>
                      <span className={`text-[10px] font-bold ${classes.accent}`}>★</span>
                    </div>
                    <div>
                      <h3 className={`text-[11.5px] font-bold tracking-wider ${classes.accent}`}>{p.name}</h3>
                      <p className="text-[#0A102A] text-[10px] font-bold leading-tight">{p.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-[#52525b] text-[10px] leading-relaxed mb-2.5 font-medium">
                    {p.description}
                  </p>

                  <div className="border-t border-gray-100 my-2" />

                  {/* Plan Cost */}
                  <div className="mb-2">
                    <span className="text-gray-400 text-[8px] uppercase font-bold block">Plan Cost</span>
                    <span className="text-[20px] font-sans font-extrabold text-[#0a102a]">{p.price}</span>
                  </div>

                  <div className="border-t border-gray-100 my-2" />

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-1 text-center mb-3.5 py-1 bg-gray-50/50 rounded-lg">
                    <div>
                      <span className="text-[7.5px] text-gray-400 font-bold block">Applications</span>
                      <span className={`text-[9.5px] font-bold ${classes.accent}`}>{p.stats.apps}</span>
                    </div>
                    <div>
                      <span className="text-[7.5px] text-gray-400 font-bold block">Interview Support</span>
                      <span className={`text-[9.5px] font-bold ${classes.accent}`}>{p.stats.interviews}</span>
                    </div>
                    <div>
                      <span className="text-[7.5px] text-gray-400 font-bold block">Recruiter Access</span>
                      <span className={`text-[9.5px] font-bold ${classes.accent}`}>{p.stats.access}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="space-y-1.5 mb-4">
                    {p.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-1.5 text-[10.5px] text-[#52525b] font-medium leading-tight">
                        <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[7px] font-bold shrink-0 mt-0.5 ${classes.accent} border-current/20`}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Guarantee Info */}
                  <div className="flex items-center gap-1.5 mb-2.5 text-[10px] font-bold text-gray-600">
                    <span className={classes.accent}>🛡️</span>
                    <span>{p.guarantee}</span>
                  </div>

                  {/* CTA Button */}
                  <a 
                    href={`mailto:${CAREER_INVESTMENT_CONFIG.consultationEmail}?subject=Consultation Request - ${p.name} Plan`}
                    className={`w-full py-2 rounded-[6px] text-[11px] font-bold tracking-wide transition-all shadow-sm flex items-center justify-center text-center ${classes.btn}`}
                  >
                    Get Started
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Footer disclaimer */}
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-[11px] text-gray-500 font-medium">
          <span>🔒</span>
          <span>{CAREER_INVESTMENT_CONFIG.disclaimer}</span>
        </div>

      </div>
    </section>
  );
}

function FoundationBanner() {
  const features = [
    {
      icon: <BrainCircuit className="w-4 h-4 text-[#7c3aed]" />,
      title: "Career Intelligence",
      description: "AI-powered insights combined with human expertise."
    },
    {
      icon: <User className="w-4 h-4 text-[#7c3aed]" />,
      title: "Expert Guidance",
      description: "Seasoned career professionals by your side."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#7c3aed]" />,
      title: "Proven Framework",
      description: "A structured methodology that has helped thousands succeed."
    },
    {
      icon: <Handshake className="w-4 h-4 text-[#7c3aed]" />,
      title: "End-to-End Partnership",
      description: "From preparation to placement and beyond—we stay with you."
    }
  ];

  return (
    <div className="relative z-20 w-full max-w-[1200px] xl:max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-10 -mt-10 sm:-mt-12 lg:-mt-16">
      <div className="bg-white rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 py-5 px-6 lg:py-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
        
        {/* Left Side: Title */}
        <div className="w-full lg:w-[32%] xl:w-[30%] shrink-0">
          <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#3b2dd0] mb-1.5">
            EVERY PLAN INCLUDES THE HIRELEAP FOUNDATION
          </div>
          <h2 className="text-[16px] sm:text-[18px] font-serif font-medium text-[#1a1a1a] leading-snug">
            The difference isn't the quality. The difference is how deeply we partner with you.
          </h2>
        </div>

        {/* Right Side: Features */}
        <div className="w-full lg:flex-1 grid grid-cols-2 md:grid-cols-4 gap-4 xl:gap-6">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col">
              <div className="w-8 h-8 rounded-full bg-[#f5f3ff] flex items-center justify-center mb-2 shrink-0">
                {f.icon}
              </div>
              <h3 className="text-[#0A102A] font-bold text-[12px] mb-1 leading-tight">{f.title}</h3>
              <p className="text-[#52525b] text-[11px] leading-relaxed font-medium">
                {f.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

function MembershipSection() {
  const listItems = [
    "Ongoing job marketing",
    "Managed applications",
    "Resume updates when needed",
    "Recruiter outreach",
    "Opportunity tracking",
    "Monthly strategy review",
    "Cancel anytime"
  ];

  return (
    <section className="w-full bg-[#fbfbfb] pb-2 px-5 sm:px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="relative rounded-[16px] bg-[#0c0828] text-white py-6 lg:py-6 px-8 lg:px-12 overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12 shadow-xl">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Left Block: Seal Graphic & Info */}
          <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
            {/* Alumni Community Image */}
            <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-lg shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80" 
                alt="Career Momentum Membership" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Left Content */}
            <div className="text-center sm:text-left relative z-10">
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-2">
                FOR RETURNING USERS
              </div>
              <h2 className="text-[20px] lg:text-[24px] font-serif font-normal leading-snug mb-3">
                Career Momentum™ Membership
              </h2>
              <p className="text-[11.5px] text-gray-300 font-medium leading-relaxed max-w-[400px]">
                Supports returning users needing ongoing marketing and application support—without repeating the entire HireLeap process.
              </p>
            </div>
          </div>

          {/* Vertical Separator Line */}
          <div className="hidden lg:block w-[1px] self-stretch bg-white/10" />

          {/* Right Block: Price and Checkmarks */}
          <div className="w-full lg:w-[42%] flex flex-col sm:flex-row items-stretch gap-6 lg:gap-8 relative z-10">
            {/* Price Column */}
            <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
              <h3 className="text-[16px] font-bold text-white mb-0.5">Custom Pricing</h3>
              <p className="text-[11px] text-gray-400 font-medium mb-4">For HireLeap Alumni</p>
              
              <div className="flex flex-col items-center sm:items-start justify-center gap-1 mb-4">
                <span className="text-[18px] font-sans font-extrabold text-[#a199fa]">Consultation Required</span>
                <span className="text-[11px] text-gray-400">Provisional rate must be confirmed</span>
              </div>
              
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                Available exclusively to professionals who have completed a HireLeap journey.
              </p>
            </div>

            {/* List Column */}
            <div className="flex-1 flex flex-col justify-center border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0 sm:border-l sm:border-white/10 sm:pl-6">
              <ul className="space-y-2">
                {listItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[11px] text-gray-200 font-medium">
                    <span className="w-4 h-4 rounded-full border border-purple-400/30 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-purple-400" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Which plan is right for me?",
      a: "Our plans are structured around your career goals. The Basic plan is perfect for independent job seekers who want resume and strategy guidance. Elite offers active support, and Premium is the ideal full-strategy partnership. Platinum is designed for executives needing bespoke, high-touch support."
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Yes! You can upgrade your plan at any point during your career transition. Any payments made will be pro-rated towards your upgraded package tier."
    },
    {
      q: "What happens after I receive an offer?",
      a: "Once you secure an offer, we support you through negotiation to maximize your salary. After placement, our standard support concludes, but you can opt into our Career Momentum™ alumni program to continue managing your career growth."
    },
    {
      q: "How does the post-placement fee work?",
      a: "Our post-placement fees are calculated based on your new salary package. To ensure flexibility, these fees are split into four manageable, interest-free installments paid over your first four months in your new role."
    },
    {
      q: "Who will be working on my profile?",
      a: "You'll work directly with a senior career strategist, backed by our team of expert resume editors and recruiter engagement managers who pitch your profile to select partners."
    },
    {
      q: "Is Career Momentum™ only for existing clients?",
      a: "Yes, Career Momentum™ is an exclusive benefit built only for HireLeap alumni who have successfully navigated a primary program and want ongoing career care."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Divide FAQs into two columns
  const col1 = faqs.slice(0, 3);
  const col2 = faqs.slice(3, 6);

  const renderFaqItem = (faq: typeof faqs[0], actualIdx: number) => {
    const isOpen = openIndex === actualIdx;
    return (
      <div 
        key={actualIdx} 
        className="bg-white border border-gray-100 rounded-[10px] shadow-sm overflow-hidden mb-3 transition-all"
      >
        <button
          onClick={() => toggleFaq(actualIdx)}
          className="w-full py-4 px-5 flex items-center justify-between text-left font-sans text-[12.5px] font-bold text-[#0A102A] hover:bg-gray-50/50 transition-colors"
        >
          <span>{faq.q}</span>
          {isOpen ? (
            <Minus className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          ) : (
            <Plus className="w-3.5 h-3.5 text-gray-400 shrink-0" />
          )}
        </button>
        {isOpen && (
          <div className="px-5 pb-4 text-[11px] leading-relaxed text-[#52525b] font-medium border-t border-gray-50 pt-2">
            {faq.a}
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="w-full bg-[#fbfbfb] pb-24 px-5 sm:px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3b2dd0]">
            FREQUENTLY ASKED QUESTIONS
          </div>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            {col1.map((faq, idx) => renderFaqItem(faq, idx))}
          </div>
          <div className="flex-1">
            {col2.map((faq, idx) => renderFaqItem(faq, idx + 3))}
          </div>
        </div>

      </div>
    </section>
  );
}
