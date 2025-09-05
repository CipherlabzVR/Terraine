import { PageData } from '../../pages/SubServicePageLayout';

export const costValueEngineeringPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Cost & Value</span> Engineering',
    tagline: 'Maximizing project value through smart cost optimization.',
    description: 'Our cost and value engineering delivers innovative solutions, minimizing expenses while maximizing efficiency, quality, and sustainability to ensure long-lasting value for every client project.',
    backgroundImage: '/cost.jpeg', // TODO: Update image path
    uspItems: [
      { icon: 'TrendingUp', title: 'Maximized Project Value', description: 'Optimizing cost while enhancing overall project quality.' },
      { icon: 'Lightbulb', title: 'Innovative Solutions', description: 'Creative approaches solving complex engineering challenges efficiently.' },
      { icon: 'Target', title: 'Budget Efficiency', description: 'Reducing unnecessary expenses without affecting project standards.' },
      { icon: 'Leaf', title: 'Sustainable Practices', description: 'Ensuring environmentally responsible and cost-effective results.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our cost and value engineering services ensure optimized project budgets while maintaining quality and maximizing return on investment.',
    scopeItems: [
      { icon: 'CircleDollarSign', title: 'Cost Estimation', description: 'Prepare accurate project cost estimates covering materials labor and overhead for effective budgeting.' },
      { icon: 'FileCheck2', title: 'Value Analysis', description: 'Assess design alternatives to improve functionality and reduce unnecessary costs efficiently.' },
      { icon: 'Gauge', title: 'Budget Monitoring', description: 'Track expenditures regularly to ensure project remains within approved financial limits reliably.' },
      { icon: 'Package', title: 'Material Optimization', description: 'Recommend cost-effective materials without compromising quality and performance consistently.' },
      { icon: 'Replace', title: 'Change Management', description: 'Evaluate proposed changes for cost impact and implement approved modifications effectively.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Provide detailed cost reports and documentation for transparency and informed decision making.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Project Cost Assessment', description: 'Analyze project budgets, materials, and processes to identify cost-saving opportunities without compromising quality or functionality.' },
      { icon: 'FileCheck', title: 'Value Analysis', description: 'Evaluate design, materials, and methods to maximize efficiency, performance, and overall project value systematically.' },
      { icon: 'Shuffle', title: 'Optimization & Alternatives', description: 'Recommend alternative solutions, materials, and processes that reduce costs, enhance quality, and improve long-term sustainability.' },
      { icon: 'ShieldCheck', title: 'Implementation & Monitoring', description: 'Support the execution of cost-saving strategies, track financial performance, and adjust plans to ensure optimal value delivery.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Cost-Optimized Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Value-Engineered Commercial Tower", imageKey: 'projectImg1' },
      { id: 2, title: "Budget-Conscious Residential Complex", imageKey: 'projectImg2' },
      { id: 3, title: "Optimized Material Sourcing", imageKey: 'projectImg3' },
      { id: 4, title: "Infrastructure Cost Analysis", imageKey: 'projectImg4' },
      { id: 5, title: "Sustainable Material Integration", imageKey: 'projectImg5' },
      { id: 6, title: "Change Order Management", imageKey: 'projectImg6' },
      { id: 7, title: "High-Value Industrial Facility", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Maximize Your ROI?',
    description: 'Let our expert team enhance your project\'s value with strategic cost engineering. Ensure efficiency and success from start to finish.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "Their cost and value engineering was phenomenal. They identified savings we never thought possible without compromising on the quality of our building.", name: "Jane Doe", role: "CFO, Major Developer", rating: 5, image: "https://randomuser.me/api/portraits/women/4.jpg" },
      { quote: "The value analysis was incredibly thorough. It gave us the confidence to proceed with a more sustainable and cost-effective design.", name: "John Smith", role: "Project Director", rating: 5, image: "https://randomuser.me/api/portraits/men/5.jpg" }
    ],
    summary: { count: '15%+', label: 'Average Cost Savings' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Cost & Value Engineering services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};