import React, { useEffect, useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// --- HELPER COMPONENT FOR DYNAMIC ICONS ---
type IconName = keyof typeof Icons;
const Icon = ({ name, ...props }: { name: IconName } & Icons.LucideProps) => {
  const LucideIcon = Icons[name] as React.ComponentType<Icons.LucideProps>;
  return LucideIcon ? <LucideIcon {...props} /> : <Icons.HelpCircle {...props} />;
};

// --- TYPE DEFINITIONS for the pageData prop ---
export interface PageData {
  hero: {
    serviceName: string;
    tagline: string;
    description: string;
    backgroundImage: string;
    uspItems: { icon: IconName; title: string; description: string; }[];
  };
  scope: {
    title: string;
    description: string;
    scopeItems: { icon: IconName; title: string; description: string; }[];
    imageKey: string;
  };
  workingSteps: {
    superTitle: string;
    title: string;
    steps: { icon: IconName; title: string; description: string; }[];
    backgroundImage: string;
  };
  projects: {
    title: string;
    videoBackground: string;
    projectList: { id: number; title: string; imageKey: string; }[];
  };
  cta: {
    title: string;
    description: string;
  };
  testimonials: {
    title: string;
    testimonialList: { quote: string; name: string; role: string; rating: number; image: string; }[];
    summary: { count: string; label: string; };
    featuredImageKey: string;
    videoBackground: string;
  };
  contact: {
    title: string;
    description: string;
    phoneNumbers: string[];
    emails: string[];
    videoBackground: string;
  };
}

interface SubServicePageLayoutProps {
  pageData: PageData;
  imageAssets: { [key: string]: string };
}

// --- MAIN LAYOUT COMPONENT ---
const SubServicePageLayout: React.FC<SubServicePageLayoutProps> = ({ pageData, imageAssets }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const lastScrollY = useRef(0);
  const [phone, setPhone] = useState('');

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const transitionTime = 700;

  const phoneInputCustomStyles = `/* PhoneInput styles */ .custom-phone-input.react-tel-input .form-control { background-color: #1e293b !important; border: 1px solid rgba(255, 255, 255, 0.2) !important; color: white !important; width: 100% !important; padding-top: 0.75rem !important; padding-bottom: 0.75rem !important; line-height: 1.5rem !important; height: auto !important; } .custom-phone-input.react-tel-input .flag-dropdown { background-color: #1e293b !important; border: 1px solid rgba(255, 255, 255, 0.2) !important; border-right: none !important; } .custom-phone-input.react-tel-input .flag-dropdown:hover, .custom-phone-input.react-tel-input .flag-dropdown.open { background-color: #0e7490 !important; } .custom-phone-input.react-tel-input .country-list { background-color: #0f172a !important; border: 1px solid rgba(255, 255, 255, 0.2) !important; } .custom-phone-input.react-tel-input .country-list .country:hover, .custom-phone-input.react-tel-input .country-list .country.highlight { background-color: #0e7490 !important; color: white !important; } .custom-phone-input.react-tel-input .country-list .search-box { background-color: #1e293b !important; color: white !important; border-color: rgba(255, 255, 255, 0.2) !important; }`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY.current || window.scrollY < 100);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setActiveTestimonialIndex(prev => (prev + 1) % pageData.testimonials.testimonialList.length);
    }, 5000);
    return () => clearInterval(testimonialInterval);
  }, [pageData.testimonials.testimonialList.length]);
  
    useEffect(() => {
        const handleResize = () => {
            const newItemsToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
            setItemsToShow(newItemsToShow);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const extendedProjects = [...pageData.projects.projectList, ...pageData.projects.projectList.slice(0, itemsToShow)];

    const nextSlide = () => {
        if (carouselRef.current && carouselRef.current.style.transition.includes('none')) return;
        
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        
        if (newIndex >= pageData.projects.projectList.length) {
            setTimeout(() => {
                if (carouselRef.current) {
                    carouselRef.current.style.transition = 'none';
                    setCurrentIndex(0);
                    setTimeout(() => {
                        if (carouselRef.current) carouselRef.current.style.transition = `transform ${transitionTime}ms ease-in-out`;
                    }, 50);
                }
            }, transitionTime);
        }
    };

    useEffect(() => {
        if (!isHovering) {
            timerRef.current = setInterval(nextSlide, 3000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isHovering, currentIndex, itemsToShow]);

  return (
    <div className="bg-[#0b2741]">
      <div className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}><Header /></div>
      
      {/* --- Hero Section --- */}
      <main className="relative min-h-screen flex items-center text-white" style={{ backgroundImage: `url('${pageData.hero.backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-black/80 z-10"></div>
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="text-center lg:text-left">
                    {/* RESPONSIVE UPDATE: Added xl:text-7xl for larger screens */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mt-[15vh]" dangerouslySetInnerHTML={{ __html: pageData.hero.serviceName }}></h1>
                    {/* RESPONSIVE UPDATE: Removed max-w-xl to allow text to flow */}
                    <p className="mt-6 text-lg md:text-xl text-cyan-300 mx-auto lg:mx-0">{pageData.hero.tagline}</p>
                    {/* RESPONSIVE UPDATE: Removed max-w-xl to allow text to flow */}
                    <p className="mt-4 text-lg md:text-xl text-white mx-auto lg:mx-0">{pageData.hero.description}</p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#contact-section"><Button size="lg" className="bg-[#0050A0] w-full sm:w-auto text-white hover:bg-cyan-500 px-8 py-3 text-lg rounded-md transition-transform hover:scale-105">BOOK THIS SERVICE <Icons.ArrowRight className="w-5 h-5 ml-2" /></Button></a>
                        <a href="#project-scope"><Button size="lg" className="text-white bg-cyan-500 hover:bg-white/40 w-full sm:w-auto px-8 py-3 text-lg rounded-md">MORE DETAILS <Icons.ChevronsDown className="w-10 h-10 ml-1"/></Button></a>
                    </div>
                </div>
                {/* RESPONSIVE UPDATE: Corrected width class by removing w-[100vh] */}
                <div className="p-8 md:p-10 rounded-lg border border-white/20 w-full w-[100vh] shadow-2xl bg-slate-900/50 backdrop-blur-md mt-[15vh]">
                    <h3 className="text-white font-bold text-2xl mb-8 text-center">Why Choose Us</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-center max-w-3xl mx-auto">
                        {pageData.hero.uspItems.map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <Icon name={item.icon} size={32} className="text-cyan-400" />
                                <h4 className="font-bold text-xl text-white mt-3">{item.title}</h4>
                                <p className="text-sm text-white/70 mt-1">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </main>
      
      {/* --- Scope Section --- */}
      <section id="project-scope" className="relative py-10 lg:py-19 text-white overflow-hidden">
        <div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-[#0b2741]/95"></div><div className="absolute inset-0 bg-black/30"></div></div>
        <div className="w-full px-4 md:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div>
                    <h2 className="text-4xl font-bold tracking-tight text-cyan-400 sm:text-5xl">{pageData.scope.title}</h2>
                    <p className="mt-4 text-lg text-white/70">{pageData.scope.description}</p>
                    <div className="mt-8 space-y-4">
                        {pageData.scope.scopeItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-800 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                                <div className="relative bg-slate-900/80 border border-white/10 rounded-xl p-4 flex items-start space-x-4 transition-all duration-300 group-hover:border-cyan-400/50 group-hover:bg-slate-900">
                                    <Icon name={item.icon} className="w-8 h-8 text-cyan-500 mr-2 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-lg text-white">{item.title}</h4>
                                        <p className="text-white/80">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <img src={imageAssets[pageData.scope.imageKey]} alt="Project Scope" className="rounded-2xl shadow-2xl shadow-cyan-500/20 w-full h-auto max-h-[110vh] object-cover" />
                </div>
            </div>
        </div>
      </section>
      
      {/* --- Working Steps Section --- */}
      <section className="relative py-16 md:py-19 text-white" style={{backgroundImage: `url('${pageData.workingSteps.backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-[#0b2741]/95 z-0"></div>
            <div className="relative z-10 w-full px-4 md:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">{pageData.workingSteps.superTitle}</p>
                    <h2 className="text-4xl md:text-5xl font-bold">{pageData.workingSteps.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pageData.workingSteps.steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-75"></div>
                            <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center transition-colors duration-300">
                                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                                    <div className="absolute inset-0 bg-slate-800/50 border-2 border-cyan-400/30 rounded-full animate-pulse-slow"></div>
                                    <div className="relative w-28 h-28 bg-[#0b2741] border-2 border-white/10 rounded-full flex items-center justify-center text-cyan-400">
                                        <Icon name={step.icon} size={40} />
                                        <span className="absolute -top-1 -right-1 bg-cyan-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-[#0b2741]">0{index + 1}</span>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mt-6 mb-2">{step.title}</h3>
                                <p className="text-white/70 max-w-xs flex-grow">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      
      {/* --- Projects Carousel --- */}
      <section className="relative py-12 lg:py-19 text-white">
          <div className="absolute inset-0 z-0"><video autoPlay loop muted playsInline className="w-full h-full object-cover" src={pageData.projects.videoBackground} /><div className="absolute inset-0 bg-[#0b2741]/95"></div></div>
          <div className="relative z-10 w-full px-4 md:px-8">
              <div className="flex justify-between items-start gap-8 mb-12"><div className="flex-1"><h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{pageData.projects.title}</h2></div></div>
              <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                  <div className="overflow-hidden">
                      <div ref={carouselRef} className="flex" style={{ transition: `transform ${transitionTime}ms ease-in-out`, transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
                          {extendedProjects.map((project, index) => (
                             <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsToShow}%` }}>
                                <div className="relative rounded-2xl overflow-hidden group">
                                    <img src={imageAssets[project.imageKey]} alt={project.title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                                    <div className="absolute inset-0 bg-cyan-600/70 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110 group-hover:scale-100">
                                        <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                                        <Link to={`/completed-projects#project-${project.id}`}><Button variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-600 rounded-full">Read More <Icons.ArrowRight className="w-4 h-4 ml-2" /></Button></Link>
                                    </div>
                                </div>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* --- CTA Section --- */}
      <section className="py-16 w-full px-4 md:px-8">
            <div className="bg-gradient-to-r from-cyan-700 to-[#0b2741] rounded-2xl shadow-2xl p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{pageData.cta.title}</h2>
                <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">{pageData.cta.description}</p>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <a href="#contact-section"><Button size="lg" className="bg-[#0050A0] text-white font-bold hover:bg-cyan-500 transition-colors px-6">SCHEDULE A CONSULTATION</Button></a>
                    <Link to="/completed-projects"><Button size="lg"  className="bg-cyan-500 text-white hover:bg-white/10 transition-colors px-6 w-full sm:w-auto">VIEW PORTFOLIO</Button></Link>
                </div>
            </div>
        </section>

      {/* --- Testimonials Section --- */}
      <section className="relative py-16 md:py-24 overflow-hidden">
             <div className="absolute inset-0 z-0"><video autoPlay loop muted playsInline className="w-full h-full object-cover" src={pageData.testimonials.videoBackground} /><div className="absolute inset-0 bg-[#0b2741]/90"></div></div>
            <div className="relative z-10 w-full px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:pr-12">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div><span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">TESTIMONIALS</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">{pageData.testimonials.title}</h2>
                        <div className="relative h-64 overflow-hidden">
                            {pageData.testimonials.testimonialList.map((testimonial, index) => (
                                <div key={index} className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === activeTestimonialIndex ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                        <div className="flex gap-1"> {[...Array(5)].map((_, i) => (<Icons.Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />))} </div>
                                        <p className="text-white/80 italic my-4">"{testimonial.quote}"</p>
                                        <div><p className="font-bold text-white">{testimonial.name}</p><p className="text-sm text-white/60">{testimonial.role}</p></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex -space-x-4"> {pageData.testimonials.testimonialList.map((t, i) => (<img key={i} src={t.image} alt={t.name} className="w-12 h-12 rounded-full border-2 border-[#0b2741]" />))} </div>
                            <div><p className="font-bold text-xl text-white">{pageData.testimonials.summary.count}</p><p className="text-sm text-white/70">{pageData.testimonials.summary.label}</p></div>
                        </div>
                    </div>
                    <div className="hidden lg:block"><img src={imageAssets[pageData.testimonials.featuredImageKey]} alt="Testimonial" className="rounded-2xl shadow-2xl w-full h-auto object-cover" /></div>
                </div>
            </div>
        </section>

      {/* --- Contact Form Section --- */}
      <section id="contact-section" className="relative py-12 lg:py-19 text-white">
          <div className="absolute inset-0 z-0"><video autoPlay loop muted playsInline className="w-full h-full object-cover" src={pageData.contact.videoBackground} /><div className="absolute inset-0 bg-[#0b2741]/95"></div></div>
          <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-white">{pageData.contact.title}</h2>
                  <p className="mt-2 text-lg text-white/70">{pageData.contact.description}</p>
                  <div className="mt-4 w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-2 bg-slate-900 p-8 rounded-lg border border-white/10 shadow-2xl shadow-cyan-500/20">
                      <div className="space-y-8">
                        <h3 className="text-3xl font-bold text-white">Contact Information</h3>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/10"><Icons.Phone className="w-6 h-6 text-cyan-400" /></div>
                            <div><h4 className="font-bold">Call Us</h4>{pageData.contact.phoneNumbers.map(p => <p key={p} className="text-white/70">{p}</p>)}</div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/10"><Icons.Mail className="w-6 h-6 text-cyan-400" /></div>
                            <div><h4 className="font-bold">Email Us</h4>{pageData.contact.emails.map(e => <p key={e} className="text-white/70">{e}</p>)}</div>
                        </div>
                      </div>
                  </div>
                  <div className="lg:col-span-3 bg-slate-900 p-8 rounded-lg border border-white/10 shadow-2xl shadow-cyan-500/20">
                       <h3 className="text-3xl font-bold text-white mb-8">Send Us a Message</h3>
                       <form onSubmit={(e) => e.preventDefault()}>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                              <div><label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Your Name</label><input type="text" id="name" required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400" /></div>
                              <div><label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label><input type="email" id="email" required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400" /></div>
                               <div className="sm:col-span-2"><label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Phone Number</label><PhoneInput country={'lk'} value={phone} onChange={setPhone} containerClass="w-full custom-phone-input" /></div>
                               <div className="sm:col-span-2"><label htmlFor="service" className="block text-sm font-medium text-white/80 mb-1">Service of Interest</label><input type="text" id="service" value={pageData.hero.serviceName.replace(/<[^>]*>?/gm, '')} readOnly className="w-full p-3 bg-slate-700 border border-white/20 rounded-md cursor-not-allowed text-white/80" /></div>
                              <div className="sm:col-span-2"><label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Your Message</label><textarea id="message" rows={5} required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400"></textarea></div>
                          </div>
                          <Button type="submit" size="lg" className="w-full mt-6 bg-[#0050A0] text-white font-bold hover:bg-cyan-500 transition-colors">SEND MESSAGE</Button>
                       </form>
                  </div>
              </div>
          </div>
      </section>

      <Footer />
       <style>{`
          ${phoneInputCustomStyles}
          @keyframes pulse-slow { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.05); opacity: 0.8; } }
          .animate-pulse-slow { animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        `}</style>
    </div>
  );
};

export default SubServicePageLayout;