import { ArrowRight, Award, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

// All unique HCMC & Vietnam cityscape photos — no duplicates with other sections
const heroImages = [
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1920&q=80&auto=format", // HCMC skyline aerial
  "https://images.unsplash.com/photo-1528127269322-539801943592?w=1920&q=80&auto=format", // Vietnam terraced rice fields
  "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?w=1920&q=80&auto=format", // Vietnam boats on river
  "https://images.unsplash.com/photo-1498637841888-108c6b723fcb?w=1920&q=80&auto=format", // Vietnam lanterns Hoi An
  "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=1920&q=80&auto=format", // Hanoi traffic aerial
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
    <section id="home" className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Background - crossfade between two layers */}
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy-dark/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-20 pb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-5 animate-fade-in-up">
            <Award className="text-gold" size={20} />
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">
              Singapore–Vietnam Market Entry Specialists
            </span>
          </div>

          <h1
            className="font-heading text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary-foreground leading-tight mb-5 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Your Strategic Gateway to <span className="text-gradient-gold">Vietnam's</span> Market
          </h1>

          <p
            className="font-body text-base md:text-lg text-primary-foreground/75 leading-relaxed max-w-2xl mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Enter Vietnam with confidence through SVBB — Leverage Singapore's MRA framework with a partner that Vietnam recognizes.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-7 py-3.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
            >
              Explore Our Services
              <ArrowRight size={16} />
            </a>
            <a
              href="#mra-grant"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold/60 text-gold px-7 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 transition-colors"
            >
              Learn About MRA Grant
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="flex flex-wrap items-center gap-6 mt-8 pt-6 border-t border-gold/20 animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
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
        style={{ animationDelay: "0.7s" }}
      >
        <span className="font-body text-xs tracking-wider uppercase">See us in action</span>
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
