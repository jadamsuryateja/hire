import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { Cpu, Users, Layers, Sprout, TrendingUp, Compass, Globe, Heart, Mountain, Star, ArrowRight, ShieldCheck, UserCheck, Quote } from "lucide-react";
import heroImg from "@/assets/career_journeys_hero.png"; 

export default function CareerJourneys() {
  return (
    <PageShell>
      <Helmet>
        <title>Career Journeys — HireLeap</title>
        <meta name="description" content="No matter where you are today, HireLeap meets you there—and helps you move forward with clarity." />
      </Helmet>
      <Hero />
      <JourneysList />
      <CareerJourneysCTA />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="grid w-full items-center gap-8 lg:grid-cols-[4fr_6fr] xl:grid-cols-[4fr_6fr] lg:gap-10">
      {/* Text Content */}
      <div className="px-5 py-8 sm:px-6 sm:py-10 lg:py-14 lg:pl-10 xl:pl-20 flex flex-col justify-center h-full">
        <div className="mb-5 text-[12px] font-bold uppercase tracking-widest text-primary">
          CAREER JOURNEYS
        </div>
        <h1 className="text-[40px] font-normal leading-[1.08] tracking-tight text-[#0A102A] sm:text-[48px] lg:text-[42px] xl:text-[52px]">
          Every career journey begins with a different question.
        </h1>
        
        <p className="mt-8 text-[16px] leading-relaxed text-gray-700 max-w-[480px]">
          No matter where you are today, HireLeap meets you there—and helps you move forward with clarity.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-[13px] font-semibold text-gray-600">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            AI-Powered Expert Guidance
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-primary" />
            Expert Career Partners
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-4 w-4 text-primary" />
            Proven Frameworks
          </div>
        </div>
      </div>

      {/* Visual */}
      <div className="relative self-stretch overflow-hidden min-h-[350px] sm:min-h-[500px]">
        <img
          src="/career_journeys_hero.png"
          alt="Modern home office desk setup with laptop and whiteboard"
          width={1408}
          height={1008}
          className="absolute inset-0 h-full w-full object-cover object-center lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)] lg:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_15%)]"
        />
      </div>
    </section>
  );
}

const journeys = [
  {
    number: "01",
    title: "I'm Starting",
    subtitle: "Every successful career begins with one confident first step.",
    question: "How do I start my career the right way?",
    tags: ["Students", "Graduates", "Internships", "CPT/OPT", "STEM OPT"],
    icon: Sprout,
    color: "#5b45c2", // Blueish-purple
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "02",
    title: "I'm Growing",
    subtitle: "Growth begins the moment you choose it.",
    question: "How do I reach the next level in my career?",
    tags: ["Promotion", "Better Salary", "Leadership", "Next Level"],
    icon: TrendingUp,
    color: "#3062d4", // Blue
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "03",
    title: "I'm Changing",
    subtitle: "The smartest move can lead to your best future.",
    question: "What's my smartest next move?",
    tags: ["Career Switch", "New Skills", "AI Transition", "New Industry"],
    icon: Compass,
    color: "#188a72", // Teal
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "04",
    title: "I'm Building a Global Career",
    subtitle: "Your opportunities shouldn't be limited by geography.",
    question: "Where can my career grow next?",
    tags: ["H-1B Professionals", "Global Mobility", "Remote", "Canada"],
    icon: Globe,
    color: "#2a36b1", // Indigo
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "05",
    title: "I'm Returning",
    subtitle: "Your story isn't over. It may just be beginning again.",
    question: "Can I start again with confidence?",
    tags: ["Career Break", "Re-entry", "Parents", "Comeback"],
    icon: Heart,
    color: "#d92c5c", // Pink-red
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "06",
    title: "I'm Rebuilding",
    subtitle: "A setback doesn't define you. Your next decision does.",
    question: "How do I move forward after a setback?",
    tags: ["Layoff", "Burnout", "Setback", "Uncertainty"],
    icon: Mountain,
    color: "#e86235", // Orange
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    number: "07",
    title: "I'm Creating My Future",
    subtitle: "Design the career you truly want.",
    question: "What do I want my career to become?",
    tags: ["Long-term Vision", "Entrepreneurship", "Leadership", "Impact"],
    icon: Star,
    color: "#d19a2b", // Yellow/Gold
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80"
  }
];

function JourneysList() {
  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 w-full max-w-full">
      <div className="text-center mb-10 px-5 sm:px-6 lg:px-8">
        <div className="mb-4 text-[12px] font-bold uppercase tracking-widest text-[#4f3bc4]">
          WHERE ARE YOU TODAY?
        </div>
        <h2 className="text-[28px] sm:text-[36px] font-medium font-serif text-[#0A102A]">
          Choose the journey that matches where{" "}
          <span className="relative inline-block">
            you
            <svg className="absolute -bottom-[0.2em] left-0 w-full h-[0.35em] text-[#4f3bc4]" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M 15,18 Q 50,10 85,18" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>{" "}
          are right now.
        </h2>
      </div>

      <div className="flex flex-col gap-6 relative px-4 sm:px-6 lg:px-12 xl:px-20">

        {journeys.map((journey, idx) => (
          <div key={idx} className="relative flex items-center group cursor-pointer">
            {/* Journey Card */}
            <div className="flex-1 rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition-shadow hover:shadow-md flex flex-col md:flex-row relative">
              
              {/* Content Side */}
              <div className="p-6 md:p-8 md:w-[55%] lg:w-[60%] flex flex-col lg:flex-row gap-6 relative z-10 pr-4">
                {/* Left Col inside Card (Icon + Title/Subtitle + Tags) */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center shrink-0"
                      style={{ color: journey.color }}
                    >
                      <journey.icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-[28px] font-serif font-medium mb-1" style={{ color: journey.color }}>{journey.title}</h3>
                      <p className="text-[14px] text-gray-600 font-medium max-w-[250px] leading-relaxed">
                        {journey.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-wrap gap-2 lg:pl-18">
                    {journey.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="inline-flex items-center rounded-full border border-gray-200 px-3 py-1 text-[11px] font-semibold text-gray-500 uppercase tracking-wider bg-gray-50/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Col inside Card (Question + Link) */}
                <div className="flex flex-col justify-center lg:border-l lg:border-gray-100 lg:pl-8 lg:max-w-[200px]">
                  <p className="text-[14px] font-medium text-gray-600 mb-6 leading-relaxed">
                    {journey.question}
                  </p>
                  <div className="flex items-center gap-1.5 text-[13px] font-bold" style={{ color: journey.color }}>
                    The HireLeap Method™
                  </div>
                </div>
              </div>

              {/* Image Side */}
              <div className="md:absolute right-0 top-0 bottom-0 md:w-[45%] lg:w-[40%] h-[250px] md:h-auto overflow-hidden">
                <img 
                  src={journey.image} 
                  alt={journey.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 md:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_25%)] md:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_25%)]"
                />
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CareerJourneysCTA() {
  return (
    <section className="relative w-full bg-white pb-12 pt-10 sm:pb-16 sm:pt-14">
      {/* Background Mountain Path (Left Side) */}
      <div className="absolute left-0 top-0 h-full w-[40%] opacity-50 pointer-events-none hidden lg:block overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?auto=format&fit=crop&w=1200&q=80" 
          alt="Path in the mountains"
          className="h-full w-full object-cover [mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)] [-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_100%)]"
        />
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-6 relative z-10">
        
        {/* Main CTA Content */}
        <div className="mx-auto max-w-3xl text-center mb-12 lg:mb-14">
          <h2 className="mb-4 font-serif text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-[1.1] text-[#0A102A]">
            Your career journey is uniquely yours.
          </h2>
          
          <p className="mb-5 text-[15px] sm:text-[16px] leading-relaxed text-gray-600 font-medium">
            Somewhere today, another aspirant is asking the same questions you once asked.<br className="hidden md:block" />
            If this experience helped you see your next step more clearly,<br className="hidden md:block" />
            we hope it helps someone else find theirs too.
          </p>

          <p className="mb-6 text-[16px] sm:text-[18px] font-bold text-[#4f3bc4]">
            Because better careers begin with better decisions.
          </p>

          <div className="flex flex-col items-center justify-center space-y-4">
            <Link to="/contact" className="inline-flex items-center justify-center space-x-2 rounded-full bg-[#1a0b99] px-8 py-3.5 font-bold text-white transition-transform hover:scale-105 hover:shadow-lg">
              <span className="text-[16px]">Start Your Career Journey</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center text-[13px] font-semibold text-gray-500">
              <ShieldCheck className="h-4 w-4 mr-1.5 text-gray-400" />
              No commitment. Just clarity.
            </div>
          </div>
          
          {/* Right side handwritten note */}
          <div className="hidden xl:block absolute right-[5%] top-[10%] rotate-[-4deg]">
            <div className="flex flex-col items-center">
              <span className="font-['Caveat',_cursive] text-[26px] text-gray-700 whitespace-nowrap">
                One conversation
              </span>
              <div className="flex items-center gap-2 -mt-1">
                <span className="font-['Caveat',_cursive] text-[26px] text-gray-700 whitespace-nowrap">
                  can change everything.
                </span>
                <Heart className="w-5 h-5 text-[#b6a9ef] stroke-[2]" />
              </div>
              <svg className="w-[200px] h-6 mt-1 text-[#b6a9ef] opacity-80" viewBox="0 0 200 20" fill="none">
                <path d="M 5,15 Q 80,0 195,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="w-full rounded-2xl border border-gray-100 bg-white p-4 sm:p-6 lg:p-8 shadow-[0_4px_30px_-10px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:w-3/4">
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f2fc] text-[#4f3bc4]">
                  <UserCheck className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[18px] sm:text-[20px] font-bold text-[#0A102A] leading-none mb-1">25,000+</div>
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Aspirants guided</div>
                </div>
              </div>
              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f2fc] text-[#4f3bc4]">
                  <Users className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[18px] sm:text-[20px] font-bold text-[#0A102A] leading-none mb-1">50+</div>
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Career experts</div>
                </div>
              </div>
              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f2fc] text-[#4f3bc4]">
                  <ShieldCheck className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[18px] sm:text-[20px] font-bold text-[#0A102A] leading-none mb-1">98%</div>
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Satisfaction rate</div>
                </div>
              </div>
              {/* Stat 4 */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f4f2fc] text-[#4f3bc4]">
                  <Globe className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div className="flex flex-col">
                  <div className="text-[18px] sm:text-[20px] font-bold text-[#0A102A] leading-none mb-1">150+</div>
                  <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Countries served</div>
                </div>
              </div>
            </div>

            {/* Testimonial Snippet */}
            <div className="lg:w-1/4 lg:border-l lg:border-gray-100 lg:pl-8 flex gap-3">
              <Quote className="h-6 w-6 shrink-0 text-[#b6a9ef]" />
              <div>
                <p className="text-[13px] font-medium leading-relaxed text-gray-600 mb-2">
                  "HireLeap helped me see what was possible — and gave me the confidence to go for it."
                </p>
                <div className="text-[11.5px] font-bold tracking-wider text-gray-800">
                  - Software Engineer, H-1B Professional
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
