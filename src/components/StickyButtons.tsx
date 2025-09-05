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
    // IMPORTANT: Replace with your actual WhatsApp number in international format (without '+').
    const phoneNumber = "YOUR_WHATSAPP_NUMBER"; 
    const whatsappMessage = "Hello! I'm interested in your engineering services.";
    const emailAddress = "eshop@wurth.lk"; // This can be updated if needed
    const emailSubject = "Inquiry from Website";

    // --- Social Links (Updated with your URLs) ---
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
    // The component now points to image sources in your /public folder.
    const socialButtons = [
        { name: 'facebook', href: socialLinks.facebook, iconSrc: '/facebook.png', label: 'Message on Facebook' },
        { name: 'whatsapp', href: socialLinks.whatsapp, iconSrc: '/whatsapp.png', label: 'Chat on WhatsApp' },
        { name: 'phone', href: socialLinks.phone, iconSrc: '/phone.png', label: 'Call Us' },
        { name: 'linkedin', href: socialLinks.linkedin, iconSrc: '/linkedin.png', label: 'Connect on LinkedIn' },
        { name: 'email', href: socialLinks.email, iconSrc: '/email.png', label: 'Email Us' },
    ];
    
    // Classes for the main toggle button
    const mainButtonClasses = `flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg hover:scale-110 transition-all duration-300 ease-in-out`;

    return (
        <div 
            className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-6"
        >
            {/* Expanded Social Buttons */}
            <div className={`flex flex-col items-center gap-6 transition-all duration-500 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
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

            {/* Main Toggle Button with responsive event handlers */}
            <button
                onMouseEnter={isMobile ? undefined : () => setIsOpen(true)}
                onClick={isMobile ? () => setIsOpen(!isOpen) : () => setIsOpen(false)}
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