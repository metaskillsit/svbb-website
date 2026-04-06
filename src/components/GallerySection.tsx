import { useState } from "react";
import { X, Play } from "lucide-react";
import businessTripImg from "@/assets/business-trip.jpg";
import galleryMinister from "@/assets/gallery-minister.png";
import galleryAwards from "@/assets/gallery-awards.png";

const galleryItems = [
  {
    img: galleryMinister,
    title: "Meeting with Vietnam's Minister of Trade",
    desc: "SVBB leadership with the Minister of Trade and Industry Affairs of Vietnam.",
  },
  {
    img: "https://svbb.sg/wp-content/uploads/2024/06/PL-NewspaperWithPresidentTop100Vntalentstorebuildcountry-300x192.jpg",
    title: "Top 100 Talent Invitation by the President",
    desc: "President's invitation of Top 100 Talent to help build Vietnam — featuring SVBB's recognition.",
  },
  {
    img: galleryAwards,
    title: "Receipt of Awards",
    desc: "SVBB leadership receiving awards for contributions to Singapore-Vietnam bilateral relations.",
  },
];

const GallerySection = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="trips" className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">Past Events</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Trips & <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            Real photos from SVBB-led business delegations, government meetings, and industry networking events in Vietnam.
          </p>
        </div>

        {/* Video embed placeholder */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-navy-light/30 border border-gold/20 aspect-video max-w-4xl mx-auto flex items-center justify-center">
          <div className="text-center">
            <Play size={64} className="text-gold mx-auto mb-4" />
            <p className="font-heading text-xl font-bold">Trip Video Coming Soon</p>
            <p className="font-body text-primary-foreground/60 text-sm mt-2">
              Contact us for exclusive trip footage and event recordings
            </p>
          </div>
        </div>

        {/* Featured trip image */}
        <div
          className="mb-12 rounded-2xl overflow-hidden relative cursor-pointer"
          onClick={() => setLightboxImg(businessTripImg)}
        >
          <img
            src={businessTripImg}
            alt="SVBB business delegation in Vietnam"
            className="w-full h-64 md:h-96 object-cover"
            loading="lazy"
            width={800}
            height={600}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent flex items-end">
            <div className="p-8 md:p-12">
              <h3 className="font-heading text-2xl md:text-3xl font-bold">Singapore-Vietnam Business Delegation</h3>
              <p className="font-body text-primary-foreground/70 mt-2">
                SVBB-led business trips connecting Singapore enterprises with Vietnamese industry partners and factories.
              </p>
            </div>
          </div>
        </div>

        {/* Photo grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer"
              onClick={() => setLightboxImg(item.img)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 bg-navy-light/30">
                <h4 className="font-heading text-lg font-bold">{item.title}</h4>
                <p className="font-body text-sm text-primary-foreground/65 mt-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-12 font-body text-primary-foreground/50 text-sm">
          More photos and videos from our past business trips coming soon. Contact us to learn about upcoming trips.
        </p>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/90 backdrop-blur-sm" onClick={() => setLightboxImg(null)}>
          <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-navy/80 text-primary-foreground flex items-center justify-center hover:bg-navy" onClick={() => setLightboxImg(null)}>
            <X size={20} />
          </button>
          <img src={lightboxImg} alt="Gallery photo" className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg" />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
