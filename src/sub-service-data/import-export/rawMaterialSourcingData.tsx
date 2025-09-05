import { PageData } from '../../pages/SubServicePageLayout';

export const rawMaterialSourcingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Raw Material</span> Sourcing',
    tagline: 'Efficient sourcing of quality raw construction materials',
    description: 'Our raw material sourcing services ensure reliable, cost effective, and high-quality materials, supporting timely procurement, optimized budgets, and successful execution of construction and engineering projects.',
    backgroundImage: '/raw-materials-hero.webp',
    uspItems: [
      { icon: 'ShieldCheck', title: 'Reliable Suppliers', description: 'Ensuring consistent high-quality materials.' },
      { icon: 'DollarSign', title: 'Cost-effective', description: 'Competitive pricing for optimal project budgets.' },
      { icon: 'Clock', title: 'Timely Procurement', description: 'Efficient sourcing for uninterrupted construction.' },
      { icon: 'Users', title: 'Expert Guidance', description: 'Assistance in selecting best raw materials consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our raw material sourcing services secure high-quality construction materials to meet project specifications, budget, and timeline efficiently.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Identify types and quantities of raw materials required for project execution accurately.' },
      { icon: 'Search', title: 'Supplier Identification', description: 'Locate reliable suppliers offering certified and high-quality raw materials consistently.' },
      { icon: 'TrendingUp', title: 'Cost Evaluation', description: 'Compare prices from multiple suppliers to ensure budget friendly procurement effectively.' },
      { icon: 'CheckCircle', title: 'Quality Verification', description: 'Inspect raw materials to confirm compliance with project standards and specifications reliably.' },
      { icon: 'Truck', title: 'Logistics Coordination', description: 'Plan transportation and delivery schedules to ensure timely arrival of materials efficiently.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed sourcing records, invoices, and supplier confirmations for reference accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Assessment & Specification', description: 'Determine raw material needs, quality standards, and project requirements for effective sourcing.' },
      { icon: 'Search', title: 'Supplier Research & Evaluation', description: 'Identify reliable domestic and international suppliers, comparing pricing, quality, and delivery timelines.' },
      { icon: 'FileText', title: 'Procurement & Contract Management', description: 'Negotiate terms, place orders, and manage contracts to ensure timely and cost-effective sourcing.' },
      { icon: 'CheckCircle', title: 'Delivery & Quality Verification', description: 'Track shipments, inspect materials upon arrival, and provide documentation for compliance and client assurance.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Raw Material Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Steel Raw Materials", imageKey: 'projectImg1' },
      { id: 2, title: "Cement Sourcing", imageKey: 'projectImg2' },
      { id: 3, title: "Aggregate Materials", imageKey: 'projectImg3' },
      { id: 4, title: "Timber Sourcing", imageKey: 'projectImg4' },
      { id: 5, title: "Glass Raw Materials", imageKey: 'projectImg5' },
      { id: 6, title: "Aluminum Raw Materials", imageKey: 'projectImg6' },
      { id: 7, title: "Specialty Materials", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Need Quality Raw Materials?',
    description: 'Access reliable, cost-effective raw materials from trusted suppliers. Contact us for efficient sourcing solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "Their raw material sourcing services helped us maintain consistent quality while reducing costs significantly.", name: "Aishath Nazima", role: "Project Coordinator", rating: 5, image: "https://randomuser.me/api/portraits/women/4.jpg" },
      { quote: "The quality and reliability of sourced materials exceeded our expectations. Their expertise in material selection was invaluable.", name: "Ibrahim Shifaz", role: "Operations Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" }
    ],
    summary: { count: '600+', label: 'Sourcing Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Raw Material Sourcing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
