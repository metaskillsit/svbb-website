import { ArrowRight, Award, ChevronDown, CheckCircle } from "lucide-react";
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
      }, 1500);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background - crossfade */}
      <div className="absolute inset-0">
        <img
          src={heroImages[currentImg]}
          alt="Vietnam cityscape"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${transitioning ? "opacity-0" : "opacity-100"}`}
          width={1920}
          height={900}
        />
        <img
          src={heroImages[nextImg]}
          alt="Vietnam cityscape"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ease-in-out ${transitioning ? "opacity-100" : "opacity-0"}`}
          width={1920}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy-dark/70" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl text-center md:text-left">
          <div className="flex items-center gap-2 mb-5 animate-fade-in-up justify-center md:justify-start">
            <Award className="text-gold" size={20} />
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">
              Singapore–Vietnam Market Entry Specialists
            </span>
          </div>

          <h1
            className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-primary-foreground leading-tight mb-5 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Expand into Vietnam with confidence — backed by trusted networks in{" "}
            <span className="text-gradient-gold">Ho Chi Minh City</span> and{" "}
            <span className="text-gradient-gold">Hanoi</span>, and access to 11,000+ companies to accelerate partnerships, sales, and seamless business setup.
          </h1>

          <p
            className="font-body text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mb-8 animate-fade-in-up mx-auto md:mx-0"
            style={{ animationDelay: "0.3s" }}
          >
            Tap into an established ecosystem with legal, operational, and partnership support already in place — enabling faster, lower-risk expansion at the right cost.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up justify-center md:justify-start" style={{ animationDelay: "0.4s" }}>
            <a
              href="#trips"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-7 py-3.5 rounded-full font-body font-semibold text-sm shadow-gold hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
            >
              Explore Business Vietnam Learning Trips
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold/60 text-gold px-7 py-3.5 rounded-full font-body font-semibold text-sm hover:bg-gold/10 hover:border-gold transition-all duration-200"
            >
              Book a Consultation
            </a>
          </div>

          {/* Microcopy */}
          <p
            className="font-body text-xs text-primary-foreground/50 mt-3 animate-fade-in-up text-center md:text-left"
            style={{ animationDelay: "0.48s" }}
          >
            Trusted access to 11,000+ companies across Vietnam
          </p>

          {/* MRA Trust Badge */}
          <div
            className="mt-5 animate-fade-in-up flex justify-center md:justify-start"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50/90 backdrop-blur-sm border border-emerald-200/60 rounded-full px-4 py-2">
              <CheckCircle className="text-emerald-600 shrink-0" size={14} />
              <span className="font-body text-xs text-emerald-800 font-medium">
                🇸🇬 MRA Supportable Programme
              </span>
              <span className="font-body text-[10px] text-emerald-600/70 hidden sm:inline">
                · Subject to approval by Enterprise Singapore
              </span>
            </div>
          </div>

          {/* Trust stats */}
          <div
            className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-gold/20 animate-fade-in-up justify-center md:justify-start"
            style={{ animationDelay: "0.65s" }}
          >
            {[
              { value: "11+", label: "Years Experience" },
              { value: "3,000+", label: "Clients Served" },
              { value: "S$39.95B", label: "Bilateral Trade" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-heading text-xl md:text-2xl font-bold text-gold">{stat.value}</div>
                <div className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#trips"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-primary-foreground/60 hover:text-gold transition-colors animate-fade-in-up"
        style={{ animationDelay: "0.8s" }}
      >
        <span className="font-body text-xs tracking-wider uppercase">See us in action</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
