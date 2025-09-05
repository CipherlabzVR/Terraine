import { PageData } from '../../pages/SubServicePageLayout';

export const smartProjectManagementPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Smart</span> Project Management',
    tagline: 'Smart project delivery with precision and efficiency.',
    description: 'Our smart project management ensures seamless planning, effective coordination, timely delivery, and cost efficiency while maximizing productivity and quality throughout every stage of your project.',
    backgroundImage: '/smartser.jpg',
    uspItems: [
      { icon: 'Users', title: 'Efficient Project Management', description: 'Ensures seamless collaboration across all project teams.' },
      { icon: 'Clock', title: 'On Time Delivery', description: 'Projects completed promptly without compromising quality standards.' },
      { icon: 'CircleDollarSign', title: 'Cost Optimization', description: 'Minimizes project expenses through strategic resource management.' },
      { icon: 'ShieldCheck', title: 'Risk Management', description: 'Identifies and mitigates potential project risks proactively.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our smart project management services cover every critical phase integrating technology to ensure your project\'s success from start to finish.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Project Planning', description: 'Develop detailed timelines and milestones ensuring all project phases are clearly structured and coordinated.' },
      { icon: 'UsersRound', title: 'Resource Allocation', description: 'Assign materials human and financial resources efficiently to optimize project execution effectively.' },
      { icon: 'ShieldAlert', title: 'Risk Management', description: 'Identify potential risks and implement mitigation strategies to prevent delays and cost overruns.' },
      { icon: 'Gauge', title: 'Progress Monitoring', description: 'Track project activities regularly to ensure timely completion and adherence to objectives consistently.' },
      { icon: 'Megaphone', title: 'Stakeholder Communication', description: 'Maintain transparent communication with all stakeholders providing updates and addressing concerns efficiently.' },
      { icon: 'CheckSquare', title: 'Quality Control', description: 'Implement standards and inspections throughout construction to maintain high-quality and compliance reliably.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Project Assessment', description: 'Thoroughly evaluate project scope, objectives, stakeholders, and constraints to create a structured, practical, and fully aligned management plan for successful execution.' },
      { icon: 'CalendarDays', title: 'Planning & Scheduling', description: 'Develop detailed timelines, milestones, resource allocation, and task dependencies, ensuring every project phase is strategically mapped for smooth, timely, and efficient progress.' },
      { icon: 'Activity', title: 'Monitoring & Control', description: 'Continuously track project progress, performance metrics, and risks, implementing corrective actions to maintain quality standards and prevent delays throughout the lifecycle.' },
      { icon: 'FilePieChart', title: 'Reporting & Optimization', description: 'Generate comprehensive progress reports, provide actionable insights, and recommend optimization strategies for ongoing improvement and better project outcomes.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Smart Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Private Tropical Villa", imageKey: 'projectImg1' },
      { id: 2, title: "Overwater Luxury Villas", imageKey: 'projectImg2' },
      { id: 3, title: "Sustainable Innovation Center", imageKey: 'projectImg3' },
      { id: 4, title: "Mountain View Retreat", imageKey: 'projectImg4' },
      { id: 5, title: "Desert Oasis Villa", imageKey: 'projectImg5' },
      { id: 6, title: "Urban Loft Conversion", imageKey: 'projectImg6' },
     
    ]
  },
  cta: {
    title: 'Ready to Transform Your Vision?',
    description: 'Let our expert team elevate your project with data-driven strategies and cutting-edge technology, ensuring efficiency and success from start to finish.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The smart project management approach was a game-changer. Real-time data and predictive analytics kept our project on track and under budget. The transparency was unparalleled.", name: "John D.", role: "CEO, TechCorp", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" },
      { quote: "Their digital twin and BIM integration provided incredible foresight. We resolved clashes before they happened and now have a valuable asset for facility management. Truly innovative work.", name: "Samantha P.", role: "COO, Innovate Ltd.", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" },
      { quote: "Exceptional team, exceptional results. Their commitment to quality and data-driven supervision ensured every detail was perfect. We couldn't be happier with the outcome of our new headquarters.", name: "Michael B.", role: "Director of Operations", rating: 5, image: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    summary: { count: '1200+', label: 'Projects Managed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Have questions? Contact us for more information about our Smart Project Management services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};