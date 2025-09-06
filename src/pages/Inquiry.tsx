import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import contactus from '@/assert/contactus.jpg';
// Import the phone input component and its CSS
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


const Inquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  // Custom styles for the PhoneInput component
  const phoneInputCustomStyles = `
    .custom-phone-input.react-tel-input .form-control {
        background-color: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        color: white !important;
        width: 100% !important;
        padding-top: 0.5rem !important;
        padding-bottom: 0.5rem !important;
    }
    .custom-phone-input.react-tel-input .flag-dropdown {
        background-color: rgba(255, 255, 255, 0.1) !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
        border-right: none !important;
    }
    .custom-phone-input.react-tel-input .flag-dropdown:hover,
    .custom-phone-input.react-tel-input .flag-dropdown.open {
        background-color: #06b6d4 !important; /* cyan-500 */
    }
    .custom-phone-input.react-tel-input .selected-flag {
        background-color: transparent !important;
    }
    .custom-phone-input.react-tel-input .country-list {
        background-color: #0b2741 !important;
        border: 1px solid rgba(255, 255, 255, 0.3) !important;
    }
    .custom-phone-input.react-tel-input .country-list .country:hover,
    .custom-phone-input.react-tel-input .country-list .country.highlight {
        background-color: #06b6d4 !important; /* cyan-500 */
        color: white !important;
    }
    .custom-phone-input.react-tel-input .country-list .search-box {
        background-color: rgba(255, 255, 255, 0.1) !important;
        color: white !important;
        border-color: rgba(255, 255, 255, 0.3) !important;
    }
  `;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 100) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handler for the PhoneInput component
  const handlePhoneChange = (phone: string) => {
    setFormData({
        ...formData,
        phone: phone
    });
  };

  return (
    <div className="min-h-screen bg-[#0b2741]">
      <style>{phoneInputCustomStyles}</style>
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header mode="transparent"/>
      </div>
      
      {/* Restored "Top Part" Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-16">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
            <img 
              src={contactus} 
              alt="Contact Us Background" 
              className="w-full h-full object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b2741] via-[#0b2741]/80 to-transparent z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
            <div className="max-w-3xl text-center mx-auto">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
                    Get In Touch
                </h1>
                <p className="text-lg md:text-xl text-white/90 drop-shadow-md">
                    We're ready to help with your engineering needs. Contact us today to discuss your project, and our team will get back to you promptly                 </p>
            </div>
        </div>
      </section>
      
      <main className="pb-16 px-4 md:px-8">
        <div className="max-w-9xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information Section */}
            <div className="lg:order-2">
              <div className="bg-gradient-to-r from-cyan-600 to-[#0b2741] p-6 rounded-lg shadow-lg sticky top-24 h-full">
                <h2 className="text-xl font-semibold mb-6 text-white border-b border-white/20 pb-2">Contact Details</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Phone</h3>
                      <p className="text-gray-200">+94 77 523 5572</p>
                      <p className="text-gray-200">+94 74 022 6660</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">Email</h3>
                      <p className="text-gray-200">info@terreneengineering.com</p>
                      <p className="text-gray-200">projects@terreneengineering.com</p>
                    </div>
                  </div>

                  

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-semibold text-white text-justify">Business Hours</h3>
                        <div className="text-gray-200 text-justify leading-[1.8rem]">
                        <div className="flex justify-between">
                            <span>Monday:</span>
                            <span>7:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tuesday:</span>
                            <span>7:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span className= "mr-4">Wednesday:</span>
                            <span>7:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Thursday:</span>
                            <span>7:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Friday:</span>
                            <span>7:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Saturday:</span>
                            <span>7:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>7:00 AM - 10:00 PM</span>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            {/* Inquiry Form Section */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-gradient-to-r from-cyan-600 to-[#0b2741] p-6 rounded-lg shadow-lg  h-full flex flex-col">
                <div>
                    <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-white">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1 text-white">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-1 text-white">Phone Number</label>
                        <PhoneInput
                          containerClass="custom-phone-input"
                          country={'lk'}
                          value={formData.phone}
                          onChange={handlePhoneChange}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1 text-white">Company</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                        />
                      </div>
                    </div>
    
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1 text-white">Service Required</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm"
                      >
                        <option value="" className="bg-[#0b2741]">Select a service</option>
                        <option value="structural-design" className="bg-[#0b2741]">Structural Design</option>
                        <option value="civil-engineering" className="bg-[#0b2741]">Civil Engineering</option>
                        <option value="architectural-consulting" className="bg-[#0b2741]">Architectural Consulting</option>
                        <option value="project-management" className="bg-[#0b2741]">Project Management</option>
                        <option value="other" className="bg-[#0b2741]">Other</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1 text-white">Project Details *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-2 bg-white/10 text-white border border-white/30 rounded-md focus:outline-none focus:ring-1 focus:ring-white shadow-sm placeholder-gray-300"
                        placeholder="Please describe your project requirements..."
                        required
                      />
                    </div>
                </div>

                <div className="mt-auto">
                    <Button 
                      type="submit" 
                      size="lg"
                      className="w-full bg-white text-white bg-[#0050A0] hover:bg-cyan-500 font-bold"
                    >
                      <Send className="w-4 h-4 mr-2" /> SEND INQUIRY
                    </Button>

                    {formSubmitted && (
                      <div className="mt-4 p-4 bg-green-500/90 text-white rounded-lg shadow-md">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          <p className="text-sm font-medium">Thank you! Your inquiry has been submitted successfully.</p>
                        </div>
                      </div>
                    )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Inquiry;