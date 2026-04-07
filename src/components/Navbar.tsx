import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import svbbLogo from "@/assets/svbb-logo.png";

const navLinks = [
  { label: "Home", href: "home" },
  { label: "Packages", href: "packages" },
  { label: "MRA Grant", href: "mra-grant" },
  { label: "Why Vietnam", href: "vietnam-market" },
  { label: "Partners", href: "partners" },
  { label: "Trips & Events", href: "trips" },
  { label: "Team", href: "team" },
  { label: "Contact", href: "contact" },
];

const serviceLinks = [
  { label: "Setup Company in Vietnam", to: "/services/setup-company-in-vietnam" },
  { label: "Overseas Market Promotion", to: "/services/overseas-market-promotion" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getNavHref = (section: string) => {
    return isHome ? `#${section}` : `/#${section}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={svbbLogo} alt="SVBB Logo" className="h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {/* Home link */}
          <a
            href={getNavHref("home")}
            className="text-primary-foreground/80 hover:text-gold transition-colors text-xs lg:text-sm font-body font-medium tracking-wide whitespace-nowrap"
          >
            Home
          </a>

          {/* Services dropdown - placed second */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-primary-foreground/80 hover:text-gold transition-colors text-xs lg:text-sm font-body font-medium tracking-wide whitespace-nowrap py-2">
              Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 pt-1 w-64">
                <div className="bg-navy border border-gold/20 rounded-lg shadow-xl overflow-hidden">
                  {serviceLinks.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-primary-foreground/80 hover:text-gold hover:bg-gold/5 transition-colors text-sm font-body border-b border-gold/10 last:border-0"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Remaining nav links (skip Home) */}
          {navLinks.filter(l => l.label !== "Home").map((link) => (
            <a
              key={link.href}
              href={getNavHref(link.href)}
              className="text-primary-foreground/80 hover:text-gold transition-colors text-xs lg:text-sm font-body font-medium tracking-wide whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}

          <a
            href={getNavHref("contact")}
            className="bg-gradient-gold text-secondary-foreground px-4 py-1.5 lg:px-5 lg:py-2 rounded-md text-xs lg:text-sm font-semibold font-body shadow-gold hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Started
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy border-t border-gold/20 px-4 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getNavHref(link.href)}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors text-sm font-body border-b border-gold/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="py-2 border-b border-gold/10">
            <span className="block py-2 text-gold/60 text-xs font-body font-semibold uppercase tracking-widest">Services</span>
            {serviceLinks.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                onClick={() => setOpen(false)}
                className="block py-2 pl-3 text-primary-foreground/80 hover:text-gold transition-colors text-sm font-body"
              >
                {s.label}
              </Link>
            ))}
          </div>
          <a
            href={getNavHref("contact")}
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-gradient-gold text-secondary-foreground px-5 py-3 rounded-md text-sm font-semibold font-body"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
