import { PageData } from '../../pages/SubServicePageLayout';

export const fourDBimPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">4D BIM</span> – Time (Scheduling)',
    tagline: 'Optimizing construction timelines with intelligent 4D modeling.',
    description: 'Our 4D BIM services integrate scheduling with design, enabling real time project visualization, efficient planning, and proactive management for on time project delivery and success.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Eye', title: 'Project Visualization', description: 'Time based models enhancing schedule clarity consistently.' },
      { icon: 'Settings', title: 'Efficient Planning', description: 'Optimizing construction sequences effectively.' },
      { icon: 'ShieldCheck', title: 'Delay Prevention', description: 'Anticipates issues to keep projects on schedule reliably.' },
      { icon: 'UsersRound', title: 'Resource Management', description: 'Aligns workforce and materials efficiently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our 4D BIM services integrate construction schedules with 3D models to optimize project planning and sequencing efficiently.',
    scopeItems: [
      { icon: 'Calendar', title: 'Schedule Integration', description: 'Link 3D models with project timelines ensuring accurate visualization of construction sequences effectively.' },
      { icon: 'PlayCircle', title: 'Construction Simulation', description: 'Simulate project execution to identify delays, conflicts, and optimize workflow for timely completion reliably.' },
      { icon: 'Users', title: 'Resource Allocation Planning', description: 'Analyze labor, equipment, and material needs to optimize usage and reduce waste consistently.' },
      { icon: 'Target', title: 'Milestone Tracking', description: 'Monitor critical tasks and milestones ensuring project stays on schedule and potential delays addressed promptly.' },
      { icon: 'PieChart', title: 'Progress Visualization', description: 'Provide visual updates on construction phases to communicate status and progress to stakeholders accurately.' },
      { icon: 'RefreshCw', title: 'Schedule Updates', description: 'Adjust timelines based on real site conditions or changes ensuring accurate and realistic project planning effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'BarChart3', title: 'Project Timeline Analysis', description: 'Collect project schedule data, milestones, and dependencies to integrate with the BIM model effectively.' },
      { icon: 'Box', title: '4D Model Development', description: 'Link 3D BIM components with project timelines to create a dynamic time-based simulation of construction activities.' },
      { icon: 'Gauge', title: 'Progress Monitoring & Simulation', description: 'Track construction progress, simulate different scenarios, and identify potential delays for proactive management.' },
      { icon: 'FilePieChart', title: 'Reporting & Optimization', description: 'Generate visual timelines, reports, and recommendations to optimize scheduling and improve project delivery efficiency.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured 4D BIM Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Rise Construction Sequencing", imageKey: 'projectImg1' },
      { id: 2, title: "Infrastructure Project Simulation", imageKey: 'projectImg2' },
      { id: 3, "title": "Resource Allocation Planning", "imageKey": "projectImg3" },
      { id: 4, title: "Milestone Tracking for a Complex Build", imageKey: 'projectImg4' },
      { id: 5, title: "Phased Renovation Scheduling", imageKey: 'projectImg5' },
      { id: 6, title: "Logistics and Site Planning", imageKey: 'projectImg6' },
      { id: 7, title: "Visual Progress Reporting", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Keep Your Project On Schedule?',
    description: 'Utilize the power of 4D BIM to visualize timelines, prevent delays, and ensure efficient project delivery. Contact us for a demo.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The 4D simulation was a game-changer. It allowed us to visualize the entire construction sequence and proactively address potential bottlenecks, keeping us on schedule.", name: "James Bennett", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their 4D modeling helped us optimize our resource allocation significantly. We had the right materials and teams on site at the right time, every time.", name: "Ahmad Faizal", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '20%', label: 'Average Schedule Improvement' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our 4D BIM – Time (Scheduling) services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};