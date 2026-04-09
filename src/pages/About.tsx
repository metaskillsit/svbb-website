import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutServicesSection from "@/components/AboutServicesSection";
import VietnamMarketSection from "@/components/VietnamMarketSection";
import TeamSection from "@/components/TeamSection";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-8 bg-navy">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> {t("common.backToHome")}
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            {t("about.pageTitle1")} <span className="text-gradient-gold">{t("about.pageTitleHighlight")}</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">{t("about.pageDesc")}</p>
        </div>
      </section>
      <AboutServicesSection />
      <VietnamMarketSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;
