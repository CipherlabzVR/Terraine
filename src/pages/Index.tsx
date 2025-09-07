import React, { useRef } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Projects from '../components/Projects'; // Import the Projects component
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import CompletionStats from '../components/completion'; // Fix capitalization
import GlobalPresence from '../components/GlobalPresence';
import Testimonials from '../components/Testimonials'; // Import Testimonials component
import TrustedByLogos from '../components/TrustedByLogos'; // <-- Add this import at the top
import ServiceOfferings from '@/components/ServiceOfferings'; 

const Index = () => {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ServiceOfferingsRef = useRef(null);
  const contactRef = useRef(null);
  
  return (
    <div
      className="min-h-screen w-full bg-[#0b2741]/90 space-y-0"
    >
      {/* Header is now always visible and fixed to the top */}
      <Header mode="transparent" className="fixed top-0 left-0 right-0 w-full z-50" />

      <div ref={heroRef} className="mb-0">
        <Hero />
      </div>
      
      <div ref={aboutRef} className="mb-0">
        <About />
      </div>
      <div ref={servicesRef} className="mb-0">
        <Services />
      </div>
      
      <div ref={projectsRef} className="mb-0">
        <Projects />
      </div>
      <GlobalPresence />
      <div ref={testimonialsRef} className="mb-0">
        <CompletionStats />
        <Testimonials />
      </div>
      
      <div ref={contactRef} className="mb-0">
        <TrustedByLogos />
        <ServiceOfferings />
        <Contact />
      
      <Footer />
    </div>
    </div>
  );
};

export default Index;