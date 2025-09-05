import React, { useState, useEffect, useRef } from 'react';
import { Building2, Cog, Ruler, Shield, Activity, ChevronDown, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SPACING_CLASSES } from '@/lib/spacing';
import { SHADOW_PRESETS, DARK_THEME_SHADOWS } from '@/lib/shading';
import service2 from '../assert/service2.jpg';
import service3 from '../assert/service3.jpg';
import { Card } from "@/components/ui/card";
import Header from '../components/Header'; // Assuming Header is in this path
import Footer from '../components/Footer'; // Assuming Footer is in this path

// --- SERVICE CATEGORIES ---
const serviceCategories = [
	{
		title: 'Consultancy Services',
		icon: <Ruler className="w-8 h-8" />,
		description: 'Comprehensive architectural solutions from concept to completion',
		backgroundImage: '/architectural.webp',
		subServices: [
			{ title: 'Smart Project Management', description: 'Expert advice on design and implementation strategies' },
			{ title: 'Cost & Value Engineering Solutions', description: 'Functional and aesthetic interior space planning' },
			{ title: 'BIM & Digital Twin Consultancy', description: 'Custom furniture solutions tailored to your needs' },
			{ title: 'Geotechnical & Soil Investigation', description: 'Optimized sound and lighting environments' },
			{ title: 'Structural Engineering', description: 'Strategic urban and site development planning' },
			{ title: 'More Services' },
		],
	},
	{
		title: 'Construction',
		icon: <Building2 className="w-8 h-8" />,
		description: 'Structural and technical engineering expertise for all project types',
		backgroundImage: '/engineering.webp',
		subServices: [
			{ title: 'Residential Construction ', description: 'Comprehensive structural analysis and design' },
			{ title: 'Commercial Construction', description: 'Mechanical, electrical and plumbing solutions' },
			{ title: 'Industrial Construction', description: 'Climate control systems for optimal comfort' },
			{ title: 'infastructure Construction', description: 'Extra-low voltage systems for modern buildings' },
			{ title: 'Road Construction', description: 'Guidance on optimal material selection' },
			{ title: 'More Services' },
		],
	},
	{
		title: 'Interior Design',
		icon: <Cog className="w-8 h-8" />,
		description: 'Advanced technical services using cutting-edge technology',
		backgroundImage: '/technical.webp',
		subServices: [
			{ title: 'Concept Development & Design', description: 'Rigorous material and structural testing' },
			{ title: 'Project Management & Procurement', description: 'Precise mapping and geographical data analysis' },
			{ title: 'Detailed Interior Drawings', description: 'Building Information Modeling for better project coordination' },
			{ title: 'Turnkey Interior Solutions', description: 'Professional training on industry-standard software' },
			{ title: 'Material & Color Consultancy', description: 'Material procurement and logistics solutions' },
			{ title: 'More Services' },
		],
	},
	{
		title: 'BIM',
		icon: <Shield className="w-8 h-8" />,
		description: 'End-to-end project management for seamless execution',
		backgroundImage: '/project-management.webp',
		subServices: [
			{ title: '3D BIM - Digital Design & Modeling', description: 'Supervision and execution of construction projects' },
			{ title: 'Architectural', description: 'Comprehensive oversight from planning to delivery' },
			{ title: 'Structural', description: 'Accurate cost estimation and quantity analysis' },
			{ title: 'MEP', description: 'Expert resolution of construction-related claims' },
			{ title: '4D BIM - Time (Consultancy)', description: 'Strategic sourcing and contractor selection' },
			{ title: 'More Services' },
		],
	},
	{
		title: 'Digital Twin',
		icon: <Activity className="w-8 h-8" />,
		description: 'Specialized solutions for unique project requirements',
		backgroundImage: '/specialized.webp',
		subServices: [
			{ title: 'Real-Time Monitoring & Performance Tracking', description: 'Eco-friendly design solutions for modern buildings' },
			{ title: 'Predictive & Preventive Maintenance', description: 'Careful restoration of historical structures' },
			{ title: 'Energy & Resource Optimization', description: 'Comprehensive analysis of project viability' },
			{ title: 'Facility Management & Space Utilization', description: 'Identification and mitigation of project risks' },
			{ title: 'Remote Operations & Virtual Control Centers', description: 'Immersive visualization of architectural concepts' },
			{ title: 'More Services' },
		],
	},
];

const Services = () => {
	const [activeService, setActiveService] = useState<number>(0);
	const [animated, setAnimated] = useState({
		header: false,
		serviceCategories: false,
	});
	const [imageIndex, setImageIndex] = useState(0);

	const headerRef = useRef<HTMLDivElement>(null);
	const categoriesRef = useRef<HTMLDivElement>(null);

	const serviceImages = [
		"https://images.unsplash.com/photo-1504307651254-35680f356dfd",
		service2,
		service3,
	];

	useEffect(() => {
		serviceImages.forEach((img) => {
			if (typeof img === 'string') {
				const image = new window.Image();
				image.src = img;
			}
		});
	}, [serviceImages]);

	useEffect(() => {
		const observerOptions = {
			root: null,
			rootMargin: '0px',
			threshold: 0.2,
		};

		const animateElement = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;

				if (entry.target === headerRef.current) {
					setAnimated((prev) => ({ ...prev, header: true }));
				} else if (entry.target === categoriesRef.current) {
					setAnimated((prev) => ({ ...prev, serviceCategories: true }));
				}

				observer.unobserve(entry.target);
			});
		};

		const observer = new IntersectionObserver(animateElement, observerOptions);

		if (headerRef.current) observer.observe(headerRef.current);
		if (categoriesRef.current) observer.observe(categoriesRef.current);

		return () => observer.disconnect();
	}, []);



	useEffect(() => {
		const timer = setTimeout(() => {
			setImageIndex((prev) => (prev + 1) % serviceImages.length);
		}, 5000);
		return () => clearTimeout(timer);
	}, [imageIndex]);

	return (
		<section id="services" className="py-15 overflow-hidden w-full relative">
			<video
				autoPlay
				loop
				muted
				playsInline
				className="absolute inset-0 w-full h-full object-cover z-0"
			>
				<source src="/service.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<div className="absolute inset-0 bg-[#0b2741]/90 z-10"></div>
			<div className="absolute inset-0 bg-black/30 z-15"></div>

			<div className="w-full max-w-9xl mx-auto px-4 md:px-8 relative z-20">
				<div
					ref={headerRef}
					className={`transform transition-all duration-700 ${animated.header ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
				>
					<div
						className="grid lg:grid-cols-2 gap-0 items-stretch rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-white/10"
					>
						<div
							className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-stretch rounded-l-2xl overflow-hidden transition-all duration-300"
						>
							{serviceImages.map((img, idx) => (
								<img
									key={idx}
									src={img as string}
									alt={`Engineering services ${idx + 1}`}
									className={`w-full h-full object-cover transition-all duration-1000 absolute inset-0
										${imageIndex === idx ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-105 z-10'}`}
								/>
							))}
							<div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-[#141414]/95 via-[#141414]/70 to-transparent pointer-events-none z-30"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none"></div>
						</div>
						<div
							className="flex flex-col justify-center p-6 lg:p-8 bg-gradient-to-r from-cyan-600 to-[#0b2741] backdrop-blur-sm rounded-r-2xl relative overflow-hidden transition-all duration-300"
						>
							<div className="absolute inset-0 opacity-10">
								<div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-3xl"></div>
								<div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
							</div>
							<div className="relative z-10">
								<div className="mb-10">
									
								</div>
								<h2 className="text-4xl lg:text-6xl font-bold text-white mb-10 leading-tight">
									<span className="bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">Sustainable Engineering, Lifetime Assurance
</span>
									<br /><span className="text-white font-light">for Every Project</span>
								</h2>
								<div className="flex items-center gap-4 mb-10">
									<div className="w-16 h-1 bg-gradient-to-r from-primary to-primary/60 rounded-full"></div>
									<div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
									<div className="w-8 h-1 bg-gradient-to-r from-primary/60 to-transparent rounded-full"></div>
								</div>
								<p className="text-white/80 text-lg leading-relaxed max-w-lg mb-6">
									From concept to completion, we deliver integrated engineering, construction, digital, and support services tailored to meet the demands of modern development. Our multidisciplinary expertise enables us to handle complex projects with precision, innovation, and sustainability at the core. Whether it's building environments, managing assets, or empowering professionals through training, we provide end-to-end solutions that drive results locally and worldwide 								</p>
								<div className="flex flex-wrap gap-4 mb-8">
								</div>
								<Button asChild  className="group bg-[#0050A0] backdrop-blur-sm  text-white hover:bg-[#00A5E7]/90 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg">
									<Link to="/inquiry">
										<span className="flex items-center gap-3">
											CONTACT OUR TEAM
											<ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
										</span>
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>


				<div
					ref={categoriesRef}
					className={`mt-16 transform transition-all duration-700 ${
						animated.serviceCategories ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
					}`}
				>
					<div className="flex flex-col gap-y-8">
						<div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 ${SPACING_CLASSES.GRID}`}>
							{serviceCategories.map((category, index) => (
								<div
									key={index}
									className={`relative px-4 py-6 rounded-lg cursor-pointer transition-all duration-300 text-center flex flex-col items-center overflow-hidden bg-cover bg-center ${
										activeService === index
											? ''
											: ''
									}`}
									style={{
										backgroundImage: `url(${category.backgroundImage})`,
										transitionDelay: `${index * 100}ms`,
										boxShadow: activeService === index ? '0 8px 40px 0 rgba(20,20,20,0.35), 8px 0 32px -8px #0E75A0AA' : 'none'
									}}
									onMouseEnter={() => setActiveService(index)}
								>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent z-0"></div>
									<div className="relative z-10 flex flex-col items-center text-center">
										<div
											className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 mb-4 ${
												activeService === index
													? 'bg-primary text-background'
													: 'bg-white/10 text-white'
											}`}
										>
											{category.icon}
										</div>
										<h3 className="text-lg font-semibold text-white mb-auto">{category.title}</h3>
										<div
											className={`h-1 w-0 bg-primary mx-auto rounded-full transition-all duration-300 mt-3 ${
												activeService === index ? 'w-3/4' : ''
											}`}
										></div>
										<ChevronDown
											className={`w-5 h-5 mx-auto mt-2 transition-transform duration-300 text-white/50 ${
												activeService === index ? 'rotate-180 text-primary' : ''
											}`}
										/>
									</div>
								</div>
							))}
						</div>

						{/* --- SUB-SERVICES PANEL MODIFIED --- */}
						<div
							className={`hidden md:block relative overflow-hidden rounded-lg p-6  bg-black/20 backdrop-blur-sm transition-all duration-500 ${
								activeService !== null
									? 'opacity-100 translate-y-0 max-h-[800px]'
									: 'opacity-0 -translate-y-10 max-h-0 overflow-hidden'
							}`}
						>
							<div className="relative z-10">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
									{serviceCategories[activeService]?.subServices.map((service, index) => {
										const isMoreServices = service.title === 'More Services';

										const cardContent = isMoreServices ? (
											<div
												className="bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group backdrop-blur-sm h-full flex items-center justify-center"
												style={{ transitionDelay: `${index * 50}ms` }}
											>
												<div className="flex items-center gap-3">
													<h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
														{service.title}
													</h4>
													<ArrowRight className="h-5 w-5 text-white group-hover:text-primary group-hover:translate-x-1 transition-transform duration-300" />
												</div>
											</div>
										) : (
											<div
												className="bg-white/10 border border-white/20 rounded-lg p-4 hover:bg-white/20 transition-all duration-300 group backdrop-blur-sm"
												style={{ transitionDelay: `${index * 50}ms` }}
											>
												<h4 className="text-lg font-semibold text-white mb-3 group-hover:text-primary transition-colors">
													{service.title}
												</h4>
												<p className="text-white/80 text-sm leading-relaxed">
													{service.description}
												</p>
											</div>
										);

										return (
											<div key={index}>
												{isMoreServices ? <Link to="/services-main">{cardContent}</Link> : cardContent}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;