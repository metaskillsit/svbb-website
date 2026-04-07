import { ArrowRight } from "lucide-react";
import vietchamLogo from "@/assets/vietcham-logo.png";

const VietChamBanner = () => {
  return (
    <section className="bg-cream py-8">
      <div className="container mx-auto px-4">
        <a
          href="https://vietcham.org.sg/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col md:flex-row items-center gap-6 md:gap-8 bg-card rounded-2xl border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 p-6 md:p-8"
        >
          <div className="shrink-0 w-20 h-20 rounded-xl bg-white flex items-center justify-center p-3 border border-border/50">
            <img src={vietchamLogo} alt="VietCham Singapore Logo" className="w-full h-full object-contain" loading="lazy" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-1 px-3 py-0.5 rounded-full bg-gold/10 border border-gold/20">
              <span className="font-body text-[10px] font-semibold text-gold-dark uppercase tracking-widest">Key Strategic Partner</span>
            </div>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">VietCham Singapore</h3>
            <p className="font-body text-muted-foreground/70 text-xs mt-0.5">UEN: 201317105R</p>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mt-1 max-w-xl">
              Our anchor partnership gives you direct access to cross-border business networks and government-level introductions.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-gold text-sm font-body font-semibold group-hover:gap-3 transition-all">
            Visit VietCham <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default VietChamBanner;
