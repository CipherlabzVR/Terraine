import { PageData } from '../../pages/SubServicePageLayout';

export const fiveDBimPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">5D BIM</span> – Cost (Estimation)',
    tagline: 'Accurate cost estimation through advanced 5D modeling.',
    description: 'Our 5D BIM services link cost data with project models, delivering precise budgeting, real time updates, and efficient resource management for cost-effective construction outcomes.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'CircleDollarSign', title: 'Accurate Budgeting', description: 'Cost models ensuring precise project estimates consistently.' },
      { icon: 'TrendingUp', title: 'Expense Optimization', description: 'Identifies cost saving opportunities effectively.' },
      { icon: 'Eye', title: 'Financial Clarity', description: 'Transparent insights for informed decision making reliably.' },
      { icon: 'ShieldCheck', title: 'Risk Reduction', description: 'Minimizes budget overruns through detailed estimation.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our 5D BIM services link models with cost data providing accurate estimates, budgeting, and financial control throughout projects.',
    scopeItems: [
      { icon: 'Calculator', title: 'Quantity Takeoff', description: 'Extract precise quantities from BIM models to support accurate cost estimation and procurement planning reliably.' },
      { icon: 'BarChart3', title: 'Cost Analysis', description: 'Analyze material, labor, and equipment costs to generate detailed project budgets efficiently.' },
      { icon: 'Gauge', title: 'Budget Monitoring', description: 'Track expenditure against estimates to ensure financial control and minimize cost overruns consistently.' },
      { icon: 'Lightbulb', title: 'Value Engineering', description: 'Identify cost optimization opportunities without compromising quality or design intent effectively.' },
      { icon: 'PlayCircle', title: 'Scenario Modeling', description: 'Simulate different design and construction scenarios to assess financial impacts accurately.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Generate cost reports and documentation for stakeholders to maintain transparency and informed decision-making reliably.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Quantity Takeoff & Data Collection', description: 'Extract quantities from 3D models and gather pricing data for accurate cost estimation.' },
      { icon: 'Box', title: 'Cost Modeling & Integration', description: 'Link quantities and material costs with the BIM model to create a comprehensive 5D cost representation.' },
      { icon: 'LineChart', title: 'Analysis & Optimization', description: 'Evaluate cost implications, identify potential savings, and optimize design and material choices for budget efficiency.' },
      { icon: 'FilePieChart', title: 'Reporting & Decision Support', description: 'Provide detailed cost reports, dashboards, and insights to support informed financial decisions throughout the project.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured 5D BIM Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Real-Time Budget Tracking", imageKey: 'projectImg1' },
      { id: 2, title: "Automated Quantity Takeoff", imageKey: 'projectImg2' },
      { id: 3, "title": "Value Engineering Analysis", "imageKey": "projectImg3" },
      { id: 4, title: "Cost Scenario Modeling", imageKey: 'projectImg4' },
      { id: 5, title: "Procurement Planning", imageKey: 'projectImg5' },
      { id: 6, title: "Financial Risk Assessment", imageKey: 'projectImg6' },
      { id: 7, title: "Lifecycle Cost Analysis", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Accurate Cost Control?',
    description: 'Take control of your project budget with our advanced 5D BIM services. Contact us for a detailed consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The 5D BIM service provided unparalleled financial clarity. We could see the cost implications of every design change in real-time, which kept us on budget.", name: "James Bennett", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their automated quantity takeoff was incredibly accurate and saved our estimation team hundreds of hours. A truly valuable and efficient service.", name: "Ahmad Faizal", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '10%+', label: 'Average Cost Savings' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our 5D BIM – Cost (Estimation) services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};