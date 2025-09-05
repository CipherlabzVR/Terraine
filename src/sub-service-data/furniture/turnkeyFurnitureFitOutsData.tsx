import { PageData } from '../../pages/SubServicePageLayout';

export const turnkeyFurnitureFitOutsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Turnkey Interior</span> & Furniture Fit-Outs',
    tagline: 'Complete furniture solutions, delivered ready to use',
    description: 'Our turnkey interior and furniture fit-out services provide end-to-end solutions, managing design, fabrication, supply, and installation to deliver fully functional, stylish, and ready-to-use spaces effortlessly.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Key', title: 'One-Stop Solution', description: 'Complete project management from design to delivery ensures convenience' },
      { icon: 'Clock', title: 'Time Efficiency', description: 'Streamlined processes guarantee faster completion without compromising quality' },
      { icon: 'DollarSign', title: 'Cost-Effective Service', description: 'Optimized planning reduces unnecessary expenses while ensuring high standards' },
      { icon: 'CheckCircle', title: 'Seamless Integration', description: 'Furniture and interiors perfectly align with functional and aesthetic needs' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our turnkey interior and furniture fit-out service provides a hassle-free approach, ensuring beautifully designed, precisely manufactured, and flawlessly installed furniture for fully functional and elegant interiors.',
    scopeItems: [
      { icon: 'Clipboard', title: 'Initial Planning', description: 'Comprehensive consultation identifies requirements, ensuring effective strategies for seamless turnkey project execution.' },
      { icon: 'Palette', title: 'Conceptual Design', description: 'Creative layouts blend interior styles with customized furniture for cohesive and stylish results.' },
      { icon: 'Factory', title: 'Fabrication Stage', description: 'Advanced production techniques guarantee durability, detail, and precision across all furniture pieces.' },
      { icon: 'Wrench', title: 'On-Site Installation', description: 'Skilled teams handle delivery, assembly, and installation for functional, ready-to-use furniture solutions.' },
      { icon: 'CheckCircle', title: 'Quality Assurance', description: 'Rigorous checks ensure structural stability, finish quality, and long-term reliability of installations.' },
      { icon: 'Key', title: 'Project Handover', description: 'Completed space delivered on time, fully furnished, and designed for immediate usability and satisfaction.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Gathering & Planning', description: 'Assess client needs, project scope, and space requirements for complete turnkey furniture solutions.' },
      { icon: 'Palette', title: 'Design & Material Coordination', description: 'Finalize layouts, select materials, and plan procurement for furniture and interior elements.' },
      { icon: 'Factory', title: 'Manufacturing & On-Site Installation', description: 'Produce furniture, supervise deliveries, and manage installation for seamless integration with interior spaces.' },
      { icon: 'CheckCircle', title: 'Final Review & Handover', description: 'Conduct quality checks, ensure client satisfaction, and hand over fully functional and aesthetically complete interiors.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Turnkey Fit-Out Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Complete Office Fit-Out", imageKey: 'projectImg1' },
      { id: 2, title: "Residential Interior Transformation", imageKey: 'projectImg2' },
      { id: 3, title: "Commercial Space Fit-Out", imageKey: 'projectImg3' },
      { id: 4, title: "Hospitality Interior Design", imageKey: 'projectImg4' },
      { id: 5, title: "Retail Space Complete Fit-Out", imageKey: 'projectImg5' },
      { id: 6, title: "Educational Institution Fit-Out", imageKey: 'projectImg6' },
      { id: 7, title: "Healthcare Facility Interior", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Complete Transformation?',
    description: 'Experience hassle-free, complete interior and furniture solutions. Contact our turnkey specialists today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The turnkey service was seamless from start to finish. Our space was transformed beautifully and on time.", name: "Jennifer Wilson", role: "Business Owner", rating: 5, image: "https://randomuser.me/api/portraits/women/29.jpg" },
        { quote: "Their complete fit-out service saved us time and stress while delivering exceptional results.", name: "Mark Davis", role: "Property Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/30.jpg" }
    ],
    summary: { count: '100+', label: 'Turnkey Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Turnkey Interior & Furniture Fit-Outs services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
