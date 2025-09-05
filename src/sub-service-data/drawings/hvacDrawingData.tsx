import { PageData } from '../../pages/SubServicePageLayout';

export const hvacDrawingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">HVAC</span> Drawing',
    tagline: 'Efficient HVAC drawings for optimal climate control.',
    description: 'Our HVAC drawings deliver precise layouts and specifications, ensuring energy efficient, reliable, and comfortable heating, ventilation, and air conditioning systems for every building project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Settings', title: 'Optimized Systems', description: 'Efficient HVAC layouts for superior climate control.' },
      { icon: 'Scaling', title: 'Accurate Planning', description: 'Precise drawings minimizing installation errors consistently.' },
      { icon: 'Leaf', title: 'Energy Efficient', description: 'Designs focused on reducing operational costs effectively.' },
      { icon: 'ShieldCheck', title: 'Reliable Performance', description: 'Ensuring durable, functional, and well-coordinated systems.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our HVAC drawing services provide detailed layouts for heating ventilation and air conditioning systems for buildings.',
    scopeItems: [
      { icon: 'GitBranch', title: 'Ductwork Layouts', description: 'Prepare HVAC ducting plans showing sizes routes and connections for proper airflow and installation accurately.' },
      { icon: 'LayoutGrid', title: 'Equipment Placement', description: 'Indicate positions of AHUs chillers pumps and fans for efficient system operation effectively.' },
      { icon: 'Waves', title: 'Pipe and Piping Connections', description: 'Develop chilled water heating water and refrigerant piping layouts with valves and fittings reliably.' },
      { icon: 'Puzzle', title: 'Coordination with MEP Systems', description: 'Ensure HVAC drawings integrate seamlessly with mechanical electrical plumbing and architectural plans consistently.' },
      { icon: 'Pen', title: 'System Detailing', description: 'Provide detailed sections and connection details for accurate installation and maintenance effectively.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Update HVAC drawings according to client feedback design changes or site observations consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'System Assessment', description: 'Evaluate heating, ventilation, and air-conditioning requirements, considering building size, climate, and energy efficiency goals.' },
      { icon: 'DraftingCompass', title: 'Drafting & Modeling', description: 'Create detailed HVAC layouts, ducting plans, equipment locations, and airflow schematics for precise installation.' },
      { icon: 'FileSearch', title: 'Coordination & Verification', description: 'Collaborate with MEP, structural, and architectural teams to prevent clashes and ensure smooth integration.' },
      { icon: 'Send', title: 'Final Drawings & Delivery', description: 'Deliver finalized HVAC drawings ready for approvals, construction guidance, and accurate on-site implementation.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured HVAC Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Ducting Plan", imageKey: 'projectImg1' },
      { id: 2, title: "Chiller Plant Layout", imageKey: 'projectImg2' },
      { id: 3, "title": "Ventilation Schematics", "imageKey": "projectImg3" },
      { id: 4, title: "AHU Placement Drawings", imageKey: 'projectImg4' },
      { id: 5, title: "Refrigerant Piping Diagram", imageKey: 'projectImg5' },
      { id: 6, title: "Heating System Layout", imageKey: 'projectImg6' },
      { id: 7, title: "Coordinated HVAC & MEP Plan", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Optimal Climate Control?',
    description: 'Ensure a comfortable and energy-efficient environment with our precise HVAC drawings. Contact our team for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The HVAC drawings were perfectly detailed and coordinated, which made for a smooth installation. Our building's climate control is now incredibly efficient.", name: "Ahmad Faizal", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" },
        { quote: "Their focus on energy efficiency in the HVAC design has already translated to noticeable savings. A professional team that delivers on their promises.", name: "Samantha Clarke", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/9.jpg" }
    ],
    summary: { count: '5M+ sqft', label: 'Area Climate Controlled' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our HVAC Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};