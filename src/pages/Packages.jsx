import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

// ✅ Keep your exact names/paths; use URL-based resolves (works on Vercel/Linux)
const coper   = new URL('../assert/Packages/coper.png', import.meta.url).href;
const silver  = new URL('../assert/Packages/Silver.png', import.meta.url).href;
const gold    = new URL('../assert/Packages/gold.png', import.meta.url).href;
const Crystal = new URL('../assert/Packages/itc.jpg', import.meta.url).href;
const white   = new URL('../assert/Packages/white.png', import.meta.url).href;
const Special = new URL('../assert/Packages/Special.png', import.meta.url).href;

import Header from '../components/Header.tsx';
import { Button } from '@/components/ui/button';
import { ArrowDownWideNarrow } from 'lucide-react';

const packageData = [
  {
    name: 'Residential Project Package',
    image: coper,
    path: '/packages/starterPackage',
    tagline: 'Building Homes that define Comfort and Elegance',
    description:
      'Experience the ultimate in modern living with our Residential Project Package. We transform your vision into beautifully crafted, sustainable homes, blending innovative design, smart technology, and flawless execution.',
    details:
      'Ideal For: Homeowners, Property Developers, Housing Societies, Apartments, Vila, Cabanas',
  },
  {
    name: 'Commercial Project Package',
    image: silver,
    path: '/packages/mid-level',
    tagline: 'Smart spaces for Thriving Businesses',
    description:
      'Maximize investment and operational efficiency with our Commercial Project Package. From concept to completion, we deliver intelligent, sustainable, and high-performing commercial spaces tailored for long-term success.',
    details:
      'Ideal For: Businesses, Retail Chains, Office Developers, Hotels, Showrooms, Shopping Complex, Universities and Institutes, Hospitals and Special Laboratories, Apartment Builders, Tourist attraction Vilas and Cabanas',
  },
  {
    name: 'Infrastructure Project Package',
    image: gold,
    path: '/packages/high-end',
    tagline: 'Strong foundations for Sustainable future growth.',
    description:
      'Our Infrastructure Project Package builds robust, reliable, and future-ready Sustainable public and private assets. Advanced engineering, precise planning, and cutting-edge technology ensure every project exceeds expectations.',
    details:
      'Ideal For: Government and Private Projects, Contractors, Road & Utility Developers, Business Organizations',
  },
  {
    name: 'Engineering Consulting Package',
    image: white,
    path: '/packages/international',
    tagline: 'Expert insights for Engineering Excellence',
    description:
      'Drive projects forward with expert guidance across design, management, implementation and maintenance. Our package ensures smart planning, innovative solutions, regulatory compliance, and sustainable results at every stage',
    details:
      'Ideal For: Developers, Contractors, Institutions needing Technical Guidance, Individuals who requires Engineering Consulting to their any type of projects to Manage Quality, Budget and Project Time',
  },
  {
    name: 'BIM & Digital Twin Integrated with AI Engineering Package',
    image: Crystal,
    path: '/packages/corporate',
    tagline: 'Engineering smarter with AI, BIM & Digital Twins',
    description:
      'Leverage the power of AI, digital twins, and BIM to optimize project performance. We integrate design, monitoring, and predictive insights for smarter, faster, and more efficient and sustainable construction outcomes.',
    details:
      'Ideal For: Medium-Scale to Large-Scale Developers, Smart City Projects, Contractors, Engineering Consulting Firms, Individuals who requires Latest Engineering technology integration to any type of Projects to Maximize the efficiency and reduce the cost and maintain sustainability',
  },
  {
    name: 'Software Training & Skills Training Package',
    image: Special,
    path: '/packages/software',
    tagline: 'Empowering AEC Professionals with Advanced skills',
    description:
      'Empower with advanced technical skills and hands-on training. Our Software & Skills Training Package equips students and professionals with modern tools, practical knowledge, and innovative sustainable strategies for real-world applications.',
    details:
      'Ideal For: Students, undergraduates, Engineers, Project Managers, BIM Specialists, Draftsmen, Interior Designers and Engineering Skill seekers and AEC Professionals',
  },
];

const Packages = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 50) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b2741]">
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            src="/packa.mp4"
          />
          <div className="absolute inset-0 bg-[#0b2741]/70"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <h1 className="text-4xl md:text-7xl font-bold">Packages</h1>
          <p className="mt-2 text-white max-w-2xl mx-auto text-lg md:text-xl">
            Transforming spaces with innovative design and precision
          </p>
          <a href="#packages-grid" className="mt-8 inline-block">
            <Button
              size="lg"
              className="bg-[#0050A0] hover:bg-cyan-500/80 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg
                         transition-transform hover:scale-110 flex items-center gap-3 animate-zoom-throb"
            >
              SEE OUR PACKAGES
              <ArrowDownWideNarrow className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>

      {/* Packages Grid */}
      <main id="packages-grid" className="relative py-16 md:py-24">
        <div className="w-full max-w-[2400px] mx-auto px-5 md:px-9 lg:px-14 relative z-20">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {packageData.slice(0, 3).map((pkg, index) => (
              <div
                key={index}
                className="flex flex-col justify-start p-0 bg-gradient-to-r from-cyan-600 to-[#0b2741] rounded-3xl relative overflow-hidden shadow-2xl"
              >
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
                </div>
                <Link to={pkg.path} className="block w-full overflow-hidden rounded-t-3xl -mt-12">
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-[320px] object-cover object-center"
                    />
                  </div>
                </Link>
                <div className="relative z-10 flex flex-col flex-grow p-6">
                  <div className="flex-grow flex flex-col">
                    <h3 className="w-full text-2xl font-bold text-white mb-3 text-center h-16 flex items-center justify-center">
                      {pkg.name}
                    </h3>
                    <p className="w-full text-cyan-300 italic text-lg text-center mb-8">“{pkg.tagline}”</p>
                    <p className="text-white/90 mb-10 text-lg">{pkg.description}</p>
                    <div className="bg-black/20 p-4 rounded-lg border border-white/10 mb-6 flex-grow">
                      <p className="text-md text-white/80">
                        <span className="font-semibold text-white">Ideal For: </span>
                        {pkg.details.split('Ideal For:')[1].trim()}
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-auto pt-4">
                    <Link
                      to={pkg.path}
                      className="block w-full text-center py-3 px-6 bg-[#0050A0] hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all duration-300"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packageData.slice(3, 6).map((pkg, index) => (
              <div
                key={index}
                className="flex flex-col justify-start p-0 bg-gradient-to-r from-cyan-600 to-[#0b2741] rounded-3xl relative overflow-hidden shadow-2xl"
              >
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full blur-2xl"></div>
                </div>
                <Link to={pkg.path} className="block w-full overflow-hidden rounded-t-3xl -mt-12">
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-[320px] object-cover object-center"
                    />
                  </div>
                </Link>
                <div className="relative z-10 flex flex-col flex-grow p-6">
                  <div className="flex-grow flex flex-col">
                    <h3 className="w-full text-2xl font-bold text-white mb-3 text-center h-24 flex items-center justify-center">
                      {pkg.name}
                    </h3>
                    <p className="w-full text-cyan-300 italic text-lg text-center mb-8">“{pkg.tagline}”</p>
                    <p className="text-white/90 mb-10 text-lg h-32">{pkg.description}</p>
                    <div className="bg-black/20 p-4 rounded-lg border border-white/10 mb-6 flex-grow">
                      <p className="text-md text-white/80">
                        <span className="font-semibold text-white">Ideal For: </span>
                        {pkg.details.split('Ideal For:')[1].trim()}
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-auto pt-4">
                    <Link
                      to={pkg.path}
                      className="block w-full text-center py-3 px-6 bg-[#0050A0] hover:bg-white/20 text-white rounded-xl border border-white/20 transition-all duration-300"
                    >
                      READ MORE
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="hidden md:block" style={{ width: '5%' }} />

      <Footer />

      {/* Animation styles */}
      <style>{`
        @keyframes zoom-throb {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-zoom-throb {
          animation: zoom-throb 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Packages;
