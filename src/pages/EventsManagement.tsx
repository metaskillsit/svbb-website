import { useState, useRef } from "react";
import {
  ArrowRight,
  Building2,
  Briefcase,
  Users,
  GraduationCap,
  Landmark,
  UserCheck,
  Mic2,
  Handshake,
  Plane,
  Rocket,
  LayoutGrid,
  MessageSquare,
  CalendarCheck,
  ClipboardList,
  Settings,
  CheckCircle,
  Globe,
  Languages,
  Shield,
  Award,
  ChevronDown,
  ChevronUp,
  Download,
  Mail,
  MessageCircle,
  Linkedin,
  MapPin,
  Monitor,
  HeadphonesIcon,
  Wrench,
  FileText,
  Timer,
  Target,
  Send,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import svbbLogo from "@/assets/svbb-logo.png";
import heroEvents from "@/assets/hero-events.jpg";

/* ───── data ───── */

const audiences = [
  { icon: Building2, title: "Corporates", desc: "Professional event delivery in Vietnam for regional meetings, launches, and stakeholder events." },
  { icon: Briefcase, title: "SMEs", desc: "Affordable, well-coordinated Vietnam events without managing local complexity yourself." },
  { icon: Users, title: "Trade Associations", desc: "Trade mission support, delegation coordination, and networking event execution across Vietnam." },
  { icon: Landmark, title: "Chambers of Commerce", desc: "Cross-border event management for bilateral business events, forums, and roundtables." },
  { icon: GraduationCap, title: "Education & Training Institutions", desc: "Training events, study trips, and institutional exchange programmes in Vietnam." },
  { icon: UserCheck, title: "Delegation Organisers", desc: "End-to-end delegation visit planning — itinerary, logistics, meetings, and on-ground support." },
];

const eventTypes = [
  { icon: Mic2, title: "Conferences & Seminars" },
  { icon: Handshake, title: "Business Networking Events" },
  { icon: Plane, title: "Trade Missions & Delegation Visits" },
  { icon: Rocket, title: "Product Launches" },
  { icon: MessageSquare, title: "Partner Events & Roundtables" },
  { icon: LayoutGrid, title: "Exhibitions & Booth Support" },
  { icon: CalendarCheck, title: "Executive Meetings & Private Sessions" },
  { icon: GraduationCap, title: "Training Events & Workshops" },
];

const planningItems = [
  "Event concept and planning",
  "Venue sourcing",
  "Programme flow",
  "Budget coordination",
  "Supplier management",
  "Registration planning",
  "Event timeline management",
];

const executionItems = [
  "Event setup",
  "AV and technical coordination",
  "Staffing support",
  "Guest handling",
  "Bilingual liaison",
  "Troubleshooting",
  "Post-event wrap-up",
];

const whyBlocks = [
  { icon: Globe, title: "Singapore-Facing Communication", desc: "One point of contact that speaks your language, understands your expectations, and reports in a format you're used to." },
  { icon: MapPin, title: "Vietnam Local Execution Knowledge", desc: "On-ground familiarity with venues, suppliers, logistics, and the operational realities of running events in Vietnam." },
  { icon: Languages, title: "Cross-Border Coordination Made Simple", desc: "We bridge the planning in Singapore with the delivery in Vietnam — so nothing gets lost in translation." },
  { icon: Shield, title: "Reliable Vendor & Venue Handling", desc: "Vetted local suppliers, transparent pricing, and professional vendor management you can count on." },
  { icon: Award, title: "Professional Business Event Standards", desc: "Events that meet the quality expectations of Singapore corporates, associations, and institutional stakeholders." },
];

const processSteps = [
  { step: "01", title: "Brief", desc: "Understand event goals, audience, timing, and expectations.", icon: ClipboardList },
  { step: "02", title: "Plan", desc: "Define event format, venue options, suppliers, and flow.", icon: FileText },
  { step: "03", title: "Coordinate", desc: "Align vendors, logistics, content, and guest handling.", icon: Settings },
  { step: "04", title: "Execute", desc: "Manage on-ground delivery and issue resolution.", icon: Wrench },
  { step: "05", title: "Follow Through", desc: "Capture outcomes, follow-ups, and next steps.", icon: Target },
];

const faqs = [
  { q: "What types of events can SVBB support in Vietnam?", a: "We support conferences, seminars, networking events, product launches, trade missions, delegation visits, exhibitions, training workshops, and private business sessions across Vietnam." },
  { q: "Can you help with business delegation visits?", a: "Yes. We handle end-to-end delegation planning including itinerary design, venue booking, meeting coordination, transport, interpretation, and on-ground logistics." },
  { q: "Do you work with Singapore associations and institutions?", a: "Absolutely. We regularly support trade associations, chambers of commerce, educational institutions, and government-linked organisations planning events in Vietnam." },
  { q: "Can SVBB coordinate venues and local suppliers?", a: "Yes. Venue sourcing, AV setup, catering, printing, signage, and other supplier coordination are core parts of our service." },
  { q: "Do you provide bilingual support during the event?", a: "Yes. We provide English-Vietnamese bilingual liaison, interpretation, and guest coordination as part of our on-ground execution." },
  { q: "Can you support both small private events and larger conferences?", a: "Yes. We've supported intimate executive roundtables as well as larger multi-day conferences. Our service scales to your event's needs." },
  { q: "Which cities in Vietnam can you support?", a: "We primarily support events in Ho Chi Minh City and Hanoi, but can coordinate events in other cities including Da Nang, Hai Phong, and Can Tho." },
];

/* ───── component ───── */

const EventsManagement = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "", organisation: "", email: "", phone: "", eventType: "",
    city: "", date: "", guests: "", brief: "",
  });
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── 1. Hero ── */}
      <section id="ev-hero" className="relative min-h-[55vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroEvents} alt="Events Management" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-20">
          <div className="max-w-3xl">
            <span className="inline-block font-body text-xs font-semibold tracking-widest uppercase text-gold mb-4">Events Management</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              End-to-End Vietnam <span className="text-gradient-gold">Events Management</span> and Setup
            </h1>
            <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
              From conferences and trade missions to launches and networking events, SVBB helps Singapore organisations plan and deliver professional events in Vietnam with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <button onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity">
                Plan an Event <ArrowRight size={16} />
              </button>
              <button onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })} className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-8 py-3.5 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 transition-colors">
                Discuss Your Brief
              </button>
            </div>
            <p className="font-body text-primary-foreground/40 text-sm">One Singapore-facing partner. Local Vietnam execution.</p>
          </div>
        </div>
      </section>

      {/* ── 2. Who We Help ── */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Who We Help</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Trusted by Singapore <span className="text-gradient-gold">Organisations</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
            {audiences.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl border border-border p-6 hover:border-gold/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <a.icon className="text-gold-dark" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{a.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Event Types ── */}
      <section id="ev-types" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Event Types</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Events We <span className="text-gradient-gold">Deliver</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl">
            {eventTypes.map((e) => (
              <div key={e.title} className="bg-card rounded-xl border border-border p-5 text-center hover:border-gold/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-3">
                  <e.icon className="text-gold-dark" size={22} />
                </div>
                <h3 className="font-heading text-sm font-bold text-foreground">{e.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. What SVBB Handles ── */}
      <section id="ev-services" className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">What We Handle</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mt-3">
              Planning to <span className="text-gradient-gold">Execution</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <div className="bg-navy-light/30 border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <ClipboardList className="text-gold" size={20} />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground">Planning & Coordination</h3>
              </div>
              <ul className="space-y-3">
                {planningItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-primary-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-navy-light/30 border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                  <Wrench className="text-gold" size={20} />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground">On-Ground Execution</h3>
              </div>
              <ul className="space-y-3">
                {executionItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-gold mt-0.5 shrink-0" />
                    <span className="font-body text-sm text-primary-foreground/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Why Work With SVBB ── */}
      <section id="ev-why" className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Why SVBB</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              The Right <span className="text-gradient-gold">Cross-Border Partner</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {whyBlocks.map((w, i) => (
              <div key={w.title} className={`bg-card rounded-2xl border border-border p-6 hover:border-gold/30 hover:shadow-lg transition-all ${i >= 3 ? "lg:col-span-1" : ""}`}>
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <w.icon className="text-gold-dark" size={24} />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{w.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Featured Value ── */}
      <section className="py-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--gold)/0.06)_0%,_transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Brief us once. <span className="text-gradient-gold">We coordinate the rest.</span>
          </h2>
          <p className="font-body text-primary-foreground/60 text-lg leading-relaxed">
            SVBB bridges planning, local vendors, venue coordination, and on-site delivery so your team can focus on the event outcome rather than operational complexity.
          </p>
        </div>
      </section>

      {/* ── 7. Process ── */}
      <section id="ev-process" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Our Process</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              How We <span className="text-gradient-gold">Work</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl">
            {processSteps.map((s) => (
              <div key={s.step} className="relative bg-card border border-border rounded-xl p-5 hover:border-gold/30 transition-colors">
                <span className="font-heading text-4xl font-bold text-gold/10 absolute top-2 right-3">{s.step}</span>
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                  <s.icon className="text-gold-dark" size={20} />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-1.5">{s.title}</h3>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. Credibility / Trust Signals ── */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Globe, label: "Singapore-Vietnam Business Focus" },
              { icon: Languages, label: "Bilingual Support" },
              { icon: Handshake, label: "Cross-Border Coordination" },
              { icon: Building2, label: "Corporate & Institutional Ready" },
              { icon: MapPin, label: "On-Ground Execution" },
            ].map((t) => (
              <div key={t.label} className="text-center py-4">
                <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center mx-auto mb-2">
                  <t.icon className="text-gold-dark" size={20} />
                </div>
                <p className="font-body text-xs font-medium text-foreground">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. FAQ ── */}
      <section id="ev-faq" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-xl border border-border overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                  <span className="font-body text-sm font-semibold text-foreground pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-gold-dark shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 10. Lead Magnet ── */}
      <section className="py-16 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-navy-light/30 border border-gold/20 rounded-2xl p-8 md:p-12 text-center">
            <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
              <Download className="text-gold" size={28} />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-3">
              Vietnam Event Planning Checklist
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm mb-6 max-w-lg mx-auto">
              A practical checklist to help your team scope venues, suppliers, timelines, and execution needs before launching an event in Vietnam.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input type="email" placeholder="Your business email" className="flex-1 px-4 py-3 rounded-lg border border-gold/20 bg-navy-light/30 font-body text-sm text-primary-foreground placeholder:text-primary-foreground/30 focus:outline-none focus:ring-2 focus:ring-gold/50" />
              <button className="inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-6 py-3 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity whitespace-nowrap">
                <Download size={16} /> Get the Checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── 11. Final CTA + Contact Form ── */}
      <section id="ev-contact" ref={contactRef} className="py-20 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Start Planning</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                Bring your Vietnam event to life with the right <span className="text-gradient-gold">cross-border partner.</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                Talk to SVBB about your event goals, timeline, and delivery needs.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Email</p>
                    <a href="mailto:info@svbb.sg" className="font-body text-sm text-gold-dark hover:underline">info@svbb.sg</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">WhatsApp</p>
                    <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-gold-dark hover:underline">Chat with us</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="text-gold-dark mt-1 shrink-0" size={18} />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">Singapore Office</p>
                    <p className="font-body text-sm text-muted-foreground">114 Lavender Street #07-74 CT Hub 2, Singapore 338729</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Plan Your Event</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Name *</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="John Tan" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Organisation *</label>
                    <input value={form.organisation} onChange={(e) => setForm({ ...form, organisation: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Company / Association" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Email *</label>
                    <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="john@company.sg" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Phone / WhatsApp</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="+65 9123 4567" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Event Type</label>
                    <select value={form.eventType} onChange={(e) => setForm({ ...form, eventType: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 appearance-none">
                      <option value="">Select event type</option>
                      {eventTypes.map((et) => <option key={et.title} value={et.title}>{et.title}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Preferred City</label>
                    <select value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 appearance-none">
                      <option value="">Select city</option>
                      <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                      <option value="Hanoi">Hanoi</option>
                      <option value="Da Nang">Da Nang</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Estimated Date</label>
                    <input type="text" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="e.g. Q3 2026" />
                  </div>
                  <div>
                    <label className="font-body text-xs font-medium text-foreground block mb-1.5">Est. Guest Count</label>
                    <input type="text" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="e.g. 50–100" />
                  </div>
                </div>
                <div>
                  <label className="font-body text-xs font-medium text-foreground block mb-1.5">Project Brief</label>
                  <textarea value={form.brief} onChange={(e) => setForm({ ...form, brief: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 h-24 resize-none" placeholder="Tell us about your event..." />
                </div>
                <button type="submit" className="w-full bg-gradient-gold text-secondary-foreground py-3 rounded-lg font-body font-semibold shadow-gold hover:opacity-90 transition-opacity">
                  Start Planning
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-navy border-t border-gold/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <img src={svbbLogo} alt="SVBB Logo" className="h-10 w-auto mb-3" />
              <p className="font-body text-primary-foreground/50 text-sm leading-relaxed max-w-xs">
                Singapore Vietnam Business Bridge — helping Singapore organisations plan and deliver professional events in Vietnam with local execution support.
              </p>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-3">Quick Links</h4>
              <div className="space-y-2">
                {["Services", "Event Types", "Why SVBB", "Process", "FAQ", "Contact"].map((l, i) => (
                  <button key={l} onClick={() => scrollTo(["ev-services", "ev-types", "ev-why", "ev-process", "ev-faq", "ev-contact"][i])} className="block font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                    {l}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-sm font-semibold text-primary-foreground mb-3">Get In Touch</h4>
              <div className="space-y-3">
                <a href="mailto:info@svbb.sg" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                  <Mail size={14} /> info@svbb.sg
                </a>
                <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                  <MessageCircle size={14} /> WhatsApp
                </a>
                <a href="https://linkedin.com/company/svbb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                  <Linkedin size={14} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gold/10 mt-8 pt-6 text-center">
            <p className="font-body text-xs text-primary-foreground/30">© {new Date().getFullYear()} SVBB — Singapore Vietnam Business Bridge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EventsManagement;
