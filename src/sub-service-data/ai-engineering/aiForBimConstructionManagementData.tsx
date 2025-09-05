import { PageData } from '../../pages/SubServicePageLayout';

export const aiForBimConstructionManagementPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">AI for BIM</span> & Construction Management',
    tagline: 'Intelligent BIM integration for efficient project management',
    description: 'Our AI for BIM and construction management services optimize workflows, enhance coordination, and provide data driven insights, improving efficiency, reducing risks, and ensuring successful project delivery.',
    backgroundImage: '/ai-engineering.jpg',
    uspItems: [
      { icon: 'Box', title: 'Integrated Systems', description: 'AI enhances BIM workflows consistently' },
      { icon: 'CheckCircle', title: 'Error Minimization', description: 'Reduces design and construction mistakes effectively' },
      { icon: 'BarChart3', title: 'Efficiency Boost', description: 'Optimizes project management processes reliably' },
      { icon: 'Eye', title: 'Predictive Insights', description: 'Anticipates issues for better planning consistently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our AI integrated BIM services enhance construction management by automating tasks, predicting risks, and optimizing workflows efficiently.',
    scopeItems: [
      { icon: 'Search', title: 'Model Analysis', description: 'Use AI to assess BIM models for design inconsistencies, clashes, and optimization opportunities accurately.' },
      { icon: 'Calendar', title: 'Construction Scheduling', description: 'Integrate AI with 4D BIM to improve task sequencing and project timeline efficiency reliably.' },
      { icon: 'Users', title: 'Resource Optimization', description: 'Apply AI to allocate labor, equipment, and materials effectively reducing waste and costs consistently.' },
      { icon: 'AlertTriangle', title: 'Risk Prediction', description: 'Analyze project data to forecast potential risks and implement proactive mitigation measures accurately.' },
      { icon: 'Monitor', title: 'Progress Monitoring', description: 'Track construction activities using AI insights to ensure schedule adherence and quality control effectively.' },
      { icon: 'BarChart', title: 'Reporting and Insights', description: 'Generate AI driven reports highlighting project performance, issues, and improvement recommendations efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Integration', description: 'Gather BIM models, project schedules, and construction data for AI-powered analysis and optimization.' },
      { icon: 'Brain', title: 'AI-Driven Modeling & Simulation', description: 'Use AI to simulate construction sequences, detect clashes, and optimize workflows for efficiency.' },
      { icon: 'Monitor', title: 'Monitoring & Performance Tracking', description: 'Track project progress, resource utilization, and quality using AI insights for proactive management.' },
      { icon: 'BarChart', title: 'Reporting & Decision Support', description: 'Provide dashboards, predictive analytics, and recommendations to enhance project delivery and reduce risks.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'AI for BIM & Construction Management Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Smart BIM Coordination", imageKey: 'projectImg1' },
      { id: 2, title: "Intelligent Scheduling", imageKey: 'projectImg2' },
      { id: 3, title: "Automated Quality Control", imageKey: 'projectImg3' },
      { id: 4, title: "Smart Resource Management", imageKey: 'projectImg4' },
      { id: 5, title: "Predictive Risk Management", imageKey: 'projectImg5' },
      { id: 6, title: "Intelligent Cost Control", imageKey: 'projectImg6' },
      { id: 7, title: "Smart Project Analytics", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready to Integrate AI with Your BIM?',
    description: 'Let our AI for BIM and construction management services optimize your project workflows and delivery.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The AI integration with our BIM workflows has transformed our project delivery. We can now detect issues before they become problems.", name: "Tom Anderson", role: "BIM Manager, Digital Construction Ltd", rating: 5, image: "https://randomuser.me/api/portraits/men/13.jpg" },
      { quote: "The automated clash detection and resource optimization have saved us countless hours and significantly improved our project outcomes.", name: "Rachel Green", role: "Project Director, Smart Build Corp", rating: 5, image: "https://randomuser.me/api/portraits/women/14.jpg" },
      { quote: "The AI-powered insights have given us unprecedented visibility into our projects. We can now make data-driven decisions with confidence.", name: "Kevin Park", role: "Construction Manager, Future Projects Inc", rating: 5, image: "https://randomuser.me/api/portraits/men/15.jpg" }
    ],
    summary: { count: '400+', label: 'BIM Projects Enhanced' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us to learn how our AI-integrated BIM services can transform your construction project management.',
    phoneNumbers: ['+1 (555) 123-4567'],
    emails: ['ai-bim@terrene.com'],
    videoBackground: '/about.mp4'
  }
};
