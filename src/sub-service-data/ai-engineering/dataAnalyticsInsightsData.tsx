import { PageData } from '../../pages/SubServicePageLayout';

export const dataAnalyticsInsightsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Data Analytics</span> & Insights',
    tagline: 'Transforming construction data into actionable insights',
    description: 'Our data analytics and insights services analyze project data to optimize performance, improve decision making, and enhance efficiency, ensuring smart, more informed construction and engineering solutions.',
    backgroundImage: '/ai-engineering.jpg',
    uspItems: [
      { icon: 'BarChart', title: 'Informed Decisions', description: 'Data driven insights guide projects consistently' },
      { icon: 'TrendingUp', title: 'Performance Optimization', description: 'Identifies areas for improvement effectively' },
      { icon: 'Shield', title: 'Risk Reduction', description: 'Analytics mitigate potential issues reliably' },
      { icon: 'Target', title: 'Strategic Planning', description: 'Supports efficient resource allocation consistently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our data analytics services transform project information into actionable insights for better planning, decision making, and efficiency improvement reliably.',
    scopeItems: [
      { icon: 'Database', title: 'Data Collection', description: 'Gather comprehensive project data from multiple sources to enable accurate analysis and insights consistently.' },
      { icon: 'Settings', title: 'Data Processing', description: 'Clean, organize, and structure raw data to prepare it for meaningful analytics effectively.' },
      { icon: 'TrendingUp', title: 'Trend Analysis', description: 'Identify patterns and anomalies in project data to guide strategic decision making accurately.' },
      { icon: 'BarChart3', title: 'Performance Metrics', description: 'Measure key performance indicators to assess project health, productivity, and operational efficiency reliably.' },
      { icon: 'Monitor', title: 'Predictive Modeling', description: 'Utilize data to forecast outcomes, risks, and opportunities for informed planning and optimization consistently.' },
      { icon: 'BarChart', title: 'Reporting and Visualization', description: 'Present insights through dashboards and reports for easy understanding and actionable decision making effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Cleaning', description: 'Gather and preprocess project, operational, and performance data for accurate AI analysis.' },
      { icon: 'Brain', title: 'AI-Powered Analysis', description: 'Apply machine learning and AI algorithms to extract patterns, trends, and actionable insights from data.' },
      { icon: 'BarChart', title: 'Visualization & Interpretation', description: 'Present insights through dashboards, charts, and reports to help stakeholders understand findings clearly.' },
      { icon: 'Target', title: 'Decision Support & Optimization', description: 'Provide recommendations and strategies to improve efficiency, reduce risks, and support data-driven decision-making.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Data Analytics & Insights Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Performance Analytics", imageKey: 'projectImg1' },
      { id: 2, title: "Operational Intelligence", imageKey: 'projectImg2' },
      { id: 3, title: "Predictive Analytics", imageKey: 'projectImg3' },
      { id: 4, title: "Business Intelligence", imageKey: 'projectImg4' },
      { id: 5, title: "Quality Analytics", imageKey: 'projectImg5' },
      { id: 6, title: "Cost Analytics", imageKey: 'projectImg6' },
      { id: 7, title: "Risk Analytics", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Data into Insights?',
    description: 'Let our data analytics and insights services optimize your project performance and decision-making.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The data analytics have transformed how we approach our projects. We can now make informed decisions based on real data rather than intuition.", name: "Jennifer Lee", role: "Data Analyst, Analytics Corp", rating: 5, image: "https://randomuser.me/api/portraits/women/16.jpg" },
      { quote: "The insights we've gained from the analytics have helped us optimize our operations and reduce costs significantly.", name: "Carlos Mendez", role: "Operations Manager, DataDriven Build", rating: 5, image: "https://randomuser.me/api/portraits/men/17.jpg" },
      { quote: "The predictive capabilities have given us a competitive edge. We can now anticipate trends and plan accordingly.", name: "Amanda Foster", role: "Project Director, Smart Analytics Ltd", rating: 5, image: "https://randomuser.me/api/portraits/women/18.jpg" }
    ],
    summary: { count: '600+', label: 'Analytics Reports Generated' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us to learn how our data analytics can transform your project performance and decision-making.',
    phoneNumbers: ['+1 (555) 123-4567'],
    emails: ['analytics@terrene.com'],
    videoBackground: '/about.mp4'
  }
};
