import { PageData } from '../../pages/SubServicePageLayout';

export const sevenDBimPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">7D BIM</span> – Facility Management',
    tagline: 'Streamlining facility management with advanced 7D modeling.',
    description: 'Our 7D BIM services integrate facility data with project models, enabling efficient operations, maintenance, and lifecycle management for long-lasting building performance and value.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'TrendingUp', title: 'Asset Optimization', description: 'Efficiently manages building resources consistently.' },
      { icon: 'CalendarCheck', title: 'Maintenance Planning', description: 'Schedules proactive inspections effectively.' },
      { icon: 'GaugeCircle', title: 'Operational Efficiency', description: 'Streamlines facility management reliably.' },
      { icon: 'Database', title: 'Data Driven Decisions', description: 'Supports informed FM strategies consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our 7D BIM services streamline facility operations by integrating maintenance, asset management, and lifecycle tracking efficiently.',
    scopeItems: [
      { icon: 'FileText', title: 'Asset Documentation', description: 'Maintain digital records of equipment, systems, and components for efficient management and tracking reliably.' },
      { icon: 'CalendarClock', title: 'Maintenance Scheduling', description: 'Plan preventive and corrective maintenance tasks using BIM data ensuring operational efficiency consistently.' },
      { icon: 'RefreshCw', title: 'Lifecycle Management', description: 'Track assets from installation to replacement to optimize lifecycle costs and performance effectively.' },
      { icon: 'Grid3x3', title: 'Space Management', description: 'Analyze and manage interior spaces to enhance utilization, functionality, and planning accuracy reliably.' },
      { icon: 'Combine', title: 'Integration with CMMS', description: 'Connect BIM data with computerized maintenance management systems for seamless operations efficiently.' },
      { icon: 'BarChart3', title: 'Reporting and Analytics', description: 'Generate maintenance, performance, and operational reports to support informed facility management decisions accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'DatabaseZap', title: 'Data Integration & Mapping', description: 'Collect asset information, equipment details, and facility data for integration into the BIM model.' },
      { icon: 'Box', title: 'FM Model Development', description: 'Create a 7D BIM model that links building components with maintenance schedules, manuals, and operational data.' },
      { icon: 'Activity', title: 'Monitoring & Management', description: 'Track facility performance, plan preventive maintenance, and optimize space utilization for efficiency.' },
      { icon: 'FilePieChart', title: 'Reporting & Decision Support', description: 'Generate FM reports, dashboards, and recommendations to support long-term facility management and operational planning.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured 7D BIM Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Hospital Asset Management", imageKey: 'projectImg1' },
      { id: 2, title: "University Campus Operations", imageKey: 'projectImg2' },
      { id: 3, "title": "Corporate HQ Lifecycle Model", "imageKey": "projectImg3" },
      { id: 4, title: "Airport Maintenance Scheduling", imageKey: 'projectImg4' },
      { id: 5, title: "Retail Mall Space Management", imageKey: 'projectImg5' },
      { id: 6, title: "Data Center CMMS Integration", imageKey: 'projectImg6' },
      { id: 7, title: "Smart Building Operations", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Smarter Facility Management?',
    description: 'Optimize your building\'s entire lifecycle with our advanced 7D BIM solutions. Contact us to enhance your operational efficiency.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The 7D BIM model has revolutionized our facility management. We can now track assets and schedule maintenance proactively, which has significantly reduced downtime.", name: "John Smith", role: "Facility Director", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" },
        { quote: "Integrating our CMMS with the BIM model was seamless. Our operations are more efficient, and the lifecycle data is invaluable for future planning.", name: "Samantha P.", role: "COO, Innovate Ltd.", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ],
    summary: { count: '25%', label: 'Avg. Maintenance Savings' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our 7D BIM – Facility Management services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};