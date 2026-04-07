import { ArrowLeft, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

      {/* Business Formation & Legal Setup */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Business Formation & Legal Setup</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Choose Your <span className="text-gradient-gold">Package</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Basic Package */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">Basic Package</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  SGD 5,400<span className="text-muted-foreground text-base font-normal"> / Year</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">01. Investment Registration Certificate (IRC)</h3>
                  <p className="font-body text-muted-foreground text-sm">Consulting and documentation for Investment Registration Certificate(*) approval</p>
                  <p className="font-body text-gold-dark text-xs font-medium mt-2">Processing time: 45 business days</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">02. Business Registration Certificate (ERC)</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• 100% foreign-owned enterprise establishment</li>
                    <li className="font-body text-muted-foreground text-sm">• Company seal production</li>
                  </ul>
                  <p className="font-body text-gold-dark text-xs font-medium mt-2">Processing time: 20–22 business days (from submission)</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">03. Essential Business Setup</h3>
                  <p className="font-body text-muted-foreground text-sm">Digital signature (4 yrs), e-invoices (1,000), bank accounts</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">04. Investment Reporting & Compliance</h3>
                  <p className="font-body text-muted-foreground text-sm">FDI portal accounts and quarterly/annual reporting setup</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">05. Post-Establishment Advisory & Ongoing Compliance</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• Ongoing compliance consulting and reporting guidance</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8 pt-6 border-t border-border font-body text-xs text-muted-foreground italic">Additional services customized to your specific needs</p>
            </div>

            {/* Advanced Package */}
            <div className="bg-card rounded-2xl border-2 border-gold/40 p-8 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold text-secondary-foreground text-[10px] font-body font-bold uppercase tracking-widest">
                Recommended
              </div>

              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">Advanced Package</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  SGD 6,750<span className="text-muted-foreground text-base font-normal"> / Year</span>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">01. Investment Registration Certificate (IRC)</h3>
                  <p className="font-body text-muted-foreground text-sm">Consulting and documentation for Investment Registration Certificate(*) approval</p>
                  <p className="font-body text-gold-dark text-xs font-medium mt-2">Processing time: 30–35 business days</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">02. Business Registration Certificate (ERC)</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• 100% foreign-owned enterprise establishment</li>
                    <li className="font-body text-muted-foreground text-sm">• Company seal production</li>
                    <li className="font-body text-muted-foreground text-sm">• Customized company charter drafting</li>
                  </ul>
                  <p className="font-body text-gold-dark text-xs font-medium mt-2">Processing time: 12–14 business days (from submission)</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">03. Essential Business Setup</h3>
                  <p className="font-body text-muted-foreground text-sm">Digital signature (4 yrs), e-invoices (1,000), bank accounts</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">04. Investment Reporting & Compliance</h3>
                  <p className="font-body text-muted-foreground text-sm">FDI portal accounts and quarterly/annual reporting setup</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">05. Post-Establishment Advisory & Ongoing Compliance</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• Ongoing compliance consulting and reporting guidance</li>
                    <li className="font-body text-muted-foreground text-sm">• Legal consulting, contract review, labor & commercial law</li>
                  </ul>
                </div>
              </div>

              <p className="mt-8 pt-6 border-t border-border font-body text-xs text-muted-foreground italic">Additional services customized to your specific needs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Compliance & Accounting */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Tax Compliance & Accounting Services</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Stay <span className="text-gradient-gold">Compliant</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Tax Basic */}
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">Basic Package</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  SGD 5,400<span className="text-muted-foreground text-base font-normal"> / Year</span>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-1">For companies with fewer than 10 employees</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">01. Tax Declaration Services</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• Monthly/quarterly: VAT, PIT</li>
                    <li className="font-body text-muted-foreground text-sm">• Annual: Financial statements, CIT, PIT finalization</li>
                    <li className="font-body text-muted-foreground text-sm">• Bookkeeping and software updates</li>
                    <li className="font-body text-muted-foreground text-sm">• Document archiving</li>
                    <li className="font-body text-muted-foreground text-sm">• Tax policy updates and consultation</li>
                  </ul>
                  <p className="mt-2 font-body text-xs text-muted-foreground italic">Additional services customized to your specific needs</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">02. Accounting Services</h3>
                  <p className="font-body text-muted-foreground text-sm">Monthly/quarterly financial statements tailored to your business</p>
                  <p className="mt-2 font-body text-xs text-muted-foreground italic">Additional services customized to your specific needs</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">03. Social Insurance Administration</h3>
                  <p className="font-body text-muted-foreground text-sm">Employee enrollment, adjustments, and terminations</p>
                </div>
              </div>
            </div>

            {/* Tax Advanced */}
            <div className="bg-card rounded-2xl border-2 border-gold/40 p-8 relative">
              <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gold text-secondary-foreground text-[10px] font-body font-bold uppercase tracking-widest">
                Recommended
              </div>

              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">Advanced Package</span>
                <div className="font-heading text-3xl font-bold text-foreground mt-2">
                  SGD 6,750<span className="text-muted-foreground text-base font-normal"> / Year</span>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-1">For companies with 10–20 employees</p>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">01. Tax Declaration Services</h3>
                  <ul className="space-y-1">
                    <li className="font-body text-muted-foreground text-sm">• Monthly/quarterly: VAT, PIT</li>
                    <li className="font-body text-muted-foreground text-sm">• Annual: Financial statements, CIT, PIT finalization</li>
                    <li className="font-body text-muted-foreground text-sm">• Bookkeeping and software updates</li>
                    <li className="font-body text-muted-foreground text-sm">• Document archiving</li>
                    <li className="font-body text-muted-foreground text-sm">• Tax policy updates and consultation</li>
                    <li className="font-body text-muted-foreground text-sm">• Tax dispute resolution support</li>
                  </ul>
                  <p className="mt-2 font-body text-xs text-muted-foreground italic">Additional services customized to your specific needs</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">02. Accounting Services</h3>
                  <p className="font-body text-muted-foreground text-sm">Monthly/quarterly financial statements tailored to your business</p>
                  <p className="mt-2 font-body text-xs text-muted-foreground italic">Additional services customized to your specific needs</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm font-bold text-foreground mb-1">03. Social Insurance Administration</h3>
                  <p className="font-body text-muted-foreground text-sm">Employee enrollment, adjustments, and terminations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">Special Offers & Important Information</span>

          <div className="flex items-center justify-center gap-3 mt-6 mb-4">
            <Star className="text-gold" size={24} />
            <span className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground">Save 10%</span>
            <Star className="text-gold" size={24} />
          </div>

          <p className="font-body text-primary-foreground/80 text-lg mb-6">
            Receive a 10% discount when you prepay for one full year of service!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-foreground/50 font-body text-sm mb-10">
            <span>• Services designed for micro, small, and medium-sized enterprises</span>
            <span>• All prices listed exclude VAT</span>
          </div>

          <div className="pt-10 border-t border-primary-foreground/10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-6">
              Ready to Launch Your Business in <span className="text-gradient-gold">Vietnam</span>?
            </h2>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-10 py-4 rounded-lg font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all"
            >
              Schedule Meeting Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SetupCompany;
