import { PageData } from '../../pages/SubServicePageLayout';

export const fireSafetySecurityData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Fire Safety & Security</span> Systems',
    tagline: 'Protecting buildings with reliable safety systems.',
    description: 'Our fire safety and security maintenance services ensure fully functional alarms, detectors, and security equipment, safeguarding people, property, and assets with timely inspections and preventive measures.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldCheck', title: 'Reliable Protection', description: 'Ensures fire and security systems function consistently.' },
      { icon: 'Activity', title: 'Preventive Maintenance', description: 'Identifies risks before incidents occur effectively.' },
      { icon: 'Award', title: 'Compliance Assurance', description: 'Adheres to safety regulations reliably.' },
      { icon: 'Siren', title: 'Rapid Response', description: 'Quick action for emergencies consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our fire safety and security maintenance services ensure operational readiness, compliance, and protection of people and assets reliably.',
    scopeItems: [
      { icon: 'ScanSearch', title: 'System Inspection', description: 'Conduct regular checks of fire alarms, extinguishers, sprinklers, and security systems ensuring proper functionality consistently.' },
      { icon: 'CalendarCheck', title: 'Preventive Maintenance', description: 'Service and test safety and security equipment regularly to prevent failures and enhance reliability effectively.' },
      { icon: 'Wrench', title: 'Fault Detection and Repair', description: 'Identify and correct malfunctions in fire safety or security systems promptly to ensure safety accurately.' },
      { icon: 'FileCheck2', title: 'Regulatory Compliance', description: 'Ensure all systems meet safety codes, standards, and legal requirements consistently and reliably.' },
      { icon: 'ClipboardList', title: 'Emergency Preparedness', description: 'Test and maintain emergency protocols, evacuation plans, and equipment for readiness during incidents effectively.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain comprehensive records of inspections, maintenance, and incidents for compliance and management purposes accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'System Inspection & Assessment', description: 'Evaluate fire alarms, extinguishers, sprinklers, and security systems to ensure functionality and compliance.' },
      { icon: 'Activity', title: 'Preventive Maintenance & Testing', description: 'Conduct routine testing, calibration, and servicing of fire and security systems to prevent failures.' },
      { icon: 'Siren', title: 'Fault Repair & Upgrades', description: 'Address malfunctions, replace defective components, and upgrade systems for optimal safety and security performance.' },
      { icon: 'FilePieChart', title: 'Reporting & Compliance', description: 'Document maintenance activities, provide inspection reports, and ensure adherence to safety regulations and standards.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Safety & Security Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Fire Alarm Servicing", imageKey: 'projectImg1' },
      { id: 2, title: "Industrial Sprinkler System Test", imageKey: 'projectImg2' },
      { id: 3, "title": "CCTV Security System Upgrade", "imageKey": "projectImg3" },
      { id: 4, title: "Access Control System Maintenance", imageKey: 'projectImg4' },
      { id: 5, title: "Emergency Evacuation Drill Support", imageKey: 'projectImg5' },
      { id: 6, title: "Fire Extinguisher Inspection", imageKey: 'projectImg6' },
      { id: 7, title: "Intrusion Detection System Check", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Secure Your Facility?',
    description: 'Ensure the safety and security of your property and people with our expert maintenance services. Contact us for a safety audit.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their team's maintenance of our fire safety systems gives us complete peace of mind. They are thorough, professional, and always compliant with the latest regulations.", name: "Hans Müller", role: "Building Safety Officer", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "The regular inspections and rapid response for our security systems have been excellent. We feel much more secure knowing our facility is in their hands.", name: "Claudia Schneider", role: "Property Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '100%', label: 'Compliance Rate' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Fire Safety & Security Systems services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};