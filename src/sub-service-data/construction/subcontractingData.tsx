import { PageData } from '../../pages/SubServicePageLayout';

export const subcontractingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Subcontracting</span> Services',
    tagline: 'Reliable expert support for seamless project execution',
    description: 'Our subcontracting services provide skilled labor, specialized expertise, and efficient execution, ensuring high quality, timely completion, and smooth collaboration on every construction project',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Users', title: 'Skilled Workforce', description: 'Experienced teams delivering quality work consistently' },
      { icon: 'GitFork', title: 'Flexible Solutions', description: 'Adaptable services for diverse project needs effectively' },
      { icon: 'Clock', title: 'Timely Execution', description: 'Projects completed on schedule reliably' },
      { icon: 'CircleDollarSign', title: 'Cost Efficient', description: 'Optimized resources reducing overall project expenses' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our subcontracting services provide reliable skilled teams for specialized construction tasks ensuring timely high-quality project execution',
    scopeItems: [
      { icon: 'Combine', title: 'Trade Coordination', description: 'Assign specialized subcontractors for tasks like electrical plumbing HVAC ensuring smooth workflow and effective communication' },
      { icon: 'FileSignature', title: 'Contract Management', description: 'Manage agreements timelines and deliverables with subcontractors ensuring adherence to project requirements and standards' },
      { icon: 'ClipboardCheck', title: 'Quality Monitoring', description: 'Inspect subcontracted work regularly ensuring compliance with design specifications safety regulations and quality expectations' },
      { icon: 'Gauge', title: 'Progress Tracking', description: 'Monitor subcontractor work schedules and milestones to maintain project timeline and efficiency consistently' },
      { icon: 'UsersRound', title: 'Resource Allocation', description: 'Allocate manpower equipment and materials to subcontractors effectively to optimize productivity and minimize delays' },
      { icon: 'MessageSquareWarning', title: 'Issue Resolution', description: 'Address and resolve subcontractor conflicts or challenges promptly maintaining smooth construction operations reliably' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Scope Definition & Planning', description: 'Identify specialized tasks, define project requirements, and select qualified subcontractors for efficient execution' },
      { icon: 'FilePenLine', title: 'Contracting & Coordination', description: 'Formalize agreements, establish timelines, and coordinate with main contractors to align workflow and responsibilities' },
      { icon: 'HardHat', title: 'Supervision & Quality Control', description: 'Monitor subcontractor performance, ensure compliance with standards, and address issues promptly for consistent quality' },
      { icon: 'CheckCircle', title: 'Completion & Handover', description: 'Verify work completion, conduct inspections, and integrate subcontracted outputs seamlessly into the overall project' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Subcontracting Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Electrical Work for a High-Rise", imageKey: 'projectImg1' },
      { id: 2, title: "Plumbing for a Commercial Complex", imageKey: 'projectImg2' },
      { id: 3, "title": "HVAC Installation for a Hospital", "imageKey": "projectImg3" },
      { id: 4, title: "Drywall & Finishing", imageKey: 'projectImg4' },
      { id: 5, title: "Structural Steel Erection", imageKey: 'projectImg5' },
      { id: 6, title: "Exterior Cladding Installation", imageKey: 'projectImg6' },
      { id: 7, title: "Concrete and Masonry Work", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Need a Reliable Partner?',
    description: 'Augment your project with our skilled and reliable subcontracting teams Contact us to discuss your project needs'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their subcontracting team integrated perfectly with our own The quality of their work was exceptional, and they adhered to our timeline without fail", name: "Liam O’Connor", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/9.jpg" },
        { quote: "We rely on their specialized teams for all our electrical and plumbing work They are professional, efficient, and consistently deliver high-quality results", name: "Jessica Martin", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/5.jpg" }
    ],
    summary: { count: '200+', label: 'Contracts Completed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Subcontracting services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};