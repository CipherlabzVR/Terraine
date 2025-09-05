import { PageData } from '../../pages/SubServicePageLayout';

export const eightDBimPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">8D BIM</span> – Safety & Risk Management',
    tagline: 'Enhancing safety measures with proactive 8D modeling.',
    description: 'Our 8D BIM services identify risks, improve safety planning, and support proactive management, ensuring secure, efficient, and compliant construction processes across every project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldCheck', title: 'Risk Mitigation', description: 'Identifies potential hazards consistently.' },
      { icon: 'ClipboardList', title: 'Safety Planning', description: 'Integrates safety measures effectively.' },
      { icon: 'TrendingDown', title: 'Incident Reduction', description: 'Minimizes accidents and project disruptions reliably.' },
      { icon: 'Award', title: 'Compliance Assurance', description: 'Ensures adherence to safety regulations consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our 8D BIM services enhance construction safety by identifying risks, planning mitigations, and monitoring compliance throughout projects.',
    scopeItems: [
      { icon: 'Search', title: 'Hazard Identification', description: 'Analyze BIM models to detect potential safety hazards during construction and operational phases accurately.' },
      { icon: 'ShieldAlert', title: 'Risk Assessment', description: 'Evaluate the severity and likelihood of risks to prioritize mitigation strategies effectively.' },
      { icon: 'FileText', title: 'Safety Planning', description: 'Develop comprehensive safety plans and procedures based on project-specific risks consistently.' },
      { icon: 'PlayCircle', title: 'Simulation and Training', description: 'Conduct virtual simulations for worker training and safety protocol implementation reliably.' },
      { icon: 'Gauge', title: 'Compliance Monitoring', description: 'Track adherence to safety regulations, standards, and guidelines ensuring legal and operational compliance efficiently.' },
      { icon: 'FilePenLine', title: 'Incident Documentation', description: 'Maintain records of safety incidents and corrective actions for reporting and future prevention accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Hazard Identification & Analysis', description: 'Evaluate construction activities, site conditions, and design elements to identify potential safety risks.' },
      { icon: 'Box', title: 'Safety Integration in BIM', description: 'Embed safety measures, protocols, and hazard zones into the BIM model for proactive risk management.' },
      { icon: 'Activity', title: 'Simulation & Monitoring', description: 'Conduct virtual safety simulations, monitor risks, and implement preventive measures to minimize incidents.' },
      { icon: 'FilePieChart', title: 'Reporting & Compliance Support', description: 'Provide safety reports, risk assessments, and recommendations to ensure regulatory compliance and safe construction practices.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured 8D BIM Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Construction Site Hazard Simulation", imageKey: 'projectImg1' },
      { id: 2, title: "Risk Assessment for an Industrial Plant", imageKey: 'projectImg2' },
      { id: 3, "title": "Safety Protocol Integration", "imageKey": "projectImg3" },
      { id: 4, title: "Virtual Reality Safety Training", imageKey: 'projectImg4' },
      { id: 5, title: "Emergency Evacuation Planning", imageKey: 'projectImg5' },
      { id: 6, title: "Compliance Monitoring Model", imageKey: 'projectImg6' },
      { id: 7, title: "Fall Prevention Analysis", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Prioritize Project Safety?',
    description: 'Enhance your construction safety and minimize risks with our proactive 8D BIM services. Contact us to learn more.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The 8D BIM model was a crucial tool for our safety planning. It helped us identify and mitigate hazards before anyone even stepped on site. A must-have for complex projects.", name: "James Bennett", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their virtual safety simulations were incredibly effective for training our crew. It led to a noticeable reduction in on-site incidents.", name: "Ahmad Faizal", role: "Safety Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '40%', label: 'Avg. Reduction in Incidents' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our 8D BIM – Safety & Risk Management services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};