import { PageData } from '../../pages/SubServicePageLayout';

export const threeDBimPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">3D BIM</span> Modeling',
    tagline: 'Visualize your project with precision and clarity',
    description: 'Our 3D BIM modeling service delivers accurate, detailed, and interactive digital representations, enhancing design coordination, clash detection, and project visualization for architects, engineers, and contractors',
    backgroundImage: '/bim-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Box', title: 'Accurate Visualization', description: 'Detailed 3D models improving project understanding and communication' },
      { icon: 'Eye', title: 'Clash Detection', description: 'Identify and resolve design conflicts early for smooth construction' },
      { icon: 'Layers', title: 'Integrated Data', description: 'Centralized project information for efficient collaboration' },
      { icon: 'UserCog', title: 'Expert Modeling', description: 'Skilled BIM specialists delivering precise and reliable models' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our 3D BIM modeling service provides digital building representations supporting design coordination clash detection and project visualization',
    scopeItems: [
      { icon: 'Pen', title: 'Architectural Modeling', description: 'Create detailed architectural models representing building geometry spaces and finishes for design validation' },
      { icon: 'TestTube2', title: 'Structural Modeling', description: 'Develop structural models including columns beams slabs and foundations ensuring accurate load analysis and design integration' },
      { icon: 'Factory', title: 'MEP Modeling', description: 'Model mechanical electrical and plumbing systems for coordination and clash detection' },
      { icon: 'Grip', title: 'Site Modeling', description: 'Generate site models including topography landscaping and infrastructure for comprehensive project planning' },
      { icon: 'Thermometer', title: 'Visualization & Rendering', description: 'Produce realistic renderings walkthroughs and visualizations for client presentations and design reviews' },
      { icon: 'ScanSearch', title: 'Data Integration', description: 'Integrate project data specifications and schedules for efficient information management' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Palette', title: 'Design Data Collection', description: 'Gather architectural, structural, and MEP drawings and specifications for BIM modeling' },
      { icon: 'Puzzle', title: 'Model Creation', description: 'Develop 3D BIM models using advanced software, ensuring accuracy and detail' },
      { icon: 'HardHat', title: 'Coordination & Clash Detection', description: 'Run clash detection, coordinate disciplines, and resolve design conflicts' },
      { icon: 'CheckCircle', title: 'Visualization & Review', description: 'Generate visualizations, walkthroughs, and conduct design reviews with stakeholders' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured 3D BIM Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Office BIM Model", imageKey: 'projectImg1' },
      { id: 2, title: "Residential Apartment BIM Model", imageKey: 'projectImg2' },
      { id: 3, title: "Industrial Facility BIM Model", imageKey: 'projectImg3' },
      { id: 4, title: "Hospital BIM Coordination", imageKey: 'projectImg4' },
      { id: 5, title: "Retail Complex BIM Visualization", imageKey: 'projectImg5' },
      { id: 6, title: "Infrastructure BIM Modeling", imageKey: 'projectImg6' },
      { id: 7, title: "School Building BIM Model", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Visualize Your Project?',
    description: 'Experience the benefits of 3D BIM modeling for design coordination and project clarity Contact us for a demonstration'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their 3D BIM models made our design process much smoother We identified and resolved clashes before construction began", name: "James Bennett", role: "Architect", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "The visualizations helped our client understand the project perfectly The BIM team was responsive and highly skilled", name: "Ahmad Faizal", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '100+', label: 'BIM Models Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our 3D BIM Modeling services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};