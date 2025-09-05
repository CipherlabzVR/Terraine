import { PageData } from '../../pages/SubServicePageLayout';

export const machinerySparePartsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Machinery & Spare</span> Parts Supply',
    tagline: 'Providing reliable machinery and parts for projects',
    description: 'Our machinery and spare parts supply services ensure high quality, durable, and compatible equipment, supporting smooth operations, maintenance, and uninterrupted performance for construction and engineering projects.',
    backgroundImage: '/machinery-hero.webp',
    uspItems: [
      { icon: 'ShieldCheck', title: 'High-quality Parts', description: 'Durable machinery components supplied consistently.' },
      { icon: 'Search', title: 'Reliable Sourcing', description: 'Trusted suppliers ensuring performance effectively.' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'Quick and efficient logistics reliably.' },
      { icon: 'Users', title: 'Expert Consultation', description: 'Guidance for optimal machinery selection consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our machinery and spare parts supply ensures availability of reliable equipment and components to maintain uninterrupted project operations effectively.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Assessment', description: 'Identify machinery and spare parts needed for project continuity and performance accurately.' },
      { icon: 'Search', title: 'Supplier Sourcing', description: 'Locate trusted suppliers providing high-quality machinery and genuine spare parts consistently.' },
      { icon: 'Truck', title: 'Logistics Coordination', description: 'Plan transportation and delivery schedules for timely supply to project sites efficiently.' },
      { icon: 'CheckCircle', title: 'Quality Verification', description: 'Inspect machinery and parts to ensure compliance with specifications and operational standards reliably.' },
      { icon: 'Settings', title: 'Installation and Support', description: 'Provide guidance for proper setup, maintenance, and integration of machinery accurately.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed records of supplied machinery, spare parts, and delivery reports efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Assessment & Specification', description: 'Determine machinery and spare part needs based on project, operational, and maintenance requirements.' },
      { icon: 'Search', title: 'Supplier Sourcing & Evaluation', description: 'Identify reliable vendors, compare quality, pricing, and delivery timelines for optimal procurement.' },
      { icon: 'FileText', title: 'Order Placement & Documentation', description: 'Manage purchase orders, contracts, and ensure compliance with import/export regulations.' },
      { icon: 'Settings', title: 'Delivery & Implementation Support', description: 'Coordinate shipment, customs clearance, and provide installation or integration guidance for seamless operation.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Machinery Supply Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Excavator Parts Supply", imageKey: 'projectImg1' },
      { id: 2, title: "Crane Components Import", imageKey: 'projectImg2' },
      { id: 3, title: "Concrete Mixer Machinery", imageKey: 'projectImg3' },
      { id: 4, title: "Heavy Equipment Spares", imageKey: 'projectImg4' },
      { id: 5, title: "Construction Tools Supply", imageKey: 'projectImg5' },
      { id: 6, title: "Industrial Machinery Parts", imageKey: 'projectImg6' },
      { id: 7, title: "Specialty Equipment Import", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Need Reliable Machinery?',
    description: 'Access high-quality machinery and spare parts from trusted suppliers. Contact us for reliable equipment solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The quality of machinery and spare parts we received was exceptional. Their quick delivery helped us avoid costly downtime.", name: "Aisha Al Mazrouei", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/2.jpg" },
      { quote: "Their expertise in machinery selection and spare parts sourcing has been invaluable for our construction projects.", name: "Omar Bin Saeed", role: "Operations Director", rating: 5, image: "https://randomuser.me/api/portraits/men/6.jpg" }
    ],
    summary: { count: '400+', label: 'Machinery Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Machinery & Spare Parts Supply services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
