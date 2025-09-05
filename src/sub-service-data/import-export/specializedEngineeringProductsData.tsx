import { PageData } from '../../pages/SubServicePageLayout';

export const specializedEngineeringProductsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Specialized Engineering</span> Products',
    tagline: 'Supplying advanced products for specialized engineering solutions',
    description: 'Our specialized engineering product services provide high quality, innovative materials and components, ensuring precision, reliability, and optimal performance for complex construction and engineering projects.',
    backgroundImage: '/specialized-hero.webp',
    uspItems: [
      { icon: 'ShieldCheck', title: 'High-quality', description: 'Durable and reliable engineering products consistently.' },
      { icon: 'Zap', title: 'Innovative Solutions', description: 'Advanced products for modern construction effectively.' },
      { icon: 'Users', title: 'Expert Selection', description: 'Guidance for choosing the right products reliably.' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'Efficient supply for uninterrupted project execution consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our specialized engineering product services provide high quality, certified, and project specific materials for efficient and reliable construction applications.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Identify specialized products needed for specific project functions and technical requirements accurately.' },
      { icon: 'Search', title: 'Supplier Sourcing', description: 'Locate certified suppliers offering high-quality and compliant engineering products consistently.' },
      { icon: 'CheckCircle', title: 'Quality Verification', description: 'Inspect specialized products to ensure performance, safety, and compliance standards reliably.' },
      { icon: 'TrendingUp', title: 'Cost Evaluation', description: 'Assess product pricing to balance budget efficiency with quality and reliability effectively.' },
      { icon: 'Truck', title: 'Logistics Coordination', description: 'Plan and manage safe delivery of specialized products to project sites efficiently.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed records of product specifications, tests, and supplier details accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Assessment & Specification', description: 'Identify specialized engineering products needed for projects, including technical specifications and compliance standards.' },
      { icon: 'Search', title: 'Supplier Research & Evaluation', description: 'Source vendors, compare product quality, certifications, and pricing for optimal selection.' },
      { icon: 'FileText', title: 'Procurement & Documentation', description: 'Place orders, manage contracts, and ensure regulatory and quality compliance for all products.' },
      { icon: 'Truck', title: 'Delivery & Implementation Support', description: 'Coordinate shipment, customs clearance, and provide guidance for installation or integration on-site.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Specialized Engineering Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Precision Components", imageKey: 'projectImg1' },
      { id: 2, title: "Specialty Fasteners", imageKey: 'projectImg2' },
      { id: 3, title: "Advanced Sensors", imageKey: 'projectImg3' },
      { id: 4, title: "Control Systems", imageKey: 'projectImg4' },
      { id: 5, title: "Specialty Coatings", imageKey: 'projectImg5' },
      { id: 6, title: "Composite Materials", imageKey: 'projectImg6' },
      { id: 7, title: "Precision Tools", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Need Specialized Products?',
    description: 'Access high-quality specialized engineering products for your unique project requirements. Contact us for precision solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The specialized engineering products they supplied met our exact specifications and performed flawlessly in our complex project.", name: "Emma Wilson", role: "Project Coordinator", rating: 5, image: "https://randomuser.me/api/portraits/women/6.jpg" },
      { quote: "Their expertise in specialized products helped us find solutions that weren't available through standard suppliers.", name: "James McAllister", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/10.jpg" }
    ],
    summary: { count: '150+', label: 'Specialized Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Specialized Engineering Products services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
