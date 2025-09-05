import { PageData } from '../../pages/SubServicePageLayout';

export const bimDigitalTwinPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">BIM & Digital Twin</span> Consultancy',
    tagline: 'Driving smart designs through technology powered innovation.',
    description: 'Our BIM and Digital Twin consultancy empowers precise planning, seamless collaboration, and predictive insights, ensuring improved efficiency, reduced risks, and enhanced performance across your project lifecycle.',
    backgroundImage: '/twin-hero.jpg', // TODO: Update image path
    uspItems: [
      { icon: 'Users', title: 'Enhanced Collaboration', description: 'Streamlined teamwork through advanced digital modeling tools.' },
      { icon: 'Eye', title: 'Accurate Visualization', description: 'Realistic models for better design understanding.' },
      { icon: 'LineChart', title: 'Predictive Insights', description: 'Anticipates issues before construction begins.' },
      { icon: 'GaugeCircle', title: 'Efficiency Boost', description: 'Reduces errors and saves time significantly.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our BIM and digital twin consultancy provide advanced modeling and real time monitoring to enhance design accuracy and operational efficiency.',
    scopeItems: [
      { icon: 'Box', title: '3D Modeling', description: 'Create detailed digital representations of architectural structural and MEP systems for precise visualization.' },
      { icon: 'Clock', title: '4D Scheduling', description: 'Integrate time-based simulations to optimize construction sequencing and project timelines effectively.' },
      { icon: 'CircleDollarSign', title: '5D Cost Estimation', description: 'Link project costs with BIM models for accurate budgeting and financial planning reliably.' },
      { icon: 'Leaf', title: '6D Sustainability Analysis', description: 'Evaluate energy performance and sustainability metrics for environmentally responsible designs consistently.' },
      { icon: 'Building', title: '7D Facility Management', description: 'Develop digital twin for efficient operation maintenance and lifecycle management effectively.' },
      { icon: 'AlertTriangle', title: 'Clash Detection', description: 'Identify and resolve conflicts between disciplines to prevent errors during construction consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Project Data Collection', description: 'Gather accurate architectural, structural, and MEP data to create a reliable digital model for analysis.' },
      { icon: 'Layers', title: '3D|4D|5D Modeling', description: 'Develop detailed BIM models, incorporating design, scheduling, and cost parameters for seamless project visualization.' },
      { icon: 'BarChart3', title: 'Simulation & Analysis', description: 'Perform clash detection, performance simulations, and predictive analytics to optimize project efficiency and reduce errors.' },
      { icon: 'FilePieChart', title: 'Integration & Reporting', description: 'Provide actionable insights, real-time dashboards, and recommendations for informed decision-making throughout the project lifecycle.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured BIM & Digital Twin Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Smart City Digital Twin", imageKey: 'projectImg1' },
      { id: 2, title: "4D Construction Sequencing", imageKey: 'projectImg2' },
      { id: 3, "title": "5D Cost Model for a Skyscraper", "imageKey": "projectImg3" },
      { id: 4, title: "Airport Facility Management Twin", imageKey: 'projectImg4' },
      { id: 5, title: "Clash Detection for a Hospital", imageKey: 'projectImg5' },
      { id: 6, title: "Energy Analysis for a Campus", imageKey: 'projectImg6' },
      { id: 7, title: "3D MEP Coordination", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build with Intelligence?',
    description: 'Leverage our BIM and Digital Twin expertise to bring unparalleled precision and efficiency to your next project.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their BIM and Digital Twin services provided incredible foresight. We resolved clashes before they happened and now have a valuable asset for facility management. Truly innovative work.", name: "Samantha P.", role: "COO, Innovate Ltd.", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" },
        { quote: "The 4D scheduling and 5D cost estimation were game-changers for our budget and timeline. The level of detail and accuracy is something we've never seen before.", name: "Michael B.", role: "Director of Operations", rating: 5, image: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    summary: { count: '50+', label: 'Digital Twins Deployed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our BIM & Digital Twin Consultancy services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};

