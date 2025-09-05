import { PageData } from '../../pages/SubServicePageLayout';

export const precastConstructionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Precast</span> Construction',
    tagline: 'Efficient, durable building solutions crafted with precision',
    description: 'Our precast construction service delivers speed, strength, and sustainability by manufacturing components off-site, ensuring quality control, faster installation, and long-lasting performance for residential, commercial, and infrastructure projects seamlessly',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Zap', title: 'Faster Project Delivery', description: 'Precast elements minimize on-site delays, ensuring efficient and timely project completion' },
      { icon: 'Award', title: 'Superior Quality Control', description: 'Off-site fabrication ensures consistent quality, durability, and reduced material wastage' },
      { icon: 'CircleDollarSign', title: 'Cost-Effective Solutions', description: 'Optimized production reduces construction expenses while maintaining high-performance standards' },
      { icon: 'Leaf', title: 'Sustainable Construction', description: 'Precast methods reduce environmental impact, supporting green, energy-efficient, and eco-conscious building practices' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our precast construction service streamlines building processes, ensuring durable, cost-efficient, and environmentally sustainable structures designed for long-term reliability, rapid installation, and enhanced structural performance',
    scopeItems: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Planning', description: 'Conduct thorough site evaluations, load studies, and project-specific requirements to create efficient precast planning solutions' },
      { icon: 'Box', title: 'Design & Structural Engineering', description: 'Develop reinforced 3D models, structural simulations, and code-compliant engineering drawings for optimized precast construction performance' },
      { icon: 'Factory', title: 'Controlled Precast Fabrication', description: 'Manufacture high-strength precast units in advanced factories, ensuring consistency, dimensional accuracy, and superior long-lasting durability' },
      { icon: 'Truck', title: 'Efficient Transportation & Logistics', description: 'Organize streamlined logistics systems, enabling timely deliveries, safe handling, and minimal site-related project delays' },
      { icon: 'HardHat', title: 'On-Site Installation & Assembly', description: 'Execute rapid installation processes with specialized equipment, guaranteeing structural alignment accuracy, speed, and construction efficiency' },
      { icon: 'ClipboardCheck', title: 'Testing, Quality Control & Handover', description: 'Perform strict inspections, strength tests, and quality verifications ensuring durable, safe, and reliable finished structures' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Requirement Assessment & Planning', description: 'Analyze project requirements, structural needs, and precast element specifications to develop a detailed plan for production, delivery, and on-site assembly ensuring seamless integration' },
      { icon: 'Briefcase', title: 'Procurement & Fabrication Management', description: 'Source raw materials, coordinate with precast manufacturers, and oversee fabrication processes to guarantee quality, compliance with standards, and adherence to project timelines' },
      { icon: 'Plane', title: 'Logistics & On-Site Coordination', description: 'Manage transportation, handle customs and permits if needed, and supervise installation to ensure all precast components are delivered and assembled efficiently' },
      { icon: 'CheckCircle', title: 'Final Review & Handover', description: 'Conduct thorough inspections, verify quality and structural integrity, and hand over the completed precast solution with full documentation and client approval' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Precast Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Multi-Story Parking Garage", imageKey: 'projectImg1' },
      { id: 2, title: "Precast Concrete Facade Panels", imageKey: 'projectImg2' },
      { id: 3, "title": "Modular Residential Building", "imageKey": "projectImg3" },
      { id: 4, title: "Bridge Girders and Beams", imageKey: 'projectImg4' },
      { id: 5, title: "Precast Retaining Walls", imageKey: 'projectImg5' },
      { id: 6, title: "Industrial Warehouse Walls", imageKey: 'projectImg6' },
      { id: 7, title: "Hollow-Core Slab Flooring", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Faster, Smarter Construction?',
    description: 'Leverage the speed and quality of precast construction for your next project Contact us to learn more about our solutions'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The speed of the precast installation was incredible It shaved weeks off our project timeline while maintaining the highest quality standards", name: "Liam O’Connor", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/9.jpg" },
        { quote: "The quality control that comes with off-site fabrication is a major advantage The precast panels were flawless and fit perfectly", name: "Jessica Martin", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/5.jpg" }
    ],
    summary: { count: '100+', label: 'Precast Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Precast Construction services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};