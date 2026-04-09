import { ExternalLink } from "lucide-react";
import logoWareflex from "@/assets/logo-wareflex.svg";
import logoHector from "@/assets/logo-hector.png";
import logoSokfarm from "@/assets/logo-sokfarm.svg";
import logoChavi from "@/assets/logo-chavi-garden.png";
import logoKofikai from "@/assets/logo-kofikai.png";
import logoMonamie from "@/assets/logo-monamie.jpg";
import logoDurica from "@/assets/logo-durica.jpg";
import logoThehub from "@/assets/logo-thehub.svg";

const businesses = [
  { name: "Wareflex", url: "https://www.wareflex.io/en", logo: logoWareflex },
  { name: "SoBanHang", url: "https://sobanhang.com", logo: null, initials: "SBH" },
  { name: "Kofi Kai", url: "https://kofikai.com.vn", logo: logoKofikai },
  { name: "Chavi Garden", url: "https://chavigarden.com", logo: logoChavi },
  { name: "Blenda Studios", url: null, logo: null, initials: "BS" },
  { name: "Hector", url: "https://hectorstore.com.vn/", logo: logoHector },
  { name: "C & Sea Salt Coffee", url: null, logo: null, initials: "CS" },
  { name: "Durica", url: "https://leplateaucoffee.vn/duricaeng/", logo: logoDurica },
  { name: "Sokfarm", url: "https://sokfarm.com/", logo: logoSokfarm },
  { name: "Mon Amie", url: "https://monamie.vn/", logo: logoMonamie },
  { name: "The Hub", url: "https://thehub.com.vn/", logo: logoThehub },
];

const VietnamBusinessesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-3">
            Vietnam Businesses that{" "}
            <span className="text-gradient-gold">We Work With</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
            Trusted by leading Vietnamese companies across diverse industries.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {businesses.map((b) => {
            const content = (
              <div className="bg-card rounded-xl border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300 p-3 sm:p-5 flex flex-col items-center text-center group h-full">
                <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center mb-3 overflow-hidden shrink-0">
                  {b.logo ? (
                    <img src={b.logo} alt={b.name} className="max-h-[70%] max-w-[70%] object-contain" />
                  ) : (
                    <span className="text-primary font-heading text-sm sm:text-lg font-bold">
                      {b.initials}
                    </span>
                  )}
                </div>
                <h3 className="font-heading text-xs sm:text-sm md:text-base font-bold text-foreground mb-1 sm:mb-2 line-clamp-2">
                  {b.name}
                </h3>
                {b.url ? (
                  <span className="flex items-center gap-1 text-gold text-[10px] sm:text-xs font-body font-semibold group-hover:gap-2 transition-all">
                    Visit Website <ExternalLink size={10} className="sm:w-3 sm:h-3" />
                  </span>
                ) : (
                  <span className="text-muted-foreground text-[10px] sm:text-xs font-body italic">
                    Coming soon
                  </span>
                )}
              </div>
            );

            return b.url ? (
              <a
                key={b.name}
                href={b.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={b.name}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VietnamBusinessesSection;
