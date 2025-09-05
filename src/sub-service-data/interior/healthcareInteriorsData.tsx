// Suggested Filename: healthcareInteriorsData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const healthcareInteriorsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Healthcare</span> Interiors',
    tagline: 'Functional interiors promoting healing and wellbeing.',
    description: 'Our healthcare interiors are designed for safety, efficiency, and comfort, creating environments that support patient care, staff productivity, and a positive, therapeutic experience.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'HeartPulse', title: 'Healing Environments', description: 'Interiors designed to support patient recovery consistently.' },
      { icon: 'LayoutGrid', title: 'Functional Layouts', description: 'Efficient space planning for staff and patients effectively.' },
      { icon: 'ShieldCheck', title: 'Safety Compliance', description: 'Adhering to health and safety standards reliably.' },
      { icon: 'Sofa', title: 'Comfort Oriented', description: 'Creating soothing and welcoming healthcare spaces.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our healthcare interior services design functional, hygienic, and patient friendly spaces for hospitals, clinics, and medical facilities.',
    scopeItems: [
      { icon: 'LayoutGrid', title: 'Space Planning', description: 'Optimize layouts for patient rooms, corridors, and treatment areas ensuring efficiency and safety consistently.' },
      { icon: 'Shield', title: 'Infection Control Design', description: 'Select materials and finishes that are hygienic, easy to clean, and resistant to pathogens accurately.' },
      { icon: 'Lamp', title: 'Lighting and Electrical Planning', description: 'Design lighting and power systems suitable for medical procedures and patient comfort reliably.' },
      { icon: 'Bed', title: 'Furniture and Equipment Integration', description: 'Coordinate placement of medical furniture and equipment for workflow efficiency and accessibility effectively.' },
      { icon: 'ClipboardCheck', title: 'Regulatory Compliance', description: 'Ensure interiors adhere to healthcare codes, safety regulations, and accessibility standards consistently.' },
      { icon: 'HardHat', title: 'Project Management and Delivery', description: 'Supervise construction and installation ensuring quality, timely completion, and operational readiness accurately.' }
    ],
    imageKey: 'scopeImage'
  },

  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Planning', description: 'Understand healthcare facility needs, patient flow, and regulatory compliance to develop functional interior layouts.' },
      { icon: 'Palette', title: 'Design & Material Selection', description: 'Create designs prioritizing hygiene, safety, and comfort, choosing durable and easy-to-maintain materials.' },
      { icon: 'HardHat', title: 'Execution & Supervision', description: 'Oversee construction, installation of medical-grade fixtures, and finishing works, ensuring compliance and quality standards.' },
      { icon: 'CheckCircle', title: 'Final Review & Handover', description: 'Conduct inspections, finalize interiors, and deliver a safe, efficient, and fully operational healthcare environment.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Healthcare Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Modern Hospital Wing", imageKey: 'projectImg1' },
      { id: 2, title: "Specialty Medical Clinic", imageKey: 'projectImg2' },
      { id: 3, "title": "Dental Office Interior", "imageKey": "projectImg3" },
      { id: 4, title: "Physiotherapy Center", imageKey: 'projectImg4' },
      { id: 5, title: "Wellness & Spa Facility", imageKey: 'projectImg5' },
      { id: 6, title: "Aged Care Residence", imageKey: 'projectImg6' },
      { id: 7, title: "Outpatient Surgical Center", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Create a Healing Space?',
    description: 'Design a healthcare environment that prioritizes patient care and staff efficiency. Contact us for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The new patient rooms are fantastic. They are not only more comfortable for patients but also far more functional for our nursing staff. A truly thoughtful design.", name: "Dr. Anura Silva", role: "Hospital Administrator", rating: 5, image: "https://randomuser.me/api/portraits/men/95.jpg" },
        { quote: "Our clinic's new interior has a calming atmosphere that has made a noticeable difference for our patients. The team understood the unique requirements of a healthcare space perfectly.", name: "Renuka David", role: "Clinic Director", rating: 5, image: "https://randomuser.me/api/portraits/women/96.jpg" }
    ],
    summary: { count: '75+', label: 'Healthcare Facilities Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Healthcare Interior services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};