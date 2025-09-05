import { PageData } from '../../pages/SubServicePageLayout';

export const architecturalPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Architectural</span> Drawing',
    tagline: 'Creative architectural drawings for flawless project execution.',
    description: 'Our architectural drawings deliver precise, detailed, and visually clear plans, enabling seamless construction, effective coordination, and accurate realization of design intent for every project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Brush', title: 'Creative Precision', description: 'Detailed drawings reflecting innovative architectural designs accurately.' },
      { icon: 'Zap', title: 'Seamless Execution', description: 'Clear plans supporting smooth construction processes consistently.' },
      { icon: 'Eye', title: 'Design Clarity', description: 'Enhancing visualization for better project understanding effectively.' },
      { icon: 'User', title: 'Client Focused', description: 'Tailored drawings meeting specific client requirements always.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our architectural drawing services provide detailed plans sections and elevations to guide accurate construction execution.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Plan Development', description: 'Prepare floor plans reflecting layout functionality and spatial arrangements accurately.' },
      { icon: 'Layers', title: 'Section and Elevation Drawings', description: 'Create detailed sections and elevations to illustrate design intent effectively.' },
      { icon: 'Pen', title: 'Detailing', description: 'Include finishes joinery fixtures and material details for precise implementation reliably.' },
      { icon: 'Users', title: 'Design Coordination', description: 'Ensure architectural drawings align with structural and MEP designs consistently.' },
      { icon: 'FileCheck2', title: 'Regulatory Compliance', description: 'Check drawings meet local building codes and client requirements effectively.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Revise drawings based on client feedback or project changes consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'BrainCircuit', title: 'Conceptualization', description: 'Translate client ideas and functional requirements into preliminary architectural layouts and conceptual sketches.' },
      { icon: 'DraftingCompass', title: 'Detailed Drafting', description: 'Develop precise architectural drawings, plans, elevations, and 3D views using advanced design software for clarity.' },
      { icon: 'FileSearch', title: 'Review & Coordination', description: 'Collaborate with clients, engineers, and stakeholders to refine designs, ensuring accuracy and practicality.' },
      { icon: 'Send', title: 'Finalization & Delivery', description: 'Produce final drawings ready for construction, approvals, and seamless integration with other project disciplines.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Architectural Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Residential Floor Plans", imageKey: 'projectImg1' },
      { id: 2, title: "Commercial Building Elevations", imageKey: 'projectImg2' },
      { id: 3, "title": "Detailed Section Drawings", "imageKey": "projectImg3" },
      { id: 4, title: "Interior Joinery Details", imageKey: 'projectImg4' },
      { id: 5, title: "Site Layout and Planning", imageKey: 'projectImg5' },
      { id: 6, title: "3D Architectural Renderings", imageKey: 'projectImg6' },
      { id: 7, title: "Construction Drawing Set", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Visualize Your Project?',
    description: 'Get clear, precise, and creative architectural drawings that bring your vision to life. Contact our team to get started.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The architectural drawings were exceptionally detailed and easy to follow. They made the construction process smooth and error-free.", name: "James Bennett", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their design clarity is top-notch. The 3D visualizations helped us make key decisions early on, saving us a lot of time and resources.", name: "Ahmad Faizal", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '1000+', label: 'Drawings Produced' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Architectural Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};