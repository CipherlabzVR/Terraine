import { PageData } from '../../pages/SubServicePageLayout';

export const predictivePreventiveMaintenancePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Predictive & Preventive</span> Maintenance',
    tagline: 'Prevent Failures Maximize Efficiency Through Predictive Maintenance.',
    description: 'Implement predictive and preventive maintenance strategies to minimize downtime, extend asset life, and optimize operational performance efficiently and reliably.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'LineChart', title: 'Predictive Analytics', description: 'Detect potential issues before they affect operations.' },
      { icon: 'CalendarCheck', title: 'Scheduled Maintenance', description: 'Regular checks to ensure consistent asset performance.' },
      { icon: 'TrendingDown', title: 'Downtime Prevention', description: 'Reduce unexpected stoppages and costly repairs efficiently.' },
      { icon: 'TrendingUp', title: 'Performance Optimization', description: 'Enhance productivity with proactive maintenance strategies.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our predictive and preventive maintenance services proactively monitor assets to prevent failures, ensuring smooth, uninterrupted operations effectively.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Maintenance Planning', description: 'Develop scheduled maintenance plans based on asset usage patterns and manufacturer recommendations accurately.' },
      { icon: 'Activity', title: 'Condition Monitoring', description: 'Continuously monitor asset condition to detect early signs of wear or failure efficiently.' },
      { icon: 'BrainCircuit', title: 'Predictive Analysis', description: 'Analyze operational data to forecast potential breakdowns and maintenance requirements effectively.' },
      { icon: 'Wrench', title: 'Corrective Recommendations', description: 'Provide actionable maintenance steps to prevent failure and maintain optimal performance consistently.' },
      { icon: 'UsersRound', title: 'Resource Allocation', description: 'Allocate manpower, tools, and materials effectively for planned maintenance activities accurately.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain detailed records of maintenance schedules, inspections, and performance improvements reliably.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Analysis', description: 'Gather historical and real-time asset data to identify patterns and potential failures early.' },
      { icon: 'Box', title: 'Maintenance Scheduling & Modeling', description: 'Integrate predictive algorithms with the digital twin to schedule preventive maintenance efficiently.' },
      { icon: 'Siren', title: 'Monitoring & Alerts', description: 'Continuously track asset health, detect deviations, and send alerts to avoid unexpected downtime.' },
      { icon: 'FilePieChart', title: 'Reporting & Optimization', description: 'Generate maintenance reports, evaluate performance, and recommend improvements to extend asset lifespan and reduce costs.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Maintenance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Industrial Pump Failure Prediction", imageKey: 'projectImg1' },
      { id: 2, title: "HVAC System Preventive Maintenance", imageKey: 'projectImg2' },
      { id: 3, "title": "Fleet Vehicle Maintenance Scheduling", "imageKey": "projectImg3" },
      { id: 4, title: "Power Grid Anomaly Detection", imageKey: 'projectImg4' },
      { id: 5, title: "Automated Maintenance Work Orders", imageKey: 'projectImg5' },
      { id: 6, title: "Building Equipment Health Monitoring", imageKey: 'projectImg6' },
      { id: 7, title: "Lifecycle Extension Analysis", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Eliminate Downtime?',
    description: 'Shift from reactive repairs to proactive maintenance with our predictive solutions. Contact us to learn how.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their predictive maintenance system has been a game-changer. We've seen a significant reduction in unexpected equipment failures and our operational uptime has never been better.", name: "James Bennett", role: "Plant Supervisor", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "The ability to forecast maintenance needs has optimized our resource planning and saved us a considerable amount on emergency repairs. Highly recommended.", name: "Ahmad Faizal", role: "Maintenance Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '30%+', label: 'Reduction in Downtime' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Predictive & Preventive Maintenance services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};