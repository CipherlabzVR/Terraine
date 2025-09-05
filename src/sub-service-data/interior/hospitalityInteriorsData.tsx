// Suggested Filename: hospitalityInteriorsData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const hospitalityInteriorsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Hospitality</span> Interiors',
    tagline: 'Creating memorable experiences with stunning interiors.',
    description: 'Our hospitality interiors combine aesthetics, functionality, and comfort to craft welcoming, luxurious, and engaging spaces that leave lasting impressions on guests and elevate brand value.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Star', title: 'Memorable Experiences', description: 'Designs creating lasting impressions for guests consistently.' },
      { icon: 'Heart', title: 'Comfort Focused', description: 'Enhancing guest satisfaction through thoughtful interiors effectively.' },
      { icon: 'Sparkles', title: 'Aesthetic Excellence', description: 'Luxurious and visually appealing spaces reliably.' },
      { icon: 'Workflow', title: 'Operational Efficiency', description: 'Layouts supporting smooth service and management.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our hospitality interior services create inviting and functional spaces for hotels, restaurants, and resorts enhancing guest experiences.',
    scopeItems: [
      { icon: 'Lightbulb', title: 'Concept Development', description: 'Design interiors reflecting brand identity, ambiance, and guest expectations for hospitality spaces accurately.' },
      { icon: 'LayoutGrid', title: 'Space Optimization', description: 'Plan functional layouts for lobbies, dining, rooms, and recreational areas ensuring comfort and efficiency effectively.' },
      { icon: 'Palette', title: 'Material and Finish Selection', description: 'Choose durable, aesthetic finishes suited for high traffic and luxury hospitality environments reliably.' },
      { icon: 'Lamp', title: 'Lighting and Ambiance Design', description: 'Implement lighting schemes enhancing mood, aesthetics, and operational functionality consistently.' },
      { icon: 'Sofa', title: 'Furniture and Fixture Coordination', description: 'Select and place furniture and Decor for comfort, style, and brand consistency accurately.' },
      { icon: 'HardHat', title: 'Project Supervision and Delivery', description: 'Oversee installation, quality checks, and handover ensuring operational readiness and guest satisfaction effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Users', title: 'Client Consultation & Concept Development', description: 'Understand brand identity, guest experience goals, and operational requirements to create tailored interior concepts.' },
      { icon: 'LayoutGrid', title: 'Design & Planning', description: 'Develop layouts, 3D visualizations, material selections, and ambiance designs to enhance aesthetics and functionality.' },
      { icon: 'HardHat', title: 'Execution & Supervision', description: 'Oversee construction, furniture, and fixture installation, ensuring quality, timelines, and seamless coordination of all elements.' },
      { icon: 'CheckCircle', title: 'Finishing & Handover', description: 'Complete Decor, lighting, and final checks, delivering a fully functional, visually appealing, and guest-ready space.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Hospitality Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Luxury Boutique Hotel", imageKey: 'projectImg1' },
      { id: 2, title: "Fine Dining Restaurant", imageKey: 'projectImg2' },
      { id: 3, "title": "Tropical Beach Resort", "imageKey": "projectImg3" },
      { id: 4, title: "Modern City Cafe", imageKey: 'projectImg4' },
      { id: 5, title: "Exclusive Hotel Lobby", imageKey: 'projectImg5' },
      { id: 6, title: "Rooftop Bar & Lounge", imageKey: 'projectImg6' },
      { id: 7, title: "Eco-Friendly Resort Villa", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Wow Your Guests?',
    description: 'Create an unforgettable experience with stunning hospitality interiors. Contact us to discuss your project.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The new interior design of our hotel has received rave reviews from guests. The blend of luxury and comfort is perfect, and our booking rates have increased significantly.", name: "Naveen Gunawardena", role: "Hotel General Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/93.jpg" },
        { quote: "Our restaurant's ambiance is now its biggest selling point, thanks to their incredible design team. The new interior has elevated our brand and created a truly special dining experience.", name: "Isabelle Dubois", role: "Restaurant Owner", rating: 5, image: "https://randomuser.me/api/portraits/women/94.jpg" }
    ],
    summary: { count: '100+', label: 'Hospitality Venues Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Hospitality Interior services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};