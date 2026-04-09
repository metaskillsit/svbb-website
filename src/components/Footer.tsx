import { useTranslation } from "react-i18next";
import svbbLogo from "@/assets/svbb-logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-dark text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={svbbLogo} alt="SVBB Logo" className="h-14 w-auto mb-4" loading="lazy" />
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed max-w-md">
              {t("footer.desc")}
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">{t("footer.quickLinks")}</h4>
            <div className="space-y-2">
              {[
                { label: t("footer.packages"), href: "#packages" },
                { label: t("footer.mraGrant"), href: "#mra-grant" },
                { label: t("footer.partners"), href: "#partners" },
                { label: t("footer.whyVietnam"), href: "#vietnam-market" },
                { label: t("footer.tripsEvents"), href: "#trips" },
                { label: t("footer.ourTeam"), href: "#team" },
                { label: t("footer.contact"), href: "#contact" },
              ].map((link) => (
                <a key={link.label} href={link.href} className="block font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-lg font-bold mb-4 text-gold">{t("footer.connect")}</h4>
            <div className="space-y-2 font-body text-sm text-primary-foreground/50">
              <a href="https://www.facebook.com/svbb.sg" target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">{t("footer.facebook")}</a>
              <a href="https://svbb.sg" target="_blank" rel="noopener noreferrer" className="block hover:text-gold transition-colors">{t("footer.website")}</a>
              <a href="mailto:info@svbb.sg" className="block hover:text-gold transition-colors">info@svbb.sg</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-primary-foreground/40">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="font-body text-xs text-primary-foreground/30">
            {t("footer.mraApproved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
