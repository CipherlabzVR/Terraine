import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import Header from '@/components/Header'; // Assuming Header is in the same folder
import Footer from '@/components/Footer'; // Assuming Footer is in the same folder

// --- HELPER COMPONENT FOR DYNAMIC ICONS ---
type IconName = keyof typeof Icons;
const Icon = ({ name, ...props }: { name: IconName } & Icons.LucideProps) => {
  const LucideIcon = Icons[name] as React.ComponentType<Icons.LucideProps>;
  if (!LucideIcon) {
    return <Icons.HelpCircle {...props} />;
  }
  return <LucideIcon {...props} />;
};

// --- TYPE DEFINITIONS for the pageData prop ---
// Added 'country' to the testimonial list item type.
export interface PageData {
  hero: { title: string; subtitle: string; description: string; backgroundImage: string; buttons: { text: string; link: string; variant: 'primary' | 'secondary' }[]; };
  about: { title: string; description: string; button: { text: string; link: string }; images: { main: string; secondary: string }; stat: { value: string; label: string; }; videoBackground: string; };
  services: { superTitle: string; title: string; list: { icon: IconName; title: string; description: string }[]; videoBackground: string; };
  workingSteps: { superTitle: string; title: string; steps: { icon: IconName; title: string; description: string }[]; backgroundImage: string; };
  projects: { superTitle: string; title: string; list: { image: string; name: string }[]; videoBackground: string; };
  cta: { title: string; description: string; buttons: { text: string; link: string; variant: 'primary' | 'secondary' }[] };
  testimonials: { superTitle: string; title: string; list: { quote: string; name: string; role: string; country: string; rating: number; image: string }[]; summary: { count: string; label: string }; featuredImage: string; videoBackground: string; };
}

interface GenericPageLayoutProps {
  pageData: PageData;
  imageAssets?: { [key: string]: string };
  videoAssets?: { [key: string]: string };
}

// --- REUSABLE SECTION COMPONENTS ---
const WorkingStepsSection = ({ data }: { data: PageData['workingSteps'] }) => {
    return (
        <section className="relative py-16 md:py-19 text-white" style={{backgroundImage: `url('${data.backgroundImage}')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-[#0b2741]/95 z-0"></div>
            <div className="relative z-10 w-full px-4 md:px-8">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-cyan-400 uppercase tracking-widest mb-2">{data.superTitle}</p>
                    <h2 className="text-4xl md:text-5xl font-bold">{data.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-75"></div>
                            <div className="relative h-full bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center flex flex-col items-center transition-colors duration-300">
                                <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                                    <div className="absolute inset-0 bg-slate-800/50 border-2 border-cyan-400/30 rounded-full animate-pulse-slow"></div>
                                    <div className="relative w-28 h-28 bg-[#0b2741] border-2 border-white/10 rounded-full flex items-center justify-center text-cyan-400">
                                        <Icon name={step.icon} size={40} />
                                        <span className="absolute -top-1 -right-1 bg-cyan-400 text-black w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-[#0b2741]">
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>
                                <h3 className="text-[2.7vh] font-bold mt-6 mb-2">{step.title}</h3>
                                <p className="text-white/70 max-w-xs flex-grow">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = ({ data, featuredImage, videoUrl }: { data: PageData['testimonials'], featuredImage: string, videoUrl: string }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(prevIndex => (prevIndex + 1) % data.list.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [data.list.length]);

    const StarRating = ({ rating }: { rating: number }) => (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Icons.Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
            ))}
        </div>
    );

    return (
        <section className="relative py-16 md:py-19 overflow-hidden">
             <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={videoUrl} />
                <div className="absolute inset-0 bg-[#0b2741]/90"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="lg:pr-12">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">{data.superTitle}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-8">{data.title}</h2>
                        <div className="relative h-72 overflow-hidden"> 
                            {data.list.map((testimonial, index) => (
                                <div key={index} className={`absolute w-full transition-opacity duration-1000 ease-in-out ${index === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                                        <StarRating rating={testimonial.rating} />
                                        <p className="text-white/80 italic my-4 h-28 overflow-y-auto">{testimonial.quote}</p>
                                        <div>
                                            <p className="font-bold text-white">{testimonial.name}</p>
                                            <p className="text-sm text-white/60">{testimonial.role}</p>
                                            {/* --- COUNTRY ADDED HERE --- */}
                                            <p className="text-xs text-cyan-400/80 mt-1">{testimonial.country}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex items-center gap-4">
                            <div className="flex -space-x-4">
                              
                            </div>
                            <div>
                                <p className="font-bold text-xl text-white">{data.summary.count}</p>
                                <p className="text-sm text-white/70">{data.summary.label}</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <img src={featuredImage} alt="Testimonial background" className="rounded-2xl shadow-2xl w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProjectsCarouselSection = ({ data, videoUrl }: { data: PageData['projects'], videoUrl: string }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(4);
    const [isHovering, setIsHovering] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setItemsToShow(1);
            else if (window.innerWidth < 1024) setItemsToShow(2);
            else setItemsToShow(4);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const maxIndex = data.list.length > itemsToShow ? data.list.length - itemsToShow : 0;

    const handleNext = () => setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
    const handlePrev = () => setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));

    useEffect(() => {
        if (!isHovering) {
            timerRef.current = setInterval(handleNext, 3000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isHovering, currentIndex, maxIndex]);

    return (
        <section className="relative py-16 md:py-19 text-white">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={videoUrl} />
                <div className="absolute inset-0 bg-[#0b2741]/90"></div>
            </div>
            <div className="relative z-10 w-full px-4 md:px-8">
                <div className="flex justify-between items-start gap-8 mb-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">{data.superTitle}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight" dangerouslySetInnerHTML={{ __html: data.title.replace('<br/>', ' ') }}></h2>
                    </div>
                </div>

                <div className="relative" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}>
                            {data.list.map((project, index) => (
                               <div key={index} className="flex-shrink-0 px-3" style={{ width: `${100 / itemsToShow}%` }}>
                                    <div className="relative rounded-2xl overflow-hidden group">
                                        <img src={project.image} alt={project.name} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                                        <div className="absolute inset-0 bg-cyan-600/70 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-110 group-hover:scale-100">
                                            <h3 className="text-2xl font-bold text-white mb-4">{project.name}</h3>
                                            <Link to="/completed-projects">
                                                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-cyan-600 rounded-full">
                                                    Read More <Icons.ArrowRight className="w-4 h-4 ml-2" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-8 z-10 transition-transform duration-200 hover:scale-110">
                        <Icons.CircleChevronLeft className="w-16 h-16 text-white/40 hover:text-cyan-500"/>
                    </button>
                    <button onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8 z-10 transition-transform duration-200 hover:scale-110">
                        <Icons.CircleChevronRight className="w-16 h-16 text-white/40 hover:text-cyan-500"/>
                    </button>
                </div>
            </div>
        </section>
    );
};

// --- MAIN LAYOUT COMPONENT ---
const GenericPageLayout: React.FC<GenericPageLayoutProps> = ({ pageData, imageAssets = {}, videoAssets = {} }) => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY.current || window.scrollY < 10);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { hero, about, services, workingSteps, projects, cta, testimonials } = pageData;

  // Resolve image URLs
  const aboutMainUrl = imageAssets[about.images.main] || about.images.main;
  const aboutSecondaryUrl = imageAssets[about.images.secondary] || about.images.secondary;
  const testimonialFeaturedUrl = imageAssets[testimonials.featuredImage] || testimonials.featuredImage;

  // Resolve video URLs
  const aboutVideoUrl = videoAssets[about.videoBackground] || about.videoBackground;
  const servicesVideoUrl = videoAssets[services.videoBackground] || services.videoBackground;
  const projectsVideoUrl = videoAssets[projects.videoBackground] || projects.videoBackground;
  const testimonialsVideoUrl = videoAssets[testimonials.videoBackground] || testimonials.videoBackground;

  return (
    <div className="min-h-screen bg-[#0b2741]">
      <div className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <Header />
      </div>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center animate-zoom-in" style={{ backgroundImage: `url('${hero.backgroundImage}')` }}></div>
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
            <h1 className="text-5xl md:text-8xl font-bold leading-tight mt-[10vh]">{hero.title}</h1>
            <p className="mt-6 text-xl text-cyan-300 max-w-5xl">{hero.subtitle}</p>
            <p className="mt-6 text-xl text-white max-w-4xl">{hero.description}</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                {hero.buttons.map((button, index) => (
                    <Link to={button.link} key={index}>
                        <Button className={`${button.variant === 'primary' ? 'bg-[#0050A0] text-white hover:bg-cyan-400' : 'text-white bg-cyan-500 hover:bg-white/30'} font-semibold px-8 py-3 rounded-md`}>
                            {button.text} {button.variant === 'secondary' && <Icons.ChevronsDown size={16} className="ml-2" />}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us-section" className="relative py-16 md:py-19 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={aboutVideoUrl} />
          <div className="absolute inset-0 bg-[#0b2741]/90"></div>
        </div>
        <div className="relative z-10 w-full px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pr-12">
              <h2 className="text-4xl md:text-[6vh] max-w-6xl font-bold text-white leading-tight mb-8">
                We Provide <span className="italic text-cyan-500">Unique</span> {about.title}
              </h2>
              <p className="text-gray-300 text-xl leading-relaxed mb-[7vh] mt-10 max-w-xl">{about.description}</p>
              <div className="inline-block">
                <Link to={about.button.link}>
                  <button className="bg-[#0050A0] text-white font-semibold px-8 py-3 hover:bg-cyan-500 hover:text-white transition-colors duration-300">{about.button.text}</button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 relative">
                <div className="col-span-2 h-64 rounded-2xl overflow-hidden shadow-xl border border-white/10">
                  <img src={aboutMainUrl} alt="Main about" className="w-full h-full object-cover"/>
                </div>
                <div className="h-40 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                  <img src={aboutSecondaryUrl} alt="Secondary about" className="w-full h-full object-cover"/>
                </div>
                <div className="h-40 rounded-2xl overflow-hidden shadow-lg bg-slate-900/70 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <div className="text-2xl font-bold mb-1">{about.stat.value}</div>
                    <div className="text-sm" dangerouslySetInnerHTML={{ __html: about.stat.label }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
       {/* Services Section */}
      <section className="relative py-16 md:py-19">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" src={servicesVideoUrl}/>
          <div className="absolute inset-0 bg-[#0b2741]/90"></div>
        </div>
        <div className="relative z-10 w-full px-4 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
                <span className="text-lg font-semibold text-cyan-400 uppercase tracking-wider">{services.superTitle}</span>
                <div className="w-12 h-1 bg-cyan-400 rounded-full"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">{services.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.list.map((service, index) => (
                  <div key={index}>
                      <div className="bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-xl p-6 h-full flex flex-col group hover:border-cyan-400/50 transition-colors duration-300">
                          <div className="flex justify-between items-start mb-4">
                              <div className="text-cyan-400"><Icon name={service.icon} size={40} /></div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-5">{service.title}</h3>
                          <p className="text-gray-300 text-md leading-relaxed mb-4 flex-grow">{service.description}</p>
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </section>

      <WorkingStepsSection data={workingSteps} />
      <ProjectsCarouselSection data={projects} videoUrl={projectsVideoUrl} />
      
      {/* Call to Action Section */}
      <section className="py-16 w-full px-4 md:px-8">
         <div className="bg-gradient-to-r from-cyan-700 to-[#0b2741] rounded-2xl shadow-2xl p-12 text-center text-white">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">{cta.title}</h2>
             <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">{cta.description}</p>
             <div className="flex justify-center items-center gap-4 flex-wrap">
                {cta.buttons.map((button, index) => (
                    <Link to={button.link} key={index}>
                        <Button size="lg" className={`${button.variant === 'primary' ? 'bg-[#0050A0] text-white hover:bg-cyan-500' : 'bg-cyan-500 text-white hover:bg-white/10'} font-bold transition-colors px-6`}>
                            {button.text}
                        </Button>
                    </Link>
                ))}
             </div>
         </div>
      </section>
      
      <TestimonialsSection data={testimonials} featuredImage={testimonialFeaturedUrl} videoUrl={testimonialsVideoUrl} />
      <Footer />
       <style>{`
          @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
          .animate-spin-slow { animation: spin 20s linear infinite; }
          @keyframes pulse-slow { 0%, 100% { transform: scale(1); opacity: 0.5; } 50% { transform: scale(1.05); opacity: 0.8; } }
          .animate-pulse-slow { animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
          @keyframes zoom-in { from { transform: scale(1); } to { transform: scale(1.1); } }
          .animate-zoom-in { animation: zoom-in 20s ease-out infinite alternate; }
        `}</style>
    </div>
  );
};

export default GenericPageLayout;