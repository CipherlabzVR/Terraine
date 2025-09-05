import { PageData } from '../../pages/SubServicePageLayout';

export const annualMaintenanceContractsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Annual Maintenance</span> Contracts (AMC)',
    tagline: 'Comprehensive annual maintenance for uninterrupted operations.',
    description: 'Our annual maintenance contracts provide scheduled inspections, preventive care, and timely repairs, ensuring consistent performance, reduced downtime, and long-lasting reliability for all building systems.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'FileCheck2', title: 'Comprehensive Coverage', description: 'Full maintenance services for all systems consistently.' },
      { icon: 'CircleDollarSign', title: 'Cost Savings', description: 'Reduces unexpected repair expenses effectively.' },
      { icon: 'Clock', title: 'Timely Support', description: 'Scheduled inspections and repairs reliably.' },
      { icon: 'HeartHandshake', title: 'Peace of Mind', description: 'Ensures smooth operations throughout the year consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our AMC services provide comprehensive scheduled maintenance covering all building systems to ensure continuous performance and reliability efficiently.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Contract Planning', description: 'Develop detailed maintenance schedules covering all systems to ensure continuous operational efficiency consistently.' },
      { icon: 'ScanSearch', title: 'Routine Inspections', description: 'Conduct regular inspections of electrical, HVAC, plumbing, and safety systems under contract accurately.' },
      { icon: 'ShieldCheck', title: 'Preventive Maintenance', description: 'Perform scheduled servicing tasks to reduce breakdowns and prolong equipment lifespan reliably.' },
      { icon: 'Wrench', title: 'Corrective Maintenance', description: 'Provide prompt repairs for any issues encountered during the contract period efficiently.' },
      { icon: 'FilePieChart', title: 'Performance Reporting', description: 'Generate detailed reports on system performance, maintenance activities, and compliance consistently.' },
      { icon: 'Users', title: 'Vendor Coordination', description: 'Liaise with suppliers and service providers to ensure timely support and replacement effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Assessment & Planning', description: 'Evaluate client needs, facility systems, and scope to design a comprehensive AMC program.' },
      { icon: 'CalendarDays', title: 'Scheduling & Resource Allocation', description: 'Plan regular maintenance activities, assign skilled personnel, and allocate tools and materials efficiently.' },
      { icon: 'HardHat', title: 'Execution & Supervision', description: 'Perform preventive, corrective, and routine maintenance tasks under continuous monitoring to ensure quality service delivery.' },
      { icon: 'FileSearch', title: 'Reporting & Review', description: 'Provide detailed maintenance reports, track service performance, and suggest improvements for long-term operational efficiency.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured AMC Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Corporate Building AMC", imageKey: 'projectImg1' },
      { id: 2, title: "Retail Mall Maintenance Contract", imageKey: 'projectImg2' },
      { id: 3, "title": "Hospital Systems Upkeep", "imageKey": "projectImg3" },
      { id: 4, title: "Residential Complex AMC", imageKey: 'projectImg4' },
      { id: 5, title: "Industrial Plant Maintenance Plan", imageKey: 'projectImg5' },
      { id: 6, title: "Hotel Annual Service Contract", imageKey: 'projectImg6' },
      { id: 7, title: "Data Center Maintenance", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Looking for Year-Round Peace of Mind?',
    description: 'Secure the performance and longevity of your building systems with our comprehensive Annual Maintenance Contracts. Contact us for a custom plan.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The AMC has been a fantastic investment. We no longer worry about unexpected breakdowns, and their scheduled maintenance is always thorough and professional.", name: "Hans Müller", role: "Facility Director", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "Having a single contract for all our building systems has simplified our operations immensely. Their team is responsive, skilled, and keeps everything running perfectly.", name: "Claudia Schneider", role: "Property Owner", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '200+', label: 'Active Contracts' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Annual Maintenance Contracts (AMC) services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};