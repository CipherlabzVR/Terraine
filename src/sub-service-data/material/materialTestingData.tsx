// Suggested Filename: materialTestingData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const materialTestingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Material Testing</span> & Certification',
    tagline: 'Reliable testing ensuring certified material quality standards.',
    description: 'Our material testing and certification services verify quality, durability, and compliance, providing accurate results to ensure materials meet standards and deliver safe, reliable, and long-lasting performance.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ClipboardCheck', title: 'Reliable Results', description: 'Accurate testing ensuring material quality consistently.' },
      { icon: 'ShieldCheck', title: 'Compliance Assurance', description: 'Meets industry standards and regulations effectively.' },
      { icon: 'FlaskConical', title: 'Expert Analysis', description: 'Skilled professionals evaluating materials reliably.' },
      { icon: 'ThumbsUp', title: 'Confidence Guaranteed', description: 'Certified materials for safe project execution consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our material testing services verify quality, performance, and compliance of construction materials to ensure safety and durability effectively.',
    scopeItems: [
      { icon: 'Box', title: 'Sample Collection', description: 'Collect material samples from site or suppliers following standardized procedures for accurate testing consistently.' },
      { icon: 'FlaskConical', title: 'Laboratory Testing', description: 'Conduct mechanical, chemical, and physical tests to assess material properties reliably and accurately.' },
      { icon: 'ShieldCheck', title: 'Compliance Verification', description: 'Ensure materials meet local and international standards and regulatory requirements efficiently.' },
      { icon: 'AreaChart', title: 'Performance Evaluation', description: 'Analyze test results to determine suitability for intended construction applications effectively.' },
      { icon: 'Award', title: 'Certification Issuance', description: 'Provide formal certification confirming material quality and compliance for project documentation accurately.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain detailed test records and results for client reference and regulatory compliance consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Box', title: 'Sample Collection & Preparation', description: 'Gather material samples and prepare them according to testing standards and project requirements.' },
      { icon: 'FlaskConical', title: 'Laboratory Testing & Analysis', description: 'Conduct physical, chemical, and mechanical tests to assess material properties and performance.' },
      { icon: 'ClipboardCheck', title: 'Evaluation & Compliance Check', description: 'Compare results against standards, codes, and client specifications to ensure suitability and safety.' },
      { icon: 'Award', title: 'Certification & Reporting', description: 'Issue detailed test reports and certifications, providing documentation for regulatory compliance and quality assurance.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Testing Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Concrete Strength Testing", imageKey: 'projectImg1' },
      { id: 2, title: "Steel Tensile Analysis", imageKey: 'projectImg2' },
      { id: 3, "title": "Soil Compaction Tests", "imageKey": "projectImg3" },
      { id: 4, title: "Aggregate Quality Certification", imageKey: 'projectImg4' },
      { id: 5, title: "Asphalt Mix Design", imageKey: 'projectImg5' },
      { id: 6, title: "Waterproofing Material Test", imageKey: 'projectImg6' },
      { id: 7, title: "Fire Resistance Certification", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Need to Verify Your Materials?',
    description: 'Ensure quality and compliance with professional material testing and certification. Contact us for a quote.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The material testing reports gave us complete confidence in our construction quality. Their process is thorough, and the results are always reliable and delivered on time.", name: "Nimal Perera", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/82.jpg" },
        { quote: "Their certification was crucial for our project's regulatory approval. The team was professional, and their quick turnaround helped us stay on schedule without any issues.", name: "Sunita Fernando", role: "Chief Engineer", rating: 5, image: "https://randomuser.me/api/portraits/women/83.jpg" }
    ],
    summary: { count: '1000+', label: 'Tests Conducted' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Material Testing & Certification services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};