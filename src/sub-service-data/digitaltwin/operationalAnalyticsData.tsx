import { PageData } from '../../pages/SubServicePageLayout';

export const operationalAnalyticsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Operational Analytics</span> & Decision-Making',
    tagline: 'Data-Driven Insights Smart Operations Better Decisions.',
    description: 'Empower organizations with actionable analytics, transforming operational data into smart decisions, improved efficiency, reduced costs, and sustained business performance for long-term growth.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'BrainCircuit', title: 'Data-Driven Clarity', description: 'Turn complex data into clear, actionable insights.' },
      { icon: 'Zap', title: 'Faster Decisions', description: 'Enable smart decision-making with predictive analytics.' },
      { icon: 'GaugeCircle', title: 'Operational Efficiency', description: 'Optimize processes through real-time performance monitoring.' },
      { icon: 'TrendingUp', title: 'Strategic Growth', description: 'Support long-term planning with advanced forecasting tools.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our analytics services unlock data’s potential, helping organizations make informed, fast, and accurate decisions that improve efficiency, reduce risks, and support sustainable growth.',
    scopeItems: [
      { icon: 'Activity', title: 'Performance Monitoring', description: 'Track operations in real-time, ensuring productivity, resource utilization, and efficiency meet organizational goals.' },
      { icon: 'LineChart', title: 'Predictive Analysis', description: 'Forecast outcomes using trends and models, helping reduce risks and identify growth opportunities.' },
      { icon: 'Settings', title: 'Process Optimization', description: 'Analyze workflows and inefficiencies, implementing improvements that enhance speed, quality, and cost-effectiveness.' },
      { icon: 'ShieldAlert', title: 'Risk Assessment', description: 'Identify potential issues through data patterns, enabling proactive strategies and minimized operational downtime.' },
      { icon: 'ClipboardList', title: 'Strategic Planning', description: 'Support executive decisions with data-backed insights, aligning operations to achieve organizational growth.' },
      { icon: 'Headset', title: 'Decision Support', description: 'Deliver dashboards and reports with actionable intelligence, empowering stakeholders to make timely choices.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'DatabaseZap', title: 'Data Collection & Integration', description: 'Gather real-time operational data from assets, systems, and processes for comprehensive analysis.' },
      { icon: 'Box', title: 'Digital Twin Modeling & Simulation', description: 'Build virtual replicas to simulate scenarios, predict outcomes, and evaluate operational performance.' },
      { icon: 'BarChart3', title: 'Analysis & Insight Generation', description: 'Analyze patterns, trends, and performance metrics to identify inefficiencies and improvement opportunities.' },
      { icon: 'FilePieChart', title: 'Reporting & Strategic Recommendations', description: 'Provide actionable insights, dashboards, and decision-support tools to optimize operations and enhance business outcomes.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Analytics Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Manufacturing Process Optimization", imageKey: 'projectImg1' },
      { id: 2, title: "Supply Chain Predictive Analytics", imageKey: 'projectImg2' },
      { id: 3, "title": "Retail Sales Forecasting", "imageKey": "projectImg3" },
      { id: 4, title: "Operational Risk Assessment", imageKey: 'projectImg4' },
      { id: 5, title: "Energy Consumption Dashboard", imageKey: 'projectImg5' },
      { id: 6, title: "Customer Behavior Analysis", imageKey: 'projectImg6' },
      { id: 7, title: "Strategic Growth Modeling", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Make Data-Driven Decisions?',
    description: 'Unlock the power of your data to drive efficiency, growth, and a competitive edge. Contact our analytics team today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The operational analytics they provided gave us incredible clarity. We were able to optimize our production line and increase efficiency by over 20%.", name: "John Smith", role: "Operations Director", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" },
        { quote: "Their predictive models are scarily accurate. We can now anticipate market trends and make strategic decisions with much greater confidence.", name: "Samantha P.", role: "Head of Strategy", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ],
    summary: { count: '20%+', label: 'Avg. Efficiency Gain' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Operational Analytics & Decision-Making services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};