import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight, Globe, Handshake, Languages, Building2, Search, Users,
  Briefcase, Target, CheckCircle, ChevronDown, ChevronUp, TrendingUp,
  Shield, Zap, MapPin, Send, MessageCircle, Download, Star, Phone,
  Mail, Linkedin, Check, X as XIcon,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import svbbLogo from "@/assets/svbb-logo.png";
import heroBd from "@/assets/hero-bd.jpg";

const BusinessDevelopment = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", industry: "", goals: "" });
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: "smooth" });
  const scrollToPackages = () => document.getElementById("bd-packages")?.scrollIntoView({ behavior: "smooth" });

  const whySvbb = [
    { icon: Globe, title: t("businessDev.whySvbb1Title"), desc: t("businessDev.whySvbb1Desc") },
    { icon: Handshake, title: t("businessDev.whySvbb2Title"), desc: t("businessDev.whySvbb2Desc") },
    { icon: Languages, title: t("businessDev.whySvbb3Title"), desc: t("businessDev.whySvbb3Desc") },
    { icon: Building2, title: t("businessDev.whySvbb4Title"), desc: t("businessDev.whySvbb4Desc") },
  ];

  const services = [
    { icon: Handshake, title: t("businessDev.svc1Title"), desc: t("businessDev.svc1Desc") },
    { icon: Search, title: t("businessDev.svc2Title"), desc: t("businessDev.svc2Desc") },
    { icon: Briefcase, title: t("businessDev.svc3Title"), desc: t("businessDev.svc3Desc") },
    { icon: Target, title: t("businessDev.svc4Title"), desc: t("businessDev.svc4Desc") },
  ];

  const packages = [
    { name: t("businessDev.pkg1Name"), price: t("businessDev.pkg1Price"), best: t("businessDev.pkg1Best"), items: Array.from({length:7},(_,i)=>t(`businessDev.pkg1Item${i+1}`)) },
    { name: t("businessDev.pkg2Name"), price: t("businessDev.pkg2Price"), best: t("businessDev.pkg2Best"), badge: t("businessDev.pkg2Badge"), items: Array.from({length:9},(_,i)=>t(`businessDev.pkg2Item${i+1}`)) },
    { name: t("businessDev.pkg3Name"), price: t("businessDev.pkg3Price"), best: t("businessDev.pkg3Best"), items: Array.from({length:9},(_,i)=>t(`businessDev.pkg3Item${i+1}`)) },
    { name: t("businessDev.pkg4Name"), price: t("businessDev.pkg4Price"), best: t("businessDev.pkg4Best"), items: Array.from({length:9},(_,i)=>t(`businessDev.pkg4Item${i+1}`)) },
  ];

  const comparisonRows: { label: string; values: (string | boolean)[] }[] = [
    { label: t("businessDev.cmpMarketResearch"), values: [true, true, true, true] },
    { label: t("businessDev.cmpPartnerLonglist"), values: ["20", "30", "30", "40"] },
    { label: t("businessDev.cmpShortlist"), values: ["8", "10", "10", "12"] },
    { label: t("businessDev.cmpOutreach"), values: [false, t("businessDev.cmpTargets", {count: 20}), t("businessDev.cmpTargets", {count: 30}), t("businessDev.cmpTargets", {count: 40})] },
    { label: t("businessDev.cmpMeetings"), values: ["3", "6", "10", "12–15"] },
    { label: t("businessDev.cmpMonthlyReporting"), values: [false, false, true, true] },
    { label: t("businessDev.cmpFractionalBD"), values: [false, false, t("businessDev.cmpMonths", {count: 6}), t("businessDev.cmpMonths", {count: 6})] },
    { label: t("businessDev.cmpStrategy"), values: [t("businessDev.cmpRecommendationDeck"), t("businessDev.cmpChannelStrategy"), t("businessDev.cmpPipelineTracker"), t("businessDev.cmpFullActionPlan")] },
    { label: t("businessDev.cmpStage"), values: [t("businessDev.cmpExploring"), t("businessDev.cmpReadyToPartner"), t("businessDev.cmpInMarketExecution"), t("businessDev.cmpFullMarketLaunch")] },
  ];

  const steps = [
    { step: "01", title: t("businessDev.step1Title"), desc: t("businessDev.step1Desc") },
    { step: "02", title: t("businessDev.step2Title"), desc: t("businessDev.step2Desc") },
    { step: "03", title: t("businessDev.step3Title"), desc: t("businessDev.step3Desc") },
    { step: "04", title: t("businessDev.step4Title"), desc: t("businessDev.step4Desc") },
  ];

  const outcomes = [
    { icon: Target, title: t("businessDev.outcome1Title"), desc: t("businessDev.outcome1Desc") },
    { icon: Zap, title: t("businessDev.outcome2Title"), desc: t("businessDev.outcome2Desc") },
    { icon: Shield, title: t("businessDev.outcome3Title"), desc: t("businessDev.outcome3Desc") },
  ];

  const faqs = [
    { q: t("businessDev.faq1Q"), a: t("businessDev.faq1A") },
    { q: t("businessDev.faq2Q"), a: t("businessDev.faq2A") },
    { q: t("businessDev.faq3Q"), a: t("businessDev.faq3A") },
    { q: t("businessDev.faq4Q"), a: t("businessDev.faq4A") },
    { q: t("businessDev.faq5Q"), a: t("businessDev.faq5A") },
    { q: t("businessDev.faq6Q"), a: t("businessDev.faq6A") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section id="bd-hero" className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBd} alt="Business Development" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-gold mb-4">{t("businessDev.heroTag")}</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {t("businessDev.heroTitle1")} <span className="text-gradient-gold">{t("businessDev.heroTitleHighlight")}</span>
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">{t("businessDev.heroDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button onClick={scrollToContact} className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity">
                {t("businessDev.bookConsultation")} <ArrowRight size={16} />
              </button>
              <button onClick={scrollToPackages} className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 transition-colors">
                {t("businessDev.viewPackages")}
              </button>
            </div>
            <p className="font-body text-primary-foreground/40 text-sm">{t("businessDev.heroFootnote")}</p>
          </div>
        </div>
      </section>

      {/* Why SVBB */}
      <section id="bd-why" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("businessDev.whySvbbTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("businessDev.whySvbbTitle1")} <span className="text-gradient-gold">{t("businessDev.whySvbbTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whySvbb.map((w) => (
              <div key={w.title} className="bg-card rounded-2xl border border-border p-6 hover:shadow-lg hover:border-gold/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"><w.icon className="text-gold-dark" size={24} /></div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{w.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="bd-services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("businessDev.servicesTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("businessDev.servicesTitle1")} <span className="text-gradient-gold">{t("businessDev.servicesTitleHighlight")}</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">{t("businessDev.servicesDesc")}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-2xl border border-border p-8 hover:border-gold/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"><s.icon className="text-gold-dark" size={24} /></div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="bd-packages" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("businessDev.packagesTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("businessDev.packagesTitle1")} <span className="text-gradient-gold">{t("businessDev.packagesTitleHighlight")}</span>
            </h2>
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">{t("businessDev.packagesDesc")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div key={pkg.name} className={`bg-card rounded-2xl border p-6 relative flex flex-col ${pkg.badge ? "border-gold shadow-lg ring-2 ring-gold/30" : "border-border"}`}>
                {pkg.badge && <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-gold text-secondary-foreground text-xs font-bold font-body px-3 py-1 rounded-full whitespace-nowrap">{pkg.badge}</div>}
                <span className="font-body text-xs font-semibold text-gold-dark uppercase tracking-widest">{pkg.name}</span>
                <div className="font-heading text-2xl font-bold text-foreground mt-2 mb-1">{pkg.price}</div>
                <p className="font-body text-muted-foreground text-xs mb-6">{t("businessDev.bestFor")} {pkg.best}</p>
                <ul className="space-y-2 flex-1">
                  {pkg.items.map((i) => (
                    <li key={i} className="flex items-start gap-2 font-body text-sm text-muted-foreground">
                      <CheckCircle size={15} className="text-gold-dark mt-0.5 shrink-0" /> {i}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToContact} className="mt-6 w-full bg-gradient-gold text-secondary-foreground py-2.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity">
                  {t("businessDev.requestProposal")}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("businessDev.compareTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("businessDev.compareTitle1")} <span className="text-gradient-gold">{t("businessDev.compareTitleHighlight")}</span>
            </h2>
          </div>
          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left font-body text-sm font-semibold text-foreground py-4 pr-4 min-w-[180px]"></th>
                  {packages.map((p) => (
                    <th key={p.name} className={`text-center font-body text-xs font-bold uppercase tracking-wider py-4 px-3 min-w-[140px] ${p.badge ? "text-gold-dark" : "text-muted-foreground"}`}>{p.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label} className="border-b border-border/60">
                    <td className="font-body text-sm text-foreground py-3 pr-4">{row.label}</td>
                    {row.values.map((val, i) => (
                      <td key={i} className="text-center py-3 px-3">
                        {val === true ? <Check size={16} className="text-gold-dark mx-auto" /> : val === false ? <XIcon size={14} className="text-muted-foreground/30 mx-auto" /> : <span className="font-body text-xs text-muted-foreground">{val}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="bd-process" className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("businessDev.processTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
              {t("businessDev.processTitle1")} <span className="text-gradient-gold">{t("businessDev.processTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <div key={s.step} className="relative bg-navy-light/30 border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-colors">
                <span className="font-heading text-5xl font-bold text-gold/10 absolute top-3 right-4">{s.step}</span>
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  {(() => { const Icon = [Search, CheckCircle, Handshake, Briefcase][i]; return <Icon className="text-gold" size={20} />; })()}
                </div>
                <h3 className="font-heading text-lg font-bold text-primary-foreground mb-2">{s.title}</h3>
                <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("businessDev.outcomesTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("businessDev.outcomesTitle1")} <span className="text-gradient-gold">{t("businessDev.outcomesTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {outcomes.map((o) => (
              <div key={o.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><o.icon className="text-gold-dark" size={28} /></div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">{o.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-navy-light/30 border border-gold/20 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><Download className="text-gold" size={28} /></div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">{t("businessDev.leadMagnetTitle")}</h3>
            <p className="font-body text-primary-foreground/60 text-sm mb-6 max-w-lg mx-auto">{t("businessDev.leadMagnetDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input type="email" placeholder={t("businessDev.leadMagnetPlaceholder")} className="flex-1 px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-3 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity whitespace-nowrap">
                <Download size={16} /> {t("businessDev.leadMagnetButton")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="bd-faq" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("businessDev.faqTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("businessDev.faqTitle1")} <span className="text-gradient-gold">{t("businessDev.faqTitleHighlight")}</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-body text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-gold-dark shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && <div className="px-5 pb-5 pt-0"><p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="bd-contact" ref={contactRef} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("businessDev.contactTag")}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                {t("businessDev.contactTitle1")} <span className="text-gradient-gold">{t("businessDev.contactTitleHighlight")}</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">{t("businessDev.contactDesc")}</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{t("businessDev.contactEmail")}</p>
                    <a href="mailto:info@svbb.sg" className="font-body text-sm text-gold-dark hover:underline">info@svbb.sg</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{t("businessDev.contactSgOffice")}</p>
                    <p className="font-body text-sm text-muted-foreground">{t("businessDev.contactSgAddress")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">{t("businessDev.contactFormTitle")}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("businessDev.contactName")}</label>
                    <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("businessDev.contactNamePlaceholder")} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("businessDev.contactCompany")}</label>
                    <input value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("businessDev.contactCompanyPlaceholder")} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("businessDev.contactEmailLabel")}</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("businessDev.contactEmailPlaceholder")} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("businessDev.contactPhone")}</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("businessDev.contactPhonePlaceholder")} />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("businessDev.contactIndustry")}</label>
                  <input value={formData.industry} onChange={(e) => setFormData({ ...formData, industry: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("businessDev.contactIndustryPlaceholder")} />
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("businessDev.contactGoals")}</label>
                  <textarea value={formData.goals} onChange={(e) => setFormData({ ...formData, goals: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 h-24 resize-none" placeholder={t("businessDev.contactGoalsPlaceholder")} />
                </div>
                <button type="submit" className="w-full bg-gradient-gold text-secondary-foreground py-3 rounded-lg font-body font-semibold shadow-gold hover:opacity-90 transition-opacity">{t("businessDev.contactSubmit")}</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy border-t border-gold/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <img src={svbbLogo} alt="SVBB Logo" className="h-10 w-auto mb-3" />
              <p className="font-body text-primary-foreground/50 text-sm leading-relaxed max-w-xs">{t("businessDev.footerDesc")}</p>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-3">{t("businessDev.footerQuickLinks")}</h4>
              <div className="space-y-2">
                {[
                  { label: t("businessDev.footerServices"), href: "#bd-services" },
                  { label: t("businessDev.footerPackages"), href: "#bd-packages" },
                  { label: t("businessDev.footerProcess"), href: "#bd-process" },
                  { label: t("businessDev.footerFAQ"), href: "#bd-faq" },
                  { label: t("businessDev.footerContact"), href: "#bd-contact" },
                ].map((l) => (
                  <a key={l.label} href={l.href} className="block font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">{l.label}</a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-3">{t("businessDev.footerGetInTouch")}</h4>
              <div className="space-y-3">
                <a href="mailto:info@svbb.sg" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"><Mail size={14} /> info@svbb.sg</a>
                <a href="https://wa.me/6589483482" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"><MessageCircle size={14} /> WhatsApp</a>
                <a href="https://linkedin.com/company/svbb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"><Linkedin size={14} /> LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/10 mt-8 pt-6 text-center">
            <p className="font-body text-xs text-primary-foreground/30">{t("businessDev.footerCopyright", { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BusinessDevelopment;
