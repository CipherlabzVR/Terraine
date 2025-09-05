import { PageData } from '../../pages/SubServicePageLayout';

export const furnitureManufacturingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Furniture Manufacturing</span> & Fabrication',
    tagline: 'Precision-built furniture crafted for strength and style',
    description: 'Our furniture manufacturing and fabrication services deliver high-quality, durable, and beautifully finished pieces, blending advanced technology with skilled craftsmanship to meet diverse client needs across residential, commercial, and institutional spaces.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Zap', title: 'Advanced Technology', description: 'Modern machinery ensures flawless precision and superior-quality finishes' },
      { icon: 'Hammer', title: 'Skilled Craftsmanship', description: 'Expert artisans combine innovation with traditional techniques for lasting excellence' },
      { icon: 'Settings', title: 'Custom Solutions', description: 'Tailored production matches client requirements, styles, and unique design expectations' },
      { icon: 'Shield', title: 'Quality Control', description: 'Rigorous inspection guarantees consistency, durability, and premium-grade results' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our furniture manufacturing and fabrication service transforms concepts into reality, producing reliable, stylish, and functional pieces that blend durability with design excellence for long-term satisfaction.',
    scopeItems: [
      { icon: 'Clipboard', title: 'Requirement Assessment', description: 'Detailed review of client needs ensures tailored fabrication aligned with desired design and usage.' },
      { icon: 'FileText', title: 'Technical Drawings', description: 'Accurate blueprints and 3D models guide precise production with minimal error and enhanced clarity.' },
      { icon: 'Package', title: 'Material Procurement', description: 'Selection of premium wood, metals, and finishes ensures durability, style, and long-lasting performance.' },
      { icon: 'Factory', title: 'Fabrication Process', description: 'Advanced machinery and skilled techniques deliver accurate shapes, flawless assembly, and detailed finishes.' },
      { icon: 'CheckCircle', title: 'Quality Testing', description: 'Rigorous inspections check strength, stability, and durability, ensuring reliable furniture for every client.' },
      { icon: 'Truck', title: 'Final Delivery', description: 'Timely logistics and careful handling guarantee safe arrival and flawless installation at designated location.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Design Finalization & Material Selection', description: 'Confirm approved designs, select quality materials, and plan manufacturing processes for optimal results.' },
      { icon: 'Factory', title: 'Production & Fabrication', description: 'Craft furniture components using advanced machinery, skilled craftsmanship, and precision techniques.' },
      { icon: 'CheckCircle', title: 'Quality Control & Inspection', description: 'Inspect finished pieces for accuracy, durability, and finish, ensuring they meet design specifications.' },
      { icon: 'Truck', title: 'Packaging & Delivery', description: 'Safely package furniture items and coordinate timely delivery to client sites with installation support if needed.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Manufacturing Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Premium Office Furniture Production", imageKey: 'projectImg1' },
      { id: 2, title: "Custom Kitchen Cabinet Manufacturing", imageKey: 'projectImg2' },
      { id: 3, title: "Luxury Bedroom Furniture Fabrication", imageKey: 'projectImg3' },
      { id: 4, title: "Commercial Furniture Manufacturing", imageKey: 'projectImg4' },
      { id: 5, title: "Specialty Wood Furniture Production", imageKey: 'projectImg5' },
      { id: 6, title: "Metal Furniture Fabrication", imageKey: 'projectImg6' },
      { id: 7, title: "Institutional Furniture Manufacturing", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Quality Manufacturing?',
    description: 'Experience precision craftsmanship and superior quality in furniture manufacturing. Contact our production team today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The manufacturing quality exceeded our expectations. Every piece is perfectly crafted and durable.", name: "Lisa Anderson", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/27.jpg" },
        { quote: "Their fabrication process delivers consistent quality and beautiful finishes on every project.", name: "Robert Kim", role: "Interior Designer", rating: 5, image: "https://randomuser.me/api/portraits/men/28.jpg" }
    ],
    summary: { count: '500+', label: 'Pieces Manufactured' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Furniture Manufacturing & Fabrication services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
