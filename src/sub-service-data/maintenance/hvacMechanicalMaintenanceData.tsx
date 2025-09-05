import { PageData } from '../../pages/SubServicePageLayout';

export const hvacMechanicalMaintenancePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">HVAC & Mechanical</span> Maintenance',
    tagline: 'Optimizing HVAC and mechanical systems performance.',
    description: 'Our HVAC and mechanical maintenance services ensure efficient operation, timely servicing, and long-lasting performance, enhancing comfort, energy efficiency, and reliability across all building systems.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Thermometer', title: 'Optimal Climate', description: 'Ensures HVAC systems perform efficiently consistently.' },
      { icon: 'ShieldCheck', title: 'Preventive Care', description: 'Reduces mechanical breakdowns effectively.' },
      { icon: 'Leaf', title: 'Energy Efficiency', description: 'Optimizes energy consumption reliably.' },
      { icon: 'UserCog', title: 'Expert Service', description: 'Skilled technicians maintain equipment properly consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our HVAC and mechanical maintenance services ensure optimal performance, energy efficiency, and reliability of building systems consistently.',
    scopeItems: [
      { icon: 'ScanSearch', title: 'System Inspection', description: 'Conduct regular inspections of HVAC and mechanical systems to identify potential issues early accurately.' },
      { icon: 'Wrench', title: 'Preventive Servicing', description: 'Perform routine maintenance including cleaning, lubrication, and calibration to maintain efficiency and longevity effectively.' },
      { icon: 'FileSearch', title: 'Fault Diagnosis', description: 'Detect mechanical or operational faults quickly to implement corrective actions and minimize downtime reliably.' },
      { icon: 'Replace', title: 'Component Replacement', description: 'Replace worn out or defective parts ensuring uninterrupted system functionality and safety consistently.' },
      { icon: 'GaugeCircle', title: 'Performance Monitoring', description: 'Track system efficiency, airflow, and temperature controls to optimize operational performance accurately.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain records of maintenance, repairs, and system performance for compliance and management purposes effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'System Assessment & Inspection', description: 'Evaluate HVAC and mechanical systems to ensure operational efficiency, safety, and regulatory compliance.' },
      { icon: 'CalendarCheck', title: 'Preventive Maintenance & Servicing', description: 'Conduct routine servicing, cleaning, and lubrication to prevent malfunctions and extend system lifespan.' },
      { icon: 'Siren', title: 'Repair & Troubleshooting', description: 'Identify faults, perform corrective repairs, and restore mechanical systems to optimal performance efficiently.' },
      { icon: 'FilePieChart', title: 'Monitoring & Reporting', description: 'Track system performance, generate detailed reports, and recommend improvements for energy efficiency and reliability.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured HVAC & Mechanical Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Chiller Maintenance", imageKey: 'projectImg1' },
      { id: 2, title: "Industrial Ventilation Servicing", imageKey: 'projectImg2' },
      { id: 3, "title": "Boiler System Inspection", "imageKey": "projectImg3" },
      { id: 4, title: "Air Handling Unit (AHU) Repair", imageKey: 'projectImg4' },
      { id: 5, title: "Ductwork Cleaning and Sealing", imageKey: 'projectImg5' },
      { id: 6, title: "Pump and Motor Alignment", imageKey: 'projectImg6' },
      { id: 7, title: "Cooling Tower Maintenance", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Optimal System Performance?',
    description: 'Ensure your HVAC and mechanical systems run efficiently and reliably. Contact our maintenance experts for a service plan.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their proactive maintenance on our HVAC system has been fantastic. It's more efficient, and we've had zero unexpected downtime since they took over.", name: "James Bennett", role: "Facility Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "The technicians are incredibly skilled and thorough. They diagnose and fix issues quickly, keeping our mechanical systems in top condition.", name: "Ahmad Faizal", role: "Maintenance Supervisor", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '20%+', label: 'Increase in Efficiency' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our HVAC & Mechanical Maintenance services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};