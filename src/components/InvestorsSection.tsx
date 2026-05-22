import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Briefcase, FileSignature, Network, ArrowRight, ShieldCheck, Search, Handshake } from "lucide-react";

const InvestorsSection = () => {
  const { t } = useTranslation();

  const cards = [
    { icon: Briefcase, title: t("investors.card1Title"), desc: t("investors.card1Desc") },
    { icon: FileSignature, title: t("investors.card2Title"), desc: t("investors.card2Desc") },
    { icon: Network, title: t("investors.card3Title"), desc: t("investors.card3Desc") },
  ];

  const steps = [
    { icon: ShieldCheck, title: t("investors.step1Title"), desc: t("investors.step1Desc") },
    { icon: Search, title: t("investors.step2Title"), desc: t("investors.step2Desc") },
    { icon: Handshake, title: t("investors.step3Title"), desc: t("investors.step3Desc") },
  ];

  return (
    <section id="investors" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("investors.sectionTag")}</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("investors.title1")} <span className="text-gradient-gold">{t("investors.titleHighlight")}</span>
          </h2>
          <p className="font-body text-muted-foreground mt-5 text-base md:text-lg leading-relaxed">{t("investors.intro")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-20">
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                <Icon className="text-gold" size={22} />
              </div>
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2">{title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <span className="text-gold-dark font-body text-xs font-semibold tracking-widest uppercase">{t("investors.processTag")}</span>
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-3">{t("investors.processTitle")}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative bg-navy rounded-xl p-6 sm:p-8 text-primary-foreground border border-gold/20">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-heading text-2xl font-bold text-gold">0{i + 1}</span>
                <Icon className="text-gold/80" size={20} />
              </div>
              <h4 className="font-heading text-base md:text-lg font-bold mb-2">{title}</h4>
              <p className="font-body text-primary-foreground/70 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/mandates"
            className="group inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
          >
            {t("investors.ctaButton")}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestorsSection;
