import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  ArrowRight,
  ShieldCheck,
  Sprout,
  Compass,
  Sparkles,
  Globe,
  RefreshCw,
  HelpCircle,
  Ear,
  LineChart,
  Target,
  UserCheck,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  Calendar,
  Lock,
} from "lucide-react";
import { PageShell } from "../components/PageShell";
import planYourNextLeapImg from "../assets/Plan Your Next Leap.webp";
import planYourNextLeapMobileImg from "../assets/Plan Your Next Leap-mobile.webp";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(5, "Phone number is required"),
  location: z.string().min(2, "Location is required"),
  careerStage: z.string().min(1, "Please select a career stage"),
  timeToConnect: z.string().min(1, "Please select a time to connect"),
  goals: z.string().min(10, "Please share a few more details"),
  agree: z.boolean().refine((val) => val === true, "You must agree to be contacted"),
});

export default function PlanYourNextLeap() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      careerStage: "",
      timeToConnect: "",
      goals: "",
      agree: false,
    },
  });

  const scrollToForm = () => {
    const input = document.getElementById("fullNameInput");
    if (input) {
      const y = input.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
      setTimeout(() => input.focus(), 600);
    }
  };

  const handleCardClick = (stageValue?: string) => {
    if (stageValue) {
      form.setValue("careerStage", stageValue, { shouldValidate: true });
    }
    scrollToForm();
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Lead Saved:", values);
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Plan Your Next Leap — HireLeap</title>
        <meta
          name="description"
          content="Plan your next career leap with clarity and confidence."
        />
      </Helmet>

      <PageShell>
        {/* Hero Section */}
        <section className="grid w-full items-center gap-8 lg:grid-cols-[3.5fr_6.5fr] lg:gap-10 bg-[#f8f8fa]">
          <div className="px-5 py-8 sm:px-6 sm:py-10 lg:py-14 lg:pl-10">
            <div className="mb-5 text-[11px] sm:text-[12px] uppercase tracking-widest text-[#4922ca] font-bold">
              PLAN YOUR NEXT LEAP
            </div>
            <h1 className="text-[36px] font-normal leading-[1.08] tracking-tight text-[#0a1b3f] sm:text-[48px] lg:text-[24px] xl:text-[30px] 2xl:text-[40px] min-[1920px]:text-[52px] mb-8">
              Every great career
              <br />
              begins with{" "}
              <span className="text-[#4922ca] italic">
                one
                <br />
                conversation.
              </span>
            </h1>

            <div className="space-y-5 text-foreground/85 text-[14px] leading-relaxed max-w-[480px]">
              <p className="leading-[1.5]">
                You've explored your journey.
                <br />
                You've seen our philosophy.
                <br />
                You've understood how we work.
              </p>
              <p className="leading-[1.5]">
                Now let's talk about your career.
                <br />
                Not where you've been. But where you'd like to go next.
              </p>
            </div>

            {/* CTA row */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={scrollToForm}
                  className="inline-flex justify-center whitespace-nowrap bg-[#4922ca] hover:bg-[#3b1ba8] text-white px-7 py-3 rounded-[6px] transition-colors items-center gap-2 text-[15px]"
                >
                  Let's Begin
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="https://wa.me/1234567890?text=Hi%20HireLeap!%20I'd%20like%20to%20have%20a%20conversation%20about%20my%20career."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center whitespace-nowrap bg-[#25D366] hover:bg-[#20b858] text-white px-7 py-3 rounded-[6px] transition-colors items-center gap-2 text-[15px]"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  Let's Talk
                </a>
              </div>

              <div className="flex items-center gap-3 mt-2 sm:mt-0">
                <ShieldCheck className="w-6 h-6 text-[#4922ca] stroke-[1.5]" />
                <p className="text-[11px] sm:text-[12px] leading-[1.4] text-foreground/80 whitespace-nowrap">
                  No pressure. No obligation.
                  <br />
                  Just a conversation.
                </p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative w-full overflow-hidden h-auto min-h-0 md:min-h-[420px] md:self-stretch">
            <picture className="block w-full h-auto md:absolute md:inset-0 md:h-full md:w-full">
              <source media="(max-width: 768px)" srcSet={planYourNextLeapMobileImg} />
              <img loading="lazy"
                src={planYourNextLeapImg}
                alt="Plan Your Next Leap"
                className="w-full h-auto block md:h-full md:w-full md:object-cover md:object-[75%_center] lg:[mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%)] lg:[-webkit-mask-image:linear-gradient(to_right,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_20%)]"
              />
            </picture>
          </div>
        </section>

        {/* What Brings You Here Section */}
        <section className="w-full bg-[#f8f8fa] pt-8 pb-16 lg:pt-10 lg:pb-20 px-5 sm:px-6 lg:px-10">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6 max-w-7xl mx-auto">
            <div>
              <h2 className="text-[32px] sm:text-[40px] text-[#0a1b3f] font-serif leading-tight">
                What brings you to HireLeap today?
              </h2>
              <div className="w-10 h-[2px] bg-[#4922ca] mt-4" />
            </div>
            <div className="lg:max-w-md text-foreground/80 text-[14px] leading-relaxed font-medium">
              Choose what best describes you. We'll tailor the conversation around your unique goals
              and aspirations.
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto">
            {[
              {
                icon: <Sprout className="w-5 h-5 text-[#4922ca]" />,
                title: "I'm starting my career.",
                image:
                  "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=400&auto=format&fit=crop",
                stageValue: "entry",
              },
              {
                icon: <Compass className="w-5 h-5 text-[#4922ca]" />,
                title: "I'm looking for my next opportunity.",
                image:
                  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop",
                stageValue: "mid",
              },
              {
                icon: <Sparkles className="w-5 h-5 text-[#4922ca]" />,
                title: "I want to change my career path.",
                image:
                  "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=400&auto=format&fit=crop",
                stageValue: "transition",
              },
              {
                icon: <Globe className="w-5 h-5 text-[#4922ca]" />,
                title: "I want international opportunities.",
                image:
                  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=400&auto=format&fit=crop",
                stageValue: "mid",
              },
              {
                icon: <RefreshCw className="w-5 h-5 text-[#4922ca]" />,
                title: "I'm returning after a career break.",
                image:
                  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=400&auto=format&fit=crop",
                stageValue: "break",
              },
              {
                icon: <HelpCircle className="w-5 h-5 text-[#4922ca]" />,
                title: "I'm still exploring. Not sure where to begin.",
                image:
                  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=400&auto=format&fit=crop",
                stageValue: "transition",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(card.stageValue)}
                className="group relative flex flex-col h-[320px] bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 cursor-pointer"
              >
                {/* Background image area */}
                <div className="absolute inset-x-0 bottom-0 top-1/3">
                  <img loading="lazy"
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
                {/* Gradient to fade from white text area into image */}
                <div className="absolute inset-0 bg-gradient-to-b from-white from-40% via-white/80 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="relative flex flex-col h-full p-6 z-10">
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary mb-5 bg-white shadow-sm">
                    {card.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-[#0a1b3f] leading-[1.3] pr-2">
                    {card.title}
                  </h3>

                  <div className="mt-auto self-end opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-[#4922ca] flex items-center justify-center text-white shadow-md">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works & Form Section */}
        <section className="w-full bg-white py-10 lg:py-16 px-5 sm:px-6 lg:px-10 border-t border-gray-100">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Left: How our conversation works */}
            <div>
              <h2 className="text-[32px] sm:text-[40px] text-[#0a1b3f] font-serif leading-tight mb-12">
                Here's how our conversation works.
              </h2>

              {/* Timeline Steps */}
              <div className="relative grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 justify-between mb-12 gap-x-2 gap-y-8 lg:gap-4">
                {/* Connecting Line (desktop only) */}
                <div className="hidden xl:block absolute top-10 left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#4922ca]/30" />

                {[
                  {
                    icon: <Ear className="w-5 h-5 sm:w-6 h-6" />,
                    title: "We Listen",
                    desc: "We start by truly understanding you. No advice yet—just careful listening.",
                  },
                  {
                    icon: <LineChart className="w-5 h-5 sm:w-6 h-6" />,
                    title: "We Evaluate",
                    desc: "We evaluate your goals, experience, strengths, interests, and constraints.",
                  },
                  {
                    icon: <Target className="w-5 h-5 sm:w-6 h-6" />,
                    title: "We Recommend",
                    desc: "We recommend the right HireLeap Journey for you—what's right, not what's popular.",
                  },
                  {
                    icon: <UserCheck className="w-5 h-5 sm:w-6 h-6" />,
                    title: "We Partner",
                    desc: "If we're a good fit, we begin together—with clarity, not confusion.",
                  },
                ].map((step, idx) => (
                  <div
                    key={idx}
                    className="relative z-10 flex flex-col items-center text-center max-w-full mx-auto px-1"
                  >
                    <div className="w-16 h-16 sm:w-20 h-20 rounded-full bg-[#4922ca] flex items-center justify-center text-white shadow-lg mb-3">
                      {step.icon}
                    </div>
                    <h3 className="text-[#0a1b3f] font-bold text-[14px] sm:text-[15px] mb-1 sm:mb-2">{step.title}</h3>
                    <p className="text-foreground/70 text-[11px] sm:text-[12px] leading-relaxed px-1 sm:px-0">{step.desc}</p>
                  </div>
                ))}
              </div>

              {/* Info Box */}
              <div className="bg-[#f8f8fa] rounded-2xl p-6 sm:p-8 flex items-start gap-4">
                <Sparkles className="w-8 h-8 text-[#4922ca] shrink-0 mt-1" />
                <p className="text-[#0a1b3f] text-[16px] leading-relaxed">
                  Our goal is simple: help you make{" "}
                  <span className="font-bold text-[#4922ca]">better career decisions</span> that
                  lead to a future you'll be proud of.
                </p>
              </div>
            </div>

            {/* Right: Let's have a conversation Form */}
            <div className="bg-white rounded-[24px] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-6 sm:p-10">
              <h2 className="text-[32px] text-[#0a1b3f] font-serif leading-tight mb-2">
                Let's have a conversation.
              </h2>
              <p className="text-foreground/70 text-[14px] mb-8">
                Share a few details so we can connect with you personally.
              </p>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#0a1b3f] mb-3">
                    Thank you for reaching out!
                  </h3>
                  <p className="text-foreground/70 mb-8 max-w-sm">
                    We've saved your details and will be in touch shortly. If you'd like, you can go
                    ahead and schedule our conversation now.
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex bg-[#4922ca] hover:bg-[#3b1ba8] text-white px-7 py-3 rounded-[6px] transition-colors items-center gap-2 text-[15px]"
                  >
                    <Calendar className="w-4 h-4" />
                    Schedule via Calendly
                  </a>
                </div>
              ) : (
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          {...form.register("fullName")}
                          id="fullNameInput"
                          type="text"
                          placeholder="Full Name"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 focus:border-[#4922ca] focus:ring-1 focus:ring-[#4922ca] outline-none text-[14px] transition-all bg-transparent"
                        />
                      </div>
                      {form.formState.errors.fullName && (
                        <p className="text-red-500 text-[11px] mt-1 ml-1">
                          {form.formState.errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          {...form.register("email")}
                          type="email"
                          placeholder="Email Address"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 focus:border-[#4922ca] focus:ring-1 focus:ring-[#4922ca] outline-none text-[14px] transition-all bg-transparent"
                        />
                      </div>
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-[11px] mt-1 ml-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          {...form.register("phone")}
                          type="tel"
                          placeholder="Phone Number"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 focus:border-[#4922ca] focus:ring-1 focus:ring-[#4922ca] outline-none text-[14px] transition-all bg-transparent"
                        />
                      </div>
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-[11px] mt-1 ml-1">
                          {form.formState.errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          {...form.register("location")}
                          type="text"
                          placeholder="Current Location"
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 focus:border-[#4922ca] focus:ring-1 focus:ring-[#4922ca] outline-none text-[14px] transition-all bg-transparent"
                        />
                      </div>
                      {form.formState.errors.location && (
                        <p className="text-red-500 text-[11px] mt-1 ml-1">
                          {form.formState.errors.location.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="relative">
                        <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select
                          {...form.register("careerStage")}
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 focus:border-[#4922ca] focus:ring-1 focus:ring-[#4922ca] outline-none text-[14px] text-gray-600 transition-all appearance-none bg-transparent"
                        >
                          <option value="">Current Career Stage</option>
                          <option value="entry">Entry Level</option>
                          <option value="mid">Mid Level</option>
                          <option value="senior">Senior Level</option>
                          <option value="executive">Executive</option>
                          <option value="transition">Career Transition</option>
                          <option value="break">Returning from Break</option>
                        </select>
                      </div>
                      {form.formState.errors.careerStage && (
                        <p className="text-red-500 text-[11px] mt-1 ml-1">
                          {form.formState.errors.careerStage.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <select
                          {...form.register("timeToConnect")}
                          className="w-full h-12 pl-11 pr-4 rounded-xl border border-gray-200 focus:border-[#4922ca] focus:ring-1 focus:ring-[#4922ca] outline-none text-[14px] text-gray-600 transition-all appearance-none bg-transparent"
                        >
                          <option value="">Best Time to Connect</option>
                          <option value="morning">Morning (9AM - 12PM)</option>
                          <option value="afternoon">Afternoon (12PM - 5PM)</option>
                          <option value="evening">Evening (5PM - 8PM)</option>
                        </select>
                      </div>
                      {form.formState.errors.timeToConnect && (
                        <p className="text-red-500 text-[11px] mt-1 ml-1">
                          {form.formState.errors.timeToConnect.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <textarea
                      {...form.register("goals")}
                      placeholder="Tell us about your goals, challenges, or what you hope to achieve.&#10;Your journey, in your own words..."
                      className="w-full h-32 p-4 rounded-xl border border-gray-200 focus:border-[#4922ca] focus:ring-1 focus:ring-[#4922ca] outline-none text-[14px] transition-all resize-none bg-transparent"
                    />
                    {form.formState.errors.goals && (
                      <p className="text-red-500 text-[11px] mt-1 ml-1">
                        {form.formState.errors.goals.message}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start gap-3 py-2">
                    <input
                      {...form.register("agree")}
                      type="checkbox"
                      id="agree"
                      className="mt-1 w-4 h-4 rounded border-gray-300 text-[#4922ca] focus:ring-[#4922ca]"
                    />
                    <label
                      htmlFor="agree"
                      className="text-[12px] text-foreground/80 leading-relaxed cursor-pointer select-none"
                    >
                      I agree to be contacted by HireLeap for this conversation.
                    </label>
                  </div>
                  {form.formState.errors.agree && (
                    <p className="text-red-500 text-[11px] mt-0 ml-1">
                      {form.formState.errors.agree.message}
                    </p>
                  )}

                  <button
                    type="submit"
                    className="w-full h-12 bg-[#4922ca] hover:bg-[#3b1ba8] text-white rounded-xl flex items-center justify-center gap-2 font-medium transition-colors"
                  >
                    Submit
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex justify-center items-center gap-2 mt-4 text-[12px] text-foreground/60">
                    <Lock className="w-3 h-3 text-[#4922ca]/70" />
                    Your information is safe and never shared.
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </PageShell>
    </>
  );
}
