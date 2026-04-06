import { useState } from "react";
import { Menu, X } from "lucide-react";
import svbbLogo from "@/assets/svbb-logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "MRA Grant", href: "#mra-grant" },
  { label: "Partners", href: "#partners" },
  { label: "Why Vietnam", href: "#vietnam-market" },
  { label: "Trips & Events", href: "#trips" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <a href="#home" className="flex items-center gap-3">
          <img src={svbbLogo} alt="SVBB Logo" className="h-12 w-auto" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-primary-foreground/80 hover:text-gold transition-colors text-xs lg:text-sm font-body font-medium tracking-wide whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
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
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-primary-foreground/80 hover:text-gold transition-colors text-sm font-body border-b border-gold/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
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
