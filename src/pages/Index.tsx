import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VietChamBanner from "@/components/VietChamBanner";
import InvestorsSection from "@/components/InvestorsSection";
import GallerySection from "@/components/GallerySection";
import VietnamBusinessesSection from "@/components/VietnamBusinessesSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VietChamBanner />
      <InvestorsSection />
      <GallerySection />
      <VietnamBusinessesSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
