import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// --- Data synchronized with Header.tsx ---

const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'All Services', path: '/services' },
    { name: 'Why Terrene', path: '/Whyterrene' },
    { name: 'Sustainability', path: '/sustainability' },
    { name: 'Testimonial', path: '/testimonial' },
    { name: 'Sitemap', path: '/sitemap' },
    { name: 'Quality Policy', path: '/qualitypolicy' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Career', path: '/career' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact Us', path: '/inquiry' },
];

const allServices = [
    { name: "Consultancy Services", path: "/services/consultancy-services" },
    { name: "Drawings", path: "/services/drawings" },
    { name: "Construction", path: "/services/construction" },
    { name: "Interior Design", path: "/services/interior-design" },
    { name: "BIM", path: "/services/bim" },
    { name: "Digital Twin", path: "/services/digital-twin" },
    { name: "Maintenance", path: "/services/maintenance" },
    { name: "AI Engineering", path: "/services/ai-engineering" },
    { name: "Furniture Design & Supply", path: "/services/furniture-design" },
    { name: "Material Consultancy", path: "/services/material-consultancy" },
    { name: "Import & Export", path: "/services/import-export" },
    { name: "Software Training", path: "/software-training" },
    { name: "Machinery and Equipment", path: "/services/machinery-equipment" },
];

const softwareTrainingLinks = [
    { name: "BIM", path: "/software-training/bim" },
    { name: "Digital Twin", path: "/software-training/digital-twin" },
    { name: "AI in Engineering", path: "/software-training/ai-engineering" },
    { name: "3D Visualization", path: "/software-training/3d-visualization" },
    { name: "Construction Project Management", path: "/software-training/cpm" },
];

const packageLinks = [
    { name: "Residential Project Package", path: "/packages/residental" },
    { name: "Commercial Project Package", path: "/packages/commercial" },
    { name: "Infrastructure Project Package", path: "/packages/infrastructure" },
    { name: "Engineering Consulting Package", path: "/packages/consultant" },
    { name: "BIM & Digital Twin Integrated with AI Engineering Package", path: "/packages/bim-ai" },
    { name: "Software Training & Skills Training Package", path: "/packages/software" },
];

const projectLinks = [
    { name: "Ongoing Projects", path: "/ongoing-projects" },
    { name: "Completed Projects", path: "/completed-projects" },
];


const sitemapData = {
  company: companyLinks,
  services: allServices,
  softwareTraining: softwareTrainingLinks,
  packages: packageLinks,
  projects: projectLinks,
  legal: [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Terms of Service', path: '/terms-of-service' },
  ],
};

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderLinks = (links) => (
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.path}>
          <Link to={link.path} className="flex items-center text-white/80 hover:text-cyan-400 transition-colors group">
            <ChevronRight className="w-5 h-5 mr-2 text-cyan-500 transition-transform group-hover:translate-x-1" />
            <span>{link.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Header mode="transparent" className="fixed top-0 left-0 w-full z-50" />
      
      <div className="bg-[#0b2741]">
        {/* --- Sitemap Content Section --- */}
        <section className="relative py-24 md:py-32 text-white overflow-hidden">
            {/* Hero Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Blue Tint Overlay */}
            <div className="absolute inset-0 bg-[#0b2741]/90 z-10"></div>

            {/* Additional Dark Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-black/30 z-15"></div>

            {/* Content Wrapper */}
            <div className="relative z-20 w-full px-4 md:px-8">
                {/* Page Title */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">Sitemap</h1>
                    <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
                        Navigate through our website's structure to easily find the page you're looking for                     </p>
                </div>

                {/* Sitemap Links Grid */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
                        
                        {/* Company */}
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-cyan-400 border-b-2 border-cyan-500/30 pb-3">Company</h2>
                            {renderLinks(sitemapData.company)}
                        </div>

                        {/* All Services */}
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-cyan-400 border-b-2 border-cyan-500/30 pb-3">All Services</h2>
                            {renderLinks(sitemapData.services)}
                        </div>
                        
                        {/* Software Training */}
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-cyan-400 border-b-2 border-cyan-500/30 pb-3">Software Training</h2>
                            {renderLinks(sitemapData.softwareTraining)}
                        </div>

                        {/* Packages */}
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-cyan-400 border-b-2 border-cyan-500/30 pb-3">Packages</h2>
                            {renderLinks(sitemapData.packages)}
                        </div>

                        {/* Projects Column */}
                        <div>
                            <h2 className="text-xl font-bold mb-6 text-cyan-400 border-b-2 border-cyan-500/30 pb-3">Projects</h2>
                            {renderLinks(sitemapData.projects)}
                            
                            {/* Legal Sub-section */}
                            <div className="mt-8">
                                <h3 className="text-xl font-bold mb-6 border-b-2 border-cyan-500/30 text-cyan-500 pb-3">Legal</h3>
                                {renderLinks(sitemapData.legal)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Sitemap;