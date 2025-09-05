import { PageData } from '../../pages/SubServicePageLayout';

export const mechanicalDrawingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Mechanical</span> Drawing',
    tagline: 'Detailed mechanical drawings for precise system implementation.',
    description: 'Our mechanical drawings provide accurate layouts and specifications, ensuring efficient installation, smooth operation, and reliable performance of all mechanical systems within your project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'DraftingCompass', title: 'Detailed Schematics', description: 'Precise mechanical layouts supporting smooth installation always.' },
      { icon: 'CheckCircle', title: 'Error Minimization', description: 'Reducing mistakes through clear and accurate drawings consistently.' },
      { icon: 'GaugeCircle', title: 'Optimized Designs', description: 'Efficient mechanical planning for project performance effectively.' },
      { icon: 'UserCheck', title: 'Expert Guidance', description: 'Professional support throughout design and implementation reliably.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our mechanical drawing services provide precise layouts and details for installation of HVAC and other mechanical systems.',
    scopeItems: [
      { icon: 'LayoutGrid', title: 'Equipment Layouts', description: 'Prepare detailed mechanical equipment layouts showing positions capacities and connections accurately for construction teams.' },
      { icon: 'GitBranch', title: 'Ducting Plans', description: 'Design HVAC ductwork plans indicating sizes routes and airflow requirements efficiently and clearly.' },
      { icon: 'Waves', title: 'Piping Layouts', description: 'Develop mechanical piping plans including valves pumps and connections for proper system operation effectively.' },
      { icon: 'Pen', title: 'Detailing', description: 'Provide sectional drawings and connection details for precise installation and maintenance of mechanical systems.' },
      { icon: 'Puzzle', title: 'Coordination', description: 'Ensure mechanical drawings integrate with structural architectural and electrical plans without conflicts consistently.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Update mechanical drawings as per design modifications client feedback or on-site observations reliably.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Evaluate mechanical system needs, equipment specifications, and operational parameters for accurate design planning.' },
      { icon: 'Box', title: 'Drafting & Modeling', description: 'Create detailed mechanical drawings, including layouts, sections, and component schematics using advanced CAD tools.' },
      { icon: 'FileSearch', title: 'Review & Coordination', description: 'Collaborate with other disciplines to ensure mechanical systems integrate seamlessly and function efficiently.' },
      { icon: 'Send', title: 'Final Drawings & Handover', description: 'Provide completed mechanical drawings ready for construction, approvals, and precise on-site installation.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Mechanical Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Industrial Piping Schematics", imageKey: 'projectImg1' },
      { id: 2, title: "Commercial HVAC Ducting Plan", imageKey: 'projectImg2' },
      { id: 3, "title": "Plant Room Equipment Layout", "imageKey": "projectImg3" },
      { id: 4, title: "Chiller System Connection Details", imageKey: 'projectImg4' },
      { id: 5, title: "Ventilation System Sections", imageKey: 'projectImg5' },
      { id: 6, title: "Pump and Valve Schematics", imageKey: 'projectImg6' },
      { id: 7, title: "Coordinated Mechanical Plans", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Precise Installation?',
    description: 'Ensure your mechanical systems are installed flawlessly with our detailed drawings. Contact us for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The mechanical drawings were incredibly precise, which made our HVAC installation seamless. The level of detail in the schematics was outstanding.", name: "James McAllister", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/10.jpg" },
        { quote: "Their team's coordination on the mechanical plans was excellent. It prevented clashes with other systems and saved us significant time during construction.", name: "Samantha P.", role: "COO, Innovate Ltd.", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ],
    summary: { count: '200+', label: 'Systems Detailed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Mechanical Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};