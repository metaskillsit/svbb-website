import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VietChamBanner from "@/components/VietChamBanner";
import GallerySection from "@/components/GallerySection";
import LeadSurvey from "@/components/LeadSurvey";
import LeadQualification from "@/components/LeadQualification";
import DetailedAssessment from "@/components/DetailedAssessment";
import PartnersSection from "@/components/PartnersSection";
import AboutServicesSection from "@/components/AboutServicesSection";
import PackagesMRASection from "@/components/PackagesMRASection";
import VietnamMarketSection from "@/components/VietnamMarketSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <VietChamBanner />
      <GallerySection />
      <LeadQualification />
      
      <DetailedAssessment />
      <PartnersSection />
      <AboutServicesSection />
      <PackagesMRASection />
      <VietnamMarketSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
