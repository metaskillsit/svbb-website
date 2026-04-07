import { useState, useRef } from "react";
import {
  ArrowRight,
  Globe,
  Handshake,
  Languages,
  Building2,
  Search,
  Users,
  Briefcase,
  Target,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Shield,
  Zap,
  MapPin,
  Send,
  MessageCircle,
  Download,
  Star,
  Phone,
  Mail,
  Linkedin,
  Check,
  X as XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import svbbLogo from "@/assets/svbb-logo.png";
import RotatingImage from "@/components/RotatingImage";
import bdHero1 from "@/assets/bd-hero-1.jpg";
import bdHero2 from "@/assets/bd-hero-2.jpg";
import bdHero3 from "@/assets/bd-hero-3.jpg";
import bdHero4 from "@/assets/bd-hero-4.jpg";

const bdHeroImages = [bdHero1, bdHero2, bdHero3, bdHero4];

/* ───── data ───── */

const whySvbb = [
  { icon: Globe, title: "Vietnam Market Understanding", desc: "Deep knowledge of Vietnam's business landscape, regulations, and commercial culture across key sectors." },
  { icon: Handshake, title: "Business Matching & Partner Access", desc: "Direct access to qualified distributors, agents, resellers, and strategic partners across Vietnam." },
  { icon: Languages, title: "Bilingual Cross-Border Execution", desc: "English-Vietnamese coordination for meetings, negotiations, and follow-ups — no communication gaps." },
  { icon: Building2, title: "SME-Friendly Project Structure", desc: "Packages scoped for Singapore SMEs — clear deliverables, fixed pricing, and structured timelines." },
];

const services = [
  { icon: Handshake, title: "Business Matching", desc: "Finding agents, distributors, strategic partners, resellers, or franchisees suited to your product, sector, and expansion goals." },
  { icon: Search, title: "Feasibility Studies & Market Research", desc: "Understanding market size, competitive landscape, regulatory requirements, and go-to-market viability before committing resources." },
  { icon: Briefcase, title: "In-Market BD Consultancy", desc: "Outsourced business development support — prospecting, outreach, meeting coordination, and pipeline management on the ground in Vietnam." },
  { icon: Target, title: "Distributor & Reseller Qualification", desc: "Systematic identification, qualification, and shortlisting of local distribution, reseller, or franchise partners with structured scorecards." },
];

const packages = [
  {
    name: "Vietnam Entry Lite",
    price: "S$14,800",
    best: "First-time SMEs testing Vietnam",
    items: [
      "Vietnam feasibility study",
      "Target segment review",
      "Partner/distributor longlist of 20",
      "Shortlist of 8",
      "Up to 3 business introduction meetings",
      "Final market entry recommendation deck",
    ],
  },
  {
    name: "Vietnam Channel Builder",
    price: "S$24,800",
    best: "SMEs seeking distributors, resellers, or local partners",
    badge: "Most Popular",
    items: [
      "Everything in Entry Lite",
      "Channel strategy",
      "Longlist of 30",
      "Shortlist of 10",
      "Outreach to 20 targets",
      "Up to 6 meetings",
      "Partner scorecard",
      "Negotiation brief",
    ],
  },
  {
    name: "Vietnam BD Accelerator",
    price: "S$34,800",
    best: "Companies wanting active in-market execution",
    items: [
      "Market research & feasibility review",
      "6 months fractional BD support",
      "30 qualified outreach targets",
      "Shortlist of 10",
      "Up to 10 meetings",
      "Monthly pipeline reports",
      "Partner follow-up support",
      "Opportunity tracker",
    ],
  },
  {
    name: "Vietnam Market Launch Pro",
    price: "S$46,800",
    best: "Near full-scope Vietnam BD project",
    items: [
      "Feasibility study",
      "Channel strategy",
      "Longlist of 40",
      "Shortlist of 12",
      "12–15 meetings",
      "6 months BD support",
      "Top-3 partner assessment",
      "Market entry action plan",
    ],
  },
];

const comparisonRows: { label: string; values: (string | boolean)[] }[] = [
  { label: "Market research", values: [true, true, true, true] },
  { label: "Partner longlist", values: ["20", "30", "30", "40"] },
  { label: "Shortlist", values: ["8", "10", "10", "12"] },
  { label: "Outreach support", values: [false, "20 targets", "30 targets", "40 targets"] },
  { label: "Meetings", values: ["3", "6", "10", "12–15"] },
  { label: "Monthly reporting", values: [false, false, true, true] },
  { label: "Fractional BD support", values: [false, false, "6 months", "6 months"] },
  { label: "Strategy deliverables", values: ["Recommendation deck", "Channel strategy + scorecard", "Pipeline tracker", "Full action plan"] },
  { label: "Recommended stage", values: ["Exploring", "Ready to partner", "In-market execution", "Full market launch"] },
];

const steps = [
  { step: "01", title: "Discover", desc: "Understand your business goals, product-market fit, and Vietnam entry objectives." },
  { step: "02", title: "Validate", desc: "Assess the market, customer segments, competitive landscape, and route to market." },
  { step: "03", title: "Connect", desc: "Identify, approach, and introduce the right local partners, distributors, or channels." },
  { step: "04", title: "Execute", desc: "Support meetings, negotiations, follow-ups, and ongoing pipeline development." },
];

const outcomes = [
  { icon: Target, title: "Better Partner Fit", desc: "Structured qualification reduces mismatches and ensures partners align with your goals, sector, and scale." },
  { icon: Zap, title: "Faster Market Validation", desc: "Skip months of self-research. Get a clear picture of market viability and route-to-market options early." },
  { icon: Shield, title: "Reduced Trial-and-Error", desc: "A structured engagement replaces ad-hoc efforts with a clear plan, measurable milestones, and qualified introductions." },
];

const faqs = [
  { q: "What types of companies are these packages suitable for?", a: "These packages are designed for Singapore-registered SMEs looking to enter or expand in Vietnam — whether you're exploring the market for the first time or ready to establish distribution channels." },
  { q: "Can SVBB help us find distributors in Vietnam?", a: "Yes. Distributor, reseller, and agent identification is a core part of our service. We systematically longlist, qualify, and shortlist potential partners based on your sector, product, and commercial requirements." },
  { q: "Do you support business matching and local meetings?", a: "Absolutely. We coordinate introductions, arrange meetings with qualified prospects, and provide bilingual support for discussions and follow-ups." },
  { q: "How long does a typical engagement take?", a: "Most packages run between 2 to 6 months depending on scope. Entry Lite is typically 8–10 weeks, while BD Accelerator and Market Launch Pro run for 6 months." },
  { q: "Are these packages suitable for MRA-supported overseas expansion projects?", a: "Our packages are structured with clear deliverables and timelines that align well with Singapore SME overseas expansion planning frameworks. We can discuss how this applies to your specific situation during a consultation." },
  { q: "What happens after the first package ends?", a: "We can continue with follow-on BD support, partner management, or escalate to a more comprehensive package. Many clients start with Entry Lite and progress to Channel Builder or BD Accelerator." },
];

/* ───── component ───── */

const BusinessDevelopment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", industry: "", goals: "" });
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToPackages = () => document.getElementById("bd-packages")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <section id="bd-hero" className="pt-28 pb-20 md:pb-28 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(var(--gold)/0.08)_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-gold mb-4">Business Development Services</span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                Vietnam Market Entry and Business Development for <span className="text-gradient-gold">Singapore SMEs</span>
              </h1>
              <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                From market validation to partner search and in-market execution, SVBB helps Singapore companies build the right foothold in Vietnam.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <button onClick={scrollToContact} className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity">
                  Book a Consultation <ArrowRight size={16} />
                </button>
                <button onClick={scrollToPackages} className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 transition-colors">
                  View Packages
                </button>
              </div>
              <p className="font-body text-primary-foreground/40 text-sm">Structured for SMEs. Built for Vietnam market entry.</p>
            </div>
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl h-[380px]">
              <RotatingImage images={bdHeroImages} alt="Business Development Professional" className="w-full h-full object-cover" width={960} height={640} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Why SVBB ── */}
      <section id="bd-why" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Why SVBB</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Your Bridge to the <span className="text-gradient-gold">Vietnam Market</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whySvbb.map((w) => (
              <div key={w.title} className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-gold/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <w.icon className="text-gold-dark" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{w.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="bd-services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Market Entry & <span className="text-gradient-gold">Business Development</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Practical, outcomes-focused services designed to help Singapore SMEs establish distribution, find partners, and build commercial traction in Vietnam.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl border border-border p-8 hover:border-gold/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <s.icon className="text-gold-dark" size={24} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packages ── */}
      <section id="bd-packages" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Packages</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Choose Your <span className="text-gradient-gold">Engagement</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Fixed-scope packages with clear deliverables — designed for Singapore SMEs at different stages of Vietnam market entry.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`bg-card rounded-2xl border p-6 relative flex flex-col ${pkg.badge ? "border-gold shadow-lg ring-2 ring-gold/30" : "border-border"}`}>
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground text-xs font-bold font-body px-3 py-1 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{pkg.name}</span>
                <div className="font-heading text-2xl font-bold text-foreground mt-2 mb-1">{pkg.price}</div>
                <p className="font-body text-muted-foreground text-xs mb-6">Best for: {pkg.best}</p>
                <ul className="space-y-2 flex-1">
                  {pkg.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle size={15} className="text-gold-dark mt-0.5 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToContact} className="mt-6 w-full bg-gradient-gold text-secondary-foreground py-2.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity">
                  Request Proposal
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Compare</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Package <span className="text-gradient-gold">Comparison</span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-body text-sm font-semibold text-foreground py-4 pr-4 min-w-[180px]"></th>
                  {packages.map((p) => (
                    <th key={p.name} className={`text-center font-body text-xs font-bold uppercase tracking-wider py-4 px-3 min-w-[140px] ${p.badge ? "text-gold-dark" : "text-muted-foreground"}`}>
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border/60">
                    <td className="font-body text-sm text-foreground py-3 pr-4">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="text-center py-3 px-3">
                        {val === true ? (
                          <Check size={16} className="text-gold-dark mx-auto" />
                        ) : val === false ? (
                          <XIcon size={14} className="text-muted-foreground/30 mx-auto" />
                        ) : (
                          <span className="font-body text-xs text-muted-foreground">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="bd-process" className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">Our Process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.step} className="relative bg-navy-light/30 border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-colors">
                <span className="font-heading text-5xl font-bold text-gold/10 absolute top-3 right-4">{s.step}</span>
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  {[Search, CheckCircle, Handshake, Briefcase][i] && (() => {
                    const Icon = [Search, CheckCircle, Handshake, Briefcase][i];
                    return <Icon className="text-gold" size={20} />;
                  })()}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">{s.title}</h3>
                <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Outcomes ── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Outcomes</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              What You <span className="text-gradient-gold">Gain</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {outcomes.map((o) => (
              <div key={o.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <o.icon className="text-gold-dark" size={28} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{o.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead Magnet ── */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-navy-light/30 border border-gold/20 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Download className="text-gold" size={28} />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Vietnam Market Entry Checklist
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm mb-6 max-w-lg mx-auto">
              Download our free checklist covering the key steps, documents, and considerations for Singapore SMEs planning a Vietnam market entry.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your business email"
                className="flex-1 px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
              />
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-3 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity whitespace-nowrap">
                <Download size={16} /> Get Checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="bd-faq" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-body text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-gold-dark shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section id="bd-contact" ref={contactRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Get Started</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Start your Vietnam expansion with the right <span className="text-gradient-gold">local partner.</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Tell us about your expansion goals and we'll recommend the right package and approach for your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Email</p>
                    <a href="mailto:info@svbb.sg" className="font-body text-sm text-gold-dark hover:underline">info@svbb.sg</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Singapore Office</p>
                    <p className="font-body text-sm text-muted-foreground">114 Lavender Street #07-74 CT Hub 2, Singapore 338729</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Speak with SVBB</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Name *</label>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="John Tan" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Company *</label>
                    <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Acme Pte Ltd" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Email *</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="john@acme.sg" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Phone</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="+65 9123 4567" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground block mb-1.5">Target Industry</label>
                  <input value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="e.g. F&B, Technology, Manufacturing" />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground block mb-1.5">Expansion Goals</label>
                  <textarea value={formData.goals} onChange={(e) => setFormData({ ...formData, goals: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 h-24 resize-none" placeholder="Tell us about your Vietnam expansion plans..." />
                </div>
                <button type="submit" className="w-full bg-gradient-gold text-secondary-foreground py-3 rounded-lg font-body font-semibold shadow-gold hover:opacity-90 transition-opacity">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-navy border-t border-gold/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <img src={svbbLogo} alt="SVBB Logo" className="h-10 w-auto mb-3" />
              <p className="font-body text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
                SVBB (Singapore Vietnam Business Bridge) — helping Singapore SMEs enter Vietnam with structured market entry, business matching, and in-market execution support.
              </p>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-3">Quick Links</h4>
              <div className="space-y-2">
                {["Services", "Packages", "Process", "FAQ", "Contact"].map((l) => (
                  <a key={l} href={`#bd-${l.toLowerCase()}`} className="block font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-3">Get In Touch</h4>
              <div className="space-y-3">
                <a href="mailto:info@svbb.sg" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                  <Mail size={14} /> info@svbb.sg
                </a>
                <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a href="https://linkedin.com/company/svbb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/10 mt-8 pt-6 text-center">
            <p className="font-body text-xs text-primary-foreground/30">© {new Date().getFullYear()} SVBB. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessDevelopment;
