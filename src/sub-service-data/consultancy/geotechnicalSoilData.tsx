import { PageData } from '../../pages/SubServicePageLayout';

export const geotechnicalSoilPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Geotechnical & Soil</span> Investigation',
    tagline: 'Strong foundations built on reliable ground studies.',
    description: 'Our geotechnical and soil investigations provide accurate analysis, ensuring safety, stability, and reliability while supporting durable, sustainable, and cost-effective solutions for every construction project.',
    backgroundImage: '/land.jpeg', // TODO: Update image path
    uspItems: [
      { icon: 'Layers', title: 'Reliable Soil Analysis', description: 'Accurate testing ensures stable project foundations.' },
      { icon: 'ShieldCheck', title: 'Risk Reduction', description: 'Identifies potential ground issues early effectively.' },
      { icon: 'Settings2', title: 'Customized Solutions', description: 'Tailored recommendations for each unique site.' },
      { icon: 'Award', title: 'Long Term Safety', description: 'Guarantees durability and structural integrity consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our geotechnical and soil investigation services provide critical data for safe and stable foundation design and construction.',
    scopeItems: [
      { icon: 'TestTube', title: 'Soil Sampling', description: 'Collect soil samples from various depths for laboratory testing and analysis accurately.' },
      { icon: 'Beaker', title: 'Laboratory Testing', description: 'Conduct comprehensive soil tests to determine composition strength and load bearing capacity effectively.' },
      { icon: 'Search', title: 'Site Investigation', description: 'Assess subsurface conditions including groundwater and soil stability for safe design reliably.' },
      { icon: 'Building', title: 'Foundation Recommendations', description: 'Provide engineering recommendations based on soil properties to optimize structural safety consistently.' },
      { icon: 'Mountain', title: 'Slope Stability Analysis', description: 'Evaluate terrain stability to prevent landslides and construction risks effectively.' },
      { icon: 'FileText', title: 'Geotechnical Reporting', description: 'Prepare detailed reports summarizing findings and design suggestions for informed decision making.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Site Assessment', description: 'Conduct thorough on-site inspections to understand soil composition, terrain, and geotechnical conditions accurately.' },
      { icon: 'TestTubes', title: 'Sampling & Testing', description: 'Collect soil and rock samples and perform laboratory tests to determine strength, stability, and suitability.' },
      { icon: 'BarChart3', title: 'Analysis & Reporting', description: 'Analyze test results to provide detailed insights on soil behavior, foundation design, and construction feasibility.' },
      { icon: 'Headset', title: 'Recommendations & Support', description: 'Offer practical engineering recommendations, risk mitigation strategies, and guidance for safe, cost-effective foundation solutions.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Geotechnical Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Rise Foundation Study", imageKey: 'projectImg1' },
      { id: 2, title: "Slope Stability for a Highway", imageKey: 'projectImg2' },
      { id: 3, "title": "Subsurface Investigation", "imageKey": "projectImg3" },
      { id: 4, title: "Bridge Abutment Analysis", imageKey: 'projectImg4' },
      { id: 5, title: "Dam Foundation Testing", imageKey: 'projectImg5' },
      { id: 6, title: "Residential Soil Report", imageKey: 'projectImg6' },
      { id: 7, title: "Commercial Site Assessment", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build on Solid Ground?',
    description: 'Ensure the stability and safety of your project from the ground up. Contact us for a comprehensive geotechnical investigation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The geotechnical report was incredibly detailed and provided the clear foundation recommendations we needed. Their analysis prevented costly issues down the line.", name: "David Chen", role: "Lead Structural Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" },
        { quote: "Their team's expertise in soil investigation was crucial for our complex hillside project. The slope stability analysis was thorough and gave us complete confidence to proceed.", name: "Maria Garcia", role: "Construction Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/9.jpg" }
    ],
    summary: { count: '1000+', label: 'Sites Investigated' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Geotechnical & Soil Investigation services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};