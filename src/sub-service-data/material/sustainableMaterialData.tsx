// Suggested Filename: sustainableMaterialData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const sustainableMaterialPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Sustainable & Green</span> Material Consultancy',
    tagline: 'Promoting eco-friendly materials for sustainable projects.',
    description: 'Our sustainable and green material consultancy guides selection of environmentally responsible materials, reducing carbon footprint, enhancing energy efficiency, and supporting long term sustainability in every construction project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Leaf', title: 'Eco-friendly Choices', description: 'Promotes environmentally responsible materials consistently.' },
      { icon: 'ShieldCheck', title: 'Regulatory Compliance', description: 'Meets green building standards effectively.' },
      { icon: 'TrendingUp', title: 'Long Term Benefits', description: 'Supports durable and sustainable construction reliably.' },
      { icon: 'UserCheck', title: 'Expert Guidance', description: 'Professional advice for sustainable material selection consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our sustainable material consultancy promotes eco-friendly choices, reducing environmental impact while maintaining quality and compliance effectively.',
    scopeItems: [
      { icon: 'Search', title: 'Material Research', description: 'Identify environmentally friendly materials suitable for structural, architectural, and interior applications accurately.' },
      { icon: 'Repeat', title: 'Lifecycle Assessment', description: 'Evaluate environmental impact of materials throughout production, use, and disposal stages reliably.' },
      { icon: 'Users', title: 'Sourcing Sustainable Suppliers', description: 'Select suppliers providing certified green materials ensuring authenticity and quality consistently.' },
      { icon: 'CircleDollarSign', title: 'Cost Benefit Analysis', description: 'Assess financial implications of sustainable material choices balancing budget and environmental impact efficiently.' },
      { icon: 'ClipboardCheck', title: 'Regulatory Compliance', description: 'Ensure materials meet environmental standards and certifications for sustainable construction effectively.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed records of sustainable materials selection and performance for client reference accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Sustainability Goals', description: 'Understand project environmental targets, energy efficiency requirements, and client sustainability objectives.' },
      { icon: 'Search', title: 'Material Research & Shortlisting', description: 'Identify eco-friendly, recycled, and low-impact materials suitable for project applications.' },
      { icon: 'ShieldCheck', title: 'Evaluation & Compliance Check', description: 'Assess materials for certifications, standards, and environmental impact to ensure sustainable practices.' },
      { icon: 'CheckCircle', title: 'Recommendation & Implementation Support', description: 'Provide detailed reports, guidance, and support for integrating green materials into construction projects effectively.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Green Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "LEED Certified Building Materials", imageKey: 'projectImg1' },
      { id: 2, title: "Eco-Friendly Residential Home", imageKey: 'projectImg2' },
      { id: 3, "title": "Green Commercial Office Space", "imageKey": "projectImg3" },
      { id: 4, title: "Sustainable Hotel Sourcing", imageKey: 'projectImg4' },
      { id: 5, title: "Recycled Material Integration", imageKey: 'projectImg5' },
      { id: 6, title: "Low-VOC Interior Finishes", imageKey: 'projectImg6' },
      { id: 7, title: "Net-Zero Energy Building Materials", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build Sustainably?',
    description: 'Make a positive impact with eco-friendly materials. Contact us for a green material consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their consultancy was key to achieving our LEED certification. Their expertise in sustainable materials is unmatched, and they made a complex process seem simple.", name: "Asela Gunaratne", role: "Lead Architect", rating: 5, image: "https://randomuser.me/api/portraits/men/71.jpg" },
        { quote: "We wanted our new office to reflect our company's green values. They guided us to innovative, eco-friendly materials that were both beautiful and cost-effective. A fantastic service!", name: "Priyani Dissanayake", role: "Corporate Sustainability Officer", rating: 5, image: "https://randomuser.me/api/portraits/women/72.jpg" }
    ],
    summary: { count: '150+', label: 'Green Consultations' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Sustainable & Green Material Consultancy services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};