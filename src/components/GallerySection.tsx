import { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";
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
import gallery3964 from "@/assets/gallery/QPTS3964.webp";
import gallery4215 from "@/assets/gallery/QPTS4215.webp";
import gallery4250 from "@/assets/gallery/QPTS4250.webp";
import gallery4251 from "@/assets/gallery/QPTS4251.webp";
import gallery4270 from "@/assets/gallery/QPTS4270.webp";
import gallery4280 from "@/assets/gallery/QPTS4280.webp";
import gallery4312 from "@/assets/gallery/QPTS4312.webp";
import gallery4319 from "@/assets/gallery/QPTS4319.webp";
import gallery4323 from "@/assets/gallery/QPTS4323.webp";
import gallery4342 from "@/assets/gallery/QPTS4342.webp";
import gallery4354 from "@/assets/gallery/QPTS4354.webp";
import gallery4358 from "@/assets/gallery/QPTS4358.webp";
import gallery4366 from "@/assets/gallery/QPTS4366.webp";
import gallery4374 from "@/assets/gallery/QPTS4374.webp";
import gallery4394 from "@/assets/gallery/QPTS4394.webp";
import gallery4402 from "@/assets/gallery/QPTS4402.webp";
import gallery4434 from "@/assets/gallery/QPTS4434.webp";
import gallery4442 from "@/assets/gallery/QPTS4442.webp";
import gallery4453 from "@/assets/gallery/QPTS4453.webp";
import gallery4454 from "@/assets/gallery/QPTS4454.webp";
import gallery4465 from "@/assets/gallery/QPTS4465.webp";
import gallery5799 from "@/assets/gallery/QPTS5799.webp";
import gallery5807 from "@/assets/gallery/QPTS5807.webp";
import gallery5822 from "@/assets/gallery/QPTS5822.webp";
import gallery5848 from "@/assets/gallery/QPTS5848.webp";
import gallery5855 from "@/assets/gallery/QPTS5855.webp";
import gallery5921 from "@/assets/gallery/QPTS5921.webp";
import gallery5940 from "@/assets/gallery/QPTS5940.webp";
import gallery5970 from "@/assets/gallery/QPTS5970.webp";
import gallery5996 from "@/assets/gallery/QPTS5996.webp";
import gallery6002 from "@/assets/gallery/QPTS6002.webp";
import gallery6025 from "@/assets/gallery/QPTS6025.webp";
import gallery6042 from "@/assets/gallery/QPTS6042.webp";
import gallery6047 from "@/assets/gallery/QPTS6047.webp";
import gallery6052 from "@/assets/gallery/QPTS6052.webp";
import gallery6057 from "@/assets/gallery/QPTS6057.webp";
import gallery6072 from "@/assets/gallery/QPTS6072.webp";
import gallery6077 from "@/assets/gallery/QPTS6077.webp";
import gallery6078 from "@/assets/gallery/QPTS6078.webp";
import gallery6082 from "@/assets/gallery/QPTS6082.webp";
import gallery6094 from "@/assets/gallery/QPTS6094.webp";
import gallery6109 from "@/assets/gallery/QPTS6109.webp";
import gallery6112 from "@/assets/gallery/QPTS6112.webp";
import gallery6113 from "@/assets/gallery/QPTS6113.webp";
import gallery6114 from "@/assets/gallery/QPTS6114.webp";
import gallery6115 from "@/assets/gallery/QPTS6115.webp";
import gallery6121 from "@/assets/gallery/QPTS6121.webp";
import gallery6122 from "@/assets/gallery/QPTS6122.webp";
import gallery6123 from "@/assets/gallery/QPTS6123.webp";
import gallery6124 from "@/assets/gallery/QPTS6124.webp";
import gallery6150 from "@/assets/gallery/QPTS6150.webp";
import gallery6176 from "@/assets/gallery/QPTS6176.webp";
import galleryRON from "@/assets/gallery/RON05321.webp";

type GalleryItem = { img: string; title: string; desc: string };

const categories: { name: string; items: GalleryItem[] }[] = [
  {
    name: "Government & Awards",
    items: [
      { img: galleryMinister, title: "Meeting with Vietnam's Minister of Trade", desc: "SVBB leadership with the Minister of Trade and Industry Affairs of Vietnam." },
      { img: "https://svbb.sg/wp-content/uploads/2024/06/PL-NewspaperWithPresidentTop100Vntalentstorebuildcountry-300x192.jpg", title: "Top 100 Talent Invitation", desc: "President's invitation of Top 100 Talent to help build Vietnam." },
      { img: galleryAwards, title: "Receipt of Awards", desc: "SVBB leadership receiving awards for bilateral contributions." },
      { img: gallery3714, title: "Certificate of Appreciation", desc: "SVBB receiving a Certificate of Appreciation." },
      { img: gallery3848, title: "Certificate at Sunwah", desc: "Certificate presentation ceremony at Sunwah Innovation Centre." },
      { img: gallery3852, title: "Certificate of Recognition", desc: "Recipient receiving certificate for bilateral contributions." },
      { img: gallery3945, title: "Best Spots Around Town", desc: "Certificate presentation at the Best Spots Around Town event." },
      { img: gallery3949, title: "Blenda Studios Recognition", desc: "Certificate presentation to Blenda Studios representative." },
      { img: gallery3953, title: "Certificate Award Ceremony", desc: "Recipient receiving a certificate at the SVBB awards ceremony." },
      { img: gallery3956, title: "Cultural Recognition Award", desc: "Certificate presentation to recipient in traditional ao dai attire." },
      { img: gallery5855, title: "SoBanHang Certificate", desc: "Certificate of Appreciation presented to SoBanHang." },
      { img: gallery5940, title: "Wareflex Certificate", desc: "Certificate of Appreciation presented to Wareflex." },
      { img: gallery6052, title: "Kofi Kai Certificate", desc: "Certificate of Appreciation presented to Kofi Kai." },
    ],
  },
  {
    name: "Factory & Site Visits",
    items: [
      { img: gallery3630, title: "Factory Visit", desc: "On-site factory and workshop inspection during a Vietnam business trip." },
      { img: gallery4250, title: "Factory Floor Tour", desc: "Factory floor tour with delegation in cleanroom gear." },
      { img: gallery4251, title: "Machinery Inspection", desc: "Factory tour inspecting production machinery." },
      { img: gallery4270, title: "Production Line Walkthrough", desc: "Walking through the production line during factory visit." },
      { img: gallery4280, title: "Packaging Machinery Demo", desc: "Demonstration of packaging machinery during factory visit." },
      { img: gallery4465, title: "Processing Facility Tour", desc: "Delegation touring a food processing facility." },
      { img: gallery5799, title: "The Hub Group Photo", desc: "Delegation group photo at The Hub co-working space in HCMC." },
      { img: gallery5807, title: "The Hub Office Tour", desc: "Guided tour of The Hub office and co-working facilities." },
      { img: gallery5822, title: "Tech Office Visit", desc: "Delegation visiting a tech company's open-plan office." },
    ],
  },
  {
    name: "Seminars & Presentations",
    items: [
      { img: gallery3586, title: "Business Presentation", desc: "SVBB presenting market entry strategies to Singapore enterprises." },
      { img: gallery3674, title: "SMU Academy Partnership", desc: "Handshake and partnership signing at SMU Academy." },
      { img: gallery3816, title: "UOB Speaker Session", desc: "Industry speaker session hosted in partnership with UOB." },
      { img: gallery3831, title: "Seminar Audience", desc: "Attendees at an SVBB-organised business seminar." },
      { img: gallery3854, title: "Sunwah Seminar Audience", desc: "Attendees at a business seminar at Sunwah Innovation Centre." },
      { img: gallery4215, title: "Product Showcase Workshop", desc: "Hands-on product showcase and workshop session." },
      { img: gallery4358, title: "Chavi Garden Briefing", desc: "Presentation and briefing session at Chavi Garden." },
      { img: gallery4366, title: "Chavi Garden Seminar", desc: "Audience at a seminar session held at Chavi Garden." },
      { img: gallery4374, title: "Guest Speaker", desc: "Guest speaker presenting at the Chavi Garden event." },
      { img: gallery4394, title: "Panel Discussion", desc: "Panel discussion with delegation members at Chavi Garden." },
      { img: gallery5848, title: "SoBanHang Presentation", desc: "Product demo presentation at SoBanHang office." },
      { img: gallery5921, title: "Wareflex Logistics Briefing", desc: "Wareflex presenting their logistics platform." },
    ],
  },
  {
    name: "Kofi Kai & Coffee",
    items: [
      { img: gallery5970, title: "Kofi Kai Café Session", desc: "Delegation attending a presentation at Kofi Kai café." },
      { img: gallery5996, title: "Kofi Kai Video Screening", desc: "Video screening of coffee production at Kofi Kai." },
      { img: gallery6002, title: "Kofi Kai Speaker", desc: "Speaker presenting at Kofi Kai café venue." },
      { img: gallery6025, title: "Coffee Industry Talk", desc: "Guest speaker discussing Vietnam's coffee industry." },
      { img: gallery6042, title: "Kofi Kai Hosts", desc: "Kofi Kai hosts presenting to the delegation." },
      { img: gallery6047, title: "Vietnamese Coffee", desc: "Fresh cà phê tươi — local Vietnamese coffee." },
      { img: gallery6057, title: "Coffee Roaster Tour", desc: "Delegation viewing the Kofi Kai coffee roasting machinery." },
      { img: gallery6072, title: "Roaster Discussion", desc: "Delegates discussing with Kofi Kai at the pilot roasters." },
      { img: gallery6077, title: "Coffee Product Display", desc: "Browsing Kofi Kai's coffee product offerings." },
      { img: gallery6078, title: "Coffee Equipment Showcase", desc: "Delegates examining coffee brewing equipment." },
      { img: gallery6082, title: "Kofi Kai Café Interior", desc: "Full view of Kofi Kai café with the delegation." },
      { img: gallery6094, title: "Kofi Kai Group Photo", desc: "Delegates with Kofi Kai owner at the café." },
    ],
  },
  {
    name: "Products & Showcases",
    items: [
      { img: gallery6109, title: "Vietnamese Product Display", desc: "Showcase of Vietnamese products — vermicelli, coffee, and health drinks." },
      { img: gallery6112, title: "Bánh Hỏi Rau Củ", desc: "Vegetable fine rice vermicelli — specialty of Bình Định." },
      { img: gallery6113, title: "Hector Cordyceps Drinks", desc: "Hector brand đông trùng hạ thảo health supplements." },
      { img: gallery6114, title: "Vietnamese Coffee Brands", desc: "C & Sea salt coffee and Durica durian coffee products." },
      { img: gallery6115, title: "Hector Product Close-up", desc: "Close-up of Hector cordyceps supplement bottles." },
      { img: gallery6121, title: "Product Showcase Table", desc: "Full product display table with Vietnamese F&B brands." },
      { img: gallery6122, title: "Hector Brochure & Samples", desc: "Hector product brochure with sample bottles." },
      { img: gallery6123, title: "Tony Buổi Sáng Charity", desc: "Tony Buổi Sáng charity brochures and Vietnamese products." },
      { img: gallery6124, title: "Sokfarm Gift Bags", desc: "Sokfarm coconut nectar gift bags from Trà Vinh." },
      { img: gallery4319, title: "Local Product Showroom", desc: "Business networking at a local product showroom." },
      { img: gallery4434, title: "Chavi Garden Product Store", desc: "Delegation browsing local products at the Chavi Garden store." },
    ],
  },
  {
    name: "Networking & Dinners",
    items: [
      { img: gallery3705, title: "Networking Dinner", desc: "Group networking dinner connecting Singapore and Vietnamese business leaders." },
      { img: gallery4354, title: "Group Lunch at Chavi", desc: "Delegation sharing a group lunch at Chavi Garden." },
      { img: gallery4402, title: "Gift Exchange", desc: "Gift exchange between SVBB and Chavi Garden host." },
      { img: gallery4442, title: "Chavi Garden Reception", desc: "Delegates at the Chavi Garden reception counter." },
      { img: gallery4453, title: "Outdoor Networking", desc: "Delegates networking outdoors at a garden resort venue." },
      { img: gallery4454, title: "Resort Courtyard Gathering", desc: "Group gathering at the resort courtyard." },
      { img: gallery6150, title: "Saigon Dinner Venue", desc: "Delegation dinner at a traditional Saigon-style restaurant." },
      { img: gallery6176, title: "New Ventures Dinner", desc: "Networking dinner with 'New Ventures in Vietnam' presentation." },
    ],
  },
  {
    name: "Group Photos & Tours",
    items: [
      { img: gallery3836, title: "Sunwah Group Photo", desc: "Group photo at Sunwah Innovation Centre in HCMC." },
      { img: gallery3839, title: "SMU Delegation at Sunwah", desc: "SMU Academy delegation group photo at Sunwah." },
      { img: gallery3964, title: "Delegation Group Photo", desc: "Business delegation group photo in conference room." },
      { img: gallery4312, title: "Chavi Garden, Long An", desc: "Group photo at Chavi Garden in Long An province." },
      { img: gallery4323, title: "Garden Train Ride", desc: "Delegation enjoying a train ride tour at Chavi Garden." },
      { img: gallery4342, title: "Orchard Farm Visit", desc: "Delegation touring the orchard grounds in Long An." },
      { img: galleryRON, title: "Mon Amie Group Photo", desc: "Full delegation group photo at Mon Amie tailor shop in HCMC." },
    ],
  },
];

// Flatten for lightbox navigation
const allItems = categories.flatMap((c) => c.items);

const videoEmbeds = [
  { id: "hXLQ_x2jHlw", title: "SVBB Business Trip Highlights" },
  { id: "KiN47XWso24", title: "Vietnam Market Opportunities" },
  { id: "xgb1oDP2Yj4", title: "Delegation Networking Event" },
];

const ScrollRow = ({
  items,
  onSelect,
}: {
  items: GalleryItem[];
  onSelect: (item: GalleryItem) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll continuously
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || items.length <= 3) return;

    let animationId: number;
    const speed = 0.5; // px per frame

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // Loop back when reaching the end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused, items.length]);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div
      className="relative group/row"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 3000)}
    >
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-navy-dark/80 border border-gold/30 text-primary-foreground flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity hover:bg-navy-dark"
      >
        <ChevronLeft size={20} />
      </button>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="flex-shrink-0 w-56 md:w-64 group cursor-pointer"
            onClick={() => onSelect(item)}
          >
            <div className="rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 transition-all hover:shadow-gold/20 hover:shadow-lg">
              <div className="h-40 md:h-44 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-3 bg-navy-dark/40">
                <h4 className="font-heading text-sm font-bold leading-tight text-primary-foreground truncate">{item.title}</h4>
                <p className="font-body text-xs text-primary-foreground/60 mt-1 line-clamp-1">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-navy-dark/80 border border-gold/30 text-primary-foreground flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-opacity hover:bg-navy-dark"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const VideoCard = ({ videoId, title }: { videoId: string; title: string }) => {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden border border-gold/20 aspect-video relative">
      {!playing ? (
        <button
          onClick={() => setPlaying(true)}
          className="w-full h-full relative group"
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-navy-dark/40 group-hover:bg-navy-dark/20 transition-colors flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play size={28} className="text-navy-dark ml-1" />
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-dark/80 to-transparent">
            <p className="font-body text-sm text-primary-foreground font-medium">{title}</p>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=1&iv_load_policy=3&disablekb=0&fs=1&color=white`}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      )}
    </div>
  );
};

const GallerySection = () => {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (item: GalleryItem) => {
    const idx = allItems.findIndex((i) => i.title === item.title);
    setLightboxIdx(idx >= 0 ? idx : null);
  };

  const navigateLightbox = (dir: "prev" | "next") => {
    if (lightboxIdx === null) return;
    if (dir === "prev") setLightboxIdx(lightboxIdx > 0 ? lightboxIdx - 1 : allItems.length - 1);
    else setLightboxIdx(lightboxIdx < allItems.length - 1 ? lightboxIdx + 1 : 0);
  };

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

        {/* Videos — click to play, no YouTube branding */}
        <div className="mb-16">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-6 flex items-center gap-3">
            <Play size={22} className="text-gold" />
            Videos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {videoEmbeds.map((v) => (
              <VideoCard key={v.id} videoId={v.id} title={v.title} />
            ))}
          </div>
        </div>

        {/* Featured trip image */}
        <div
          className="mb-16 rounded-2xl overflow-hidden relative cursor-pointer"
          onClick={() => openLightbox({ img: businessTripImg, title: "Singapore-Vietnam Business Delegation", desc: "SVBB-led business trips connecting Singapore enterprises with Vietnamese industry partners." })}
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

        {/* Category rows with horizontal scroll */}
        <div className="space-y-12">
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="font-heading text-lg md:text-xl font-bold mb-4 text-gold/90">{cat.name}</h3>
              <ScrollRow items={cat.items} onSelect={openLightbox} />
            </div>
          ))}
        </div>

        <p className="text-center mt-12 font-body text-primary-foreground/50 text-sm">
          More photos and videos from our past business trips coming soon. Contact us to learn about upcoming trips.
        </p>
      </div>

      {/* Lightbox with prev/next */}
      {lightboxIdx !== null && allItems[lightboxIdx] && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-dark/95 backdrop-blur-sm"
          onClick={() => setLightboxIdx(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-navy/80 border border-gold/30 text-primary-foreground flex items-center justify-center hover:bg-navy z-10"
            onClick={() => setLightboxIdx(null)}
          >
            <X size={20} />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy/80 border border-gold/30 text-primary-foreground flex items-center justify-center hover:bg-navy z-10"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("prev"); }}
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex flex-col items-center max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={allItems[lightboxIdx].img}
              alt={allItems[lightboxIdx].title}
              className="max-w-full max-h-[75vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center px-4">
              <h4 className="font-heading text-lg md:text-xl font-bold text-primary-foreground">{allItems[lightboxIdx].title}</h4>
              <p className="font-body text-sm text-primary-foreground/60 mt-1">{allItems[lightboxIdx].desc}</p>
              <p className="font-body text-xs text-primary-foreground/40 mt-2">{lightboxIdx + 1} / {allItems.length}</p>
            </div>
          </div>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-navy/80 border border-gold/30 text-primary-foreground flex items-center justify-center hover:bg-navy z-10"
            onClick={(e) => { e.stopPropagation(); navigateLightbox("next"); }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
