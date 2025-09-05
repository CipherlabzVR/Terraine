import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SPACING_CLASSES } from '@/lib/spacing';
import client from '../assert/client.jpg';

const testimonials = [
    {
        id: 1,
        quote: "Terrene Engineering transformed our concept into reality with exceptional attention to detail. Their sustainable approach to design didn't just meet our expectations—it exceeded them.",
        name: "Sarah Johnson",
        position: "Director of Operations",
        company: "Greenscape Development",
        image: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5
    },
    {
        id: 2,
        quote: "Working with the Terrene team was refreshing. Their innovative solutions saved us both time and resources while delivering a structure that perfectly balances form and function.",
        name: "Michael Chen",
        position: "Project Manager",
        company: "Urban Horizons",
        image: "https://randomuser.me/api/portraits/men/68.jpg",
        rating: 5
    },
    {
        id: 3,
        quote: "The engineering expertise at Terrene is unparalleled. They navigated complex regulatory requirements with ease and delivered a sustainable design that has become a benchmark in our industry.",
        name: "Amira Patel",
        position: "Chief Sustainability Officer",
        company: "EcoBuilt Construction",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 5
    },
    {
        id: 4,
        quote: "From initial concept to final implementation, Terrene's attention to detail was impressive. Their team understood our vision and translated it into a magnificent structure that exceeded our expectations.",
        name: "Robert Martinez",
        position: "CEO",
        company: "Nexus Properties",
        image: "https://randomuser.me/api/portraits/men/22.jpg",
        rating: 5
    },
    {
        id: 5,
        quote: "Terrene Engineering's commitment to sustainability without compromising on design excellence made them the perfect partner for our eco-resort project. The results speak for themselves.",
        name: "Emily Tanaka",
        position: "Development Director",
        company: "Harmony Resorts",
        image: "https://randomuser.me/api/portraits/women/59.jpg",
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const maxIndex = Math.ceil(testimonials.length / 2) - 1;
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Auto scroll functionality
    useEffect(() => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        
        if (!isHovering) {
            timerRef.current = setInterval(() => {
                setActiveIndex(current => {
                    return current < maxIndex ? current + 1 : 0;
                });
            }, 5000); 
        }
        
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [isHovering, maxIndex]);

    const handlePrevious = () => {
        setActiveIndex((current) => (current > 0 ? current - 1 : 0));
    };

    const handleNext = () => {
        setActiveIndex((current) => (current < maxIndex ? current + 1 : maxIndex));
    };

    return (
        <section className="py-8 md:py-10 w-full relative overflow-hidden">
            {/* --- Video Background and Overlay --- */}
            <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    src="/about.mp4"
                />
                <div className="absolute inset-0 bg-[#0b2741]/90 z-10" />
            </div>
            
            <div className="w-full max-w-9xl mx-auto px-4 md:px-6 relative z-20">
                <div className="relative">
                    {/* Main testimonial card content */}
                    <div className="rounded-2xl  bg-gradient-to-r from-cyan-700 to-[#0b2741]/60 shadow-2xl p-6 md:p-10 lg:p-12 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">Voices of Trust</h2>
                            <p className="text-white/80 max-w-2xl mx-auto text-lg md:text-lg">
                                Our reputation is built on results and reinforced by those who’ve experienced them Hear directly from our valued clients as they share their experiences with Terrene Engineering’s commitment to quality, innovation, and dependable service across the globe
                            </p>
                        </div>

                        {/* Added horizontal padding to this container to create space for the arrows */}
                        <div
                            className="relative flex items-center px-12 md:px-14"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                             {/* Left Arrow Button */}
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handlePrevious}
                                disabled={activeIndex === 0}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/20 text-white hover:bg-white/30 rounded-full border-none h-10 w-10 md:h-12 md:w-12 transition-opacity disabled:opacity-50"
                            >
                                <ChevronLeft className="h-6 w-6" />
                                <span className="sr-only">Previous</span>
                            </Button>

                            <div className="overflow-hidden w-full">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeIndex * 50}%)` }}
                                >
                                    {testimonials.map((testimonial) => (
                                        <div
                                            key={testimonial.id}
                                            className="w-full md:w-1/2 flex-shrink-0 px-4 mb-8"
                                        >
                                            <div className="relative h-full">
                                                <div className="absolute inset-0 rounded-xl pointer-events-none z-0">
                                                    <div className="absolute inset-0 rounded-xl border-none blur-[1px] opacity-80"></div>
                                                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-white/10 via-primary/10 to-white/10 blur-lg opacity-5"></div>
                                                </div>
                                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl h-full flex flex-col relative z-10">
                                                    {/* --- Rating Stars --- */}
                                                    <div className="absolute top-6 right-6 flex items-center space-x-1">
                                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                                        ))}
                                                    </div>

                                                    <div className="mb-4">
                                                        <Quote className="h-8 w-8 text-cyan-300 opacity-50" />
                                                    </div>
                                                    <p className="text-white italic mb-6 flex-grow">"{testimonial.quote}"</p>
                                                    <div className="flex items-center">
                                                        
                                                        <div>
                                                            <h4 className="font-medium text-white">{testimonial.name}</h4>
                                                            <p className="text-sm text-white/80">
                                                                {testimonial.position}, {testimonial.company}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Right Arrow Button */}
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleNext}
                                disabled={activeIndex === maxIndex}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/20 text-white hover:bg-white/30 rounded-full border-none h-10 w-10 md:h-12 md:w-12 transition-opacity disabled:opacity-50"
                            >
                                <ChevronRight className="h-6 w-6" />
                                <span className="sr-only">Next</span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;