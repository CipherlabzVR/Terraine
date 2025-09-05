import { PageData } from '../../pages/SubServicePageLayout';

export const electricalMaintenancePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Electrical</span> Maintenance',
    tagline: 'Ensuring safe reliable and efficient electrical systems.',
    description: 'Our electrical maintenance services provide inspections, repairs, and upgrades, maintaining safe, efficient, and uninterrupted power systems for residential, commercial, and industrial buildings.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldCheck', title: 'Reliable Systems', description: 'Ensures consistent electrical performance across all installations.' },
      { icon: 'Activity', title: 'Preventive Checks', description: 'Reduces risk of outages effectively.' },
      { icon: 'Zap', title: 'Timely Repairs', description: 'Quick response for electrical issues reliably.' },
      { icon: 'Award', title: 'Safety Compliance', description: 'Adheres to all electrical standards consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our electrical maintenance services ensure safe, reliable, and efficient operation of all electrical systems within facilities.',
    scopeItems: [
      { icon: 'ScanSearch', title: 'Routine Inspections', description: 'Conduct regular checks of electrical systems to detect faults and prevent hazards effectively.' },
      { icon: 'FileSearch', title: 'Fault Diagnosis', description: 'Identify electrical issues accurately to implement timely and appropriate corrective actions consistently.' },
      { icon: 'Wrench', title: 'Repairs and Replacements', description: 'Perform necessary repairs or replace components to maintain system functionality and safety reliably.' },
      { icon: 'CalendarCheck', title: 'Preventive Maintenance', description: 'Schedule proactive tasks including testing and calibration to avoid failures and prolong equipment life efficiently.' },
      { icon: 'FileCheck2', title: 'Compliance Checks', description: 'Ensure electrical systems meet safety codes, regulations, and operational standards accurately.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed records of maintenance activities, incidents, and system performance for informed management effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'System Inspection & Assessment', description: 'Evaluate electrical systems, wiring, and equipment for safety, efficiency, and compliance with standards.' },
      { icon: 'Activity', title: 'Preventive & Routine Checks', description: 'Perform scheduled inspections, testing, and minor adjustments to maintain optimal electrical system performance.' },
      { icon: 'Siren', title: 'Fault Diagnosis & Repair', description: 'Identify issues, troubleshoot electrical faults, and implement corrective measures to restore safe operation.' },
      { icon: 'FilePieChart', title: 'Reporting & Optimization', description: 'Document maintenance activities, provide recommendations, and optimize electrical system performance for reliability and safety.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Electrical Maintenance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Panel Board Servicing", imageKey: 'projectImg1' },
      { id: 2, title: "Industrial Motor Control Center", imageKey: 'projectImg2' },
      { id: 3, "title": "Residential Wiring Inspection", "imageKey": "projectImg3" },
      { id: 4, title: "Lighting System Upgrade", imageKey: 'projectImg4' },
      { id: 5, title: "Thermal Imaging Survey", imageKey: 'projectImg5' },
      { id: 6, title: "Emergency Generator Testing", imageKey: 'projectImg6' },
      { id: 7, title: "Data Center Power Supply Check", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Need Reliable Electrical Systems?',
    description: 'Ensure the safety and efficiency of your electrical infrastructure with our expert maintenance services. Contact us for a system assessment.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their preventive checks on our electrical systems have been a lifesaver, preventing major outages. The team is professional, thorough, and always reliable.", name: "James Bennett", role: "Facility Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "We had a critical fault, and their rapid response team diagnosed and repaired it in record time, minimizing our operational downtime. Excellent service.", name: "Ahmad Faizal", role: "Plant Supervisor", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '100%', label: 'Safety Compliance' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Electrical Maintenance services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};