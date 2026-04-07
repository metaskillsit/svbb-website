import { ArrowLeft, CheckCircle, Building2, FileText, Shield, Calculator, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const basicFeatures = [
  {
    icon: FileText,
    title: "Investment Registration Certificate (IRC)",
    items: ["Consulting and documentation for IRC approval"],
    time: "Processing time: 45 business days",
  },
  {
    icon: Building2,
    title: "Business Registration Certificate (ERC)",
    items: [
      "100% foreign-owned enterprise establishment",
      "Company seal production",
      "Customized company charter drafting",
    ],
    time: "Processing time: 20–22 business days (from submission)",
  },
  {
    icon: Shield,
    title: "Essential Business Setup",
    items: ["Digital signature (4 yrs), e-invoices (1,000), bank accounts"],
  },
  {
    icon: FileText,
    title: "Investment Reporting & Compliance",
    items: ["FDI portal accounts and quarterly/annual reporting setup"],
  },
  {
    icon: CheckCircle,
    title: "Post-Establishment Advisory & Ongoing Compliance",
    items: [
      "Ongoing compliance consulting and reporting guidance",
      "Legal consulting, contract review, labor & commercial law",
    ],
  },
];

const advancedExtras = [
  { label: "IRC processing time", value: "30–35 business days (faster)" },
  { label: "ERC processing time", value: "12–14 business days (from submission)" },
];

const taxBasicFeatures = [
  {
    icon: Calculator,
    title: "Tax Declaration Services",
    items: [
      "Monthly/quarterly: VAT, PIT",
      "Annual: Financial statements, CIT, PIT finalization",
      "Bookkeeping and software updates",
      "Document archiving",
      "Tax policy updates and consultation",
      "Tax dispute resolution support",
    ],
  },
  {
    icon: FileText,
    title: "Accounting Services",
    items: ["Monthly/quarterly financial statements tailored to your business"],
  },
  {
    icon: Users,
    title: "Social Insurance Administration",
    items: ["Employee enrollment, adjustments, and terminations"],
    note: "For companies with fewer than 10 employees",
  },
];

const SetupCompany = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-navy">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Setup & Operate Your <span className="text-gradient-gold">Company in Vietnam</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            End-to-end business formation, legal setup, tax compliance, and accounting — so you can focus on growing your business in Vietnam.
          </p>
        </div>
      </section>

      {/* Business Formation Packages */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Business Formation & Legal Setup</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Choose Your <span className="text-gradient-gold">Package</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-6">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">Basic Package</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">US$ 4,000<span className="text-muted-foreground text-base font-normal"> / Year</span></div>
              </div>
              <div className="space-y-6">
                {basicFeatures.map((f) => (
                  <div key={f.title}>
                    <div className="flex items-center gap-2 mb-2">
                      <f.icon className="text-gold shrink-0" size={18} />
                      <h3 className="font-heading text-sm font-bold text-foreground">{f.title}</h3>
                    </div>
                    <ul className="space-y-1 ml-7">
                      {f.items.map((item) => (
                        <li key={item} className="font-body text-muted-foreground text-sm flex items-start gap-2">
                          <CheckCircle className="text-gold/60 shrink-0 mt-0.5" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {f.time && <p className="ml-7 mt-1 font-body text-xs text-gold-dark font-medium">{f.time}</p>}
                  </div>
                ))}
              </div>
              <p className="mt-6 font-body text-xs text-muted-foreground italic">Additional services customized to your specific needs</p>
            </div>

            {/* Advanced */}
            <div className="bg-card rounded-2xl border-2 border-gold/40 p-8 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold text-secondary-foreground text-[10px] font-body font-bold uppercase tracking-widest">
                Recommended
              </div>
              <div className="mb-6">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">Advanced Package</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">US$ 5,000<span className="text-muted-foreground text-base font-normal"> / Year</span></div>
              </div>
              <div className="space-y-6">
                {basicFeatures.map((f) => (
                  <div key={f.title}>
                    <div className="flex items-center gap-2 mb-2">
                      <f.icon className="text-gold shrink-0" size={18} />
                      <h3 className="font-heading text-sm font-bold text-foreground">{f.title}</h3>
                    </div>
                    <ul className="space-y-1 ml-7">
                      {f.items.map((item) => (
                        <li key={item} className="font-body text-muted-foreground text-sm flex items-start gap-2">
                          <CheckCircle className="text-gold/60 shrink-0 mt-0.5" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg bg-gold/5 border border-gold/20">
                <p className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest mb-2">Faster Processing</p>
                {advancedExtras.map((e) => (
                  <p key={e.label} className="font-body text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">{e.label}:</span> {e.value}
                  </p>
                ))}
              </div>
              <p className="mt-4 font-body text-xs text-muted-foreground italic">Additional services customized to your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax & Accounting Packages */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Tax Compliance & Accounting</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Stay <span className="text-gradient-gold">Compliant</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tax Basic */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-6">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">Basic Package</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">US$ 4,000<span className="text-muted-foreground text-base font-normal"> / Year</span></div>
                <p className="font-body text-xs text-muted-foreground mt-1">For companies with fewer than 10 employees</p>
              </div>
              <div className="space-y-6">
                {taxBasicFeatures.map((f) => (
                  <div key={f.title}>
                    <div className="flex items-center gap-2 mb-2">
                      <f.icon className="text-gold shrink-0" size={18} />
                      <h3 className="font-heading text-sm font-bold text-foreground">{f.title}</h3>
                    </div>
                    <ul className="space-y-1 ml-7">
                      {f.items.map((item) => (
                        <li key={item} className="font-body text-muted-foreground text-sm flex items-start gap-2">
                          <CheckCircle className="text-gold/60 shrink-0 mt-0.5" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Tax Advanced */}
            <div className="bg-card rounded-2xl border-2 border-gold/40 p-8 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold text-secondary-foreground text-[10px] font-body font-bold uppercase tracking-widest">
                Recommended
              </div>
              <div className="mb-6">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">Advanced Package</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">US$ 5,000<span className="text-muted-foreground text-base font-normal"> / Year</span></div>
                <p className="font-body text-xs text-muted-foreground mt-1">For companies with 10–20 employees</p>
              </div>
              <div className="space-y-6">
                {taxBasicFeatures.map((f) => (
                  <div key={f.title}>
                    <div className="flex items-center gap-2 mb-2">
                      <f.icon className="text-gold shrink-0" size={18} />
                      <h3 className="font-heading text-sm font-bold text-foreground">{f.title}</h3>
                    </div>
                    <ul className="space-y-1 ml-7">
                      {f.items.map((item) => (
                        <li key={item} className="font-body text-muted-foreground text-sm flex items-start gap-2">
                          <CheckCircle className="text-gold/60 shrink-0 mt-0.5" size={14} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="py-12 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <Star className="text-gold" size={24} />
            <span className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">Save 10%</span>
            <Star className="text-gold" size={24} />
          </div>
          <p className="font-body text-primary-foreground/80 text-lg mb-2">Receive a 10% discount when you prepay for one full year of service!</p>
          <p className="font-body text-primary-foreground/50 text-sm">Services are designed for micro, small, and medium-sized enterprises. All prices listed exclude VAT.</p>
          <a
            href="/#contact"
            className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all"
          >
            Schedule a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SetupCompany;
