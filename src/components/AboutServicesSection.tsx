import { Briefcase, Globe, MapPin, Users, TrendingUp, Handshake } from "lucide-react";
import svbbLogo from "@/assets/svbb-logo.png";

const services = [
  { icon: Globe, title: "Market Entry Strategy", desc: "Tailored market entry plans, feasibility studies, and go-to-market roadmaps." },
  { icon: Briefcase, title: "MRA Grant Application", desc: "End-to-end support for Enterprise SG's MRA Grant — up to 70% funding." },
  { icon: Handshake, title: "Networking & Partnerships", desc: "Extensive network of Vietnamese industry leaders and local business partners." },
  { icon: TrendingUp, title: "Investment Sourcing", desc: "Identify and evaluate investment opportunities in Vietnam." },
  { icon: MapPin, title: "Business Learning Trips", desc: "Custom-curated trips with site visits, workshops, and networking events." },
  { icon: Users, title: "Cross-Border M&A", desc: "Advisory for mergers, acquisitions, and JVs between SG and VN enterprises." },
];

const AboutServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* About column */}
          <div className="lg:col-span-2">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">About SVBB</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 leading-tight">
              Bridging Singapore & <span className="text-gradient-gold">Vietnam</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 text-base leading-relaxed">
              SVBB is a premier consulting firm dedicated to fostering strong commercial ties between Singapore and Vietnam.
              We provide tailored services that help businesses navigate international expansion into Vietnam.
            </p>

            <div className="mt-6 bg-card rounded-xl p-6 border border-border">
              <img src={svbbLogo} alt="SVBB Logo" className="w-32 h-auto mb-4 mx-auto" loading="lazy" />
              <p className="font-body text-xs text-muted-foreground text-center">
                <strong className="text-foreground">SG:</strong> 114 Lavender St #07-74 CT Hub 2, S338729
              </p>
              <p className="font-body text-xs text-muted-foreground text-center mt-1">
                <strong className="text-foreground">VN:</strong> 66 Tran Trong Cung St, District 7, HCMC
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mt-6">
              {[
                { value: "50+", label: "Trips Led" },
                { value: "11+", label: "Years Combined" },
                { value: "3K+", label: "Clients Served" },
              ].map((s) => (
                <div key={s.label} className="text-center bg-card rounded-lg p-3 border border-border">
                  <div className="font-heading text-lg font-bold text-navy">{s.value}</div>
                  <div className="font-body text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">What We Do</span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-3 mb-6">
              Comprehensive <span className="text-gradient-gold">Business Solutions</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="group bg-card rounded-xl p-5 border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                    <s.icon className="text-gold" size={20} />
                  </div>
                  <h4 className="font-heading text-base font-bold text-foreground mb-1.5">{s.title}</h4>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutServicesSection;
