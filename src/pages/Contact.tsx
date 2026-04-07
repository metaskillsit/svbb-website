import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="relative min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroContact} alt="Contact" className="w-full h-full object-cover object-top" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/90 via-navy/80 to-navy-dark/50" />
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
