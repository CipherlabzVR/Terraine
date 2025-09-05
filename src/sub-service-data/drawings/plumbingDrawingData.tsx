import { PageData } from '../../pages/SubServicePageLayout';

export const plumbingDrawingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Plumbing</span> Drawing',
    tagline: 'Precise plumbing drawings for flawless system setup.',
    description: 'Our plumbing drawings provide accurate layouts and details, ensuring efficient installation, leak free performance, and reliable operation for every plumbing system in your project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Scaling', title: 'Precise Layouts', description: 'Accurate plumbing plans ensuring leak free installations.' },
      { icon: 'Combine', title: 'Efficient Coordination', description: 'Designs integrated with other building systems effectively.' },
      { icon: 'Award', title: 'Quality Assurance', description: 'High standard drawings supporting long-lasting performance consistently.' },
      { icon: 'UserCheck', title: 'Expert Support', description: 'Professional guidance throughout design and execution reliably.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our plumbing drawing services provide accurate layouts for water supply drainage and sanitation systems in buildings.',
    scopeItems: [
      { icon: 'Droplets', title: 'Water Supply Layouts', description: 'Prepare detailed plans showing pipe routes valves fixtures and connections for efficient water distribution accurately.' },
      { icon: 'Waves', title: 'Drainage Plans', description: 'Develop layouts for wastewater drainage stormwater and sewer systems ensuring proper flow effectively.' },
      { icon: 'ShowerHead', title: 'Sanitary Fixture Placement', description: 'Indicate positions of toilets sinks showers and other fixtures for functional installation reliably.' },
      { icon: 'Puzzle', title: 'Coordination with MEP Systems', description: 'Ensure plumbing drawings integrate seamlessly with mechanical electrical and architectural plans consistently.' },
      { icon: 'Ruler', title: 'Pipe Sizing and Detailing', description: 'Specify pipe diameters materials and connections for safe efficient plumbing operation effectively.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Update plumbing drawings according to design modifications client feedback or site observations consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Assess water supply, drainage, and fixture needs to design an efficient plumbing system.' },
      { icon: 'DraftingCompass', title: 'Drafting & Layout', description: 'Prepare detailed plumbing drawings, including pipe routes, fixture placement, and schematic diagrams for clarity.' },
      { icon: 'FileSearch', title: 'Coordination & Review', description: 'Work with MEP and architectural teams to ensure plumbing systems integrate seamlessly without conflicts.' },
      { icon: 'Send', title: 'Final Drawings & Handover', description: 'Provide completed plumbing drawings ready for construction, approvals, and accurate on-site implementation.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Plumbing Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Commercial Kitchen Plumbing", imageKey: 'projectImg1' },
      { id: 2, title: "High-Rise Residential Drainage", imageKey: 'projectImg2' },
      { id: 3, "title": "Stormwater Management Plan", "imageKey": "projectImg3" },
      { id: 4, title: "Hot & Cold Water Supply Layout", imageKey: 'projectImg4' },
      { id: 5, title: "Sanitary Fixture Schematics", imageKey: 'projectImg5' },
      { id: 6, title: "Pool and Spa Piping Layout", imageKey: 'projectImg6' },
      { id: 7, title: "Coordinated Plumbing & MEP Plan", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Leak-Free System?',
    description: 'Ensure a flawless plumbing installation with our precise and coordinated drawings. Contact our team to get started.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The plumbing drawings were incredibly detailed and perfectly coordinated with the other trades. This saved us significant time and prevented any on-site issues.", name: "Michael Thompson", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/13.jpg" },
        { quote: "Their team's expertise in drainage planning was evident. The layouts were efficient, compliant, and easy for our installation team to follow. Highly recommended.", name: "Sarah Williams", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/10.jpg" }
    ],
    summary: { count: '1000+', label: 'Plumbing Systems Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Plumbing Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};