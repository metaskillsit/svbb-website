import { ArrowLeft, CheckCircle, FileText, Clock, DollarSign, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const epKeyPoints = [
  "The EP allows the holder to live and work in Singapore as an employee of a Singaporean company.",
  "The EP application must be submitted by the sponsoring company or an authorized service provider with an Employment Agency license.",
  "The salary of the Employment Pass holder is subject to personal income tax in Singapore.",
  "The initial EP is valid for a maximum of 2 years. Subsequent renewals can be valid for up to 3 years.",
  "EP holders who meet the criteria can bring their family members to Singapore through Dependant Pass or Long Term Visit Pass.",
];

const compassCriteria = [
  { category: "Individual Attributes", items: ["C1. Salary", "C2. Qualifications"], points: "20 pts each" },
  { category: "Firm-Related Attributes", items: ["C3. Diversity", "C4. Support for Local Employment"], points: "20 pts each" },
];

const bonusCriteria = [
  { code: "C5", label: "Skills Bonus", points: "Up to 20 points" },
  { code: "C6", label: "Strategic Bonus", points: "Up to 10 points" },
];

const requiredDocs = [
  "The applicant's personal information page in their passport. If the name differs from other documents, an explanatory letter with supporting documents is required.",
  "The company's latest business profile or the most recent ACRA-registered information.",
  "The applicant's educational certificates (e.g., degree certificates).",
  "A letter of consent from the applicant allowing the company or agency to submit the application on their behalf.",
  "Any additional documents that MOM may request (e.g., salary proof documents).",
];

const CorporateImmigration = () => {
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
            Corporate <span className="text-gradient-gold">Immigration Service</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Navigate Singapore's Employment Pass application process with expert guidance — from COMPASS assessment to card issuance.
          </p>
        </div>
      </section>

      {/* What is EP */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Information</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-8">
              What is an <span className="text-gradient-gold">Employment Pass</span>?
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              The Employment Pass (EP) is a work visa issued by Singapore's Ministry of Manpower (MOM) for foreign professionals, managers, executives, and skilled workers. It enables them to live and work in Singapore legally, typically tied to their employment contract.
            </p>
            <div className="space-y-3">
              {epKeyPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle className="text-gold shrink-0 mt-1" size={16} />
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPASS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Complementarity Assessment Framework</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              COMPASS <span className="text-gradient-gold">Examination</span>
            </h2>
            <p className="font-body text-muted-foreground text-base leading-relaxed mb-8">
              COMPASS assesses your suitability through a points-based system. You need at least <span className="font-semibold text-foreground">40 points</span> to pass.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {compassCriteria.map((c) => (
                <div key={c.category} className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-heading text-sm font-bold text-foreground mb-3">{c.category}</h3>
                  <p className="font-body text-xs text-gold-dark font-medium mb-3">{c.points}</p>
                  <ul className="space-y-2">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 font-body text-muted-foreground text-sm">
                        <CheckCircle className="text-gold/60 shrink-0" size={14} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-card rounded-xl border border-gold/20 p-6">
              <h3 className="font-heading text-sm font-bold text-foreground mb-3">Bonus Criteria</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {bonusCriteria.map((b) => (
                  <div key={b.code} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                      <span className="font-heading text-xs font-bold text-gold">{b.code}</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-foreground">{b.label}</p>
                      <p className="font-body text-xs text-muted-foreground">{b.points}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Application Process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
              Required <span className="text-gradient-gold">Documents</span>
            </h2>
            <p className="font-body text-muted-foreground text-base mb-8">
              5 types of documents are required when submitting your Employment Pass application:
            </p>

            <div className="space-y-4">
              {requiredDocs.map((doc, i) => (
                <div key={i} className="flex items-start gap-4 bg-card rounded-xl border border-border p-5">
                  <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <span className="font-heading text-sm font-bold text-gold">{i + 1}</span>
                  </div>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">{doc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-card rounded-xl border border-border p-5">
              <h3 className="font-heading text-sm font-bold text-foreground mb-2">Important Notes</h3>
              <ul className="space-y-2">
                <li className="font-body text-muted-foreground text-sm flex items-start gap-2">
                  <CheckCircle className="text-gold/60 shrink-0 mt-0.5" size={14} />
                  For documents not in English, upload the original with the English translation as a single file.
                </li>
                <li className="font-body text-muted-foreground text-sm flex items-start gap-2">
                  <CheckCircle className="text-gold/60 shrink-0 mt-0.5" size={14} />
                  The application submission is 100% online.
                </li>
                <li className="font-body text-muted-foreground text-sm flex items-start gap-2">
                  <Clock className="text-gold/60 shrink-0 mt-0.5" size={14} />
                  Processing time is 8–10 working weeks. In some circumstances, it may take longer.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3 mb-10">
            Employment Pass <span className="text-gradient-gold">Application</span>
          </h2>

          <div className="max-w-lg mx-auto bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <DollarSign className="text-gold" size={28} />
              <span className="font-heading text-4xl font-bold text-primary-foreground">USD 5,000++</span>
            </div>

            <div className="space-y-3 text-left mt-8">
              {[
                "Consultation with experts (Free)",
                "Information and documents collected and signed remotely",
                "We handle all remaining steps on your behalf",
                "Wait for the result",
                "Client receives the card",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="text-gold shrink-0 mt-0.5" size={16} />
                  <p className="font-body text-primary-foreground/80 text-sm">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-lg bg-gold/10 border border-gold/20">
              <div className="flex items-center justify-center gap-2 mb-1">
                <ShieldCheck className="text-gold" size={18} />
                <span className="font-body text-gold font-semibold text-sm">Money-Back Guarantee</span>
              </div>
              <p className="font-body text-primary-foreground/60 text-xs">
                50% refund of the total service fee if the application is unsuccessful after two appeal attempts.
              </p>
            </div>

            <a
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-4 rounded-lg font-body font-semibold text-sm shadow-gold hover:scale-[1.02] transition-all"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateImmigration;
