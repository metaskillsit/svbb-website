import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroContact} alt="Contact" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> {t("common.backToHome")}
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            {t("contact.pageTitle1")} <span className="text-gradient-gold">{t("contact.pageTitleHighlight")}</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">{t("contact.pageDesc")}</p>
          <p className="font-body text-gold/90 text-sm md:text-base mt-4 max-w-2xl">{t("investorsExtras.contactNote")}</p>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
