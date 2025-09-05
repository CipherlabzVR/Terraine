// Suggested Filename: steelMetalConsultancyData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const steelMetalConsultancyPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Steel & Metal</span> Material Consultancy',
    tagline: 'Optimizing steel and metal materials for strength',
    description: 'Our steel and metal material consultancy provides expert selection, quality assessment, and cost-effective solutions, ensuring durable, safe, and high performing structures for every construction project.',
    backgroundImage: '/con-hero.jpg',
    uspItems: [
      { icon: 'Shield', title: 'High Strength', description: 'Ensures durable steel and metal performance consistently.' },
      { icon: 'Settings2', title: 'Optimized Selection', description: 'Choosing best materials for project requirements effectively.' },
      { icon: 'CheckCircle', title: 'Compliance Assurance', description: 'Meets industry standards reliably.' },
      { icon: 'Users', title: 'Expert Guidance', description: 'Professional advice for steel and metal selection consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our steel and metal consultancy ensures selection, testing, and specification for safe, durable, and efficient construction applications effectively.',
    scopeItems: [
      { icon: 'Layers', title: 'Material Selection', description: 'Identify appropriate steel grades and metals suitable for structural and architectural requirements accurately.' },
      { icon: 'FlaskConical', title: 'Quality Testing', description: 'Conduct mechanical and chemical tests to verify material strength, durability, and compliance reliably.' },
      { icon: 'Users', title: 'Supplier Verification', description: 'Evaluate and recommend suppliers providing certified and high-quality steel and metal materials consistently.' },
      { icon: 'CircleDollarSign', title: 'Cost Analysis', description: 'Assess material costs to optimize budget without compromising structural integrity effectively.' },
      { icon: 'Settings', title: 'Fabrication Guidance', description: 'Provide guidance on cutting, welding, and forming to ensure quality and efficiency accurately.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain comprehensive records of material specifications, tests, and supplier details for project reference effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Assessment & Design Review', description: 'Evaluate structural and architectural requirements to determine appropriate steel or metal types.' },
      { icon: 'Layers', title: 'Material Selection & Specification', description: 'Recommend suitable grades, coatings, and profiles for durability, strength, and performance.' },
      { icon: 'FlaskConical', title: 'Testing & Compliance Verification', description: 'Conduct mechanical and chemical tests to ensure materials meet industry standards and project needs.' },
      { icon: 'CheckCircle', title: 'Implementation Support & Reporting', description: 'Provide guidance for fabrication, installation, and documentation to ensure quality and safety compliance.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Steel & Metal Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Rise Structural Steelwork", imageKey: 'projectImg1' },
      { id: 2, title: "Bridge & Infrastructure Metal Works", imageKey: 'projectImg2' },
      { id: 3, title: "Fabricated Steel Components", imageKey: 'projectImg3' },
      { id: 4, title: "Industrial Metal Fabrication", imageKey: 'projectImg4' },
      { id: 5, title: "Architectural Steel Applications", imageKey: 'projectImg5' },
      { id: 6, title: "Welding & Forming Consultancy", imageKey: 'projectImg6' },
      { id: 7, title: "Supplier Verification Projects", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build with Stronger Steel & Metal?',
    description: 'Ensure the strength and durability of your project with expert steel and metal consultancy. Contact us today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their material expertise helped us secure high-quality steel suppliers and optimize costs without sacrificing strength. Excellent service.", name: "Ruwan Perera", role: "Project Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/80.jpg" },
        { quote: "From selection to fabrication guidance, their consultancy ensured our structures were safe and reliable. Truly professional support.", name: "Ishara Fernando", role: "Construction Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/81.jpg" }
    ],
    summary: { count: '300+', label: 'Steel & Metal Projects Supported' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Steel & Metal Material Consultancy services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
