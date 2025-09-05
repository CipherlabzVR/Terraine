import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle, Award, Users, Globe, ChevronDown, X, Send } from 'lucide-react';
import aboutImage from '../assert/testimonial/tetimonial10.png';
import testimonial1 from '../assert/testimonial/testimonial1.png';
import testimonial2 from '../assert/testimonial/testimonial2.png';
import testimonial3 from '../assert/testimonial/testimonial3.jpg';
import testimonial4 from '../assert/testimonial/testimonial4.jpg';
import testimonial5 from '../assert/testimonial/testimonial5.png';
import testimonial6 from '../assert/testimonial/testimonial6.png';
import testimonial7 from '../assert/testimonial/testimonial7.webp';
import testimonial8 from '../assert/testimonial/testimonial8.jpg';
import testimonial9 from '../assert/testimonial/testimonial9.jpg';

// Updated Toast component to match the new design
const Toast = ({ onClose }: { onClose: () => void }) => (
  <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-teal-500 text-white p-5 rounded-lg shadow-2xl flex items-center space-x-4 z-50 max-w-md animate-fade-in-down">
    {/* Checkmark Icon */}
    <div className="flex-shrink-0 bg-white/25 p-2 rounded-lg">
      <CheckCircle size={28} className="text-white"/>
    </div>
    {/* Text Content */}
    <div className="flex-grow">
      <h1 className="font-bold text-lg">Sent</h1>
      <p className="text-sm text-white/90">Your feedback sent successfully.</p>
    </div>
    {/* Close Button */}
    <button onClick={onClose} className="text-white/70 hover:text-white flex-shrink-0">
      <X size={20} />
    </button>
  </div>
);


const testimonials = [
    {
      id: 'customer1',
      name: 'John Reynolds',
      country: 'United States',
      company: 'Reynolds Construction',
      position: 'Chief Project Manager',
      projectName: 'Manhattan Heights Tower',
      projectType: 'High-rise Residential Complex',
      projectDetails: 'A 42-story luxury residential tower with sustainable design features and structural innovation.',
      testimonial: "Terrene Engineering's structural design expertise was instrumental in overcoming the challenges we faced with our Manhattan project. Their team's innovative approach and attention to detail saved us both time and resources."
    },
    {
      id: 'customer2',
      name: 'Mei Zhang',
      country: 'Singapore',
      company: 'Pacific Development Group',
      position: 'Director of Operations',
      projectName: 'Marina Bay Commercial Center',
      projectType: 'Mixed-use Commercial Complex',
      projectDetails: 'A waterfront commercial hub with 5 interconnected buildings and integrated sustainable systems.',
      testimonial: "Working with Terrene Engineering was a seamless experience. Their team understood our complex requirements and delivered solutions that exceeded our expectations. The project was completed ahead of schedule and the engineering work was flawless."
    },
    {
      id: 'customer3',
      name: 'Ahmed Al-Farsi',
      country: 'UAE',
      company: 'Al-Farsi Holdings',
      position: 'CEO',
      projectName: 'Dubai Horizon Tower',
      projectType: 'Multi-purpose Skyscraper',
      projectDetails: 'A 78-floor iconic building featuring offices, luxury apartments, and a 5-star hotel with advanced MEP systems.',
      testimonial: "Terrene Engineering provided exceptional value with their innovative structural solutions. Their ability to integrate sustainable systems while maintaining the architectural vision of our landmark project was impressive. I highly recommend their services."
    },
    {
      id: 'customer4',
      name: 'Isabella Martínez',
      country: 'Spain',
      company: 'Barcelona Urban Renewal',
      position: 'Project Director',
      projectName: 'Mediterranean Cultural Center',
      projectType: 'Cultural Heritage Renovation',
      projectDetails: 'Restoration and modernization of a 19th century building into a cultural hub with state-of-the-art facilities.',
      testimonial: "The team at Terrene Engineering demonstrated remarkable sensitivity to the historical elements of our project while implementing modern engineering solutions. Their expertise in heritage conservation and structural reinforcement was invaluable."
    },
    {
      id: 'customer5',
      name: 'Kenji Tanaka',
      country: 'Japan',
      company: 'Sakura Infrastructure',
      position: 'Lead Engineer',
      projectName: 'Tokyo SkyReach',
      projectType: 'Commercial Skyscraper',
      projectDetails: 'A 60-story office building with advanced seismic damping technology.',
      testimonial: "Terrene's team brought a level of precision and innovation that is unmatched. Their seismic solutions for Tokyo SkyReach have set a new standard in skyscraper safety."
    },
    {
      id: 'customer6',
      name: 'Fatima Al-Jaber',
      country: 'Qatar',
      company: 'Doha Future Projects',
      position: 'Development Manager',
      projectName: 'The Pearl Residences',
      projectType: 'Luxury Residential',
      projectDetails: 'An exclusive waterfront residential complex with state-of-the-art amenities.',
      testimonial: "The attention to detail and commitment to quality from Terrene Engineering was exceptional. They were a key partner in making The Pearl Residences a landmark project in Doha."
    },
    {
      id: 'customer7',
      name: 'David Chen',
      country: 'Australia',
      company: 'Sydney Harbour Development',
      position: 'Project Manager',
      projectName: 'Oceanic Tower',
      projectType: 'Mixed-Use Development',
      projectDetails: 'A 50-story tower with panoramic views of Sydney Harbour, featuring residential, commercial, and retail spaces.',
      testimonial: "Terrene Engineering's expertise in sustainable design was a game-changer for Oceanic Tower. Their innovative solutions helped us achieve a 6-star Green Star rating."
    },
    {
      id: 'customer8',
      name: 'Maria Rossi',
      country: 'Italy',
      company: 'Roman Heritage Foundation',
      position: 'Director',
      projectName: 'Colosseum Restoration Initiative',
      projectType: 'Historical Preservation',
      projectDetails: 'A complex project focused on reinforcing the ancient structure of the Colosseum while preserving its historical integrity.',
      testimonial: "The sensitivity and expertise Terrene Engineering brought to the Colosseum restoration were remarkable. They honored our history while ensuring the structure's future."
    },
    {
      id: 'customer9',
      name: 'Carlos Silva',
      country: 'Brazil',
      company: 'Rio Verde Developments',
      position: 'CEO',
      projectName: 'Amazon Rainforest Eco-Resort',
      projectType: 'Sustainable Tourism',
      projectDetails: 'A luxury eco-resort designed to have a minimal environmental impact on the surrounding Amazon rainforest.',
      testimonial: "Terrene's commitment to sustainability and their innovative engineering solutions were crucial for the success of our eco-resort. They are leaders in green engineering."
    },
    {
      id: 'customer10',
      name: 'Aisha Khan',
      country: 'India',
      company: 'Mumbai Modern Infra',
      position: 'Chief Architect',
      projectName: 'Gateway Plaza',
      projectType: 'Commercial Complex',
      projectDetails: 'A state-of-the-art commercial plaza in the heart of Mumbai, designed for high-density use.',
      testimonial: "The structural design provided by Terrene for Gateway Plaza was both elegant and efficient. They managed to create a spacious feel in a challenging urban environment."
    },
    {
      id: 'customer11',
      name: 'Liam Murphy',
      country: 'Ireland',
      company: 'Dublin Connect',
      position: 'Project Lead',
      projectName: 'Liffey Bridge Project',
      projectType: 'Infrastructure',
      projectDetails: 'A new pedestrian and cycle bridge over the River Liffey, designed to be a modern landmark.',
      testimonial: "Terrene Engineering delivered a design for the Liffey Bridge that was both beautiful and functional. Their collaborative approach made the entire process a pleasure."
    },
    {
      id: 'customer12',
      name: 'Chloe Dubois',
      country: 'France',
      company: 'Parisian Aesthetics',
      position: 'Artistic Director',
      projectName: 'Louvre Pyramid Expansion',
      projectType: 'Cultural Architecture',
      projectDetails: 'An underground expansion of the Louvre to accommodate more visitors and facilities without altering the iconic pyramid.',
      testimonial: "The challenge of expanding the Louvre without disturbing its beauty was immense. Terrene Engineering's innovative underground structural solutions made it possible."
    }
  ];

const Testimonial = () => {
  const [visibleTestimonials, setVisibleTestimonials] = useState(4);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [testimonial1, testimonial2, testimonial3, testimonial4, testimonial5, testimonial6, testimonial7, testimonial8, testimonial9];

  const handleLoadMore = () => {
    setVisibleTestimonials(prev => prev + 4);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowFeedbackForm(false);
    setToastMessage('Your feedback has been sent'); // This string just acts as a trigger
    // Auto-hide toast
    setTimeout(() => {
        setToastMessage('');
    }, 5000);
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
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0b2741" }}>
      <div
        className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
          showHeader ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <Header />
      </div>

     {/* Corrected Feedback Button */}
     <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 group">
        <Button
          size="lg"
          className="bg-[#0050A0] text-white shadow-lg
                     flex items-center h-12 sm:h-14 rounded-r-full
                     pl-4 pr-3 sm:pl-6 sm:pr-4 transition-all duration-300 ease-in-out"
          onClick={() => setShowFeedbackForm(true)}
        >
          <span className="text-base sm:text-lg font-semibold whitespace-nowrap">
            SEND FEEDBACK
          </span>
          {/* Container for the icon that expands on hover */}
          <div className="transition-all duration-300 ease-in-out max-w-0 group-hover:max-w-6 overflow-hidden ml-0 group-hover:ml-2">
              <Send size={24} />
          </div>
        </Button>
      </div>


      {/* Feedback Form Modal */}
      {showFeedbackForm && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 backdrop-blur-sm p-4">
          <div className="bg-gray-800/50 border border-cyan-500/50 p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md relative
                        shadow-cyan-500/20">
            <button
              onClick={() => setShowFeedbackForm(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">Send Us Your Feedback</h2>
            <form onSubmit={handleFeedbackSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" id="name" className="w-full p-3 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" id="email" className="w-full p-3 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required />
              </div>
              <div>
                <label htmlFor="feedback" className="block text-sm font-medium text-gray-300 mb-2">Feedback</label>
                <textarea id="feedback" rows={5} className="w-full p-3 rounded-md bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" required></textarea>
              </div>
              <Button type="submit" size="lg" className="w-full bg-[#0050A0] text-white hover:opacity-90 transition-opacity font-bold text-lg py-3">
                SUBMIT FEEDBACK
              </Button>
            </form>
          </div>
        </div>
      )}


      {/* Toast Notification */}
      {toastMessage && (
        <Toast onClose={() => setToastMessage('')} />
      )}


      <div className="pt-20">
        <div className="hidden lg:block fixed top-0 left-0 w-1/2 h-full z-0">
        <div className="relative w-full h-full overflow-hidden border-2 border-white/10 bg-black/40 shadow-2xl">
            {/* White glowing shade */}
            <div className="absolute -inset-4 bg-gradient-to-l from-white/30 via-white/10 to-white/0 rounded-none blur-2xl opacity-80 z-0"></div>
            {/* Blue light accents */}
            <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-120 h-120 rounded-full bg-blue-600/10 blur-3xl"></div>
            {/* Animated image transition - improved with scale and movement effects */}
            <div className="relative w-full h-full overflow-hidden">
              {/* Current image - fade out and scale down when transitioning */}
              <img
                id="currentImage"
                src={images[currentImage]}
                alt="Testimonial section"
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
              
              {/* Next image - starts zoomed in and slides up while fading in */}
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
              <div className="flex flex-col justify-start p-0 pt-0 pb-8 lg:pb-11 xl:pb-16 bg-gradient-to-r from-cyan-600 to-[#0b2741] rounded-3xl  relative overflow-hidden shadow-2xl lg:ml-0 lg:-mr-16 mt-0 lg:mt-0">
                {/* Decorative Elements */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-black/40 via-white/5 to-black/30 rounded-[inherit] blur-md opacity-70 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-white/10 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* About image that fills top and extends to corners */}
                <div className="w-full overflow-hidden rounded-t-3xl">
                  <div className="relative">
                    <img 
                      src={aboutImage} 
                      alt="Customer Testimonials" 
                      className="w-full h-[320px] md:h-[400px] lg:h-[480px] object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-[#0E75A0]/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 w-full p-4 md:p-6">
                      <div className="max-w-[2400px] mx-auto">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Customer Testimonials</h3>
                        <div className="w-16 h-1 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="relative z-10 flex flex-col items-start h-full px-4 sm:px-8 lg:px-11 xl:px-16 pt-8">
                  <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                      What Our <span className="text-primary-300">Customers Say</span>
                    </h2>
                    <p className="text-white text-lg sm:text-xl mb-4 text-left max-w-4xl leading-relaxed">
                      Real feedback from our valued customers around the world                     </p>
                  </div>

                  <div className="w-full">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 text-left">Customer Reviews</h2>
                    <ul className="space-y-8 max-w-4xl">
                      {testimonials.slice(0, visibleTestimonials).map((testimonial) => (
                        <li key={testimonial.id} className="p-4 sm:p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm">
                          <div className="mb-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-white">
                              {testimonial.name} <span className="text-white/70 text-sm">({testimonial.country})</span>
                            </h3>
                          </div>
                          <p className="mb-4 text-base sm:text-lg italic text-gray-200">"{testimonial.testimonial}"</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {visibleTestimonials < testimonials.length && (
                    <div className="mt-12 sm:mt-16 flex justify-center w-full">
                      <Button size="lg" className="bg-[#0050A0] text-white hover:opacity-90 transition-opacity " onClick={handleLoadMore}>
                        LOAD MORE REVIEWS
                      </Button>
                    </div>
                  )}

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

export default Testimonial;