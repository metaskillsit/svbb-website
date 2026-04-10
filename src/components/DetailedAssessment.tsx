import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  User,
  Building2,
  Globe,
  Target,
  Calendar,
  Send,
  MessageCircle,
  Phone,
} from "lucide-react";

interface ContactInfo {
  fullName: string;
  companyName: string;
  jobTitle: string;
  email: string;
  phone: string;
  website: string;
}

interface FormData {
  contact: ContactInfo;
  industry: string;
  employees: string;
  revenue: string;
  vietnamPresence: string;
  objectives: string[];
  challenges: string[];
  supportAreas: string[];
  mraApplied: string;
  timeline: string;
  budget: string;
  nextStep: string;
}

const EMPLOYEES = ["1–10", "11–50", "51–200", "200+"];
const REVENUE = ["< SGD 1M", "SGD 1M – 10M", "SGD 10M – 100M", "> SGD 100M"];

const SECTION_ICONS = [User, Building2, Globe, Target, Calendar, Send];

const DetailedAssessment = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<FormData>({
    contact: { fullName: "", companyName: "", jobTitle: "", email: "", phone: "", website: "" },
    industry: "",
    employees: "",
    revenue: "",
    vietnamPresence: "",
    objectives: [],
    challenges: [],
    supportAreas: [],
    mraApplied: "",
    timeline: "",
    budget: "",
    nextStep: "",
  });

  const SECTION_LABELS = [
    t("detailedAssessment.labelContact"),
    t("detailedAssessment.labelCompany"),
    t("detailedAssessment.labelVietnam"),
    t("detailedAssessment.labelSupport"),
    t("detailedAssessment.labelTimeline"),
    t("detailedAssessment.labelIntent"),
  ];

  const INDUSTRIES = [
    t("detailedAssessment.ind1"),
    t("detailedAssessment.ind2"),
    t("detailedAssessment.ind3"),
    t("detailedAssessment.ind4"),
    t("detailedAssessment.ind5"),
    t("detailedAssessment.ind6"),
  ];

  const PRESENCE_OPTIONS = [
    t("detailedAssessment.presence1"),
    t("detailedAssessment.presence2"),
    t("detailedAssessment.presence3"),
  ];

  const OBJECTIVES = [
    t("detailedAssessment.obj1"),
    t("detailedAssessment.obj2"),
    t("detailedAssessment.obj3"),
    t("detailedAssessment.obj4"),
    t("detailedAssessment.obj5"),
    t("detailedAssessment.obj6"),
  ];

  const CHALLENGES = [
    t("detailedAssessment.ch1"),
    t("detailedAssessment.ch2"),
    t("detailedAssessment.ch3"),
    t("detailedAssessment.ch4"),
    t("detailedAssessment.ch5"),
    t("detailedAssessment.ch6"),
  ];

  const SUPPORT_AREAS = [
    t("detailedAssessment.sup1"),
    t("detailedAssessment.sup2"),
    t("detailedAssessment.sup3"),
    t("detailedAssessment.sup4"),
    t("detailedAssessment.sup5"),
    t("detailedAssessment.sup6"),
  ];

  const MRA_OPTIONS = [
    t("detailedAssessment.mra1"),
    t("detailedAssessment.mra2"),
    t("detailedAssessment.mra3"),
  ];

  const TIMELINE_OPTIONS = [
    t("detailedAssessment.tl1"),
    t("detailedAssessment.tl2"),
    t("detailedAssessment.tl3"),
    t("detailedAssessment.tl4"),
  ];

  const BUDGET_OPTIONS = [
    t("detailedAssessment.bud1"),
    t("detailedAssessment.bud2"),
    t("detailedAssessment.bud3"),
    t("detailedAssessment.bud4"),
  ];

  const NEXT_STEP_OPTIONS = [
    t("detailedAssessment.ns1"),
    t("detailedAssessment.ns2"),
    t("detailedAssessment.ns3"),
  ];

  const totalSteps = 6;
  const progress = ((step + 1) / totalSteps) * 100;

  const updateContact = (field: keyof ContactInfo, value: string) => {
    setData((prev) => ({ ...prev, contact: { ...prev.contact, [field]: value } }));
  };

  const toggleMulti = (field: "objectives" | "challenges" | "supportAreas", value: string, max?: number) => {
    setData((prev) => {
      const arr = prev[field];
      if (arr.includes(value)) return { ...prev, [field]: arr.filter((v) => v !== value) };
      if (max && arr.length >= max) return prev;
      return { ...prev, [field]: [...arr, value] };
    });
  };

  const canProceed = () => {
    switch (step) {
      case 0: return data.contact.fullName.trim() && data.contact.companyName.trim() && data.contact.jobTitle.trim() && data.contact.email.trim() && data.contact.phone.trim();
      case 1: return data.industry && data.employees && data.revenue;
      case 2: return data.vietnamPresence && data.objectives.length > 0 && data.challenges.length > 0;
      case 3: return data.supportAreas.length > 0 && data.mraApplied;
      case 4: return data.timeline && data.budget;
      case 5: return data.nextStep;
      default: return false;
    }
  };

  const handleSubmit = () => { if (canProceed()) setSubmitted(true); };

  const inputClass = "w-full px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all";

  const SelectButton = ({ selected, onClick, children }: { selected: boolean; onClick: () => void; children: React.ReactNode }) => (
    <button type="button" onClick={onClick} className={`w-full text-left px-4 py-3 rounded-lg border font-body text-sm transition-all flex items-center justify-between gap-3 ${selected ? "border-gold bg-gold/10 shadow-md shadow-gold/5" : "border-gold/15 hover:border-gold/40 hover:bg-gold/5"}`}>
      <span>{children}</span>
      {selected && <CheckCircle2 className="text-gold flex-shrink-0" size={16} />}
    </button>
  );

  const MultiButton = ({ selected, onClick, children, disabled }: { selected: boolean; onClick: () => void; children: React.ReactNode; disabled?: boolean }) => (
    <button type="button" onClick={onClick} disabled={disabled && !selected} className={`w-full text-left px-4 py-3 rounded-lg border font-body text-sm transition-all flex items-center justify-between gap-3 ${selected ? "border-gold bg-gold/10 shadow-md shadow-gold/5" : disabled && !selected ? "border-gold/10 opacity-40 cursor-not-allowed" : "border-gold/15 hover:border-gold/40 hover:bg-gold/5"}`}>
      <span>{children}</span>
      {selected && <CheckCircle2 className="text-gold flex-shrink-0" size={16} />}
    </button>
  );

  const DropdownSelect = ({ value, onChange, options, placeholder }: { value: string; onChange: (v: string) => void; options: string[]; placeholder: string }) => (
    <select value={value} onChange={(e) => onChange(e.target.value)} className={`${inputClass} appearance-none cursor-pointer ${!value ? "text-primary-foreground/30" : ""}`}>
      <option value="" disabled>{placeholder}</option>
      {options.map((opt) => <option key={opt} value={opt} className="bg-navy text-primary-foreground">{opt}</option>)}
    </select>
  );

  if (submitted) {
    return (
      <section id="detailed-assessment" className="py-24 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-navy-light/30 border border-gold/20 rounded-2xl p-8 md:p-12 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-gold" size={40} />
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">{t("detailedAssessment.submittedTitle")}</h3>
              <p className="font-body text-primary-foreground/70 mb-4 leading-relaxed">{t("detailedAssessment.submittedDesc")}</p>
              <p className="font-body text-primary-foreground/50 text-sm mb-8 leading-relaxed">{t("detailedAssessment.submittedNote")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/6589483482?text=Hi%2C%20I%20just%20completed%20the%20SVBB%20Detailed%20Assessment.%20I'd%20like%20to%20speak%20with%20a%20consultant." target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-3.5 rounded-lg font-body font-semibold shadow-gold hover:opacity-90 transition-opacity">
                  <MessageCircle size={18} /> {t("detailedAssessment.chatWhatsApp")}
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-6 py-3.5 rounded-lg font-body font-semibold hover:bg-gold/10 transition-colors">
                  <Phone size={18} /> {t("detailedAssessment.bookConsultation")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="detailed-assessment" className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("detailedAssessment.sectionTag")}</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            {t("detailedAssessment.title1")} <span className="text-gradient-gold">{t("detailedAssessment.titleHighlight")}</span>
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">{t("detailedAssessment.desc")}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Step indicators */}
          <div className="hidden md:flex items-center justify-between mb-8 px-4">
            {SECTION_LABELS.map((label, i) => {
              const Icon = SECTION_ICONS[i];
              const isActive = i === step;
              const isDone = i < step;
              return (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-gold/20 border-2 border-gold" : isDone ? "bg-gold/15 border border-gold/40" : "bg-navy-light/30 border border-gold/10"}`}>
                    {isDone ? <CheckCircle2 className="text-gold" size={18} /> : <Icon className={isActive ? "text-gold" : "text-primary-foreground/30"} size={18} />}
                  </div>
                  <span className={`font-body text-[10px] font-medium ${isActive ? "text-gold" : isDone ? "text-gold/60" : "text-primary-foreground/30"}`}>{label}</span>
                </div>
              );
            })}
          </div>

          {/* Mobile progress */}
          <div className="md:hidden mb-8">
            <div className="flex justify-between text-xs font-body text-primary-foreground/50 mb-2">
              <span>{t("detailedAssessment.sectionOf", { current: step + 1, total: totalSteps, label: SECTION_LABELS[step] })}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 bg-navy-light/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-gold rounded-full transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {/* Form card */}
          <div className="bg-navy-light/30 border border-gold/20 rounded-2xl p-6 md:p-10 min-h-[460px] flex flex-col">
            {/* Section 1: Contact */}
            {step === 0 && (
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <User className="text-gold" size={20} />
                  <h3 className="font-heading text-xl font-bold">{t("detailedAssessment.s1Title")}</h3>
                </div>
                <p className="font-body text-sm text-primary-foreground/50 mb-6 ml-8">{t("detailedAssessment.s1Desc")}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.fullName")} <span className="text-gold">*</span></label>
                      <input value={data.contact.fullName} onChange={(e) => updateContact("fullName", e.target.value)} className={inputClass} placeholder={t("detailedAssessment.fullNamePlaceholder")} />
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.companyName")} <span className="text-gold">*</span></label>
                      <input value={data.contact.companyName} onChange={(e) => updateContact("companyName", e.target.value)} className={inputClass} placeholder={t("detailedAssessment.companyNamePlaceholder")} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.jobTitle")} <span className="text-gold">*</span></label>
                      <input value={data.contact.jobTitle} onChange={(e) => updateContact("jobTitle", e.target.value)} className={inputClass} placeholder={t("detailedAssessment.jobTitlePlaceholder")} />
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.emailAddress")} <span className="text-gold">*</span></label>
                      <input type="email" value={data.contact.email} onChange={(e) => updateContact("email", e.target.value)} className={inputClass} placeholder={t("detailedAssessment.emailPlaceholder")} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.contactNumber")} <span className="text-gold">*</span></label>
                      <input type="tel" value={data.contact.phone} onChange={(e) => updateContact("phone", e.target.value)} className={inputClass} placeholder={t("detailedAssessment.phonePlaceholder")} />
                    </div>
                    <div>
                      <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.companyWebsite")} <span className="text-primary-foreground/30">{t("detailedAssessment.optional")}</span></label>
                      <input value={data.contact.website} onChange={(e) => updateContact("website", e.target.value)} className={inputClass} placeholder={t("detailedAssessment.websitePlaceholder")} />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 2: Company Profile */}
            {step === 1 && (
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Building2 className="text-gold" size={20} />
                  <h3 className="font-heading text-xl font-bold">{t("detailedAssessment.s2Title")}</h3>
                </div>
                <p className="font-body text-sm text-primary-foreground/50 mb-6 ml-8">{t("detailedAssessment.s2Desc")}</p>
                <div className="space-y-5">
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.industry")} <span className="text-gold">*</span></label>
                    <DropdownSelect value={data.industry} onChange={(v) => setData((p) => ({ ...p, industry: v }))} options={INDUSTRIES} placeholder={t("detailedAssessment.selectIndustry")} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.employees")} <span className="text-gold">*</span></label>
                    <DropdownSelect value={data.employees} onChange={(v) => setData((p) => ({ ...p, employees: v }))} options={EMPLOYEES} placeholder={t("detailedAssessment.selectEmployees")} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-1.5">{t("detailedAssessment.revenue")} <span className="text-gold">*</span></label>
                    <DropdownSelect value={data.revenue} onChange={(v) => setData((p) => ({ ...p, revenue: v }))} options={REVENUE} placeholder={t("detailedAssessment.selectRevenue")} />
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Vietnam Expansion */}
            {step === 2 && (
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Globe className="text-gold" size={20} />
                  <h3 className="font-heading text-xl font-bold">{t("detailedAssessment.s3Title")}</h3>
                </div>
                <p className="font-body text-sm text-primary-foreground/50 mb-6 ml-8">{t("detailedAssessment.s3Desc")}</p>
                <div className="space-y-6">
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-2">{t("detailedAssessment.presenceQ")} <span className="text-gold">*</span></label>
                    <div className="space-y-2">
                      {PRESENCE_OPTIONS.map((opt) => <SelectButton key={opt} selected={data.vietnamPresence === opt} onClick={() => setData((p) => ({ ...p, vietnamPresence: opt }))}>{opt}</SelectButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-2">{t("detailedAssessment.objectivesQ")} <span className="text-gold">*</span> <span className="text-primary-foreground/30">{t("detailedAssessment.selectUpTo2")}</span></label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {OBJECTIVES.map((opt) => <MultiButton key={opt} selected={data.objectives.includes(opt)} disabled={data.objectives.length >= 2} onClick={() => toggleMulti("objectives", opt, 2)}>{opt}</MultiButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-2">{t("detailedAssessment.challengesQ")} <span className="text-gold">*</span> <span className="text-primary-foreground/30">{t("detailedAssessment.selectAll")}</span></label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {CHALLENGES.map((opt) => <MultiButton key={opt} selected={data.challenges.includes(opt)} onClick={() => toggleMulti("challenges", opt)}>{opt}</MultiButton>)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 4: MRA & Support */}
            {step === 3 && (
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Target className="text-gold" size={20} />
                  <h3 className="font-heading text-xl font-bold">{t("detailedAssessment.s4Title")}</h3>
                </div>
                <p className="font-body text-sm text-primary-foreground/50 mb-6 ml-8">{t("detailedAssessment.s4Desc")}</p>
                <div className="space-y-6">
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-2">{t("detailedAssessment.supportQ")} <span className="text-gold">*</span> <span className="text-primary-foreground/30">{t("detailedAssessment.selectAll")}</span></label>
                    <div className="space-y-2">
                      {SUPPORT_AREAS.map((opt) => <MultiButton key={opt} selected={data.supportAreas.includes(opt)} onClick={() => toggleMulti("supportAreas", opt)}>{opt}</MultiButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-2">{t("detailedAssessment.mraQ")} <span className="text-gold">*</span></label>
                    <div className="space-y-2">
                      {MRA_OPTIONS.map((opt) => <SelectButton key={opt} selected={data.mraApplied === opt} onClick={() => setData((p) => ({ ...p, mraApplied: opt }))}>{opt}</SelectButton>)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 5: Timeline & Budget */}
            {step === 4 && (
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Calendar className="text-gold" size={20} />
                  <h3 className="font-heading text-xl font-bold">{t("detailedAssessment.s5Title")}</h3>
                </div>
                <p className="font-body text-sm text-primary-foreground/50 mb-6 ml-8">{t("detailedAssessment.s5Desc")}</p>
                <div className="space-y-6">
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-2">{t("detailedAssessment.timelineQ")} <span className="text-gold">*</span></label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {TIMELINE_OPTIONS.map((opt) => <SelectButton key={opt} selected={data.timeline === opt} onClick={() => setData((p) => ({ ...p, timeline: opt }))}>{opt}</SelectButton>)}
                    </div>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-primary-foreground/70 block mb-2">{t("detailedAssessment.budgetQ")} <span className="text-gold">*</span></label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {BUDGET_OPTIONS.map((opt) => <SelectButton key={opt} selected={data.budget === opt} onClick={() => setData((p) => ({ ...p, budget: opt }))}>{opt}</SelectButton>)}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Section 6: Final Intent */}
            {step === 5 && (
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <Send className="text-gold" size={20} />
                  <h3 className="font-heading text-xl font-bold">{t("detailedAssessment.s6Title")}</h3>
                </div>
                <p className="font-body text-sm text-primary-foreground/50 mb-6 ml-8">{t("detailedAssessment.s6Desc")}</p>
                <div className="space-y-3">
                  {NEXT_STEP_OPTIONS.map((opt) => <SelectButton key={opt} selected={data.nextStep === opt} onClick={() => setData((p) => ({ ...p, nextStep: opt }))}>{opt}</SelectButton>)}
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gold/10">
              <button onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                <ArrowLeft size={16} /> {t("detailedAssessment.back")}
              </button>
              {step < totalSteps - 1 ? (
                <button onClick={() => canProceed() && setStep(step + 1)} disabled={!canProceed()} className="flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-2.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity">
                  {t("detailedAssessment.continue")} <ArrowRight size={16} />
                </button>
              ) : (
                <button onClick={handleSubmit} disabled={!canProceed()} className="flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-3 rounded-lg font-body font-bold text-sm shadow-gold hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity">
                  {t("detailedAssessment.getMyAssessment")} <ArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedAssessment;
