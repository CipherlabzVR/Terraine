import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const statsData = [
    { label: 'Happy Clients', value: 2500, suffix: '+' },
    { label: 'Qualified Engineers', value: 180, suffix: '+' },
    { label: 'Years of Experience', value: 20, suffix: '+' },
    { label: 'Countries Served', value: 30, suffix: '+' }
];

const StatCounter = ({ value, suffix = '', duration = 2 }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const end = Math.min(value, 9999);
            const increment = end / (duration * 60);
            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    setCount(end);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16.67); // Corresponds to 60fps

            return () => clearInterval(timer);
        }
    }, [inView, value, duration]);

    return (
        <span ref={ref} className="text-4xl sm:text-5xl font-bold text-white drop-shadow-lg">
            {count}{suffix}
        </span>
    );
};

const CompletionStats = () => {
    return (
        <section className="py-12 md:py-20 w-full relative">
            {/* --- Outer page background --- */}
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
                {/* --- Grid of separate boxes with masked videos --- */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {statsData.map((stat) => (
                        <div
                            key={stat.label}
                            className="relative rounded-xl shadow-xl overflow-hidden aspect-[4/3] md:aspect-[4/3] backdrop-blur-lg bg-cyan-600/30"
                        >
                            {/* --- Content --- */}
                            <div className="relative z-20 h-full flex flex-col items-center justify-center space-y-3 p-4">
                                <StatCounter value={stat.value} suffix={stat.suffix} />
                                <div className="h-1 w-12 bg-white/50 rounded-full"></div>
                                <div className="text-white/90 text-xs sm:text-sm uppercase tracking-wider font-medium text-center drop-shadow-lg leading-tight">
                                    {stat.label}
                                </div>
                            </div>

                            {/* --- Subtle border glow --- */}
                            <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CompletionStats;