// Suggested Filename: detailedDrawingsData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const detailedDrawingsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Detailed</span> Interior Drawings',
    tagline: 'Accurate interior drawings for flawless project execution.',
    description: 'Our detailed interior drawings provide precise layouts, measurements, and specifications, ensuring smooth implementation, effective coordination, and perfect realization of design intent for every interior project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'LayoutGrid', title: 'Precise Layouts', description: 'Accurate drawings supporting flawless interior execution consistently.' },
      { icon: 'Eye', title: 'Enhanced Visualization', description: 'Clear plans aiding better design understanding effectively.' },
      { icon: 'ShieldCheck', title: 'Error Reduction', description: 'Minimizing mistakes during implementation reliably.' },
      { icon: 'User', title: 'Client Focused', description: 'Drawings tailored to meet specific preferences.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our detailed interior drawings provide precise plans and layouts ensuring accurate implementation of interior design concepts.',
    scopeItems: [
      { icon: 'Map', title: 'Floor Plans', description: 'Prepare detailed interior floor plans including furniture layouts fixtures and circulation paths accurately for construction.' },
      { icon: 'Building', title: 'Elevations', description: 'Develop interior elevations illustrating walls finishes joinery and decorative elements for proper execution reliably.' },
      { icon: 'Scissors', title: 'Sections', description: 'Create sections showing vertical relationships spatial arrangements and construction details effectively for contractor guidance.' },
      { icon: 'Sofa', title: 'Furniture and Fixture Layouts', description: 'Specify positions of furniture lighting and fixtures ensuring practical functionality and design alignment consistently.' },
      { icon: 'Palette', title: 'Material Detailing', description: 'Indicate finishes colors textures and materials to guide procurement and precise implementation accurately.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Update drawings based on client feedback design adjustments or site conditions ensuring accuracy consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Gather detailed client needs, spatial dimensions, and functional requirements to prepare accurate interior drawings.' },
      { icon: 'Pen', title: 'Drafting & Layout', description: 'Create floor plans, elevations, sections, and 3D visualizations to represent the design clearly and precisely.' },
      { icon: 'Users', title: 'Review & Coordination', description: 'Collaborate with clients and engineers to refine drawings and ensure alignment with design intent.' },
      { icon: 'CheckCircle', title: 'Final Drawings & Delivery', description: 'Provide complete, ready-to-implement drawings for approvals, procurement, and on-site execution.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Drawing Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Residential Floor Plans", imageKey: 'projectImg1' },
      { id: 2, title: "Commercial Office Layouts", imageKey: 'projectImg2' },
      { id: 3, "title": "Retail Space Elevations", "imageKey": "projectImg3" },
      { id: 4, title: "Hotel Room Sections", imageKey: 'projectImg4' },
      { id: 5, title: "Restaurant Furniture Plans", imageKey: 'projectImg5' },
      { id: 6, title: "Custom Joinery Details", imageKey: 'projectImg6' },
      { id: 7, title: "Apartment Lighting Layouts", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Precise Plans?',
    description: 'Bring your design to life with flawless accuracy. Contact us for detailed interior drawings.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The level of detail in the drawings was exceptional. It made the construction phase so much smoother and eliminated any guesswork for the contractors.", name: "Sarah Johnson", role: "Architect", rating: 5, image: "https://randomuser.me/api/portraits/women/26.jpg" },
        { quote: "Their drawings perfectly captured our vision. Seeing the detailed elevations and layouts gave us complete confidence in the project before a single wall was touched.", name: "David Chen", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/men/41.jpg" }
    ],
    summary: { count: '200+', label: 'Drawing Sets Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Detailed Interior Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};