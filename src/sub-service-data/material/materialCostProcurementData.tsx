// Suggested Filename: materialCostProcurementData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const materialCostProcurementPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Material Cost Analysis</span> & Procurement Support',
    tagline: 'Optimizing costs with strategic material procurement solutions',
    description:
      'Our material cost analysis and procurement support services ensure efficient sourcing, budget optimization, and high-quality material selection, delivering cost-effective and successful project execution.',
    backgroundImage: '/con-hero.jpg',
    uspItems: [
      { icon: 'CircleDollarSign', title: 'Budget Optimization', description: 'Reduces material expenses consistently.' },
      { icon: 'ShoppingCart',     title: 'Strategic Procurement', description: 'Ensures timely material sourcing effectively.' },
      { icon: 'ClipboardList',    title: 'Transparent Analysis', description: 'Clear cost insights for informed decisions reliably.' },
      { icon: 'Gauge',            title: 'Efficiency Boost', description: 'Streamlines procurement processes consistently.' }
    ]
  },

  scope: {
    title: 'Comprehensive Project Scope',
    description:
      'Our material cost analysis and procurement support ensure budget optimization, timely sourcing, and quality materials for construction projects efficiently.',
    scopeItems: [
      {
        icon: 'Calculator',
        title: 'Cost Evaluation',
        description: 'Analyze material prices to identify cost-effective solutions while maintaining quality and performance accurately.'
      },
      {
        icon: 'Users',
        title: 'Supplier Assessment',
        description: 'Evaluate potential suppliers for reliability, pricing, and delivery timelines consistently.'
      },
      {
        icon: 'CalendarClock',
        title: 'Procurement Planning',
        description: 'Develop strategic procurement schedules to ensure timely material availability efficiently.'
      },
      {
        icon: 'Handshake',
        title: 'Negotiation Support',
        description: 'Assist in supplier negotiations to achieve optimal pricing and contract terms reliably.'
      },
      {
        icon: 'Wallet',
        title: 'Budget Integration',
        description: 'Align material procurement costs with project budgets for effective financial management accurately.'
      },
      {
        icon: 'FileText',
        title: 'Documentation and Reporting',
        description: 'Maintain comprehensive records of cost analysis, supplier evaluations, and procurement decisions efficiently.'
      }
    ],
    imageKey: 'scopeImage'
  },

  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      {
        icon: 'ClipboardList',
        title: 'Requirement Assessment & Quantity Calculation',
        description: 'Analyze project material needs, specifications, and quantities to plan procurement efficiently.'
      },
      {
        icon: 'BarChart',
        title: 'Cost Analysis & Vendor Evaluation',
        description: 'Compare supplier prices, delivery schedules, and quality to identify cost-effective options.'
      },
      {
        icon: 'CalendarCheck2',
        title: 'Procurement Planning & Negotiation',
        description: 'Develop purchase strategies, negotiate terms, and ensure timely material acquisition within budget.'
      },
      {
        icon: 'CheckCircle',
        title: 'Reporting & Documentation',
        description: 'Provide detailed cost reports, procurement records, and recommendations for transparency and planning.'
      }
    ],
    backgroundImage: '/blueprint-bg.png'
  },

  projects: {
    title: 'Featured Cost & Procurement Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: 'Bulk Steel Procurement Optimization', imageKey: 'projectImg1' },
      { id: 2, title: 'Supplier Benchmark & Shortlisting', imageKey: 'projectImg2' },
      { id: 3, title: 'Cement & Aggregates Cost Dashboard', imageKey: 'projectImg3' },
      { id: 4, title: 'Just-in-Time Delivery Scheduling', imageKey: 'projectImg4' },
      { id: 5, title: 'Framework Agreements & Negotiations', imageKey: 'projectImg5' },
      { id: 6, title: 'Annual Budget & Spend Alignment', imageKey: 'projectImg6' },
      { id: 7, title: 'Compliance & Documentation Audits', imageKey: 'projectImg7' }
    ]
  },

  cta: {
    title: 'Ready to Cut Costs & De-Risk Procurement?',
    description: 'Get strategic cost analysis and end-to-end procurement support for on-time, on-budget projects.'
  },

  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      {
        quote:
          'Their supplier benchmarking and negotiation support reduced our material bill by 12% without affecting quality.',
        name: 'Dilshan Abeysinghe',
        role: 'Procurement Lead',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/72.jpg'
      },
      {
        quote:
          'The cost evaluation reports were clear and actionable. Our deliveries became more predictable with their planning.',
        name: 'Rashmi Jayasuriya',
        role: 'Project Manager',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/66.jpg'
      }
    ],
    summary: { count: '200+', label: 'Procurement Plans Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },

  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for Material Cost Analysis & Procurement Support.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
