import { Helmet } from "react-helmet-async";
import { PageShell } from "../components/PageShell";
import { Cpu, Users, Layers, Sprout, TrendingUp, Compass, Globe, Heart, Mountain, Star, ArrowRight } from "lucide-react";
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
        <h1 className="text-[40px] font-extrabold leading-[1.08] tracking-tight text-[#0A102A] sm:text-[48px] lg:text-[42px] xl:text-[52px]">
          Every career
          <br />
          journey begins with
          <br />
          a different{" "}
          <span className="font-serif italic text-primary font-medium tracking-normal">question.</span>
        </h1>
        
        <p className="mt-8 text-[16px] leading-relaxed text-gray-700 max-w-[480px]">
          No matter where you are today, HireLeap meets you there—and helps you move forward with clarity.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-[13px] font-semibold text-gray-600">
          <div className="flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            AI-Powered Guidance
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
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center mb-10">
        <div className="mb-4 text-[12px] font-bold uppercase tracking-widest text-[#4f3bc4]">
          WHERE ARE YOU TODAY?
        </div>
        <h2 className="text-[28px] sm:text-[36px] font-medium font-serif text-[#0A102A]">
          Choose the journey that matches where <span className="italic border-b-2 border-[#4f3bc4]/40 pb-1">you</span> are right now.
        </h2>
      </div>

      <div className="flex flex-col gap-6 lg:pl-12 relative">
        {/* Vertical Timeline Line */}
        <div className="hidden lg:block absolute left-4 top-10 bottom-10 w-px bg-gray-200"></div>

        {journeys.map((journey, idx) => (
          <div key={idx} className="relative flex items-center group cursor-pointer">
            {/* Number Indicator (Timeline) */}
            <div className="hidden lg:flex absolute -left-16 flex-row items-center gap-3">
              <span className="text-[20px] font-semibold text-[#5b45c2] font-serif">{journey.number}</span>
              <div className="w-2 h-2 rounded-full bg-[#5b45c2]"></div>
            </div>

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
                    Explore this journey <ArrowRight className="w-4 h-4" />
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
