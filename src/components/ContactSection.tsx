import { Mail, MapPin, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

const interests = ["Hanoi Package", "Ho Chi Minh City Package", "MRA Grant Application", "General Inquiry"];

const ContactSection = () => {
  const [interest, setInterest] = useState("");

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Speak to a <span className="text-gradient-gold">Consultant</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Ready to enter Vietnam? Reach out and we'll guide you from grant application to on-ground execution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info + quick actions */}
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Singapore Office</p>
                    <p className="font-body text-muted-foreground text-sm">114 Lavender Street #07-7a CT Hub 2, Singapore 338729</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Vietnam Office</p>
                    <p className="font-body text-muted-foreground text-sm">66 Tran Trong Cung Street, Tan Thuan Dong Ward, District 7, Ho Chi Minh City</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-gold mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">Email</p>
                    <a href="mailto:info@svbb.sg" className="font-body text-gold-dark text-sm hover:underline">info@svbb.sg</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick action buttons */}
            <a
              href="https://wa.me/6581234567?text=Hi%20SVBB%2C%20I%27m%20interested%20in%20expanding%20to%20Vietnam%20via%20the%20MRA%20Grant."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[hsl(142,70%,40%)] text-primary-foreground px-6 py-4 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity w-full"
            >
              <MessageCircle size={20} />
              WhatsApp Us Directly
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-3 border-2 border-gold text-gold-dark px-6 py-4 rounded-xl font-body font-semibold hover:bg-gold/10 transition-colors w-full"
            >
              <Calendar size={20} />
              Book a Call (Coming Soon)
            </a>

            <div className="bg-navy rounded-xl p-8 text-primary-foreground">
              <h3 className="font-heading text-xl font-bold mb-3">Industries We Cover</h3>
              <div className="flex flex-wrap gap-2">
                {["F&B", "Retail", "Manufacturing", "Property", "Hospitality", "Technology", "Crypto", "Medical", "Education", "Logistics"].map((industry) => (
                  <span key={industry} className="px-3 py-1 rounded-full border border-gold/30 text-xs font-body text-gold">
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">Full Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="John Doe" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="john@company.com" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">Company</label>
                <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Your company name" />
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">I'm interested in…</label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
                >
                  <option value="">Select an option</option>
                  {interests.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">Message</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 h-24 resize-none" placeholder="Tell us about your Vietnam expansion plans..." />
              </div>
              <button type="submit" className="w-full bg-gradient-gold text-secondary-foreground py-3 rounded-lg font-body font-semibold shadow-gold hover:opacity-90 transition-opacity">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
