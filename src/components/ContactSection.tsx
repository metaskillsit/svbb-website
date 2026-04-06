import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Get In Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Start Your Vietnam <span className="text-gradient-gold">Journey Today</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Don't hesitate to get in touch with us and gain quick market access to real business networks and resources in Vietnam.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-8">
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
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="John" />
                </div>
                <div>
                  <label className="font-body text-sm font-medium text-foreground block mb-1.5">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50" placeholder="Doe" />
                </div>
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
                <label className="font-body text-sm font-medium text-foreground block mb-1.5">How can we help?</label>
                <textarea className="w-full px-4 py-3 rounded-lg border border-border bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 h-28 resize-none" placeholder="Tell us about your Vietnam expansion plans..." />
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
