import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1498637841888-108c6b723fcb?w=1920&q=80&auto=format",
  "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=1920&q=80&auto=format",
];

const HeroSection = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const [nextImg, setNextImg] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImg((prev) => (prev + 1) % heroImages.length);
        setNextImg((prev) => (prev + 1) % heroImages.length);
        setTransitioning(false);
      }, 2000);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden">
      {/* Background crossfade */}
      <div className="absolute inset-0">
        <img
          src={heroImages[currentImg]}
          alt="Vietnam cityscape"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${transitioning ? "opacity-0" : "opacity-100"}`}
          width={1920}
          height={1080}
        />
        <img
          src={heroImages[nextImg]}
          alt="Vietnam cityscape"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${transitioning ? "opacity-100" : "opacity-0"}`}
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--navy-dark))]/95 via-[hsl(var(--navy))]/85 to-[hsl(var(--navy-dark))]/70" />
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-8 pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-3xl text-center lg:text-left mx-auto lg:mx-0">
          {/* Headline */}
          <h1
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-primary-foreground leading-[1.2] tracking-tight mb-6 animate-fade-in"
          >
            Expand into Vietnam with confidence — backed by trusted networks in Ho Chi Minh City and Hanoi, and access to{" "}
            <span className="text-[hsl(var(--gold))]">11,000+ companies</span> to accelerate partnerships, sales, and seamless business setup.
          </h1>

          {/* Subheadline */}
          <p
            className="font-body text-base md:text-lg text-primary-foreground/70 leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            Tap into an established ecosystem with legal, operational, and partnership support already in place — enabling faster, lower-risk expansion at the right cost.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-5 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#trips"
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-[hsl(var(--navy-dark))] px-7 py-3.5 rounded-full font-body font-semibold text-sm shadow-lg hover:shadow-xl hover:brightness-105 transition-all duration-300"
            >
              Explore Business Vietnam Learning Trips
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 border border-primary-foreground/30 text-primary-foreground px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Calendar size={16} />
              Book a Consultation
            </a>
          </div>

          {/* Microcopy */}
          <p
            className="font-body text-xs text-primary-foreground/50 mb-6 text-center lg:text-left animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Trusted access to 11,000+ companies across Vietnam
          </p>

          {/* MRA Trust Badge */}
          <div
            className="flex justify-center lg:justify-start animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15 rounded-full px-4 py-2">
              <CheckCircle size={14} className="text-emerald-400 shrink-0" />
              <span className="font-body text-xs text-primary-foreground/80">
                🇸🇬 MRA Supportable Programme
              </span>
              <span className="font-body text-[10px] text-primary-foreground/50 hidden sm:inline">
                · Subject to approval by Enterprise Singapore
              </span>
            </div>
          </div>
          {/* Mobile-only approval line */}
          <p className="font-body text-[10px] text-primary-foreground/40 text-center mt-2 sm:hidden">
            Subject to approval by Enterprise Singapore
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
