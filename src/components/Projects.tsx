import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, CircleChevronLeft, CircleChevronRight } from 'lucide-react';
import { projectImages } from '../assert/projects'; // Using the centralized image index

// --- New project data from CompletedProjects.tsx ---
const initialProjects = [
    {
        index: 1,
        title: "Sustainable Innovation Center",
        category: "Sustainable Commercial Facility",
        image: projectImages[0],
        location: "Eco Park, Australia",
        year: "2024"
    },
    {
        index: 2,
        title: "Floating Glass Pavilion",
        category: "Luxury Floating Residence",
        image: projectImages[4],
        location: "Lake Wakatipu, New Zealand",
        year: "2023"
    },
    {
        index: 3,
        title: "Minimalist Urban Residence",
        category: "Luxury Urban Residence",
        image: projectImages[8],
        location: "Orchard Road, Singapore",
        year: "2023"
    },
    {
        index: 4,
        title: "Solar Green Tower",
        category: "Sustainable Residential Tower",
        image: projectImages[12],
        location: "Melbourne, Australia",
        year: "2024"
    },
    {
        index: 5,
        title: "Modern Minimalist Residence",
        category: "Luxury Residential",
        image: projectImages[16],
        location: "Colombo, Sri Lanka",
        year: "2024"
    },
    {
        index: 6,
        title: "Hillside Eco Retreat",
        category: "Luxury Eco-Residential",
        image: projectImages[20],
        location: "Queenstown, New Zealand",
        year: "2023"
    },
    {
        index: 7,
        title: "Luxury Poolside Villa",
        category: "Luxury Residential Villa",
        image: projectImages[24],
        location: "Dubai, UAE",
        year: "2023"
    },
    {
        index: 8,
        title: "Highrise Luxury Residence – Oman",
        category: "Luxury Residential Tower",
        image: projectImages[28],
        location: "Muscat, Oman",
        year: "2024"
    },
    {
        index: 9,
        title: "Futuristic Cricket & Events Stadium – Dubai",
        category: "Multi-Purpose Sports Stadium",
        image: projectImages[32],
        location: "Dubai, UAE",
        year: "2024"
    },
    {
        index: 10,
        title: "Contemporary Corporate Office – Saudi Arabia",
        category: "Corporate Office Building",
        image: projectImages[36],
        location: "Riyadh, Saudi Arabia",
        year: "2018"
    },
];

const SWIPE_THRESHOLD = 50; // Minimum pixels for a swipe to register

function preloadImages(projects: typeof initialProjects) {
    projects.forEach((p) => {
        const img = new window.Image();
        img.src = p.image;
    });
}

const Projects = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isJumping, setIsJumping] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [cardDimensions, setCardDimensions] = useState({ width: 0, gap: 0 });
    const [dragOffset, setDragOffset] = useState(0);
    const touchStartX = useRef(0);
    const [isMobile, setIsMobile] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    useEffect(() => preloadImages(initialProjects), []);

    useEffect(() => {
        const calculateDimensions = () => {
            if (carouselRef.current && carouselRef.current.children.length > 0) {
                const cardNode = carouselRef.current.children[0] as HTMLElement;
                const style = window.getComputedStyle(carouselRef.current);
                const gap = parseFloat(style.gap) || 0;
                const width = cardNode.offsetWidth;
                setCardDimensions({ width, gap });
            }
        };
        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);
        return () => window.removeEventListener('resize', calculateDimensions);
    }, []);

    const handleNext = () => setCurrentIndex(prev => prev + 1);
    const handlePrev = () => setCurrentIndex(prev => prev - 1);

    // --- NEW EVENT HANDLER FUNCTIONS ---
    // These functions stop the click/touch event from propagating to the swipe container
    const handleNextClick = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        handleNext();
    };

    const handlePrevClick = (e: React.MouseEvent | React.TouchEvent) => {
        e.stopPropagation();
        handlePrev();
    };


    useEffect(() => {
        if (isPaused || isDragging || cardDimensions.width === 0) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            return;
        }
        intervalRef.current = setInterval(handleNext, 4000);
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isPaused, isDragging, currentIndex, cardDimensions]);

    const visibleCount = isMobile ? 1 : 4;

    useEffect(() => {
        if (currentIndex >= initialProjects.length || currentIndex < 0) {
            const timer = setTimeout(() => {
                setIsJumping(true);
                const newIndex = currentIndex < 0 ? initialProjects.length - 1 : 0;
                setCurrentIndex(newIndex);
            }, 500);
            return () => clearTimeout(timer);
        } else if (isJumping) {
            const timer = setTimeout(() => setIsJumping(false), 50);
            return () => clearTimeout(timer);
        }
    }, [currentIndex, isJumping]);

    const extendedProjects = [
        ...initialProjects.slice(-visibleCount),
        ...initialProjects,
        ...initialProjects.slice(0, visibleCount),
    ];

    const getTransform = () => {
        if (cardDimensions.width === 0) return 'translateX(0px)';
        const baseTransform = (currentIndex + visibleCount) * (cardDimensions.width + cardDimensions.gap);
        return `translateX(-${baseTransform - dragOffset}px)`;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        setDragOffset(touchStartX.current - currentX);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        if (Math.abs(dragOffset) > SWIPE_THRESHOLD) {
            if (dragOffset > 0) handleNext();
            else handlePrev();
        }
        setDragOffset(0);
    };

    const getCardWidthClass = () => "w-[240px] sm:w-[260px] md:w-[260px] lg:w-[280px] xl:w-[300px]";
    const viewportWidth = (visibleCount * cardDimensions.width) + ((visibleCount - 1) * cardDimensions.gap);

    const buttonBaseStyle: React.CSSProperties = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '9999px',
        cursor: 'pointer',
        width: isMobile ? '48px' : '80px',
        height: isMobile ? '48px' : '80px',
    };

    const leftButtonStyle: React.CSSProperties = { ...buttonBaseStyle, left: '0px' };
    const rightButtonStyle: React.CSSProperties = { ...buttonBaseStyle, right: '0px' };

    return (
        <section id="projects" className="py-5 md:py-12 w-full relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/pro.mp4" />
                <div className="absolute inset-0 bg-[#0b2741]/90 z-10 pointer-events-none"></div>
            </div>
            <div className="w-full max-w-[2400px] mx-auto px-0 md:px-4 lg:px-6 relative z-20 mt-[-3vh]">
                <div className="relative z-20 p-2 sm:p-4 md:p-6">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-12 px-2 sm:px-0">
                        <div>
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">Featured Projects</h2>
                            <div className="relative h-1.5 w-20 bg-gradient-to-r from-primary to-primary/30 rounded-full mb-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/30 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative">
  {/* --- Carousel Mask --- */}
  <div
    className="mx-auto overflow-hidden"
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    style={{ 
      width: viewportWidth > 0 ? `${viewportWidth}px` : '100%',
      maxWidth: '100%',
      position: 'relative',
      zIndex: 1
    }}
  >
    <div
      ref={carouselRef}
      className="flex gap-5 will-change-transform"
      style={{
        transform: getTransform(),
        transition: isJumping || isDragging ? 'none' : 'transform 0.5s ease-in-out'
      }}
    >
      {extendedProjects.map((project, idx) => (
        <Card
          key={`${project.index}-${idx}`}
          className={`${getCardWidthClass()} flex-none group overflow-hidden bg-background/90 backdrop-blur-md border border-white/20 select-none p-0 shadow-xl`}
        >
          <div className="relative overflow-hidden aspect-[3/4]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-primary/90 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium shadow-lg border border-white/20">
                {project.category}
              </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 line-clamp-2">
                {project.title}
              </h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/80 truncate mr-2">{project.location}</span>
                <span className="text-xs font-medium text-primary bg-primary/20 px-2 py-1 rounded">
                  {project.year}
                </span>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>

  {/* --- Buttons OUTSIDE the overflow-hidden div --- */}
  <button
    onClick={handlePrevClick}
    onTouchStart={handlePrevClick}
    style={leftButtonStyle}
    className="transition-transform duration-200 hover:scale-110"
  >
    <CircleChevronLeft className="w-10 h-10 sm:w-16 sm:h-16 text-white/40 hover:text-cyan-500" />
  </button>

  <button
    onClick={handleNextClick}
    onTouchStart={handleNextClick}
    style={rightButtonStyle}
    className="transition-transform duration-200 hover:scale-110"
  >
    <CircleChevronRight className="w-10 h-10 sm:w-16 sm:h-16 text-white/40 hover:text-cyan-500" />
  </button>
</div>


                    <div className="mt-12 text-center">
                        <Button
                            variant="outline"
                            onClick={() => navigate("/completed-projects")}
                            className="bg-[#0050A0] border-none border-2 text-white hover:bg-[#00A5E7]/90 hover:border-white px-8 py-3 font-semibold rounded-lg shadow-lg text-lg"
                        >
                            VIEW ALL PROJECTS <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;