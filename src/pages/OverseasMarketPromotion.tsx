import { ArrowLeft, Star, Megaphone, Newspaper, Users, Palette, CheckCircle, Globe, Handshake, BarChart3, Languages } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import heroPromo from "@/assets/hero-promo.jpg";

const OverseasMarketPromotion = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative <section className="relative min-h-[85vh] flex items-end overflow-hidden"> flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroPromo} alt="Market Promotion" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Overseas Market <span className="text-gradient-gold">Promotion</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Practical go-to-market support for Singapore companies entering Vietnam.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            SVBB supports companies with overseas promotion through paid digital campaigns, public relations, trade fair participation, and localized marketing materials — giving your business a structured, professional presence in the Vietnam market.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Our Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Four Pillars of <span className="text-gradient-gold">Market Entry</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Megaphone, title: "Digital Marketing Campaigns", desc: "Launch targeted Google, Facebook, and LinkedIn advertising campaigns to generate awareness, leads, and market traction in Vietnam." },
              { icon: Newspaper, title: "Public Relations Campaigns", desc: "Build credibility in a new market through strategic media outreach, announcements, thought leadership, and reputation building." },
              { icon: Users, title: "Trade Fair Participation", desc: "Support your overseas trade fair presence from planning to execution, whether physical or virtual." },
              { icon: Palette, title: "Marketing Collateral", desc: "Equip your Vietnam expansion with localized materials that help your team sell, present, and promote effectively." },
            ].map((s) => (
              <div key={s.title} className="bg-card rounded-2xl border border-border p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="text-gold-dark" size={28} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A. Digital Marketing Campaigns */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Digital Marketing Campaigns</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Advertising <span className="text-gradient-gold">Packages</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter Ads", price: "S$1,800 setup + S$900/mo", best: "First market testing campaign",
                items: ["1 channel", "1 landing page", "Campaign setup", "Basic targeting", "Monthly report"],
              },
              {
                name: "Growth Ads", price: "S$3,500 setup + S$1,800/mo", best: "Multi-channel lead generation", highlight: true,
                items: ["2 channels", "Retargeting", "Creative variations", "Funnel setup", "Fortnightly optimization"],
              },
              {
                name: "Expansion Ads", price: "S$6,000 setup + 10% of ad spend (min S$3,000/mo)", best: "Serious B2B or regional expansion",
                items: ["Google + Meta + LinkedIn", "Audience testing", "Lead-gen workflows", "Bilingual reporting"],
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`bg-card rounded-2xl border p-8 relative ${pkg.highlight ? "border-gold shadow-lg ring-2 ring-gold/30" : "border-border"}`}>
                {pkg.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground border-0">Best Value</Badge>}
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{pkg.name}</span>
                <div className="font-heading text-xl font-bold text-foreground mt-2 mb-1">{pkg.price}</div>
                <p className="font-body text-muted-foreground text-xs mb-6">Best for: {pkg.best}</p>
                <ul className="space-y-2">
                  {pkg.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-gold-dark mt-0.5 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B. PR Campaigns */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Public Relations Campaigns</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              PR <span className="text-gradient-gold">Packages</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "PR Launch", price: "S$3,000 one-time",
                items: ["1 press release", "Media list", "Outreach", "Campaign summary report"],
              },
              {
                name: "PR Momentum", price: "S$6,500 per campaign", highlight: true,
                items: ["2-month campaign", "2 press angles", "Founder interview pitching", "1 thought-leadership article", "Monthly report"],
              },
              {
                name: "PR Authority", price: "S$10,000 – S$12,000 per campaign",
                items: ["3-month campaign", "Strategic narrative development", "Media outreach", "Spokesperson support", "Campaign reporting"],
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`bg-card rounded-2xl border p-8 relative ${pkg.highlight ? "border-gold shadow-lg ring-2 ring-gold/30" : "border-border"}`}>
                {pkg.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground border-0">Best Value</Badge>}
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{pkg.name}</span>
                <div className="font-heading text-xl font-bold text-foreground mt-2 mb-1">{pkg.price}</div>
                <ul className="space-y-2 mt-4">
                  {pkg.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-gold-dark mt-0.5 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* C. Trade Fair */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Trade Fair Participation</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Trade Fair <span className="text-gradient-gold">Packages</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Virtual Fair Support", price: "S$2,500 – S$4,000 per event",
                items: ["Virtual booth support", "Profile write-up", "Deck polishing", "Meeting coordination", "Lead log"],
              },
              {
                name: "Physical Fair Lite", price: "S$5,500 – S$7,500", sub: "Excl. booth and travel", highlight: true,
                items: ["Event selection support", "Registration", "Booth coordination", "Collateral planning", "Onsite schedule support"],
              },
              {
                name: "Physical Fair Full-Service", price: "S$10,000 – S$15,000", sub: "Excl. booth, travel, and hotel",
                items: ["End-to-end fair management", "Booth vendor coordination", "Collateral support", "Interpreter coordination", "Post-event report"],
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`bg-card rounded-2xl border p-8 relative ${pkg.highlight ? "border-gold shadow-lg ring-2 ring-gold/30" : "border-border"}`}>
                {pkg.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground border-0">Best Value</Badge>}
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{pkg.name}</span>
                <div className="font-heading text-xl font-bold text-foreground mt-2 mb-1">{pkg.price}</div>
                {(pkg as any).sub && <p className="font-body text-muted-foreground text-xs">{(pkg as any).sub}</p>}
                <ul className="space-y-2 mt-4">
                  {pkg.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-gold-dark mt-0.5 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. Marketing Collateral */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Marketing Collateral & Promotional Materials</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Collateral <span className="text-gradient-gold">Packages</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Collateral Starter", price: "S$1,500 – S$2,500",
                items: ["1 brochure or company profile", "Copy adaptation", "Light design refresh", "PDF delivery"],
              },
              {
                name: "Market Entry Kit", price: "S$4,000 – S$6,000", highlight: true,
                items: ["Brochure", "1 sales deck", "2 ad creatives", "1 landing page copy set", "Bilingual adaptation"],
              },
              {
                name: "Vietnam Launch Kit", price: "S$7,500 – S$10,000",
                items: ["Full message adaptation", "Brochure", "Sales deck", "Booth visuals", "Social creatives", "PR fact sheet"],
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`bg-card rounded-2xl border p-8 relative ${pkg.highlight ? "border-gold shadow-lg ring-2 ring-gold/30" : "border-border"}`}>
                {pkg.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground border-0">Best Value</Badge>}
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{pkg.name}</span>
                <div className="font-heading text-xl font-bold text-foreground mt-2 mb-1">{pkg.price}</div>
                <ul className="space-y-2 mt-4">
                  {pkg.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle size={16} className="text-gold-dark mt-0.5 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundled Packages */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">Bundled Packages</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
              Save with a <span className="text-gradient-gold">Bundle</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Vietnam Test Market", price: "S$6,500 – S$7,500",
                includes: "Starter Ads + PR Launch + Collateral Starter",
              },
              {
                name: "Vietnam Growth Launch", price: "S$13,000 – S$16,000",
                includes: "Growth Ads + PR Momentum + Market Entry Kit", highlight: true,
              },
              {
                name: "Vietnam Market Entry Pro", price: "S$18,000 – S$22,000",
                includes: "Expansion Ads + PR Authority + Physical Fair Lite or Vietnam Launch Kit",
              },
            ].map((pkg) => (
              <div key={pkg.name} className={`rounded-2xl border p-8 relative ${pkg.highlight ? "bg-gold/10 border-gold shadow-lg ring-2 ring-gold/30" : "bg-navy-light/50 border-gold/20"}`}>
                {pkg.highlight && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground border-0">Best Value</Badge>}
                <span className="font-body text-xs font-semibold text-gold uppercase tracking-widest">{pkg.name}</span>
                <div className="font-heading text-2xl font-bold text-primary-foreground mt-2 mb-4">{pkg.price}</div>
                <p className="font-body text-primary-foreground/70 text-sm">{pkg.includes}</p>
                <a
                  href="#cta"
                  className="mt-6 inline-block bg-gradient-gold text-secondary-foreground px-6 py-2.5 rounded-md text-sm font-semibold font-body shadow-gold hover:opacity-90 transition-opacity"
                >
                  Request Proposal
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
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Why SVBB</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Your Partner for <span className="text-gradient-gold">Vietnam Market Entry</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Globe, text: "Singapore-based business understanding" },
              { icon: Handshake, text: "Vietnam market execution support" },
              { icon: BarChart3, text: "Practical packages for SMEs" },
              { icon: Languages, text: "Bilingual campaign and collateral coordination" },
              { icon: Star, text: "Structured overseas market entry support" },
            ].map((p) => (
              <div key={p.text} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <p.icon className="text-gold-dark" size={24} />
                </div>
                <p className="font-body text-sm text-foreground font-medium">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Planning your Vietnam <span className="text-gradient-gold">market entry?</span>
          </h2>
          <p className="font-body text-primary-foreground/70 text-lg mb-8">
            Speak with SVBB to scope a package aligned to your business goals, timeline, and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="/#contact"
              className="bg-gradient-gold text-secondary-foreground px-8 py-3 rounded-md text-sm font-semibold font-body shadow-gold hover:opacity-90 transition-opacity"
            >
              Request Proposal
            </a>
            <a
              href="/#contact"
              className="border border-gold/40 text-gold hover:bg-gold/10 px-8 py-3 rounded-md text-sm font-semibold font-body transition-colors"
            >
              Book Consultation
            </a>
          </div>
          <p className="font-body text-primary-foreground/50 text-xs">
            Bespoke packages can be tailored for specific sectors and campaign goals.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OverseasMarketPromotion;
