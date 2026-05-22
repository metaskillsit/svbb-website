import { ArrowLeft, FileText, Lock, Percent, Scale, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Mandates = () => {
  const { t } = useTranslation();

  const sections = [
    { icon: FileText, title: t("mandates.s1Title"), desc: t("mandates.s1Desc") },
    { icon: Lock, title: t("mandates.s2Title"), desc: t("mandates.s2Desc") },
    { icon: Percent, title: t("mandates.s3Title"), desc: t("mandates.s3Desc") },
    { icon: Scale, title: t("mandates.s4Title"), desc: t("mandates.s4Desc") },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> {t("common.backToHome", "Back to Home")}
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            {t("mandates.pageTitle1")} <span className="text-gradient-gold">{t("mandates.pageTitleHighlight")}</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">{t("mandates.pageDesc")}</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{t("mandates.introTitle")}</h2>
          <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed mb-10">{t("mandates.intro")}</p>

          <div className="bg-card rounded-xl p-6 sm:p-8 border-2 border-gold/40 shadow-gold mb-12">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">{t("mandates.capRaiseTitle")}</h3>
            <p className="font-body text-muted-foreground text-sm md:text-base leading-relaxed">{t("mandates.capRaiseDesc")}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {sections.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gold/10 border border-gold/30 flex items-center justify-center mb-5">
                  <Icon className="text-gold" size={22} />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-3">{title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy text-primary-foreground">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{t("mandates.ctaTitle")}</h2>
          <p className="font-body text-primary-foreground/70 mb-8">{t("mandates.ctaDesc")}</p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all duration-200"
          >
            {t("mandates.ctaButton")}
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mandates;
