// Suggested Filename: bestMaterialPriceData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const bestMaterialPricePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Best Material</span> Price',
    tagline: 'Securing high-quality materials at competitive rates.',
    description: 'Our best material price services identify cost-effective sourcing options, ensuring high quality, reliable materials while optimizing budget, reducing expenses, and maximizing project value for every construction requirement.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'CircleDollarSign', title: 'Competitive Pricing', description: 'Sourcing materials at optimal cost consistently.' },
      { icon: 'BadgeCheck', title: 'Value Optimization', description: 'Ensures best quality for budget effectively.' },
      { icon: 'Eye', title: 'Transparent Deals', description: 'Honest pricing without hidden charges reliably.' },
      { icon: 'ShoppingCart', title: 'Efficient Procurement', description: 'Quick sourcing for timely project execution consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our material price services ensure cost-effective procurement without compromising quality, optimizing project budgets efficiently.',
    scopeItems: [
      { icon: 'AreaChart', title: 'Market Analysis', description: 'Research current material market trends to identify competitive pricing for accurate budgeting consistently.' },
      { icon: 'Users', title: 'Supplier Comparison', description: 'Evaluate multiple suppliers to select the most cost-effective and reliable options efficiently.' },
      { icon: 'Handshake', title: 'Negotiation Support', description: 'Assist in negotiating favorable rates to maximize project value and reduce expenses reliably.' },
      { icon: 'PiggyBank', title: 'Budget Planning', description: 'Integrate material costs into project budgets ensuring financial control and transparency accurately.' },
      { icon: 'ShoppingCart', title: 'Procurement Optimization', description: 'Strategically plan purchases to balance cost, quality, and timely availability effectively.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain records of pricing, quotations, and purchase decisions for reference and accountability consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Assessment & Quantity Analysis', description: 'Evaluate project material needs, specifications, and quantities to determine cost-effective sourcing options.' },
      { icon: 'Search', title: 'Market Research & Vendor Comparison', description: 'Analyze suppliers, compare prices, quality, and delivery timelines to identify the best value.' },
      { icon: 'Handshake', title: 'Procurement Planning & Negotiation', description: 'Plan material purchases strategically, negotiate terms, and secure competitive pricing.' },
      { icon: 'CheckCircle', title: 'Purchase & Reporting', description: 'Execute orders, track costs, and provide detailed reports to ensure budget adherence and transparency.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Pricing Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Large Scale Construction Sourcing", imageKey: 'projectImg1' },
      { id: 2, title: "Residential Project Budgeting", imageKey: 'projectImg2' },
      { id: 3, "title": "Commercial Steel Procurement", "imageKey": "projectImg3" },
      { id: 4, title: "Bulk Cement Price Analysis", imageKey: 'projectImg4' },
      { id: 5, title: "Interior Fit-Out Material Costs", imageKey: 'projectImg5' },
      { id: 6, title: "HVAC Systems Sourcing", imageKey: 'projectImg6' },
      { id: 7, title: "Electrical Component Pricing", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Optimize Your Budget?',
    description: 'Get the best prices for high-quality materials without the hassle. Contact us for a procurement consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "This service is a game-changer. They significantly reduced our material costs on a major project, which allowed us to be more competitive and increase our profit margin.", name: "Ranjith Alwis", role: "Construction Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/79.jpg" },
        { quote: "The transparency and detailed reporting gave us complete confidence in our procurement. We knew we were getting the best value for our money every step of the way.", name: "Dilani Pathirana", role: "Project Director", rating: 5, image: "https://randomuser.me/api/portraits/women/80.jpg" }
    ],
    summary: { count: '300+', label: 'Procurements Optimized' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Best Material Price services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};