import { PageData } from '../../pages/SubServicePageLayout';

export const predictiveSmartMaintenanceData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Predictive & Smart</span> Maintenance',
    tagline: 'Intelligent maintenance for optimized performance and efficiency.',
    description: 'Our predictive and smart maintenance services use advanced monitoring and analytics to anticipate issues, reduce failures, and enhance system efficiency, reliability, and longevity across all building operations.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'BrainCircuit', title: 'Data Driven', description: 'Uses analytics to predict system failures consistently.' },
      { icon: 'ShieldCheck', title: 'Proactive Solutions', description: 'Prevents downtime before problems occur effectively.' },
      { icon: 'TrendingUp', title: 'Efficiency Boost', description: 'Optimizes maintenance schedules reliably.' },
      { icon: 'CircleDollarSign', title: 'Cost Reduction', description: 'Minimizes unnecessary expenses through smart strategies consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our predictive and smart maintenance services use advanced monitoring and analytics to prevent failures and optimize asset performance efficiently.',
    scopeItems: [
      { icon: 'Signal', title: 'Sensor Installation', description: 'Implement IoT sensors to monitor equipment health and operational conditions in real time accurately.' },
      { icon: 'Database', title: 'Data Collection and Analysis', description: 'Gather and analyze performance data to predict potential failures and maintenance needs reliably.' },
      { icon: 'Bell', title: 'Predictive Alerts', description: 'Generate timely alerts for required maintenance preventing downtime and costly repairs effectively.' },
      { icon: 'CalendarClock', title: 'Optimized Scheduling', description: 'Plan maintenance activities based on predictive insights to minimize disruptions and maximize efficiency consistently.' },
      { icon: 'FilePieChart', title: 'Performance Reporting', description: 'Produce analytical reports to track system performance, maintenance trends, and improvement opportunities accurately.' },
      { icon: 'Combine', title: 'Integration with BIM and CMMS', description: 'Connect predictive maintenance data with BIM or CMMS systems for centralized management effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'DatabaseZap', title: 'Data Collection & Monitoring', description: 'Gather real-time data from equipment, sensors, and systems to track performance and detect anomalies.' },
      { icon: 'LineChart', title: 'Analysis & Prediction', description: 'Use predictive analytics and AI to forecast potential failures and maintenance requirements accurately.' },
      { icon: 'Construction', title: 'Preventive Action & Execution', description: 'Schedule and perform maintenance tasks proactively based on predictive insights to minimize downtime and costs.' },
      { icon: 'FileSearch', title: 'Reporting & Optimization', description: 'Generate detailed reports, monitor results, and refine predictive models to continuously improve maintenance efficiency and reliability.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Smart Maintenance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Industrial IoT Sensor Network", imageKey: 'projectImg1' },
      { id: 2, title: "Predictive Failure Analysis", imageKey: 'projectImg2' },
      { id: 3, "title": "Automated Maintenance Scheduling", "imageKey": "projectImg3" },
      { id: 4, title: "Real-Time Performance Dashboard", imageKey: 'projectImg4' },
      { id: 5, title: "CMMS and BIM Integration", imageKey: 'projectImg5' },
      { id: 6, title: "Energy Consumption Forecasting", imageKey: 'projectImg6' },
      { id: 7, title: "Asset Lifecycle Optimization", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Intelligent Maintenance?',
    description: 'Move beyond reactive repairs with our smart, predictive maintenance solutions. Contact us to optimize your operations.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The predictive maintenance system is phenomenal. We now fix issues before they even happen, which has dramatically increased our uptime and saved us a fortune in emergency repairs.", name: "Hans Müller", role: "Plant Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "Their data analysis and predictive alerts are incredibly accurate. We have full confidence in our equipment's reliability thanks to their smart maintenance program.", name: "Claudia Schneider", role: "Director of Operations", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '40%+', label: 'Reduction in Failures' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Predictive & Smart Maintenance services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};