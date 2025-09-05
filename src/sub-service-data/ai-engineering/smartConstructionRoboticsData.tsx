import { PageData } from '../../pages/SubServicePageLayout';

export const smartConstructionRoboticsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Smart Construction</span> & Robotics',
    tagline: 'Enhancing construction efficiency with intelligent robotics',
    description: 'Our smart construction and robotics services integrate AI driven automation, increasing productivity, reducing errors, and streamlining complex construction tasks for faster, safer, and more efficient project execution.',
    backgroundImage: '/ai-engineering.jpg',
    uspItems: [
      { icon: 'Bot', title: 'Automated Solutions', description: 'Robotics enhancing construction efficiency consistently' },
      { icon: 'Target', title: 'Precision Work', description: 'Accurate operations reducing human errors effectively' },
      { icon: 'Clock', title: 'Time Savings', description: 'Accelerates project schedules reliably' },
      { icon: 'Zap', title: 'Innovative Techniques', description: 'Cutting edge methods improving project quality consistently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our smart construction services use robotics and automation to enhance precision, safety, and efficiency across project execution effectively.',
    scopeItems: [
      { icon: 'Bot', title: 'Robotic Equipment Deployment', description: 'Implement robotic systems for construction tasks to improve accuracy, speed, and safety reliably.' },
      { icon: 'Settings', title: 'Automation of Processes', description: 'Utilize automated machinery to reduce manual labor, minimize errors, and optimize productivity consistently.' },
      { icon: 'Monitor', title: 'Construction Monitoring', description: 'Integrate sensors and robotics to monitor work progress and quality accurately.' },
      { icon: 'BarChart3', title: 'Task Optimization', description: 'Plan and execute tasks using robotics for efficient resource utilization and workflow effectively.' },
      { icon: 'Shield', title: 'Safety Enhancement', description: 'Reduce on-site risks by assigning dangerous or repetitive tasks to robotic systems reliably.' },
      { icon: 'Database', title: 'Data Collection and Analysis', description: 'Gather operational data from robotic systems for process improvement and performance tracking accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Planning', description: 'Assess project needs, site conditions, and tasks suitable for automation or robotic implementation.' },
      { icon: 'Bot', title: 'AI & Robotics Integration', description: 'Deploy AI-driven robots and automation systems for construction activities, ensuring precision and efficiency.' },
      { icon: 'Monitor', title: 'Monitoring & Control', description: 'Track robotic operations, adjust workflows, and maintain quality and safety standards throughout the construction process.' },
      { icon: 'BarChart', title: 'Reporting & Optimization', description: 'Analyze performance data, generate insights, and refine AI-robotic systems to maximize productivity and reduce costs.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Smart Construction & Robotics Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Automated Bricklaying", imageKey: 'projectImg1' },
      { id: 2, title: "Smart Concrete Pouring", imageKey: 'projectImg2' },
      { id: 3, title: "Automated Welding", imageKey: 'projectImg3' },
      { id: 4, title: "Smart Material Handling", imageKey: 'projectImg4' },
      { id: 5, title: "Precision Cutting", imageKey: 'projectImg5' },
      { id: 6, title: "Automated Painting", imageKey: 'projectImg6' },
      { id: 7, title: "Smart Quality Inspection", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready to Automate Your Construction?',
    description: 'Let our smart construction and robotics services transform your project execution with intelligent automation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The robotic systems have revolutionized our construction process. We've seen a 50% increase in productivity and significantly improved safety.", name: "James Wilson", role: "Site Manager, RoboBuild Inc", rating: 5, image: "https://randomuser.me/api/portraits/men/7.jpg" },
      { quote: "The precision and consistency of the robotic work is outstanding. We can now deliver higher quality projects in shorter timeframes.", name: "Maria Garcia", role: "Project Director, Smart Construction Ltd", rating: 5, image: "https://randomuser.me/api/portraits/women/8.jpg" },
      { quote: "The automation has reduced our labor costs while improving quality. The ROI has been exceptional for our projects.", name: "Alex Thompson", role: "Operations Manager, Future Build Corp", rating: 5, image: "https://randomuser.me/api/portraits/men/9.jpg" }
    ],
    summary: { count: '200+', label: 'Robotic Systems Deployed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us to learn how our robotics and automation can transform your construction processes.',
    phoneNumbers: ['+1 (555) 123-4567'],
    emails: ['robotics@terrene.com'],
    videoBackground: '/about.mp4'
  }
};
