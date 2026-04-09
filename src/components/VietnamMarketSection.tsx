import { useTranslation } from "react-i18next";
import RotatingImage from "./RotatingImage";
import vietnamStreet from "@/assets/vietnam-street-hcmc.jpg";
import vietnamMarket from "@/assets/vietnam-floating-market.jpg";
import vietnamBitexco from "@/assets/vietnam-bitexco-skyline.jpg";
import vietnamAodai from "@/assets/vietnam-aodai-rice.jpg";
import vietnamNight from "@/assets/vietnam-night-market.jpg";

const vietnamImages = [vietnamStreet, vietnamMarket, vietnamBitexco, vietnamAodai, vietnamNight];

const VietnamMarketSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: t("vietnamMarket.gdpValue"), label: t("vietnamMarket.gdpLabel"), source: t("vietnamMarket.gdpSource") },
    { value: t("vietnamMarket.growthValue"), label: t("vietnamMarket.growthLabel"), source: t("vietnamMarket.growthSource") },
    { value: t("vietnamMarket.popValue"), label: t("vietnamMarket.popLabel"), source: t("vietnamMarket.popSource") },
    { value: t("vietnamMarket.percapValue"), label: t("vietnamMarket.percapLabel"), source: t("vietnamMarket.percapSource") },
    { value: t("vietnamMarket.tradeValue"), label: t("vietnamMarket.tradeLabel"), source: t("vietnamMarket.tradeSource") },
    { value: t("vietnamMarket.bilateralValue"), label: t("vietnamMarket.bilateralLabel"), source: t("vietnamMarket.bilateralSource") },
  ];

  const opportunities = [
    { title: t("vietnamMarket.mfgTitle"), desc: t("vietnamMarket.mfgDesc") },
    { title: t("vietnamMarket.consumerTitle"), desc: t("vietnamMarket.consumerDesc") },
    { title: t("vietnamMarket.techTitle"), desc: t("vietnamMarket.techDesc") },
    { title: t("vietnamMarket.infraTitle"), desc: t("vietnamMarket.infraDesc") },
  ];

  return (
    <section id="vietnam-market" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("vietnamMarket.sectionTag")}</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("vietnamMarket.title1")} <span className="text-gradient-gold">{t("vietnamMarket.titleHighlight")}</span> {t("vietnamMarket.title2")}
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            {t("vietnamMarket.desc")}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-xl p-5 text-center border border-border">
              <div className="font-heading text-xl md:text-2xl font-bold text-navy">{s.value}</div>
              <div className="font-body text-xs text-muted-foreground mt-1">{s.label}</div>
              <div className="font-body text-[10px] text-gold-dark mt-1">{s.source}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden h-[400px] md:h-auto">
            <RotatingImage
              images={vietnamImages}
              alt="Vietnam market and street life"
              className="w-full h-full object-cover"
              interval={8000}
              width={800}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{t("vietnamMarket.keyOpportunities")}</h3>
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-card rounded-lg p-5 border border-border">
                <h4 className="font-heading text-lg font-bold text-navy mb-2">{opp.title}</h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{opp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VietnamMarketSection;
