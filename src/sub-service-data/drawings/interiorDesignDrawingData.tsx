import { PageData } from '../../pages/SubServicePageLayout';

export const interiorDesignDrawingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Interior Design</span> Drawing',
    tagline: 'Detailed interior drawings for functional stylish spaces.',
    description: 'Our interior design drawings create accurate, practical, and visually clear layouts, enabling seamless execution, enhanced aesthetics, and optimized functionality for every interior project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Pen', title: 'Detailed Layouts', description: 'Clear plans enabling flawless interior implementation always.' },
      { icon: 'Scaling', title: 'Design Accuracy', description: 'Ensuring precise dimensions and material specifications consistently.' },
      { icon: 'Eye', title: 'Visualization Support', description: 'Enhancing understanding of interior design intent effectively.' },
      { icon: 'User', title: 'Client Oriented', description: 'Tailored drawings reflecting unique client preferences accurately.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our interior design drawing services provide accurate layouts and details to implement functional and aesthetic interiors.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Floor Plans', description: 'Prepare interior floor plans showing furniture layouts spatial arrangements and circulation areas accurately and clearly.' },
      { icon: 'GalleryVertical', title: 'Elevations', description: 'Develop interior elevations detailing walls finishes joinery fixtures and decorative elements consistently for implementation.' },
      { icon: 'Layers', title: 'Sections', description: 'Create sections illustrating vertical relationships between spaces structural and interior elements effectively for contractors.' },
      { icon: 'Sofa', title: 'Furniture Layouts', description: 'Design furniture placement drawings ensuring efficient space utilization aesthetics and functionality across all rooms.' },
      { icon: 'Palette', title: 'Material Detailing', description: 'Specify finishes colors textures and material applications clearly for procurement and installation accuracy.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Update interior drawings based on client feedback design modifications and site observations consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'MessageCircle', title: 'Client Consultation', description: 'Understand client preferences, functionality, and style requirements to develop tailored interior design concepts.' },
      { icon: 'DraftingCompass', title: 'Space Planning & Drafting', description: 'Create detailed floor plans, furniture layouts, and interior elevations for accurate visualization.' },
      { icon: 'FileSearch', title: 'Review & Refinement', description: 'Collaborate with clients to refine designs, materials, and finishes ensuring practical and aesthetic alignment.' },
      { icon: 'Send', title: 'Final Drawings & Handover', description: 'Provide completed interior drawings ready for execution, approvals, and on-site implementation.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Interior Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Residential Furniture Layout", imageKey: 'projectImg1' },
      { id: 2, title: "Commercial Space Plan", imageKey: 'projectImg2' },
      { id: 3, "title": "Kitchen & Bath Elevations", "imageKey": "projectImg3" },
      { id: 4, title: "Custom Joinery Details", imageKey: 'projectImg4' },
      { id: 5, title: "Lighting & Electrical Plans", imageKey: 'projectImg5' },
      { id: 6, title: "Material & Finish Schedules", imageKey: 'projectImg6' },
      { id: 7, title: "Retail Store Layout", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Detail Your Vision?',
    description: 'Transform your interior concepts into actionable plans. Contact us for precise and beautiful interior design drawings.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The interior drawings were incredibly detailed, which made the contractor's job so much easier. Every finish and dimension was perfectly specified.", name: "Emily Tan", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" },
        { quote: "Their team translated our vision into a set of clear and practical drawings. The furniture layouts they designed optimized our space beautifully.", name: "James McAllister", role: "Restaurant Owner", rating: 5, image: "https://randomuser.me/api/portraits/men/10.jpg" }
    ],
    summary: { count: '300+', label: 'Interiors Detailed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Interior Design Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};