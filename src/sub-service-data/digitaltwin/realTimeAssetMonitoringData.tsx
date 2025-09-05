import { PageData } from '../../pages/SubServicePageLayout';

export const realTimeAssetMonitoringPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Real-Time Asset Monitoring</span> & Performance Tracking',
    tagline: 'Monitor Assets Continuously Ensure Peak Performance.',
    description: 'Track, analyze, and optimize assets in real time to improve efficiency, reduce downtime, and maximize operational performance effectively.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Activity', title: 'Continuous Monitoring', description: 'Ensure your assets operate at peak efficiency.' },
      { icon: 'LineChart', title: 'Real Time Analytics', description: 'Immediate insights for proactive operational decisions.' },
      { icon: 'TrendingDown', title: 'Downtime Reduction', description: 'Minimize unexpected stoppages and optimize uptime consistently.' },
      { icon: 'TrendingUp', title: 'Performance Optimization', description: 'Enhance productivity and resource utilization effectively.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our real-time asset monitoring services provide continuous data insights to optimize asset performance and reduce operational risks efficiently.',
    scopeItems: [
      { icon: 'Database', title: 'Asset Data Collection', description: 'Collect real time operational data from critical assets across all locations accurately and efficiently.' },
      { icon: 'BarChart3', title: 'Performance Analysis', description: 'Analyze collected data to identify trends, anomalies, and improvement opportunities for enhanced operational efficiency.' },
      { icon: 'Bell', title: 'Alert and Notification System', description: 'Implement automated alerts to notify managers immediately about any deviations or performance issues detected.' },
      { icon: 'Combine', title: 'Integration with Systems', description: 'Seamlessly integrate asset monitoring data into existing enterprise management software for centralized control and visibility.' },
      { icon: 'FilePieChart', title: 'Reporting and Visualization', description: 'Generate interactive dashboards and visual reports to help management make informed operational decisions confidently.' },
      { icon: 'Lightbulb', title: 'Optimization Recommendations', description: 'Provide actionable insights and recommendations to improve asset performance, reduce costs, and increase overall productivity.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'DatabaseZap', title: 'Data Integration & Sensor Deployment', description: 'Collect real-time data from IoT sensors, devices, and systems for accurate asset monitoring.' },
      { icon: 'Box', title: 'Digital Twin Modeling', description: 'Create a digital replica of physical assets to visualize performance, status, and operational metrics dynamically.' },
      { icon: 'Siren', title: 'Monitoring & Alerts', description: 'Track asset conditions continuously, detect anomalies, and generate alerts for preventive or corrective action.' },
      { icon: 'FileSearch', title: 'Reporting & Optimization', description: 'Analyze performance trends, generate reports, and provide actionable insights to improve efficiency and reliability.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Monitoring Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Industrial Machinery Monitoring", imageKey: 'projectImg1' },
      { id: 2, title: "Smart Building HVAC Performance", imageKey: 'projectImg2' },
      { id: 3, "title": "Fleet Vehicle Tracking", "imageKey": "projectImg3" },
      { id: 4, title: "Energy Consumption Analytics", imageKey: 'projectImg4' },
      { id: 5, title: "Infrastructure Health Monitoring", imageKey: 'projectImg5' },
      { id: 6, title: "Supply Chain Asset Tracking", imageKey: 'projectImg6' },
      { id: 7, title: "Automated Alert System", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Real-Time Insights?',
    description: 'Optimize your operations and reduce downtime with our advanced asset monitoring solutions. Contact us for a live demo.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The real-time monitoring system has been a game-changer for our plant's efficiency. We can now address issues proactively, which has drastically reduced our downtime.", name: "John Smith", role: "Operations Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" },
        { quote: "Their team integrated the asset tracking data seamlessly with our existing software. The level of visibility and control we have now is phenomenal.", name: "Samantha P.", role: "COO, Innovate Ltd.", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ],
    summary: { count: '20%+', label: 'Increase in Efficiency' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Real-Time Asset Monitoring services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};