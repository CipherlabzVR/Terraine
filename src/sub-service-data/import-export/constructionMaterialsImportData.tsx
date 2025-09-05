import { PageData } from '../../pages/SubServicePageLayout';

export const constructionMaterialsImportPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Import of Construction</span> Materials & Equipment',
    tagline: 'Delivering high-quality construction materials globally efficiently',
    description: 'Our import services provide reliable access to premium construction materials and equipment, ensuring timely delivery, quality assurance, and seamless integration into every building project worldwide.',
    backgroundImage: '/import-hero.webp',
    uspItems: [
      { icon: 'ShieldCheck', title: 'Reliable Sourcing', description: 'High-quality materials delivered consistently.' },
      { icon: 'DollarSign', title: 'Cost-effective', description: 'Competitive pricing for project savings effectively.' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'On schedule shipments reliably.' },
      { icon: 'Users', title: 'Expert Guidance', description: 'Assistance in selecting suitable materials consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our import services ensure timely delivery of high-quality construction materials and equipment for seamless project execution efficiently.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Identify project material and equipment needs to determine specifications and quantities accurately.' },
      { icon: 'Search', title: 'Supplier Sourcing', description: 'Locate reliable international suppliers providing quality products that meet project standards consistently.' },
      { icon: 'Truck', title: 'Logistics Planning', description: 'Plan shipping, customs, and transportation to ensure timely delivery efficiently.' },
      { icon: 'CheckCircle', title: 'Quality Verification', description: 'Inspect imported materials and equipment to ensure compliance with specifications and standards accurately.' },
      { icon: 'TrendingUp', title: 'Cost Optimization', description: 'Evaluate pricing and negotiate with suppliers to achieve budget efficiency effectively.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain comprehensive import records, invoices, and delivery documents for compliance and reference reliably.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Specification', description: 'Assess project needs and prepare detailed specifications for construction materials and equipment.' },
      { icon: 'Search', title: 'Supplier Identification & Evaluation', description: 'Research international suppliers, compare quality, pricing, and delivery timelines for optimal selection.' },
      { icon: 'FileText', title: 'Procurement & Documentation', description: 'Place orders, manage contracts, and ensure all import documentation and compliance requirements are met.' },
      { icon: 'Truck', title: 'Shipping & Delivery Coordination', description: 'Track shipments, handle customs clearance, and coordinate delivery to project sites efficiently.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Import Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Steel Structure Materials", imageKey: 'projectImg1' },
      { id: 2, title: "Concrete Equipment Import", imageKey: 'projectImg2' },
      { id: 3, title: "Construction Machinery", imageKey: 'projectImg3' },
      { id: 4, title: "Safety Equipment Supply", imageKey: 'projectImg4' },
      { id: 5, title: "Electrical Materials", imageKey: 'projectImg5' },
      { id: 6, title: "Plumbing Equipment", imageKey: 'projectImg6' },
      { id: 7, title: "HVAC Systems Import", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready to Import Quality Materials?',
    description: 'Access premium construction materials and equipment from global suppliers. Contact us for reliable import solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The quality of imported construction materials exceeded our expectations. The timely delivery and professional handling made our project run smoothly.", name: "Ahmed Al-Harthy", role: "Civil Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/1.jpg" },
      { quote: "Their import services provided us with access to premium equipment that wasn't available locally. The cost savings were significant.", name: "Fatima Al-Saidi", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/1.jpg" }
    ],
    summary: { count: '500+', label: 'Import Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Construction Materials Import services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
