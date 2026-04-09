import { useTranslation } from "react-i18next";
import { Briefcase, Globe, MapPin, Users, TrendingUp, Handshake } from "lucide-react";
import RotatingImage from "./RotatingImage";

const consultingImages = [
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80&auto=format",
];

const icons = [Globe, Briefcase, Handshake, TrendingUp, MapPin, Users];

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { icon: icons[0], title: t("services.svc1Title"), desc: t("services.svc1Desc") },
    { icon: icons[1], title: t("services.svc2Title"), desc: t("services.svc2Desc") },
    { icon: icons[2], title: t("services.svc3Title"), desc: t("services.svc3Desc") },
    { icon: icons[3], title: t("services.svc4Title"), desc: t("services.svc4Desc") },
    { icon: icons[4], title: t("services.svc5Title"), desc: t("services.svc5Desc") },
    { icon: icons[5], title: t("services.svc6Title"), desc: t("services.svc6Desc") },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("services.sectionTag")}</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("services.title1")} <span className="text-gradient-gold">{t("services.titleHighlight")}</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            {t("services.desc")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card rounded-xl p-8 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <s.icon className="text-gold" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl overflow-hidden relative h-64 md:h-80">
          <RotatingImage
            images={consultingImages}
            alt="SVBB consulting session"
            className="w-full h-full object-cover"
            interval={9000}
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-navy/40 flex items-center z-10">
            <div className="px-8 md:px-16 max-w-xl">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
                {t("services.ctaTitle")}
              </h3>
              <p className="font-body text-primary-foreground/75 mb-5">
                {t("services.ctaDesc")}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-3 rounded-lg font-body font-semibold shadow-gold hover:opacity-90 transition-opacity"
              >
                {t("services.ctaButton")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
