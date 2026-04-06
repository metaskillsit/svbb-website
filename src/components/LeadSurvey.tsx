import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Building2, Plane, DollarSign, CalendarCheck, Briefcase, MapPin, Users, Send } from "lucide-react";
import esgBadge from "@/assets/enterprise-sg-badge.png";

type Intent =
  | "event"
  | "business"
  | "invest-company"
  | "invest-other"
  | "trip";

const intents: { id: Intent; icon: React.ElementType; label: string; desc: string }[] = [
  { id: "event", icon: CalendarCheck, label: "Set Up an Event", desc: "Organise a trade show, conference, or networking event in Vietnam" },
  { id: "business", icon: Building2, label: "Set Up a Business", desc: "Register a company, open an office, or establish operations" },
  { id: "invest-company", icon: DollarSign, label: "Invest in a Company", desc: "Equity investment, joint ventures, or M&A opportunities" },
  { id: "invest-other", icon: Briefcase, label: "Other Investments", desc: "Real estate, franchise, or alternative investment opportunities" },
  { id: "trip", icon: Plane, label: "Business Exploration Trip", desc: "Join a curated trip to explore opportunities on the ground" },
];

const regions = [
  { id: "hcmc", label: "Ho Chi Minh City", desc: "Southern hub — commerce & manufacturing" },
  { id: "hanoi", label: "Hanoi", desc: "Northern capital — government & tech" },
  { id: "danang", label: "Da Nang / Central", desc: "Tourism, logistics & emerging tech" },
  { id: "unsure", label: "Not sure yet", desc: "We'll help you decide" },
];

const LeadSurvey = () => {
  const [step, setStep] = useState(0);
  const [selectedIntent, setSelectedIntent] = useState<Intent | null>(null);
  const [hasPartner, setHasPartner] = useState<boolean | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [needsMRA, setNeedsMRA] = useState<boolean | null>(null);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", notes: "" });

  const totalSteps = 5;
  const progress = ((step + 1) / totalSteps) * 100;

  const canProceed = () => {
    if (step === 0) return selectedIntent !== null;
    if (step === 1) return hasPartner !== null;
    if (step === 2) return selectedRegion !== null;
    if (step === 3) return needsMRA !== null;
    if (step === 4) return form.name && form.email && form.company;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(5); // show thank you
  };

  return (
    <section id="survey" className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">
            Tell Us About Your Plans
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            How Can We <span className="text-gradient-gold">Help You?</span>
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            Answer a few quick questions so we can match you with the right package, partners, and MRA Grant support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Progress bar */}
          {step < 5 && (
            <div className="mb-8">
              <div className="flex justify-between text-xs font-body text-primary-foreground/50 mb-2">
                <span>Step {step + 1} of {totalSteps}</span>
                <span>{Math.round(progress)}% complete</span>
              </div>
              <div className="h-1.5 bg-navy-light/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-gold rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <div className="bg-navy-light/30 border border-gold/20 rounded-2xl p-8 md:p-12 min-h-[420px] flex flex-col">
            {/* Step 0: Intent */}
            {step === 0 && (
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold mb-2">What would you like to do in Vietnam?</h3>
                <p className="font-body text-sm text-primary-foreground/60 mb-6">Select the option that best describes your goal.</p>
                <div className="space-y-3">
                  {intents.map((intent) => (
                    <button
                      key={intent.id}
                      onClick={() => setSelectedIntent(intent.id)}
                      className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all ${
                        selectedIntent === intent.id
                          ? "border-gold bg-gold/10 shadow-lg shadow-gold/5"
                          : "border-gold/15 hover:border-gold/40 hover:bg-gold/5"
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedIntent === intent.id ? "bg-gold/20" : "bg-gold/10"
                      }`}>
                        <intent.icon className="text-gold" size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-body font-semibold text-sm">{intent.label}</p>
                        <p className="font-body text-xs text-primary-foreground/50">{intent.desc}</p>
                      </div>
                      {selectedIntent === intent.id && (
                        <CheckCircle2 className="text-gold flex-shrink-0" size={20} />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Existing partner */}
            {step === 1 && (
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold mb-2">Do you already have a partner in Vietnam?</h3>
                <p className="font-body text-sm text-primary-foreground/60 mb-6">This helps us determine the right level of support for you.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { val: true, icon: Users, label: "Yes, I have a partner", desc: "I have an existing contact, distributor, or partner on the ground" },
                    { val: false, icon: Briefcase, label: "No, I need one", desc: "Help me find the right local partner or set up independently" },
                  ].map((opt) => (
                    <button
                      key={String(opt.val)}
                      onClick={() => setHasPartner(opt.val)}
                      className={`flex flex-col items-center text-center gap-3 p-6 rounded-xl border transition-all ${
                        hasPartner === opt.val
                          ? "border-gold bg-gold/10 shadow-lg shadow-gold/5"
                          : "border-gold/15 hover:border-gold/40 hover:bg-gold/5"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${hasPartner === opt.val ? "bg-gold/20" : "bg-gold/10"}`}>
                        <opt.icon className="text-gold" size={24} />
                      </div>
                      <p className="font-body font-semibold text-sm">{opt.label}</p>
                      <p className="font-body text-xs text-primary-foreground/50">{opt.desc}</p>
                      {hasPartner === opt.val && <CheckCircle2 className="text-gold" size={18} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Region */}
            {step === 2 && (
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold mb-2">Which part of Vietnam?</h3>
                <p className="font-body text-sm text-primary-foreground/60 mb-6">Select your target region — or let us advise you.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {regions.map((r) => (
                    <button
                      key={r.id}
                      onClick={() => setSelectedRegion(r.id)}
                      className={`flex flex-col items-start gap-2 p-5 rounded-xl border text-left transition-all ${
                        selectedRegion === r.id
                          ? "border-gold bg-gold/10 shadow-lg shadow-gold/5"
                          : "border-gold/15 hover:border-gold/40 hover:bg-gold/5"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <MapPin className="text-gold" size={16} />
                        <p className="font-body font-semibold text-sm">{r.label}</p>
                      </div>
                      <p className="font-body text-xs text-primary-foreground/50">{r.desc}</p>
                      {selectedRegion === r.id && <CheckCircle2 className="text-gold" size={16} />}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: MRA Grant */}
            {step === 3 && (
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold mb-2">Would you like to use the MRA Grant?</h3>
                <p className="font-body text-sm text-primary-foreground/60 mb-6">
                  The Market Readiness Assistance Grant covers up to 70% of qualifying costs (up to S$100K per market) for eligible Singapore SMEs.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <img src={esgBadge} alt="Enterprise Singapore MRA Grant" className="w-44 bg-white rounded-lg p-2" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { val: true, label: "Yes, help me apply", desc: "I'm eligible or want to check" },
                    { val: false, label: "No, not needed", desc: "I'll self-fund this project" },
                    { val: null as boolean | null, label: "Not sure", desc: "Tell me more about it" },
                  ].map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setNeedsMRA(opt.val)}
                      className={`flex flex-col items-center text-center gap-2 p-5 rounded-xl border transition-all ${
                        needsMRA === opt.val && (opt.val !== null || needsMRA === null && i === 2)
                          ? "border-gold bg-gold/10 shadow-lg shadow-gold/5"
                          : "border-gold/15 hover:border-gold/40 hover:bg-gold/5"
                      }`}
                    >
                      <p className="font-body font-semibold text-sm">{opt.label}</p>
                      <p className="font-body text-xs text-primary-foreground/50">{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Contact form */}
            {step === 4 && (
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold mb-2">Almost done — let's connect you with our team</h3>
                <p className="font-body text-sm text-primary-foreground/60 mb-6">
                  Fill in your details and a consultant will reach out within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1">Full Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1">Email *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1">Company *</label>
                      <input
                        required
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1">Phone</label>
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="+65 9XXX XXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1">Anything else we should know?</label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50 h-20 resize-none"
                      placeholder="Timeline, budget range, specific needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-gold text-secondary-foreground py-3 rounded-lg font-body font-semibold shadow-gold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Submit & Speak to a Consultant
                  </button>
                </form>
              </div>
            )}

            {/* Thank you */}
            {step === 5 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="text-gold" size={32} />
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">Thank You!</h3>
                <p className="font-body text-primary-foreground/70 max-w-md mb-2">
                  We've received your details. A consultant will be in touch within 24 hours to discuss your Vietnam plans.
                </p>
                <div className="bg-navy-light/40 border border-gold/20 rounded-lg p-4 mt-4 text-left text-xs font-body text-primary-foreground/60 max-w-sm w-full space-y-1">
                  <p><span className="text-gold font-semibold">Goal:</span> {intents.find((i) => i.id === selectedIntent)?.label}</p>
                  <p><span className="text-gold font-semibold">Region:</span> {regions.find((r) => r.id === selectedRegion)?.label}</p>
                  <p><span className="text-gold font-semibold">Partner:</span> {hasPartner ? "Has existing partner" : "Needs partner matching"}</p>
                  <p><span className="text-gold font-semibold">MRA Grant:</span> {needsMRA === true ? "Yes" : needsMRA === false ? "No" : "Needs info"}</p>
                </div>
              </div>
            )}

            {/* Navigation */}
            {step < 5 && (
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-gold/10">
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft size={16} />
                  Back
                </button>
                {step < 4 ? (
                  <button
                    onClick={() => canProceed() && setStep(step + 1)}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-2.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                  >
                    Continue
                    <ArrowRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      if (canProceed()) {
                        const formEl = document.querySelector("#survey form") as HTMLFormElement;
                        formEl?.requestSubmit();
                      }
                    }}
                    disabled={!canProceed()}
                    className="flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-2.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
                  >
                    <Send size={16} />
                    Submit
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadSurvey;
