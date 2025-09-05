import { PageData } from '../../pages/SubServicePageLayout';

export const correctiveMaintenancePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Corrective & Breakdown</span> Maintenance',
    tagline: 'Rapid response for efficient problem resolution.',
    description: 'Our corrective and breakdown maintenance services quickly identify and resolve system failures, minimizing disruptions, restoring functionality, and ensuring uninterrupted operations for all building facilities.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Siren', title: 'Rapid Response', description: 'Quick resolution of system failures consistently.' },
      { icon: 'TrendingDown', title: 'Minimized Downtime', description: 'Ensures operational continuity effectively.' },
      { icon: 'Wrench', title: 'Expert Repairs', description: 'Skilled technicians restore functionality reliably.' },
      { icon: 'CircleDollarSign', title: 'Cost-effective Solutions', description: 'Efficient fixes reducing unnecessary expenses consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our corrective and breakdown maintenance services quickly restore functionality to faulty systems minimizing downtime and operational disruptions.',
    scopeItems: [
      { icon: 'FileSearch', title: 'Fault Diagnosis', description: 'Identify causes of system failures accurately to implement appropriate repair solutions efficiently and reliably.' },
      { icon: 'Zap', title: 'Immediate Repairs', description: 'Perform urgent corrective actions to restore equipment and systems to full operational condition promptly.' },
      { icon: 'Archive', title: 'Spare Parts Management', description: 'Source and maintain necessary replacement parts ensuring quick availability for repairs effectively.' },
      { icon: 'TestTube2', title: 'System Testing', description: 'Verify repaired systems through rigorous testing to ensure proper functionality and reliability consistently.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Record incidents, corrective actions, and outcomes for future reference and compliance accurately.' },
      { icon: 'Lightbulb', title: 'Preventive Recommendations', description: 'Suggest improvements and preventive measures to minimize recurrence of similar breakdowns efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'AlertTriangle', title: 'Fault Detection & Reporting', description: 'Identify equipment or system failures quickly and document issues for immediate attention.' },
      { icon: 'ClipboardList', title: 'Diagnosis & Planning', description: 'Analyze the problem, determine the root cause, and prepare an effective repair plan.' },
      { icon: 'Construction', title: 'Repair & Restoration', description: 'Execute corrective actions, replace faulty components, and restore systems to full operational functionality efficiently.' },
      { icon: 'ClipboardCheck', title: 'Testing & Reporting', description: 'Conduct performance tests, ensure reliability, and provide detailed maintenance reports for future reference and prevention.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Maintenance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Emergency HVAC Repair", imageKey: 'projectImg1' },
      { id: 2, title: "Electrical System Fault Diagnosis", imageKey: 'projectImg2' },
      { id: 3, "title": "Plumbing Leak Restoration", "imageKey": "projectImg3" },
      { id: 4, title: "Generator Breakdown Service", imageKey: 'projectImg4' },
      { id: 5, title: "Structural Damage Repair", imageKey: 'projectImg5' },
      { id: 6, title: "Fire Alarm System Fix", imageKey: 'projectImg6' },
      { id: 7, title: "Elevator Malfunction Repair", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Facing an Operational Breakdown?',
    description: 'Our rapid response team is ready to diagnose and fix the issue, minimizing downtime and restoring your operations. Contact us for immediate support.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their response time to our HVAC breakdown was incredible. The technicians were skilled, and had our system back online in just a few hours, saving our business day.", name: "Hans Müller", role: "Facility Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "We had a critical electrical fault, and their team handled it with exceptional professionalism and expertise. The repair was quick and the preventive recommendations were invaluable.", name: "Claudia Schneider", role: "Operations Director", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '1-Hour', label: 'Avg. Response Time' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Corrective & Breakdown Maintenance services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};