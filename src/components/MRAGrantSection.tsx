import { useTranslation } from "react-i18next";
import { CheckCircle2, DollarSign, FileCheck, Rocket } from "lucide-react";

const stepIcons = [FileCheck, DollarSign, Rocket, CheckCircle2];

const MRAGrantSection = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: stepIcons[0], step: "01", title: t("mra.step1Title"), desc: t("mra.step1Desc") },
    { icon: stepIcons[1], step: "02", title: t("mra.step2Title"), desc: t("mra.step2Desc") },
    { icon: stepIcons[2], step: "03", title: t("mra.step3Title"), desc: t("mra.step3Desc") },
    { icon: stepIcons[3], step: "04", title: t("mra.step4Title"), desc: t("mra.step4Desc") },
  ];

  return (
    <section id="mra-grant" className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("mra.sectionTag")}</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {t("mra.title1")} <span className="text-gradient-gold">{t("mra.titleHighlight")}</span>
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            {t("mra.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-navy-light/30 border border-gold/20 rounded-xl p-8 hover:border-gold/50 transition-colors">
              <span className="font-heading text-5xl font-bold text-gold/15 absolute top-4 right-6">{s.step}</span>
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <s.icon className="text-gold" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
              <p className="font-body text-primary-foreground/65 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gold/10 border border-gold/30 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold">{t("mra.stat1")}</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-2">{t("mra.stat1Label")}</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold">{t("mra.stat2")}</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-2">{t("mra.stat2Label")}</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold">{t("mra.stat3")}</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-2">{t("mra.stat3Label")}</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="#survey"
            className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-4 rounded-lg font-body font-semibold text-base shadow-gold hover:opacity-90 transition-opacity"
          >
            {t("mra.ctaButton")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default MRAGrantSection;
