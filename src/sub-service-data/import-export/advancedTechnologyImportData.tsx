import { PageData } from '../../pages/SubServicePageLayout';

export const advancedTechnologyImportPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Import of Advanced</span> Technology & Tools',
    tagline: 'Bringing innovative tools and technology worldwide efficiently',
    description: 'Our import services deliver cutting edge construction technology and tools, ensuring advanced capabilities, enhanced project efficiency, and seamless integration into modern engineering and construction processes.',
    backgroundImage: '/tech-hero.webp',
    uspItems: [
      { icon: 'Zap', title: 'Cutting Edge Equipment', description: 'Access to latest construction tools consistently.' },
      { icon: 'ShieldCheck', title: 'Reliable Suppliers', description: 'Trusted sources ensuring quality effectively.' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'Fast and efficient import process reliably.' },
      { icon: 'Users', title: 'Expert Support', description: 'Guidance in selecting appropriate technology consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our import services deliver cutting edge construction technology and tools to enhance project efficiency, precision, and innovation effectively.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Identify specific advanced tools and technologies needed to optimize project performance accurately.' },
      { icon: 'Search', title: 'Supplier Sourcing', description: 'Locate reliable international suppliers providing certified and high-quality technology consistently.' },
      { icon: 'FileText', title: 'Customs and Compliance', description: 'Ensure all imported technologies meet legal and safety regulations for smooth clearance effectively.' },
      { icon: 'Truck', title: 'Logistics Planning', description: 'Plan shipping, handling, and delivery schedules to ensure timely arrival efficiently.' },
      { icon: 'Settings', title: 'Installation Guidance', description: 'Provide technical support for proper setup and integration of imported tools accurately.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain records of imported technology, shipping documents, and installation reports reliably.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Specification', description: 'Identify project or operational needs for advanced tools and technology, detailing specifications.' },
      { icon: 'Search', title: 'Supplier Research & Evaluation', description: 'Source international vendors, compare features, quality, and pricing to select the best options.' },
      { icon: 'FileText', title: 'Procurement & Compliance Management', description: 'Place orders, ensure documentation, and comply with import regulations and certifications.' },
      { icon: 'Settings', title: 'Shipping & Installation Support', description: 'Coordinate delivery, customs clearance, and provide guidance for proper installation or integration on-site.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Technology Import Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "3D Printing Equipment", imageKey: 'projectImg1' },
      { id: 2, title: "BIM Software Solutions", imageKey: 'projectImg2' },
      { id: 3, title: "Surveying Technology", imageKey: 'projectImg3' },
      { id: 4, title: "Construction Robotics", imageKey: 'projectImg4' },
      { id: 5, title: "Smart Building Systems", imageKey: 'projectImg5' },
      { id: 6, title: "Precision Tools Import", imageKey: 'projectImg6' },
      { id: 7, title: "Digital Twin Technology", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready for Advanced Technology?',
    description: 'Access cutting-edge construction technology and tools from global suppliers. Contact us for innovative import solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The advanced technology we imported through them has revolutionized our construction processes. The support during installation was exceptional.", name: "Fahad Al-Qahtani", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/4.jpg" },
      { quote: "Their expertise in technology imports helped us access tools that weren't available locally. The quality and performance exceeded expectations.", name: "Nasser Al-Harbi", role: "Project Director", rating: 5, image: "https://randomuser.me/api/portraits/men/5.jpg" }
    ],
    summary: { count: '200+', label: 'Technology Imports' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Advanced Technology Import services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
