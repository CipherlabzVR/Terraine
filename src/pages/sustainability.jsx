import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown } from 'lucide-react';
import engineeringTeam from '@/assert/ProjectManagment.jpg';
import sustainabilitmaine from '@/assert/sustainability/sustainabilitmaine.png';
import about2bg from '@/assert/about2bg.jpg';
import sustainability1 from '@/assert/sustainability/sustainability1.png';
import sustainability2 from '@/assert/sustainability/sustainability2.png';
import sustainability3 from '@/assert/sustainability/sustainability3.png';


const Sustainability = () => {
  const [openSections, setOpenSections] = useState({
    philosophy: false,
    initiatives: false,
    impact: false,
  });
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [sustainability3,sustainability2,sustainability1];

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
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleToggle = (section) => {
    setOpenSections(prev => {
      const isCurrentlyOpen = prev[section];
      return {
        Mission: false,
        Vision: false,
        Team: false,  
        [section]: !isCurrentlyOpen // Toggle the clicked section
      }
    });
  };
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
            <div className="absolute -inset-4 bg-gradient-to-l from-white/30 via-white/10 to-white/0 rounded-none blur-2xl opacity-80 z-0"></div>
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-120 h-120 rounded-full bg-blue-600/10 blur-3xl"></div>
            <div className="relative w-full h-full overflow-hidden">
              <img
                id="currentImage"
                src={images[currentImage]}
                alt="Sustainability section"
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
            <div className="absolute bottom-8 left-0 w-full flex justify-center z-20 gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ${
                    currentImage === index ? 'bg-white scale-110' : 'bg-white/40 scale-100'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              <div className="hidden lg:block"></div>
              {/* Right: Content */}
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-r from-cyan-600 to-[#0b2741] rounded-3xl  relative overflow-hidden shadow-2xl lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                {/* Decorative elements can stay as they are, they use absolute positioning and won't break flow */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Top image banner */}
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    <img
                      src={sustainabilitmaine}
                      alt="Sustainability at Terrene"
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Building a Greener Tomorrow</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content container */}
                <div className="relative z-10 flex flex-col items-start h-full px-4 sm:px-8 lg:px-11 xl:px-16 pt-8">
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      Sustainability at <span className="text-primary-300">Terrene</span>
                    </h2>
                    <p className="text-white text-lg sm:text-xl mb-4 text-left max-w-4xl leading-relaxed">
                     Terrene Engineering, sustainability is not an option; it’s a responsibility woven into every stage of our work. From material selection to energy-efficient design and lifecycle-focused construction, we integrate sustainable practices that reduce environmental impact while maximizing long-term value. By leveraging digital technologies like BIM and Digital Twins, we optimize resource use, minimize waste, and enable smarter decision-making throughout the project lifecycle. Our commitment extends beyond compliance; we strive to build infrastructure that supports communities, respects ecosystems, and stands resilient for generations to come
                    </p>
                  </div>
                  <div className="w-full">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Our Sustainability Focus</h2>
                    <ul className="space-y-4 max-w-4xl">
                      {/* Philosophy Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['philosophy']
                              ? 'bg-primary/10 border-white/20 rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('philosophy')}
                        >
                          <span className="text-lg sm:text-xl font-semibold text-white">Our Philosophy</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['philosophy'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden border-x border-b border-white/20 rounded-b-lg ${
                            openSections['philosophy']
                              ? 'max-h-[1000px] opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4 sm:p-6 bg-black/20 text-white">
                            <p className="mb-4 text-base sm:text-lg">
                              We believe true sustainability goes beyond compliance; it's about creating long-term value for people, communities, and the planet. Our philosophy is rooted in thoughtful design, responsible construction, and a commitment to environmental stewardship across every project phase. Sustainability, for us, is a mindset that guides every decision we make
                            </p>
                            
                          </div>
                        </div>
                      </li>
                      {/* Initiatives Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['initiatives']
                              ? 'bg-primary/10 border-white/20 rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('initiatives')}
                        >
                          <span className="text-lg sm:text-xl font-semibold text-white">Key Initiatives</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['initiatives'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden border-x border-b border-white/20 rounded-b-lg ${
                            openSections['initiatives']
                              ? 'max-h-[1000px] opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4 sm:p-6 bg-black/20 text-white">
                            <p className="mb-4 text-base sm:text-lg">
                              We actively implement sustainable practices across our operations, including energy-efficient design, responsible material sourcing, waste reduction, and smart technology integration. By leveraging tools like BIM and Digital Twins, we make data-driven decisions that improve efficiency, minimize impact, and align with global sustainability benchmarks
                            </p>
                            
                          </div>
                        </div>
                      </li>
                      {/* Impact Section */}
                      <li>
                        <div
                          className={`flex items-center justify-between px-4 py-3 border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 ${
                            openSections['impact']
                              ? 'bg-primary/10 border-white/20 rounded-t-lg'
                              : 'hover:bg-white/10 rounded-lg'
                          }`}
                          onClick={() => handleToggle('impact')}
                        >
                          <span className="text-lg sm:text-xl font-semibold text-white">Our Impact</span>
                          <ChevronDown
                            className={`w-6 h-6 text-white transition-transform duration-200 ${
                              openSections['impact'] ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                        <div
                          className={`transition-all duration-500 ease-in-out overflow-hidden border-x border-b border-white/20 rounded-b-lg ${
                            openSections['impact']
                              ? 'max-h-[1000px] opacity-100'
                              : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="p-4 sm:p-6 bg-black/20 text-white">
                            <p className="mb-4 text-base sm:text-lg">
                              Through our sustainability-focused approach, we contribute to building greener, more resilient infrastructure that serves both present and future generations. Our work not only reduces environmental footprints but also empowers clients to achieve their sustainability goals and driving positive change across industries and communities worldwide
                            </p>
                            
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* Footer */}
      <div className="mt-auto pt-8 lg:pt-16">
        <Footer />
      </div>
    </div>
  );
};

export default Sustainability;