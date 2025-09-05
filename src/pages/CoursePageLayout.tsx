import React, { useEffect, useState, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from 'react-router-dom';
import { 
    ArrowRight, Award, CheckCircle, Plus, Phone, 
    Clock, Library, Mail, ChevronsDown, Send, 
    Shapes, Code2, Laptop, Download,
    Briefcase, Users, Target, CircleChevronLeft, CircleChevronRight 
} from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const allCoursesData = [
  {
    title: 'Diploma in BIM',
    slug: 'bim',
    image: '/bim.jpg',
    duration: '16-20 Weeks',
    description: 'Master Building Information Modeling from fundamentals to advanced project coordination.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-blue-500/70 to-purple-600/70'
  },
  {
    title: 'Digital Twin Technology',
    slug: 'digital-twin',
    image: '/digital-twin.jpg',
    duration: '12 Weeks',
    description: 'Explore the creation and application of digital replicas for real-world assets and systems.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-teal-500/70 to-cyan-600/70'
  },
  {
    title: 'AI in Engineering',
    slug: 'AIEngineerng',
    image: '/ai-engineering.jpg',
    duration: '14 Weeks',
    description: 'Leverage artificial intelligence and machine learning to solve complex engineering challenges.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-amber-500/70 to-orange-600/70'
  },
  {
    title: '3D Architectural Visualization',
    slug: '3d-visualization',
    image: '/3d-visualization.jpeg',
    duration: '12 Weeks',
    description: 'Create stunning, photorealistic architectural renders with industry-standard software.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-sky-500/70 to-blue-600/70'
  },
  {
    title: 'Construction Project Management',
    slug: 'construction-pm',
    image: '/construction-management.jpg',
    duration: '18 Weeks',
    description: 'Gain essential skills in planning, executing, and overseeing construction projects.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-amber-500/70 to-orange-600/70'
  },
  {
    title: 'Structural Design and Modelling',
    slug: 'structural',
    image: '/showcase-1.jpg',
    duration: '15 Weeks',
    description: 'Learn the principles of structural engineering and advanced 3D modeling techniques.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-red-500/70 to-orange-600/70'
  },
  {
    title: 'MEP & HVAC Systems',
    slug: 'mep-hvac',
    image: '/mep.jpeg',
    duration: '14 Weeks',
    description: 'Understand the design and implementation of Mechanical, Electrical, and Plumbing systems.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-indigo-500/70 to-purple-600/70'
  },
  {
    title: 'Interior Design',
    slug: 'interior',
    image: '/showcase-4.jpeg',
    duration: '10 Weeks',
    description: 'Master the art of creating functional and aesthetic interior spaces from concept to completion.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-pink-500/70 to-rose-600/70'
  },
  {
    title: 'Landscape Architecture',
    slug: 'landscape',
    image: '/land.jpeg',
    duration: '12 Weeks',
    description: 'Learn to design and manage outdoor spaces, blending nature with modern environments.',
    feeDescription: 'Includes all learning materials and certification.',
    gradient: 'from-green-500/70 to-emerald-600/70'
  },
  {
    title: 'Customized Corporate Training',
    slug: 'customize-course',
    image: '/learn.jpg',
    duration: 'Custom',
    description: 'Tailored training programs designed to meet the specific needs of your organization.',
    feeDescription: 'Contact us for a custom quote and curriculum.',
    gradient: 'from-gray-500/70 to-slate-600/70'
  },
];

const AllCoursesCarousel = ({ courses }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const [coursesToShow, setCoursesToShow] = useState(3);
    const transitionTime = 700; // ms

    useEffect(() => {
        const handleResize = () => {
            const newCoursesToShow = window.innerWidth < 768 ? 1 : 3;
            setCoursesToShow(prev => {
                if (prev !== newCoursesToShow) {
                    setCurrentIndex(0);
                }
                return newCoursesToShow;
            });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const extendedCourses = [...courses, ...courses.slice(0, coursesToShow)];
  
    const nextSlide = () => {
        if (carouselRef.current && carouselRef.current.style.transition.includes('none')) {
            return;
        }

        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        
        if (newIndex >= courses.length) {
            setTimeout(() => {
                if (carouselRef.current) {
                    carouselRef.current.style.transition = 'none';
                    setCurrentIndex(0);
                    setTimeout(() => {
                        if (carouselRef.current) {
                            carouselRef.current.style.transition = `transform ${transitionTime}ms ease-in-out`;
                        }
                    }, 50);
                }
            }, transitionTime);
        }
    };
  
    const prevSlide = () => {
        if (carouselRef.current && carouselRef.current.style.transition.includes('none')) {
            return;
        }

        if (currentIndex === 0) {
            if (carouselRef.current) {
                carouselRef.current.style.transition = 'none';
                const newIndex = courses.length;
                const newTransform = `translateX(-${newIndex * (100 / coursesToShow)}%)`;
                carouselRef.current.style.transform = newTransform;
                
                setTimeout(() => {
                    if (carouselRef.current) {
                        carouselRef.current.style.transition = `transform ${transitionTime}ms ease-in-out`;
                        setCurrentIndex(newIndex - 1);
                    }
                }, 50);
            }
        } else {
            setCurrentIndex((prevIndex) => prevIndex - 1);
        }
    };
    
    return (
      <div className="relative w-full">
        <div className="overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex pointer-events-none"
            style={{ 
              transition: `transform ${transitionTime}ms ease-in-out`,
              transform: `translateX(-${currentIndex * (100 / coursesToShow)}%)` 
            }}
          >
            {extendedCourses.map((course, index) => (
              <div key={index} className="flex-shrink-0 w-full md:w-1/3 px-2">
                <div className="relative bg-slate-900 rounded-xl overflow-hidden transform transition-transform duration-300 shadow-lg hover:shadow-cyan-500/20 h-full flex flex-col">

                  <Link to={`/software-training/${course.slug}`} className="pointer-events-auto">
                    <div className="relative overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-80 object-cover transition-transform duration-500" />
                      <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-80 transition-opacity`}></div>
                      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md">
                        <Library className="w-6 h-6 text-cyan-700" />
                      </div>
                      <div className="absolute bottom-0 p-6 w-full bg-gradient-to-t from-black/80 to-transparent">
                        <h3 className="text-2xl font-bold text-white mb-3">{course.title}</h3>
                      </div>
                    </div>
                  </Link>

                  <div className="p-6 bg-slate-800 flex flex-col flex-grow">
                    <p className="text-white/70 mb-4 text-sm flex-grow">{course.description}</p>
                    <div className="border-t border-white/20 pt-4 mt-auto">
                      <p className="text-xs text-white/60 italic mb-4">{course.feeDescription}</p>
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center space-x-2 text-white/80">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span>{course.duration}</span>
                        </div>
                        <Link 
                          to={`/software-training/${course.slug}`} 
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-xs pointer-events-auto"
                        >
                          Learn More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-8 z-10 transition-transform duration-200 hover:scale-110"
            style={{ pointerEvents: 'auto' }}
        >
            <CircleChevronLeft className="w-16 h-16 text-white/40 hover:text-cyan-500 mb-12"/>
        </button>
        <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8 z-10 transition-transform duration-200 hover:scale-110"
            style={{ pointerEvents: 'auto' }}
        >
            <CircleChevronRight className="w-16 h-16 text-white/40 hover:text-cyan-500 mb-12"/>
        </button>
      </div>
    );
};

const ContactFormSection = ({ subtitle }) => {
    const uniqueCourses = [...new Set(allCoursesData.map(c => c.title))];
    const [phone, setPhone] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        alert("Message Sent!");
    };
    
    return (
        <section className="relative py-20 lg:py-19 text-white">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/sof.mp4" />
                <div className="absolute inset-0 bg-[#0b2741]/95"></div><div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="relative z-10 w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white">HAVE QUESTIONS?</h2>
                    <p className="mt-2 text-lg text-white/70">{subtitle}</p>
                    <div className="mt-4 w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    <div className="lg:col-span-2 bg-slate-900 p-8 rounded-lg border border-white/10 shadow-2xl shadow-cyan-500/20">
                        <div className="space-y-8">
                          <h3 className="text-2xl font-bold text-white">Contact Information</h3>
                          <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/10"><Phone className="w-6 h-6 text-cyan-400" /></div>
                              <div>
                                  <h4 className="font-bold">Call Us</h4>
                                  <p className="text-white/70">+94 77 948 7100</p>
                                  <p className="text-white/70">+94 71 433 7100</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/10"><Mail className="w-6 h-6 text-cyan-400" /></div>
                              <div>
                                  <h4 className="font-bold">Email Us</h4>
                                  <p className="text-white/70">info@terrene.lk</p>
                                  <p className="text-white/70">contact@terrene.lk</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/10"><Clock className="w-6 h-6 text-cyan-400" /></div>
                              <div>
                                  <h4 className="font-bold">Opening Hours</h4>
                                  <p className="text-white/70">Monday - Friday: 7:00 AM - 10:00 PM</p>
                                  <p className="text-white/70">Saturday - Sunday: 7:00 AM - 10:00 PM</p>
                              </div>
                          </div>
                          <div>
                              <h4 className="font-bold mb-4">Follow Us</h4>
                              <div className="flex items-center gap-4">
                                  <a href="https://www.facebook.com/share/1GRAMJHEas/" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/facebook.png" alt="Facebook"/></a>
                                  <a href="https://www.instagram.com/terreneengineering?igsh=amE5a2QwdjlmdDU1" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/instagram.png" alt="Instagram"/></a>
                                  <a href="https://www.linkedin.com/company/terrene-engineering-private-limited/" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/linkedin.png" alt="LinkedIn"/></a>
                                  <a href="https://youtube.com/@terreneengineering?si=3ifwOLd3PaIDIoly" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/youtube.png" alt="YouTube"/></a>
                                  <a href="https://www.tiktok.com/@terreneengineering?_t=ZS-8yEqPlsthkl&_r=1" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/tiktok.png" alt="TikTok"/></a>
                              </div>
                          </div>
                        </div>
                    </div>
                    <div className="lg:col-span-3 bg-slate-900 p-8 rounded-lg border border-white/10 shadow-2xl shadow-cyan-500/20">
                         <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
                         <form onSubmit={handleFormSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Your Name</label>
                                    <input type="text" id="name" required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                                    <input type="email" id="email" required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400" />
                                </div>
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
                                    {/* --- MODIFIED PhoneInput --- */}
                                    <PhoneInput
                                        country={'lk'}
                                        value={phone}
                                        onChange={setPhone}
                                        containerClass="w-full custom-phone-input"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="course" className="block text-sm font-medium text-white/80 mb-1">Course Interested In</label>
                                    <select id="course" required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400">
                                        {uniqueCourses.map(course => <option key={course} value={course} className="bg-[#0b2741] text-white">{course}</option>)}
                                    </select>
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Your Message</label>
                                    <textarea id="message" rows={5} required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400"></textarea>
                                </div>
                            </div>
                            <Button type="submit" size="lg" className="w-full mt-6 bg-[#0050A0] text-white font-bold hover:bg-cyan-500 transition-colors">
                                SEND MESSAGE
                                <Send className="w-5 h-5 ml-2" />
                            </Button>
                         </form>
                    </div>
                </div>
            </div>
        </section>
    );
};


const CoursePageLayout = ({ courseData }) => {
    const [showHeader, setShowHeader] = useState(true);
    const [isHeroLoaded, setIsHeroLoaded] = useState(false);
    const lastScrollY = useRef(0);

    // --- NEW: Custom styles for the PhoneInput component ---
    const phoneInputCustomStyles = `
        .custom-phone-input.react-tel-input .form-control {
          background-color: #1e293b !important; /* bg-slate-800 */
          border: 1px solid rgba(255, 255, 255, 0.2) !important; /* border-white/20 */
          color: white !important;
          width: 100% !important;
          padding-top: 1.25rem !important; /* Match py-5 from original */
          padding-bottom: 1.25rem !important;
        }
        .custom-phone-input.react-tel-input .flag-dropdown {
          background-color: #1e293b !important; /* bg-slate-800 */
          border: 1px solid rgba(255, 255, 255, 0.2) !important; /* border-white/20 */
          border-right: none !important;
        }
        .custom-phone-input.react-tel-input .flag-dropdown:hover,
        .custom-phone-input.react-tel-input .flag-dropdown.open {
          background-color: #0e7490 !important; /* cyan-700 */
        }
        .custom-phone-input.react-tel-input .selected-flag {
          background-color: transparent !important;
        }
        .custom-phone-input.react-tel-input .country-list {
          background-color: #0f172a !important; /* bg-slate-900 */
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
        }
        .custom-phone-input.react-tel-input .country-list .country:hover,
        .custom-phone-input.react-tel-input .country-list .country.highlight {
          background-color: #0e7490 !important; /* cyan-700 */
          color: white !important;
        }
        .custom-phone-input.react-tel-input .country-list .search-box {
          background-color: #1e293b !important; /* bg-slate-800 */
          color: white !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
    `;

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsHeroLoaded(true);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(window.scrollY < lastScrollY.current || window.scrollY < 10);
            lastScrollY.current = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const renderPrerequisiteIcon = (iconName) => {
        switch (iconName) {
            case 'Shapes': return <Shapes className="w-5 h-5 text-cyan-100 mr-3 mt-1 flex-shrink-0" />;
            case 'Code2': return <Code2 className="w-5 h-5 text-cyan-100 mr-3 mt-1 flex-shrink-0" />;
            case 'Laptop': return <Laptop className="w-5 h-5 text-cyan-100 mr-3 mt-1 flex-shrink-0" />;
            default: return null;
        }
    };

    const renderFeatureIcon = (title) => {
        const lowerTitle = title.toLowerCase();
        const iconClass = "w-10 h-10 text-cyan-400 mb-4";

        if (lowerTitle.includes('project')) {
            return <Briefcase className={iconClass} />;
        }
        if (lowerTitle.includes('expert') || lowerTitle.includes('mentor') || lowerTitle.includes('tutor')) {
            return <Users className={iconClass} />;
        }
        if (lowerTitle.includes('career') || lowerTitle.includes('job')) {
            return <Target className={iconClass} />;
        }
        if (lowerTitle.includes('certification')) {
            return <Award className={iconClass} />;
        }
        if (lowerTitle.includes('online') || lowerTitle.includes('flexible')) {
            return <Laptop className={iconClass} />;
        }
        // Return a default icon if no keywords match
        return <Shapes className={iconClass} />;
    };

    return (
        <div className="bg-[#0b2741]">
            <div className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
                <Header />
            </div>
            
            <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <img src={courseData.heroImage} alt={`${courseData.heroTitle} Visualization`} className={`w-full h-full object-cover transition-transform duration-[8000ms] ease-out ${isHeroLoaded ? 'scale-110' : 'scale-100'}`} />
                    <div className="absolute inset-0 bg-black/70"></div>
                </div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-[15vh]">
                                <span className="text-cyan-400">{courseData.heroTitle.split(' in ')[0]} in</span>
                                <br />
                                {courseData.heroTitle.split(' in ')[1]}
                            </h1>
                            <p className="mt-4 text-lg md:text-xl text-white max-w-xl mx-auto lg:mx-0">
                                {courseData.heroSubtitle}
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Button size="lg" className="bg-[#0050A0] text-white font-bold hover:bg-cyan-500 px-6 py-3 text-base rounded-md transition-transform hover:scale-105">
                                    REGISTER NOW <Plus className="w-5 h-5 ml-2" />
                                </Button>
                                <a href="#course-details">
                                    <Button size="lg" className="bg-cyan-500 text-white hover:bg-[#0050A0] px-6 py-3 text-base rounded-md">
                                        COURSE DETAILS <ChevronsDown className="w-5 h-5 ml-2" />
                                    </Button>
                                </a>
                            </div>
                        </div>
                        <div className="p-8 md:p-10 rounded-lg w-full lg:w-[101vh] lg:h-[55vh] border border-white/20 shadow-2xl bg-slate-900/50 backdrop-blur-md mt-8 lg:mt-[15vh]">
                            <h3 className="text-white font-bold text-4xl mb-10 text-center">Key Course Features</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                                {courseData.keyCourseFeatures.map((feature, index) => (
                                    <div key={index} className="relative">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl blur-sm opacity-50"></div>
                                        <div className="relative h-full bg-slate-900/70 p-6 rounded-xl flex flex-col justify-center items-center">
                                            {renderFeatureIcon(feature.title)}
                                            <h4 className="font-bold text-2xl text-white">{feature.title}</h4>
                                            <p className="text-sm text-white mt-1">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <section className="relative py-20 lg:py-19 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/about.mp4" />
                    <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                </div>
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{courseData.whyStandOutTitle}</h2>
                        <div className="mt-3 w-24 h-1.5 bg-cyan-400 mx-auto rounded-full"></div>
                        <p className="mt-4 max-w-2xl mx-auto text-xl text-white/70">
                            {courseData.whyStandOutSubtitle}
                        </p>
                    </div>
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {courseData.courseFeatures.map((feature, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-75"></div>
                                <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center transition-colors duration-300">
                                    <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                                        <div className="absolute inset-0 bg-slate-800/50 border-2 border-cyan-400/30 rounded-full animate-pulse-slow"></div>
                                        <div className="relative w-28 h-28 bg-[#0b2741] border-2 border-white/10 rounded-full flex items-center justify-center text-cyan-400">
                                            {feature.icon}
                                            <span className="absolute -top-1 -right-1 bg-cyan-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-[#0b2741]">
                                                0{index + 1}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold mt-6 mb-2">{feature.title}</h3>
                                    <p className="text-white/70 max-w-xs flex-grow mb-4">{feature.description}</p>
                                    <p className="text-center font-semibold text-cyan-300">{feature.tag}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="course-details" className="relative py-10 lg:py-19 overflow-hidden text-white">
                <div className="absolute inset-0 z-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-50" src="/cad.mp4" />
                    <div className="absolute inset-0 bg-[#0b2741]/95"></div>
                </div>
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                    <h2 className="text-5xl font-bold text-cyan-400 mb-8 text-left">Course Details</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h3 className="text-3xl font-semibold mb-4">Program Overview</h3>
                                <p className="text-white/80 text-lg leading-relaxed">{courseData.programOverview}</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-semibold mb-6">What You'll Learn</h3>
                                <div className="space-y-4">
                                    {courseData.whatYouWillLearn.map((item, index) => (
                                        <div key={index} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                                            <p>
                                                <strong className="text-white text-lg">{item.title}</strong>
                                                <span className="text-white/80 text-lg"> – {item.description}</span>
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-75"></div>
                                <div className="relative p-6 rounded-lg bg-gradient-to-r from-cyan-800 to-[#0b2741]">
                                    <h3 className="text-xl font-bold mb-6">Course Information</h3>
                                    <div className="space-y-5">
                                        <div className="flex items-start"><img src="/clock.png" alt="Duration" className="w-5 h-5 mt-1 mr-3 flex-shrink-0 animate-breathing" /><div><strong>Duration:</strong><p className="text-white/80" dangerouslySetInnerHTML={{ __html: courseData.courseInfo.duration }}></p></div></div>
                                        <div className="flex items-start"><img src="/cal.png" alt="Next Batch" className="w-5 h-5 mt-1 mr-3 flex-shrink-0 animate-breathing" /><div><strong>Next Batch Starts:</strong><p className="text-white/80">{courseData.courseInfo.nextBatch}</p></div></div>
                                        <div className="flex items-start"><img src="/pc.png" alt="Delivery Mode" className="w-5 h-5 mt-1 mr-3 flex-shrink-0 animate-breathing" /><div><strong>Delivery Mode:</strong><p className="text-white/80">{courseData.courseInfo.deliveryMode}</p></div></div>
                                        <div className="flex items-start"><img src="/certi.png" alt="Certification" className="w-5 h-5 mt-1 mr-3 flex-shrink-0 animate-breathing" /><div><strong>Certification:</strong><p className="text-white/80">{courseData.courseInfo.certification}</p></div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-75"></div>
                                <div className="relative p-6 rounded-lg bg-gradient-to-r from-cyan-800 to-[#0b2741]">
                                    <h3 className="text-xl font-bold mb-4">Assessment Methods</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {courseData.assessmentMethods.map((method, index) => (
                                           <span key={index} className="bg-cyan-600 text-white text-sm px-3 py-1 rounded-full">{method}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg blur opacity-75"></div>
                                <div className="relative p-6 rounded-lg bg-gradient-to-r from-cyan-800 to-[#0b2741]">
                                    <h3 className="text-xl font-bold mb-4">Prerequisites</h3>
                                    <div className="space-y-3 text-white/80">
                                        {courseData.prerequisites.map((req, index) => (
                                            <div key={index} className="flex items-start">
                                                {renderPrerequisiteIcon(req.icon)}
                                                <span>{req.text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <Button size="lg" className="w-full bg-[#0050A0] text-white hover:bg-cyan-600 transition-colors flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                DOWNLOAD COURSE BROCHURE
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 w-full px-4 md:px-8">
                <div className="bg-gradient-to-r from-cyan-700 to-[#0b2741] rounded-2xl shadow-2xl p-12 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
                    <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">Enroll today and Master Future-ready AEC skills with Terrene Engineering Skills Training division </p>
                    <div className="flex justify-center items-center gap-4 flex-wrap">
                        <Link to="/contact"><Button size="lg" className="bg-[#0050A0] text-white text-md font-bold w-[35vh] hover:bg-cyan-500 transition-colors px-6">ENROLL NOW <Plus className="w-5 h-5 ml-2" /></Button></Link>
                        <Link to="/contact"><Button size="lg"  className="bg-cyan-500 text-md text-white hover:bg-white/10 transition-colors px-6 w-[35vh]">SPEAK TO AN ADVISOR <Phone className="w-5 h-5 ml-2" /></Button></Link>
                    </div>
                </div>
            </section>

            <section className="relative py-10 lg:py-19 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/sof.mp4" />
                    <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                </div>
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">FREQUENTLY ASKED QUESTIONS</h2>
                        <div className="mt-3 w-24 h-1.5 bg-cyan-400 mx-auto rounded-full"></div>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {courseData.faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="bg-slate-900/50 border-b-0 border border-white/10 rounded-lg overflow-hidden transition-all duration-300 hover:border-white/20">
                                    <AccordionTrigger className="text-left font-semibold text-white px-6 py-4 hover:no-underline hover:bg-white/5 transition-colors">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="px-6 pt-0 pb-4 text-white/70 leading-relaxed">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>
      
            <section className="py-10 lg:py-19 relative text-white">
                <div className="absolute inset-0 z-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/cad.mp4" />
                    <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>
                <div className="w-full px-4 md:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">LEARN THE MOST IN-DEMAND SKILLS</h2>
                        <p className="max-w-3xl mx-auto text-white/80 leading-relaxed">Acquire advanced digital twin skills essential for real-time monitoring and smart engineering solutions</p>
                    </div>
                    <AllCoursesCarousel courses={allCoursesData} />
                    <div className="text-center mt-16">
                        <p className="text-white/80 mb-4">INTERESTED IN MORE COURSES?</p>
                        <Link to="/software-training">
                            <Button size="lg" className="bg-[#0050A0] text-lg text-white font-bold hover:bg-cyan-500/80 transition-transform hover:scale-105 px-8 py-3 rounded-full">
                                VIEW ALL TRAINING PROGRAMS 
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
      
            <ContactFormSection subtitle={courseData.contactFormSubtitle} />

            <Footer />
            <style>{`
                ${phoneInputCustomStyles}
                @keyframes pulse-slow { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.05); opacity: 0.8; } }
                .animate-pulse-slow { animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
                @keyframes breathing { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
                .animate-breathing { animation: breathing 2.5s ease-in-out infinite; }
            `}</style>
        </div>
    );
};

export default CoursePageLayout;