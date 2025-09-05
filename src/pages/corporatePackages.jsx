import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award } from 'lucide-react';
import Crystal from '../assert/Packages/Crystal.png'; // TODO: Replace with a relevant image

import corporate1 from '../assert/Packages/corporate/corporate1.png'; // TODO: Replace with relevant images
import corporate2 from '../assert/Packages/corporate/corporate2.png';
import corporate3 from '../assert/Packages/corporate/corporate3.png';
import corporate4 from '../assert/Packages/corporate/corporate4.jpg';
import corporate5 from '../assert/Packages/corporate/corporate5.jpg';

const packageDetails = {
  name: 'BIM & Digital Twin Integrated with AI Engineering Package',
  subtitle: '“Engineering smarter with AI, BIM & Digital Twins”',
  description: 'Leverage the power of AI, digital twins, and BIM to optimize project performance. We integrate design, monitoring, and predictive insights for smarter, faster, and more efficient and sustainable construction outcomes.',
  idealFor: 'Medium-Scale to Large-Scale Developers, Smart City Projects, Contractors, Engineering Consulting Firms, Individuals who requires Latest Engineering technology integration to any type of Projects to Maximize the efficiency and reduce the cost and maintain sustainability',
  includes: [
    '3D BIM – Digital Design & Modeling (Architectural, Structural, MEP & HVAC)',
    '4D BIM – Time Scheduling & Construction Sequencing',
    '5D BIM – Cost Estimation & Budget Planning',
    '6D BIM – Sustainability & Energy Modeling',
    '7D BIM – Facility Management Integration',
    '8D BIM – Safety & Risk Management',
    '9D BIM – Lean Construction & Productivity Optimization',
    'Digital Twin Integration for Real-Time Asset Monitoring & Predictive Maintenance',
    'AI-Powered Design & Planning Solutions',
    'Predictive Analytics for Performance Optimization & Resource Management',
    'Smart Construction & Robotics Applications',
    'MEP & HVAC System Design with AI Optimization',
    'Material Selection & Sustainable Consultancy',
    'Cost & Value Engineering Solutions',
    'Smart Project Management & Planning',
    'Energy & Resource Optimization',
    'Regulatory & Compliance Advisory',
    'Import & Procurement Advisory for Specialized Materials, Tools & Equipment'
  ],
  benefits: []
};

const BimAiPackage = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [corporate1, corporate2, corporate3, corporate4, corporate5]; // TODO: Replace with relevant images

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextImageEl = document.getElementById('nextImage');
      const currentImageEl = document.getElementById('currentImage');
      if (nextImageEl && currentImageEl) {
        currentImageEl.style.opacity = '0';
        currentImageEl.style.transform = 'scale(0.95) translateZ(0)';
        nextImageEl.style.opacity = '1';
        nextImageEl.style.transform = 'scale(1.0) translateZ(0)';
        setTimeout(() => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        }, 1500);
      } else {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0b2741" }}>
      {/* Header with hide/show animation */}
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>
      <div className="pt-20">
        {/* Left: Image - left aligned, half of the page */}
        <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full z-0">
          <div className="relative w-full h-full overflow-hidden border-2 border-white/10 bg-black/40 shadow-2xl">
            {/* White glowing shade */}
            <div className="absolute -inset-4 bg-gradient-to-l from-white/30 via-white/10 to-white/0 rounded-none blur-2xl opacity-80 z-0"></div>
            {/* Blue light accents */}
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-120 h-120 rounded-full bg-blue-600/10 blur-3xl"></div>
            {/* Animated image transition */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Current image */}
              <img
                id="currentImage"
                src={images[currentImage]}
                alt="BIM and AI integrated projects"
                className="w-full h-full object-cover absolute inset-0"
                style={{
                  opacity: 1,
                  zIndex: 10,
                  objectPosition: "center",
                  transform: "scale(1.0) translateZ(0)",
                  transition: 'opacity 1.5s ease-in-out, transform 2s ease-out'
                }}
                key={currentImage}
              />
              
              {/* Next image */}
              <img
                id="nextImage"
                src={images[(currentImage + 1) % images.length]}
                alt=""
                className="w-full h-full object-cover absolute inset-0"
                style={{
                  opacity: 0,
                  zIndex: 9,
                  objectPosition: "center",
                  transform: "scale(1.05) translateY(10px) translateZ(0)", 
                  transition: 'opacity 1.5s ease-in-out, transform 2s ease-out'
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
        
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            {/* Main Content Section */}
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              <div className="hidden lg:block"></div>
              <div className="flex flex-col justify-start p-0 pt-0 pb-1 lg:pb-1 xl:pb-4 bg-gradient-to-r from-cyan-600 to-[#0b2741] rounded-3xl  relative overflow-hidden shadow-2xl ml-0 lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                {/* Background effects */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute -right-8 top-1/3 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
                <div className="absolute -left-8 bottom-1/3 w-40 h-40 rounded-full bg-black/20 blur-2xl"></div>
                
                {/* Light effects */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
                </div>

                {/* Background shading */}
                <div className="hidden lg:block absolute -inset-12 z-0">
                  <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-[100px]"></div>
                  <div className="absolute bottom-1/4 -left-24 w-96 h-96 rounded-full bg-cyan-400/5 blur-[120px]"></div>
                  <div className="absolute top-0 right-1/3 bottom-0 left-0 bg-gradient-to-br from-white/3 via-transparent to-transparent rotate-12 opacity-30 blur-3xl"></div>
                  <div className="absolute top-0 left-1/2 h-full w-40 bg-gradient-to-b from-white/5 via-white/2 to-transparent blur-2xl"></div>
                </div>
                
                {/* Package image header */}
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    <img
                      src={Crystal}
                      alt={packageDetails.name}
                      className="w-full h-[900px] md:h-[1300px] lg:h-[1600px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                       
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content container */}
                <div className="relative z-10 flex flex-col items-start h-full px-8 lg:px-11 xl:px-16 pt-8">
                  {/* Package Introduction */}
                  <div className="mb-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                      {packageDetails.name}
                    </h2>
                    <p className="text-xl text-cyan-300 mb-6 font-medium">
                      {packageDetails.subtitle}
                    </p>
                    <p className="text-white/90 text-lg mb-4 text-left max-w-4xl leading-relaxed">
                      {packageDetails.description}
                    </p>
                    <p className="text-white text-lg mb-6 text-left max-w-4xl leading-relaxed">
                      <strong className="font-semibold">Ideal For:</strong> {packageDetails.idealFor}
                    </p>
                  </div>

                  {/* Package Details Section */}
                  <div className="w-full mb-10">
                    <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-left">Services Included</h2>
                    <ul className="space-y-3 max-w-4xl">
                      {packageDetails.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-white/90 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-white text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits Section */}
                  <div className="w-full mb-10">
                    <ul className="space-y-3 max-w-4xl">
                      {packageDetails.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Award className="w-6 h-6 text-white/90 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-white text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4 flex justify-center w-full">
                    <Button size="lg" className="bg-[#0050A0] text-white hover:bg-white/30 text-lg px-8 py-6 font-semibold">
                      REQUEST THIS PACKAGE
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default BimAiPackage;