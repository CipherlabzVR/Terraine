import { PageData } from '../../pages/SubServicePageLayout';

export const surveyingDigitalMappingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Surveying & Digital</span> Mapping',
    tagline: 'Accurate surveying and mapping for precise planning.',
    description: 'Our surveying and digital mapping services deliver precise measurements, detailed layouts, and reliable data, ensuring informed decisions, efficient planning, and flawless execution for every construction project.',
    backgroundImage: '/hero-consultancy-surveying.jpg', // Updated hero background image
    uspItems: [
      { icon: 'Scaling', title: 'Accurate Measurements', description: 'Precise data for flawless project planning consistently.' },
      { icon: 'Globe2', title: 'Advanced Technology', description: 'Utilizing modern tools for superior mapping results.' },
      { icon: 'Zap', title: 'Efficient Processes', description: 'Streamlined surveying saving time and resources effectively.' },
      { icon: 'Database', title: 'Reliable Data', description: 'Supporting informed decisions throughout project lifecycle.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our surveying and digital mapping services provide precise land and building measurements for accurate planning and execution.',
    scopeItems: [
      { icon: 'Mountain', title: 'Topographic Surveys', description: 'Conduct detailed surveys to capture land contours elevations and features accurately.' },
      { icon: 'Square', title: 'Boundary Surveys', description: 'Establish property limits and legal boundaries for construction and documentation effectively.' },
      { icon: 'Map', title: 'Digital Mapping', description: 'Create GIS based maps for site analysis and planning reliably.' },
      { icon: 'Building', title: 'As Built Surveys', description: 'Document existing structures and site conditions for reference and verification consistently.' },
      { icon: 'BarChart3', title: 'Data Analysis', description: 'Process survey data to generate reports and plans for project teams effectively.' },
      { icon: 'RefreshCw', title: 'Monitoring and Updates', description: 'Provide periodic surveys to track changes during construction and site development consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Search', title: 'Site Reconnaissance', description: 'Conduct preliminary site visits and assessments to understand terrain, boundaries, and project requirements accurately.' },
      { icon: 'Orbit', title: 'Data Collection', description: 'Use advanced surveying equipment and digital mapping tools to capture precise topographical and spatial data.' },
      { icon: 'Box', title: 'Analysis & Modeling', description: 'Process collected data to create detailed maps, 3D models, and geospatial analyses for planning.' },
      { icon: 'FileText', title: 'Reporting & Support', description: 'Provide comprehensive survey reports, maps, and recommendations for informed decision-making and project execution.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Surveying Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Land Development Survey", imageKey: 'projectImg1' },
      { id: 2, title: "Urban GIS Mapping", imageKey: 'projectImg2' },
      { id: 3, "title": "Construction Site Layout", "imageKey": "projectImg3" },
      { id: 4, title: "As-Built Documentation", imageKey: 'projectImg4' },
      { id: 5, title: "Boundary Dispute Survey", imageKey: 'projectImg5' },
      { id: 6, title: "Topographic Analysis", imageKey: 'projectImg6' },
      { id: 7, title: "Infrastructure Corridor Mapping", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Precision Planning?',
    description: 'Lay the groundwork for your project\'s success with accurate data. Contact our surveying team for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The accuracy of their topographic survey was exceptional. It gave our design team the exact data they needed to proceed with confidence.", name: "Hans Müller", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "Their digital mapping services were a game-changer for our urban planning project. The GIS-based maps were detailed, reliable, and delivered ahead of schedule.", name: "Nur Aisyah", role: "Urban Planner", rating: 5, image: "https://randomuser.me/api/portraits/women/8.jpg" }
    ],
    summary: { count: '5000+ acres', label: 'Surveyed & Mapped' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Surveying & Digital Mapping services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};