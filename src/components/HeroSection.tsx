import { ArrowRight, Award, ChevronDown, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import heroHcmc from "@/assets/hero-hcmc-skyline.jpg";
import heroSapa from "@/assets/hero-sapa-rice.jpg";
import heroHoianRiver from "@/assets/hero-hoian-river.jpg";
import heroHoianLanterns from "@/assets/hero-hoian-lanterns.jpg";
import heroHanoi from "@/assets/hero-hanoi-traffic.jpg";


const heroImages = [heroHcmc, heroSapa, heroHoianRiver, heroHoianLanterns, heroHanoi];

const stats = [
  { value: "11+", label: "Years Experience" },
  { value: "11,000+", label: "Accessible Companies" },
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
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden">
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
        {/* Richer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/85 to-navy-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          {/* Tagline pill */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm animate-fade-in-up">
            <Award className="text-gold shrink-0" size={16} />
            <span className="text-gold font-body text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Singapore–Vietnam Market Entry Specialists
            </span>
          </div>

          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            Your Strategic Gateway to <span className="text-gradient-gold">Vietnam's</span> Market
          </h1>

          <p
            className="font-body text-base md:text-lg lg:text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Expand into Vietnam with confidence — backed by trusted networks in Ho Chi Minh City and Hanoi, and access
            to 11,000+ companies to accelerate partnerships, sales, and seamless business setup.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm shadow-gold hover:shadow-[0_12px_40px_-8px_hsl(var(--gold)/0.45)] hover:scale-[1.02] transition-all duration-200"
            >
              How to start?
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#mra-grant"
              className="relative inline-flex items-center justify-center gap-2 border-2 border-gold/50 text-gold px-8 py-4 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 hover:border-gold/70 transition-all duration-200"
            >
              Join us for a Business Vietnam Learning Trip
              <span className="absolute -top-2.5 -right-2.5 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-navy-dark border border-gold/30 text-[9px] font-body font-medium text-gold/80 tracking-wide whitespace-nowrap">
                SG MRA Supportable
              </span>
            </a>
          </div>

          {/* Stats */}
          <div
            className="flex flex-wrap items-center gap-8 mt-10 pt-8 border-t border-primary-foreground/10 animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-heading text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="font-body text-[11px] text-primary-foreground/50 uppercase tracking-widest mt-1">
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-primary-foreground/50 hover:text-gold transition-colors animate-fade-in-up"
        style={{ animationDelay: "0.7s" }}
      >
        <span className="font-body text-[11px] tracking-widest uppercase">See us in action</span>
        <ChevronDown size={18} className="animate-bounce" />
      </a>
    </section>
  );
};

export default HeroSection;
