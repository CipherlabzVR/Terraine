import { PageData } from '../../pages/SubServicePageLayout';

export const arVrTrainingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">AR/VR-based</span> Operations & Training',
    tagline: 'Train Smart Operate Better Experience Virtually.',
    description: 'Enhance operations with immersive AR/VR training, enabling safe practice, efficient workflows, reduced risks, improved learning, and real-time operational support across industries effectively.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'GraduationCap', title: 'Immersive Learning', description: 'Hands-on training in safe virtual environments.' },
      { icon: 'Headset', title: 'Operational Support', description: 'Real-time AR overlays for complex tasks.' },
      { icon: 'CircleDollarSign', title: 'Cost Efficiency', description: 'Reduce training expenses with virtual simulations.' },
      { icon: 'BrainCircuit', title: 'Skill Retention', description: 'Improve knowledge retention through interactive practice.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our AR/VR services revolutionize training and operations, providing immersive experiences that enhance skills, reduce risks, and improve efficiency in critical tasks.',
    scopeItems: [
      { icon: 'Box', title: 'Immersive Training', description: 'Simulate real-world environments, enabling learners to practice skills safely without risks.' },
      { icon: 'Signal', title: 'Remote Guidance', description: 'Deliver real-time augmented overlays for technicians during difficult tasks, improving operational success.' },
      { icon: 'Settings', title: 'Process Optimization', description: 'Streamline workflows through VR process modeling, reducing time inefficiencies and resource wastage.' },
      { icon: 'ShieldCheck', title: 'Risk-Free Practice', description: 'Train staff on dangerous or sensitive tasks virtually, ensuring complete safety every session.' },
      { icon: 'Users', title: 'Team Collaboration', description: 'Facilitate realistic group training and communication exercises through shared virtual spaces.' },
      { icon: 'Gauge', title: 'Performance Tracking', description: 'Monitor progress using detailed analytics from AR/VR training modules, ensuring measurable improvements.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'DatabaseZap', title: 'Data Integration & Modeling', description: 'Collect operational and asset data to create immersive AR/VR digital twin environments for training purposes.' },
      { icon: 'PlayCircle', title: 'Simulation & Visualization', description: 'Develop interactive scenarios to replicate real-world operations, equipment handling, and emergency situations virtually.' },
      { icon: 'GraduationCap', title: 'Training & Skill Development', description: 'Conduct AR/VR sessions to train personnel, improve operational efficiency, and enhance safety awareness.' },
      { icon: 'FilePieChart', title: 'Feedback & Optimization', description: 'Gather trainee feedback, monitor performance, and refine simulations for continuous learning and improved operational outcomes.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured AR/VR Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Virtual Safety Training Module", imageKey: 'projectImg1' },
      { id: 2, title: "AR-Assisted Maintenance", imageKey: 'projectImg2' },
      { id: 3, "title": "VR-Based Equipment Simulation", "imageKey": "projectImg3" },
      { id: 4, title: "Collaborative Design Review", imageKey: 'projectImg4' },
      { id: 5, title: "Immersive Site Walkthrough", imageKey: 'projectImg5' },
      { id: 6, title: "Real-Time Data Overlay", imageKey: 'projectImg6' },
      { id: 7, title: "Process Optimization in VR", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Immersive Training?',
    description: 'Transform your operations and training with our cutting-edge AR/VR solutions. Contact us to experience the future of learning and support.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The AR-assisted guidance for our field technicians has been a game-changer. Complex repairs are now done faster and with fewer errors.", name: "James Bennett", role: "Field Operations Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Our team's skill retention has skyrocketed since we started using their VR training modules. It's safe, effective, and incredibly engaging.", name: "Ahmad Faizal", role: "Training Coordinator", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '50+', label: 'Training Modules Created' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our AR/VR-based Operations & Training services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};