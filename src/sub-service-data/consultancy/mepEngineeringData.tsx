import { PageData } from '../../pages/SubServicePageLayout';

export const mepEngineeringPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">MEP</span> Engineering',
    tagline: 'Integrating mechanical electrical and plumbing systems seamlessly.',
    description: 'Our MEP engineering services deliver fully coordinated mechanical, electrical, and plumbing solutions, ensuring efficiency, reliability, and optimal performance throughout every phase of your construction project.',
    backgroundImage: '/hero-consultancy-mep.jpg', // Updated hero background image
    uspItems: [
      { icon: 'GitMerge', title: 'Integrated Systems', description: 'Coordinated mechanical electrical and plumbing solutions seamlessly.' },
      { icon: 'GaugeCircle', title: 'Efficiency Optimization', description: 'Ensuring energy efficient system performance consistently.' },
      { icon: 'ShieldCheck', title: 'Reliable Designs', description: 'High-quality layouts minimizing future maintenance issues.' },
      { icon: 'Users', title: 'Expert Team', description: 'Skilled engineers delivering precise project execution.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our MEP engineering services provide complete design and coordination of mechanical electrical and plumbing systems for projects.',
    scopeItems: [
      { icon: 'DraftingCompass', title: 'System Design', description: 'Develop efficient mechanical electrical and plumbing designs tailored to project requirements and standards accurately.' },
      { icon: 'Calculator', title: 'Load Calculations', description: 'Perform calculations for electrical HVAC and plumbing systems ensuring optimal performance effectively.' },
      { icon: 'Puzzle', title: 'Coordination with Architecture', description: 'Integrate MEP systems seamlessly with architectural and structural designs consistently.' },
      { icon: 'Leaf', title: 'Energy Efficiency Analysis', description: 'Evaluate systems for energy optimization and sustainable performance reliably.' },
      { icon: 'HardHat', title: 'Installation Support', description: 'Provide guidance during construction to ensure systems are installed correctly effectively.' },
      { icon: 'ClipboardCheck', title: 'Testing and Commissioning', description: 'Conduct system testing and commissioning to verify proper operation and compliance consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis', description: 'Assess project needs for mechanical, electrical, and plumbing systems to ensure efficiency and compliance.' },
      { icon: 'Box', title: 'Design & Modeling', description: 'Develop detailed MEP layouts and 3D models integrating systems seamlessly into the building design.' },
      { icon: 'Settings', title: 'Coordination & Optimization', description: 'Conduct clash detection, optimize system performance, and ensure energy-efficient, safe, and cost-effective solutions.' },
      { icon: 'Construction', title: 'Implementation Support', description: 'Guide installation, supervise testing, and verify system functionality to ensure operational excellence and reliability.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured MEP Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Rise HVAC System", imageKey: 'projectImg1' },
      { id: 2, title: "Data Center Electrical Design", imageKey: 'projectImg2' },
      { id: 3, "title": "Hospital Plumbing & Gas Systems", "imageKey": "projectImg3" },
      { id: 4, title: "Commercial Tower MEP Coordination", imageKey: 'projectImg4' },
      { id: 5, title: "Hotel Energy Efficiency Audit", imageKey: 'projectImg5' },
      { id: 6, title: "Industrial Ventilation System", imageKey: 'projectImg6' },
      { id: 7, title: "Residential Complex MEP", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for an Integrated System?',
    description: 'Ensure optimal performance and efficiency with our expert MEP engineering solutions. Contact us for a project consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The MEP coordination was flawless. Their integrated design saved us from countless clashes and streamlined the construction process significantly.", name: "Nasser Al-Harbi", role: "Project Director", rating: 5, image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { quote: "Their team's expertise in energy-efficient systems has already started saving us on operational costs. A truly professional and forward-thinking MEP service.", name: "Claudia Schneider", role: "Facility Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '300+', label: 'MEP Systems Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our MEP Engineering services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};