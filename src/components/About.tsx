import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, CheckCircle } from 'lucide-react';
import { SPACING_CLASSES } from '@/lib/spacing';
import { SHADOW_PRESETS, DARK_THEME_SHADOWS } from '@/lib/shading';
import homepageBuildingImage from '@/assert/homepagebuilding1.jpg';
import building2 from '@/assert/building2.jpg';
import Header from '../components/Header'; // Assuming Header component is in this path
import { Link } from 'react-router-dom';


const About = () => {
	// ANIMATION REMOVED: isImageVisible state is no longer needed
	const [isHovering, setIsHovering] = useState(false);
	const [startTextAnimation, setStartTextAnimation] = useState(false);
	// ANIMATION REMOVED: animated state is no longer needed
	const [showSecondImage, setShowSecondImage] = useState(false);
	const imageRef = useRef(null);
	const contentRef = useRef(null);

	// ANIMATION REMOVED: The IntersectionObserver useEffect for the main content has been deleted.

	// ANIMATION REMOVED: The IntersectionObserver useEffect for the image has been deleted.

	// After the image is visible, trigger the second image with animation (slower, smoother)
	// UPDATED: This effect now runs on component mount instead of waiting for visibility.
	useEffect(() => {
		let timer1: NodeJS.Timeout;
		let timer2: NodeJS.Timeout;

		// Show second image after 5s
		timer1 = setTimeout(() => setShowSecondImage(true), 5000);
		// Switch back to first image after 5s + 1s (total 6s)
		timer2 = setTimeout(() => setShowSecondImage(false), 6000);
		
		return () => {
			clearTimeout(timer1);
			clearTimeout(timer2);
		};
	}, [showSecondImage]); // Dependency updated

	return (
		<section
			id="about"
			className="overflow-hidden w-full relative py-8"
		>
			{/* Hero Video Background */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				<source src="/hero.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>

			{/* Blue Tint Overlay */}
			<div className="absolute inset-0 bg-[#0b2741]/90 z-10"></div>

			{/* Additional Dark Overlay for Better Text Readability */}
			<div className="absolute inset-0 bg-black/30 z-15"></div>

			<div className="w-full relative z-20 px-4 md:px-8">
				{/* Main content */}
				{/* ANIMATION REMOVED: Animation classes and logic removed from this div */}
				<div ref={contentRef}>
					<div
						className="grid lg:grid-cols-2 gap-0 items-stretch overflow-hidden transition-all duration-300 hover:shadow-2xl rounded-2xl"
						style={{
							boxShadow: SHADOW_PRESETS.ABOUT.style,
						}}
					>
						{/* Text content - UPDATED BACKGROUND */}
						<div
                            className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-gradient-to-r from-cyan-600 to-[#0b2741] backdrop-blur-sm  relative overflow-hidden transition-all duration-300"
							style={{
								boxShadow: DARK_THEME_SHADOWS.ELEVATED.MEDIUM,
							}}>
							

							<div className="relative z-10">
								<div className="mb-6">
									
								</div>

								{/* RESPONSIVE FONT: Added xl:text-7xl for large screens */}
								<h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
									<span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">About Terrene</span>
									<br /><span className="text-white/90 font-light">Engineering</span>
								</h2>

								<div className="flex items-center gap-4 mb-10">
									<div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
									<div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
									<div className="w-8 h-1 bg-gradient-to-r from-primary/60 to-transparent rounded-full"></div>
								</div>

								{/* RESPONSIVE FONT: Added xl:text-xl for large screens */}
								<p className="text-white/90 text-lg xl:text-xl leading-relaxed max-w-lg mb-4">
									Terrene Engineering (Pvt) Ltd is a globally trusted name in engineering consultancy and contracting. With over 20 years of proven expertise, we deliver end-to-end engineering solutions that merge innovation, precision, and sustainability. Our team of experienced professionals operates across Sri Lanka, Maldives, Oman, UAE, Qatar, KSA, Australia, Singapore, New Zealand, UK, Canada, Germany, and serves clients around the world.
								</p>

								<div className="flex flex-wrap gap-4 mb-6">
									{/* RESPONSIVE FONT: Added xl:text-base for large screens */}
									<div className="flex items-center gap-2 text-white/80 text-sm xl:text-base">
										<Award className="w-4 h-4 text-[#0b2741]" />
										<span>20+ Years Experience</span>
									</div>
									{/* RESPONSIVE FONT: Added xl:text-base for large screens */}
									<div className="flex items-center gap-2 text-white/80 text-sm xl:text-base">
										<Users className="w-4 h-4 text-[#0b2741]" />
										<span>Expert Team</span>
									</div>
									{/* RESPONSIVE FONT: Added xl:text-base for large screens */}
									<div className="flex items-center gap-2 text-white/80 text-sm xl:text-base">
										<CheckCircle className="w-4 h-4 text-[#0b2741]" />
										<span>Quality Assured</span>
									</div>
								</div>

								{/* RESPONSIVE FONT: Added xl:text-xl for large screens */}
								<Button  className="group bg-[#0050A0] backdrop-blur-sm text-white hover:[#00A5E7]/90 hover:border-white/50 px-8 py-4 text-lg xl:text-xl font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
									style={{
										boxShadow: DARK_THEME_SHADOWS.CARD.MEDIUM,
									}}>
									<span className="flex items-center gap-3">
										<Link to="/about">LEARN MORE ABOUT US</Link>
										<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
									</span>
								</Button>
							</div>
						</div>

						{/* Image and Video Container */}
						<div
							ref={imageRef}
							className="relative min-h-[250px] md:min-h-[300px] lg:min-h-[350px] flex items-stretch overflow-hidden  transition-all duration-300"
							// ANIMATION REMOVED: Inline style for opacity and transform removed.
							style={{
								boxShadow: DARK_THEME_SHADOWS.ELEVATED.MEDIUM,
							}}
							onMouseEnter={() => setIsHovering(true)}
							onMouseLeave={() => setIsHovering(false)}
						>
                            {/* About Video Background */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover z-0"
                            >
                                <source src="/about.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Blue Tint Overlay for right side video */}
                            <div className="absolute inset-0 bg-blue-900/40 z-5"></div>

							{/* First image */}
							<img
								src={homepageBuildingImage}
								alt="Terrene Engineering Building"
								className={`w-full h-full object-cover transition-transform duration-1000 absolute inset-0 ${showSecondImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
								style={{
									zIndex: 10,
									transform: isHovering ? 'scale(1.07)' : 'scale(1)',
									minHeight: '250px',
									height: '100%',
									transition: 'opacity 1s, transform 1s',
								}}
							/>
							{/* Second image with fade-in and slight scale animation */}
							<img
								src={building2}
								alt="Terrene Engineering Building 2"
								className={`w-full h-full object-cover transition-transform duration-1000 absolute inset-0 ${showSecondImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
								style={{
									zIndex: 20,
									minHeight: '250px',
									height: '100%',
									transition: 'opacity 1s, transform 1s',
								}}
							/>
							<div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-[#141414]/40 via-[#141414]/40 to-transparent pointer-events-none z-30"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-transparent pointer-events-none z-30"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;