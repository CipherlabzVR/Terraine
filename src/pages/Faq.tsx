import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ChevronDown, Mail } from 'lucide-react';
import aboutImage from '../assert/Faq/faq2.png';
import faq1 from '../assert/Faq/faq1.png';
import faq4 from '../assert/Faq/faq4.png';
import faq5 from '../assert/Faq/faq5.png';

const Faq = () => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [faq4, faq1, faq5];
  
  // State to manage the number of visible FAQs
  const [visibleCount, setVisibleCount] = useState(6);

  // Expanded FAQ data
  const faqItems = [
    {
      question: "What types of consultancy services does Terrene Engineering offer?",
      answer: "We offer end-to-end consultancy including architectural, structural, interior design, construction documentation, and smart project management."
    },
    {
      question: "Can you assist with project approvals and drawings?",
      answer: "Yes, we prepare approval-ready architectural and structural drawings in compliance with local and international authority standards."
    },
    {
      question: "Do you provide project management support?",
      answer: "Absolutely. Our Smart Project Management solutions ensure timely delivery, cost efficiency, and risk control."
    },
   
    {
      question: "How do you support cost and value engineering?",
      answer: "We optimize project costs through material efficiency, design improvements, and lifecycle-based decision-making to ensure you get the best value without compromising on quality."
    },
    {
      question: "What BIM services do you offer?",
      answer: "We provide 3D BIM modeling for architectural, structural, and MEP systems—enhancing coordination and reducing errors."
    },
    {
      question: "What is a Digital Twin and how do you use it?",
      answer: "Digital Twins enable real-time monitoring and performance optimization of assets, facilities, and systems."
    },
    {
      question: "Can your solutions support facility management?",
      answer: "Yes, we offer integrated facility management backed by predictive maintenance and digital tools."
    },
    {
      question: "How do you apply AI in engineering projects?",
      answer: "Our AI-powered design tools, analytics, and smart robotics improve planning accuracy and construction productivity."
    },
    {
      question: "Do you handle geotechnical and soil investigation?",
      answer: "Yes, we conduct geotechnical studies including soil testing, foundation recommendations, and reporting."
    },
    {
        question: "What types of construction projects do you handle?",
        answer: "We undertake residential, commercial, industrial, and infrastructure construction projects."
    },
      {
        question: "Can you design and supply custom furniture?",
        answer: "Yes, from modular design to turnkey fit-outs, we handle furniture planning, supply, and fabrication."
    },
    {
        question: "Do you provide MEP design and consulting services?",
        answer: "We offer complete MEP solutions integrated with BIM workflows to ensure accuracy and efficiency."
    },
    {
        question: "How do you ensure sustainability in your materials and designs?",
        answer: "We prioritize sustainable material selection and green construction practices in all projects."
    },
     {
        question: "What makes your maintenance services unique?",
        answer: "We provide preventive, corrective, and scheduled maintenance with smart monitoring systems."
    },
      {
        question: "Can you manage electrical and ELV systems?",
        answer: "Yes, our services cover electrical, ELV, and IoT-enabled systems for energy-efficient operation."
    },
    {
        question: "Do you conduct material testing and specification?",
        answer: "Yes, we provide full support in selecting, testing, and certifying materials based on your project needs."
    },
    {
        question: "How does predictive analytics help in construction?",
        answer: "We use data-driven insights to forecast risks, optimize resources, and enhance decision-making."
    },
     {
        question: "What is included in your interior design services?",
        answer: "We cover concept development, detailed drawings, turnkey solutions, and aesthetic optimization."
    },
     {
        question: "Do you supply and install smart construction technologies?",
        answer: "Yes, we integrate robotics, sensors, and AI systems for intelligent and automated site execution."
    },
     {
        question: "Is there a warranty provided for your engineering services?",
        answer: "Yes, we provide a lifetime warranty on our core services, reflecting our commitment to lasting quality."
    },
      {
        question: "Where is Terrene Engineering headquartered, and do you operate internationally?",
        answer: "Terrene Engineering is headquartered in Sri Lanka and operates globally with a presence in countries including the UAE, Australia, Singapore, New Zealand, the United Kingdom, Canada, Oman, Saudi Arabia, Qatar, the Maldives, and Germany."
    },
      {
        question: "What industries does Terrene Engineering serve?",
        answer: "We work across a wide range of sectors including residential, commercial, industrial, and infrastructure development, offering tailored solutions that align with regional and industry-specific requirements."
    },
      {
        question: "What sets Terrene Engineering apart from other service providers?",
        answer: "Our strength lies in the integration of advanced technologies such as BIM, AI, and Digital Twins with a strong focus on sustainability, lifetime value, and precision engineering. We combine global expertise with local insights."
    },
      {
        question: "Is Terrene Engineering involved in sustainable development goals (SDGs)?",
        answer: "Yes, our practices align with global sustainability standards. We actively promote resource efficiency, green materials, and environmentally responsible design and construction methodologies."
    },
      {
        question: "How can I engage with Terrene Engineering for a project?",
        answer: "You can reach out via our website or contact through email or call. Our team will guide you through the consultation, proposal, and project initiation process efficiently regardless of your location."
    },
    
  ];

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

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

const handleToggle = (index: number) => {
    setOpenSections(prev => {
      const isCurrentlyOpen = prev[index];
      return {
        Mission: false,
        Vision: false,
        Team: false,  
        [index]: !isCurrentlyOpen // Toggle the clicked section
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
      
      {/* Floating Contact Button */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 group">
        <a
          href="/inquiry"
          className="bg-[#0050A0] text-white shadow-lg flex items-center h-12 sm:h-14 rounded-r-full pl-4 pr-3 sm:pl-6 sm:pr-4 transition-all duration-300 ease-in-out"
        >
          <span className="text-base sm:text-lg font-semibold whitespace-nowrap">
            CONTACT US
          </span>
          <div className="transition-all duration-300 ease-in-out max-w-0 group-hover:max-w-6 overflow-hidden ml-0 group-hover:ml-2">
              <Mail size={24} />
          </div>
        </a>
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
                alt="FAQ section"
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
          </div>
        </div>
        <main className="pt-0 md:pt-0 pb-0 md:pb-0">
          <div className="w-full max-w-[2400px] mx-auto px-4 md:px-12 lg:px-24 relative z-20">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 mb-0">
              <div className="hidden lg:block"></div>
              {/* Right: Content */}
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-r from-cyan-600 to-[#0b2741] rounded-3xl relative overflow-hidden shadow-2xl lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    <img
                      src={aboutImage}
                      alt="FAQ Banner"
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black/40 via-black/10 to-transparent z-10"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Frequently Asked Questions</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex flex-col items-start h-full px-4 sm:px-8 lg:px-11 xl:px-16 pt-8">
                  <div className="mb-10 w-full">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                          Frequently Asked Questions
                      </h2>
                      <p className="text-white text-lg sm:text-xl text-left max-w-4xl leading-relaxed">
                          This section addresses common inquiries about our services, capabilities, and global operations. Whether you're exploring our engineering solutions, quality commitments, or sustainability practices, these answers are designed to help you better understand how Terrene Engineering delivers value across every project                       </p>
                  </div>

                  <div className="w-full">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Common Questions</h2>
                    <ul className="space-y-4 max-w-4xl">
                      {faqItems.slice(0, visibleCount).map((item, index) => (
                        <li key={index}>
                          <div
                            className={`flex items-center justify-between px-4 py-3 border border-white/20 bg-white/5 cursor-pointer transition-all duration-300 ${
                              openSections[index]
                                ? 'bg-primary/10 border-white/20 rounded-t-lg'
                                : 'hover:bg-white/10 rounded-lg'
                            }`}
                            onClick={() => handleToggle(index)}
                          >
                            <span className="text-base sm:text-lg font-semibold text-white">{item.question}</span>
                            <ChevronDown
                              className={`w-6 h-6 text-white transition-transform duration-200 ${
                                openSections[index] ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                          <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden border-x border-b border-white/20 rounded-b-lg ${
                              openSections[index]
                                ? 'max-h-[1000px] opacity-100'
                                : 'max-h-0 opacity-0'
                            }`}
                          >
                            <div className="p-4 sm:p-6 bg-black/20 text-white">
                              <p className="text-base sm:text-lg leading-relaxed">{item.answer}</p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* Load More Button */}
                    {visibleCount < faqItems.length && (
                      <div className="mt-8 text-center">
                        <button
                          onClick={handleLoadMore}
                          className="bg-[#0050A0] text-white px-6 py-3 rounded-md hover:bg-cyan-400 hover:text-white transition-colors font-semibold"
                        >
                          Load More
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;