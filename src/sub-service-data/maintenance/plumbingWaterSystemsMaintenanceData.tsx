import { PageData } from '../../pages/SubServicePageLayout';

export const plumbingWaterSystemsMaintenancePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Plumbing & Water Systems</span> Maintenance',
    tagline: 'Reliable plumbing solutions for uninterrupted water systems.',
    description: 'Our plumbing and water systems maintenance services ensure leak free operation, timely repairs, and efficient water management, maintaining safe and fully functional systems in every building.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Droplets', title: 'Leak Free Systems', description: 'Ensures reliable plumbing performance consistently.' },
      { icon: 'ScanSearch', title: 'Preventive Inspections', description: 'Detects potential issues early effectively.' },
      { icon: 'Zap', title: 'Timely Repairs', description: 'Quick resolution minimizing disruptions reliably.' },
      { icon: 'Recycle', title: 'Efficient Water Use', description: 'Promotes conservation and reduces wastage consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our plumbing and water systems maintenance services ensure reliable operation, prevent leaks, and maintain water quality efficiently.',
    scopeItems: [
      { icon: 'Search', title: 'Routine Inspections', description: 'Inspect pipes, valves, and fixtures regularly to detect potential leaks or blockages accurately.' },
      { icon: 'Wrench', title: 'Leak Repairs', description: 'Identify and fix leaks promptly to prevent damage, water loss, and operational disruption reliably.' },
      { icon: 'Construction', title: 'Pipe and Fixture Maintenance', description: 'Clean, repair, or replace plumbing components to ensure efficient water flow and system longevity consistently.' },
      { icon: 'TestTube2', title: 'Water Quality Monitoring', description: 'Test and treat water systems to maintain hygiene and safety standards effectively.' },
      { icon: 'CalendarCheck', title: 'Preventive Maintenance', description: 'Schedule regular servicing tasks to reduce the risk of major plumbing failures efficiently.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed records of inspections, repairs, and maintenance activities for compliance and reference accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Inspection & Assessment', description: 'Examine pipelines, fixtures, and water systems to identify leaks, blockages, or wear and tear.' },
      { icon: 'CalendarDays', title: 'Preventive Maintenance', description: 'Conduct routine checks, cleaning, and servicing to prevent plumbing failures and ensure efficient water flow.' },
      { icon: 'Siren', title: 'Repair & Replacement', description: 'Address leaks, broken pipes, and faulty fixtures promptly to restore proper functionality.' },
      { icon: 'FilePieChart', title: 'Monitoring & Reporting', description: 'Track system performance, document maintenance activities, and provide recommendations for long-term plumbing reliability.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Plumbing Maintenance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Kitchen Drain Cleaning", imageKey: 'projectImg1' },
      { id: 2, title: "High-Rise Water Pump Servicing", imageKey: 'projectImg2' },
      { id: 3, "title": "Residential Leak Detection", "imageKey": "projectImg3" },
      { id: 4, title: "Booster Pump Maintenance", imageKey: 'projectImg4' },
      { id: 5, title: "Sump Pump Inspection", imageKey: 'projectImg5' },
      { id: 6, title: "Backflow Preventer Testing", imageKey: 'projectImg6' },
      { id: 7, title: "Grease Trap Cleaning", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Need Reliable Plumbing?',
    description: 'Ensure your water systems are efficient and leak-free. Contact our expert maintenance team for a service plan.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their preventive maintenance on our plumbing systems has been a lifesaver. We've avoided major leaks and the water pressure has never been more consistent.", name: "Hans Müller", role: "Building Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "We had a recurring drainage issue that other companies couldn't fix. Their team diagnosed it quickly and provided a long-term solution. Incredibly knowledgeable.", name: "Claudia Schneider", role: "Property Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '1000+', label: 'Systems Maintained' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Plumbing & Water Systems Maintenance services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};