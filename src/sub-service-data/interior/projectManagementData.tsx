// Suggested Filename: projectManagementData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const projectManagementPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Project Management</span> & Procurement',
    tagline: 'Seamless project delivery through expert management solutions.',
    description: 'Our project management and procurement services ensure timely execution, efficient resource management, and high-quality outcomes, delivering interior projects on schedule, within budget, and to client satisfaction.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Workflow', title: 'Seamless Coordination', description: 'Efficient management of all project activities consistently.' },
      { icon: 'CircleDollarSign', title: 'Cost Control', description: 'Strategic procurement minimizing expenses effectively.' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'Projects completed on schedule reliably.' },
      { icon: 'Scaling', title: 'Resource Optimization', description: 'Maximizing efficiency with skilled project oversight.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our project management and procurement services ensure smooth execution of interior projects with timely material supply and coordination.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Project Planning', description: 'Develop detailed schedules budgets and resource plans to ensure on time and within budget delivery.' },
      { icon: 'UserCheck', title: 'Vendor Selection', description: 'Identify reliable suppliers and contractors providing high-quality materials and services for interior projects effectively.' },
      { icon: 'ShoppingCart', title: 'Procurement Management', description: 'Handle purchasing orders material deliveries and inventory ensuring timely availability and efficient usage reliably.' },
      { icon: 'AreaChart', title: 'Progress Monitoring', description: 'Track project milestones activities and deadlines maintaining control over workflow and schedules consistently.' },
      { icon: 'ShieldCheck', title: 'Quality Assurance', description: 'Ensure workmanship materials and design implementation meet client expectations and project standards effectively.' },
      { icon: 'FileText', title: 'Client Reporting', description: 'Provide regular updates progress reports and feedback sessions to keep clients informed throughout the project.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Project Planning', description: 'Define timelines, budgets, and resource allocation to ensure smooth execution of interior design projects.' },
      { icon: 'ShoppingCart', title: 'Vendor Selection & Procurement', description: 'Source high-quality materials, furniture, and fixtures from reliable suppliers at competitive prices.' },
      { icon: 'Workflow', title: 'Coordination & Supervision', description: 'Oversee procurement schedules, deliveries, and installation processes to maintain project efficiency and quality.' },
      { icon: 'CheckCircle', title: 'Monitoring & Reporting', description: 'Track progress, resolve issues, and provide clients with regular updates to ensure timely completion.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Managed & Procured Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Full House Interior Procurement", imageKey: 'projectImg1' },
      { id: 2, title: "Office Fit-Out Management", imageKey: 'projectImg2' },
      { id: 3, "title": "Retail Store Supply Chain", "imageKey": "projectImg3" },
      { id: 4, title: "Hotel Furnishing Project", imageKey: 'projectImg4' },
      { id: 5, title: "Restaurant Renovation Coordination", imageKey: 'projectImg5' },
      { id: 6, title: "Luxury Villa Material Sourcing", imageKey: 'projectImg6' },
      { id: 7, title: "Corporate HQ Project Oversight", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Need Expert Project Oversight?',
    description: 'Ensure your project is delivered on time and within budget. Contact us for a management consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their project management was flawless. They handled every detail, from procurement to final delivery, keeping us informed and stress-free. The project finished ahead of schedule!", name: "Michael Lee", role: "Commercial Developer", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" },
        { quote: "The procurement team saved us a significant amount on materials without compromising on quality. Their vendor network is impressive. Highly recommended for any large-scale project.", name: "Priya Sharma", role: "Operations Director", rating: 5, image: "https://randomuser.me/api/portraits/women/44.jpg" }
    ],
    summary: { count: '80+', label: 'Projects Managed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Project Management & Procurement services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};