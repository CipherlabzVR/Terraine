import { PageData } from '../../pages/SubServicePageLayout';

export const smartCityDigitalTwinPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Smart City & Urban</span> Digital Twin Services',
    tagline: 'Transform Cities Digitally Ensure Smart Living.',
    description: 'Implement smart city digital twin solutions to monitor, manage, and optimize urban infrastructure, enhance sustainability, improve services, and create connected, efficient, and resilient urban environments effectively.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'BarChart3', title: 'Urban Planning Insights', description: 'Enable data driven city planning decisions accurately.' },
      { icon: 'Recycle', title: 'Resource Optimization', description: 'Efficiently manage energy water and transportation systems.' },
      { icon: 'Leaf', title: 'Sustainability Solutions', description: 'Promote eco-friendly and sustainable urban growth.' },
      { icon: 'Combine', title: 'Smart City Integration', description: 'Connect multiple systems for seamless city operations.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our smart city and urban digital twin services provide integrated solutions to optimize urban planning, enhance sustainability, and improve overall city efficiency effectively.',
    scopeItems: [
      { icon: 'DatabaseZap', title: 'Data Integration', description: 'Consolidate city wide data from multiple sources for analysis consistently.' },
      { icon: 'Box', title: 'Simulation Modeling', description: 'Create digital models of urban systems to predict and optimize performance accurately.' },
      { icon: 'UsersRound', title: 'Resource Management', description: 'Monitor and optimize energy water transport and other resources efficiently.' },
      { icon: 'Activity', title: 'Infrastructure Monitoring', description: 'Track city infrastructure health to prevent failures and enhance reliability continuously.' },
      { icon: 'Headset', title: 'Policy and Decision Support', description: 'Provide actionable insights for urban planning and governance effectively.' },
      { icon: 'FilePieChart', title: 'Reporting and Visualization', description: 'Generate dashboards and visual reports to support city management decisions reliably.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Integration', description: 'Gather urban data including traffic, utilities, buildings, and environmental sensors for comprehensive modeling.' },
      { icon: 'Building', title: 'Urban Digital Twin Modeling', description: 'Create a virtual replica of city infrastructure, systems, and services for real-time analysis and planning.' },
      { icon: 'LineChart', title: 'Simulation & Optimization', description: 'Run simulations to optimize traffic flow, energy use, and resource allocation for smart urban management.' },
      { icon: 'FileSearch', title: 'Reporting & Decision Support', description: 'Generate actionable insights, dashboards, and recommendations to support city planning, sustainability, and operational efficiency.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Smart City Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "City-Wide Traffic Simulation", imageKey: 'projectImg1' },
      { id: 2, title: "Utility Network Digital Twin", imageKey: 'projectImg2' },
      { id: 3, "title": "Emergency Response Planning", "imageKey": "projectImg3" },
      { id: 4, title: "Environmental Monitoring Dashboard", imageKey: 'projectImg4' },
      { id: 5, title: "Smart Public Transport System", imageKey: 'projectImg5' },
      { id: 6, title: "Urban Development Modeling", imageKey: 'projectImg6' },
      { id: 7, title: "Waste Management Optimization", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build a Smarter City?',
    description: 'Transform your urban environment with our integrated digital twin solutions. Contact us to shape a more connected and sustainable future.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The urban digital twin provided an incredible overview of our city's infrastructure. The ability to simulate traffic flow and resource usage has revolutionized our planning process.", name: "James Bennett", role: "City Planner", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their team's expertise in data integration was key. We now have a single, unified view of multiple city systems, which has greatly improved our decision-making.", name: "Ahmad Faizal", role: "Director of Urban Development", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '10+', label: 'Smart City Initiatives' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Smart City & Urban Digital Twin services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};