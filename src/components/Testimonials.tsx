import React, { useState, useEffect, useRef, TouchEvent } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const testimonials = [
    // Oman
    {
        id: 1,
        quote: "Terrene Engineers supported our luxury hotel project in Muscat with BIM coordination and structural detailing. Their precise planning reduced errors and sped up construction. They helped us save costs by improving material use and timelines. Their professionalism made the entire project smooth.",
        name: "Ahmed Al-Harthy",
        position: "Civil Engineer",
        company: "Muscat, Oman",
        rating: 5
    },
    {
        id: 2,
        quote: "For our office complex in Salalah, Terrene Engineers handled MEP and facade coordination using BIM. Their accurate clash detection reduced rework costs by over 10 percent. Their involvement ensured timely delivery and quality execution. We are very satisfied with their expertise.",
        name: "Fatima Al-Saidi",
        position: "Project Manager",
        company: "Salalah, Oman",
        rating: 5
    },
    // Qatar
    {
        id: 3,
        quote: "During our mall expansion in Doha, Terrene Engineers provided BIM integration and interior design support. Their solutions optimized materials and enabled fast-track delivery, minimizing change orders. Their detailed coordination helped us stay on schedule and budget. We highly recommend their services.",
        name: "Mohammed Al-Khalifa",
        position: "Senior Consultant",
        company: "Doha, Qatar",
        rating: 5
    },
    {
        id: 4,
        quote: "Terrene Engineers managed structural and MEP design for our hotel in Lusail. Their precise coordination avoided design conflicts and accelerated approvals. Their BIM workflow reduced errors and saved costs. Their support was vital to project success.",
        name: "Omar Saeed",
        position: "Project Manager",
        company: "Lusail, Qatar",
        rating: 5
    },
    // Saudi Arabia
    {
        id: 5,
        quote: "Terrene Engineers helped design and coordinate a mixed-use development in Riyadh. Their BIM and scheduling services improved timeline accuracy and reduced waste. Their detailed approach made project phases efficient and cost-effective. Their support was essential for smooth execution.",
        name: "Fahad Al-Qahtani",
        position: "Senior Engineer",
        company: "Riyadh, Saudi Arabia",
        rating: 5
    },
    {
        id: 6,
        quote: "For our commercial complex in Jeddah, Terrene Engineers provided BIM and MEP coordination. Their energy efficiency strategies cut utility planning errors and kept costs down. Their work ensured on-budget delivery with minimal issues. We greatly value their expertise.",
        name: "Nasser Al-Harbi",
        position: "Project Director",
        company: "Jeddah, Saudi Arabia",
        rating: 5
    },
    // Dubai / UAE
    {
        id: 7,
        quote: "Terrene Engineers supported a high-rise residential tower in Business Bay with BIM and structural design. Their services reduced turnaround time and improved contractor coordination. Their detailed 3D visualizations minimized rework and saved costs. We were very impressed by their professionalism.",
        name: "Aisha Al Mazrouei",
        position: "Project Manager",
        company: "Dubai, UAE",
        rating: 5
    },
    {
        id: 8,
        quote: "For our mall interior revamp in Dubai, Terrene Engineers provided MEP redesign and 3D visualization. Their clarity eliminated scope confusion and reduced change orders by nearly 20 percent. Their precise planning sped up delivery and reduced costs. We highly recommend their services.",
        name: "Omar Bin Saeed",
        position: "Operations Director",
        company: "Dubai, UAE",
        rating: 5
    },
    // Singapore
    {
        id: 9,
        quote: "Terrene Engineers assisted with a data center expansion in Jurong. Their BIM and MEP coordination ensured seamless system integration with zero rework. Their organized planning kept the project on schedule and budget. Their expertise made all the difference.",
        name: "Emily Tan",
        position: "Project Engineer",
        company: "Singapore",
        rating: 5
    },
    {
        id: 10,
        quote: "We relied on Terrene Engineers for a retail fit-out at Orchard Road. Their BIM support reduced material waste and helped complete the project within a tight timeline. Their detailed planning ensured smooth construction. Their team was very professional and reliable.",
        name: "David Ong",
        position: "Construction Manager",
        company: "Singapore",
        rating: 5
    },
    // Maldives
    {
        id: 11,
        quote: "Terrene Engineers provided architectural design and BIM services for our boutique resort in Malé. Their detailed planning optimized logistics for remote site construction. Their clear communication helped avoid delays and reduced costs. Their work exceeded our expectations.",
        name: "Aishath Nazima",
        position: "Project Coordinator",
        company: "Malé, Maldives",
        rating: 5
    },
    {
        id: 12,
        quote: "Their MEP design and BIM integration for our Hulhumalé marina apartments helped reduce change orders. Their proactive coordination improved site efficiency and timeline. Their technical expertise saved time and money. Their support was invaluable.",
        name: "Ibrahim Shifaz",
        position: "Operations Manager",
        company: "Hulhumalé, Maldives",
        rating: 5
    },
    // Australia
    {
        id: 13,
        quote: "Terrene Engineers supported a university campus expansion in Sydney with MEP and structural BIM coordination. Their efficiency reduced delays and coordination issues. Their clear documentation improved stakeholder alignment. Their team delivered consistently on time and budget.",
        name: "Jessica Martin",
        position: "Project Manager",
        company: "Sydney, Australia",
        rating: 5
    },
    {
        id: 14,
        quote: "For a residential high-rise in Melbourne, their clash detection and 4D planning minimized rework and controlled costs. Their organized BIM workflows improved construction scheduling. Their thorough approach helped meet all deadlines. Their professionalism was outstanding.",
        name: "Liam O’Connor",
        position: "Construction Director",
        company: "Melbourne, Australia",
        rating: 5
    },
    // New Zealand
    {
        id: 15,
        quote: "Terrene Engineers contributed BIM-based planning and facade coordination for an Auckland waterfront office. Their proactive support prevented delays and improved stakeholder communication. Their detailed models streamlined installation and reduced errors. Their work added great value to the project.",
        name: "Emma Wilson",
        position: "Project Coordinator",
        company: "Auckland, New Zealand",
        rating: 5
    },
    {
        id: 16,
        quote: "On the Wellington civic center renewal, Terrene Engineers handled MEP design and clash-free BIM models. Their solutions improved installation efficiency and lowered change orders by over 15 percent. Their thorough coordination reduced risks and costs. Their commitment was highly appreciated.",
        name: "James McAllister",
        position: "Senior Engineer",
        company: "Wellington, New Zealand",
        rating: 5
    },
    // Germany
    {
        id: 17,
        quote: "Terrene Engineers worked on a mixed-use tower in Berlin using advanced BIM models. Their scheduling precision reduced design revisions and saved time. Their expertise enhanced project coordination and budget control. Their involvement was key to smooth execution.",
        name: "Hans Müller",
        position: "Project Manager",
        company: "Berlin, Germany",
        rating: 5
    },
    {
        id: 18,
        quote: "For a residential complex in Hamburg, Terrene Engineers provided 3D planning and structural BIM services. Their proactive coordination lowered site errors and avoided budget overruns. Their detailed workflows improved construction accuracy. Their professionalism was excellent.",
        name: "Claudia Schneider",
        position: "Construction Director",
        company: "Hamburg, Germany",
        rating: 5
    },
    // Malaysia
    {
        id: 19,
        quote: "Terrene Engineers managed BIM and MEP layout for a Kuala Lumpur high-rise. Their services improved services routing and reduced last-minute changes. Their accurate models enhanced project reporting and cost control. Their team was efficient and reliable.",
        name: "Nur Aisyah",
        position: "Project Manager",
        company: "Kuala Lumpur, Malaysia",
        rating: 5
    },
    {
        id: 20,
        quote: "Their BIM coordination in Penang’s commercial center improved site execution. Their detailed planning contributed to excellent reporting and cost management. Their expertise helped minimize delays and overruns. Their support was valuable.",
        name: "Ahmad Faizal",
        position: "Construction Director",
        company: "Penang, Malaysia",
        rating: 5
    },
    // Canada
    {
        id: 21,
        quote: "For a Toronto mixed-use complex, Terrene Engineers provided high-quality BIM documentation. Their pre-construction insights saved time during execution. Their coordination improved service installations and workflows. Their professionalism exceeded expectations.",
        name: "Samantha Clarke",
        position: "Project Manager",
        company: "Toronto, Canada",
        rating: 5
    },
    {
        id: 22,
        quote: "In Vancouver’s waterfront redevelopment, they handled structural modeling and 4D sequencing. Their clear deliverables and coordination workflows made execution smooth. Their detailed planning kept the project on schedule. Their team was very dependable.",
        name: "Michael Thompson",
        position: "Senior Engineer",
        company: "Vancouver, Canada",
        rating: 5
    },
    // United Kingdom (UK)
    {
        id: 23,
        quote: "Terrene Engineers supported design and planning of a commercial tower in London. Their BIM services ensured excellent coordination with MEP contractors. Their efforts saved multiple design revisions and delays. Their responsiveness was greatly appreciated.",
        name: "Sarah Williams",
        position: "Project Manager",
        company: "London, UK",
        rating: 5
    },
    {
        id: 24,
        quote: "For a Manchester residential development, they managed facade and structural integration. Their detailed 3D plans and responsiveness avoided delays and controlled costs. Their thorough coordination improved project delivery. Their professionalism was outstanding.",
        name: "James Bennett",
        position: "Construction Director",
        company: "Manchester, UK",
        rating: 5
    },
    // Sri Lanka
    {
        id: 25,
        quote: "Terrene Engineers helped me build my luxury villa in Nuwara Eliya with detailed BIM design and MEP planning. Their precise coordination saved me time and reduced material waste by over 10 percent. The 3D visualization gave me full clarity before construction started. I highly recommend their professional and efficient approach.",
        name: "Dr. Chamari Gunasekara",
        position: "Medical Practitioner",
        company: "Nuwara Eliya, Sri Lanka",
        rating: 5
    },
    {
        id: 26,
        quote: "For my commercial and residential building in Galle, Terrene Engineers provided architectural and structural design with BIM coordination. Their efficient planning kept the project on budget and ensured smooth execution. They helped optimize materials and reduce wastage significantly. The whole process was seamless from start to finish.",
        name: "Mr. Dinusha Fernando",
        position: "Entrepreneur",
        company: "Galle, Sri Lanka",
        rating: 5
    },
    // India
    {
        id: 27,
        quote: "We built our luxury home in Hyderabad with Terrene Engineers handling architectural design, MEP services, and BIM modeling. Their thorough planning helped avoid rework and saved us both time and money. Their clash detection ensured smooth construction without delays. Their professionalism made the entire experience hassle-free.",
        name: "Dr. Anjali Verma",
        position: "Specialist Consultant",
        company: "Hyderabad, India",
        rating: 5
    },
    {
        id: 28,
        quote: "Terrene Engineers designed my dental clinic in Coimbatore, including HVAC and electrical layouts. Their BIM-based approach improved space use and ensured timely project delivery with great quality. They helped reduce changes during construction and kept costs under control. I am very satisfied with their work and service.",
        name: "Dr. Ravi Sankar",
        position: "Clinic Owner",
        company: "Coimbatore, India",
        rating: 5
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const minSwipeDistance = 50;

    // --- Dynamic Carousel Logic ---
    const itemsPerPage = isMobile ? 1 : 2;
    const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;
    const transformPercentage = 100 / itemsPerPage;

    // --- Effects ---
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!isHovering) {
            timerRef.current = setInterval(() => {
                setActiveIndex(current => (current < maxIndex ? current + 1 : 0));
            }, 5000);
        }
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [isHovering, maxIndex]);

    // --- Handlers ---
    const handlePrevious = () => setActiveIndex(current => (current > 0 ? current - 1 : 0));
    const handleNext = () => setActiveIndex(current => (current < maxIndex ? current + 1 : maxIndex));

    const handleTouchStart = (e: TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
        if (touchStart === null) return;
        const currentTouch = e.targetTouches[0].clientX;
        const diff = touchStart - currentTouch;

        if (Math.abs(diff) > minSwipeDistance) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrevious();
            }
            setTouchStart(null); // Reset after a swipe is registered
        }
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
                    <div className="rounded-2xl bg-gradient-to-r from-cyan-700 to-[#0b2741]/60 shadow-2xl p-6 md:p-10 lg:p-12 relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-5xl md:text-6xl font-bold mb-2 text-white">Voices of Trust</h2>
                            <p className="text-white/80 max-w-2xl mx-auto text-lg">
                                Our reputation is built on results and reinforced by those who’ve experienced them. Hear directly from our valued clients.
                            </p>
                        </div>

                        <div
                            className="relative flex items-center md:px-14" // Padding only for desktop
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                        >
                             {/* Left Arrow Button - Hidden on mobile */}
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handlePrevious}
                                disabled={activeIndex === 0}
                                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white/20 text-white hover:bg-white/30 rounded-full border-none h-12 w-12 transition-opacity disabled:opacity-50"
                            >
                                <ChevronLeft className="h-6 w-6" />
                                <span className="sr-only">Previous</span>
                            </Button>

                            <div className="overflow-hidden w-full">
                                <div
                                    className="flex transition-transform duration-500 ease-in-out"
                                    style={{ transform: `translateX(-${activeIndex * transformPercentage}%)` }}
                                >
                                    {testimonials.map((testimonial) => (
                                        <div
                                            key={testimonial.id}
                                            className="w-full md:w-1/2 flex-shrink-0 px-2 sm:px-3"
                                        >
                                            <div className="relative h-full">
                                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-xl h-full flex flex-col relative z-10">
                                                    <div className="absolute top-6 right-6 flex items-center space-x-1">
                                                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                                        ))}
                                                    </div>
                                                    <Quote className="h-8 w-8 text-cyan-300 opacity-50 mb-4" />
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
                            
                            {/* Right Arrow Button - Hidden on mobile */}
                            <Button
                                variant="outline"
                                size="icon"
                                onClick={handleNext}
                                disabled={activeIndex === maxIndex}
                                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white/20 text-white hover:bg-white/30 rounded-full border-none h-12 w-12 transition-opacity disabled:opacity-50"
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