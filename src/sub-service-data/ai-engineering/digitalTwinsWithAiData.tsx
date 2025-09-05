import { PageData } from '../../pages/SubServicePageLayout';

export const digitalTwinsWithAiPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Digital Twins</span> with AI',
    tagline: 'Real time insights through AI powered digital twins',
    description: 'Our AI driven digital twin services provide virtual replicas of projects, enabling monitoring, predictive analysis, and optimized performance for smart, data driven construction and facility management decisions.',
    backgroundImage: '/ai-engineering.jpg',
    uspItems: [
      { icon: 'Monitor', title: 'Real Time Monitoring', description: 'Tracks assets and operations consistently' },
      { icon: 'Wrench', title: 'Predictive Maintenance', description: 'AI forecasts potential failures effectively' },
      { icon: 'BarChart3', title: 'Operational Efficiency', description: 'Optimizes system performance reliably' },
      { icon: 'Database', title: 'Data Driven Decisions', description: 'Informed strategies improving project outcomes consistently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our digital twin services create real time virtual replicas of physical assets for monitoring, simulation, and decision making efficiently.',
    scopeItems: [
      { icon: 'Box', title: 'Virtual Modeling', description: 'Develop accurate digital replicas of assets integrating all systems for real time monitoring effectively.' },
      { icon: 'Database', title: 'Data Integration', description: 'Connect IoT and sensor data to the digital twin for continuous performance tracking reliably.' },
      { icon: 'Monitor', title: 'Simulation and Analysis', description: 'Test operational scenarios virtually to predict outcomes and optimize system efficiency consistently.' },
      { icon: 'Wrench', title: 'Predictive Maintenance', description: 'Use digital twin insights to anticipate failures and schedule timely maintenance accurately.' },
      { icon: 'BarChart3', title: 'Performance Optimization', description: 'Analyze twin data to enhance energy efficiency, workflow, and overall operational performance effectively.' },
      { icon: 'BarChart', title: 'Reporting and Visualization', description: 'Generate interactive dashboards and reports to support management decisions and stakeholder communication efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Integration', description: 'Gather real-time operational, structural, and environmental data to build an accurate digital twin.' },
      { icon: 'Brain', title: 'AI Modeling & Simulation', description: 'Integrate AI to simulate scenarios, predict performance, and optimize building or infrastructure operations.' },
      { icon: 'Monitor', title: 'Monitoring & Analysis', description: 'Continuously track system behavior, detect anomalies, and recommend improvements using AI-driven insights.' },
      { icon: 'BarChart', title: 'Reporting & Decision Support', description: 'Provide actionable dashboards, predictive insights, and recommendations for enhanced efficiency and informed decision-making.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Digital Twins with AI Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Smart Building Twin", imageKey: 'projectImg1' },
      { id: 2, title: "Infrastructure Twin", imageKey: 'projectImg2' },
      { id: 3, title: "Manufacturing Twin", imageKey: 'projectImg3' },
      { id: 4, title: "Energy System Twin", imageKey: 'projectImg4' },
      { id: 5, title: "Transportation Twin", imageKey: 'projectImg5' },
      { id: 6, title: "Healthcare Facility Twin", imageKey: 'projectImg6' },
      { id: 7, title: "Smart City Twin", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready to Create Your Digital Twin?',
    description: 'Let our AI-powered digital twin services provide real-time insights and optimize your operations.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The digital twin has transformed how we manage our buildings. We can now predict issues before they occur and optimize our operations in real-time.", name: "Dr. Sarah Chen", role: "Facility Manager, Smart Buildings Inc", rating: 5, image: "https://randomuser.me/api/portraits/women/10.jpg" },
      { quote: "The AI integration with our digital twin has given us unprecedented visibility into our infrastructure. Maintenance costs have dropped by 30%.", name: "Mark Johnson", role: "Operations Director, InfraTech Solutions", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
      { quote: "The predictive capabilities of our digital twin have revolutionized our asset management. We can now make data-driven decisions with confidence.", name: "Elena Rodriguez", role: "Asset Manager, Future Facilities Ltd", rating: 5, image: "https://randomuser.me/api/portraits/women/12.jpg" }
    ],
    summary: { count: '150+', label: 'Digital Twins Created' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us to learn how our AI-powered digital twins can transform your asset management and operations.',
    phoneNumbers: ['+1 (555) 123-4567'],
    emails: ['digitaltwin@terrene.com'],
    videoBackground: '/about.mp4'
  }
};
