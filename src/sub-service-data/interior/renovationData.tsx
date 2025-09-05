// Suggested Filename: renovationData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const renovationPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Renovation</span> & Makeover Services',
    tagline: 'Transforming spaces with creative renovation solutions.',
    description: 'Our renovation and makeover services revitalize interiors, combining innovative design, efficient execution, and high-quality finishes to create refreshed, functional, and aesthetically appealing spaces.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Sparkles', title: 'Transformative Solutions', description: 'Revitalizing spaces with innovative designs consistently.' },
      { icon: 'Clock', title: 'Efficient Execution', description: 'Timely completion with minimal disruption effectively.' },
      { icon: 'ThumbsUp', title: 'Quality Finishes', description: 'High standard materials and workmanship reliably.' },
      { icon: 'Heart', title: 'Client Satisfaction', description: 'Personalized renovations reflecting unique preferences.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our renovation and makeover services transform existing spaces by updating design, functionality, and aesthetics efficiently.',
    scopeItems: [
      { icon: 'Search', title: 'Site Assessment', description: 'Evaluate existing conditions and structural limitations to plan renovation scope and feasible improvements accurately.' },
      { icon: 'LayoutGrid', title: 'Design Planning', description: 'Develop updated interior layouts and aesthetics reflecting client vision and functional requirements effectively.' },
      { icon: 'Hammer', title: 'Demolition and Preparation', description: 'Remove obsolete elements and prepare surfaces for new construction or finishing works safely and efficiently.' },
      { icon: 'Paintbrush', title: 'Installation of New Elements', description: 'Implement updated finishes, furniture, and fixtures ensuring alignment with design and quality standards reliably.' },
      { icon: 'ShieldCheck', title: 'Quality Inspection', description: 'Conduct inspections of materials and workmanship to ensure all renovation works meet high standards consistently.' },
      { icon: 'Key', title: 'Final Handover', description: 'Complete project handover with fully functional aesthetically enhanced spaces ready for immediate use accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Search', title: 'Site Assessment & Analysis', description: 'Inspect existing spaces, identify structural or design challenges, and understand client renovation goals.' },
      { icon: 'Pen', title: 'Design & Planning', description: 'Develop tailored renovation concepts, layouts, and material selections that enhance aesthetics and functionality.' },
      { icon: 'HardHat', title: 'Execution & Supervision', description: 'Oversee demolition, construction, and installation works, ensuring high-quality finishes and timely project completion.' },
      { icon: 'CheckCircle', title: 'Final Touches & Handover', description: 'Complete interior styling, quality checks, and deliver a refreshed, functional, and visually appealing space.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Renovation Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Kitchen & Bath Makeover", imageKey: 'projectImg1' },
      { id: 2, title: "Living Room Modernization", imageKey: 'projectImg2' },
      { id: 3, "title": "Full Apartment Renovation", "imageKey": "projectImg3" },
      { id: 4, title: "Retail Space Refresh", imageKey: 'projectImg4' },
      { id: 5, title: "Office Interior Upgrade", imageKey: 'projectImg5' },
      { id: 6, title: "Basement Conversion Project", imageKey: 'projectImg6' },
      { id: 7, title: "Facade & Exterior Makeover", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Revitalize Your Space?',
    description: 'Transform your existing interior into something new and exciting. Contact us for a renovation quote.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "They completely transformed our dated kitchen into a modern masterpiece. The process was smooth, and the team was professional and clean. We couldn't be happier with the result!", name: "Sanjaya & Malini", role: "Homeowners", rating: 5, image: "https://randomuser.me/api/portraits/men/75.jpg" },
        { quote: "Our office space was dull and uninspiring. The renovation team came in with brilliant ideas and executed the plan flawlessly. The new environment has boosted morale and productivity.", name: "Dilantha Perera", role: "Office Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/78.jpg" }
    ],
    summary: { count: '120+', label: 'Spaces Transformed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Renovation & Makeover services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};