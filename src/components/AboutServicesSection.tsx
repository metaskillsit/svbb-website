import { useTranslation } from "react-i18next";
import { Briefcase, Globe, MapPin, Users, TrendingUp, Handshake } from "lucide-react";
import svbbLogo from "@/assets/svbb-logo.png";

const icons = [Globe, Briefcase, Handshake, TrendingUp, MapPin, Users];

const AboutServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { icon: icons[0], title: t("aboutServices.svc1Title"), desc: t("aboutServices.svc1Desc") },
    { icon: icons[1], title: t("aboutServices.svc2Title"), desc: t("aboutServices.svc2Desc") },
    { icon: icons[2], title: t("aboutServices.svc3Title"), desc: t("aboutServices.svc3Desc") },
    { icon: icons[3], title: t("aboutServices.svc4Title"), desc: t("aboutServices.svc4Desc") },
    { icon: icons[4], title: t("aboutServices.svc5Title"), desc: t("aboutServices.svc5Desc") },
    { icon: icons[5], title: t("aboutServices.svc6Title"), desc: t("aboutServices.svc6Desc") },
  ];

  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("aboutServices.aboutTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
              {t("aboutServices.aboutTitle1")} <span className="text-gradient-gold">{t("aboutServices.aboutTitleHighlight")}</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 text-base leading-relaxed">
              {t("aboutServices.aboutDesc")}
            </p>

            <div className="mt-6 bg-card rounded-xl p-6 border border-border">
              <img src={svbbLogo} alt="SVBB Logo" className="w-32 h-auto mb-4 mx-auto" loading="lazy" />
              <p className="font-body text-xs text-muted-foreground text-center">
                <strong className="text-foreground">{t("aboutServices.sgOffice")}</strong> {t("aboutServices.sgAddress")}
              </p>
              <p className="font-body text-xs text-muted-foreground text-center mt-1">
                <strong className="text-foreground">{t("aboutServices.vnOffice")}</strong> {t("aboutServices.vnAddress")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: t("aboutServices.stat1Value"), label: t("aboutServices.stat1Label") },
                { value: t("aboutServices.stat2Value"), label: t("aboutServices.stat2Label") },
                { value: t("aboutServices.stat3Value"), label: t("aboutServices.stat3Label") },
              ].map((s) => (
                <div key={s.label} className="text-center bg-card rounded-lg p-3 border border-border">
                  <div className="font-heading text-lg font-bold text-navy">{s.value}</div>
                  <div className="font-body text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("aboutServices.servicesTag")}</span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-3 mb-6">
              {t("aboutServices.servicesTitle1")} <span className="text-gradient-gold">{t("aboutServices.servicesTitleHighlight")}</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                    <s.icon className="text-gold" size={20} />
                  </div>
                  <h4 className="font-heading text-base font-bold text-foreground mb-1.5">{s.title}</h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServicesSection;
