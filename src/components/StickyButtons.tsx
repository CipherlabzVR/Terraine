import React, { useState, useEffect } from 'react';

const StickyButtons = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Effect to check screen size for responsive event handling
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Standard breakpoint for md
        };

        checkScreenSize(); // Check on initial render
        window.addEventListener('resize', checkScreenSize); // Add listener for changes

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // --- Configuration ---
    const phoneNumber = "94740226660"; 
    const whatsappMessage = "Hello! I'm interested in your engineering services.";
    const emailAddress = "info@terreneengineering.com";
    const emailSubject = "Inquiry from Website";

    // --- Social Links ---
    const socialLinks = {
        whatsapp: `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`,
        facebook: "https://www.facebook.com/share/1GRAMJHEas/",
        linkedin: "https://www.linkedin.com/company/terrene-engineering-private-limited/",
        instagram: "https://www.instagram.com/terreneengineering?igsh=amE5a2QwdjlmdDU1",
        youtube: "https://youtube.com/@terreneengineering?si=3ifwOLd3PaIDIoly",
        tiktok: "https://www.tiktok.com/@terreneengineering?_t=ZS-8yEqPlsthkl&_r=1",
        email: `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}`,
        phone: 'tel:+94775235572'
    };

    // --- Button Definitions ---
    const socialButtons = [
        { name: 'facebook', href: socialLinks.facebook, iconSrc: '/facebook.png', label: 'Message on Facebook' },
        { name: 'whatsapp', href: socialLinks.whatsapp, iconSrc: '/whatsapp.png', label: 'Chat on WhatsApp' },
        { name: 'phone', href: socialLinks.phone, iconSrc: '/phone.png', label: 'Call Us' },
        { name: 'linkedin', href: socialLinks.linkedin, iconSrc: '/linkedin.png', label: 'Connect on LinkedIn' },
        { name: 'email', href: socialLinks.email, iconSrc: '/email.png', label: 'Email Us' },
    ];
    
    const mainButtonClasses = `flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300 ease-in-out`;

    return (
        <div 
            // --- onMouseLeave remains here to close the menu ---
            className="fixed bottom-4 right-4 z-[9999] flex flex-col items-center gap-6 p-4"
            onMouseLeave={isMobile ? undefined : () => setIsOpen(false)}
        >
            {/* Expanded Social Buttons */}
            {/* FIX: Added max-h-0 when closed and max-h-[500px] (or any large value) when open.
              This collapses the div's height to 0 when closed, preventing it from
              overlapping other page elements, while still allowing CSS transitions.
            */}
            <div className={`flex flex-col items-center gap-6 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0 max-h-[500px]' : 'opacity-0 translate-y-8 max-h-0 pointer-events-none'}`}>
                {socialButtons.map((button) => (
                    <a
                        key={button.name}
                        href={button.href}
                        target={button.name === 'phone' || button.name === 'email' ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="transition-transform duration-300 ease-in-out hover:scale-110"
                        aria-label={button.label}
                    >
                        <img src={button.iconSrc} alt={button.label} className="w-16 h-16" />
                    </a>
                ))}
            </div>

            {/* Main Toggle Button */}
            <button
                // --- onMouseEnter is now on the button to trigger the menu ---
                onMouseEnter={isMobile ? undefined : () => setIsOpen(true)}
                onClick={isMobile ? () => setIsOpen(!isOpen) : undefined}
                className={`${mainButtonClasses} text-white transition-transform duration-300 ease-in-out ${!isOpen ? 'animate-throb' : ''}`}
                style={{ 
                    backgroundColor: '#0b2741',
                    boxShadow: '0 6px 20px rgba(11, 39, 65, 0.4)'
                }}
                aria-label={isOpen ? "Close contact options" : "Open contact options"}
            >
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                   <img 
                        src={isOpen ? '/close.png' : '/chat.png'} 
                        alt={isOpen ? "Close" : "Chat"} 
                        className="w-15 h-15 transition-all duration-300"
                    />
                </div>
            </button>

            <style>{`
              @keyframes throb {
                0%, 100% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(1.1);
                }
              }
              .animate-throb {
                animation: throb 2.5s ease-in-out infinite;
              }
            `}</style>
        </div>
    );
};

export default StickyButtons;