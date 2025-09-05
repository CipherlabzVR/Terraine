import { PageData } from '../../pages/SubServicePageLayout';

export const energyResourceOptimizationPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Energy & Resource</span> Optimization',
    tagline: 'Maximize Efficiency Reduce Waste Through Smart Solutions.',
    description: 'Optimize energy and resources across operations to lower costs, boost sustainability, and enhance efficiency, helping projects run smart and more environmentally responsible.',
    backgroundImage: '/con-hero.jpg', // Corrected background image path
    uspItems: [
      { icon: 'FileSearch', title: 'Energy Audits', description: 'Identify areas for energy and resource savings effectively.' },
      { icon: 'Leaf', title: 'Sustainable Solutions', description: 'Implement eco-friendly strategies for resource optimization.' },
      { icon: 'CircleDollarSign', title: 'Cost Reduction', description: 'Reduce operational expenses through efficient resource management.' },
      { icon: 'Gauge', title: 'Performance Tracking', description: 'Monitor energy usage to ensure continuous improvements.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our energy and resource optimization services focus on reducing waste, lowering costs, and promoting sustainable project operations efficiently.',
    scopeItems: [
      { icon: 'ScanSearch', title: 'Energy Assessment', description: 'Evaluate energy consumption patterns to identify inefficiencies and opportunities for cost reduction accurately.' },
      { icon: 'BarChart3', title: 'Resource Analysis', description: 'Analyze water, fuel, and material usage to optimize overall resource efficiency consistently.' },
      { icon: 'Settings', title: 'Optimization Strategy', description: 'Develop strategies to improve energy and resource utilization across operations effectively.' },
      { icon: 'HardHat', title: 'Implementation Support', description: 'Guide the integration of energy saving measures and resource optimization solutions accurately.' },
      { icon: 'Activity', title: 'Monitoring and Tracking', description: 'Continuously track energy and resource usage to ensure sustained efficiency improvements reliably.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain detailed records of optimization measures, savings, and performance improvements accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Assessment', description: 'Gather real-time energy consumption and resource usage data from buildings or industrial systems.' },
      { icon: 'Box', title: 'Digital Twin Modeling', description: 'Create a digital replica to simulate energy flows, resource utilization, and system performance accurately.' },
      { icon: 'LineChart', title: 'Analysis & Optimization', description: 'Identify inefficiencies, evaluate alternative strategies, and implement measures to reduce energy use and waste.' },
      { icon: 'FilePieChart', title: 'Reporting & Continuous Improvement', description: 'Generate actionable insights, dashboards, and recommendations to enhance sustainability and operational efficiency continuously.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Optimization Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Industrial Plant Energy Audit", imageKey: 'projectImg1' },
      { id: 2, title: "Commercial Building Resource Plan", imageKey: 'projectImg2' },
      { id: 3, "title": "Water Usage Optimization", "imageKey": "projectImg3" },
      { id: 4, title: "HVAC Efficiency Modeling", imageKey: 'projectImg4' },
      { id: 5, title: "Renewable Energy Integration", imageKey: 'projectImg5' },
      { id: 6, title: "Waste Reduction Strategy", imageKey: 'projectImg6' },
      { id: 7, title: "Smart Metering & Analytics", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Optimize Your Operations?',
    description: 'Reduce costs and enhance sustainability with our data-driven energy and resource management solutions. Contact us for an assessment.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their energy audit was incredibly thorough and identified significant savings opportunities. Our operational costs are down nearly 15% since implementing their recommendations.", name: "James McAllister", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/10.jpg" },
        { quote: "The resource optimization plan they developed has made our facility much more sustainable. We've reduced both water usage and material waste.", name: "Emma Wilson", role: "Project Coordinator", rating: 5, image: "https://randomuser.me/api/portraits/women/6.jpg" }
    ],
    summary: { count: '15%', label: 'Avg. Cost Reduction' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Energy & Resource Optimization services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};