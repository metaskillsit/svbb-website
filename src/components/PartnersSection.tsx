import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import partnerTheVoid from "@/assets/partner-thevoid.png";
import partnerTNT from "@/assets/partner-tnt.png";
import partnerSHB from "@/assets/partner-shb.png";

const PartnersSection = () => {
  const { t } = useTranslation();

  const vietnamPartners = [
    {
      name: "The Void",
      logo: partnerTheVoid,
      url: "https://thevoid.vn/",
      role: t("partners.theVoidRole"),
      desc: t("partners.theVoidDesc"),
    },
    {
      name: "TNT Group",
      logo: partnerTNT,
      url: "https://www.ttgroup.com.vn/",
      role: t("partners.tntRole"),
      desc: t("partners.tntDesc"),
    },
    {
      name: "SHB Bank",
      logo: partnerSHB,
      url: "https://shb.com.vn/",
      role: t("partners.shbRole"),
      desc: t("partners.shbDesc"),
    },
  ];

  return (
    <section id="partners" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("partners.sectionTag")}</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-3">
            {t("partners.title1")} <span className="text-gradient-gold">{t("partners.titleHighlight")}</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-3xl mx-auto">{t("partners.desc")} {t("investorsExtras.partnersAppend")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {vietnamPartners.map((p) => (
            <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="group bg-card rounded-xl p-5 sm:p-8 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 flex flex-col">
              <div className="w-full h-12 sm:h-16 flex items-center justify-start mb-4 sm:mb-5">
                <img src={p.logo} alt={p.name} className="max-h-10 sm:max-h-14 max-w-[120px] sm:max-w-[140px] object-contain" />
              </div>
              <h3 className="font-heading text-base sm:text-lg font-bold text-foreground mb-1">{p.name}</h3>
              <p className="font-body text-gold-dark text-[10px] sm:text-xs font-semibold uppercase tracking-wide mb-2 sm:mb-3">{p.role}</p>
              <p className="font-body text-muted-foreground text-xs sm:text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-4 sm:mt-5 flex items-center gap-1 text-gold text-xs sm:text-sm font-body font-semibold group-hover:gap-2 transition-all">
                {t("partners.learnMore")} <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
