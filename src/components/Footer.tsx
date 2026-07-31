import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#081224] text-white border-t border-white/10">
      <div className="mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 text-[11px] font-medium tracking-wide md:flex-row md:items-center lg:px-10">
        <div className="flex flex-col items-center gap-4 text-white/70 md:flex-row md:gap-6">
          <span>© 2025 HireLeap Global LLC</span>
          <span className="hidden text-white/20 md:inline-block">|</span>
          <span className="uppercase tracking-wider text-white/90">AI CAREER INTELLIGENCE PLATFORM</span>
          <span className="hidden text-white/20 md:inline-block">|</span>
          <span className="font-semibold text-[#3b82f6]">Better Decisions. Better Careers.</span>
        </div>
        <div className="text-white/70 transition-colors hover:text-white">
          <a href="https://www.hireleap.com" target="_blank" rel="noreferrer">www.hireleap.com</a>
        </div>
      </div>
    </footer>
  );
}
