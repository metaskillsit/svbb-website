import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  ArrowRight, Building2, Briefcase, Users, GraduationCap, Landmark, UserCheck,
  Mic2, Handshake, Plane, Rocket, LayoutGrid, MessageSquare, CalendarCheck,
  ClipboardList, Settings, CheckCircle, Globe, Languages, Shield, Award,
  ChevronDown, ChevronUp, Download, Mail, MessageCircle, Linkedin, MapPin,
  Monitor, HeadphonesIcon, Wrench, FileText, Timer, Target, Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import svbbLogo from "@/assets/svbb-logo.png";
import heroEvents from "@/assets/hero-events.jpg";

const EventsManagement = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", organisation: "", email: "", phone: "", eventType: "", city: "", date: "", guests: "", brief: "" });
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const audiences = [
    { icon: Building2, title: t("eventsManagement.aud1Title"), desc: t("eventsManagement.aud1Desc") },
    { icon: Briefcase, title: t("eventsManagement.aud2Title"), desc: t("eventsManagement.aud2Desc") },
    { icon: Users, title: t("eventsManagement.aud3Title"), desc: t("eventsManagement.aud3Desc") },
    { icon: Landmark, title: t("eventsManagement.aud4Title"), desc: t("eventsManagement.aud4Desc") },
    { icon: GraduationCap, title: t("eventsManagement.aud5Title"), desc: t("eventsManagement.aud5Desc") },
    { icon: UserCheck, title: t("eventsManagement.aud6Title"), desc: t("eventsManagement.aud6Desc") },
  ];

  const eventTypeIcons = [Mic2, Handshake, Plane, Rocket, MessageSquare, LayoutGrid, CalendarCheck, GraduationCap];
  const eventTypes = Array.from({ length: 8 }, (_, i) => ({
    icon: eventTypeIcons[i],
    title: t(`eventsManagement.evType${i + 1}`),
  }));

  const planningItems = Array.from({ length: 7 }, (_, i) => t(`eventsManagement.planning${i + 1}`));
  const executionItems = Array.from({ length: 7 }, (_, i) => t(`eventsManagement.execution${i + 1}`));

  const whyBlocks = [
    { icon: Globe, title: t("eventsManagement.why1Title"), desc: t("eventsManagement.why1Desc") },
    { icon: MapPin, title: t("eventsManagement.why2Title"), desc: t("eventsManagement.why2Desc") },
    { icon: Languages, title: t("eventsManagement.why3Title"), desc: t("eventsManagement.why3Desc") },
    { icon: Shield, title: t("eventsManagement.why4Title"), desc: t("eventsManagement.why4Desc") },
    { icon: Award, title: t("eventsManagement.why5Title"), desc: t("eventsManagement.why5Desc") },
  ];

  const processSteps = [
    { step: "01", title: t("eventsManagement.proc1Title"), desc: t("eventsManagement.proc1Desc"), icon: ClipboardList },
    { step: "02", title: t("eventsManagement.proc2Title"), desc: t("eventsManagement.proc2Desc"), icon: FileText },
    { step: "03", title: t("eventsManagement.proc3Title"), desc: t("eventsManagement.proc3Desc"), icon: Settings },
    { step: "04", title: t("eventsManagement.proc4Title"), desc: t("eventsManagement.proc4Desc"), icon: Wrench },
    { step: "05", title: t("eventsManagement.proc5Title"), desc: t("eventsManagement.proc5Desc"), icon: Target },
  ];

  const faqs = Array.from({ length: 7 }, (_, i) => ({
    q: t(`eventsManagement.faq${i + 1}Q`),
    a: t(`eventsManagement.faq${i + 1}A`),
  }));

  const trustSignals = [
    { icon: Globe, label: t("eventsManagement.trustSgVn") },
    { icon: Languages, label: t("eventsManagement.trustBilingual") },
    { icon: Handshake, label: t("eventsManagement.trustCrossBorder") },
    { icon: Building2, label: t("eventsManagement.trustCorporate") },
    { icon: MapPin, label: t("eventsManagement.trustOnGround") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section id="ev-hero" className="relative min-h-[85vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroEvents} alt="Events Management" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-gold mb-4">{t("eventsManagement.heroTag")}</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              {t("eventsManagement.heroTitle1")} <span className="text-gradient-gold">{t("eventsManagement.heroTitleHighlight")}</span> {t("eventsManagement.heroTitle2")}
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">{t("eventsManagement.heroDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity">
                {t("eventsManagement.planEvent")} <ArrowRight size={16} />
              </button>
              <button onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 transition-colors">
                {t("eventsManagement.discussBrief")}
              </button>
            </div>
            <p className="font-body text-primary-foreground/40 text-sm">{t("eventsManagement.heroFootnote")}</p>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("eventsManagement.whoWeHelpTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("eventsManagement.whoWeHelpTitle1")} <span className="text-gradient-gold">{t("eventsManagement.whoWeHelpTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {audiences.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl border border-border p-6 hover:border-gold/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"><a.icon className="text-gold-dark" size={24} /></div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{a.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section id="ev-types" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("eventsManagement.eventTypesTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("eventsManagement.eventTypesTitle1")} <span className="text-gradient-gold">{t("eventsManagement.eventTypesTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
            {eventTypes.map((e) => (
              <div key={e.title} className="bg-card rounded-xl border border-border p-5 text-center hover:border-gold/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-3"><e.icon className="text-gold-dark" size={22} /></div>
                <h3 className="font-heading text-sm font-bold text-foreground">{e.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle */}
      <section id="ev-services" className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">{t("eventsManagement.whatWeHandleTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
              {t("eventsManagement.whatWeHandleTitle1")} <span className="text-gradient-gold">{t("eventsManagement.whatWeHandleTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-navy-light/30 border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center"><ClipboardList className="text-gold" size={20} /></div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground">{t("eventsManagement.planningTitle")}</h3>
              </div>
              <ul className="space-y-3">
                {planningItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5"><CheckCircle size={15} className="text-gold mt-0.5 shrink-0" /><span className="font-body text-sm text-primary-foreground/70">{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-light/30 border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center"><Wrench className="text-gold" size={20} /></div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground">{t("eventsManagement.executionTitle")}</h3>
              </div>
              <ul className="space-y-3">
                {executionItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5"><CheckCircle size={15} className="text-gold mt-0.5 shrink-0" /><span className="font-body text-sm text-primary-foreground/70">{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why SVBB */}
      <section id="ev-why" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("eventsManagement.whySvbbTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("eventsManagement.whySvbbTitle1")} <span className="text-gradient-gold">{t("eventsManagement.whySvbbTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {whyBlocks.map((w) => (
              <div key={w.title} className="bg-card rounded-2xl border border-border p-6 hover:border-gold/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4"><w.icon className="text-gold-dark" size={24} /></div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{w.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.06)_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            {t("eventsManagement.featuredTitle1")} <span className="text-gradient-gold">{t("eventsManagement.featuredTitleHighlight")}</span>
          </h2>
          <p className="font-body text-primary-foreground/60 text-lg leading-relaxed">{t("eventsManagement.featuredDesc")}</p>
        </div>
      </section>

      {/* Process */}
      <section id="ev-process" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("eventsManagement.processTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("eventsManagement.processTitle1")} <span className="text-gradient-gold">{t("eventsManagement.processTitleHighlight")}</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl">
            {processSteps.map((s) => (
              <div key={s.step} className="relative bg-card border border-border rounded-xl p-5 hover:border-gold/30 transition-colors">
                <span className="font-heading text-4xl font-bold text-gold/10 absolute top-2 right-3">{s.step}</span>
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3"><s.icon className="text-gold-dark" size={20} /></div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1.5">{s.title}</h3>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {trustSignals.map((t_item) => (
              <div key={t_item.label} className="text-center py-4">
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-2"><t_item.icon className="text-gold-dark" size={20} /></div>
                <p className="font-body text-xs font-medium text-foreground">{t_item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="ev-faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("eventsManagement.faqTag")}</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              {t("eventsManagement.faqTitle1")} <span className="text-gradient-gold">{t("eventsManagement.faqTitleHighlight")}</span>
            </h2>
          </div>
          <div className="max-w-3xl space-y-3">
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

      {/* Lead Magnet */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-navy-light/30 border border-gold/20 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4"><Download className="text-gold" size={28} /></div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">{t("eventsManagement.leadMagnetTitle")}</h3>
            <p className="font-body text-primary-foreground/60 text-sm mb-6 max-w-lg mx-auto">{t("eventsManagement.leadMagnetDesc")}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input type="email" placeholder={t("eventsManagement.leadMagnetPlaceholder")} className="flex-1 px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-3 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity whitespace-nowrap">
                <Download size={16} /> {t("eventsManagement.leadMagnetButton")}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="ev-contact" ref={contactRef} className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("eventsManagement.contactTag")}</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                {t("eventsManagement.contactTitle1")} <span className="text-gradient-gold">{t("eventsManagement.contactTitleHighlight")}</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">{t("eventsManagement.contactDesc")}</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{t("eventsManagement.contactEmail")}</p>
                    <a href="mailto:info@svbb.sg" className="font-body text-sm text-gold-dark hover:underline">info@svbb.sg</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{t("eventsManagement.contactWhatsApp")}</p>
                    <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-gold-dark hover:underline">{t("eventsManagement.contactWhatsAppText")}</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">{t("eventsManagement.contactSgOffice")}</p>
                    <p className="font-body text-sm text-muted-foreground">{t("eventsManagement.contactSgAddress")}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">{t("eventsManagement.contactFormTitle")}</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactName")}</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("eventsManagement.contactNamePlaceholder")} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactOrg")}</label>
                    <input value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("eventsManagement.contactOrgPlaceholder")} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactEmailLabel")}</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("eventsManagement.contactEmailPlaceholder")} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactPhone")}</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("eventsManagement.contactPhonePlaceholder")} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactEventType")}</label>
                    <select value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 appearance-none">
                      <option value="">{t("eventsManagement.contactEventTypeDefault")}</option>
                      {eventTypes.map((et) => <option key={et.title} value={et.title}>{et.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactCity")}</label>
                    <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 appearance-none">
                      <option value="">{t("eventsManagement.contactCityDefault")}</option>
                      <option value="Ho Chi Minh City">{t("eventsManagement.contactCityHCMC")}</option>
                      <option value="Hanoi">{t("eventsManagement.contactCityHanoi")}</option>
                      <option value="Da Nang">{t("eventsManagement.contactCityDanang")}</option>
                      <option value="Other">{t("eventsManagement.contactCityOther")}</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactDate")}</label>
                    <input type="text" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("eventsManagement.contactDatePlaceholder")} />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactGuests")}</label>
                    <input type="text" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder={t("eventsManagement.contactGuestsPlaceholder")} />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground block mb-1.5">{t("eventsManagement.contactBrief")}</label>
                  <textarea value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 h-24 resize-none" placeholder={t("eventsManagement.contactBriefPlaceholder")} />
                </div>
                <button type="submit" className="w-full bg-gradient-gold text-secondary-foreground py-3 rounded-lg font-body font-semibold shadow-gold hover:opacity-90 transition-opacity">{t("eventsManagement.contactSubmit")}</button>
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
              <p className="font-body text-primary-foreground/50 text-sm leading-relaxed max-w-xs">{t("eventsManagement.footerDesc")}</p>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-3">{t("eventsManagement.footerQuickLinks")}</h4>
              <div className="space-y-2">
                {[
                  { label: t("eventsManagement.whatWeHandleTag"), id: "ev-services" },
                  { label: t("eventsManagement.eventTypesTag"), id: "ev-types" },
                  { label: t("eventsManagement.whySvbbTag"), id: "ev-why" },
                  { label: t("eventsManagement.processTag"), id: "ev-process" },
                  { label: t("eventsManagement.faqTag"), id: "ev-faq" },
                  { label: t("eventsManagement.contactTag"), id: "ev-contact" },
                ].map((l) => (
                  <button key={l.id} onClick={() => scrollTo(l.id)} className="block font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">{l.label}</button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-3">{t("eventsManagement.footerGetInTouch")}</h4>
              <div className="space-y-3">
                <a href="mailto:info@svbb.sg" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"><Mail size={14} /> info@svbb.sg</a>
                <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"><MessageCircle size={14} /> WhatsApp</a>
                <a href="https://linkedin.com/company/svbb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors"><Linkedin size={14} /> LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/10 mt-8 pt-6 text-center">
            <p className="font-body text-xs text-primary-foreground/30">{t("eventsManagement.footerCopyright", { year: new Date().getFullYear() })}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventsManagement;
