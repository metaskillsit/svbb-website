import svbbLogo from "@/assets/svbb-logo.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold-dark font-body text-sm font-semibold tracking-widest uppercase">About SVBB</span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 leading-tight">
              Bridging Singapore &{" "}
              <span className="text-gradient-gold">Vietnam</span>{" "}
              Since Day One
            </h2>
            <p className="font-body text-muted-foreground mt-6 text-lg leading-relaxed">
              Singapore Vietnam Business Bridge (SVBB) is a premier business consulting firm dedicated to fostering strong commercial ties between Singapore and Vietnam. We provide tailored consulting services that help businesses navigate the complexities of international expansion into Vietnam.
            </p>
            <p className="font-body text-muted-foreground mt-4 text-lg leading-relaxed">
              Our commitment to excellence is reflected in our <strong className="text-foreground">client-centric approach</strong>, which emphasises collaboration, transparency and innovation. We are your partners in growth, dedicated to enabling your enterprise to thrive in the dynamic Asia-Pacific region.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10">
              {[
                { value: "37%", label: "Success Rate" },
                { value: "11+", label: "Years Combined" },
                { value: "3K+", label: "Clients Served" },
              ].map((s) => (
                <div key={s.label} className="text-center bg-card rounded-lg p-4 border border-border">
                  <div className="font-heading text-2xl font-bold text-navy">{s.value}</div>
                  <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-gold rounded-3xl opacity-10 blur-2xl" />
              <div className="relative bg-card rounded-2xl p-12 border border-border shadow-lg flex flex-col items-center">
                <img src={svbbLogo} alt="SVBB Logo" className="w-64 h-auto mb-8" loading="lazy" />
                <div className="text-center">
                  <p className="font-body text-sm text-muted-foreground">
                    <strong className="text-foreground">SG Office:</strong> 114 Lavender Street #07-7a CT Hub 2, Singapore 338729
                  </p>
                  <p className="font-body text-sm text-muted-foreground mt-2">
                    <strong className="text-foreground">VN Office:</strong> 66 Tran Trong Cung Street, Tan Thuan Dong Ward, District 7, HCMC
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-3">UEN: 202419761W</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
