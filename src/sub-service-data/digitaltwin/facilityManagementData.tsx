import { PageData } from '../../pages/SubServicePageLayout';

export const facilityManagementPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Facility Management</span> & Space Utilization',
    tagline: 'Optimize Spaces Maximize Facility Efficiency Consistently.',
    description: 'Efficiently manage facilities and space utilization to improve workflow, reduce costs, enhance comfort, and increase overall operational productivity across projects.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'LayoutGrid', title: 'Space Planning', description: 'Design layouts to maximize utilization and efficiency.' },
      { icon: 'GaugeCircle', title: 'Operational Efficiency', description: 'Streamline facility operations for better performance.' },
      { icon: 'CircleDollarSign', title: 'Cost Optimization', description: 'Reduce facility management costs effectively.' },
      { icon: 'UsersRound', title: 'Resource Management', description: 'Allocate resources to optimize spaces continuously.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our facility management and space utilization services ensure optimized layouts, efficient operations, and reduced costs for superior project performance.',
    scopeItems: [
      { icon: 'ScanSearch', title: 'Facility Assessment', description: 'Evaluate current facility usage to identify inefficiencies and improvement opportunities accurately.' },
      { icon: 'Grid3x3', title: 'Space Planning', description: 'Design optimal layouts to maximize usable space and operational efficiency consistently.' },
      { icon: 'Settings', title: 'Operational Management', description: 'Implement processes to streamline facility operations and enhance productivity effectively.' },
      { icon: 'Users', title: 'Resource Allocation', description: 'Assign staff and equipment efficiently to maintain smooth facility functioning reliably.' },
      { icon: 'Activity', title: 'Monitoring and Reporting', description: 'Track space usage and operational metrics to ensure continuous optimization accurately.' },
      { icon: 'Lightbulb', title: 'Improvement Recommendations', description: 'Provide actionable steps to enhance facility management and space utilization effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'DatabaseZap', title: 'Data Integration & Mapping', description: 'Collect building layouts, occupancy, and asset information for accurate space and facility analysis.' },
      { icon: 'Box', title: 'Digital Twin Development', description: 'Create a virtual model linking assets, spaces, and systems for real-time management insights.' },
      { icon: 'LineChart', title: 'Monitoring & Optimization', description: 'Track space usage, asset performance, and operational efficiency to optimize facility management practices.' },
      { icon: 'FilePieChart', title: 'Reporting & Recommendations', description: 'Provide reports, dashboards, and actionable strategies to enhance space utilization, reduce costs, and improve operations.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Facility Management Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Corporate Office Space Optimization", imageKey: 'projectImg1' },
      { id: 2, title: "University Campus Facility Audit", imageKey: 'projectImg2' },
      { id: 3, "title": "Retail Mall Operations Management", "imageKey": "projectImg3" },
      { id: 4, title: "Hospital Space Utilization Plan", imageKey: 'projectImg4' },
      { id: 5, title: "Smart Building Resource Allocation", imageKey: 'projectImg5' },
      { id: 6, title: "Warehouse Logistics Flow", imageKey: 'projectImg6' },
      { id: 7, title: "Preventive Maintenance Scheduling", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Optimize Your Facility?',
    description: 'Enhance your operational efficiency and reduce costs with our expert facility and space management services. Contact us today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their space utilization plan was brilliant. We were able to accommodate more staff comfortably and improve our workflow without needing to expand.", name: "Hans Müller", role: "Office Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "The operational efficiencies we've gained since implementing their facility management strategies have been substantial. A truly valuable service.", name: "Claudia Schneider", role: "COO", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '20%+', label: 'Increase in Space Efficiency' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Facility Management & Space Utilization services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};