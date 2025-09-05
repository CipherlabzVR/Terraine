import { PageData } from '../../pages/SubServicePageLayout';

export const facilityManagementServicesPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Facility Management</span> Services',
    tagline: 'Efficient facility management ensuring smooth building operations.',
    description: 'Our facility management services streamline daily operations, enhance building performance, optimize resources, and ensure comfort, safety, and functionality for all residential, commercial, and industrial spaces.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Settings', title: 'Optimized Operations', description: 'Ensures smooth functioning of all building systems consistently.' },
      { icon: 'ShieldCheck', title: 'Proactive Maintenance', description: 'Anticipates issues before they become problems effectively.' },
      { icon: 'CircleDollarSign', title: 'Cost Efficiency', description: 'Reduces operational expenses reliably.' },
      { icon: 'Sofa', title: 'Enhanced Comfort', description: 'Improves occupant experience and satisfaction consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our facility management services ensure smooth operation and maintenance of buildings, enhancing efficiency, safety, and occupant satisfaction.',
    scopeItems: [
      { icon: 'Building', title: 'Building Operations Oversight', description: 'Monitor day-to-day building operations ensuring systems function efficiently and spaces remain safe consistently.' },
      { icon: 'CalendarCheck', title: 'Preventive Maintenance Planning', description: 'Schedule regular maintenance tasks to avoid breakdowns and extend equipment lifecycle reliably.' },
      { icon: 'UsersRound', title: 'Resource Management', description: 'Allocate staff, equipment, and materials effectively to maintain operational efficiency and cost control accurately.' },
      { icon: 'Briefcase', title: 'Vendor Coordination', description: 'Manage service providers ensuring quality, timely response, and adherence to contract agreements effectively.' },
      { icon: 'GaugeCircle', title: 'Performance Monitoring', description: 'Track building system performance and identify areas for improvement to enhance functionality efficiently.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain comprehensive records of operations, maintenance activities, and performance metrics for informed management consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Assessment & Planning', description: 'Evaluate building needs, operations, and client expectations to develop a customized facility management plan.' },
      { icon: 'CalendarDays', title: 'Resource Allocation & Scheduling', description: 'Allocate staff, tools, and materials efficiently while creating schedules for daily operations and maintenance.' },
      { icon: 'ScanSearch', title: 'Monitoring & Supervision', description: 'Track facility performance, oversee services, and ensure quality standards and operational efficiency are maintained.' },
      { icon: 'FilePieChart', title: 'Reporting & Continuous Improvement', description: 'Provide detailed reports, performance analysis, and recommendations for enhancing facility functionality and client satisfaction.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Facility Management Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Corporate Office Building", imageKey: 'projectImg1' },
      { id: 2, title: "Residential Apartment Complex", imageKey: 'projectImg2' },
      { id: 3, "title": "Shopping Mall Operations", "imageKey": "projectImg3" },
      { id: 4, title: "Hospital Facility Management", imageKey: 'projectImg4' },
      { id: 5, title: "Industrial Park Maintenance", imageKey: 'projectImg5' },
      { id: 6, title: "University Campus Services", imageKey: 'projectImg6' },
      { id: 7, title: "Hotel & Resort Management", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Seamlessly Run Facility?',
    description: 'Optimize your building\'s performance and reduce operational costs. Contact our facility management experts today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their facility management team is incredibly proactive. They handle everything from maintenance to vendor coordination, which allows us to focus on our core business.", name: "Hans Müller", role: "Office Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "Since they took over our building operations, we've seen a noticeable improvement in efficiency and a reduction in maintenance costs. A truly professional service.", name: "Claudia Schneider", role: "Property Owner", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '5M+ sqft', label: 'Managed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Facility Management Services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};