// Suggested Filename: polymerCompositeConsultancyData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const polymerCompositeConsultancyPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Polymer, Plastic & Composite</span> Material Services',
    tagline: 'Advanced polymer and composite solutions for construction',
    description:
      'Our polymer, plastic, and composite material services offer innovative, durable, and efficient solutions, enhancing structural performance, reducing costs, and supporting modern construction needs with reliable materials.',
    backgroundImage: '/con-hero.jpg',
    uspItems: [
      { icon: 'FlaskConical', title: 'Innovative Materials', description: 'Advanced polymers and composites for modern construction consistently.' },
      { icon: 'ShieldCheck',  title: 'Durable Performance', description: 'Ensures long-lasting material reliability effectively.' },
      { icon: 'Layers',       title: 'Expert Selection',    description: 'Tailored advice for project requirements reliably.' },
      { icon: 'CircleDollarSign', title: 'Cost-effective',  description: 'Maximizes value while minimizing expenses consistently.' }
    ]
  },

  scope: {
    title: 'Comprehensive Project Scope',
    description:
      'Our polymer, plastic, and composite material services ensure selection, testing, and application for high-performance and durability efficiently.',
    scopeItems: [
      {
        icon: 'Layers',
        title: 'Material Selection',
        description: 'Identify suitable polymer and composite materials based on strength, durability, and project requirements accurately.'
      },
      {
        icon: 'FlaskConical',
        title: 'Testing and Quality Assurance',
        description: 'Conduct mechanical, thermal, and chemical tests to ensure material performance reliably.'
      },
      {
        icon: 'Users',
        title: 'Supplier Evaluation',
        description: 'Recommend certified suppliers offering high-quality and compliant polymer and composite materials consistently.'
      },
      {
        icon: 'Wrench',
        title: 'Application Guidance',
        description: 'Provide technical advice on proper usage, fabrication, and installation for optimal performance effectively.'
      },
      {
        icon: 'CircleDollarSign',
        title: 'Cost Analysis',
        description: 'Evaluate material costs to achieve budget efficiency without compromising quality accurately.'
      },
      {
        icon: 'FileText',
        title: 'Documentation and Reporting',
        description: 'Maintain detailed records of material selection, tests, and supplier information for project reference efficiently.'
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
        title: 'Requirement Analysis & Application Review',
        description: 'Assess project needs and functional requirements for polymer, plastic, or composite materials.'
      },
      {
        icon: 'Layers',
        title: 'Material Selection & Specification',
        description: 'Recommend suitable polymers or composites based on strength, durability, and environmental conditions.'
      },
      {
        icon: 'Beaker',
        title: 'Testing & Quality Verification',
        description: 'Conduct mechanical, chemical, and performance tests to ensure material reliability and compliance.'
      },
      {
        icon: 'CheckCircle',
        title: 'Implementation Support & Reporting',
        description: 'Provide guidance for fabrication, installation, and detailed documentation for client reference and quality assurance.'
      }
    ],
    backgroundImage: '/blueprint-bg.png'
  },

  projects: {
    title: 'Featured Polymer & Composite Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: 'Fiber-Reinforced Polymer (FRP) Strengthening', imageKey: 'projectImg1' },
      { id: 2, title: 'Composite Facade Panels', imageKey: 'projectImg2' },
      { id: 3, title: 'Polymer Waterproofing Systems', imageKey: 'projectImg3' },
      { id: 4, title: 'High-Performance Plastic Components', imageKey: 'projectImg4' },
      { id: 5, title: 'UV/Corrosion-Resistant Coatings', imageKey: 'projectImg5' },
      { id: 6, title: 'Lightweight Composite Structures', imageKey: 'projectImg6' },
      { id: 7, title: 'Thermoplastic Piping & Ducting', imageKey: 'projectImg7' }
    ]
  },

  cta: {
    title: 'Ready to Upgrade with Advanced Polymers & Composites?',
    description: 'Boost performance and durability with polymer, plastic & composite expertise. Contact us today.'
  },

  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      {
        quote:
          'Their FRP strengthening solution cut installation time and kept loads within design limits. Excellent technical guidance throughout.',
        name: 'Sanjaya Dissanayake',
        role: 'Structural Consultant',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/64.jpg'
      },
      {
        quote:
          'We switched to a composite facade system based on their advice—lighter, faster, and more durable than our original design.',
        name: 'Hasini Wijeratne',
        role: 'Project Architect',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
      }
    ],
    summary: { count: '250+', label: 'Polymer/Composite Specs Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },

  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Polymer, Plastic & Composite Material Services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
