import { PageData } from '../../pages/SubServicePageLayout';

export const engineeringMaterialsExportPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Export of Engineering</span> & Construction Materials',
    tagline: 'Reliable export solutions for global construction needs',
    description: 'Our export services ensure efficient, safe, and timely delivery of engineering and construction materials, meeting international standards and supporting successful projects across global markets.',
    backgroundImage: '/export-hero.webp',
    uspItems: [
      { icon: 'Globe', title: 'Global Reach', description: 'Delivering materials to international clients consistently.' },
      { icon: 'ShieldCheck', title: 'Quality Assurance', description: 'Ensuring high standard products effectively.' },
      { icon: 'Truck', title: 'Efficient Logistics', description: 'Smooth handling and shipping reliably.' },
      { icon: 'Clock', title: 'Timely Execution', description: 'Meeting deadlines for overseas projects consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our export services manage safe and timely delivery of construction materials to international clients with compliance and efficiency effectively.',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Assessment', description: 'Analyze client specifications to ensure materials meet quality and performance standards accurately.' },
      { icon: 'Users', title: 'Supplier Coordination', description: 'Collaborate with manufacturers to source materials suitable for export consistently.' },
      { icon: 'Package', title: 'Packaging and Handling', description: 'Ensure safe and compliant packaging of materials to prevent damage during transit effectively.' },
      { icon: 'FileText', title: 'Customs Compliance', description: 'Prepare necessary export documentation and adhere to international trade regulations reliably.' },
      { icon: 'Truck', title: 'Logistics Management', description: 'Plan and execute shipping routes and schedules for timely delivery efficiently.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain export records, shipping documents, and client confirmations for reference and compliance accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Assessment & Product Selection', description: 'Identify materials suitable for export, considering client specifications, standards, and market demand.' },
      { icon: 'Package', title: 'Packaging & Compliance Preparation', description: 'Prepare materials for safe transport and ensure adherence to international shipping and regulatory requirements.' },
      { icon: 'Truck', title: 'Logistics & Shipping Coordination', description: 'Arrange transportation, handle customs clearance, and manage international shipping schedules efficiently.' },
      { icon: 'Eye', title: 'Tracking & Client Reporting', description: 'Monitor shipments, provide updates, and deliver documentation to clients ensuring transparency and timely delivery.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Export Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Steel Exports to Middle East", imageKey: 'projectImg1' },
      { id: 2, title: "Construction Equipment to Asia", imageKey: 'projectImg2' },
      { id: 3, title: "Engineering Materials to Europe", imageKey: 'projectImg3' },
      { id: 4, title: "Building Materials to Africa", imageKey: 'projectImg4' },
      { id: 5, title: "Specialty Products to Americas", imageKey: 'projectImg5' },
      { id: 6, title: "Industrial Equipment Exports", imageKey: 'projectImg6' },
      { id: 7, title: "Technical Materials to Oceania", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready to Export Globally?',
    description: 'Expand your market reach with our reliable export services. Contact us to discuss your international shipping needs.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "Their export services helped us reach new markets efficiently. The documentation and logistics support were exceptional.", name: "Mohammed Al-Khalifa", role: "Senior Consultant", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" },
      { quote: "The quality of exported materials and timely delivery exceeded our expectations. Professional service throughout.", name: "Omar Saeed", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/3.jpg" }
    ],
    summary: { count: '300+', label: 'Export Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Engineering Materials Export services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
