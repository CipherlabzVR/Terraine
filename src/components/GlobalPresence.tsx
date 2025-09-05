import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import mapImage from '../assert/map.png';

const GlobalPresence = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section ref={ref} className="py-12 md:py-16 relative overflow-hidden w-full">
      {/* --- Video Background --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
          <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              src="/pro.mp4"
          />
          {/* Dark overlay for content readability */}
          <div className="absolute inset-0 bg-[#0b2741]/90 z-10"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center gap-12">
        {/* Centered Text Content */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 mt-[-2vh]">
            <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                Global Presence
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
                We proudly serve clients across the Globe, and Delivering excellence in
                every Region
            </p>
            </motion.div>
        </div>

        {/* Map Section with max-w-9xl */}
        <div className="w-full max-w-9xl mx-auto px-4 md:px-8">
            <motion.div
                className="relative w-full flex items-center justify-center rounded-2xl overflow-hidden border border-white/10 bg-black/40 shadow-xl p-4 md:p-8"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="absolute -inset-4 bg-gradient-to-r from-white/10 via-white/20 to-white/10 rounded-[inherit] blur-2xl opacity-80 z-0"></div>
                <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl"></div>
                <img
                    src={mapImage}
                    alt="Global Presence Map"
                    className="w-[90%] h-auto object-contain relative z-10"
                    draggable={false}
                />
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;