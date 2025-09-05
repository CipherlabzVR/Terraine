import { PageData } from '../../pages/SubServicePageLayout';

export const fieldLaboratoryTestingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Field and Laboratory</span> Testing',
    tagline: 'Reliable testing ensuring safety quality and performance.',
    description: 'Our field and laboratory testing services provide accurate, detailed analysis, verifying material quality, structural integrity, and performance to guarantee safe, durable, and successful project outcomes.',
    backgroundImage: '/hero-consultancy-lab.jpg', // Updated hero background image
    uspItems: [
      { icon: 'ClipboardCheck', title: 'Accurate Testing', description: 'Reliable results ensuring material and structural quality.' },
      { icon: 'FileSearch', title: 'Comprehensive Analysis', description: 'In depth testing for informed project decisions.' },
      { icon: 'ShieldCheck', title: 'Safety Assurance', description: 'Verifying integrity to maintain construction safety standards.' },
      { icon: 'UserCog', title: 'Technical Expertise', description: 'Skilled professionals delivering precise laboratory assessments.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our field and laboratory testing services ensure construction materials and processes meet quality and performance standards.',
    scopeItems: [
      { icon: 'TestTube', title: 'Material Sampling', description: 'Collect construction materials from site for detailed laboratory testing and analysis accurately.' },
      { icon: 'HardHat', title: 'Field Testing', description: 'Conduct on site tests for concrete soil and other materials to verify quality effectively.' },
      { icon: 'Beaker', title: 'Laboratory Analysis', description: 'Perform chemical physical and mechanical tests to assess material properties reliably.' },
      { icon: 'FileCheck2', title: 'Compliance Verification', description: 'Ensure all tested materials meet project specifications standards and regulatory requirements consistently.' },
      { icon: 'FileText', title: 'Reporting', description: 'Prepare detailed test reports documenting results recommendations and compliance effectively.' },
      { icon: 'Headset', title: 'Recommendations', description: 'Suggest corrective actions or alternative materials based on testing results to ensure quality consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Package', title: 'Sample Collection', description: 'Collect representative soil, concrete, or material samples from the site for accurate laboratory analysis.' },
      { icon: 'TestTubes', title: 'Laboratory Testing', description: 'Perform standardized tests to evaluate material properties, strength, durability, and compliance with project specifications.' },
      { icon: 'BarChart3', title: 'Data Analysis', description: 'Analyze test results to identify trends, potential issues, and ensure construction materials meet required standards.' },
      { icon: 'FilePieChart', title: 'Reporting & Recommendations', description: 'Prepare detailed test reports and provide practical recommendations for quality assurance and project optimization.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Testing Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Concrete Strength Testing", imageKey: 'projectImg1' },
      { id: 2, title: "Soil Compaction Analysis", imageKey: 'projectImg2' },
      { id: 3, "title": "Steel Tensile Strength Test", "imageKey": "projectImg3" },
      { id: 4, title: "Asphalt Quality Verification", imageKey: 'projectImg4' },
      { id: 5, title: "Water Quality Analysis", imageKey: 'projectImg5' },
      { id: 6, title: "Aggregate Gradation Testing", imageKey: 'projectImg6' },
      { id: 7, title: "On-Site Weld Inspection", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Ensure Project Quality?',
    description: 'Verify the integrity of your materials and structures with our precise testing services. Contact us for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The laboratory analysis was incredibly thorough and gave us the data we needed to proceed with confidence. Their detailed reports are a benchmark for the industry.", name: "Dr. Ravi Sankar", role: "Quality Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/16.jpg" },
        { quote: "Their field testing team was professional, efficient, and their results were instrumental in ensuring our compliance with safety standards. A crucial service for any major construction project.", name: "Dr. Anjali Verma", role: "Site Supervisor", rating: 5, image: "https://randomuser.me/api/portraits/women/12.jpg" }
    ],
    summary: { count: '10,000+', label: 'Tests Conducted' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Field and Laboratory Testing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};