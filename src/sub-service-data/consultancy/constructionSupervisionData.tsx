import { PageData } from '../../pages/SubServicePageLayout';

export const constructionSupervisionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Construction Supervision</span> & QA/QC',
    tagline: 'Ensuring quality excellence through expert project supervision.',
    description: 'Our construction supervision and QA/QC services maintain strict quality standards, monitor progress, and ensure precise execution, delivering safe, durable, and high-quality projects every time.',
    backgroundImage: '/hero-consultancy-supervision.jpg', // Updated hero background image
    uspItems: [
      { icon: 'Award', title: 'Quality Assurance', description: 'Ensuring high standards in every construction project.' },
      { icon: 'UserCheck', title: 'Expert Supervision', description: 'Skilled oversight minimizing errors and delays consistently.' },
      { icon: 'ShieldCheck', title: 'Safety Compliance', description: 'Maintaining strict adherence to safety regulations always.' },
      { icon: 'Clock', title: 'Timely Execution', description: 'Projects completed efficiently within scheduled timelines.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our construction supervision and QA QC services ensure quality workmanship compliance with standards and timely project delivery.',
    scopeItems: [
      { icon: 'HardHat', title: 'Site Supervision', description: 'Monitor construction activities to ensure adherence to designs schedules and safety protocols accurately.' },
      { icon: 'ClipboardCheck', title: 'Quality Control Inspections', description: 'Conduct regular inspections to verify workmanship materials and construction practices effectively.' },
      { icon: 'FilePieChart', title: 'Progress Reporting', description: 'Prepare detailed reports documenting site activities achievements and issues reliably.' },
      { icon: 'FileCheck2', title: 'Compliance Monitoring', description: 'Ensure construction follows local codes standards and contractual requirements consistently.' },
      { icon: 'MessageSquareWarning', title: 'Issue Resolution', description: 'Identify on site problems and provide solutions to maintain project progress effectively.' },
      { icon: 'Users', title: 'Coordination with Teams', description: 'Facilitate communication between contractor’s engineers and stakeholders to optimize project execution consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Site Preparation & Planning', description: 'Assess construction plans, organize resources, and establish quality control standards for efficient project execution.' },
      { icon: 'ScanSearch', title: 'Monitoring & Inspection', description: 'Regularly supervise construction activities, ensuring work adheres to design specifications, safety, and quality standards.' },
      { icon: 'TestTube2', title: 'Testing & Verification', description: 'Conduct material and workmanship testing to confirm compliance with industry regulations and project requirements.' },
      { icon: 'FileText', title: 'Reporting & Recommendations', description: 'Provide detailed progress reports, highlight issues, and suggest corrective measures to maintain high-quality outcomes.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Supervision Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Rise Quality Assurance", imageKey: 'projectImg1' },
      { id: 2, title: "Infrastructure Project Supervision", imageKey: 'projectImg2' },
      { id: 3, "title": "Industrial Site Safety Monitoring", "imageKey": "projectImg3" },
      { id: 4, title: "Residential Construction QC", imageKey: 'projectImg4' },
      { id: 5, title: "Commercial Building Inspection", imageKey: 'projectImg5' },
      { id: 6, title: "MEP Systems Verification", imageKey: 'projectImg6' },
      { id: 7, title: "Finishing Works Quality Control", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Flawless Build?',
    description: 'Ensure your project meets the highest standards of quality and safety. Contact our supervision team today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their on-site supervision was exceptional. The QA/QC team caught potential issues before they became problems, saving us time and money. I can't recommend them enough.", name: "Liam O’Connor", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/9.jpg" },
        { quote: "The level of detail in their progress reports and their commitment to safety compliance gave us complete peace of mind throughout the entire construction phase.", name: "Jessica Martin", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/5.jpg" }
    ],
    summary: { count: '100+', label: 'Projects Supervised' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Construction Supervision & QA/QC services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};