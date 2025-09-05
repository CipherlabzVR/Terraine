import { PageData } from '../../pages/SubServicePageLayout';

export const turnkeySupplySolutionsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Turnkey Supply</span> Solutions',
    tagline: 'Complete supply solutions from sourcing to delivery',
    description: 'Our turnkey supply solutions handle every step of material procurement, ensuring timely delivery, quality assurance, and seamless integration of resources for efficient and successful project execution.',
    backgroundImage: '/turnkey-hero.webp',
    uspItems: [
      { icon: 'CheckCircle', title: 'Complete Services', description: 'Handling sourcing, delivery, and setup consistently.' },
      { icon: 'Zap', title: 'Seamless Execution', description: 'Ensuring smooth project material supply effectively.' },
      { icon: 'ShieldCheck', title: 'Quality Assurance', description: 'High standards maintained throughout reliably.' },
      { icon: 'Users', title: 'Client Focused', description: 'Tailored solutions matching project requirements consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our turnkey supply services provide end to end procurement, delivery, and installation solutions for complete project readiness efficiently.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Project Requirement Analysis', description: 'Assess project scope to determine complete material and equipment requirements accurately.' },
      { icon: 'Users', title: 'Supplier Coordination', description: 'Manage sourcing and communication with multiple suppliers to ensure seamless supply consistently.' },
      { icon: 'Truck', title: 'Logistics and Delivery', description: 'Plan and execute transportation for timely delivery of all project materials efficiently.' },
      { icon: 'Settings', title: 'Installation Support', description: 'Provide technical guidance for proper installation and integration of supplied materials reliably.' },
      { icon: 'CheckCircle', title: 'Quality Verification', description: 'Inspect all materials and equipment for compliance with specifications and standards accurately.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain comprehensive records of sourcing, delivery, and installation for client reference effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Project Analysis & Planning', description: 'Assess complete project requirements and develop comprehensive supply chain strategy.' },
      { icon: 'Search', title: 'Multi-supplier Coordination', description: 'Source and coordinate with multiple suppliers to ensure complete material availability.' },
      { icon: 'Truck', title: 'Integrated Logistics', description: 'Manage transportation, customs, and delivery for all project materials efficiently.' },
      { icon: 'Settings', title: 'Installation & Commissioning', description: 'Provide installation support and ensure all materials are properly integrated and operational.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Turnkey Supply Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Complete Building Supply", imageKey: 'projectImg1' },
      { id: 2, title: "Industrial Plant Materials", imageKey: 'projectImg2' },
      { id: 3, title: "Infrastructure Supply", imageKey: 'projectImg3' },
      { id: 4, title: "Commercial Complex Materials", imageKey: 'projectImg4' },
      { id: 5, title: "Residential Development Supply", imageKey: 'projectImg5' },
      { id: 6, title: "Hospitality Project Materials", imageKey: 'projectImg6' },
      { id: 7, title: "Specialty Construction Supply", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready for Complete Supply Solutions?',
    description: 'Get end-to-end supply chain management for your entire project. Contact us for turnkey solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "Their turnkey supply solution handled everything from sourcing to installation. The project was completed on time and within budget.", name: "Nur Aisyah", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/8.jpg" },
      { quote: "The comprehensive approach to supply chain management eliminated all our procurement headaches. Professional service throughout.", name: "Ahmad Faizal", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '75+', label: 'Turnkey Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Turnkey Supply Solutions services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
