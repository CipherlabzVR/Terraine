import { PageData } from '../../pages/SubServicePageLayout';

export const nineDBimPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">9D BIM</span> – Lean Construction & Productivity',
    tagline: 'Maximizing efficiency through 9D lean construction modeling.',
    description: 'Our 9D BIM services optimize workflows, enhance productivity, and reduce waste, delivering cost effective, timely, and highly efficient construction projects with streamlined operations.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Settings', title: 'Process Optimization', description: 'Streamlines construction workflows consistently.' },
      { icon: 'Trash2', title: 'Waste Reduction', description: 'Minimizes material and time inefficiencies effectively.' },
      { icon: 'TrendingUp', title: 'Enhanced Productivity', description: 'Boosts workforce and project performance reliably.' },
      { icon: 'CircleDollarSign', title: 'Cost Savings', description: 'Reduces unnecessary expenses through lean methods.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our 9D BIM services optimize construction processes by improving efficiency, reducing waste, and enhancing overall project productivity.',
    scopeItems: [
      { icon: 'Map', title: 'Process Mapping', description: 'Analyze construction workflows using BIM to identify inefficiencies and streamline project activities effectively.' },
      { icon: 'Recycle', title: 'Waste Reduction Planning', description: 'Implement strategies to minimize material, time, and resource waste during construction accurately.' },
      { icon: 'UsersRound', title: 'Resource Optimization', description: 'Allocate labor, equipment, and materials efficiently to enhance productivity and reduce delays reliably.' },
      { icon: 'CalendarClock', title: 'Schedule Improvement', description: 'Integrate lean principles with 4D BIM scheduling to optimize timelines and project delivery consistently.' },
      { icon: 'GaugeCircle', title: 'Performance Monitoring', description: 'Track key productivity metrics and identify areas for continuous improvement effectively.' },
      { icon: 'FilePieChart', title: 'Reporting and Feedback', description: 'Generate detailed reports on lean initiatives and productivity gains for informed project decisions accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Workflow Analysis & Data Collection', description: 'Assess construction processes, resource allocation, and project timelines to identify inefficiencies and bottlenecks.' },
      { icon: 'Combine', title: 'BIM Integration & Modeling', description: 'Integrate lean principles into the BIM model to optimize workflows, scheduling, and material usage effectively.' },
      { icon: 'PlayCircle', title: 'Simulation & Optimization', description: 'Run simulations to evaluate productivity, identify waste, and implement strategies to enhance efficiency and reduce costs.' },
      { icon: 'Activity', title: 'Monitoring & Reporting', description: 'Track project performance, generate dashboards, and provide actionable recommendations for continuous improvement and lean execution.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured 9D BIM Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Lean Workflow Simulation", imageKey: 'projectImg1' },
      { id: 2, title: "Waste Reduction Analysis", imageKey: 'projectImg2' },
      { id: 3, "title": "Productivity Monitoring Model", "imageKey": "projectImg3" },
      { id: 4, title: "Optimized Resource Allocation", imageKey: 'projectImg4' },
      { id: 5, title: "Just-In-Time Material Scheduling", imageKey: 'projectImg5' },
      { id: 6, title: "Prefabrication Process Optimization", imageKey: 'projectImg6' },
      { id: 7, title: "Continuous Improvement Reporting", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Maximize Project Efficiency?',
    description: 'Streamline your construction process, reduce waste, and boost productivity with our 9D BIM services. Contact us to learn how.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The 9D BIM approach completely transformed our workflow. We identified and eliminated so much waste, which resulted in significant cost and time savings.", name: "James Bennett", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their productivity monitoring and reporting were excellent. We had clear, actionable insights that helped us make continuous improvements throughout the project.", name: "Ahmad Faizal", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '15%+', label: 'Avg. Productivity Increase' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our 9D BIM – Lean Construction & Productivity services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};