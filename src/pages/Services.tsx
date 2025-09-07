import React, { useState, useEffect, ReactElement, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { 
  Layers, Zap, PenTool, Building, CheckCircle, DollarSign, Clock, ChevronLeft, 
  ChevronRight, Quote, MessageSquare, Edit3, Home, Palette, Bot, 
  Wrench, Truck, Package, Tv, ArrowRight, X, Briefcase, SlidersHorizontal,
  Globe, ShieldCheck, Search, Map, FileText, Beaker, UserCheck, Star, Plus, Minus, User, Calendar,
  CircleChevronLeft, CircleChevronRight // --- ICONS ADDED ---
} from 'lucide-react';

// --- Blog Post Images (using paths from blog.jsx) ---
import blogImage1 from "../assert/blog/blog1.jpg";
import blogImage2 from "../assert/blog/blog2.jpg";
import blogImage3 from "../assert/blog/blog3.jpg";

// --- New, Comprehensive Services Data ---
const allServicesData = [
  {
    title: "Consultancy Services",
    description: "Expert guidance and strategic planning for all phases of your construction and engineering projects.",
    image: "/services/consultancy.jpg",
    slug: "consultancy-services",
    icon: <MessageSquare className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Drawings",
    description: "Precision-drafted architectural, structural, and MEP drawings that form the backbone of your project.",
    image: "/services/architectural.webp",
    slug: "drawings",
    icon: <Edit3 className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Constructions",
    description: "Comprehensive construction services, delivering high-quality buildings on time and within budget.",
    image: "/services/engineering.webp",
    slug: "constructions",
    icon: <Building className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Interior Design",
    description: "Creative and functional interior design solutions that bring your indoor spaces to life.",
    image: "/services/interior-design.jpg",
    slug: "interior-design",
    icon: <Palette className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "BIM",
    description: "Advanced Building Information Modeling to optimize design and improve project collaboration.",
    image: "/services/bim.jpg",
    slug: "bim",
    icon: <Building className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Digital Twin",
    description: "Creating dynamic virtual replicas of physical assets for real-time monitoring, analysis, and simulation.",
    image: "/services/digital-twin.jpg",
    slug: "digital-twin",
    icon: <Layers className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Maintenance",
    description: "Proactive and reactive maintenance services to ensure the longevity and performance of your properties.",
    image: "/services/technical.webp",
    slug: "maintenance",
    icon: <Wrench className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "AI Engineering",
    description: "Integrating Artificial Intelligence to enhance design processes, predictive analysis, and project outcomes.",
    image: "/services/specialized.webp",
    slug: "ai-engineering",
    icon: <Bot className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Furniture Design & Supply",
    description: "Custom furniture design and reliable supply chains to perfectly complement your architectural vision.",
    image: "/services/furniture.jpg",
    slug: "furniture-design-supply",
    icon: <Home className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Material Consultancy",
    description: "Expert advice on selecting the best materials for durability, aesthetics, and cost-effectiveness.",
    image: "/services/material.png",
    slug: "material-consultancy",
    icon: <Package className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Import and Export",
    description: "Streamlined import and export services for construction materials, furniture, and technologies.",
    image: "/services/import-export.jpg",
    slug: "import-export",
    icon: <Truck className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "Software Training",
    description: "Professional training for industry-standard software, empowering your team with essential digital skills.",
    image: "/services/project-management.webp",
    slug: "software-training",
    icon: <Tv className="w-8 h-8 text-cyan-400" />
  },
];


// --- ENHANCED Data for the Testimonials Section ---
const newTestimonialsData = [
    { id: 1, quote: "Terrene Engineering transformed our concept into reality with exceptional attention to detail. Their professionalism is second to none.", name: "Sarah Johnson", position: "Director of Operations", company: "Greenscape Development", image: "https://randomuser.me/api/portraits/women/32.jpg", rating: 5, project: "Modern Infrastructure Bridge" },
    { id: 2, quote: "Working with the Terrene team was refreshing. Their innovative BIM solutions saved us both time and resources, delivering the project ahead of schedule.", name: "Michael Chen", position: "Project Manager", company: "Urban Horizons", image: "https://randomuser.me/api/portraits/men/68.jpg", rating: 5, project: "High-Rise Residential Tower" },
    { id: 3, quote: "The engineering expertise at Terrene is unparalleled. They navigated complex regulatory requirements with ease, ensuring our project's success.", name: "Amira Patel", position: "Chief Sustainability Officer", company: "EcoBuilt Construction", image: "https://randomuser.me/api/portraits/women/45.jpg", rating: 5, project: "Construction Factory Industry" },
    { id: 4, quote: "From initial concept to final implementation, Terrene's attention to detail was impressive. The quality of their work speaks for itself.", name: "Robert Martinez", position: "CEO", company: "Nexus Properties", image: "https://randomuser.me/api/portraits/men/22.jpg", rating: 5, project: "Digital Twin Implementation" },
    { id: 5, quote: "Terrene's commitment to sustainability without compromising on design excellence made them the perfect partner for our eco-resort project.", name: "Emily Tanaka", position: "Development Director", company: "Harmony Resorts", image: "https://randomuser.me/api/portraits/women/59.jpg", rating: 5, project: "Interior Design & Furnishing" }
];

// --- Data for the Latest Projects Section (EXPANDED TO 9 MOCK PROJECTS) ---
const projectsData = [
  { title: 'Construction Factory Industry', category: 'Electrical, Building', image: '/project-1.png', link: '/completed-projects' },
  { title: 'High-Rise Residential Tower', category: 'Structural, BIM', image: '/project-2.jpeg', link: '/completed-projects' },
  { title: 'Modern Infrastructure Bridge', category: 'Civil, Infrastructure', image: '/project-3.jpg', link: '/completed-projects' },
  { title: 'Commercial Office Complex', category: 'BIM, Interior Design', image: '/project-1.png', link: '/completed-projects' },
  { title: 'Luxury Villa Construction', category: 'Structural, Building', image: '/project-2.jpeg', link: '/completed-projects' },
  { title: 'Urban Metro System', category: 'Civil, Infrastructure', image: '/project-3.jpg', link: '/completed-projects' },
  { title: 'Renewable Energy Plant', category: 'Electrical, Industrial', image: '/project-1.png', link: '/completed-projects' },
  { title: 'Coastal Resort Development', category: 'Architectural, Building', image: '/project-2.jpeg', link: '/completed-projects' },
  { title: 'Suspension Bridge Engineering', category: 'Civil, Structural', image: '/project-3.jpg', link: '/completed-projects' },
];

// --- Data for the Completion Stats Section ---
const statsData = [
    { label: 'Happy Clients', value: 2500, suffix: '+' },
    { label: 'Qualified Engineers', value: 180, suffix: '+' },
    { label: 'Years of Experience', value: 20, suffix: '+' },
    { label: 'Countries Served', value: 30, suffix: '+' }
];

// --- Mock Data for FAQ Section ---
const faqData = [
    {
      question: "What is the construction process?",
      answer: "The construction process involves several key stages: initial planning and feasibility study, architectural and engineering design, obtaining permits, procurement of materials and labor, the construction phase itself, rigorous quality control checks, and finally, project completion and handover."
    },
    {
      question: "What types of construction projects do you undertake?",
      answer: "We handle a diverse range of projects including residential buildings (from single-family homes to high-rise apartments), commercial complexes, industrial facilities, and public infrastructure. Our expertise also covers specialized areas like interior design and sustainable construction."
    },
    {
      question: "What sets your construction company apart from others?",
      answer: "Our key differentiators are our commitment to integrating advanced technology like BIM and Digital Twins for superior efficiency, our unwavering focus on quality assurance at every stage, and our client-centric approach that ensures clear communication and on-time project delivery."
    },
    {
      question: "How long does a typical construction project take?",
      answer: "The timeline for a construction project varies significantly based on its scale, complexity, and specific requirements. A small residential home might take a few months, while a large commercial tower can take several years. We provide a detailed project schedule during the planning phase."
    }
];

// --- ✅ MODIFIED: Data for the Latest News Section ---
const latestNewsData = [
    {
      id: 1,
      title: "BIM for Product Manufacturers",
      image: blogImage1,
      description: "Discover how Building Information Modeling (BIM) can revolutionize product manufacturing, offering unprecedented efficiency and data accuracy.",
      author: "Terrene Engineering"
    },
    {
      id: 2,
      title: "Why It's Time to Develop BIM Content",
      image: blogImage2,
      description: "The digital construction era is here. Learn why developing rich BIM content is no longer an option, but a necessity to stay competitive.",
      author: "Terrene Engineering"
    },
    {
      id: 3,
      title: "How MEP BIM Benefits Contractors",
      image: blogImage3,
      description: "Explore the tangible benefits of MEP BIM services, from improved coordination and clash detection to significant cost and time savings.",
      author: "Terrene Engineering"
    }
];


// --- Reusable Stat Counter Component ---
const StatCounter = ({ value, suffix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = value;
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16.67);
            return () => clearInterval(timer);
        }
    }, [inView, value, duration]);

    return (<span ref={ref} className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">{count}{suffix}</span>);
};

// --- New Completion Stats Section Component ---
const CompletionStats = () => {
    return (
        <section className="py-12 md:py-20 w-full relative">
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/hero.mp4"
                />
                <div className="absolute inset-0 bg-[#0b2741]/90 z-10" />
            </div>
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {statsData.map((stat) => (
                        <div
                            key={stat.label}
                            className="relative rounded-xl shadow-xl overflow-hidden aspect-[4/3] md:aspect-[4/3] backdrop-blur-lg bg-cyan-600/30"
                        >
                            <div className="relative z-20 h-full flex flex-col items-center justify-center space-y-3 p-4">
                                <StatCounter value={stat.value} suffix={stat.suffix} />
                                <div className="h-1 w-12 bg-white/50 rounded-full"></div>
                                <div className="text-white/90 text-xs sm:text-sm uppercase tracking-wider font-medium text-center drop-shadow-lg leading-tight">
                                    {stat.label}
                                </div>
                            </div>
                            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- FAQ Section Component (REDESIGNED) ---
const FaqSection = () => {
    const [openQuestion, setOpenQuestion] = useState<number | null>(0);

    const toggleQuestion = (index: number) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (
        <section className="py-16 md:py-19 relative overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/eng.mp4" />
                <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-full px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                 
                    <h2 className="text-3xl md:text-5xl font-bold mb-12">Answers To Frequently Asked Questions.</h2>
                </div>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="w-full flex justify-between items-center text-left p-6"
                                >
                                    <span className="font-semibold text-lg text-white">{faq.question}</span>
                                    {openQuestion === index ?
                                        <Minus className="w-6 h-6 text-cyan-400 flex-shrink-0" /> :
                                        <Plus className="w-6 h-6 text-white/70 flex-shrink-0" />
                                    }
                                </button>
                                <div
                                    className="transition-all duration-500 ease-in-out"
                                    style={{
                                        maxHeight: openQuestion === index ? '500px' : '0',
                                        opacity: openQuestion === index ? 1 : 0
                                    }}
                                >
                                    <div className="px-6 pb-6 text-white/80 text-left">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* --- VIEW MORE BUTTON ADDED --- */}
                    <div className="text-center mt-12">
                        <Link to="/faq">
                            <Button  className="text-white bg-[#0050A0] hover:bg-white/10 hover:text-white rounded-full px-8 py-3 text-base">
                                VIEW MORE
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Star Rating Component ---
const StarRating = ({ rating = 5, className = '' }) => {
    const totalStars = 5;
    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {[...Array(totalStars)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                />
            ))}
        </div>
    );
};


// --- REDESIGNED Testimonials Section Component ---
const NewTestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const maxIndex = Math.ceil(newTestimonialsData.length / 2) - 1;
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        if (!isHovering) {
            timerRef.current = setInterval(() => {
                setActiveIndex(current => (current < maxIndex ? current + 1 : 0));
            }, 5000);
        }
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [isHovering, maxIndex]);

    const handlePrevious = () => setActiveIndex((current) => (current > 0 ? current - 1 : 0));
    const handleNext = () => setActiveIndex((current) => (current < maxIndex ? current + 1 : maxIndex));

    return (
        <section className="py-8 md:py-10 w-full relative overflow-hidden">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/about.mp4" />
                <div className="absolute inset-0 bg-[#0b2741]/90 z-10" />
            </div>
            <div className="w-full relative z-20 px-4 md:px-8">
                <div className="relative">
                    <div className="rounded-2xl bg-gradient-to-r from-cyan-700/80 to-[#0b2741]/60 shadow-2xl p-6 md:p-10 lg:p-12 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">Client's Trust</h2>
                            <p className="text-white/80 max-w-2xl mx-auto">Our reputation is built on results and reinforced by those who’ve experienced them.</p>
                        </div>
                        <div className="relative flex items-center px-12 md:px-14" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                            <Button variant="outline" size="icon" onClick={handlePrevious} disabled={activeIndex === 0} className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/20 text-white hover:bg-white/30 rounded-full border-none h-10 w-10 md:h-12 md:w-12 transition-opacity disabled:opacity-50">
                                <ChevronLeft className="h-6 w-6" />
                            </Button>
                            <div className="overflow-hidden w-full">
                                <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 50}%)` }}>
                                    {newTestimonialsData.map((testimonial) => (
                                        <div key={testimonial.id} className="w-full md:w-1/2 flex-shrink-0 px-4 mb-8">
                                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 h-full flex flex-col group">
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">{testimonial.project}</span>
                                                    <StarRating rating={testimonial.rating} />
                                                </div>
                                                <div className="relative flex-grow mb-6">
                                                    
                                                    <p className="relative text-white/90 italic text-lg leading-relaxed">"{testimonial.quote}"</p>
                                                </div>
                                                <div className="mt-auto flex items-center gap-4">
                                                    
                                                    <div>
                                                        <h4 className="font-bold text-white">{testimonial.name}</h4>
                                                        <p className="text-sm text-white/70">{testimonial.position}, {testimonial.company}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button variant="outline" size="icon" onClick={handleNext} disabled={activeIndex === maxIndex} className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/20 text-white hover:bg-white/30 rounded-full border-none h-10 w-10 md:h-12 md:w-12 transition-opacity disabled:opacity-50">
                                <ChevronRight className="h-6 w-6" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- ✅ MODIFIED: Latest News Section Component ---
const LatestNewsSection = () => {
    return (
        <section className="py-16 md:py-24 relative overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/pro.mp4" />
                <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-full px-4 md:px-8 relative z-10">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        
                        <h2 className="text-3xl md:text-5xl font-bold">Our Latest News</h2>
                    </div>
                    <Link to="/blog">
                        <Button variant="outline" className="text-white border-white/50 hover:bg-white/10 hover:text-white rounded-full">
                            SEE ALL <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {latestNewsData.map((post) => (
                        <div key={post.id} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-cyan-500/20">
                            <div className="overflow-hidden">
                                <Link to={`/blog?post=${post.id}`}>
                                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                                </Link>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-xs text-white/60 mb-4 space-x-4">
                                    <div className="flex items-center gap-2">
                                        <User className="w-4 h-4" />
                                        <span>{post.author}</span>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 flex-grow">{post.title}</h3>
                                <p className="text-white/80 leading-relaxed text-sm mb-6 line-clamp-3">{post.description}</p>
                                <Link to={`/blog?post=${post.id}`} className="text-cyan-400 font-semibold text-sm mt-auto self-start hover:text-cyan-300 flex items-center group/link">
                                    READ MORE <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- MODIFIED Latest Projects Carousel Component ---
const LatestProjectsSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);
    const [isHovering, setIsHovering] = useState(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef(null);
    const transitionTime = 700; // ms

    useEffect(() => {
        const handleResize = () => {
            const newItemsToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;
            setItemsToShow(prev => {
                if (prev !== newItemsToShow) {
                    setCurrentIndex(0);
                }
                return newItemsToShow;
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const extendedProjects = [...projectsData, ...projectsData.slice(0, itemsToShow)];

    const nextSlide = () => {
        if (carouselRef.current && carouselRef.current.style.transition.includes('none')) return;
        
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        
        if (newIndex >= projectsData.length) {
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
        if (carouselRef.current && carouselRef.current.style.transition.includes('none')) return;

        if (currentIndex === 0) {
            if (carouselRef.current) {
                carouselRef.current.style.transition = 'none';
                const newIndex = projectsData.length;
                carouselRef.current.style.transform = `translateX(-${newIndex * (100 / itemsToShow)}%)`;
                
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

    useEffect(() => {
        if (!isHovering) {
            timerRef.current = setInterval(() => {
                nextSlide();
            }, 5000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isHovering, currentIndex, itemsToShow]);


    return (
        <section className="py-16 md:py-24 relative overflow-hidden text-white">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/eng.mp4" />
                <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-full relative z-10 px-4 md:px-8">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold">Latest Projects</h2>
                    </div>
                    {/* --- OLD ARROWS REMOVED --- */}
                </div>
                <div
                    className="relative"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <div className="overflow-hidden">
                        <div
                            ref={carouselRef}
                            style={{ 
                                display: 'flex',
                                transition: `transform ${transitionTime}ms ease-in-out`,
                                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` 
                            }}
                        >
                            {extendedProjects.map((project, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-4"
                                    style={{ width: `${100 / itemsToShow}%` }}
                                >
                                    <div className="relative rounded-2xl overflow-hidden group h-96">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <h3 className="text-xl font-bold">{project.title}</h3>
                                                    <p className="text-sm text-white/80">{project.category}</p>
                                                </div>
                                                <Link to={project.link} className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-white/30 transition-colors">
                                                    <ArrowRight className="w-6 h-6" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* --- NEW ARROWS ADDED --- */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-8 z-10 transition-transform duration-200 hover:scale-110"
                    >
                        <CircleChevronLeft className="w-16 h-16 text-white/40 hover:text-cyan-500"/>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8 z-10 transition-transform duration-200 hover:scale-110"
                    >
                        <CircleChevronRight className="w-16 h-16 text-white/40 hover:text-cyan-500"/>
                    </button>
                </div>
            </div>
        </section>
    );
};


const Services: React.FC = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    return (
        <>
            <Header mode="transparent" className="fixed top-0 left-0 w-full z-40" />
            <div className="bg-[#0b2741]">
                <section className="relative min-h-screen flex items-center text-white">
                    <div className="absolute inset-0 z-0 overflow-hidden">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/bud.mp4" />
                        <div className="absolute inset-0 bg-[#0b2741]/75"></div>
                    </div>
                    <div className="relative z-10 w-full px-4 md:px-8">
                        <div className="grid grid-cols-1 items-center w-full min-h-screen">
                            <div className="space-y-8 text-center flex flex-col items-center">
                                <h1 className="text-5xl md:text-7xl font-bold leading-tight mt-[10vh]">
                                Building Dreams<br />
                                Crafting Realities
                                </h1>
                                <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
                                We provide end-to-end solutions across the full spectrum of engineering and construction, combining advanced technologies with practical expertise to deliver sustainable projects that stand strong for generations
                                </p>
                                <div>
                                    <Link to="/inquiry">
                                        <Button className="bg-[#0050A0] hover:bg-cyan-400/80 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105 shadow-lg">
                                        INQUIRE NOW →
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative -mt-20 z-20">
                    <div className="w-full px-4 md:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-gradient-to-r from-cyan-900 to-[#0b2741] rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 group border-t-4 border-cyan-500">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-50 transition-colors">
                            <DollarSign className="w-8 h-8 text-gray-600 group-hover:text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Cost-Effective Solutions</h3>
                            <p className="text-gray-300 text-md leading-relaxed">
                            We work closely with you to align engineering solutions with your budget and delivering exceptional value without compromising on quality
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-900 to-[#0b2741] rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 group border-t-4 border-cyan-500">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-50 transition-colors">
                            <CheckCircle className="w-8 h-8 text-gray-600 group-hover:text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Uncompromised Quality Assurance</h3>
                            <p className="text-gray-300 text-md leading-relaxed">
                            From concept to completion, every stage is reviewed by our expert engineers to ensure precision, compliance, and lasting reliability
                            </p>
                        </div>
                        <div className="bg-gradient-to-r from-cyan-900 to-[#0b2741] rounded-2xl p-6 text-center shadow-2xl hover:shadow-3xl transition-all hover:-translate-y-2 group border-t-4 border-cyan-500">
                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                            <Clock className="w-8 h-8 text-gray-600 group-hover:text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">On-Time Project Delivery</h3>
                            <p className="text-gray-300 text-md leading-relaxed">
                            We’re committed to meeting deadlines and and delivering every project on schedule with efficiency, consistency, and professionalism
                            </p>
                        </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-24 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/pro.mp4" />
                        <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="w-full relative z-10 px-4 md:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div>
                                    
                                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">Experienced & Sustainable Engineering Providers </h2>
                                    <p className="text-gray-100 leading-relaxed mb-8">
                                        At the forefront of engineering excellence, Terrene Engineering blends trusted craftsmanship with cutting-edge technology. From BIM and digital twin solutions to             AI-powered smart engineering and sustainable construction practices, we deliver       future-ready projects that exceed expectations and stand the test of time. <br /> Our commitment to quality, innovation, and lifetime reliability ensures lasting value and strong partnerships with every client
                                    </p>
                                </div>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-6 h-6 text-cyan-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Expert Engineers</h3>
                                            <p className="text-gray-100 text-sm">Our certified engineers and specialists bring multi-disciplinary expertise across civil, structural, MEP, interiors, and digital solutions by ensuring precision and innovation in every project</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <CheckCircle className="w-6 h-6 text-cyan-500" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-white mb-2">Certified & Trusted Team</h3>
                                            <p className="text-gray-100 text-sm">With globally recognized certifications, safety standards, and sustainability-driven practices, our team guarantees professionalism, compliance, and enduring quality</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <div className="grid grid-cols-12 gap-4 h-[80vh] w-[150vh] mt-[3vh]">
                                    <div className="col-span-8 relative">
                                        <img src="/prohero.webp" alt="Professional engineers at work" className="w-full h-full object-cover rounded-lg shadow-lg" />
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16 md:py-20 relative overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/cad.mp4" />
                        <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                        <div className="absolute inset-0 bg-black/30"></div>
                    </div>
                    <div className="w-full relative z-10 px-4 md:px-8">
                        <div className="text-center mb-12">
                            
                            <h2 className="text-3xl md:text-6xl font-bold text-white mb-4 mt-[-4vh]">Wide Range Of Our Services</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {allServicesData.map((service, index) => (
                                <div key={index} className="relative rounded-xl text-center shadow-lg group overflow-hidden">
                                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110 blur-[1px]" style={{ backgroundImage: `url(${service.image})` }}></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b2741] via-[#0b2741]/85 to-transparent"></div>
                                    <div className="relative z-10 p-6 flex flex-col h-full min-h-[350px]">
                                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">{service.icon}</div>
                                        <h3 className="text-3xl font-bold text-white mb-3 mt-[5vh]">{service.title}</h3>
                                      
                                        <Link to={`/services/${service.slug}`} className="mt-auto">
                                            <Button variant="ghost" className="text-cyan-300 hover:text-cyan-100 font-semibold">READ MORE →</Button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- NEW CALL TO ACTION SECTION --- */}
                <section className="py-16 w-full px-4 md:px-8">
                    <div className="bg-gradient-to-r from-cyan-700 to-[#0b2741] rounded-2xl shadow-2xl p-12 text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Transform Your Vision?
                        </h2>
                        <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8">
                            Let our architectural consultants help bring your vision to life with innovative design solutions that exceed expectations                         </p>
                        <div className="flex justify-center items-center gap-4 flex-wrap">
                            <Link to="/contact">
                                <Button size="lg" className="bg-[#0050A0] text-white font-bold hover:bg-cyan-500 transition-colors px-6">
                                    SCHEDULE A CONSULTATION
                                </Button>
                            </Link>
                            <Link to="/completed-projects">
                                <Button size="lg"  className="bg-cyan-500 text-white hover:bg-white/10 transition-colors px-6 w-[35vh]">
                                    VIEW PORTFOLIO
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
                
                <LatestProjectsSection />
                <CompletionStats/>
                <FaqSection />
                <NewTestimonialsSection />
                <LatestNewsSection />
                <Footer />
            </div>
        </>
    );
};

export default Services;