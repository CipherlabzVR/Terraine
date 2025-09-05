import { PageData } from '../../pages/SubServicePageLayout';

export const predictiveAnalyticsForecastingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Predictive Analytics</span> & Forecasting',
    tagline: 'Anticipating outcomes through intelligent predictive analytics',
    description: 'Our predictive analytics and forecasting services analyze data to identify trends, mitigate risks, and enable informed decision making for optimized construction and engineering project performance.',
    backgroundImage: '/ai-engineering.jpg',
    uspItems: [
      { icon: 'Database', title: 'Data Driven', description: 'Insights guiding informed project decisions consistently' },
      { icon: 'Shield', title: 'Risk Anticipation', description: 'Predicts potential issues effectively' },
      { icon: 'Target', title: 'Optimized Planning', description: 'Improves resource allocation reliably' },
      { icon: 'CheckCircle', title: 'Enhanced Accuracy', description: 'Forecasting reduces uncertainty in outcomes consistently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our predictive analytics services leverage AI to forecast project trends, resource needs, and potential risks for informed decision making efficiently.',
    scopeItems: [
      { icon: 'Database', title: 'Data Collection', description: 'Gather project data from multiple sources to feed predictive models accurately and comprehensively.' },
      { icon: 'TrendingUp', title: 'Trend Analysis', description: 'Identify patterns and trends to anticipate project requirements and potential bottlenecks reliably.' },
      { icon: 'Users', title: 'Resource Forecasting', description: 'Predict labor, material, and equipment needs to optimize allocation and reduce shortages effectively.' },
      { icon: 'AlertTriangle', title: 'Risk Prediction', description: 'Analyze data to forecast possible risks and plan mitigation strategies proactively and consistently.' },
      { icon: 'Monitor', title: 'Scenario Simulation', description: 'Model different project scenarios using predictive analytics to evaluate outcomes and optimize planning accurately.' },
      { icon: 'BarChart', title: 'Reporting and Insights', description: 'Generate clear reports and actionable insights to support strategic decision making efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Integration', description: 'Gather historical and real-time project data for accurate predictive modeling and trend analysis.' },
      { icon: 'Brain', title: 'AI Modeling & Forecasting', description: 'Apply AI algorithms to predict project risks, resource requirements, and future trends with high accuracy.' },
      { icon: 'BarChart3', title: 'Analysis & Scenario Planning', description: 'Evaluate multiple scenarios, identify potential challenges, and optimize strategies for better outcomes.' },
      { icon: 'FileText', title: 'Reporting & Recommendations', description: 'Provide actionable insights, dashboards, and guidance to support informed decision-making and risk mitigation.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Predictive Analytics Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Construction Risk Prediction", imageKey: 'projectImg1' },
      { id: 2, title: "Resource Demand Forecasting", imageKey: 'projectImg2' },
      { id: 3, title: "Project Timeline Prediction", imageKey: 'projectImg3' },
      { id: 4, title: "Cost Overrun Prevention", imageKey: 'projectImg4' },
      { id: 5, title: "Quality Prediction Models", imageKey: 'projectImg5' },
      { id: 6, title: "Supply Chain Optimization", imageKey: 'projectImg6' },
      { id: 7, title: "Performance Forecasting", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready to Predict Your Project Success?',
    description: 'Let our predictive analytics and forecasting services guide your decisions with data-driven insights.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The predictive analytics have transformed our project planning. We can now anticipate issues before they occur and optimize our resource allocation.", name: "David Kim", role: "Operations Director, BuildTech Solutions", rating: 5, image: "https://randomuser.me/api/portraits/men/4.jpg" },
      { quote: "The forecasting accuracy is remarkable. We've reduced project delays by 60% and improved our budget management significantly.", name: "Lisa Wang", role: "Project Manager, Urban Development Corp", rating: 5, image: "https://randomuser.me/api/portraits/women/5.jpg" },
      { quote: "The risk prediction capabilities have given us a competitive edge. We can now bid on projects with confidence and better risk assessment.", name: "Robert Martinez", role: "Construction Manager, InfraBuild Ltd", rating: 5, image: "https://randomuser.me/api/portraits/men/6.jpg" }
    ],
    summary: { count: '300+', label: 'Predictive Models Deployed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us to learn how our predictive analytics can transform your project planning and risk management.',
    phoneNumbers: ['+1 (555) 123-4567'],
    emails: ['predictive@terrene.com'],
    videoBackground: '/about.mp4'
  }
};
