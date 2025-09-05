import { PageData } from '../../pages/SubServicePageLayout';

export const regulatoryCompliancePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Regulatory & Compliance</span> Advisory',
    tagline: 'Ensuring projects meet regulations efficiently and effectively.',
    description: 'Our regulatory and compliance advisory guides projects through complex legal standards, ensuring full compliance, minimizing risks, and supporting smooth, timely, and successful project execution.',
    backgroundImage: '/hero-consultancy-regulatory.jpg', // Updated hero background image
    uspItems: [
      { icon: 'Gavel', title: 'Legal Expertise', description: 'Ensuring full compliance with regulations accurately.' },
      { icon: 'ShieldCheck', title: 'Risk Minimization', description: 'Reducing potential project delays or penalties proactively.' },
      { icon: 'FileCheck2', title: 'Streamlined Approvals', description: 'Facilitating faster approvals and project progress.' },
      { icon: 'UserCheck', title: 'Client Guidance', description: 'Expert advice for smooth regulatory navigation consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our regulatory and compliance advisory services ensure projects meet all legal standards and industry regulations efficiently.',
    scopeItems: [
      { icon: 'FileSearch', title: 'Code Review', description: 'Examine project plans to ensure adherence to local building codes and regulations accurately.' },
      { icon: 'FileSignature', title: 'Permitting Support', description: 'Assist in obtaining necessary permits and approvals from authorities effectively.' },
      { icon: 'ClipboardCheck', title: 'Compliance Audits', description: 'Conduct regular audits to verify ongoing compliance with applicable laws consistently.' },
      { icon: 'ShieldAlert', title: 'Risk Assessment', description: 'Identify regulatory risks and recommend mitigation strategies reliably.' },
      { icon: 'FolderKanban', title: 'Documentation Management', description: 'Maintain organized records of approvals certifications and compliance reports effectively.' },
      { icon: 'Megaphone', title: 'Stakeholder Communication', description: 'Liaise with government agencies and clients to ensure transparent regulatory processes consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Review', description: 'Examine project regulations, codes, and legal requirements to ensure full compliance and risk mitigation.' },
      { icon: 'FilePenLine', title: 'Documentation Preparation', description: 'Prepare and submit necessary permits, licenses, and compliance documents for smooth project approval processes.' },
      { icon: 'ScanSearch', title: 'Audit & Verification', description: 'Conduct internal audits and inspections to identify gaps and ensure adherence to regulatory standards.' },
      { icon: 'Headset', title: 'Advisory & Support', description: 'Provide ongoing guidance, updates, and recommendations to maintain compliance throughout project lifecycle efficiently.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Compliance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Zoning Permit Acquisition", imageKey: 'projectImg1' },
      { id: 2, title: "Environmental Compliance Audit", imageKey: 'projectImg2' },
      { id: 3, "title": "Building Code Review", "imageKey": "projectImg3" },
      { id: 4, title: "Safety Regulation Assessment", imageKey: 'projectImg4' },
      { id: 5, title: "Historical Preservation Compliance", imageKey: 'projectImg5' },
      { id: 6, title: "Industrial Permitting", imageKey: 'projectImg6' },
      { id: 7, title: "Public Works Approvals", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Navigate Regulations with Ease?',
    description: 'Ensure your project is compliant from day one. Contact our advisory team for expert guidance and support.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their regulatory expertise was a lifesaver. They navigated the complex permitting process for us, saving countless hours and preventing potential delays.", name: "James McAllister", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/10.jpg" },
        { quote: "The compliance audits were thorough and identified critical risks we had overlooked. Their proactive approach is invaluable for any large-scale project.", name: "Sarah Williams", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/10.jpg" }
    ],
    summary: { count: '99%', label: 'Approval Success Rate' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Regulatory & Compliance Advisory services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};