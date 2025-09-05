import { PageData } from '../../pages/SubServicePageLayout';

export const infrastructureMonitoringPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Infrastructure</span> Monitoring',
    tagline: 'Track Infrastructure Performance Ensure Reliable Operations.',
    description: 'Monitor critical infrastructure continuously to detect issues early, optimize performance, and maintain safety and reliability across all projects efficiently.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Activity', title: 'Real Time Monitoring', description: 'Continuously track infrastructure performance metrics accurately.' },
      { icon: 'LineChart', title: 'Predictive Insights', description: 'Identify potential failures before they occur.' },
      { icon: 'ShieldCheck', title: 'Safety Assurance', description: 'Ensure structural and operational safety at all times.' },
      { icon: 'TrendingUp', title: 'Performance Optimization', description: 'Enhance efficiency and lifespan of critical infrastructure.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our infrastructure monitoring services provide real time insights and predictive analysis to ensure safe, reliable, and optimized project operations.',
    scopeItems: [
      { icon: 'Database', title: 'Data Collection', description: 'Gather real time data from all critical infrastructure systems consistently.' },
      { icon: 'ScanSearch', title: 'Condition Assessment', description: 'Evaluate structural and operational health to identify risks early and accurately.' },
      { icon: 'BarChart3', title: 'Performance Analysis', description: 'Analyze collected data to optimize efficiency and prevent failures effectively.' },
      { icon: 'Bell', title: 'Alert Generation', description: 'Implement automated notifications for deviations or potential issues proactively.' },
      { icon: 'Wrench', title: 'Maintenance Recommendations', description: 'Provide actionable steps to maintain infrastructure integrity and performance reliably.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain detailed records of monitoring results and improvement actions accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'DatabaseZap', title: 'Sensor Deployment & Data Collection', description: 'Install IoT sensors and devices to continuously gather infrastructure performance and condition data.' },
      { icon: 'Box', title: 'Digital Twin Development', description: 'Create a virtual model of infrastructure assets for real-time visualization and monitoring of structural health.' },
      { icon: 'Siren', title: 'Analysis & Alerts', description: 'Track performance, detect anomalies, and generate alerts to prevent failures or safety issues.' },
      { icon: 'FilePieChart', title: 'Reporting & Maintenance Recommendations', description: 'Provide detailed insights, reports, and actionable strategies for maintenance, optimization, and lifecycle management.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Monitoring Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Bridge Structural Health Monitoring", imageKey: 'projectImg1' },
      { id: 2, title: "Dam Integrity and Seepage Analysis", imageKey: 'projectImg2' },
      { id: 3, "title": "Pipeline Corrosion Detection", "imageKey": "projectImg3" },
      { id: 4, title: "Railway Track Condition Monitoring", imageKey: 'projectImg4' },
      { id: 5, title: "Tunnel Ventilation System Performance", imageKey: 'projectImg5' },
      { id: 6, title: "Power Grid Stability Monitoring", imageKey: 'projectImg6' },
      { id: 7, title: "Road Pavement Health Assessment", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Proactive Infrastructure Management?',
    description: 'Ensure the safety, reliability, and longevity of your critical assets with our real-time monitoring solutions. Contact us for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The real-time monitoring of our bridge has been invaluable for ensuring public safety. The predictive insights have allowed us to perform maintenance before issues become critical.", name: "James Bennett", role: "Public Works Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their team's condition assessment of our water supply system was incredibly thorough. We now have a clear, data-driven plan for future upgrades and maintenance.", name: "Ahmad Faizal", role: "Utilities Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '50+', label: 'Critical Assets Monitored' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Infrastructure Monitoring services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};