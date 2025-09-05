import React, { useRef, useEffect } from 'react';
import heroVideo from '@/assert/videos/new.mp4';

const Hero = () => {
  const video1Ref = useRef<HTMLVideoElement | null>(null);

  // This useEffect hook sets the video playback rate
  useEffect(() => {
    if (video1Ref.current) {
      video1Ref.current.playbackRate = 0.9;
    }
  }, []);

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col pb-16 md:pb-20 overflow-hidden">
      {/* Container for the background video */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={video1Ref}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content - CENTERED */}
      <div className="relative z-20 flex-grow flex items-center justify-center mt-[30vh]">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center text-center justify-center max-w-6xl">
          {/* Increased maxWidth for the content area to fit the wider shape */}
          <div className="hexagon-content-area" style={{ maxWidth: '1200px' }}>
            {/* Main Heading - Adjusted for smaller mobile text */}
            <h1 className="font-extrabold text-white mb-4 leading-tight drop-shadow-2xl text-xl sm:text-4xl md:text-5xl lg:text-7xl text-center ml-[2vh] mt-[-4vh]">
              Driven by Innovation<br /> <span className="whitespace-nowrap">Defined by Engineering Excellence</span>
            </h1>

            {/*
              FIX: Removed the 'lg:ml-[37vh]' class which was pushing the text to the right on large screens.
              Added 'mx-auto' to ensure the paragraph block itself is centered, respecting its max-width.
            */}
            <p
              className="text-white text-sm md:text-2xl mb-6 text-center mx-auto"
              style={{
                fontFamily: '"Abadi Extra Light", "Arial Nova Cond Light", Arial, sans-serif',
                fontWeight: 200,
                lineHeight: 1.3,
                maxWidth: '700px',
                letterSpacing: "0.01em",
                textRendering: "optimizeLegibility",
                WebkitFontSmoothing: "antialiased",
                MozOsxFontSmoothing: "grayscale"
              }}
            >
              As trusted engineering consultants and contractors, we design, build, and maintain innovative solutions that meet today's challenges while ensuring
               sustainability for a better tomorrow
            </p>

            {/* Tagline - Adjusted for smaller mobile text */}
            <div className="mt-6 text-center">
              <div className="inline-block bg-black/10 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg shadow-cyan-800/30">
                <span className="font-extrabold text-white text-xs sm:text-base md:text-3xl tracking-wide">
                  DESIGN | BUILD | SUSTAINABLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce z-30">
        <div className="w-8 h-12 border-2 border-white rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-3 bg-white rounded-full animate-scroll-indicator"></div>
        </div>
      </div>

      
      <style>{`
        @keyframes scroll-indicator {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        /* Added for centering the transform on the SVG group */
        .transform-origin-center {
          transform-origin: center;
        }
      `}</style>
    </section>
  );
};

export default Hero;