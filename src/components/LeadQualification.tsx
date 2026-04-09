import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, Building2, Target, Rocket, HelpCircle, Phone, FileText } from "lucide-react";

interface Answer {
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  q5?: string;
  q6?: string;
}

/* questions and routeResults moved inside component for i18n access */

type Route = "A" | "B" | "C";

function getRoute(answers: Answer): Route {
  if (answers.q1 === "No") return "C";
  if (
    answers.q3 === "I have a clear plan and want to execute" ||
    answers.q6 === "I want help with MRA grant + expansion strategy"
  ) return "A";
  return "B";
}

/* routeResults moved inside component for i18n access */

const LeadQualification = ({ onShowAssessment }: { onShowAssessment?: () => void }) => {
  const { t } = useTranslation();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [submitted, setSubmitted] = useState(false);

  const questions = [
    { id: "q1", question: t("leadQualification.q1"), options: [t("leadQualification.q1o1"), t("leadQualification.q1o2")] },
    { id: "q2", question: t("leadQualification.q2"), options: [t("leadQualification.q2o1"), t("leadQualification.q2o2"), t("leadQualification.q2o3"), t("leadQualification.q2o4")] },
    { id: "q3", question: t("leadQualification.q3"), options: [t("leadQualification.q3o1"), t("leadQualification.q3o2"), t("leadQualification.q3o3")] },
    { id: "q4", question: t("leadQualification.q4"), options: [t("leadQualification.q4o1"), t("leadQualification.q4o2"), t("leadQualification.q4o3"), t("leadQualification.q4o4")] },
    { id: "q5", question: t("leadQualification.q5"), options: [t("leadQualification.q5o1"), t("leadQualification.q5o2")] },
    { id: "q6", question: t("leadQualification.q6"), options: [t("leadQualification.q6o1"), t("leadQualification.q6o2"), t("leadQualification.q6o3")] },
  ];

  const routeResults: Record<Route, { icon: React.ElementType; title: string; message: string; note?: string; primaryCta: string; secondaryCta: string; primaryIcon: React.ElementType; secondaryIcon: React.ElementType }> = {
    A: { icon: Rocket, title: t("leadQualification.routeATitle"), message: t("leadQualification.routeAMsg"), primaryCta: t("leadQualification.routeACta1"), secondaryCta: t("leadQualification.routeACta2"), primaryIcon: Phone, secondaryIcon: FileText },
    B: { icon: Target, title: t("leadQualification.routeBTitle"), message: t("leadQualification.routeBMsg"), note: t("leadQualification.routeBNote"), primaryCta: t("leadQualification.routeBCta1"), secondaryCta: t("leadQualification.routeBCta2"), primaryIcon: Target, secondaryIcon: Phone },
    C: { icon: Building2, title: t("leadQualification.routeCTitle"), message: t("leadQualification.routeCMsg"), primaryCta: t("leadQualification.routeCCta1"), secondaryCta: t("leadQualification.routeCCta2"), primaryIcon: FileText, secondaryIcon: Phone },
  };

  const totalSteps = questions.length;
  const progress = ((step + 1) / totalSteps) * 100;
  const currentQ = questions[step];
  const currentAnswer = answers[currentQ?.id as keyof Answer];

  const selectOption = (option: string) => {
    setAnswers((prev) => ({ ...prev, [currentQ.id]: option }));
  };

  const next = () => {
    if (step < totalSteps - 1) setStep(step + 1);
    else setSubmitted(true);
  };

  const back = () => {
    if (submitted) {
      setSubmitted(false);
    } else {
      setStep(Math.max(0, step - 1));
    }
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setSubmitted(false);
  };

  const route = getRoute(answers);
  const result = routeResults[route];

  return (
    <section id="assessment" className="py-20 md:py-28 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">

        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          {!submitted && (
            <div className="mb-6">
              <div className="flex justify-between text-xs font-body text-primary-foreground/40 mb-2">
                <span>{t("leadQualification.questionOf", { current: step + 1, total: totalSteps })}</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="h-1 bg-navy-light/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-gold rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Question Card */}
          {!submitted && (
            <div className="bg-navy-light/20 border border-gold/15 rounded-2xl p-6 md:p-10">
              <h3 className="font-heading text-lg md:text-xl font-bold mb-6">
                {currentQ.question}
              </h3>
              <div className="space-y-3">
                {currentQ.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => selectOption(option)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 ${
                      currentAnswer === option
                        ? "border-gold bg-gold/10 shadow-lg shadow-gold/10"
                        : "border-gold/10 hover:border-gold/30 hover:bg-gold/5"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      currentAnswer === option ? "border-gold bg-gold" : "border-primary-foreground/20"
                    }`}>
                      {currentAnswer === option && (
                        <div className="w-2 h-2 rounded-full bg-navy" />
                      )}
                    </div>
                    <span className="font-body text-sm md:text-base text-primary-foreground/90">{option}</span>
                  </button>
                ))}
              </div>

              {/* Nav */}
              <div className="flex items-center justify-between mt-8 pt-5 border-t border-gold/10">
                <button
                  onClick={back}
                  disabled={step === 0}
                  className="flex items-center gap-1.5 font-body text-sm text-primary-foreground/40 hover:text-gold disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft size={15} />
                  {t("leadQualification.back")}
                </button>
                <button
                  onClick={next}
                  disabled={!currentAnswer}
                  className="flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-2.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                >
                  {step === totalSteps - 1 ? t("leadQualification.seeResults") : t("leadQualification.next")}
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          )}

          {/* Result Card */}
          {submitted && (
            <div className="bg-navy-light/20 border border-gold/15 rounded-2xl p-6 md:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                <result.icon className="text-gold" size={28} />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-4">{result.title}</h3>
              <p className="font-body text-primary-foreground/70 text-sm md:text-base max-w-lg mx-auto mb-4 leading-relaxed">
                {result.message}
              </p>
              {result.note && (
                <div className="inline-flex items-start gap-2 bg-gold/5 border border-gold/15 rounded-lg p-3 mb-6 text-left max-w-lg">
                  <HelpCircle className="text-gold flex-shrink-0 mt-0.5" size={15} />
                  <p className="font-body text-xs text-primary-foreground/60 leading-relaxed">{result.note}</p>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-3 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
                >
                  <result.primaryIcon size={16} />
                  {result.primaryCta}
                </a>
                {result.secondaryCta === "Fill Up Detailed Assessment" ? (
                  <button
                    onClick={() => onShowAssessment?.()}
                    className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold px-6 py-3 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 transition-colors"
                  >
                    <result.secondaryIcon size={16} />
                    {result.secondaryCta}
                  </button>
                ) : (
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 border border-gold/30 text-gold px-6 py-3 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 transition-colors"
                  >
                    <result.secondaryIcon size={16} />
                    {result.secondaryCta}
                  </a>
                )}
              </div>
              <div className="mt-8 pt-5 border-t border-gold/10 flex items-center justify-between">
                <button
                  onClick={back}
                  className="flex items-center gap-1.5 font-body text-sm text-primary-foreground/40 hover:text-gold transition-colors"
                >
                  <ArrowLeft size={15} />
                  Back
                </button>
                <button
                  onClick={restart}
                  className="font-body text-xs text-primary-foreground/30 hover:text-gold transition-colors"
                >
                  Retake Assessment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadQualification;
