import { PageData } from '../../pages/SubServicePageLayout';

export const commercialConstructionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Commercial</span> Construction',
    tagline: 'Creating efficient innovative spaces for businesses',
    description: 'Our commercial construction services deliver functional, durable, and visually appealing spaces, combining modern design, quality materials, and precise execution to support business success and growth',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'LayoutGrid', title: 'Functional Spaces', description: 'Designing efficient layouts boosting business operations effectively' },
      { icon: 'Building2', title: 'Modern Aesthetics', description: 'Visually appealing designs enhancing brand image consistently' },
      { icon: 'ShieldCheck', title: 'Durable Structures', description: 'High-quality construction ensuring long-lasting performance reliably' },
      { icon: 'Clock', title: 'On Time Delivery', description: 'Projects completed promptly without affecting quality standards' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our commercial construction services focus on delivering efficient durable and functional spaces tailored to business requirements',
    scopeItems: [
      { icon: 'Clipboard', title: 'Site Development', description: 'Prepare commercial sites with excavation grading and utilities ensuring readiness for large scale building operations' },
      { icon: 'Building', title: 'Structural Systems', description: 'Construct robust steel or concrete frameworks designed to support multi story and heavy load commercial buildings' },
      { icon: 'PanelTop', title: 'Exterior Envelope', description: 'Install facades cladding and glazing systems ensuring energy efficiency weather protection and modern commercial aesthetics' },
      { icon: 'PaintRoller', title: 'Interior Build Out', description: 'Execute partitions flooring ceilings and finishes to create functional and appealing environments for business operations' },
      { icon: 'Combine', title: 'Mechanical Electrical Plumbing', description: 'Implement advanced MEP systems ensuring uninterrupted power water and climate control for efficient commercial use' },
      { icon: 'Flame', title: 'Safety Compliance', description: 'Integrate fire protection accessibility and safety systems meeting regulatory standards for secure commercial building occupancy' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Project Planning & Design', description: 'Understand business requirements, develop functional layouts, and establish realistic timelines and budgets for commercial projects' },
      { icon: 'Building', title: 'Foundation & Structural Work', description: 'Prepare site, construct foundations, and erect structural frameworks that support large-scale commercial buildings efficiently' },
      { icon: 'HardHat', title: 'Construction & Quality Control', description: 'Oversee construction activities, ensure compliance with design specifications, safety, and industry quality standards' },
      { icon: 'Key', title: 'Finishing & Handover', description: 'Complete interiors, facades, and utility installations, delivering a fully operational, aesthetically appealing, and client-ready commercial space' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Commercial Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Corporate Office Tower", imageKey: 'projectImg1' },
      { id: 2, title: "Retail Shopping Center", imageKey: 'projectImg2' },
      { id: 3, "title": "Boutique Hotel", "imageKey": "projectImg3" },
      { id: 4, title: "Multi-Story Car Park", imageKey: 'projectImg4' },
      { id: 5, title: "Business Park Development", imageKey: 'projectImg5' },
      { id: 6, title: "Restaurant & Cafe Fit-Out", imageKey: 'projectImg6' },
      { id: 7, title: "Modern Warehouse Facility", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build Your Business Space?',
    description: 'From office towers to retail centers, we deliver commercial projects that drive success Contact us to get started'
  },
testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their team delivered our new office building ahead of schedule and with exceptional quality The functional design has already improved our workflow", name: "John Smith", role: "CEO, Innovate Inc", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" },
        { quote: "The attention to detail in the interior build-out was fantastic Our retail space is not only beautiful but also incredibly practical for our customers", name: "Samantha P", role: "Retail Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ],
    summary: { count: '50+', label: 'Commercial Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Commercial Construction services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};