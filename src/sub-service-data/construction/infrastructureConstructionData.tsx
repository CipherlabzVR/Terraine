import { PageData } from '../../pages/SubServicePageLayout';

export const infrastructureConstructionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Infrastructure</span> Construction',
    tagline: 'Developing reliable sustainable infrastructure for communities',
    description: 'Our infrastructure construction services deliver durable, efficient, and high-quality solutions, improving connectivity, functionality, and long-term community benefits with expert planning and execution',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldCheck', title: 'Durable Solutions', description: 'Long-lasting infrastructure built with superior materials consistently' },
      { icon: 'Settings', title: 'Optimized Planning', description: 'Efficient designs ensuring smooth project execution effectively' },
      { icon: 'Users', title: 'Community Impact', description: 'Projects improving public facilities and connectivity reliably' },
      { icon: 'UserCog', title: 'Expert Management', description: 'Skilled teams delivering infrastructure projects on time' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our infrastructure construction services create sustainable networks supporting transportation utilities and community growth with long term reliability',
    scopeItems: [
      { icon: 'Car', title: 'Road and Highway Development', description: 'Construct durable roads and highways ensuring smooth connectivity improved transport efficiency and safe community accessibility' },
      { icon: 'Tractor', title: 'Bridge Construction', description: 'Design and build resilient bridges capable of withstanding heavy traffic loads and challenging environmental conditions' },
      { icon: 'Droplets', title: 'Water Supply Systems', description: 'Develop pipelines reservoirs and treatment plants delivering safe reliable and sustainable water distribution infrastructure' },
      { icon: 'Waves', title: 'Sewerage and Drainage Networks', description: 'Construct efficient drainage and sewer systems minimizing flooding risks and ensuring proper waste management solutions' },
      { icon: 'Plug', title: 'Utility Infrastructure', description: 'Implement essential power communication and gas networks integrating modern technologies for efficient service delivery' },
      { icon: 'Building', title: 'Public Facilities Development', description: 'Build essential public spaces transportation hubs and civic utilities supporting urban growth and community development' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Planning & Feasibility Study', description: 'Conduct site surveys, assess requirements, and develop detailed plans for public or private infrastructure projects' },
      { icon: 'Hammer', title: 'Site Preparation & Earthworks', description: 'Clear, grade, and stabilize the site to create a solid foundation for infrastructure development' },
      { icon: 'HardHat', title: 'Construction & Structural Works', description: 'Build roads, bridges, tunnels, or utilities while ensuring compliance with engineering standards and safety regulations' },
      { icon: 'CheckCircle', title: 'Inspection & Handover', description: 'Perform quality checks, finalize documentation, and deliver infrastructure ready for public use or operational functionality' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Infrastructure Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "City Highway Expansion", imageKey: 'projectImg1' },
      { id: 2, title: "Suspension Bridge Construction", imageKey: 'projectImg2' },
      { id: 3, "title": "Water Treatment Plant", "imageKey": "projectImg3" },
      { id: 4, title: "Urban Drainage System", imageKey: 'projectImg4' },
      { id: 5, title: "Underground Utility Network", imageKey: 'projectImg5' },
      { id: 6, title: "Public Transport Hub", imageKey: 'projectImg6' },
      { id: 7, title: "Renewable Energy Grid", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build for the Future?',
    description: 'From roads to water systems, we build the essential infrastructure that communities rely on Contact us to discuss your project'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The new highway they constructed has significantly reduced traffic congestion The project was managed expertly from start to finish", name: "James Bennett", role: "City Planner", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their team's work on our water supply system was outstanding They delivered a reliable and sustainable solution that will serve our community for decades", name: "Ahmad Faizal", role: "Public Works Director", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '50+', label: 'Major Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Infrastructure Construction services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};