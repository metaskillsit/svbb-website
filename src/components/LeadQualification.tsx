import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, Building2, Target, Rocket, HelpCircle, Phone, FileText } from "lucide-react";

interface Answer {
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
  q5?: string;
  q6?: string;
}

const questions = [
  {
    id: "q1",
    question: "Is your company registered in Singapore?",
    options: ["Yes", "No"],
  },
  {
    id: "q2",
    question: "What is your main goal for Vietnam?",
    options: [
      "Market expansion (sales/customers)",
      "Cost optimisation / outsourcing",
      "Manufacturing / supply chain",
      "Exploring opportunities",
    ],
  },
  {
    id: "q3",
    question: "How ready are you to expand into Vietnam?",
    options: [
      "I have a clear plan and want to execute",
      "I have some ideas but need guidance",
      "I'm just exploring and not sure yet",
    ],
  },
  {
    id: "q4",
    question: "When are you planning to expand?",
    options: ["Within 3 months", "3–6 months", "6–12 months", "No fixed timeline"],
  },
  {
    id: "q5",
    question: "Have you heard of the MRA Grant?",
    options: ["Yes", "No"],
  },
  {
    id: "q6",
    question: "How would you like to proceed?",
    options: [
      "I want help with MRA grant + expansion strategy",
      "I want to learn more about Vietnam first",
      "Not sure yet",
    ],
  },
];

type Route = "A" | "B" | "C";

function getRoute(answers: Answer): Route {
  if (answers.q1 === "No") return "C";
  if (
    answers.q3 === "I have a clear plan and want to execute" ||
    answers.q6 === "I want help with MRA grant + expansion strategy"
  ) return "A";
  return "B";
}

const routeResults: Record<Route, {
  icon: React.ElementType;
  title: string;
  message: string;
  note?: string;
  primaryCta: string;
  secondaryCta: string;
  primaryIcon: React.ElementType;
  secondaryIcon: React.ElementType;
}> = {
  A: {
    icon: Rocket,
    title: "You may be suitable for MRA-supported consulting",
    message: "Based on your responses, your company may be suitable for Vietnam expansion consulting and MRA grant support. Our team can assess your needs and recommend the next steps.",
    primaryCta: "Book a Free MRA Strategy Consultation",
    secondaryCta: "Fill Up Detailed Assessment",
    primaryIcon: Phone,
    secondaryIcon: FileText,
  },
  B: {
    icon: Target,
    title: "Start with the Business Vietnam Learning Programme",
    message: "Based on your responses, we recommend starting with our Business Vietnam Learning Programme to better understand the Vietnam market, entry strategies, and business environment before moving into execution.",
    note: "This programme may also be eligible for MRA support, helping your company offset up to 50% of the cost.",
    primaryCta: "Explore Business Vietnam Programme",
    secondaryCta: "Request a Callback",
    primaryIcon: Target,
    secondaryIcon: Phone,
  },
  C: {
    icon: Building2,
    title: "Let's assess your expansion needs separately",
    message: "The MRA grant is generally intended for Singapore companies. If your company is not registered in Singapore, our team can still explore alternative ways to support your Vietnam market entry.",
    primaryCta: "Contact SVBB",
    secondaryCta: "Schedule Intro Call",
    primaryIcon: FileText,
    secondaryIcon: Phone,
  },
};

const LeadQualification = ({ onShowAssessment }: { onShowAssessment?: () => void }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer>({});
  const [submitted, setSubmitted] = useState(false);

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
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5 mb-4">
            <Clock className="text-gold" size={14} />
            <span className="text-gold font-body text-xs font-semibold tracking-wide">Takes under 60 seconds</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
            Vietnam Expansion <span className="text-gradient-gold">Quick Assessment</span>
          </h2>
          <p className="font-body text-primary-foreground/60 mt-4 max-w-xl mx-auto text-base md:text-lg">
            Find out in under 60 seconds whether your company may qualify for MRA-supported Vietnam expansion support.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          {!submitted && (
            <div className="mb-6">
              <div className="flex justify-between text-xs font-body text-primary-foreground/40 mb-2">
                <span>Question {step + 1} of {totalSteps}</span>
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
                  Back
                </button>
                <button
                  onClick={next}
                  disabled={!currentAnswer}
                  className="flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-2.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
                >
                  {step === totalSteps - 1 ? "See Results" : "Next"}
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
