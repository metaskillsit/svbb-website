import { useTranslation } from "react-i18next";
import svbbLogo from "@/assets/svbb-logo.png";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("aboutSection.sectionTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 leading-tight">
              {t("aboutSection.title1")} <span className="text-gradient-gold">{t("aboutSection.titleHighlight")}</span> {t("aboutSection.title2")}
            </h2>
            <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed">
              {t("aboutSection.desc1")}
            </p>
            <p className="font-body text-muted-foreground mt-4 text-lg leading-relaxed">
              {t("aboutSection.desc2")}{" "}
              <strong className="text-foreground">{t("aboutSection.desc2Bold")}</strong>
              {t("aboutSection.desc2End")}
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: t("aboutSection.stat1Value"), label: t("aboutSection.stat1Label") },
                { value: t("aboutSection.stat2Value"), label: t("aboutSection.stat2Label") },
                { value: t("aboutSection.stat3Value"), label: t("aboutSection.stat3Label") },
              ].map((s) => (
                <div key={s.label} className="text-center bg-card rounded-lg p-4 border border-border">
                  <div className="font-heading text-2xl font-bold text-navy">{s.value}</div>
                  <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-gold rounded-3xl opacity-10 blur-2xl" />
              <div className="relative bg-card rounded-2xl p-12 border border-border shadow-lg flex flex-col items-center">
                <img src={svbbLogo} alt="SVBB Logo" className="w-64 h-auto mb-8" loading="lazy" />
                <div className="text-center">
                  <p className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">{t("aboutSection.sgOfficeLabel")}</strong> {t("aboutSection.sgAddress")}
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    <strong className="text-foreground">{t("aboutSection.vnOfficeLabel")}</strong> {t("aboutSection.vnAddress")}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-3">UEN: 202419761W</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
