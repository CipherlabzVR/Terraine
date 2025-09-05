// Suggested Filename: residentialInteriorsData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const residentialInteriorsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Residential</span> Interiors',
    tagline: 'Designing homes that reflect comfort and style.',
    description: 'Our residential interiors create personalized, functional, and visually stunning living spaces, combining innovative design, quality finishes, and thoughtful layouts to enhance comfort and lifestyle.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Home', title: 'Personalized Homes', description: 'Interiors designed to match client lifestyle consistently.' },
      { icon: 'LayoutGrid', title: 'Functional Layouts', description: 'Efficient use of space enhancing comfort effectively.' },
      { icon: 'Sparkles', title: 'Aesthetic Excellence', description: 'Visually stunning designs elevating home appeal reliably.' },
      { icon: 'ThumbsUp', title: 'Quality Execution', description: 'High standards maintained from design to completion.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our residential interior services create personalized living spaces blending comfort, style, and functionality for apartments, villas, and houses.',
    scopeItems: [
      { icon: 'LayoutGrid', title: 'Space Planning', description: 'Design functional layouts optimizing circulation, furniture placement, and room usage for comfortable living effectively.' },
      { icon: 'Pen', title: 'Custom Design Development', description: 'Develop tailored interior concepts reflecting client lifestyle preferences and aesthetic vision accurately.' },
      { icon: 'Palette', title: 'Material and Finish Selection', description: 'Recommend appropriate finishes, textures, and colors enhancing durability and visual appeal reliably.' },
      { icon: 'Lamp', title: 'Lighting and Electrical Planning', description: 'Design lighting and electrical systems to complement interiors and support daily residential activities consistently.' },
      { icon: 'Sofa', title: 'Furniture and Fixture Integration', description: 'Select and position furniture, fixtures, and accessories ensuring functionality and cohesive design effectively.' },
      { icon: 'HardHat', title: 'Project Supervision and Delivery', description: 'Oversee installation, quality checks, and handover ensuring client satisfaction and on-time completion accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Users', title: 'Client Consultation & Requirement Gathering', description: 'Understand lifestyle, preferences, and functional needs to develop personalized residential interior solutions.' },
      { icon: 'LayoutGrid', title: 'Design & Layout Planning', description: 'Create detailed floor plans, 3D visualizations, and material selections to ensure practical and aesthetic design.' },
      { icon: 'HardHat', title: 'Execution & Supervision', description: 'Oversee construction, finishing, and installation works, ensuring quality standards and timeline adherence.' },
      { icon: 'CheckCircle', title: 'Finishing & Handover', description: 'Complete furnishings, Decor, and quality checks, delivering a fully functional and visually appealing home interior.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Residential Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Modern Apartment Interior", imageKey: 'projectImg1' },
      { id: 2, title: "Luxury Villa Design", imageKey: 'projectImg2' },
      { id: 3, "title": "Cozy Family House", "imageKey": "projectImg3" },
      { id: 4, title: "Beachside Cabana Styling", imageKey: 'projectImg4' },
      { id: 5, title: "Minimalist Urban Loft", imageKey: 'projectImg5' },
      { id: 6, title: "Traditional Home Renovation", imageKey: 'projectImg6' },
      { id: 7, title: "Contemporary Duplex Interior", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Create Your Dream Home?',
    description: 'Let us design a living space that perfectly reflects your style and comfort. Contact us for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "They transformed our apartment into a beautiful, functional space that feels twice as big. Their attention to our needs was incredible, and the result is beyond our dreams.", name: "The De Silva Family", role: "Apartment Owners", rating: 5, image: "https://randomuser.me/api/portraits/women/90.jpg" },
        { quote: "Our villa is now our perfect sanctuary. The design team captured our family's personality perfectly and managed the entire project with utmost professionalism.", name: "Mr. & Mrs. Rajapaksa", role: "Villa Owners", rating: 5, image: "https://randomuser.me/api/portraits/men/90.jpg" }
    ],
    summary: { count: '200+', label: 'Homes Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Residential Interior services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};