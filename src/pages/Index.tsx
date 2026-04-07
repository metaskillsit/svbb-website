import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VietChamBanner from "@/components/VietChamBanner";
import GallerySection from "@/components/GallerySection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VietChamBanner />
      <GallerySection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
