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
  { img: gallery3839, title: "SMU Delegation at Sunwah", desc: "SMU Academy delegation group photo at Sunwah Innovation Centre." },
  { img: gallery3848, title: "Certificate Presentation at Sunwah", desc: "Certificate presentation ceremony at Sunwah Innovation Centre." },
  { img: gallery3852, title: "Certificate of Recognition", desc: "Recipient receiving certificate of recognition for bilateral contributions." },
  { img: gallery3854, title: "Sunwah Seminar Audience", desc: "Attendees at a business seminar held at Sunwah Innovation Centre." },
  { img: gallery3945, title: "Best Spots Around Town", desc: "Certificate presentation at the Best Spots Around Town event." },
  { img: gallery3949, title: "Blenda Studios Recognition", desc: "Certificate presentation to Blenda Studios representative." },
  { img: gallery3953, title: "Certificate Award Ceremony", desc: "Recipient receiving a certificate at the SVBB awards ceremony." },
  { img: gallery3956, title: "Cultural Recognition Award", desc: "Certificate presentation to recipient in traditional ao dai attire." },
  { img: gallery3964, title: "Delegation Group Photo", desc: "Business delegation group photo in conference room." },
  { img: gallery4215, title: "Product Showcase Workshop", desc: "Hands-on product showcase and workshop session." },
  { img: gallery4250, title: "Factory Floor Tour", desc: "Factory floor tour with delegation in cleanroom gear." },
  { img: gallery4251, title: "Machinery Inspection", desc: "Factory tour inspecting production machinery." },
  { img: gallery4270, title: "Production Line Walkthrough", desc: "Walking through the production line during factory visit." },
  { img: gallery4280, title: "Packaging Machinery Demo", desc: "Demonstration of packaging machinery during factory visit." },
  { img: gallery4312, title: "Chavi Garden, Long An", desc: "Group photo at Chavi Garden in Long An province." },
  { img: gallery4319, title: "Local Product Showroom", desc: "Business networking at a local product showroom." },
  { img: gallery4323, title: "Garden Train Ride", desc: "Delegation enjoying a train ride tour at Chavi Garden." },
  { img: gallery4342, title: "Orchard Farm Visit", desc: "Delegation touring the orchard grounds in Long An." },
  { img: gallery4354, title: "Group Lunch at Chavi", desc: "Delegation sharing a group lunch at Chavi Garden." },
  { img: gallery4358, title: "Chavi Garden Briefing", desc: "Presentation and briefing session at Chavi Garden." },
  { img: gallery4366, title: "Chavi Garden Seminar", desc: "Audience at a seminar session held at Chavi Garden." },
  { img: gallery4374, title: "Guest Speaker", desc: "Guest speaker presenting at the Chavi Garden event." },
  { img: gallery4394, title: "Panel Discussion", desc: "Panel discussion with delegation members at Chavi Garden." },
  { img: gallery4402, title: "Gift Exchange", desc: "Gift exchange between SVBB and Chavi Garden host." },
  { img: gallery4434, title: "Chavi Garden Product Store", desc: "Delegation browsing local products at the Chavi Garden store." },
  { img: gallery4442, title: "Chavi Garden Reception", desc: "Delegates at the Chavi Garden reception counter." },
  { img: gallery4453, title: "Outdoor Networking", desc: "Delegates networking outdoors at a garden resort venue." },
  { img: gallery4454, title: "Resort Courtyard Gathering", desc: "Group gathering at the resort courtyard during the trip." },
  { img: gallery4465, title: "Processing Facility Tour", desc: "Delegation touring a food processing facility." },
  { img: gallery5799, title: "The Hub Group Photo", desc: "Delegation group photo at The Hub co-working space in HCMC." },
  { img: gallery5807, title: "The Hub Office Tour", desc: "Guided tour of The Hub office and co-working facilities." },
  { img: gallery5822, title: "Tech Office Visit", desc: "Delegation visiting a tech company's open-plan office." },
  { img: gallery5848, title: "SoBanHang Presentation", desc: "Product demo presentation at SoBanHang office." },
  { img: gallery5855, title: "SoBanHang Certificate", desc: "Certificate of Appreciation presented to SoBanHang." },
  { img: gallery5921, title: "Wareflex Logistics Briefing", desc: "Wareflex presenting their logistics platform to the delegation." },
  { img: gallery5940, title: "Wareflex Certificate", desc: "Certificate of Appreciation presented to Wareflex representative." },
  { img: gallery5970, title: "Kofi Kai Café Session", desc: "Delegation attending a presentation at Kofi Kai café." },
  { img: gallery5996, title: "Kofi Kai Video Screening", desc: "Video screening of coffee production at Kofi Kai." },
  { img: gallery6002, title: "Kofi Kai Speaker", desc: "Speaker presenting at Kofi Kai café venue." },
  { img: gallery6025, title: "Coffee Industry Talk", desc: "Guest speaker discussing Vietnam's coffee industry." },
  { img: gallery6042, title: "Kofi Kai Hosts", desc: "Kofi Kai hosts presenting to the delegation." },
  { img: gallery6047, title: "Vietnamese Coffee", desc: "Fresh cà phê tươi — local Vietnamese coffee." },
  { img: gallery6052, title: "Kofi Kai Certificate", desc: "Certificate of Appreciation presented to Kofi Kai." },
  { img: gallery6057, title: "Coffee Roaster Tour", desc: "Delegation viewing the Kofi Kai coffee roasting machinery." },
  { img: gallery6072, title: "Roaster Discussion", desc: "Delegates discussing with Kofi Kai at the pilot roasters." },
  { img: gallery6077, title: "Coffee Product Display", desc: "Browsing Kofi Kai's coffee product offerings." },
  { img: gallery6078, title: "Coffee Equipment Showcase", desc: "Delegates examining coffee brewing equipment at Kofi Kai." },
  { img: gallery6082, title: "Kofi Kai Café Interior", desc: "Full view of Kofi Kai café with the delegation." },
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
