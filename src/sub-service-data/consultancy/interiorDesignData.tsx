import { PageData } from '../../pages/SubServicePageLayout';

export const interiorDesignPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Interior</span> Design',
    tagline: 'Transforming spaces with style comfort and elegance.',
    description: 'Our interior design services craft visually appealing, functional, and personalized spaces, combining creativity, comfort, and practicality to enhance the lifestyle and experience of every client.',
    backgroundImage: '/hero-consultancy.jpg', // Updated hero background image
    uspItems: [
      { icon: 'UserCog', title: 'Personalized Interiors', description: 'Custom designs reflecting client style perfectly.' },
      { icon: 'Sparkles', title: 'Aesthetic Excellence', description: 'Beautiful spaces combining style and functionality.' },
      { icon: 'Zap', title: 'Efficient Execution', description: 'Timely project delivery without compromising quality.' },
      { icon: 'Sofa', title: 'Comfort Focused', description: 'Interiors enhancing lifestyle and daily comfort.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our interior design services create functional and visually appealing spaces tailored to client preferences and lifestyle.',
    scopeItems: [
      { icon: 'Lightbulb', title: 'Concept Development', description: 'Develop design themes and concepts reflecting client vision and project requirements accurately.' },
      { icon: 'Grid3x3', title: 'Space Planning', description: 'Optimize interior layouts for efficient circulation comfort and aesthetics effectively.' },
      { icon: 'Palette', title: 'Material Selection', description: 'Recommend finishes furnishings and Decor that complement the overall design reliably.' },
      { icon: 'DraftingCompass', title: 'Detailed Drawings', description: 'Prepare interior drawings illustrating layouts furniture placement and design elements consistently.' },
      { icon: 'Briefcase', title: 'Project Management', description: 'Coordinate procurement installation and execution to ensure timely delivery effectively.' },
      { icon: 'Paintbrush', title: 'Styling and Decor', description: 'Finalize Decor accessories lighting and artwork to enhance interior ambiance consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Needs Assessment', description: 'Understand client preferences, lifestyle, and functional requirements to create personalized, practical, and visually appealing interior concepts.' },
      { icon: 'DraftingCompass', title: 'Design Development', description: 'Develop detailed layouts, material selections, and color schemes, ensuring a cohesive and harmonious interior environment.' },
      { icon: 'Eye', title: 'Visualization & Review', description: 'Present 3D renderings and samples for client approval, allowing refinement and alignment with expectations.' },
      { icon: 'PaintRoller', title: 'Implementation & Styling', description: 'Oversee installation, furnishing, and Decor placement, ensuring the interior design vision is perfectly realized.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Interior Designs',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Modern Apartment Living", imageKey: 'projectImg1' },
      { id: 2, title: "Luxury Villa Interior", imageKey: 'projectImg2' },
      { id: 3, "title": "Corporate Office Redesign", "imageKey": "projectImg3" },
      { id: 4, title: "Boutique Retail Space", imageKey: 'projectImg4' },
      { id: 5, title: "Cozy Restaurant Ambiance", imageKey: 'projectImg5' },
      { id: 6, title: "Minimalist Home Styling", imageKey: 'projectImg6' },
      { id: 7, title: "Hotel Lobby & Suites", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Transform Your Space?',
    description: 'Let our interior design experts craft an environment that truly feels like you. Contact us for a design consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "They completely transformed our living space. The design is not only beautiful but also incredibly functional for our family's lifestyle. We couldn't be happier.", name: "Aisha Al Mazrouei", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { quote: "The attention to detail in the material selection and styling was exceptional. Our new office interior has boosted morale and impresses every client who visits.", name: "James Bennett", role: "CEO, Bennett Corp", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" }
    ],
    summary: { count: '150+', label: 'Spaces Transformed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Interior Design services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};