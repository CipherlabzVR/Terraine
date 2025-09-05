import { PageData } from '../../pages/SubServicePageLayout';

export const mepHvacPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">MEP & HVAC</span> System Design',
    tagline: 'Designing efficient reliable and comfortable building systems.',
    description: 'Our MEP and HVAC designs ensure energy efficient, reliable, and comfortable systems, optimizing performance, reducing costs, and enhancing overall building functionality for every project.',
    backgroundImage: '/hero-consultancy-hvac.jpg', // Updated hero background image
    uspItems: [
      { icon: 'Thermometer', title: 'Comfort Oriented', description: 'Efficient HVAC systems ensuring optimal indoor climate.' },
      { icon: 'Leaf', title: 'Energy Efficient', description: 'Reducing operational costs through smart designs.' },
      { icon: 'ShieldCheck', title: 'Reliable Solutions', description: 'High-quality systems minimizing failures and downtime.' },
      { icon: 'Settings2', title: 'Customized Designs', description: 'Tailored solutions for unique project requirements.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our MEP and HVAC system design services ensure comfortable efficient and reliable building environments for all project types.',
    scopeItems: [
      { icon: 'Calculator', title: 'HVAC Load Calculation', description: 'Determine heating cooling and ventilation requirements to ensure optimal indoor comfort accurately.' },
      { icon: 'GitBranch', title: 'Duct and Pipe Layout', description: 'Design ductwork and piping routes for efficient system operation and space utilization effectively.' },
      { icon: 'Cog', title: 'Equipment Selection', description: 'Recommend HVAC and MEP equipment that meets project capacity efficiency and budget reliably.' },
      { icon: 'Puzzle', title: 'Integration with MEP Systems', description: 'Coordinate HVAC design with electrical plumbing and fire protection systems consistently.' },
      { icon: 'GaugeCircle', title: 'Energy Performance Optimization', description: 'Evaluate designs to reduce energy consumption and improve sustainability effectively.' },
      { icon: 'HardHat', title: 'Construction Support', description: 'Guide installation teams and review work to ensure compliance with design standards consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Needs Assessment', description: 'Evaluate building requirements, climate conditions, and energy efficiency goals to design optimal HVAC and MEP systems.' },
      { icon: 'Box', title: 'System Design & Simulation', description: 'Create detailed layouts, perform load calculations, and simulate system performance for maximum efficiency and comfort.' },
      { icon: 'Combine', title: 'Integration & Coordination', description: 'Ensure seamless coordination between mechanical, electrical, and plumbing components with architectural and structural elements.' },
      { icon: 'ClipboardCheck', title: 'Implementation & Testing', description: 'Support installation, conduct performance testing, and verify systems meet design specifications and operational standards.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured MEP & HVAC Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Tower HVAC", imageKey: 'projectImg1' },
      { id: 2, title: "Hospital Ventilation System", imageKey: 'projectImg2' },
      { id: 3, "title": "Data Center Cooling Solution", "imageKey": "projectImg3" },
      { id: 4, title: "Hotel MEP Integration", imageKey: 'projectImg4' },
      { id: 5, title: "Retail Complex HVAC Design", imageKey: 'projectImg5' },
      { id: 6, title: "Residential HVAC Systems", imageKey: 'projectImg6' },
      { id: 7, title: "Energy-Efficient Office Climate", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for an Optimized Environment?',
    description: 'Ensure comfort, efficiency, and reliability with our expert MEP & HVAC design services. Contact us for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The HVAC design they provided for our office complex is incredibly efficient. Our energy costs have noticeably decreased, and the indoor climate is perfect.", name: "Ahmad Faizal", role: "Facility Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" },
        { quote: "Their team seamlessly integrated all MEP and HVAC systems with the architectural plans, which prevented countless issues during construction. Highly professional.", name: "Samantha Clarke", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/9.jpg" }
    ],
    summary: { count: '2M+ sqft', label: 'Area Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our MEP & HVAC System Design services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};