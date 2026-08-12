import { Link, useLocation } from "react-router-dom";
import {
  ChevronRight,
  MapPin,
  Mail,
  Shield,
  Lock,
  Users,
  Sparkles,
  Youtube,
  Instagram,
  Linkedin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="w-full bg-[#050B14] text-white">
      {/* Top CTA Section */}
      {pathname === "/" && (
        <div className="relative overflow-hidden border-b border-white/10 px-6 py-10 sm:px-10">
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b19] to-[#0d1326] z-0" />

          {/* Left Wave Pattern */}
          <div className="absolute -left-20 top-0 bottom-0 w-[400px] opacity-20 pointer-events-none">
            <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="waveGradL" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#9333EA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 0 50 Q 150 150 400 100"
                fill="none"
                stroke="url(#waveGradL)"
                strokeWidth="2"
              />
              <path
                d="M 0 80 Q 200 180 400 60"
                fill="none"
                stroke="url(#waveGradL)"
                strokeWidth="1.5"
              />
              <path
                d="M 0 110 Q 180 30 400 140"
                fill="none"
                stroke="url(#waveGradL)"
                strokeWidth="1"
              />
              <path
                d="M 0 150 Q 100 0 400 80"
                fill="none"
                stroke="url(#waveGradL)"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          {/* Right Wave Pattern */}
          <div className="absolute -right-20 top-0 bottom-0 w-[400px] opacity-20 pointer-events-none">
            <svg viewBox="0 0 400 200" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="waveGradR" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#2563EB" stopOpacity="0" />
                  <stop offset="100%" stopColor="#9333EA" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path
                d="M 0 100 Q 250 150 400 50"
                fill="none"
                stroke="url(#waveGradR)"
                strokeWidth="2"
              />
              <path
                d="M 0 60 Q 200 180 400 80"
                fill="none"
                stroke="url(#waveGradR)"
                strokeWidth="1.5"
              />
              <path
                d="M 0 140 Q 220 30 400 110"
                fill="none"
                stroke="url(#waveGradR)"
                strokeWidth="1"
              />
              <path
                d="M 0 80 Q 300 0 400 150"
                fill="none"
                stroke="url(#waveGradR)"
                strokeWidth="0.5"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <h2 className="mb-3 text-[32px] sm:text-[40px] font-bold tracking-tight">
              Ready for your next{" "}
              <span className="bg-gradient-to-r from-[#6366F1] to-[#9333EA] bg-clip-text text-transparent">
                leap?
              </span>
            </h2>
            <p className="mb-8 text-[15px] sm:text-[16px] text-gray-300">
              One honest conversation today could change the direction of your career tomorrow.
            </p>
            <Link
              to="/plan-your-next-leap"
              className="mb-6 flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#2563EB] to-[#7C3AED] px-6 py-3 font-semibold text-white transition-transform hover:scale-105"
            >
              Plan Your Next Leap
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="flex items-center gap-2 text-[13px] text-gray-400">
              <CheckCircle2 className="h-4 w-4 text-gray-500" />
              <span>No pressure. No obligation. Just clarity.</span>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 lg:grid-cols-5 lg:gap-8 lg:divide-x lg:divide-white/10">
          {/* Brand Col */}
          <div className="flex flex-col gap-6 lg:pr-8">
            <div className="flex items-center gap-3">
              <img
                src="/footericon.png"
                alt="HireLeap icon"
                className="h-10 w-10 shrink-0 object-contain"
                loading="lazy"
              />
              <img
                src="/footertitle.png"
                alt="HireLeap"
                className="h-8 w-auto object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-[13px] leading-relaxed text-gray-400">
              Helping professionals make better career decisions through expert guidance,
              intelligent technology, and structured execution.
            </p>
            <div className="flex flex-col gap-3 text-[13px] text-gray-300 mt-2">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gray-500" />
                <span>Alpharetta, Georgia, USA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <a href="mailto:hello@hireleap.com" className="hover:text-white transition-colors">
                  hello@hireleap.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaWhatsapp className="h-4 w-4 text-gray-500" />
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +1 234 567 890
                </a>
              </div>
            </div>
          </div>

          {/* Explore Col */}
          <div className="flex flex-col gap-4 lg:px-8">
            <h3 className="text-[13px] font-bold tracking-wider text-[#3b82f6] uppercase">
              Explore
            </h3>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-300">
              {[
                { name: "Why We Exist", path: "/why-we-exist" },
                { name: "Career Journeys", path: "/career-journeys" },
                { name: "The HireLeap Method™", path: "/the-hireleap-method" },
                { name: "Career Intelligence", path: "/career-intelligence" },
                { name: "Career Hub", path: "/career-hub" },
                { name: "Success Stories", path: "/success-stories" },
                { name: "Pricing", path: "/career-investment" },
                { name: "About Us", path: "/about-us" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 text-[#3b82f6]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Col */}
          <div className="flex flex-col gap-4 lg:px-8">
            <h3 className="text-[13px] font-bold tracking-wider text-[#3b82f6] uppercase">
              Resources
            </h3>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-300">
              {[
                { name: "Career Hub", path: "/career-hub" },
                { name: "Webinars", path: "/career-hub" },
                { name: "FAQs", path: "/career-investment#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 text-[#3b82f6]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Col */}
          <div className="flex flex-col gap-4 lg:px-8">
            <h3 className="text-[13px] font-bold tracking-wider text-[#3b82f6] uppercase">Legal</h3>
            <ul className="flex flex-col gap-3 text-[14px] text-gray-300">
              {[
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Terms & Conditions", path: "/terms-and-conditions" },
                { name: "Cookie Policy", path: "/cookie-policy" },
                { name: "Disclaimer", path: "/disclaimer" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ChevronRight className="h-3 w-3 text-[#3b82f6]" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Col */}
          <div className="flex flex-col gap-4 lg:pl-8">
            <h3 className="text-[13px] font-bold tracking-wider text-[#3b82f6] uppercase">
              Follow HireLeap
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-[#3b82f6] hover:bg-white/5 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-[#25D366] hover:bg-white/5 transition-colors"
              >
                <FaWhatsapp className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-red-500 hover:bg-white/5 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-pink-500 hover:bg-white/5 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Value Props Row */}
        <div className="mt-12 rounded-xl border border-white/10 bg-[#0A102A] px-6 py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/10">
            <div className="flex items-center gap-4 lg:pr-6">
              <Shield className="h-8 w-8 text-[#9333EA] shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-[15px] font-serif font-medium text-white">Secure Payments</h4>
                <p className="mt-1 text-[13px] text-gray-400 leading-tight">
                  Your transactions are safe and encrypted.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:px-6">
              <Lock className="h-8 w-8 text-[#9333EA] shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-[15px] font-serif font-medium text-white">
                  Private & Confidential
                </h4>
                <p className="mt-1 text-[13px] text-gray-400 leading-tight">
                  Your information is always protected with care.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:px-6">
              <Users className="h-8 w-8 text-[#9333EA] shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-[15px] font-serif font-medium text-white">
                  Expert Career Advisors
                </h4>
                <p className="mt-1 text-[13px] text-gray-400 leading-tight">
                  Experienced professionals guiding your journey.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 lg:pl-6">
              <Sparkles className="h-8 w-8 text-[#9333EA] shrink-0" strokeWidth={1.5} />
              <div>
                <h4 className="text-[15px] font-serif font-medium text-white">
                  Human Expertise +<br />
                  Intelligent Technology
                </h4>
                <p className="mt-1 text-[13px] text-gray-400 leading-tight">
                  Better decisions through the perfect balance of human insight and intelligent
                  tools.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-center text-center">
          <Sparkles className="h-6 w-6 text-[#9333EA] mb-2" />
          <h3 className="mb-1 text-[20px] sm:text-[24px] font-serif font-bold text-white tracking-wide">
            Every remarkable career begins <br className="hidden sm:block" />
            with one{" "}
            <span className="bg-gradient-to-r from-[#6366F1] to-[#9333EA] bg-clip-text text-transparent">
              better decision.
            </span>
          </h3>
          <div className="mb-4 text-[15px] font-medium text-gray-300">
            Better <span className="text-[#3b82f6]">Decisions</span>. Better{" "}
            <span className="text-[#9333EA]">Careers</span>.
          </div>
          <div className="text-[12px] text-gray-500">
            © 2026 HireLeap Global LLC. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
