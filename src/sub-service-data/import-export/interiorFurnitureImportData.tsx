import { PageData } from '../../pages/SubServicePageLayout';

export const interiorFurnitureImportPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Interior & Furniture</span> Imports',
    tagline: 'Premium imported furniture enhancing interiors and spaces',
    description: 'Our interior and furniture import services provide high quality, stylish, and durable pieces, transforming residential and commercial spaces with elegance, functionality, and modern design aesthetics.',
    backgroundImage: '/furniture-hero.webp',
    uspItems: [
      { icon: 'Star', title: 'Premium Selection', description: 'High-quality furniture and interiors consistently.' },
      { icon: 'Globe', title: 'Global Sourcing', description: 'Access to international products effectively.' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'Ensures prompt shipment reliably.' },
      { icon: 'Palette', title: 'Customized Solutions', description: 'Tailored imports matching client preferences consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our interior and furniture import services provide stylish, high-quality products for residential, commercial, and hospitality projects efficiently.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Determine client needs and specifications for furniture and interior items accurately.' },
      { icon: 'Search', title: 'Supplier Sourcing', description: 'Identify international suppliers offering quality, durable, and stylish furniture consistently.' },
      { icon: 'FileText', title: 'Customs and Compliance', description: 'Ensure imported furniture meets legal regulations and safety standards effectively.' },
      { icon: 'Truck', title: 'Logistics Planning', description: 'Plan shipping and handling to deliver furniture safely and on schedule reliably.' },
      { icon: 'Settings', title: 'Installation Support', description: 'Provide guidance for proper placement and assembly of imported furniture accurately.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain import records, invoices, and delivery confirmations for client reference efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Specification', description: 'Identify furniture and interior product needs, dimensions, styles, and quality standards for the project.' },
      { icon: 'Search', title: 'Supplier Research & Selection', description: 'Evaluate international vendors, compare product quality, design, pricing, and delivery schedules.' },
      { icon: 'FileText', title: 'Procurement & Compliance Management', description: 'Place orders, handle import documentation, and ensure adherence to regulatory requirements.' },
      { icon: 'Truck', title: 'Shipping & Delivery Coordination', description: 'Track shipments, manage customs clearance, and coordinate on-site delivery and installation efficiently.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Furniture Import Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Luxury Hotel Furniture", imageKey: 'projectImg1' },
      { id: 2, title: "Office Interior Imports", imageKey: 'projectImg2' },
      { id: 3, title: "Residential Furniture", imageKey: 'projectImg3' },
      { id: 4, title: "Restaurant Furnishings", imageKey: 'projectImg4' },
      { id: 5, title: "Retail Store Interiors", imageKey: 'projectImg5' },
      { id: 6, title: "Custom Furniture Import", imageKey: 'projectImg6' },
      { id: 7, title: "Designer Furniture Supply", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Transform Your Space?',
    description: 'Access premium imported furniture and interior materials. Contact us for elegant design solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The quality and design of imported furniture exceeded our expectations. The installation support was professional and efficient.", name: "Emily Tan", role: "Project Engineer", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" },
      { quote: "Their furniture import services helped us create stunning interiors that perfectly matched our design vision.", name: "David Ong", role: "Construction Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/7.jpg" }
    ],
    summary: { count: '250+', label: 'Furniture Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Interior & Furniture Import services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
