import { ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroSetup from "@/assets/hero-setup.jpg";

const SetupCompany = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroSetup} alt="Company Setup" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> {t("setupCompany.backToHome")}
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            {t("setupCompany.heroTitle1")} <span className="text-gradient-gold">{t("setupCompany.heroTitleHighlight")}</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            {t("setupCompany.heroDesc")}
          </p>
        </div>
      </section>

      {/* Business Formation & Legal Setup */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("setupCompany.formationTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("setupCompany.formationTitle1")} <span className="text-gradient-gold">{t("setupCompany.formationTitleHighlight")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{t("setupCompany.basicPackage")}</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  SGD 5,400<span className="text-muted-foreground text-base font-normal"> {t("setupCompany.perYear")}</span>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.irc")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.ircDesc")}</p>
                  <p className="font-body text-gold-dark text-xs font-medium mt-2">{t("setupCompany.ircTimeBasic")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.erc")}</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.ercItem1")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.ercItem2")}</li>
                    <li className="font-body text-muted-foreground/40 text-sm line-through">• {t("setupCompany.ercItem3")}</li>
                  </ul>
                  <p className="font-body text-gold-dark text-xs font-medium mt-2">{t("setupCompany.ercTimeBasic")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.essentialSetup")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.essentialDesc")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.investReport")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.investDesc")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.postSetup")}</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.postItem1")}</li>
                    <li className="font-body text-muted-foreground/40 text-sm line-through">• {t("setupCompany.postItem2")}</li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 pt-6 border-t border-border font-body text-xs text-muted-foreground italic">{t("setupCompany.additionalServices")}</p>
            </div>

            {/* Advanced Package */}
            <div className="bg-card rounded-2xl border-2 border-gold/40 p-8 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold text-secondary-foreground text-[10px] font-body font-bold uppercase tracking-widest">
                {t("setupCompany.recommended")}
              </div>
              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{t("setupCompany.advancedPackage")}</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  SGD 6,750<span className="text-muted-foreground text-base font-normal"> {t("setupCompany.perYear")}</span>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.irc")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.ircDesc")}</p>
                  <p className="font-body text-gold-dark text-xs font-medium mt-2">{t("setupCompany.ircTimeAdvanced")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.erc")}</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.ercItem1")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.ercItem2")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.ercItem3")}</li>
                  </ul>
                  <p className="font-body text-gold-dark text-xs font-medium mt-2">{t("setupCompany.ercTimeAdvanced")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.essentialSetup")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.essentialDesc")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.investReport")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.investDesc")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.postSetup")}</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.postItem1")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.postItem2")}</li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 pt-6 border-t border-border font-body text-xs text-muted-foreground italic">{t("setupCompany.additionalServices")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Compliance & Accounting */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("setupCompany.taxTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("setupCompany.taxTitle1")} <span className="text-gradient-gold">{t("setupCompany.taxTitleHighlight")}</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tax Basic */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{t("setupCompany.basicPackage")}</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  SGD 5,400<span className="text-muted-foreground text-base font-normal"> {t("setupCompany.perYear")}</span>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-1">{t("setupCompany.taxBasicSub")}</p>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.taxDeclaration")}</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem1")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem2")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem3")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem4")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem5")}</li>
                    <li className="font-body text-muted-foreground/40 text-sm line-through">• {t("setupCompany.taxItem6")}</li>
                  </ul>
                  <p className="mt-2 font-body text-xs text-muted-foreground italic">{t("setupCompany.additionalServices")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.accounting")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.accountingDesc")}</p>
                  <p className="mt-2 font-body text-xs text-muted-foreground italic">{t("setupCompany.additionalServices")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.socialInsurance")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.socialDesc")}</p>
                </div>
              </div>
            </div>

            {/* Tax Advanced */}
            <div className="bg-card rounded-2xl border-2 border-gold/40 p-8 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold text-secondary-foreground text-[10px] font-body font-bold uppercase tracking-widest">
                {t("setupCompany.recommended")}
              </div>
              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{t("setupCompany.advancedPackage")}</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  SGD 6,750<span className="text-muted-foreground text-base font-normal"> {t("setupCompany.perYear")}</span>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-1">{t("setupCompany.taxAdvancedSub")}</p>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.taxDeclaration")}</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem1")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem2")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem3")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem4")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem5")}</li>
                    <li className="font-body text-muted-foreground text-sm">• {t("setupCompany.taxItem6")}</li>
                  </ul>
                  <p className="mt-2 font-body text-xs text-muted-foreground italic">{t("setupCompany.additionalServices")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.accounting")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.accountingDesc")}</p>
                  <p className="mt-2 font-body text-xs text-muted-foreground italic">{t("setupCompany.additionalServices")}</p>
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">{t("setupCompany.socialInsurance")}</h3>
                  <p className="font-body text-muted-foreground text-sm">{t("setupCompany.socialDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("setupCompany.specialOffers")}</span>
          <div className="flex items-center justify-center gap-3 mt-6 mb-4">
            <Star className="text-gold" size={24} />
            <span className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">{t("setupCompany.save10")}</span>
            <Star className="text-gold" size={24} />
          </div>
          <p className="font-body text-primary-foreground/80 text-lg mb-6">
            {t("setupCompany.save10Desc")}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/50 font-body text-sm mb-10">
            <span>• {t("setupCompany.smeNote")}</span>
            <span>• {t("setupCompany.vatNote")}</span>
          </div>
          <div className="pt-10 border-t border-primary-foreground/10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              {t("setupCompany.readyTitle1")} <span className="text-gradient-gold">{t("setupCompany.readyTitleHighlight")}</span>?
            </h2>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-10 py-4 rounded-lg font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all"
            >
              {t("setupCompany.scheduleMeeting")}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SetupCompany;
