import { PageData } from '../../pages/SubServicePageLayout';

export const electricalDrawingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Electrical</span> Drawing',
    tagline: 'Accurate electrical drawings for safe reliable installations.',
    description: 'Our electrical drawings deliver precise layouts and specifications, ensuring safe, efficient, and fully coordinated electrical systems for seamless operation and project success.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Scaling', title: 'Accurate Layouts', description: 'Ensuring precise electrical planning for safe installations.' },
      { icon: 'Unplug', title: 'Conflict Free', description: 'Coordinated designs reducing system clashes effectively.' },
      { icon: 'GaugeCircle', title: 'Efficiency Driven', description: 'Supporting seamless execution and timely completion consistently.' },
      { icon: 'ShieldCheck', title: 'Reliable Standards', description: 'Drawings meeting all regulatory and technical requirements.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our electrical drawing services provide detailed layouts and plans for safe efficient electrical system installation.',
    scopeItems: [
      { icon: 'CircuitBoard', title: 'Power Distribution Plans', description: 'Prepare electrical plans showing main panels sub panels circuits and load distribution accurately for construction.' },
      { icon: 'Lightbulb', title: 'Lighting Layouts', description: 'Develop lighting plans indicating fixtures placement switches and controls ensuring optimal illumination effectively.' },
      { icon: 'GitBranch', title: 'Wiring Diagrams', description: 'Create detailed wiring diagrams illustrating connections circuits and safety devices clearly and reliably.' },
      { icon: 'Users', title: 'Coordination with Other Disciplines', description: 'Ensure electrical drawings integrate seamlessly with architectural structural and MEP plans consistently.' },
      { icon: 'Cog', title: 'Equipment Specification', description: 'Provide specifications for electrical equipment fixtures panels and conduits for correct procurement and installation.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Update electrical drawings based on design changes client feedback and on-site modifications effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Load Assessment & Planning', description: 'Analyze power requirements, distribution, and circuitry to design safe and efficient electrical systems.' },
      { icon: 'DraftingCompass', title: 'Drafting & Detailing', description: 'Prepare detailed electrical layouts, schematics, panel schedules, and wiring diagrams using precise CAD tools.' },
      { icon: 'FileSearch', title: 'Coordination & Verification', description: 'Collaborate with MEP and structural teams to prevent conflicts and ensure seamless integration.' },
      { icon: 'Send', title: 'Final Drawings & Delivery', description: 'Deliver finalized electrical drawings for approvals, construction guidance, and accurate on-site implementation.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Electrical Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Power Distribution", imageKey: 'projectImg1' },
      { id: 2, title: "Residential Lighting Plan", imageKey: 'projectImg2' },
      { id: 3, "title": "Industrial Control Panel Schematics", "imageKey": "projectImg3" },
      { id: 4, title: "Data Center Wiring Diagrams", imageKey: 'projectImg4' },
      { id: 5, title: "Low Voltage System Layouts", imageKey: 'projectImg5' },
      { id: 6, title: "Substation Electrical Plans", imageKey: 'projectImg6' },
      { id: 7, title: "As-Built Electrical Drawings", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Safe & Efficient System?',
    description: 'Power your project with confidence. Contact us for precise and reliable electrical drawings that meet all standards.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The electrical drawings were exceptionally clear and accurate, which made the installation process for our complex system a breeze. Truly professional work.", name: "John D.", role: "Electrical Contractor", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" },
        { quote: "Their coordination with our MEP team was seamless. The conflict-free designs saved us from potential rework and kept the project on track.", name: "Michael B.", role: "Director of Operations", rating: 5, image: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    summary: { count: '2000+', label: 'Electrical Plans Created' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Electrical Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};