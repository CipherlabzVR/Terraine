import { PageData } from '../../pages/SubServicePageLayout';

export const aiPoweredDesignPlanningPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">AI-Powered Design</span> & Planning',
    tagline: 'Intelligent design solutions transforming project planning processes',
    description: 'Our AI powered design and planning services use advanced algorithms to optimize layouts, enhance efficiency, and deliver innovative, data driven solutions for every construction project.',
    backgroundImage: '/ai-engineering.jpg',
    uspItems: [
      { icon: 'Brain', title: 'Intelligent Designs', description: 'AI driven plans optimize project outcomes consistently' },
      { icon: 'TrendingUp', title: 'Predictive Insights', description: 'Anticipates challenges for better decision making effectively' },
      { icon: 'Clock', title: 'Time Efficiency', description: 'Accelerates design process reliably' },
      { icon: 'Lightbulb', title: 'Innovative Solutions', description: 'Creative AI approaches enhancing project quality consistently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our AI powered design services integrate intelligent algorithms to optimize planning, enhance accuracy, and accelerate decision making efficiently.',
    scopeItems: [
      { icon: 'Search', title: 'Design Analysis', description: 'Use AI to evaluate multiple design options and select optimal solutions for client requirements accurately.' },
      { icon: 'Settings', title: 'Automation of Repetitive Tasks', description: 'Implement AI to automate design workflows reducing manual errors and saving time consistently.' },
      { icon: 'BarChart3', title: 'Optimization of Resources', description: 'Analyze material, labor, and time utilization using AI to maximize efficiency effectively.' },
      { icon: 'Monitor', title: 'Scenario Simulation', description: 'Test various design scenarios using AI to predict outcomes and mitigate risks reliably.' },
      { icon: 'Box', title: 'Integration with BIM', description: 'Combine AI insights with BIM models for comprehensive design visualization and coordination accurately.' },
      { icon: 'FileText', title: 'Performance Reporting', description: 'Generate AI based reports detailing design efficiency, potential issues, and recommended improvements effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Gathering & Analysis', description: 'Collect project data, client needs, and design objectives to guide AI-powered planning.' },
      { icon: 'Brain', title: 'AI Modeling & Simulation', description: 'Use AI algorithms to generate optimized design layouts, simulations, and planning alternatives efficiently.' },
      { icon: 'CheckSquare', title: 'Evaluation & Refinement', description: 'Analyze AI-generated designs, refine solutions, and align them with client expectations and feasibility.' },
      { icon: 'Send', title: 'Final Delivery & Support', description: 'Provide validated design plans, 3D visualizations, and guidance for seamless implementation in real projects.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'AI-Powered Design Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Smart Building Design", imageKey: 'projectImg1' },
      { id: 2, title: "Intelligent Infrastructure", imageKey: 'projectImg2' },
      { id: 3, title: "Automated Layout Design", imageKey: 'projectImg3' },
      { id: 4, title: "Predictive Planning", imageKey: 'projectImg4' },
      { id: 5, title: "Smart Urban Design", imageKey: 'projectImg5' },
      { id: 6, title: "Intelligent Renovation", imageKey: 'projectImg6' },
      { id: 7, title: "Smart Project Management", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready to Transform Your Design Process?',
    description: 'Let our AI-powered design and planning services optimize your projects with intelligent solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The AI-powered design solutions have revolutionized our planning process. We've seen a 40% reduction in design time and significantly improved accuracy.", name: "Sarah Johnson", role: "Project Manager, TechCorp", rating: 5, image: "https://randomuser.me/api/portraits/women/1.jpg" },
      { quote: "The predictive insights and automated optimization have transformed how we approach complex projects. Highly recommended for any forward-thinking firm.", name: "Michael Chen", role: "Architect, UrbanDesign Studio", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" },
      { quote: "The AI integration with BIM has streamlined our entire workflow. We can now handle more projects with better quality and efficiency.", name: "Emily Rodriguez", role: "Construction Director, BuildRight Inc.", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ],
    summary: { count: '500+', label: 'AI Projects Completed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us to learn how our intelligent design solutions can transform your project planning and execution.',
    phoneNumbers: ['+1 (555) 123-4567'],
    emails: ['ai-design@terrene.com'],
    videoBackground: '/about.mp4'
  }
};
