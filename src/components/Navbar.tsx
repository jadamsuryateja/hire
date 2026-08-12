import { Link, NavLink } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

type NavItem = { to: string; label: string; hasCaret?: boolean };
const links: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/why-we-exist", label: "Why We Exist" },
  { to: "/career-journeys", label: "Career Journeys" },
  { to: "/the-hireleap-method", label: "The HireLeap Method™" },
  { to: "/career-intelligence", label: "Career Intelligence" },
  { to: "/career-hub", label: "Career Hub" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/career-investment", label: "Career Investment" },
  { to: "/about-us", label: "About Us" },
  { to: "/plan-your-next-leap", label: "Plan Your Next Leap" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex min-h-24 max-w-[1920px] items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-2.5 shrink-0" onClick={() => setOpen(false)}>
          <img
            src="/navlogo.png"
            alt="HireLeap icon"
            className="h-9 w-9 sm:h-10 sm:w-10 shrink-0 object-contain"
            loading="eager"
          />
          <img
            src="/navtitile.png"
            alt="HireLeap"
            className="h-7 w-auto sm:h-8 object-contain"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center justify-end gap-2 xl:flex xl:gap-3 whitespace-nowrap">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to as string}
              className={({ isActive }) =>
                `flex items-center gap-1 text-[12px] 2xl:text-[13px] font-medium transition-colors hover:text-primary ${
                  isActive ? "text-primary font-bold" : "text-foreground/85"
                }`
              }
            >
              {l.label}
              {l.hasCaret && <ChevronDown className="h-3.5 w-3.5" />}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-foreground xl:hidden shrink-0"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background xl:hidden">
          <div className="flex flex-col px-4 py-2 sm:px-6">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to as string}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-3 text-[15px] font-medium transition-colors hover:bg-secondary hover:text-primary ${
                    isActive ? "text-primary bg-secondary/50 font-bold" : "text-foreground/85"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
