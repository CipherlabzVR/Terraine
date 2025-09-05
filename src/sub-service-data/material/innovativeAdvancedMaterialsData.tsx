// Suggested Filename: innovativeAdvancedMaterialsData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const innovativeAdvancedMaterialsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Innovative</span> & Advanced Materials',
    tagline: 'Implementing cutting edge materials for superior projects',
    description:
      'Our innovative and advanced material services introduce modern, high-performance solutions, enhancing durability, efficiency, and aesthetics while supporting sustainable and technically optimized construction outcomes.',
    backgroundImage: '/con-hero.jpg',
    uspItems: [
      { icon: 'Cpu',              title: 'Cutting Edge Solutions', description: 'Modern materials enhancing project performance consistently.' },
      { icon: 'Lightbulb',        title: 'Expert Recommendations', description: 'Professional guidance for material selection effectively.' },
      { icon: 'ShieldCheck',      title: 'Durable Performance',    description: 'Ensures long-lasting structural reliability reliably.' },
      { icon: 'Leaf',             title: 'Sustainable Options',    description: 'Eco-friendly choices supporting responsible construction consistently.' }
    ]
  },

  scope: {
    title: 'Comprehensive Project Scope',
    description:
      'Our innovative material services explore advanced options to enhance construction performance, sustainability, and durability effectively.',
    scopeItems: [
      {
        icon: 'Search',
        title: 'Material Research',
        description: 'Investigate cutting edge materials suitable for specific structural, architectural, or interior applications accurately.'
      },
      {
        icon: 'FlaskConical',
        title: 'Performance Testing',
        description: 'Conduct rigorous tests to validate the properties and reliability of advanced materials consistently.'
      },
      {
        icon: 'Users',
        title: 'Supplier Assessment',
        description: 'Identify suppliers providing certified and high-quality innovative materials efficiently.'
      },
      {
        icon: 'Wrench',
        title: 'Application Guidance',
        description: 'Advise on proper usage and integration of advanced materials for optimal project results effectively.'
      },
      {
        icon: 'CircleDollarSign',
        title: 'Cost Benefit Analysis',
        description: 'Evaluate financial implications of using innovative materials to balance budget and performance accurately.'
      },
      {
        icon: 'FileText',
        title: 'Documentation and Reporting',
        description: 'Maintain records of material research, testing results, and recommendations for project reference reliably.'
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
        title: 'Project Assessment & Innovation Goals',
        description: 'Understand client requirements and objectives for using advanced or cutting-edge materials.'
      },
      {
        icon: 'Sparkles',
        title: 'Research & Material Shortlisting',
        description: 'Identify innovative materials, composites, or technologies suitable for project performance and sustainability.'
      },
      {
        icon: 'Beaker',
        title: 'Testing & Feasibility Evaluation',
        description: 'Conduct lab tests and simulations to verify material performance, durability, and compatibility.'
      },
      {
        icon: 'CheckCircle',
        title: 'Recommendation & Implementation Support',
        description: 'Provide guidance for integration, application, and documentation to maximize benefits of advanced materials.'
      }
    ],
    backgroundImage: '/blueprint-bg.png'
  },

  projects: {
    title: 'Featured Innovative Material Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: 'Ultra-High-Performance Concrete (UHPC) Facades', imageKey: 'projectImg1' },
      { id: 2, title: 'Self-Healing Concrete Trials', imageKey: 'projectImg2' },
      { id: 3, title: 'Aerogel-Insulated Envelope Systems', imageKey: 'projectImg3' },
      { id: 4, title: 'Phase-Change Material (PCM) Thermal Walls', imageKey: 'projectImg4' },
      { id: 5, title: 'Bio-Based & Recycled Composites', imageKey: 'projectImg5' },
      { id: 6, title: 'Photocatalytic & Anti-Microbial Coatings', imageKey: 'projectImg6' },
      { id: 7, title: 'Transparent Aluminum & Smart Glazing Concepts', imageKey: 'projectImg7' }
    ]
  },

  cta: {
    title: 'Ready to Build with Advanced Materials?',
    description: 'Unlock performance, durability, and sustainability with cutting-edge material solutions. Talk to us today.'
  },

  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      {
        quote:
          'Their shortlist and testing plan helped us pick an innovative facade system that boosted thermal performance and aesthetics.',
        name: 'Ishanka Peris',
        role: 'Design Manager',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/73.jpg'
      },
      {
        quote:
          'Clear feasibility analysis and implementation guidance—our team integrated new materials without delays.',
        name: 'Chaminda Fonseka',
        role: 'Project Director',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/73.jpg'
      }
    ],
    summary: { count: '150+', label: 'Innovative Specs Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },

  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for Innovative & Advanced Material services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
