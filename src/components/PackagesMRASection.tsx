import { MapPin, CheckCircle2, FileText, Play, FileCheck, DollarSign, Rocket } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState, useEffect } from "react";

const hanoiImages = [
  "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1604050478796-5e4f2eb69907?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1573790387438-4da905039392?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&auto=format",
];

const hcmcImages = [
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=800&q=80&auto=format",
];

const RotatingBg = ({ images, children, className }: { images: string[]; children: React.ReactNode; className?: string }) => {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % images.length), 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <img key={src} src={src} alt="" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`} loading="lazy" />
      ))}
      {children}
    </div>
  );
};

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

const steps = [
  { icon: FileCheck, step: "01", title: "Eligibility Check", desc: "We assess your business eligibility — SG-registered SMEs with at least 30% local shareholding qualify." },
  { icon: DollarSign, step: "02", title: "Grant Application", desc: "SVBB handles the full application with Enterprise SG — up to 70% of qualifying costs, capped at S$100K." },
  { icon: Rocket, step: "03", title: "Market Entry Execution", desc: "From market research to entity setup — we execute your Vietnam market entry plan end-to-end." },
  { icon: CheckCircle2, step: "04", title: "Ongoing Support", desc: "Post-entry advisory, compliance support, and continued networking." },
];

const PackagesMRASection = () => {
  return (
    <section id="mra-grant" className="py-20 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">Your Vietnam Entry</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Packages & <span className="text-gradient-gold">MRA Grant</span>
          </h2>
        </div>

        <Tabs defaultValue="packages" className="w-full">
          <TabsList className="mx-auto flex w-fit bg-navy-light/50 border border-gold/20 rounded-lg p-1 mb-8">
            <TabsTrigger value="packages" className="font-body font-semibold text-sm px-6 py-2.5 data-[state=active]:bg-gold data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md text-primary-foreground/70">
              Entry Packages
            </TabsTrigger>
            <TabsTrigger value="mra" className="font-body font-semibold text-sm px-6 py-2.5 data-[state=active]:bg-gold data-[state=active]:text-secondary-foreground data-[state=active]:shadow-none rounded-md text-primary-foreground/70">
              MRA Grant
            </TabsTrigger>
          </TabsList>

          <TabsContent value="packages">
            <div className="grid md:grid-cols-2 gap-6">
              {packages.map((pkg) => (
                <div key={pkg.city} className="group bg-navy-light/30 rounded-2xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all">
                  <RotatingBg images={pkg.images} className="h-48">
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent" />
                    <div className="absolute bottom-3 left-5 flex items-center gap-2">
                      <MapPin className="text-gold" size={18} />
                      <h3 className="font-heading text-xl font-bold text-primary-foreground">{pkg.city}</h3>
                    </div>
                    <div className="absolute top-3 right-3 bg-gold text-secondary-foreground px-2.5 py-0.5 rounded-full font-body text-xs font-bold">Up to 70% Funded</div>
                  </RotatingBg>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.industries.map((ind) => (
                        <span key={ind} className="px-2.5 py-0.5 rounded-full border border-gold/30 text-xs font-body text-gold font-medium">{ind}</span>
                      ))}
                    </div>
                    <div className="space-y-2 mb-5">
                      {pkg.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2">
                          <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={14} />
                          <span className="font-body text-xs text-primary-foreground/70">{h}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-1.5 bg-gradient-gold text-secondary-foreground px-4 py-2.5 rounded-lg font-body font-semibold text-xs shadow-gold hover:opacity-90 transition-opacity">
                        <FileText size={14} /> View Deck
                      </a>
                      <a href="#trips" className="inline-flex items-center justify-center gap-1.5 border border-gold/40 text-gold px-4 py-2.5 rounded-lg font-body font-semibold text-xs hover:bg-gold/10 transition-colors">
                        <Play size={14} /> Watch
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 font-body text-primary-foreground/50 text-sm">
              Not sure which city? <a href="#contact" className="text-gold font-semibold hover:underline">Book a free consultation</a>.
            </p>
          </TabsContent>

          <TabsContent value="mra">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((s) => (
                <div key={s.step} className="relative bg-navy-light/30 border border-gold/20 rounded-xl p-6 hover:border-gold/50 transition-colors">
                  <span className="font-heading text-4xl font-bold text-gold/15 absolute top-3 right-4">{s.step}</span>
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <s.icon className="text-gold" size={20} />
                  </div>
                  <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
                  <p className="font-body text-primary-foreground/65 leading-relaxed text-xs">{s.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gold/10 border border-gold/30 rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { value: "70%", label: "Of qualifying costs covered" },
                  { value: "S$100K", label: "Max grant per new market" },
                  { value: "100%", label: "Application support by SVBB" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-heading text-2xl md:text-3xl font-bold text-gold">{stat.value}</div>
                    <div className="font-body text-xs text-primary-foreground/60 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8">
          <a
            href="#survey"
            className="inline-flex items-center gap-2 bg-gradient-gold text-secondary-foreground px-8 py-3.5 rounded-lg font-body font-semibold text-sm shadow-gold hover:opacity-90 transition-opacity"
          >
            Check If You Qualify →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PackagesMRASection;
