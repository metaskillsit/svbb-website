import { useState } from "react";
import { CheckCircle2, DollarSign, FileCheck, Rocket, CircleCheck, CircleX } from "lucide-react";

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

const eligibilityQuestions = [
  { q: "Is your business registered in Singapore?", key: "sg" },
  { q: "Does the company have at least 30% local shareholding?", key: "share" },
  { q: "Is your company's annual revenue under S$100M?", key: "rev" },
];

const MRAGrantSection = () => {

  const allYes = Object.values(answers).every((v) => v === true) && Object.keys(answers).length === 3;

  const handleAnswer = (key: string, val: boolean) => {
    const updated = { ...answers, [key]: val };
    setAnswers(updated);
    if (Object.keys(updated).length === 3) setShowResult(true);
  };

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

        {/* Eligibility Checker */}
        <div className="mt-16 bg-navy-light/40 border border-gold/20 rounded-xl p-8 md:p-12">
          <h3 className="font-heading text-2xl font-bold text-center mb-8">Check Your Eligibility</h3>
          <div className="max-w-xl mx-auto space-y-6">
            {eligibilityQuestions.map((eq) => (
              <div key={eq.key} className="flex items-center justify-between gap-4">
                <p className="font-body text-sm text-primary-foreground/80">{eq.q}</p>
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleAnswer(eq.key, true)}
                    className={`px-4 py-1.5 rounded-lg font-body text-sm font-semibold transition-colors ${answers[eq.key] === true ? "bg-gold text-secondary-foreground" : "border border-gold/40 text-gold hover:bg-gold/10"}`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleAnswer(eq.key, false)}
                    className={`px-4 py-1.5 rounded-lg font-body text-sm font-semibold transition-colors ${answers[eq.key] === false ? "bg-destructive text-destructive-foreground" : "border border-gold/40 text-gold hover:bg-gold/10"}`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
            {showResult && (
              <div className={`mt-6 p-5 rounded-lg border ${allYes ? "bg-gold/10 border-gold/30" : "bg-destructive/10 border-destructive/30"} flex items-start gap-3`}>
                {allYes ? <CircleCheck className="text-gold flex-shrink-0 mt-0.5" size={20} /> : <CircleX className="text-destructive flex-shrink-0 mt-0.5" size={20} />}
                <div>
                  <p className="font-body text-sm font-semibold">
                    {allYes ? "You're likely eligible for the MRA Grant!" : "You may not qualify, but let's discuss your options."}
                  </p>
                  <a href="#contact" className="font-body text-sm text-gold hover:underline mt-1 inline-block">
                    {allYes ? "Speak to us to start your application →" : "Contact us — there may be alternative pathways →"}
                  </a>
                </div>
              </div>
            )}
          </div>
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
      </div>
    </section>
  );
};

export default MRAGrantSection;
