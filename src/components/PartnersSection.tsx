import { ExternalLink, Building2, Landmark, Cpu, CreditCard } from "lucide-react";

const partners = [
  {
    name: "VietCham Singapore",
    icon: Building2,
    url: "https://vietcham.org.sg/",
    role: "Singapore-Vietnam Chamber of Commerce",
    desc: "Networking, events, and policy advocacy — connecting businesses across borders with government-level access.",
  },
  {
    name: "The Void",
    icon: Cpu,
    url: "https://thevoid.vn/",
    role: "Co-Creation Space & Startup Matching",
    desc: "Board-as-a-Service for SG companies entering Vietnam. Co-working, startup matching, and innovation partnerships.",
  },
  {
    name: "T&T Group",
    icon: Landmark,
    url: "https://www.ttgroup.com.vn/",
    role: "Vietnamese Conglomerate",
    desc: "Major player in real estate, energy, agriculture, and finance — potential JV and investment partner for SG businesses.",
  },
  {
    name: "SHB Bank",
    icon: CreditCard,
    url: "https://shb.com.vn/",
    role: "Saigon-Hanoi Commercial Bank",
    desc: "Trade finance, corporate banking, and account setup for Singapore businesses operating in Vietnam.",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Our Ecosystem</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Vietnam-Side <span className="text-gradient-gold">Partners</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Our Vietnam ecosystem ensures you land with the right connections from Day 1.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-card rounded-xl p-8 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <p.icon className="text-gold" size={24} />
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
