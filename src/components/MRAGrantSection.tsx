import { CheckCircle2, DollarSign, FileCheck, Rocket } from "lucide-react";
import esgBadge from "@/assets/enterprise-sg-badge.png";

const steps = [
  {
    icon: FileCheck,
    step: "01",
    title: "Eligibility Check",
    desc: "We assess your business eligibility for the MRA Grant — Singapore-registered SMEs with at least 30% local shareholding qualify.",
  },
  {
    icon: DollarSign,
    step: "02",
    title: "Grant Application",
    desc: "SVBB handles the full application process with Enterprise SG — covering up to 70% of qualifying costs, capped at S$100,000 per new market.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Market Entry Execution",
    desc: "From market research, business matching to setting up your Vietnam entity — we execute your market entry plan end-to-end.",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Ongoing Support",
    desc: "Post-entry advisory, compliance support, and continued networking to ensure your Vietnam operations thrive.",
  },
];

const MRAGrantSection = () => {
  return (
    <section id="mra-grant" className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">Government-Backed Funding</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            MRA Grant — <span className="text-gradient-gold">Up to 70% Funded</span>
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            The Market Readiness Assistance (MRA) Grant by Enterprise Singapore helps SMEs defray costs of overseas market expansion. SVBB is your trusted vendor to maximise this grant for Vietnam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.step} className="relative bg-navy-light/30 border border-gold/20 rounded-xl p-8 hover:border-gold/50 transition-colors">
              <span className="font-heading text-5xl font-bold text-gold/15 absolute top-4 right-6">{s.step}</span>
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-5">
                <s.icon className="text-gold" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
              <p className="font-body text-primary-foreground/65 leading-relaxed text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-12 bg-gold/10 border border-gold/30 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold">70%</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-2">Of qualifying costs covered</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold">S$100K</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-2">Max grant per new market</div>
            </div>
            <div>
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold">100%</div>
              <div className="font-body text-sm text-primary-foreground/60 mt-2">Application support by SVBB</div>
            </div>
          </div>
        </div>

        {/* CTA to survey */}
        <div className="text-center mt-10">
          <a
            href="#survey"
            className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-4 rounded-lg font-body font-semibold text-base shadow-gold hover:opacity-90 transition-opacity"
          >
            Check If You Qualify →
          </a>
        </div>
      </div>
    </section>
  );
};

export default MRAGrantSection;
