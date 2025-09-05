import { PageData } from '../../pages/SubServicePageLayout';

export const outdoorSpecialtyFurniturePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Outdoor & Specialty</span> Furniture',
    tagline: 'Stylish, durable furniture for unique outdoor spaces',
    description: 'Our outdoor and specialty furniture solutions combine durability, weather resistance, and innovative design, delivering stylish, functional, and long-lasting pieces ideal for gardens, terraces, resorts, and custom environments.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Sun', title: 'Weather-Resistant Materials', description: 'Furniture designed to withstand outdoor conditions and environmental challenges' },
      { icon: 'Settings', title: 'Custom Designs', description: 'Tailored solutions cater to specific outdoor layouts and functional needs' },
      { icon: 'Zap', title: 'Innovative Functionality', description: 'Practical features enhance comfort, usability, and versatility in any outdoor setting' },
      { icon: 'Star', title: 'Premium Craftsmanship', description: 'High-quality construction ensures longevity, elegance, and aesthetic appeal' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our outdoor and specialty furniture service creates durable, visually appealing, and functional pieces for unique spaces, combining innovative designs with materials engineered for long-term performance.',
    scopeItems: [
      { icon: 'Clipboard', title: 'Needs Assessment', description: 'Detailed consultation identifies environmental conditions, space dimensions, and functional requirements for custom outdoor furniture.' },
      { icon: 'Palette', title: 'Design Development', description: 'Creative concepts align with aesthetics, usability, and specific client preferences for outdoor settings.' },
      { icon: 'Package', title: 'Material Selection', description: 'Weather-resistant and sustainable materials are chosen to ensure durability and long-lasting performance.' },
      { icon: 'Factory', title: 'Fabrication Process', description: 'Skilled manufacturing ensures precise construction, smooth finishes, and robust structural integrity.' },
      { icon: 'Wrench', title: 'Installation & Setup', description: 'Professional assembly guarantees correct placement, stability, and immediate functional readiness.' },
      { icon: 'BookOpen', title: 'Maintenance Guidance', description: 'Instructions for care and maintenance ensure furniture longevity and continued visual appeal.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Analysis & Concept Development', description: 'Understand client needs, environmental conditions, and design preferences for outdoor or specialty furniture.' },
      { icon: 'Palette', title: 'Design & Material Selection', description: 'Choose weather-resistant, durable materials and create 3D designs to visualize the final product.' },
      { icon: 'Factory', title: 'Manufacturing & Fabrication', description: 'Craft furniture with precision, ensuring durability, functionality, and aesthetic appeal suitable for outdoor or specialized use.' },
      { icon: 'Truck', title: 'Delivery & Installation', description: 'Coordinate transport, professional installation, and final adjustments for optimal performance and client satisfaction.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Outdoor & Specialty Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Garden Terrace Furniture", imageKey: 'projectImg1' },
      { id: 2, title: "Resort Outdoor Seating", imageKey: 'projectImg2' },
      { id: 3, title: "Poolside Furniture Collection", imageKey: 'projectImg3' },
      { id: 4, title: "Balcony Furniture Solutions", imageKey: 'projectImg4' },
      { id: 5, title: "Patio Dining Sets", imageKey: 'projectImg5' },
      { id: 6, title: "Specialty Garden Furniture", imageKey: 'projectImg6' },
      { id: 7, title: "Weather-Resistant Lounge Sets", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Transform Your Outdoor Space?',
    description: 'Create beautiful, durable outdoor environments with our specialty furniture solutions. Contact our outdoor specialists today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The outdoor furniture has withstood all weather conditions beautifully while maintaining its elegant appearance.", name: "Maria Garcia", role: "Resort Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/33.jpg" },
        { quote: "Their specialty furniture perfectly complements our unique outdoor space and garden design.", name: "Thomas Lee", role: "Landscape Architect", rating: 5, image: "https://randomuser.me/api/portraits/men/34.jpg" }
    ],
    summary: { count: '120+', label: 'Outdoor Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Outdoor & Specialty Furniture services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
