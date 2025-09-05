import React, { useState, useEffect } from 'react';

import Logo2 from "@/assert/Logo2.png";

const LogoTriangle = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [circuitLines, setCircuitLines] = useState([]);
  
  // Separate sizing properties
  const containerSize = 200; // Main container size
  const circleSize = 150; // Circle background size
  const logoSize = 120; // Logo size

  // Generate circuit-like lines
  useEffect(() => {
    const generateCircuitLines = () => {
      const lines = [];
      for (let i = 0; i < 6; i++) {
        lines.push({
          id: i,
          x1: Math.random() * 100,
          y1: Math.random() * 100,
          x2: Math.random() * 100,
          y2: Math.random() * 100,
          delay: Math.random() * 2,
        });
      }
      setCircuitLines(lines);
    };

    generateCircuitLines();
  }, []);

  return (
    <div
      className="relative flex items-center justify-center cursor-pointer group ml-[-10vh] "
      style={{ width: `${containerSize}px`, height: `${containerSize}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     

      {/* Circuit board lines */}
      <div className="absolute inset-0">
        <svg width={containerSize} height={containerSize} className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          {circuitLines.map((line) => (
            <g key={line.id}>
              <line
                x1={`${line.x1}%`}
                y1={`${line.y1}%`}
                x2={`${line.x2}%`}
                y2={`${line.y2}%`}
                stroke="url(#circuitGradient)"
                strokeWidth="1.5"
                className="animate-circuit-pulse"
                style={{ animationDelay: `${line.delay}s` }}
              />
              <circle cx={`${line.x1}%`} cy={`${line.y1}%`} r="2" fill="#0EA5E9" className="animate-pulse" />
              <circle cx={`${line.x2}%`} cy={`${line.y2}%`} r="1.5" fill="#10B981" className="animate-pulse" style={{ animationDelay: `${line.delay + 0.5}s` }} />
            </g>
          ))}
          <defs>
            <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0" />
              <stop offset="50%" stopColor="#0EA5E9" stopOpacity="1" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* FIXED: White background circle with independent sizing */}
      <div className="absolute inset-0 flex items-center justify-center mt-8vh mb-[2vh] ">
        <svg 
          viewBox={`0 0 ${circleSize} ${circleSize}`} 
          width={`${circleSize}px`} 
          height={`${circleSize}px`} 
          xmlns="http://www.w3.org/2000/svg"
          className="absolute"
          style={{ 
            left: '50%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)' 
          }}
        >
            <circle 
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={circleSize / 2}
              fill="white"
            />
        </svg>
      </div>

      {/* Container for logo and its hover effects */}
      <div 
        className="relative flex items-center justify-center transition-all duration-500 group-hover:scale-105 ml-[-10vh] mb-[2vh]"
        style={{ width: `${containerSize * 1.2}px`, height: `${containerSize * 1.2}px` }}
      >

        {/* Technical overlay with blueprint feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
             style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }} />

        {/* Hexagonal measurement lines */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-500">
          <svg width="100%" height="100%" className="absolute inset-0">
            <polygon
              points="50,25 140,25 170,95 140,165 50,165 20,95"
              fill="none"
              stroke="#0EA5E9"
              strokeWidth="1"
              strokeDasharray="2,2"
              opacity="0.6"
            />
          </svg>

          {/* Corner measurement markers */}
          <div className="absolute top-4 left-8 w-2 h-2 border-l border-t border-blue-400" />
          <div className="absolute top-4 right-8 w-2 h-2 border-r border-t border-blue-400" />
          <div className="absolute top-16 right-3 w-2 h-2 border-r border-blue-400" />
          <div className="absolute bottom-16 right-3 w-2 h-2 border-r border-blue-400" />
          <div className="absolute bottom-4 right-8 w-2 h-2 border-r border-b border-blue-400" />
          <div className="absolute bottom-4 left-8 w-2 h-2 border-l border-b border-blue-400" />
          <div className="absolute bottom-16 left-3 w-2 h-2 border-l border-blue-400" />
          <div className="absolute top-16 left-3 w-2 h-2 border-l border-blue-400" />
        </div>

        {/* Data points - engineering style */}
        <div className="absolute top-8 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col text-right text-xs text-blue-400 font-mono">
            <span className="animate-pulse"></span>
            <span className="animate-pulse" style={{ animationDelay: '0.5s' }}></span>
            <span className="animate-pulse" style={{ animationDelay: '1s' }}></span>
          </div>
        </div>

        {/* Logo - Independent sizing */}
        <div className="relative z-20 flex items-center justify-center h-full ">
          <div
            className={`transition-all duration-500 ${
              isHovered ? 'brightness-110 contrast-110' : 'brightness-100'
            }`}
            style={{
              width: `${logoSize}px`,
              height: `${logoSize}px`,
              filter: isHovered
                ? 'drop-shadow(0 0 15px rgba(14, 165, 233, 0.4)) drop-shadow(0 4px 12px rgba(0,0,0,0.3))'
                : 'drop-shadow(0 2px 8px rgba(0,0,0,0.2))',
                marginBottom: '1.9vh',
            }}
          >
            <img
              src={Logo2}
              alt="Terrene Engineering Logo"
              className="w-full h-full object-contain mb-[5vh]"
            />
          </div>
        </div>

        {/* Status indicators */}
        <div className="absolute bottom-8 left-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
          <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
        </div>

        {/* Scanning effect */}
        <div className={`absolute inset-0 overflow-hidden ${isHovered ? 'block' : 'hidden'}`}
             style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}>
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-vertical opacity-60" />
        </div>
      </div>

      {/* Technical readout */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="text-xs text-blue-400 font-mono text-center">
          <div className="animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scan-vertical {
          0% { top: -2px; }
          100% { top: 100%; }
        }

        @keyframes circuit-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }

        .animate-scan-vertical {
          animation: scan-vertical 3s ease-in-out infinite;
        }

        .animate-circuit-pulse {
          animation: circuit-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LogoTriangle;