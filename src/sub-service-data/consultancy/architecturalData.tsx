import { PageData } from '../../pages/SubServicePageLayout';

export const architecturalPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Architectural</span> Design',
    tagline: 'Creating inspiring functional spaces with timeless design.',
    description: 'Our architectural services blend creativity and functionality, delivering visually stunning, practical, and sustainable designs that reflect client vision while enhancing the overall project experience.',
    backgroundImage: '/hero-consultancy-architectural.jpg', // Updated hero background image
    uspItems: [
      { icon: 'Brush', title: 'Creative Designs', description: 'Innovative architectural solutions enhancing visual appeal.' },
      { icon: 'Maximize', title: 'Functional Spaces', description: 'Practical layouts maximizing usability and comfort.' },
      { icon: 'Leaf', title: 'Sustainable Architecture', description: 'Eco-friendly designs reducing environmental impact effectively.' },
      { icon: 'User', title: 'Client Centric', description: 'Tailored solutions reflecting unique client vision.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our architectural services focus on creative functional and aesthetically appealing designs tailored to client requirements.',
    scopeItems: [
      { icon: 'Lightbulb', title: 'Concept Development', description: 'Create innovative design concepts reflecting client vision and project goals accurately.' },
      { icon: 'Grid3x3', title: 'Space Planning', description: 'Optimize layouts for functional efficient and comfortable spaces effectively.' },
      { icon: 'Grid3x3', title: '3D Visualization', description: 'Generate realistic renderings to enhance client understanding and decision making reliably.' },
      { icon: 'Brush', title: 'Design Detailing', description: 'Prepare detailed drawings including finishes materials and architectural elements consistently.' },
      { icon: 'FileCheck2', title: 'Regulatory Compliance', description: 'Ensure designs adhere to local codes zoning and building regulations effectively.' },
      { icon: 'Users', title: 'Design Coordination', description: 'Collaborate with structural MEP and interior teams for seamless integration consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'BrainCircuit', title: 'Concept Development', description: 'Understand client vision and project goals to create innovative, functional, and aesthetically appealing architectural concepts.' },
      { icon: 'DraftingCompass', title: 'Design & Drafting', description: 'Produce detailed architectural drawings, plans, and 3D visualizations for accurate representation of the project.' },
      { icon: 'FileSearch', title: 'Review & Refinement', description: 'Collaborate with clients and stakeholders to refine designs, ensuring practicality, compliance, and creative excellence.' },
      { icon: 'HardHat', title: 'Implementation Support', description: 'Assist during construction, provide design clarifications, and ensure architectural vision is accurately realized on-site.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Architectural Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Modern Residential Villa", imageKey: 'projectImg1' },
      { id: 2, title: "Commercial High-Rise", imageKey: 'projectImg2' },
      { id: 3, "title": "Sustainable Community Center", "imageKey": "projectImg3" },
      { id: 4, title: "Boutique Hotel Design", imageKey: 'projectImg4' },
      { id: 5, title: "Urban Loft Conversion", imageKey: 'projectImg5' },
      { id: 6, title: "Cultural Arts Center", imageKey: 'projectImg6' },
      { id: 7, title: "Minimalist Office Space", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Design Your Space?',
    description: 'Let our architects craft a space that is both beautiful and functional. Contact us today to bring your vision to life.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The architectural design was breathtaking. They perfectly captured our vision and created a space that is both stunning and incredibly functional.", name: "Aisha Al Mazrouei", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { quote: "Their team's creativity and attention to detail are unmatched. The 3D visualizations brought the project to life before construction even began.", name: "Hans Müller", role: "Property Developer", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" }
    ],
    summary: { count: '200+', label: 'Designs Completed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Architectural services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};