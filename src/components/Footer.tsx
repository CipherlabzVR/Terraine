import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SPACING_CLASSES } from '@/lib/spacing';
// Import logo from assets folder
import Logo2 from '../assert/Logo2.png';

const Footer = () => {
  return (
    <section className=" pb-0  md:pb-0 w-full relative overflow-hidden">
      <footer className="bg-slate-900 text-white w-full">
        <div className="w-full max-w-[2400px] mx-auto px-8 md:px-10 lg:px-16 py-8 pb-4 relative z-20">
          {/* Responsive grid: always 1 column on mobile, 4 columns on md+ */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
            <div className="space-y-4 min-h-[1px] text-left">
              {/* Logo and company name */}
              <div className="flex flex-col justify-between h-full">
                <div className="flex items-center space-x-4 h-full">
                  <div className="flex items-center">
                    <div className="bg-white rounded-lg p-4 mt-[3vh] flex items-center justify-center">
                      <img
                        src={Logo2}
                        alt="Terrene Engineering Logo"
                        className="object-contain"
                        style={{
                          width: "470px",
                          height: "auto",
                          maxWidth: "90%"
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-[7vh]">
                    <h1 className="font-bold text-2xl mb-1">Terrene Engineering</h1>
                    <p className="text-base text-gray-400 mb-8">(Private) Limited</p>
                    <p className="text-xs text-gray-400">
                   
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <div className="flex flex-col sm:flex-row gap-8">
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services/consultancy-services" className="text-gray-300 hover:text-white transition-colors">Consultancy Services</Link></li>
                  <li><Link to="/services/drawings" className="text-gray-300 hover:text-white transition-colors"> Engineering Drawings</Link></li>
                  <li><Link to="/services/construction" className="text-gray-300 hover:text-white transition-colors">Construction</Link></li>
                  <li><Link to="/services/interior-design" className="text-gray-300 hover:text-white transition-colors">Interior Design</Link></li>
                  <li><Link to="/services/bim" className="text-gray-300 hover:text-white transition-colors">BIM</Link></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services/digital-twin" className="text-gray-300 hover:text-white transition-colors">Digital Twin</Link></li>
                  <li><Link to="/services/maintenance" className="text-gray-300 hover:text-white transition-colors">Maintenance</Link></li>
                  <li><Link to="/services/ai-engineering" className="text-gray-300 hover:text-white transition-colors">AI Engineering</Link></li>
                  <li><Link to="/services/furniture-design" className="text-gray-300 hover:text-white transition-colors">Furniture Design & Supply</Link></li>
                  <li><Link to="/services/material-consultancy" className="text-gray-300 hover:text-white transition-colors">Material Consultancy</Link></li>
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/services/import-export" className="text-gray-300 hover:text-white transition-colors">Import & Export</Link></li>
                   
                </ul>
              </div>
            </div>

            {/* Quick Links section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="flex flex-col sm:flex-row gap-8">
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                  <li><Link to="/whyterrene" className="text-gray-300 hover:text-white transition-colors">Why Terrene</Link></li>
                  <li><Link to="/completed-projects" className="text-gray-300 hover:text-white transition-colors">Projects</Link></li>
                  <li><Link to="/inquiry" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                  
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/career" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
                  <li><Link to="/qualitypolicy" className="text-gray-300 hover:text-white transition-colors">Quality Policy</Link></li>
                  <li><Link to="/sustainability" className="text-gray-300 hover:text-white transition-colors">Sustainability</Link></li>
                  <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                  
                </ul>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
                  <li><Link to="/testimonial" className="text-gray-300 hover:text-white transition-colors">Testimonial</Link></li>
                  <li><Link to="/software-training" className="text-gray-300 hover:text-white transition-colors">Software Training</Link></li>
                </ul>
              </div>
            </div>

            {/* Contact Info section */}
            <div className="min-h-[1px] text-left">
              <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
              <div className="space-y-3 text-sm">
               
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-gray-300">+94 77 523 5572 <br />+94 74 022 6660</p>
                    <p className="text-gray-400 text-[0.95rem] mt-1">Mon - Sun: 7:00 AM - 10:00 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
    {/* This new div stacks the email addresses vertically */}
    <div className="flex flex-col">
      <span className="text-gray-300">info@terreneengineering.com</span>
      <span className="text-gray-300">careers@terreneengineering.com</span>
    </div>
</div>
                
                {/* --- SOCIAL MEDIA ICONS UPDATED TO IMAGES --- */}
                <div className="flex space-x-4 pt-4">
                  <a href="https://www.facebook.com/share/1GRAMJHEas/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 hover:opacity-80">
                    <img src="/facebook.png" alt="Facebook" className="w-7 h-7" />
                  </a>
                  <a href="https://www.linkedin.com/company/terrene-engineering-private-limited/" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 hover:opacity-80">
                    <img src="/linkedin.png" alt="LinkedIn" className="w-7 h-7" />
                  </a>
                  <a href="https://www.instagram.com/terreneengineering?igsh=amE5a2QwdjlmdDU1" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 hover:opacity-80">
                    <img src="/instagram.png" alt="Instagram" className="w-7 h-7" />
                  </a>
                   <a href="https://youtube.com/@terreneengineering?si=3ifwOLd3PaIDIoly" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 hover:opacity-80">
                    <img src="/youtube.png" alt="YouTube" className="w-7 h-7" />
                  </a>
                   <a href="https://www.tiktok.com/@terreneengineering?_t=ZS-8yEqPlsthkl&_r=1" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 hover:opacity-80">
                    <img src="/tiktok.png" alt="TikTok" className="w-7 h-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-400">
            <p>© 2025 Terrene Engineering (Private) Limited. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;