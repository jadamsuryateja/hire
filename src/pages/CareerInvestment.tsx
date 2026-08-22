import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { PageShell } from "../components/PageShell";
import {
  ArrowRight,
  Play,
  Quote,
  BrainCircuit,
  User,
  ShieldCheck,
  Handshake,
  Plus,
  Minus,
  Check,
  MapPin,
  Flag,
  X,
  Shield,
  Diamond,
  Crown,
  Award,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import careerInvestmentImg from "../assets/career-investment.webp";
import careerInvestmentMobileImg from "../assets/career-investment-mobile.webp";

export default function CareerInvestment() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <PageShell>
      <Helmet>
        <title>Career Investment | HireLeap</title>
        <meta
          name="description"
          content="You're not choosing a price. You're choosing how deeply we partner with your future."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative w-full bg-white flex flex-col lg:flex-row items-stretch lg:min-h-[600px] xl:min-h-[650px] overflow-hidden">
        
        {/* Left side - Content */}
        <div className="relative z-10 w-full lg:w-[45%] xl:w-[40%] flex flex-col justify-center px-6 py-16 sm:px-10 lg:pl-16 xl:pl-24 bg-white/95 lg:bg-transparent lg:order-1">
          <div className="w-8 border-t-2 border-[#8f82ff] mb-4" />
          <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1a0b99] mb-6">
            CAREER INVESTMENT
          </div>

          <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-[#0A102A] sm:text-[48px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] min-[1920px]:text-[52px] mb-6">
            You're not choosing a price.
            <br />
            You're choosing how deeply we partner with{" "}
            <span className="italic text-[#1a0b99]">your future.</span>
          </h1>

          <p className="text-[14px] sm:text-[15px] text-[#52525b] font-medium leading-relaxed max-w-[420px] mb-10">
            The right guidance today can shape your opportunities, your confidence, and your career
            for years to come.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
            <Link
              to="/plan-your-next-leap"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-[6px] bg-[#1a0b99] text-white font-sans text-[13px] font-bold tracking-wide hover:bg-[#140a7a] transition-transform hover:scale-105 shadow-xl whitespace-nowrap"
            >
              Plan Your Next Leap
              <ArrowRight className="ml-2 w-4 h-4 font-normal shrink-0" />
            </Link>

            <button
              onClick={() => setShowVideo(true)}
              className="flex items-center space-x-2 text-[#1a0b99] font-sans text-[13px] font-bold tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap text-left cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current shrink-0" />
              <span>See How HireLeap Creates Impact</span>
            </button>
          </div>
        </div>

        {/* Right side - Image & Graphic */}
        <div className="relative w-full h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-[60%] lg:order-2 z-0">
          {/* Main Zen Background */}
          <picture className="block w-full h-auto lg:h-full lg:w-full">
            <source media="(max-width: 768px)" srcSet={careerInvestmentMobileImg} />
            <img loading="lazy"
              src={careerInvestmentImg}
              alt="Zen garden sand ripples"
              className="w-full h-auto block lg:h-full lg:w-full lg:object-cover lg:object-center"
            />
          </picture>

          {/* Overlay text simulating the engraved stone in the center - Removed as it is baked into the image */}

          {/* Fading gradient from the left (white) to blend the image into the content on desktop */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-[40%] bg-gradient-to-r from-white via-white/80 to-transparent z-10" />

          {/* Dark card in bottom right */}
          <div className="hidden md:flex absolute bottom-10 right-10 lg:bottom-16 lg:right-16 bg-[#27272a] text-white p-7 rounded-[12px] w-[240px] flex-col items-start shadow-2xl z-20">
            <Quote className="w-5 h-5 text-[#8f82ff] mb-3 fill-current rotate-180" />
            <p className="text-[13.5px] font-sans font-medium leading-relaxed">
              Small decisions today create the career you'll be proud of tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Foundation Banner */}
      <FoundationBanner />

      {/* Pricing Comparison Section with Tabs */}
      <PricingSection />

      {/* Full Comparison Table */}
      <ComparisonTable />

      {/* FAQ Section */}
      <FaqSection />

      {/* CTA Strip Section */}
      <CTAStrip />

      {/* Video Modal */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setShowVideo(false)}
        >
          <div
            className="relative w-full max-w-[900px] aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              aria-label="Close video"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
              title="HireLeap Impact Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
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
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 180 75 Q 300 10 400 65"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
            />
            <path
              d="M 800 65 Q 900 10 1020 75"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              fill="none"
            />
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative">
          {/* Left Marker */}
          <div className="flex flex-col items-center flex-1 text-center mt-4 lg:mt-0 lg:-translate-y-4">
            <div className="mb-3 relative w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0a061d]">
              <MapPin className="w-5 h-5 text-[#a199fa]" strokeWidth={2} />
            </div>
            <span className="text-[12px] sm:text-[13px] text-white/70 tracking-wide font-medium">
              Where you are today
            </span>
          </div>

          {/* Center Content */}
          <div className="flex-[2] flex flex-col items-center text-center max-w-[700px]">
            <h2 className="text-[22px] sm:text-[26px] lg:text-[28px] font-serif leading-[1.3] mb-5 font-medium">
              The best careers aren't built by chance.
              <br className="hidden sm:block" />
              They're built through <span className="text-[#a199fa]">better decisions</span>,
              <br className="hidden sm:block" />
              <span className="text-[#a199fa]">
                meaningful preparation, and consistent execution.
              </span>
            </h2>

            <Link
              to="/career-journeys"
              className="inline-flex items-center justify-center px-6 py-3 rounded-[6px] bg-[#1a0b99] text-white font-sans text-[12px] font-bold tracking-wide hover:bg-[#140a7a] transition-transform hover:scale-105 shadow-xl whitespace-nowrap mb-4"
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
            <span className="text-[12px] sm:text-[13px] text-white/70 tracking-wide font-medium mt-1">
              Where you want to be
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- CONFIGURATION ---
// All prices, inclusions, and disclaimers are production-approved and editable here.
const CAREER_INVESTMENT_CONFIG = {
  disclaimer:
    "Flexible payment plans available for all packages. Post-placement fees are split into four manageable installments.",
  consultationEmail: "consultation@hireleap.com",
  plans: [
    {
      name: "BASIC",
      tagline: "Build Your Foundation",
      description:
        "Best for professionals who are comfortable managing their own job search but want expert preparation and a proven strategy.",
      price: "$1,500",
      stats: { apps: "Up to 70", interviews: "5 Sessions", access: "Common" },
      features: [
        "Expert resume preparation",
        "RUC session included",
        "5 interview coaching sessions",
        "Application strategy guidance",
      ],
      icon: Shield,
      guarantee: "Job Guarantee: 0 Days",
      color: "purple",
      themeClasses: {
        accent: "text-[#1a0b99]",
        iconBg: "bg-[#f5f3ff]",
        border: "border-gray-100",
        btn: "bg-[#1a0b99] hover:bg-[#140a7a] text-white",
        badge: "text-[#1a0b99]",
        cardBg: "bg-white",
      },
    },
    {
      name: "ELITE",
      tagline: "Increase Your Momentum",
      description:
        "Best for professionals who want HireLeap to actively support their search while remaining closely involved.",
      price: "$3,000",
      stats: { apps: "Up to 90", interviews: "15 Sessions", access: "Professional" },
      features: [
        "Expert resume preparation",
        "RUC session included",
        "15 interview coaching sessions",
        "Active recruiter engagement",
      ],
      icon: Diamond,
      guarantee: "Job Guarantee: 150 Days",
      color: "green",
      themeClasses: {
        accent: "text-[#1a0b99]",
        iconBg: "bg-[#f5f3ff]",
        border: "border-gray-100",
        btn: "bg-[#1a0b99] hover:bg-[#140a7a] text-white",
        badge: "text-[#1a0b99]",
        cardBg: "bg-white",
      },
    },
    {
      name: "PREMIUM",
      tagline: "Accelerate Your Career",
      description:
        "Best for busy professionals who want the ideal balance of expert strategy, active execution, and dedicated partnership.",
      price: "$5,000",
      stats: { apps: "Up to 110", interviews: "30 Sessions", access: "Professional" },
      features: [
        "Expert resume preparation",
        "RUC session included",
        "30 interview coaching sessions",
        "Dedicated career partner",
      ],
      icon: Crown,
      guarantee: "Job Guarantee: 110 Days",
      recommended: true,
      color: "blue",
      themeClasses: {
        accent: "text-[#1a0b99]",
        iconBg: "bg-[#f5f3ff]",
        border: "border-[#1a0b99]/30 shadow-md scale-102 relative z-10",
        btn: "bg-[#1a0b99] hover:bg-[#140a7a] text-white",
        badge: "text-[#1a0b99]",
        cardBg: "bg-white",
      },
    },
    {
      name: "PLATINUM",
      tagline: "Private Career Partnership",
      description:
        "Best for senior professionals and executives seeking HireLeap's highest level of personalization, strategic guidance, and white-glove execution.",
      price: "$15,000",
      stats: { apps: "Up to 150", interviews: "Unlimited", access: "Executive" },
      features: [
        "Expert resume preparation",
        "RUC session included",
        "Unlimited interview coaching",
        "Executive-level career partner",
        "Certification course included",
      ],
      icon: Award,
      guarantee: "Job Guarantee: 95 Days",
      color: "platinum",
      themeClasses: {
        accent: "text-[#1a0b99]",
        iconBg: "bg-[#f5f3ff]",
        border: "border-[#1a0b99]/10",
        btn: "bg-[#1a0b99] hover:bg-[#140a7a] text-white",
        badge: "text-[#1a0b99]",
        cardBg: "bg-[#fffbeb]/60",
      },
    },
  ],
};
// -----------------------

function PricingSection() {
  const [activeTab, setActiveTab] = useState<'primary' | 'alumni'>('primary');

  const alumniListItems = [
    "Ongoing job marketing",
    "Managed applications",
    "Resume updates when needed",
    "Recruiter outreach",
    "Opportunity tracking",
    "Monthly strategy review",
    "Cancel anytime",
  ];

  return (
    <section className="w-full bg-[#fbfbfb] pt-12 pb-8 px-5 sm:px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Eyebrow / Section Title */}
        <div className="text-center mb-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a0b99] mb-4">
            CHOOSE YOUR LEVEL OF PARTNERSHIP
          </div>

          {/* Tabs */}
          <div className="inline-flex items-center bg-gray-100 rounded-[8px] p-1">
            <button
              onClick={() => setActiveTab('primary')}
              className={`px-5 py-2 rounded-[6px] text-[11px] font-bold tracking-wide transition-all ${
                activeTab === 'primary'
                  ? 'bg-[#1a0b99] text-white shadow-sm'
                  : 'text-[#52525b] hover:text-[#0A102A]'
              }`}
            >
              Primary Programs
            </button>
            <button
              onClick={() => setActiveTab('alumni')}
              className={`px-5 py-2 rounded-[6px] text-[11px] font-bold tracking-wide transition-all ${
                activeTab === 'alumni'
                  ? 'bg-[#1a0b99] text-white shadow-sm'
                  : 'text-[#52525b] hover:text-[#0A102A]'
              }`}
            >
              HireLeap Alumni
            </button>
          </div>
        </div>

        {/* Primary Programs Tab */}
        {activeTab === 'primary' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
              {CAREER_INVESTMENT_CONFIG.plans.map((p, idx) => {
                const classes = p.themeClasses;
                const PlanIcon = p.icon;
                return (
                  <div
                    key={idx}
                    className={`relative rounded-[12px] border p-5 flex flex-col justify-between ${classes.cardBg} ${classes.border}`}
                  >
                    {p.recommended && (
                      <div className="absolute -top-3.5 right-4 bg-[#1e1b4b] text-white text-[8px] font-bold px-2.5 py-1 rounded-[4px] uppercase tracking-wider shadow">
                        RECOMMENDED FOR MOST PROFESSIONALS
                      </div>
                    )}

                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div
                          className={`w-9 h-9 rounded-full ${classes.iconBg} flex items-center justify-center shrink-0`}
                        >
                          <PlanIcon className={`w-[18px] h-[18px] ${classes.accent}`} strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className={`text-[11.5px] font-bold tracking-wider ${classes.accent}`}>
                            {p.name}
                          </h3>
                          <p className="text-[#0A102A] text-[10px] font-bold leading-tight">
                            {p.tagline}
                          </p>
                        </div>
                      </div>

                      <p className="text-[#52525b] text-[10px] leading-relaxed mb-2.5 font-medium">
                        {p.description}
                      </p>

                      <div className="border-t border-gray-100 my-2" />

                      <div className="mb-2">
                        <span className="text-gray-400 text-[8px] uppercase font-bold block">Plan Cost</span>
                        <span className="text-[20px] font-sans font-extrabold text-[#0a102a]">{p.price}</span>
                      </div>

                      <div className="border-t border-gray-100 my-2" />

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
                      <div className="flex items-center gap-1.5 mb-2.5 text-[10px] font-bold text-gray-600">
                        <span className={classes.accent}>🛡️</span>
                        <span>{p.guarantee}</span>
                      </div>
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

            {/* See All Inclusions */}
            <div className="mt-6 text-center">
              <a
                href="#comparison-table"
                className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#1a0b99] hover:underline transition-all"
              >
                See all inclusions
                <ChevronDown className="w-3.5 h-3.5" />
              </a>
            </div>
          </>
        )}

        {/* HireLeap Alumni Tab */}
        {activeTab === 'alumni' && (
          <div className="max-w-[700px] mx-auto">
            <div className="relative rounded-[16px] bg-[#0c0828] text-white py-8 px-8 lg:px-12 overflow-hidden flex flex-col lg:flex-row items-center gap-8 lg:gap-12 shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex-1 flex flex-col sm:flex-row items-center gap-6">
                <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-2 border-purple-500/30 shadow-lg shrink-0">
                  <img loading="lazy"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=300&q=80"
                    alt="Career Momentum Membership"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center sm:text-left relative z-10">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-purple-400 mb-2">FOR RETURNING USERS</div>
                  <h2 className="text-[20px] lg:text-[24px] font-serif font-normal leading-snug mb-3">Career Momentum™ Membership</h2>
                  <p className="text-[11.5px] text-gray-300 font-medium leading-relaxed max-w-[400px]">
                    Supports returning users needing ongoing marketing and application support—without repeating the entire HireLeap process.
                  </p>
                </div>
              </div>

              <div className="hidden lg:block w-[1px] self-stretch bg-white/10" />

              <div className="w-full lg:w-[42%] flex flex-col sm:flex-row items-stretch gap-6 lg:gap-8 relative z-10">
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
                <div className="flex-1 flex flex-col justify-center border-t border-white/10 pt-6 sm:border-t-0 sm:pt-0 sm:border-l sm:border-white/10 sm:pl-6">
                  <ul className="space-y-2">
                    {alumniListItems.map((item, idx) => (
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
        )}

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
      icon: <BrainCircuit className="w-6 h-6 text-[#1a0b99]" />,
      title: "Career Intelligence",
      description: "AI-powered insights combined with human expertise.",
    },
    {
      icon: <User className="w-6 h-6 text-[#1a0b99]" />,
      title: "Expert Guidance",
      description: "Seasoned career professionals by your side.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#1a0b99]" />,
      title: "Proven Framework",
      description: "A structured methodology that has helped thousands succeed.",
    },
    {
      icon: <Handshake className="w-6 h-6 text-[#1a0b99]" />,
      title: "End-to-End Partnership",
      description: "From preparation to placement and beyond—we stay with you.",
    },
  ];

  return (
    <div className="relative z-20 w-full max-w-[1200px] xl:max-w-[1300px] mx-auto px-5 sm:px-6 lg:px-10 -mt-10 sm:-mt-12 lg:-mt-16">
      <div className="bg-white rounded-[12px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 py-5 px-6 lg:py-6 lg:px-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
        {/* Left Side: Title */}
        <div className="w-full lg:w-[32%] xl:w-[30%] shrink-0">
          <div className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#1a0b99] mb-1.5">
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
              <div className="w-10 h-10 rounded-full bg-[#f5f3ff] flex items-center justify-center mb-2 shrink-0">
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

// Full Comparison Table
function ComparisonTable() {
  const rows = [
    { feature: "Expert Resume Preparation", basic: true, elite: true, premium: true, platinum: true },
    { feature: "RUC Session", basic: true, elite: true, premium: true, platinum: true },
    { feature: "Interview Coaching Sessions", basic: "5", elite: "15", premium: "30", platinum: "Unlimited" },
    { feature: "Application Strategy", basic: true, elite: true, premium: true, platinum: true },
    { feature: "Applications Submitted", basic: "Up to 70", elite: "Up to 90", premium: "Up to 110", platinum: "Up to 150" },
    { feature: "Active Recruiter Engagement", basic: false, elite: true, premium: true, platinum: true },
    { feature: "Dedicated Career Partner", basic: false, elite: false, premium: true, platinum: true },
    { feature: "Executive-Level Partner", basic: false, elite: false, premium: false, platinum: true },
    { feature: "Certification Course Included", basic: false, elite: false, premium: false, platinum: true },
    { feature: "Recruiter Access Level", basic: "Common", elite: "Professional", premium: "Professional", platinum: "Executive" },
    { feature: "Job Guarantee", basic: "0 Days", elite: "150 Days", premium: "110 Days", platinum: "95 Days" },
  ];

  const renderCell = (val: boolean | string) => {
    if (val === true) return <Check className="w-4 h-4 text-[#1a0b99] mx-auto" />;
    if (val === false) return <span className="text-gray-300">—</span>;
    return <span className="text-[10px] font-bold text-[#0A102A]">{val}</span>;
  };

  return (
    <section id="comparison-table" className="w-full bg-[#fbfbfb] pb-12 px-5 sm:px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1a0b99] mb-1">DETAILED COMPARISON</div>
          <h2 className="text-[18px] sm:text-[22px] font-serif font-medium text-[#0A102A]">See all inclusions across plans</h2>
        </div>

        <div className="overflow-x-auto rounded-[12px] border border-gray-100 shadow-sm bg-white">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 text-[10px] font-bold uppercase tracking-wider text-gray-400 w-[35%]">Feature</th>
                <th className="text-center py-3 px-3 text-[10px] font-bold uppercase tracking-wider text-[#1a0b99]">Basic</th>
                <th className="text-center py-3 px-3 text-[10px] font-bold uppercase tracking-wider text-[#1a0b99]">Elite</th>
                <th className="text-center py-3 px-3 text-[10px] font-bold uppercase tracking-wider text-[#1a0b99] bg-[#f5f3ff]/60">Premium</th>
                <th className="text-center py-3 px-3 text-[10px] font-bold uppercase tracking-wider text-[#1a0b99]">Platinum</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-gray-50/30' : ''}`}>
                  <td className="py-2.5 px-4 text-[10.5px] font-medium text-[#52525b]">{row.feature}</td>
                  <td className="py-2.5 px-3 text-center">{renderCell(row.basic)}</td>
                  <td className="py-2.5 px-3 text-center">{renderCell(row.elite)}</td>
                  <td className="py-2.5 px-3 text-center bg-[#f5f3ff]/60">{renderCell(row.premium)}</td>
                  <td className="py-2.5 px-3 text-center">{renderCell(row.platinum)}</td>
                </tr>
              ))}
              {/* Price Row */}
              <tr className="border-t-2 border-gray-100">
                <td className="py-3 px-4 text-[10.5px] font-bold text-[#0A102A]">Plan Cost</td>
                <td className="py-3 px-3 text-center text-[14px] font-extrabold text-[#0A102A]">$1,500</td>
                <td className="py-3 px-3 text-center text-[14px] font-extrabold text-[#0A102A]">$3,000</td>
                <td className="py-3 px-3 text-center text-[14px] font-extrabold text-[#0A102A] bg-[#f5f3ff]/60">$5,000</td>
                <td className="py-3 px-3 text-center text-[14px] font-extrabold text-[#0A102A]">$15,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    {
      q: "Which plan is right for me?",
      a: "Our plans are structured around your career goals. The Basic plan is perfect for independent job seekers who want resume and strategy guidance. Elite offers active support, and Premium is the ideal full-strategy partnership. Platinum is designed for executives needing bespoke, high-touch support.",
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Yes! You can upgrade your plan at any point during your career transition. Any payments made will be pro-rated towards your upgraded package tier.",
    },
    {
      q: "What happens after I receive an offer?",
      a: "Once you secure an offer, we support you through negotiation to maximize your salary. After placement, our standard support concludes, but you can opt into our Career Momentum™ alumni program to continue managing your career growth.",
    },
    {
      q: "How does the post-placement fee work?",
      a: "Our post-placement fees are calculated based on your new salary package. To ensure flexibility, these fees are split into four manageable, interest-free installments paid over your first four months in your new role.",
    },
    {
      q: "Who will be working on my profile?",
      a: "You'll work directly with a senior career strategist, backed by our team of expert resume editors and recruiter engagement managers who pitch your profile to select partners.",
    },
    {
      q: "Is Career Momentum™ only for existing clients?",
      a: "Yes, Career Momentum™ is an exclusive benefit built only for HireLeap alumni who have successfully navigated a primary program and want ongoing career care.",
    },
    {
      q: "How long does a typical HireLeap journey take?",
      a: "Most professionals complete their career transition within 60–120 days depending on the plan chosen, market conditions, and personal readiness. Our Premium and Platinum plans include job guarantees with defined timelines for added peace of mind.",
    },
    {
      q: "Do you work with professionals outside India?",
      a: "Absolutely. HireLeap supports professionals globally. Our career strategists, resume experts, and recruiter network operate across multiple geographies including North America, Europe, the Middle East, and Southeast Asia.",
    },
    {
      q: "What industries and roles does HireLeap specialize in?",
      a: "HireLeap supports professionals across technology, finance, consulting, healthcare, marketing, and operations. Whether you're a software engineer, product manager, data scientist, or a C-suite executive, our frameworks adapt to your domain.",
    },
    {
      q: "Is there a refund policy if I'm not satisfied?",
      a: "We stand behind our work. If you feel the quality of our deliverables doesn't meet the promised standard, we offer a review and remediation process. Specific refund terms are outlined in your service agreement based on the plan selected.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Divide FAQs into two columns
  const col1 = faqs.slice(0, 5);
  const col2 = faqs.slice(5, 10);

  const renderFaqItem = (faq: (typeof faqs)[0], actualIdx: number) => {
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
    <section id="faq" className="w-full bg-[#fbfbfb] pb-24 px-5 sm:px-6 lg:px-10">
      <div className="max-w-[1100px] mx-auto">
        {/* Title */}
        <div className="text-center mb-8">
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#1a0b99]">
            FREQUENTLY ASKED QUESTIONS
          </div>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">{col1.map((faq, idx) => renderFaqItem(faq, idx))}</div>
          <div className="flex-1">{col2.map((faq, idx) => renderFaqItem(faq, idx + 3))}</div>
        </div>
      </div>
    </section>
  );
}
