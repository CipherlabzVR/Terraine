import { PageData } from '../../pages/SubServicePageLayout';

export const structuralDrawingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Structural</span> Drawing',
    tagline: 'Accurate structural drawings for safe strong buildings.',
    description: 'Our structural drawings provide precise calculations, clear detailing, and comprehensive plans, ensuring structural integrity, safety, and efficient construction for every building project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Calculator', title: 'Accurate Calculations', description: 'Precise structural details ensuring safe construction consistently.' },
      { icon: 'FileCheck2', title: 'Reliable Designs', description: 'Clear drawings reducing errors and conflicts effectively.' },
      { icon: 'ShieldCheck', title: 'Compliance Assurance', description: 'Meeting all building codes and regulations reliably.' },
      { icon: 'Zap', title: 'Efficient Execution', description: 'Supporting smooth construction workflow and timely delivery.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our structural drawing services provide detailed plans and reinforcement layouts to ensure safe and efficient construction.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Foundation Plans', description: 'Prepare foundation layouts showing footings piles and slab details accurately.' },
      { icon: 'GalleryVertical', title: 'Framing Plans', description: 'Develop structural plans for beams columns and load bearing elements effectively.' },
      { icon: 'Grip', title: 'Reinforcement Detailing', description: 'Provide detailed rebar schedules and placement drawings for construction reliability.' },
      { icon: 'Weight', title: 'Load Calculations Reference', description: 'Include necessary calculations to support structural design and compliance consistently.' },
      { icon: 'Users', title: 'Coordination with Architecture', description: 'Ensure structural drawings align with architectural and MEP plans effectively.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Update structural drawings based on design changes or site conditions consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Structural Analysis', description: 'Assess load requirements, materials, and design parameters to plan safe and efficient structural systems.' },
      { icon: 'DraftingCompass', title: 'Drafting & Modeling', description: 'Prepare detailed structural drawings, including beams, columns, slabs, and reinforcement layouts using precise modeling tools.' },
      { icon: 'FileSearch', title: 'Coordination & Review', description: 'Collaborate with architects and engineers to ensure structural integrity and seamless integration with other disciplines.' },
      { icon: 'Send', title: 'Final Drawings & Submission', description: 'Deliver finalized drawings for construction execution, approvals, and on-site reference for quality compliance.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Structural Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Steel Beam Reinforcement", imageKey: 'projectImg1' },
      { id: 2, title: "Concrete Foundation Plan", imageKey: 'projectImg2' },
      { id: 3, "title": "Roof Truss Design", "imageKey": "projectImg3" },
      { id: 4, title: "Column & Beam Layouts", imageKey: 'projectImg4' },
      { id: 5, title: "Seismic Bracing Details", imageKey: 'projectImg5' },
      { id: 6, title: "Load Path Schematics", imageKey: 'projectImg6' },
      { id: 7, title: "Retaining Wall Design", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Solid Foundation?',
    description: 'Ensure the safety and integrity of your build with precise structural drawings. Contact our engineers today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The structural drawings were incredibly accurate and easy for our team to follow. This level of detail prevented any on-site errors and kept us on schedule.", name: "David Ong", role: "Construction Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/7.jpg" },
        { quote: "Their team's ability to coordinate with our architects was seamless. The final drawings integrated perfectly, ensuring a safe and reliable structure.", name: "Samantha Clarke", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/9.jpg" }
    ],
    summary: { count: '500+', label: 'Structures Detailed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Structural Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};