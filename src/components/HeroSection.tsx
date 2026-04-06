import { ArrowRight, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import VideoModal from "@/components/VideoModal";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Singapore and Vietnam skylines connected"
          className="w-full h-full object-cover"
          width={1920}
          height={900}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy-dark/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-fade-in-up">
            <Award className="text-gold" size={20} />
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">
              Singapore–Vietnam Market Entry Specialists
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Your Strategic Gateway to{" "}
            <span className="text-gradient-gold">Vietnam</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Enter Vietnam with confidence through SVBB — Leverage Singapore's MRA framework with a partner that Vietnam recognizes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-4 rounded-lg font-body font-semibold text-base shadow-gold hover:opacity-90 transition-opacity"
            >
              Speak to a Consultant
              <ArrowRight size={18} />
            </a>
            <VideoModal thumbnailText="Watch Our Video" />
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-gold/20 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { value: "11+", label: "Years Experience" },
              { value: "3,000+", label: "Clients Served" },
              { value: "S$39.95B", label: "Bilateral Trade" },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="font-heading text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                <div className="font-body text-xs text-primary-foreground/60 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
