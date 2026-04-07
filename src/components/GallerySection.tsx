import { useState } from "react";
import { X } from "lucide-react";
import businessTripImg from "@/assets/business-trip.jpg";
import galleryMinister from "@/assets/gallery-minister.png";
import galleryAwards from "@/assets/gallery-awards.png";
import gallery3586 from "@/assets/gallery/QPTS3586.webp";
import gallery3630 from "@/assets/gallery/QPTS3630.webp";
import gallery3674 from "@/assets/gallery/QPTS3674.webp";
import gallery3705 from "@/assets/gallery/QPTS3705.webp";
import gallery3714 from "@/assets/gallery/QPTS3714.webp";
import gallery3816 from "@/assets/gallery/QPTS3816.webp";
import gallery3831 from "@/assets/gallery/QPTS3831.webp";
import gallery3836 from "@/assets/gallery/QPTS3836.webp";
import gallery3839 from "@/assets/gallery/QPTS3839.webp";
import gallery3848 from "@/assets/gallery/QPTS3848.webp";
import gallery3852 from "@/assets/gallery/QPTS3852.webp";
import gallery3854 from "@/assets/gallery/QPTS3854.webp";
import gallery3945 from "@/assets/gallery/QPTS3945.webp";
import gallery3949 from "@/assets/gallery/QPTS3949.webp";
import gallery3953 from "@/assets/gallery/QPTS3953.webp";
import gallery3956 from "@/assets/gallery/QPTS3956.webp";

const galleryItems = [
  { img: galleryMinister, title: "Meeting with Vietnam's Minister of Trade", desc: "SVBB leadership with the Minister of Trade and Industry Affairs of Vietnam." },
  { img: "https://svbb.sg/wp-content/uploads/2024/06/PL-NewspaperWithPresidentTop100Vntalentstorebuildcountry-300x192.jpg", title: "Top 100 Talent Invitation by the President", desc: "President's invitation of Top 100 Talent to help build Vietnam — featuring SVBB's recognition." },
  { img: galleryAwards, title: "Receipt of Awards", desc: "SVBB leadership receiving awards for contributions to Singapore-Vietnam bilateral relations." },
  { img: gallery3674, title: "SMU Academy Partnership", desc: "Handshake and partnership signing at SMU Academy." },
  { img: gallery3586, title: "Business Presentation", desc: "SVBB presenting market entry strategies to Singapore enterprises." },
  { img: gallery3630, title: "Factory Visit", desc: "On-site factory and workshop inspection during a Vietnam business trip." },
  { img: gallery3705, title: "Networking Dinner", desc: "Group networking dinner connecting Singapore and Vietnamese business leaders." },
  { img: gallery3714, title: "Certificate of Appreciation", desc: "SVBB receiving a Certificate of Appreciation for bilateral contributions." },
  { img: gallery3816, title: "UOB Speaker Session", desc: "Industry speaker session hosted in partnership with UOB." },
  { img: gallery3831, title: "Seminar Audience", desc: "Attendees at an SVBB-organised business seminar on Vietnam market entry." },
  { img: gallery3836, title: "Sunwah Group Photo", desc: "Group photo at Sunwah Innovation Centre in Ho Chi Minh City." },
];

const GallerySection = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section id="trips" className="py-24 bg-gradient-navy text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-body text-sm font-semibold tracking-widest uppercase">See Us In Action</span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-3">
            Trips & <span className="text-gradient-gold">Events</span>
          </h2>
          <p className="font-body text-primary-foreground/70 mt-4 max-w-2xl mx-auto text-lg">
            Real photos from SVBB-led business delegations, government meetings, and industry networking events in Vietnam.
          </p>
        </div>

        {/* Video embeds — 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-2xl overflow-hidden border border-gold/20 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/hXLQ_x2jHlw"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="SVBB Video 1"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-gold/20 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/KiN47XWso24"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="SVBB Video 2"
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-gold/20 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/xgb1oDP2Yj4"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="SVBB Video 3"
              loading="lazy"
            />
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

        {/* Photo grid — 11 items */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className="group rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-colors cursor-pointer"
              onClick={() => setLightboxImg(item.img)}
            >
              <div className="h-40 md:h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4 bg-navy-light/30">
                <h4 className="font-heading text-sm md:text-base font-bold leading-tight">{item.title}</h4>
                <p className="font-body text-xs text-primary-foreground/65 mt-1 line-clamp-2">{item.desc}</p>
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
