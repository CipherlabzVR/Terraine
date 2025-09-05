// Suggested Filename: turnkeySolutionsData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const turnkeySolutionsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Turnkey</span> Interior Solutions',
    tagline: 'From concept to completion, all under one roof.',
    description: 'Our turnkey interior solutions offer a single, unified service for your entire project. We manage everything from initial design and procurement to final execution and handover, ensuring a seamless, hassle-free experience.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'User', title: 'Single Point of Contact', description: 'One dedicated team managing your entire project for clear communication.' },
      { icon: 'ShieldCheck', title: 'Hassle-Free Process', description: 'We handle all coordination, logistics, and management for you effectively.' },
      { icon: 'CircleDollarSign', title: 'Budget Adherence', description: 'Transparent pricing and strict budget control from start to finish reliably.' },
      { icon: 'ThumbsUp', title: 'Guaranteed Quality', description: 'Ensuring the highest standards in materials and workmanship consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our turnkey services cover every aspect of your interior project, ensuring a fully integrated and cohesive execution from start to finish.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Consultation & Planning', description: 'In-depth analysis of your needs to create a strategic project plan, timeline, and budget.' },
      { icon: 'Palette', title: 'Design Development', description: 'Creating detailed designs, 3D visualizations, and selecting all materials, finishes, and furniture.' },
      { icon: 'ShoppingCart', title: 'Procurement & Sourcing', description: 'Managing the purchase and delivery of all required materials and products from trusted vendors.' },
      { icon: 'HardHat', title: 'Construction & Execution', description: 'Overseeing all civil, electrical, plumbing, and installation work with skilled on-site supervision.' },
      { icon: 'Sofa', title: 'Furnishing & Decor', description: 'Placing furniture, installing fixtures, and adding final decor touches to bring the design to life.' },
      { icon: 'Key', title: 'Handover & Support', description: 'Delivering the completed, move-in ready space and providing post-project assistance.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Comprehensive Planning', description: 'Assess client requirements, project scope, and budget to develop a complete turnkey interior strategy.' },
      { icon: 'ShoppingCart', title: 'Design & Procurement', description: 'Finalize layouts, select materials, furniture, and Decor items, and manage all procurement processes efficiently.' },
      { icon: 'HardHat', title: 'Execution & Supervision', description: 'Oversee construction, installation, and finishing works, ensuring quality, timeline adherence, and design fidelity.' },
      { icon: 'CheckCircle', title: 'Handover & Support', description: 'Deliver fully completed interiors, provide client orientation, and ensure smooth post-completion support and maintenance.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Turnkey Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Complete Apartment Interior Turnkey", imageKey: 'projectImg1' },
      { id: 2, title: "Corporate Office End-to-End Solution", imageKey: 'projectImg2' },
      { id: 3, "title": "Restaurant Concept & Build", "imageKey": "projectImg3" },
      { id: 4, title: "Luxury Villa from Scratch", imageKey: 'projectImg4' },
      { id: 5, title: "Retail Store Full Fit-Out", imageKey: 'projectImg5' },
      { id: 6, title: "Boutique Hotel Turnkey Project", imageKey: 'projectImg6' },
      { id: 7, title: "Modern Home Turnkey Renovation", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Hassle-Free Interior?',
    description: 'Let us handle everything from A to Z. Contact us for a complete turnkey solution.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The turnkey service was a lifesaver. Having one team manage everything from design to the final nail made the entire process stress-free and enjoyable. The result is fantastic!", name: "Anusha Perera", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/60.jpg" },
        { quote: "They delivered our office fit-out on time and exactly on budget. The coordination was seamless, and we didn't have to worry about a thing. Highly professional and efficient.", name: "Rohan Jayasuriya", role: "CEO", rating: 5, image: "https://randomuser.me/api/portraits/men/60.jpg" }
    ],
    summary: { count: '50+', label: 'Turnkey Projects Completed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Turnkey Interior Solutions.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};