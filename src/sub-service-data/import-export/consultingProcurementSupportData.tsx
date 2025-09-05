import { PageData } from '../../pages/SubServicePageLayout';

export const consultingProcurementSupportPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Consulting & Procurement</span> Support',
    tagline: 'Expert guidance for efficient material sourcing globally',
    description: 'Our consulting and procurement support services provide strategic advice, market insights, and sourcing solutions, ensuring high quality, cost-effective materials and smooth procurement for every construction project.',
    backgroundImage: '/consulting-hero.webp',
    uspItems: [
      { icon: 'Users', title: 'Expert Advice', description: 'Professional guidance for material and equipment selection consistently.' },
      { icon: 'Zap', title: 'Efficient Procurement', description: 'Streamlined sourcing for project timelines effectively.' },
      { icon: 'TrendingUp', title: 'Cost Optimization', description: 'Maximizing value while minimizing expenses reliably.' },
      { icon: 'ShieldCheck', title: 'Reliable Support', description: 'Assistance throughout procurement process consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our consulting and procurement support services guide material selection, vendor negotiation, and sourcing strategies for optimized project outcomes effectively.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Assessment', description: 'Analyze project needs to determine appropriate materials, equipment, and vendor specifications accurately.' },
      { icon: 'Search', title: 'Supplier Evaluation', description: 'Identify and assess reliable suppliers for quality, cost efficiency, and delivery performance consistently.' },
      { icon: 'TrendingUp', title: 'Procurement Strategy', description: 'Develop procurement plans to streamline sourcing, reduce costs, and ensure timely material availability effectively.' },
      { icon: 'Handshake', title: 'Contract Negotiation', description: 'Assist in negotiating contracts to secure favorable terms and maximize project value reliably.' },
      { icon: 'CheckCircle', title: 'Quality Assurance', description: 'Monitor vendor performance and verify delivered materials meet project specifications accurately.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed procurement records, approvals, and contracts for compliance and reference efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Planning', description: 'Understand client needs, project scope, and procurement objectives to develop an effective strategy.' },
      { icon: 'Search', title: 'Supplier Identification & Evaluation', description: 'Research vendors, compare pricing, quality, and delivery options to optimize procurement decisions.' },
      { icon: 'Handshake', title: 'Procurement Guidance & Negotiation', description: 'Advise on purchase strategies, contract terms, and negotiation to secure the best deals.' },
      { icon: 'FileText', title: 'Reporting & Implementation Support', description: 'Provide detailed procurement reports, track orders, and ensure seamless execution of supply processes.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Consulting Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Strategic Sourcing", imageKey: 'projectImg1' },
      { id: 2, title: "Vendor Management", imageKey: 'projectImg2' },
      { id: 3, title: "Cost Optimization", imageKey: 'projectImg3' },
      { id: 4, title: "Supply Chain Analysis", imageKey: 'projectImg4' },
      { id: 5, title: "Contract Negotiation", imageKey: 'projectImg5' },
      { id: 6, title: "Quality Assurance", imageKey: 'projectImg6' },
      { id: 7, title: "Procurement Strategy", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Need Procurement Expertise?',
    description: 'Get expert guidance for efficient material sourcing and procurement. Contact us for strategic consulting solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "Their procurement consulting helped us reduce costs by 20% while maintaining quality standards. Their expertise was invaluable.", name: "Hans Müller", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
      { quote: "The strategic guidance they provided transformed our procurement process and improved our supplier relationships significantly.", name: "Claudia Schneider", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '100+', label: 'Consulting Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Consulting & Procurement Support services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
