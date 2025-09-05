import { PageData } from '../../pages/SubServicePageLayout';

export const structuralEngineeringPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Structural</span> Engineering',
    tagline: 'Innovative designs delivering strength safety and reliability.',
    description: 'Our structural engineering services create safe, durable, and efficient structures through innovative designs, precise calculations, and expert execution, ensuring long-lasting performance for every project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldCheck', title: 'Safe Structural Designs', description: 'Ensuring durability and building reliability always.' },
      { icon: 'Lightbulb', title: 'Innovative Solutions', description: 'Creative engineering approaches for challenging projects.' },
      { icon: 'Scaling', title: 'Precision Engineering', description: 'Accurate calculations minimizing design and construction errors.' },
      { icon: 'TrendingUp', title: 'Optimized Performance', description: 'Efficient use of of materials and structural systems.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our structural engineering services ensure safe and efficient design solutions for buildings and infrastructure projects.',
    scopeItems: [
      { icon: 'Calculator', title: 'Structural Analysis', description: 'Perform calculations to determine loads stresses and structural stability accurately.' },
      { icon: 'Maximize', title: 'Design Optimization', description: 'Develop efficient structural layouts minimizing materials while maintaining safety effectively.' },
      { icon: 'Box', title: 'Material Selection', description: 'Recommend appropriate concrete steel and other materials for durability and performance reliably.' },
      { icon: 'HardHat', title: 'Construction Support', description: 'Provide guidance during construction to ensure compliance with design specifications consistently.' },
      { icon: 'Weight', title: 'Load Assessment', description: 'Evaluate live dead and environmental loads to ensure structural integrity effectively.' },
      { icon: 'FileText', title: 'Structural Reporting', description: 'Prepare comprehensive reports documenting designs calculations and recommendations for approval and execution.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Structural Assessment', description: 'Evaluate project requirements, load conditions, and environmental factors to design safe, durable, and efficient structures.' },
      { icon: 'Box', title: 'Design & Modeling', description: 'Create detailed structural models using advanced software, ensuring compliance with codes and optimal material usage.' },
      { icon: 'BarChart3', title: 'Analysis & Optimization', description: 'Perform structural analysis, identify potential risks, and optimize designs for stability, safety, and cost-effectiveness.' },
      { icon: 'ClipboardCheck', title: 'Construction Support & Review', description: 'Provide guidance during construction, review drawings, and ensure adherence to design specifications for quality outcomes.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Structural Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Rise Steel Frame", imageKey: 'projectImg1' },
      { id: 2, title: "Suspension Bridge Analysis", imageKey: 'projectImg2' },
      { id: 3, "title": "Reinforced Concrete Stadium", "imageKey": "projectImg3" },
      { id: 4, title: "Seismic Retrofitting", imageKey: 'projectImg4' },
      { id: 5, title: "Industrial Warehouse Design", imageKey: 'projectImg5' },
      { id: 6, title: "Load Bearing Wall Assessment", imageKey: 'projectImg6' },
      { id: 7, title: "Timber Frame Structure", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build with Confidence?',
    description: 'Ensure the integrity and longevity of your structure with our expert engineering solutions. Contact us to get started.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The structural design for our tower was both innovative and incredibly efficient. Their precision and attention to safety standards were impressive.", name: "John D.", role: "Lead Architect, Apex Designs", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" },
        { quote: "Their team provided excellent construction support and their structural analysis was top-notch. We felt confident in our building's stability every step of the way.", name: "Samantha P.", role: "COO, Innovate Ltd.", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" }
    ],
    summary: { count: '500+', label: 'Structures Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Structural Engineering services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};