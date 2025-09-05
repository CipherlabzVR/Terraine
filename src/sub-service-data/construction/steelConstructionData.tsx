import { PageData } from '../../pages/SubServicePageLayout';

export const steelConstructionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Steel</span> Construction',
    tagline: 'Precision engineered strong durable steel structures',
    description: 'Our steel construction services provide robust, efficient, and high-quality steel frameworks, ensuring structural integrity, long term durability, and seamless integration for every building project',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Building', title: 'Strong Frameworks', description: 'Durable steel structures built for long-lasting performance consistently' },
      { icon: 'Scaling', title: 'Precision Engineering', description: 'Accurate designs ensuring structural stability effectively' },
      { icon: 'Zap', title: 'Fast Execution', description: 'Efficient construction reducing project timelines reliably' },
      { icon: 'ShieldCheck', title: 'Safety Compliance', description: 'Adhering to building codes and safety standards' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our steel construction services focus on strength precision and durability delivering innovative structures with unmatched reliability and performance',
    scopeItems: [
      { icon: 'Package', title: 'Material Procurement and Fabrication', description: 'Source high grade steel and fabricate components with precision ensuring strength accuracy and compliance with specifications' },
      { icon: 'Calculator', title: 'Structural Design and Analysis', description: 'Create detailed structural models and perform analysis ensuring stability efficiency and compliance with engineering standards' },
      { icon: 'Glasses', title: 'Welding and Connections', description: 'Execute advanced welding techniques and secure bolted connections ensuring durability safety and long-lasting structural integrity' },
      { icon: 'HardHat', title: 'Erection and Assembly', description: 'Install steel frames beams and trusses on site ensuring precise alignment stability and construction efficiency' },
      { icon: 'Paintbrush', title: 'Surface Treatment and Protection', description: 'Apply coatings fireproofing and corrosion protection ensuring steel structures remain durable under diverse environmental conditions' },
      { icon: 'ClipboardCheck', title: 'Inspection and Quality Control', description: 'Conduct thorough inspections and non-destructive tests ensuring steel construction meets safety quality and design requirements' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Design & Structural Planning', description: 'Develop steel structure designs, calculate loads, and select suitable grades and profiles for strength and durability' },
      { icon: 'Factory', title: 'Fabrication & Assembly', description: 'Manufacture steel components in workshops, ensuring precision cutting, welding, and preassembly for efficient on-site installation' },
      { icon: 'Construction', title: 'Erection & Installation', description: 'Transport and erect steel structures on-site, aligning components accurately and securing joints for stability' },
      { icon: 'CheckCircle', title: 'Inspection & Finalization', description: 'Conduct structural inspections, apply protective coatings, and ensure compliance with safety standards and project specifications' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Steel Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial High-Rise Frame", imageKey: 'projectImg1' },
      { id: 2, title: "Industrial Warehouse Structure", imageKey: 'projectImg2' },
      { id: 3, "title": "Long-Span Steel Bridge", "imageKey": "projectImg3" },
      { id: 4, title: "Mezzanine Floor Installation", imageKey: 'projectImg4' },
      { id: 5, title: "Custom Steel Fabrication", imageKey: 'projectImg5' },
      { id: 6, title: "Architectural Steel Beams", imageKey: 'projectImg6' },
      { id: 7, title: "Seismic Bracing System", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build with Steel?',
    description: 'Leverage the strength, durability, and speed of steel for your next construction project Contact our experts to get started'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The precision of the steel fabrication and the speed of erection were remarkable Our project was completed ahead of schedule thanks to their efficient process", name: "John Smith", role: "CEO, Innovate Inc", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" },
        { quote: "Their team's expertise in structural steel design gave us a robust and cost-effective framework for our new facility The quality of work is outstanding", name: "Samantha P", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ],
    summary: { count: '100+', label: 'Steel Structures Erected' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Steel Construction services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};