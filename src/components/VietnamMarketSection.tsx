import RotatingImage from "./RotatingImage";

const vietnamImages = [
  "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1562602833-0f4ab2fc46e5?w=800&q=80&auto=format",
  "https://images.unsplash.com/photo-1555921015-5532091f6026?w=800&q=80&auto=format",
];

const stats = [
  { value: "US$476.39B", label: "GDP (2024)", source: "World Bank" },
  { value: "7.1%", label: "GDP Growth (2024)", source: "World Bank" },
  { value: "101M", label: "Population", source: "World Bank" },
  { value: "US$4,717", label: "GDP Per Capita", source: "World Bank" },
  { value: "10th", label: "SG Trading Partner", source: "Enterprise SG" },
  { value: "S$39.95B", label: "Bilateral Trade", source: "Enterprise SG" },
];

const opportunities = [
  {
    title: "Manufacturing Hub",
    desc: "Competitive labour costs, robust FTAs, and growing high-tech sector. Apple, Samsung, and Foxconn are already expanding operations.",
  },
  {
    title: "Consumer Market",
    desc: "101M population with fastest-growing middle class in SEA. Consumer spending boom fuelled by rising disposable income.",
  },
  {
    title: "Technology & Innovation",
    desc: "4 unicorns, 3,800+ startups, and abundant cost-competitive IT talent. 70% of the population under 35.",
  },
  {
    title: "Infrastructure",
    desc: "US$605B infrastructure investment needed by 2040. Opportunities in renewable energy, smart cities, and water treatment.",
  },
];

const VietnamMarketSection = () => {
  return (
    <section id="vietnam-market" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">Why Vietnam</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3">
            Southeast Asia's <span className="text-gradient-gold">Fastest Growing</span> Economy
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto text-lg">
            Vietnam offers prime business opportunities with a large consumer market, vibrant manufacturing landscape, and a young abundant workforce.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-xl p-5 text-center border border-border">
              <div className="font-heading text-xl md:text-2xl font-bold text-navy">{s.value}</div>
              <div className="font-body text-xs text-muted-foreground mt-1">{s.label}</div>
              <div className="font-body text-[10px] text-gold-dark mt-1">{s.source}</div>
            </div>
          ))}
        </div>

        {/* Opportunities */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden">
            <RotatingImage
              images={vietnamImages}
              alt="Vietnam Ho Chi Minh City"
              className="w-full h-full object-cover min-h-[300px]"
              interval={4500}
              width={800}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground">Key Opportunities</h3>
            {opportunities.map((opp) => (
              <div key={opp.title} className="bg-card rounded-lg p-5 border border-border">
                <h4 className="font-heading text-lg font-bold text-navy mb-2">{opp.title}</h4>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{opp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VietnamMarketSection;
