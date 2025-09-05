import { PageData } from '../../pages/SubServicePageLayout';

export const logisticsSupplyChainPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Logistics & Supply</span> Chain Services',
    tagline: 'Streamlined logistics for timely material delivery worldwide',
    description: 'Our logistics and supply chain services ensure efficient transportation, inventory management, and timely delivery of materials, optimizing project schedules and minimizing operational disruptions for every construction project.',
    backgroundImage: '/logistics-hero.webp',
    uspItems: [
      { icon: 'Truck', title: 'Efficient Operations', description: 'Smooth movement of materials consistently.' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'On schedule shipments for projects effectively.' },
      { icon: 'TrendingDown', title: 'Cost Optimization', description: 'Reduces transportation and storage expenses reliably.' },
      { icon: 'Users', title: 'Expert Management', description: 'Professional handling of supply chain consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our logistics and supply chain services ensure seamless delivery, inventory management, and coordination for construction projects efficiently.',
    scopeItems: [
      { icon: 'Package', title: 'Inventory Management', description: 'Monitor material stocks and track usage to maintain optimal inventory levels accurately.' },
      { icon: 'Truck', title: 'Transportation Planning', description: 'Organize transportation routes and schedules for timely delivery to project sites efficiently.' },
      { icon: 'Users', title: 'Supplier Coordination', description: 'Collaborate with suppliers to synchronize deliveries and avoid project delays reliably.' },
      { icon: 'Eye', title: 'Material Tracking', description: 'Implement tracking systems to monitor shipment progress and location effectively.' },
      { icon: 'TrendingDown', title: 'Cost Optimization', description: 'Plan logistics strategies to reduce transportation and storage expenses accurately.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain comprehensive records of shipments, deliveries, and supply chain activities efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Planning', description: 'Assess project logistics needs, delivery schedules, and supply chain requirements for efficient operations.' },
      { icon: 'Truck', title: 'Transportation & Vendor Coordination', description: 'Select reliable transport providers, coordinate schedules, and manage vendor communication for smooth deliveries.' },
      { icon: 'Eye', title: 'Monitoring & Tracking', description: 'Track shipments, manage inventory, and ensure timely delivery of materials and equipment.' },
      { icon: 'FileText', title: 'Reporting & Optimization', description: 'Provide detailed logistics reports, analyze supply chain performance, and recommend improvements for efficiency and cost reduction.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Logistics Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Multi-site Material Delivery", imageKey: 'projectImg1' },
      { id: 2, title: "International Shipping", imageKey: 'projectImg2' },
      { id: 3, title: "Warehouse Management", imageKey: 'projectImg3' },
      { id: 4, title: "Just-in-time Delivery", imageKey: 'projectImg4' },
      { id: 5, title: "Cross-border Logistics", imageKey: 'projectImg5' },
      { id: 6, title: "Inventory Optimization", imageKey: 'projectImg6' },
      { id: 7, title: "Supply Chain Integration", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Optimize Your Supply Chain?',
    description: 'Streamline your logistics and supply chain operations. Contact us for efficient delivery solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "Their logistics services have transformed our supply chain efficiency. The cost savings and timely deliveries have been remarkable.", name: "Jessica Martin", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/5.jpg" },
      { quote: "The professional handling of our logistics needs has eliminated delays and reduced our operational costs significantly.", name: "Liam O'Connor", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/9.jpg" }
    ],
    summary: { count: '800+', label: 'Logistics Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Logistics & Supply Chain Services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
