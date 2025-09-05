import { PageData } from '../../pages/SubServicePageLayout';

export const preventiveMaintenancePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Preventive & Scheduled</span> Maintenance',
    tagline: 'Proactive maintenance for reliable long-lasting performance.',
    description: 'Our preventive and scheduled maintenance services ensure timely inspections, repairs, and upkeep, minimizing downtime, extending equipment life, and maintaining optimal performance across all building systems.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldCheck', title: 'Proactive Care', description: 'Prevents equipment failures before they occur consistently.' },
      { icon: 'CalendarClock', title: 'Optimized Scheduling', description: 'Timely maintenance without disrupting operations effectively.' },
      { icon: 'TrendingUp', title: 'Extended Lifespan', description: 'Increases durability of building systems reliably.' },
      { icon: 'CircleDollarSign', title: 'Cost Savings', description: 'Reduces expensive emergency repairs consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our preventive and scheduled maintenance services ensure timely inspections and upkeep to prevent equipment failures and prolong asset life.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Maintenance Planning', description: 'Develop schedules for routine checks and servicing ensuring all systems function reliably and efficiently consistently.' },
      { icon: 'ScanSearch', title: 'Equipment Inspection', description: 'Conduct regular inspections to identify wear and tear and prevent unexpected breakdowns accurately.' },
      { icon: 'Wrench', title: 'Servicing and Adjustments', description: 'Perform maintenance tasks including lubrication, calibration, and minor repairs to maintain optimal performance effectively.' },
      { icon: 'FileText', title: 'Documentation and Records', description: 'Maintain detailed logs of maintenance activities for compliance, tracking, and future reference reliably.' },
      { icon: 'FileCheck2', title: 'Compliance Assurance', description: 'Ensure maintenance activities meet manufacturer recommendations and regulatory standards consistently.' },
      { icon: 'GaugeCircle', title: 'Performance Monitoring', description: 'Track system efficiency and operational health to schedule timely interventions and optimize functionality effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'System Assessment & Planning', description: 'Evaluate equipment and facility components to create a comprehensive preventive maintenance schedule.' },
      { icon: 'CalendarDays', title: 'Scheduling & Resource Allocation', description: 'Assign maintenance tasks, allocate tools and personnel, and plan timelines for routine inspections and services.' },
      { icon: 'HardHat', title: 'Execution & Monitoring', description: 'Conduct preventive maintenance activities, monitor equipment performance, and address minor issues proactively.' },
      { icon: 'FilePieChart', title: 'Reporting & Optimization', description: 'Document maintenance activities, analyze trends, and optimize schedules to minimize downtime and extend asset lifespan.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Maintenance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "HVAC System Annual Check", imageKey: 'projectImg1' },
      { id: 2, title: "Electrical Panel Servicing", imageKey: 'projectImg2' },
      { id: 3, "title": "Plumbing System Inspection", "imageKey": "projectImg3" },
      { id: 4, title: "Fire Safety Equipment Testing", imageKey: 'projectImg4' },
      { id: 5, title: "Building Facade Maintenance", imageKey: 'projectImg5' },
      { id: 6, title: "Generator Performance Check", imageKey: 'projectImg6' },
      { id: 7, title: "Roofing Integrity Inspection", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Uninterrupted Operations?',
    description: 'Keep your systems running smoothly and prevent costly breakdowns with our proactive maintenance plans. Contact us to get started.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their preventive maintenance plan has saved us from several potential breakdowns. The peace of mind it provides is invaluable for our operations.", name: "Hans Müller", role: "Facility Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "The team is professional, thorough, and always on schedule. Our equipment has never been more reliable, and its lifespan has clearly been extended.", name: "Claudia Schneider", role: "Operations Director", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '99%', label: 'Uptime Rate' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Preventive & Scheduled Maintenance services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};