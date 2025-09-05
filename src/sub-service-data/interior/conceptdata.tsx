import { PageData } from '../../pages/SubServicePageLayout';

export const conceptDesignPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Concept</span> Development & Design',
    tagline: 'Transforming ideas into inspiring functional spaces.',
    description: 'Our concept development and design services create innovative, practical, and visually stunning interiors, reflecting client vision while enhancing space functionality and overall aesthetic appeal.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Sparkles', title: 'Innovative Concepts', description: 'Creative designs transforming ideas into functional spaces consistently.' },
      { icon: 'Settings2', title: 'Tailored Solutions', description: 'Personalized layouts matching client vision effectively.' },
      { icon: 'Scaling', title: 'Efficient Planning', description: 'Streamlined design process saving time reliably.' },
      { icon: 'Paintbrush', title: 'Aesthetic Excellence', description: 'Visually appealing interiors enhancing space value.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our concept development and design services create innovative interior solutions blending functionality aesthetics and client vision seamlessly.',
    scopeItems: [
      { icon: 'Users', title: 'Client Consultation', description: 'Understand client preferences requirements and lifestyle to develop tailored interior design concepts accurately and effectively.' },
      { icon: 'Pen', title: 'Concept Sketching', description: 'Create initial sketches and visual concepts representing design intent layout and style clearly and professionally.' },
      { icon: 'Palette', title: 'Material and Color Planning', description: 'Recommend materials finishes and color schemes aligning with concept and client vision consistently and effectively.' },
      { icon: 'LayoutGrid', title: 'Space Planning', description: 'Optimize furniture layout circulation and functional zones ensuring practical efficient and appealing interior spaces reliably.' },
      { icon: 'Layers3', title: '3D Visualization', description: 'Develop 3D renderings to showcase proposed design concepts enhancing client understanding and approval process accurately.' },
      { icon: 'ClipboardCheck', title: 'Design Refinement', description: 'Revise concepts based on feedback iterations and technical considerations ensuring optimal final interior design solution.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Users', title: 'Client Consultation', description: 'Understand client vision, lifestyle, and functional requirements to create a personalized design concept.' },
      { icon: 'Search', title: 'Research & Inspiration', description: 'Explore trends, materials, and spatial solutions to develop innovative, practical, and aesthetic design ideas.' },
      { icon: 'Pen', title: 'Concept Creation', description: 'Translate ideas into sketches, mood boards, and preliminary layouts to visualize the design direction clearly.' },
      { icon: 'CheckCircle', title: 'Review & Refinement', description: 'Collaborate with clients to refine concepts, ensuring alignment with preferences, budget, and project objectives.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Design Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Modern Residential Interior", imageKey: 'projectImg1' },
      { id: 2, title: "Corporate Office Redesign", imageKey: 'projectImg2' },
      { id: 3, "title": "Retail Space Concept", "imageKey": "projectImg3" },
      { id: 4, title: "Boutique Hotel Lobby", imageKey: 'projectImg4' },
      { id: 5, title: "Minimalist Cafe Layout", imageKey: 'projectImg5' },
      { id: 6, title: "Luxury Apartment Staging", imageKey: 'projectImg6' },
      { id: 7, title: "Open-Concept Living Area", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Visualize Your Space?',
    description: 'Transform your ideas into reality. Contact us for a design consultation today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "They took our vague ideas and turned them into a stunning, functional design that exceeded all our expectations. The 3D visualizations were a game-changer!", name: "Jessica Chen", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/8.jpg" },
        { quote: "The team's creativity and attention to detail were exceptional. They managed to create a beautiful and efficient workspace that our employees love.", name: "Mark Robinson", role: "Business Owner", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '150+', label: 'Design Concepts Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Concept Development & Design services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};