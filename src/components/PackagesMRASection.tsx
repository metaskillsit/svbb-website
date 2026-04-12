import { MapPin, CheckCircle2, FileText, Play, FileCheck, DollarSign, Rocket } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Hanoi-specific photos
const hanoiImages = [
  "https://images.unsplash.com/photo-1604050478796-5e4f2eb69907?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1580139614600-7a66e0aa9a09?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1535751094257-0e06b44feaac?w=800&q=80&auto=format",
];

// HCMC-specific photos
const hcmcImages = [
  "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1576842546775-83a96e1a7959?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1570868738084-f8efbe8b2a47?w=800&q=80&auto=format",
];

const RotatingBg = ({ images, children, className }: { images: string[]; children: React.ReactNode; className?: string }) => {
  const [idx, setIdx] = useState(0);
  const [nextIdx, setNextIdx] = useState(1);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setIdx((p) => (p + 1) % images.length);
        setNextIdx((p) => (p + 1) % images.length);
        setTransitioning(false);
      }, 1200);
    }, 8000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={images[idx]} alt="" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${transitioning ? "opacity-0" : "opacity-100"}`} loading="lazy" />
      <img src={images[nextIdx]} alt="" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out ${transitioning ? "opacity-100" : "opacity-0"}`} loading="lazy" />
      {children}
    </div>
  );
};

const PackagesMRASection = () => {
  const { t } = useTranslation();

  const packages = [
    {
      cityKey: "packagesMRA.hanoiCity",
      images: hanoiImages,
      industryKeys: ["packagesMRA.hanoiInd1", "packagesMRA.hanoiInd2", "packagesMRA.hanoiInd3", "packagesMRA.hanoiInd4"],
      highlightKeys: ["packagesMRA.hanoiH1", "packagesMRA.hanoiH2", "packagesMRA.hanoiH3", "packagesMRA.hanoiH4", "packagesMRA.hanoiH5"],
    },
    {
      cityKey: "packagesMRA.hcmcCity",
      images: hcmcImages,
      industryKeys: ["packagesMRA.hcmcInd1", "packagesMRA.hcmcInd2", "packagesMRA.hcmcInd3", "packagesMRA.hcmcInd4"],
      highlightKeys: ["packagesMRA.hcmcH1", "packagesMRA.hcmcH2", "packagesMRA.hcmcH3", "packagesMRA.hcmcH4", "packagesMRA.hcmcH5"],
    },
  ];

  const steps = [
    { icon: FileCheck, step: "01", titleKey: "packagesMRA.step1Title", descKey: "packagesMRA.step1Desc" },
    { icon: DollarSign, step: "02", titleKey: "packagesMRA.step2Title", descKey: "packagesMRA.step2Desc" },
    { icon: Rocket, step: "03", titleKey: "packagesMRA.step3Title", descKey: "packagesMRA.step3Desc" },
    { icon: CheckCircle2, step: "04", titleKey: "packagesMRA.step4Title", descKey: "packagesMRA.step4Desc" },
  ];

  return (
    <section id="mra-grant" className="py-20 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("packagesMRA.sectionTag")}</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {t("packagesMRA.title1")} <span className="text-gradient-gold">{t("packagesMRA.titleHighlight")}</span>
          </h2>
        </div>

        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="mx-auto flex w-fit bg-navy-light/50 border border-gold/20 rounded-lg p-1 mb-8">
            <TabsTrigger value="packages" className="font-body font-semibold text-sm px-6 py-2.5 data-[state=active]:bg-gold data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md text-primary-foreground/70">
              {t("packagesMRA.tabPackages")}
            </TabsTrigger>
            <TabsTrigger value="mra" className="font-body font-semibold text-sm px-6 py-2.5 data-[state=active]:bg-gold data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md text-primary-foreground/70">
              {t("packagesMRA.tabMRA")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="packages">
            <div className="grid md:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.cityKey} className="group bg-navy-light/30 rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all">
                  <RotatingBg images={pkg.images} className="h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent z-10" />
                    <div className="absolute bottom-3 left-5 flex items-center gap-2 z-10">
                      <MapPin className="text-gold" size={18} />
                      <h3 className="font-heading text-xl font-bold text-primary-foreground">{t(pkg.cityKey)}</h3>
                    </div>
                    <div className="absolute top-3 right-3 bg-gold text-secondary-foreground px-2.5 py-0.5 rounded-full font-body text-xs font-bold z-10">{t("packagesMRA.funded")}</div>
                  </RotatingBg>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.industryKeys.map((key) => (
                        <span key={key} className="px-2.5 py-0.5 rounded-full border border-gold/30 text-xs font-body text-gold font-medium">{t(key)}</span>
                      ))}
                    </div>
                    <div className="space-y-2 mb-5">
                      {pkg.highlightKeys.map((key) => (
                        <div key={key} className="flex items-start gap-2">
                          <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={14} />
                          <span className="font-body text-xs text-primary-foreground/70">{t(key)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-gold text-secondary-foreground px-4 py-2.5 rounded-lg font-body font-semibold text-xs shadow-gold hover:opacity-90 transition-opacity">
                        <FileText size={14} /> {t("packagesMRA.viewDeck")}
                      </a>
                      <a href="#trips" className="inline-flex items-center justify-center gap-1.5 border border-gold/40 text-gold px-4 py-2.5 rounded-lg font-body font-semibold text-xs hover:bg-gold/10 transition-colors">
                        <Play size={14} /> {t("packagesMRA.watch")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 font-body text-primary-foreground/50 text-sm">
              {t("packagesMRA.notSure")} <a href="#contact" className="text-gold font-semibold hover:underline">{t("packagesMRA.bookConsult")}</a>.
            </p>
          </TabsContent>

          <TabsContent value="mra">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s) => (
                <div key={s.step} className="relative bg-navy-light/30 border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-colors">
                  <span className="font-heading text-4xl font-bold text-gold/15 absolute top-3 right-4">{s.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <s.icon className="text-gold" size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{t(s.titleKey)}</h3>
                  <p className="font-body text-primary-foreground/65 leading-relaxed text-xs">{t(s.descKey)}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gold/10 border border-gold/30 rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { value: t("packagesMRA.stat1Value"), label: t("packagesMRA.stat1Label") },
                  { value: t("packagesMRA.stat2Value"), label: t("packagesMRA.stat2Label") },
                  { value: t("packagesMRA.stat3Value"), label: t("packagesMRA.stat3Label") },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                    <div className="font-body text-xs text-primary-foreground/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <a
            href="#survey"
            className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
          >
            {t("packagesMRA.checkQualify")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PackagesMRASection;
