import { PageData } from '../../pages/SubServicePageLayout';

export const industrialConstructionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Industrial</span> Construction',
    tagline: 'Building robust efficient facilities for industries',
    description: 'Our industrial construction services provide durable, functional, and safe facilities, designed and executed with precision to optimize operations, productivity, and long-term performance for industrial clients',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Building', title: 'Robust Structures', description: 'Strong buildings designed for heavy industrial use consistently' },
      { icon: 'GaugeCircle', title: 'Operational Efficiency', description: 'Optimized layouts supporting smooth industrial processes effectively' },
      { icon: 'ShieldCheck', title: 'Safety Compliance', description: 'Projects adhering to strict industrial safety regulations reliably' },
      { icon: 'Clock', title: 'Timely Execution', description: 'Industrial projects completed on schedule with precision' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our industrial construction services deliver durable efficient and scalable facilities designed to support manufacturing and production',
    scopeItems: [
      { icon: 'Clipboard', title: 'Site Preparation', description: 'Clear level and stabilize land with infrastructure connections ensuring suitable ground for heavy industrial facilities' },
      { icon: 'Building', title: 'Foundation Systems', description: 'Construct reinforced foundations capable of supporting heavy machinery equipment and large-scale industrial structures safely' },
      { icon: 'GalleryVertical', title: 'Structural Framework', description: 'Build durable steel or concrete frames designed for expansive spaces and long span industrial operations' },
      { icon: 'Layers', title: 'Specialized Flooring', description: 'Install high strength floors resistant to chemical spills heavy loads and continuous industrial equipment operation' },
      { icon: 'Combine', title: 'MEP Installations', description: 'Implement customized mechanical electrical and plumbing systems to meet industrial production efficiency and safety requirements' },
      { icon: 'Leaf', title: 'Environmental Compliance', description: 'Ensure waste management ventilation and emission systems meet industrial environmental regulations and sustainability standards' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Project Assessment & Design', description: 'Evaluate industrial requirements, machinery needs, and workflows to create an efficient and compliant facility layout' },
      { icon: 'Building', title: 'Foundation & Structural Setup', description: 'Prepare heavy-duty foundations, steel frameworks, and structural supports suitable for industrial loads and operations' },
      { icon: 'HardHat', title: 'Construction & Equipment Integration', description: 'Build structures while coordinating the installation of machinery, utilities, and specialized systems for operational readiness' },
      { icon: 'CheckCircle', title: 'Finishing & Commissioning', description: 'Complete interiors, safety systems, and testing, ensuring a fully functional, safe, and operational industrial facility' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Industrial Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Manufacturing Plant", imageKey: 'projectImg1' },
      { id: 2, title: "Warehouse & Logistics Hub", imageKey: 'projectImg2' },
      { id: 3, "title": "Data Center Construction", "imageKey": "projectImg3" },
      { id: 4, title: "Power Generation Facility", imageKey: 'projectImg4' },
      { id: 5, title: "Automated Production Line", imageKey: 'projectImg5' },
      { id: 6, title: "Heavy Machinery Foundation", imageKey: 'projectImg6' },
      { id: 7, title: "Chemical Processing Plant", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build Your Industrial Facility?',
    description: 'We deliver robust, efficient, and safe industrial projects tailored to your operational needs Contact us today'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The efficiency of their industrial construction process was remarkable Our new manufacturing plant was operational ahead of schedule and built to the highest safety standards", name: "Hans Müller", role: "Plant Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "They delivered a robust and highly functional warehouse that perfectly suits our logistical needs The entire project was handled with utmost professionalism", name: "Claudia Schneider", role: "Operations Director", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '20+', label: 'Industrial Facilities Built' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Industrial Construction services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};