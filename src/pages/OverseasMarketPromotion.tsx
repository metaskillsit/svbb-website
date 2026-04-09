import { ArrowLeft, Star, Megaphone, Newspaper, Users, Palette, CheckCircle, Globe, Handshake, BarChart3, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import heroPromo from "@/assets/hero-promo.jpg";

const OverseasMarketPromotion = () => {
  const { t } = useTranslation();

  const serviceCards = [
    { icon: Megaphone, titleKey: "digitalTitle", descKey: "digitalDesc" },
    { icon: Newspaper, titleKey: "prTitle", descKey: "prDesc" },
    { icon: Users, titleKey: "tradeFairTitle", descKey: "tradeFairDesc" },
    { icon: Palette, titleKey: "collateralTitle", descKey: "collateralDesc" },
  ];

  const digitalPkgs = [
    { nameKey: "starterAdsName", priceKey: "starterAdsPrice", bestKey: "starterAdsBest", items: 5, prefix: "starterAdsItem" },
    { nameKey: "growthAdsName", priceKey: "growthAdsPrice", bestKey: "growthAdsBest", items: 5, prefix: "growthAdsItem", highlight: true },
    { nameKey: "expansionAdsName", priceKey: "expansionAdsPrice", bestKey: "expansionAdsBest", items: 4, prefix: "expansionAdsItem" },
  ];

  const prPkgs = [
    { nameKey: "prLaunchName", priceKey: "prLaunchPrice", items: 4, prefix: "prLaunchItem" },
    { nameKey: "prMomentumName", priceKey: "prMomentumPrice", items: 5, prefix: "prMomentumItem", highlight: true },
    { nameKey: "prAuthorityName", priceKey: "prAuthorityPrice", items: 5, prefix: "prAuthorityItem" },
  ];

  const tradeFairPkgs = [
    { nameKey: "virtualFairName", priceKey: "virtualFairPrice", items: 5, prefix: "virtualFairItem" },
    { nameKey: "physicalFairLiteName", priceKey: "physicalFairLitePrice", subKey: "physicalFairLiteSub", items: 5, prefix: "physicalFairLiteItem", highlight: true },
    { nameKey: "physicalFairFullName", priceKey: "physicalFairFullPrice", subKey: "physicalFairFullSub", items: 5, prefix: "physicalFairFullItem" },
  ];

  const collateralPkgs = [
    { nameKey: "collateralStarterName", priceKey: "collateralStarterPrice", items: 4, prefix: "collateralStarterItem" },
    { nameKey: "marketEntryKitName", priceKey: "marketEntryKitPrice", items: 5, prefix: "marketEntryKitItem", highlight: true },
    { nameKey: "vietnamLaunchKitName", priceKey: "vietnamLaunchKitPrice", items: 6, prefix: "vietnamLaunchKitItem" },
  ];

  const bundles = [
    { nameKey: "bundleTestName", priceKey: "bundleTestPrice", includesKey: "bundleTestIncludes" },
    { nameKey: "bundleGrowthName", priceKey: "bundleGrowthPrice", includesKey: "bundleGrowthIncludes", highlight: true },
    { nameKey: "bundleProName", priceKey: "bundleProPrice", includesKey: "bundleProIncludes" },
  ];

  const whySvbbItems = [
    { icon: Globe, key: "whySvbbItem1" },
    { icon: Handshake, key: "whySvbbItem2" },
    { icon: BarChart3, key: "whySvbbItem3" },
    { icon: Languages, key: "whySvbbItem4" },
    { icon: Star, key: "whySvbbItem5" },
  ];

  const renderPackageSection = (
    tag: string,
    title1: string,
    titleHighlight: string,
    pkgs: typeof digitalPkgs,
    showBest = true,
    bgClass = "bg-cream"
  ) => (
    <section className={`py-20 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className={`${bgClass.includes("navy") ? "text-gold" : "text-gold-dark"} font-body text-sm font-semibold tracking-widest uppercase`}>{tag}</span>
          <h2 className={`font-heading text-3xl md:text-4xl font-bold ${bgClass.includes("navy") ? "text-primary-foreground" : "text-foreground"} mt-3`}>
            {title1} <span className="text-gradient-gold">{titleHighlight}</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pkgs.map((pkg) => (
            <div key={pkg.nameKey} className={`bg-card rounded-2xl border p-8 relative ${pkg.highlight ? "border-gold shadow-lg ring-2 ring-gold/30" : "border-border"}`}>
              {pkg.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground border-0">{t("overseasPromo.bestValue")}</Badge>}
              <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{t(`overseasPromo.${pkg.nameKey}`)}</span>
              <div className="font-heading text-xl font-bold text-foreground mt-2 mb-1">{t(`overseasPromo.${pkg.priceKey}`)}</div>
              {(pkg as any).subKey && <p className="font-body text-muted-foreground text-xs">{t(`overseasPromo.${(pkg as any).subKey}`)}</p>}
              {showBest && <p className="font-body text-muted-foreground text-xs mb-6">{t("overseasPromo.bestFor")} {t(`overseasPromo.${pkg.bestKey}`)}</p>}
              <ul className={`space-y-2 ${!showBest ? "mt-4" : ""}`}>
                {Array.from({ length: pkg.items }, (_, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                    <CheckCircle size={16} className="text-gold-dark mt-0.5 shrink-0" /> {t(`overseasPromo.${pkg.prefix}${i + 1}`)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPromo} alt="Market Promotion" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> {t("overseasPromo.backToHome")}
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            {t("overseasPromo.heroTitle1")} <span className="text-gradient-gold">{t("overseasPromo.heroTitleHighlight")}</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            {t("overseasPromo.heroDesc")}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            {t("overseasPromo.introDesc")}
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("overseasPromo.ourServices")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("overseasPromo.fourPillarsTitle1")} <span className="text-gradient-gold">{t("overseasPromo.fourPillarsTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {serviceCards.map((s) => (
              <div key={s.titleKey} className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="text-gold-dark" size={28} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{t(`overseasPromo.${s.titleKey}`)}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{t(`overseasPromo.${s.descKey}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Ads */}
      {renderPackageSection(
        t("overseasPromo.digitalAdsTag"),
        t("overseasPromo.adsPackagesTitle1"),
        t("overseasPromo.adsPackagesTitleHighlight"),
        digitalPkgs,
        true,
        "bg-cream"
      )}

      {/* PR */}
      {renderPackageSection(
        t("overseasPromo.prTag"),
        t("overseasPromo.prPackagesTitle1"),
        t("overseasPromo.prPackagesTitleHighlight"),
        prPkgs,
        false,
        "bg-background"
      )}

      {/* Trade Fair */}
      {renderPackageSection(
        t("overseasPromo.tradeFairTag"),
        t("overseasPromo.tradeFairPackagesTitle1"),
        t("overseasPromo.tradeFairPackagesTitleHighlight"),
        tradeFairPkgs,
        false,
        "bg-cream"
      )}

      {/* Collateral */}
      {renderPackageSection(
        t("overseasPromo.collateralTag"),
        t("overseasPromo.collateralPackagesTitle1"),
        t("overseasPromo.collateralPackagesTitleHighlight"),
        collateralPkgs,
        false,
        "bg-background"
      )}

      {/* Bundled Packages */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("overseasPromo.bundledTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
              {t("overseasPromo.bundledTitle1")} <span className="text-gradient-gold">{t("overseasPromo.bundledTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {bundles.map((pkg) => (
              <div key={pkg.nameKey} className={`rounded-2xl border p-8 relative ${pkg.highlight ? "bg-gold/10 border-gold shadow-lg ring-2 ring-gold/30" : "bg-navy-light/50 border-gold/20"}`}>
                {pkg.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground border-0">{t("overseasPromo.bestValue")}</Badge>}
                <span className="font-body text-xs font-semibold text-gold uppercase tracking-widest">{t(`overseasPromo.${pkg.nameKey}`)}</span>
                <div className="font-heading text-2xl font-bold text-primary-foreground mt-2 mb-4">{t(`overseasPromo.${pkg.priceKey}`)}</div>
                <p className="font-body text-primary-foreground/70 text-sm">{t(`overseasPromo.${pkg.includesKey}`)}</p>
                <a
                  href="#cta"
                  className="mt-6 inline-block bg-gradient-gold text-secondary-foreground px-6 py-2.5 rounded-md text-sm font-semibold font-body shadow-gold hover:opacity-90 transition-opacity"
                >
                  {t("overseasPromo.requestProposal")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why SVBB */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("overseasPromo.whySvbbTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("overseasPromo.whySvbbTitle1")} <span className="text-gradient-gold">{t("overseasPromo.whySvbbTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {whySvbbItems.map((p) => (
              <div key={p.key} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <p.icon className="text-gold-dark" size={24} />
                </div>
                <p className="font-body text-sm text-foreground font-medium">{t(`overseasPromo.${p.key}`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t("overseasPromo.ctaTitle1")} <span className="text-gradient-gold">{t("overseasPromo.ctaTitleHighlight")}</span>
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-8 leading-relaxed">
            {t("overseasPromo.ctaDesc")}
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-10 py-4 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
          >
            {t("overseasPromo.ctaButton")}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OverseasMarketPromotion;
