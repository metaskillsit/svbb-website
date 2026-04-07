import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import RotatingImage from "@/components/RotatingImage";
import contactHero1 from "@/assets/contact-hero-1.jpg";
import contactHero2 from "@/assets/contact-hero-2.jpg";
import contactHero3 from "@/assets/contact-hero-3.jpg";
import contactHero4 from "@/assets/contact-hero-4.jpg";

const contactHeroImages = [contactHero1, contactHero2, contactHero3, contactHero4];

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <RotatingImage images={contactHeroImages} alt="Contact" className="w-full h-full object-cover" width={960} height={640} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/95 via-navy/85 to-navy-dark/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/40 via-transparent to-transparent" />
        </div>
        <div className="container relative z-10 mx-auto px-4 pt-28 pb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gold/80 hover:text-gold font-body text-sm mb-8 transition-colors">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h1>
          <p className="font-body text-primary-foreground/70 text-lg max-w-2xl">
            Ready to explore Vietnam? Reach out to start your market entry journey.
          </p>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
