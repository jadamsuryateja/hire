import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { PageShell } from "../components/PageShell";
import { ArrowRight, BookOpen, Users, Sparkles, Heart, Calendar, Clock, Wifi, Share2, Briefcase, Trophy, TrendingUp, HeartHandshake, Lightbulb, ChevronRight, User, GraduationCap, Search, X, Filter, Lock } from "lucide-react";
import { mockResources } from "../data/mockResources";
import careerHubImg from "../assets/careerhub.webp";
import careerHubMobileImg from "../assets/careerhub-mobile.webp";
import liveWebinarCallImg from "../assets/live_webinar_call.webp";
import alumniMentorsImg from "../assets/alumni_mentors.webp";
import theHireLeapCircleImg from "../assets/The HireLeap Circle.webp";

export default function CareerHub() {
  return (
    <PageShell>
      <Helmet>
        <title>Career Hub / Resources — HireLeap</title>
        <meta name="description" content="Insights to learn from. Webinars to grow with. A community that lifts you up." />
      </Helmet>
      <Hero />
      <ResourceCenter />
      <LearnAndGrow />
      <TomorrowLeaders />
      <NewsletterCTA />
    </PageShell>
  );
}function Hero() {
  return (
    <section className="w-full bg-white relative pt-0 pb-6 lg:pb-12 flex flex-col">
      <div className="w-full">
        <div className="grid w-full items-start lg:grid-cols-[45fr_55fr] relative lg:min-h-[500px]">
          
          {/* Left Text */}
          <div className="px-5 sm:px-6 lg:pl-10 xl:pl-16 2xl:pl-20 z-10 pt-8 lg:pt-12 pb-10 lg:pb-12">
            <div className="mb-4 text-[10.5px] font-bold uppercase tracking-[0.15em] text-[#3b2dd0]">
              CAREER HUB
            </div>
            <h1 className="text-[40px] font-normal leading-[1.08] tracking-tight text-[#0A102A] sm:text-[48px] lg:text-[42px] xl:text-[52px] mb-6">
              Career never stops.<br />
              <span className="text-primary">Neither does HireLeap.</span>
            </h1>
            
            <div className="text-[14px] sm:text-[15px] leading-relaxed text-[#4b5563] max-w-[420px] font-medium space-y-1 mb-8">
              <p>Insights to learn from. Webinars to grow with.</p>
              <p>A community that lifts you up.</p>
              <p>Today's guidance. Tomorrow's opportunities.</p>
              <p className="font-bold text-[#0A102A] pt-1.5">All in one place.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/insights"
                className="group inline-flex h-[46px] items-center justify-center gap-2 rounded-[6px] bg-[#3b2dd0] px-7 text-[14px] font-semibold text-white transition-all hover:bg-[#3b2dd0]/90 whitespace-nowrap"
              >
                Explore Insights <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
              </Link>
              <Link
                to="/community"
                className="inline-flex h-[46px] items-center justify-center gap-2 rounded-[6px] border border-[#d6d6ec] bg-transparent px-7 text-[14px] font-semibold text-[#3b2dd0] transition-all hover:border-[#3b2dd0] hover:bg-[#3b2dd0]/5 whitespace-nowrap"
              >
                <Calendar className="h-[18px] w-[18px]" strokeWidth={1.5} /> Join the Conversation
              </Link>
            </div>

            {/* Features Row - Restored right below buttons but full width */}
            <div className="mt-12 lg:mt-16 relative z-30">
              <div className="flex flex-wrap lg:flex-nowrap items-center justify-start gap-8 lg:gap-12 xl:gap-16 text-[12.5px] font-medium text-[#0A102A] leading-[1.4] lg:w-[950px] max-w-[90vw] lg:max-w-none">
                <div className="flex items-center gap-3 shrink-0">
                  <BookOpen className="h-[20px] w-[20px] text-[#3b2dd0] shrink-0" strokeWidth={1.5} />
                  <span>Practical insights<br/>you can apply</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Users className="h-[20px] w-[20px] text-[#3b2dd0] shrink-0" strokeWidth={1.5} />
                  <span>Live learning &<br/>expert guidance</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Sparkles className="h-[20px] w-[20px] text-[#3b2dd0] shrink-0" strokeWidth={1.5} />
                  <span>Tools & resources<br/>added regularly</span>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Heart className="h-[20px] w-[20px] text-[#3b2dd0] shrink-0" strokeWidth={1.5} />
                  <span>A community that<br/>grows together</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative w-full h-auto min-h-0 lg:h-full lg:absolute lg:top-0 lg:right-0 lg:w-[60%]">
            <div className="relative w-full h-auto overflow-hidden lg:absolute lg:inset-0 lg:h-full lg:w-full lg:overflow-visible">
              <picture className="block w-full h-auto lg:absolute lg:inset-0 lg:h-full lg:w-full">
                <source media="(max-width: 768px)" srcSet={careerHubMobileImg} />
                <img loading="lazy"
                  src={careerHubImg}
                  alt="Professionals collaborating at a table"
                  className="w-full h-auto block lg:h-full lg:w-full lg:object-cover lg:object-center lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_30%,rgba(0,0,0,1)_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_30%,rgba(0,0,0,1)_100%)]"
                />
              </picture>
              <div className="absolute inset-x-0 bottom-0 h-24 lg:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            </div>
            


          </div>
        </div>

      </div>
    </section>
  );
}

function ResourceCenter() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = useMemo(() => {
    const cats = new Set(mockResources.map(r => r.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredResources = useMemo(() => {
    if (selectedCategory === "All") return mockResources;
    return mockResources.filter(r => r.category === selectedCategory);
  }, [selectedCategory]);

  const featuredResource = selectedCategory === "All" ? filteredResources[0] : null;
  const gridResources = featuredResource ? filteredResources.slice(1, visibleCount + 1) : filteredResources.slice(0, visibleCount);
  const totalCount = featuredResource ? filteredResources.length - 1 : filteredResources.length;

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-24 pb-16 pt-0">
      <div className="w-full max-w-[1250px] mx-auto">
        
        {/* Header & Filters */}
        <div className="flex flex-col mb-12">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[#3b2dd0] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-3">Learn something that moves you forward</p>
              <h2 className="text-[#0A102A] text-3xl md:text-[38px] font-serif leading-tight">Curated insights. Real impact.</h2>
            </div>
          </div>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => { setSelectedCategory(cat); setVisibleCount(3); }}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-[13px] font-semibold transition-colors ${
                  selectedCategory === cat 
                    ? "bg-[#0A102A] text-white" 
                    : "bg-gray-100 text-[#4b5563] hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Search className="w-6 h-6 text-gray-400" />
            </div>
            <h3 className="text-[#0A102A] text-2xl font-serif mb-3">No resources found</h3>
            <p className="text-[#4b5563] mb-6 max-w-md">We couldn't find any resources in this category. Try adjusting your filters or booking a consultation.</p>
            <div className="flex items-center gap-4">
              <button onClick={() => setSelectedCategory("All")} className="text-[#3b2dd0] font-semibold text-[14px] hover:opacity-80">
                Reset Filters
              </button>
              <Link to="/plan-your-next-leap" className="bg-[#3b2dd0] text-white px-5 py-2.5 rounded-[6px] font-semibold text-[13px] hover:bg-[#3b2dd0]/90">
                Book Consultation
              </Link>
            </div>
          </div>
        )}

        {/* Featured Resource (Only on 'All') */}
        {featuredResource && (
          <Link to={`/insights/${featuredResource.slug}`} className="mb-12 border border-[#e5e7eb] rounded-[16px] overflow-hidden flex flex-col lg:flex-row group hover:shadow-lg transition-shadow bg-white cursor-pointer w-full">
            <div className="lg:w-3/5 h-[300px] lg:h-[400px] overflow-hidden">
              <img loading="lazy" src={featuredResource.image} alt={featuredResource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-[#3b2dd0] text-[11px] font-bold tracking-wider uppercase mb-4">{featuredResource.category}</span>
              <h3 className="text-[#0A102A] text-2xl lg:text-[28px] font-serif leading-tight mb-4 group-hover:text-[#3b2dd0] transition-colors">{featuredResource.title}</h3>
              <p className="text-[#4b5563] text-[15px] leading-relaxed mb-8">{featuredResource.summary}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-4 text-gray-500 text-[13px] font-medium">
                  <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {featuredResource.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredResource.readTime}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#f3efff] flex items-center justify-center group-hover:bg-[#3b2dd0] transition-colors">
                  <ArrowRight className="w-5 h-5 text-[#3b2dd0] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridResources.map(resource => (
            <Link to={`/insights/${resource.slug}`} key={resource.id} className="border border-[#e5e7eb] rounded-[12px] overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-white group">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img loading="lazy" src={resource.image} alt={resource.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[#3b2dd0] text-[10px] font-bold tracking-wider uppercase mb-3">{resource.category}</span>
                <h3 className="text-[#0A102A] text-[18px] font-serif leading-snug mb-3 group-hover:text-[#3b2dd0] transition-colors">{resource.title}</h3>
                <p className="text-[#4b5563] text-[13.5px] leading-relaxed mb-6 flex-1">{resource.summary}</p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-gray-500 text-[12px] font-medium">
                    <Clock className="w-3.5 h-3.5" /> {resource.readTime}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#3b2dd0] transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination / Load More */}
        {visibleCount < totalCount && (
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="bg-white border border-[#e5e7eb] text-[#0A102A] px-8 py-3 rounded-[6px] font-semibold text-[13px] hover:bg-gray-50 transition-colors shadow-sm"
            >
              Load More Resources
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

function LearnAndGrow() {
  return (
    <section className="w-full bg-white px-5 sm:px-6 lg:px-12 pt-4 lg:pt-8 pb-8 lg:pb-12 border-t border-gray-50">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-8">
          
          {/* Left Block: Live learning */}
          <div className="flex flex-col lg:flex-row gap-6 xl:gap-8 items-center">
            <div className="flex-1 order-2 lg:order-1 min-w-0">
              <p className="text-[#3b2dd0] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-3">Learn Together</p>
              <h2 className="text-[#0A102A] text-[28px] xl:text-[30px] font-serif leading-tight mb-4">Live learning.<br/>Real conversations.</h2>
              <p className="text-[#4b5563] text-[13.5px] leading-relaxed mb-8">Join webinars with experts and professionals who've been there, done that—and are here to share what works.</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-2.5">
                  <Calendar className="w-5 h-5 text-[#3b2dd0]" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Next Webinar</div>
                    <div className="text-[12px] font-medium text-[#0A102A]">May 24, 2025</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-[#3b2dd0]" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Time</div>
                    <div className="text-[12px] font-medium text-[#0A102A]">60 min</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <Wifi className="w-5 h-5 text-[#3b2dd0]" strokeWidth={1.5} />
                  <div>
                    <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Format</div>
                    <div className="text-[12px] font-medium text-[#0A102A]">Live Online</div>
                  </div>
                </div>
              </div>
              
              <Link to="/webinars" className="inline-flex w-max items-center justify-center gap-2 rounded-[6px] bg-[#3b2dd0] px-5 py-2.5 text-[13px] font-semibold text-white hover:bg-[#3b2dd0]/90 transition-colors whitespace-nowrap">
                Reserve My Spot <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            
            <div className="w-full lg:w-[320px] h-[320px] lg:h-[400px] relative rounded-[16px] overflow-hidden order-1 lg:order-2 shrink-0">
              <div className="absolute top-4 left-4 bg-[#3b2dd0] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-[4px] z-10 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span> Live
              </div>
              <img loading="lazy" src={liveWebinarCallImg} alt="Live Webinar video call with professionals" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right Block: The HireLeap Circle */}
          <div className="flex flex-col xl:flex-row gap-6 w-full items-center xl:items-stretch">
            {/* Text & Diagram */}
            <div className="flex-1 flex flex-col w-full pt-4 min-w-0">
              <div className="z-20 text-center xl:text-left mb-2 xl:mb-4 xl:-ml-4">
                <p className="text-[#3b2dd0] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-3">The HireLeap Circle</p>
                <h2 className="text-[#0A102A] text-[24px] xl:text-[28px] font-serif leading-tight">A journey of growth.<br/>A cycle of impact.</h2>
              </div>
              
              <div className="flex-1 w-full flex items-center justify-center xl:justify-center my-2 md:my-0">
                <img
                  loading="lazy"
                  src={theHireLeapCircleImg}
                  alt="The HireLeap Circle diagram mapping out Learn, Apply, Succeed, Grow, Give Back, and Inspire"
                  className="w-full max-w-[620px] h-auto object-contain"
                />
              </div>
            </div>

            {/* Callout Card */}
            <div className="bg-[#f3efff] rounded-[16px] p-6 lg:p-8 flex flex-col w-full xl:w-[250px] shrink-0 border border-transparent shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#3b2dd0] flex items-center justify-center mb-6 shadow-md">
                <Heart className="w-[18px] h-[18px] text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-[#0A102A] text-[18px] font-serif leading-tight mb-4">Every step creates opportunities—for you and for others.</h3>
              <p className="text-[#4b5563] text-[12.5px] leading-relaxed mb-8 flex-1">Today you learn. Tomorrow you guide. Together, we build better careers.</p>
              <Link to="/register" className="text-[#3b2dd0] font-semibold text-[13px] flex items-center gap-1.5 hover:opacity-80 transition-opacity mt-auto">
                Join the movement <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



function TomorrowLeaders() {
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-24 pb-12 lg:pb-24 pt-0 lg:pt-0">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-6 items-stretch">
          
          {/* Left Block */}
          <div className="relative flex-1 flex flex-col bg-white rounded-[16px] overflow-hidden min-h-[300px] border border-gray-200 shadow-sm">
            
            {/* Desktop Image Content (Absolute) */}
            <div className="absolute inset-y-0 right-0 w-[45%] hidden xl:block z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-32 left-0 top-0"></div>
              <img loading="lazy" src={alumniMentorsImg} alt="Mentors and mentees high-fiving" className="w-full h-full object-cover rounded-r-[16px]" />
            </div>

            {/* Mobile Image Content (Static) */}
            <div className="w-full h-[240px] relative shrink-0 xl:hidden order-last">
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-transparent z-10 h-24 left-0 top-0"></div>
              <img loading="lazy" src={alumniMentorsImg} alt="Mentors and mentees high-fiving" className="w-full h-full object-cover rounded-b-[16px]" />
            </div>

            {/* Text Content */}
            <div className="flex-1 z-20 py-8 xl:py-10 px-6 md:px-8 xl:pl-10 xl:pr-0 xl:w-[60%] relative bg-white xl:bg-transparent">
              <p className="text-[#3b2dd0] font-bold text-[10px] md:text-[11px] tracking-widest uppercase mb-3">Building tomorrow's leaders</p>
              <h2 className="text-[#0A102A] text-[26px] md:text-[32px] font-serif leading-tight mb-4 pr-4">
                From learners to leaders.<br/>From professionals to mentors.
              </h2>
              <p className="text-[#4b5563] text-[13.5px] leading-relaxed mb-10 max-w-[90%]">
                One day, the guidance you receive today could be the turning point for someone else tomorrow.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 pr-4">
                <div>
                  <User className="w-[22px] h-[22px] text-[#3b2dd0] mb-3" strokeWidth={1.5} />
                  <h4 className="text-[#3b2dd0] font-bold text-[12px] mb-2">Share your experience</h4>
                  <p className="text-[#4b5563] text-[11px] leading-relaxed pr-2">Help others with advice that made a difference.</p>
                </div>
                <div>
                  <Users className="w-[22px] h-[22px] text-[#3b2dd0] mb-3" strokeWidth={1.5} />
                  <h4 className="text-[#3b2dd0] font-bold text-[12px] mb-2">Mentor & volunteer</h4>
                  <p className="text-[#4b5563] text-[11px] leading-relaxed pr-2">Guide aspirants, review resumes, or conduct mocks.</p>
                </div>
                <div>
                  <Sparkles className="w-[22px] h-[22px] text-[#3b2dd0] mb-3" strokeWidth={1.5} />
                  <h4 className="text-[#3b2dd0] font-bold text-[12px] mb-2">Be part of the legacy</h4>
                  <p className="text-[#4b5563] text-[11px] leading-relaxed pr-2">Build your profile as a HireLeap Alumni and leader.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block (Callout Card) */}
          <div className="bg-[#f3efff] rounded-[16px] p-6 lg:p-8 flex flex-col w-full shrink-0 shadow-sm border border-[#eaddff] xl:w-[300px]">
            <div className="w-10 h-10 rounded-full bg-[#3b2dd0] flex items-center justify-center mb-6 shadow-md shrink-0">
              <GraduationCap className="w-[20px] h-[20px] text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-[#0A102A] text-[18px] md:text-[20px] font-serif leading-tight mb-4">
              The HireLeap Alumni Community is coming soon.
            </h3>
            <p className="text-[#4b5563] text-[12.5px] md:text-[13px] leading-relaxed mb-8 flex-1">
              A space where professionals who have grown with HireLeap can give back, lead, and shape the future of careers together.
            </p>
            <Link to="/alumni" className="text-[#3b2dd0] font-semibold text-[13px] flex items-center gap-1.5 hover:opacity-80 transition-opacity mt-auto">
              Learn more about our vision <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

function NewsletterCTA() {
  return (
    <section className="w-full bg-[#0A102A] px-6 md:px-12 lg:px-24 py-16 lg:py-24 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#3b2dd0]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#eaddff]/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="w-full max-w-[1200px] mx-auto relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-8">
        
        {/* Left Side */}
        <div className="max-w-[600px]">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7161fa]">
            STAY CONNECTED
          </div>
          <h2 className="text-white text-[28px] md:text-[32px] lg:text-[36px] font-serif leading-[1.15] mb-4">
            New insights. Upcoming events.<br className="hidden md:block" />
            Opportunities that matter.
          </h2>
          <p className="text-gray-300 text-[14.5px] leading-relaxed">
            Stay updated with the latest articles, webinars,<br className="hidden md:block" />
            and tools to keep your career moving forward.
          </p>
        </div>
        
        {/* Right Side */}
        <div className="w-full max-w-[460px] shrink-0">
          <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-1 bg-white/5 border border-white/10 border-r-0 rounded-l-[6px] px-5 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:border-[#3b2dd0] focus:ring-1 focus:ring-[#3b2dd0] focus:bg-white/10 transition-all text-[14.5px]"
              required
            />
            <button 
              type="submit" 
              className="bg-[#3b2dd0] hover:bg-[#2f22a8] text-white px-8 py-4 rounded-r-[6px] font-semibold text-[14.5px] transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <div className="flex items-center gap-2 mt-4 text-[#a3a3a3] text-[12.5px]">
            <Lock className="w-3.5 h-3.5 shrink-0" />
            <span>No spam. Unsubscribe anytime.</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}
