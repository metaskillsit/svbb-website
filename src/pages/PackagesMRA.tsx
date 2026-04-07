import { useState, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadQualification from "@/components/LeadQualification";
import DetailedAssessment from "@/components/DetailedAssessment";
import RotatingImage from "@/components/RotatingImage";
import mraHero1 from "@/assets/mra-hero-1.jpg";
import mraHero2 from "@/assets/mra-hero-2.jpg";
import mraHero3 from "@/assets/mra-hero-3.jpg";
import mraHero4 from "@/assets/mra-hero-4.jpg";

const mraHeroImages = [mraHero1, mraHero2, mraHero3, mraHero4];

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
      <section className="pt-28 pb-8 bg-navy relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
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
            <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl h-[340px]">
              <RotatingImage images={mraHeroImages} alt="MRA Readiness Professional" className="w-full h-full object-cover" width={960} height={640} />
            </div>
          </div>
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
