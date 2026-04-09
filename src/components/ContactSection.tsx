import { Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">{t("contact.sectionTag")}</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            {t("contact.sectionTitle1")} <span className="text-gradient-gold">{t("contact.sectionTitleHighlight")}</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">{t("contact.sectionDesc")}</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-card rounded-xl p-8 border border-border">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">{t("contact.contactInfo")}</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">{t("contact.sgOffice")}</p>
                  <p className="font-body text-muted-foreground text-sm">{t("contact.sgAddress")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">{t("contact.vnOffice")}</p>
                  <p className="font-body text-muted-foreground text-sm">{t("contact.vnAddress")}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-gold mt-1 flex-shrink-0" size={20} />
                <div>
                  <p className="font-body font-semibold text-foreground text-sm">{t("contact.email")}</p>
                  <a href="mailto:info@svbb.sg" className="font-body text-gold-dark text-sm hover:underline">info@svbb.sg</a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-navy rounded-xl p-8 text-primary-foreground">
            <h3 className="font-heading text-xl font-bold mb-3">{t("contact.industries")}</h3>
            <div className="flex flex-wrap gap-2">
              {["F&B", "Retail", "Manufacturing", "Property", "Hospitality", "Technology", "Crypto", "Medical", "Education", "Logistics"].map((industry) => (
                <span key={industry} className="px-3 py-1 rounded-full border border-gold/30 text-xs font-body text-gold">{industry}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
