// Suggested Filename: fireSafetyConsultancyData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const fireSafetyConsultancyPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Fire & Safety</span> Material Consultancy',
    tagline: 'Ensuring fire safe and compliant material selection',
    description:
      'Our fire and safety material consultancy guides selection of compliant, durable, and reliable materials, enhancing building safety, minimizing risks, and ensuring long-lasting protection for every project.',
    backgroundImage: '/con-hero.jpg',
    uspItems: [
      { icon: 'BadgeCheck',      title: 'Regulatory Compliance', description: 'Materials meet safety standards consistently.' },
      { icon: 'ShieldCheck',     title: 'Durable Solutions',     description: 'Reliable fire-resistant materials effectively.' },
      { icon: 'Lightbulb',       title: 'Expert Guidance',       description: 'Professional advice for safety material selection reliably.' },
      { icon: 'AlertTriangle',   title: 'Risk Reduction',        description: 'Minimizes hazards and ensures protection consistently.' }
    ]
  },

  scope: {
    title: 'Comprehensive Project Scope',
    description:
      'Our fire and safety material consultancy ensures selection, testing, and compliance of materials to protect life and property effectively.',
    scopeItems: [
      {
        icon: 'Layers',
        title: 'Material Selection',
        description: 'Identify appropriate fire resistant and safety compliant materials for construction and interior applications accurately.'
      },
      {
        icon: 'FlaskConical',
        title: 'Testing and Certification',
        description: 'Conduct tests to verify fire ratings, performance, and compliance with relevant standards reliably.'
      },
      {
        icon: 'Users',
        title: 'Supplier Verification',
        description: 'Recommend certified suppliers providing high-quality fire and safety materials consistently.'
      },
      {
        icon: 'Gavel',
        title: 'Regulatory Compliance',
        description: 'Ensure materials meet local and international fire safety codes and regulations effectively.'
      },
      {
        icon: 'Wrench',
        title: 'Application Guidance',
        description: 'Advise on proper installation and integration of materials to enhance safety performance accurately.'
      },
      {
        icon: 'FileText',
        title: 'Documentation and Reporting',
        description: 'Maintain detailed records of materials, test results, and compliance certifications for project reference efficiently.'
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
        title: 'Requirement Assessment & Risk Analysis',
        description: 'Evaluate project safety requirements, regulations, and potential fire hazards to determine material needs.'
      },
      {
        icon: 'Layers',
        title: 'Material Selection & Specification',
        description: 'Recommend fire-resistant, safety-compliant materials for construction, interiors, and specialized applications.'
      },
      {
        icon: 'Beaker',
        title: 'Testing & Compliance Verification',
        description: 'Conduct fire and safety performance tests to ensure materials meet industry standards and codes.'
      },
      {
        icon: 'CheckCircle',
        title: 'Implementation Support & Reporting',
        description: 'Provide guidance, documentation, and recommendations for proper usage to enhance safety and compliance.'
      }
    ],
    backgroundImage: '/blueprint-bg.png'
  },

  projects: {
    title: 'Featured Fire & Safety Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: 'Intumescent Coating Specification for Steel', imageKey: 'projectImg1' },
      { id: 2, title: 'Fire-Rated Door & Partition Systems',        imageKey: 'projectImg2' },
      { id: 3, title: 'Firestop & Penetration Seal Design',         imageKey: 'projectImg3' },
      { id: 4, title: 'Smoke Control & Dampers Material Review',    imageKey: 'projectImg4' },
      { id: 5, title: 'Fire-Resistant Glazing & Frames',            imageKey: 'projectImg5' },
      { id: 6, title: 'Cable Fire Performance & Routing',           imageKey: 'projectImg6' },
      { id: 7, title: 'Cladding Fire Compliance Assessment',        imageKey: 'projectImg7' }
    ]
  },

  cta: {
    title: 'Build Safer with Certified Materials',
    description: 'Get compliant, durable, and verified fire & safety materials specified for your project.'
  },

  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      {
        quote:
          'They aligned our specifications with local fire codes and helped us select tested systems—zero compliance issues at inspection.',
        name: 'Nirmala Gunasekara',
        role: 'Project Manager',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/74.jpg'
      },
      {
        quote:
          'Clear guidance on firestop details and product substitutions saved both time and risk.',
        name: 'Dulaj Senanayake',
        role: 'Site Engineer',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/74.jpg'
      }
    ],
    summary: { count: '220+', label: 'Fire-Safe Specs Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },

  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for Fire & Safety Material Consultancy.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
