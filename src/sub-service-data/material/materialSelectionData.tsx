// Suggested Filename: materialSelectionData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const materialSelectionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Material Selection</span> & Specification',
    tagline: 'Choosing quality materials for optimized project performance.',
    description: 'Our material selection and specification services ensure the right choice of durable, high quality, and cost-effective materials, enhancing project efficiency, longevity, and overall construction success.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'CheckSquare', title: 'Optimal Choices', description: 'Selecting best materials for each project consistently.' },
      { icon: 'ShieldCheck', title: 'Quality Assurance', description: 'Ensuring reliable and durable materials effectively.' },
      { icon: 'UserCheck', title: 'Expert Recommendations', description: 'Professional guidance for precise material selection reliably.' },
      { icon: 'CircleDollarSign', title: 'Cost Efficiency', description: 'Balancing quality and budget consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our material selection services ensure the right materials are chosen for quality, durability, and cost effectiveness efficiently.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Assess project specifications to determine appropriate materials for structural, architectural, and interior applications accurately.' },
      { icon: 'Search', title: 'Material Research', description: 'Investigate innovative and sustainable material options to meet performance and aesthetic criteria reliably.' },
      { icon: 'FileText', title: 'Specification Development', description: 'Prepare detailed material specifications ensuring compliance with project standards and regulatory requirements consistently.' },
      { icon: 'Users', title: 'Supplier Consultation', description: 'Collaborate with suppliers to source recommended materials and verify authenticity effectively.' },
      { icon: 'CircleDollarSign', title: 'Cost Estimation', description: 'Analyze material costs to balance budget constraints without compromising quality efficiently.' },
      { icon: 'ClipboardCheck', title: 'Documentation and Approval', description: 'Maintain comprehensive records of selected materials and specifications for client and project reference accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Project Assessment', description: 'Understand project needs, performance criteria, and design requirements to select suitable materials.' },
      { icon: 'Search', title: 'Research & Material Shortlisting', description: 'Evaluate material options based on durability, aesthetics, cost, and compliance with industry standards.' },
      { icon: 'FileText', title: 'Specification & Documentation', description: 'Prepare detailed specifications, technical sheets, and recommendations for client approval.' },
      { icon: 'CheckCircle', title: 'Final Selection & Support', description: 'Advise on optimal materials, provide procurement guidance, and ensure seamless integration into the project.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Material Selections',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Building Materials", imageKey: 'projectImg1' },
      { id: 2, title: "Residential Home Finishes", imageKey: 'projectImg2' },
      { id: 3, "title": "Hospitality Project Sourcing", "imageKey": "projectImg3" },
      { id: 4, title: "Retail Store Fixture Specs", imageKey: 'projectImg4' },
      { id: 5, title: "Industrial Facility Materials", imageKey: 'projectImg5' },
      { id: 6, title: "Facade Cladding Selection", imageKey: 'projectImg6' },
      { id: 7, title: "Interior Material Palettes", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build with the Best?',
    description: "Ensure your project's success with the right materials. Contact us for expert selection and specification."
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their detailed material specifications made procurement and construction so much easier. It eliminated guesswork and ensured we used the right products for every application.", name: "Anil Mendis", role: "Lead Contractor", rating: 5, image: "https://randomuser.me/api/portraits/men/88.jpg" },
        { quote: "This service was invaluable. They found high-quality, cost-effective alternatives that kept us on budget without compromising the design. Highly recommended for any large-scale project.", name: "Shiromi Jayawardena", role: "Property Developer", rating: 5, image: "https://randomuser.me/api/portraits/women/89.jpg" }
    ],
    summary: { count: '250+', label: 'Material Specs Created' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Material Selection & Specification services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};