import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackagesMRASection from "@/components/PackagesMRASection";
import LeadQualification from "@/components/LeadQualification";
import DetailedAssessment from "@/components/DetailedAssessment";

const PackagesMRA = () => {
  const [showAssessment, setShowAssessment] = useState(false);
  const assessmentRef = useRef<HTMLDivElement>(null);

  const handleShowAssessment = () => {
    setShowAssessment(true);
    setTimeout(() => {
      assessmentRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-28 pb-8 bg-navy">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Packages & <span className="text-gradient-gold">MRA Grant</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Explore our Vietnam entry packages and find out if your company qualifies for up to 70% MRA grant funding.
          </p>
        </div>
      </section>
      <PackagesMRASection />
      <LeadQualification onShowAssessment={handleShowAssessment} />
      {showAssessment && (
        <div ref={assessmentRef}>
          <DetailedAssessment />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PackagesMRA;
