import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PackagesSection from "@/components/PackagesSection";
import MRAGrantSection from "@/components/MRAGrantSection";
import LeadSurvey from "@/components/LeadSurvey";
import PartnersSection from "@/components/PartnersSection";
import VietnamMarketSection from "@/components/VietnamMarketSection";
import GallerySection from "@/components/GallerySection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PackagesSection />
      <MRAGrantSection />
      <LeadSurvey />
      <PartnersSection />
      <VietnamMarketSection />
      <GallerySection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
