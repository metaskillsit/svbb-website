import { ExternalLink } from "lucide-react";
import partnerTheVoid from "@/assets/partner-thevoid.png";
import partnerTNT from "@/assets/partner-tnt.png";
import partnerSHB from "@/assets/partner-shb.png";
import partnerHanoisme from "@/assets/partner-hanoisme.jpeg";

const vietnamPartners = [
  {
    name: "The Void",
    logo: partnerTheVoid,
    url: "https://thevoid.vn/",
    role: "Co-Creation Space & Startup Matching",
    desc: "Board-as-a-Service for SG companies entering Vietnam. Co-working, startup matching, and innovation partnerships.",
  },
  {
    name: "TNT Group",
    logo: partnerTNT,
    url: "https://www.ttgroup.com.vn/",
    role: "Vietnamese Conglomerate",
    desc: "Major player in real estate, energy, agriculture, and finance — potential JV and investment partner for SG businesses.",
  },
  {
    name: "SHB Bank",
    logo: partnerSHB,
    url: "https://shb.com.vn/",
    role: "Saigon-Hanoi Commercial Bank",
    desc: "Trade finance, corporate banking, and account setup for Singapore businesses operating in Vietnam.",
  },
  {
    name: "Hanoisme",
    logo: partnerHanoisme,
    url: "https://hanoisme.vn/",
    role: "Key Strategic Partner",
    desc: "Hanoi Association of Small and Medium Enterprises — connecting Singapore businesses with Hanoi's SME ecosystem since 1995.",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Vietnam Partners</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Our Vietnam <span className="text-gradient-gold">Ecosystem</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Land in Vietnam with the right connections from Day 1.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {vietnamPartners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-8 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 flex flex-col"
            >
              <div className="w-full h-16 flex items-center justify-start mb-5">
                <img src={p.logo} alt={p.name} className="max-h-14 max-w-[140px] object-contain" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-1">{p.name}</h3>
              <p className="font-body text-gold-dark text-xs font-semibold uppercase tracking-wide mb-3">{p.role}</p>
              <p className="font-body text-muted-foreground text-sm leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-5 flex items-center gap-1 text-gold text-sm font-body font-semibold group-hover:gap-2 transition-all">
                Learn More <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
