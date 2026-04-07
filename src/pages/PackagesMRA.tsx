import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadQualification from "@/components/LeadQualification";
import DetailedAssessment from "@/components/DetailedAssessment";
import heroMra from "@/assets/hero-mra.jpg";

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
      <section className="relative <section className="relative min-h-[85vh] flex items-end overflow-hidden"> flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroMra} alt="MRA Readiness" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            MRA <span className="text-gradient-gold">Readiness Check</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Find out in under 60 seconds whether your company may qualify for MRA-supported Vietnam expansion.
          </p>
        </div>
      </section>
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
