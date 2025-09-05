import { PageData } from '../../pages/SubServicePageLayout';

export const technicalReportsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Technical</span> Reports',
    tagline: 'Clear detailed insights for informed project decisions.',
    description: 'Our technical reports deliver precise, comprehensive, and actionable information, supporting informed decision making, ensuring project accuracy, compliance, and successful outcomes across every stage of construction.',
    backgroundImage: '/hero-consultancy-reports.jpg', // Updated hero background image
    uspItems: [
      { icon: 'FileText', title: 'Clear Documentation', description: 'Detailed reports supporting informed project decisions always.' },
      { icon: 'Database', title: 'Accurate Data', description: 'Reliable analysis ensuring correct conclusions consistently.' },
      { icon: 'BrainCircuit', title: 'Professional Insights', description: 'Expert evaluations enhancing project understanding effectively.' },
      { icon: 'ShieldCheck', title: 'Compliance Focused', description: 'Reports meeting regulatory and technical standards reliably.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our technical report services provide accurate and detailed documentation to support informed decision making and project approvals.',
    scopeItems: [
      { icon: 'DatabaseZap', title: 'Data Collection', description: 'Gather all relevant project information site measurements and test results accurately.' },
      { icon: 'LineChart', title: 'Analysis and Interpretation', description: 'Evaluate collected data to generate meaningful insights for project planning effectively.' },
      { icon: 'FilePenLine', title: 'Report Preparation', description: 'Develop clear structured technical reports summarizing findings observations and recommendations reliably.' },
      { icon: 'FileCheck2', title: 'Regulatory Compliance', description: 'Ensure reports meet legal codes standards and client requirements consistently.' },
      { icon: 'Presentation', title: 'Presentation Support', description: 'Prepare visual aids and presentations for stakeholders’ meetings and approvals effectively.' },
      { icon: 'RefreshCw', title: 'Review and Updates', description: 'Revise reports periodically to reflect project progress changes and new information consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection', description: 'Gather comprehensive project information, measurements, and observations to form the foundation of accurate technical reporting.' },
      { icon: 'BarChart3', title: 'Analysis & Evaluation', description: 'Examine collected data systematically to identify trends, risks, and areas requiring attention or improvement.' },
      { icon: 'DraftingCompass', title: 'Report Drafting', description: 'Prepare clear, detailed, and structured technical reports including findings, conclusions, and actionable recommendations.' },
      { icon: 'Send', title: 'Review & Submission', description: 'Validate report accuracy, incorporate feedback, and submit finalized documentation for stakeholder decision-making and project compliance.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Technical Reports',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Geotechnical Investigation Report", imageKey: 'projectImg1' },
      { id: 2, title: "Structural Integrity Assessment", imageKey: 'projectImg2' },
      { id: 3, "title": "Environmental Impact Study", "imageKey": "projectImg3" },
      { id: 4, title: "Material Compliance Report", imageKey: 'projectImg4' },
      { id: 5, title: "Feasibility Study", imageKey: 'projectImg5' },
      { id: 6, title: "Construction Progress Report", imageKey: 'projectImg6' },
      { id: 7, title: "Final Project Handover Docs", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Need Clarity for Your Project?',
    description: 'Make confident, informed decisions with our clear and accurate technical reporting. Contact us to learn more.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The technical report was exceptionally clear and detailed. It was instrumental in securing stakeholder approval and guiding our construction phase.", name: "James Bennett", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their team's ability to analyze complex data and present it in an understandable format is outstanding. The reports are a crucial part of our decision-making process.", name: "Ahmad Faizal", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '1000+', label: 'Reports Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Technical Reports services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};