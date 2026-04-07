import { MapPin, CheckCircle2, FileText, Play } from "lucide-react";
import RotatingImage from "./RotatingImage";

// Hanoi-specific photos only — verified Hanoi landmarks
const hanoiImages = [
  "https://images.unsplash.com/photo-1604050478796-5e4f2eb69907?w=800&q=80&auto=format", // Hanoi Hoan Kiem Lake temple
  "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80&auto=format", // Hanoi Old Quarter street
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&auto=format", // Hanoi train street
  "https://images.unsplash.com/photo-1580139614600-7a66e0aa9a09?w=800&q=80&auto=format", // Hanoi Long Bien Bridge
  "https://images.unsplash.com/photo-1535751094257-0e06b44feaac?w=800&q=80&auto=format", // Hanoi West Lake pagoda
];

// HCMC-specific photos only — verified HCMC landmarks
const hcmcImages = [
  "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80&auto=format", // HCMC Bitexco skyline aerial
  "https://images.unsplash.com/photo-1576842546775-83a96e1a7959?w=800&q=80&auto=format", // HCMC Notre Dame Cathedral
  "https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?w=800&q=80&auto=format", // HCMC Nguyen Hue walking street
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80&auto=format", // HCMC skyline night
  "https://images.unsplash.com/photo-1570868738084-f8efbe8b2a47?w=800&q=80&auto=format", // HCMC Ben Thanh market
];

const packages = [
  {
    city: "Hanoi",
    images: hanoiImages,
    industries: ["Manufacturing", "Technology", "F&B", "Education"],
    highlights: [
      "Market research & feasibility study",
      "Business matching with local partners",
      "Government & regulatory advisory",
      "Entity incorporation support",
      "Site visits & factory tours",
    ],
  },
  {
    city: "Ho Chi Minh City",
    images: hcmcImages,
    industries: ["Retail", "Property", "Logistics", "Hospitality"],
    highlights: [
      "Consumer market entry strategy",
      "JV & investment partner sourcing",
      "Trade finance & banking setup",
      "Office & warehouse site selection",
      "Networking events & delegations",
    ],
  },
];

const PackagesSection = () => {
  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">MRA-Funded Packages</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Choose Your <span className="text-gradient-gold">Entry Point</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Two curated packages — both eligible for up to 70% MRA Grant funding. Pick the city that fits your business, or let us advise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.city}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-gold/40 hover:shadow-gold transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <RotatingImage
                  images={pkg.images}
                  alt={`${pkg.city} landmarks`}
                  className="w-full h-full object-cover"
                  interval={8000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent z-10" />
                <div className="absolute bottom-4 left-6 flex items-center gap-2 z-10">
                  <MapPin className="text-gold" size={20} />
                  <h3 className="font-heading text-2xl font-bold text-primary-foreground">{pkg.city} Package</h3>
                </div>
                <div className="absolute top-4 right-4 bg-gold text-secondary-foreground px-3 py-1 rounded-full font-body text-xs font-bold z-10">
                  Up to 70% Funded
                </div>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.industries.map((ind) => (
                    <span key={ind} className="px-3 py-1 rounded-full border border-gold/30 text-xs font-body text-gold-dark font-medium">
                      {ind}
                    </span>
                  ))}
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.highlights.map((h) => (
                    <div key={h} className="flex items-start gap-3">
                      <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={16} />
                      <span className="font-body text-sm text-muted-foreground">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href="#contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-gold text-secondary-foreground px-5 py-3 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
                  >
                    <FileText size={16} />
                    View Full Deck
                  </a>
                  <a
                    href="#trips"
                    className="inline-flex items-center justify-center gap-2 border border-gold/40 text-gold px-5 py-3 rounded-lg font-body font-semibold text-sm hover:bg-gold/10 transition-colors"
                  >
                    <Play size={16} />
                    Watch Trip
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 font-body text-muted-foreground text-sm">
          Not sure which city? <a href="#contact" className="text-gold font-semibold hover:underline">Book a free consultation</a> and we'll recommend the best entry point for your business.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
