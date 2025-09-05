import { PageData } from '../../pages/SubServicePageLayout';

export const constructionMaterialsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Construction</span> Materials',
    tagline: 'High-quality materials for lasting project success',
    description: 'Our construction materials services supply durable, reliable, and cost-effective resources, ensuring optimal performance, quality, and longevity for every residential, commercial, and industrial construction project',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Award', title: 'High-quality Supplies', description: 'Durable materials ensuring long-lasting construction consistently' },
      { icon: 'LayoutGrid', title: 'Wide Selection', description: 'Comprehensive range meeting diverse project requirements effectively' },
      { icon: 'CircleDollarSign', title: 'Cost-effective', description: 'Sourcing materials at competitive prices reliably' },
      { icon: 'Truck', title: 'Timely Delivery', description: 'Efficient logistics supporting smooth project execution' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our construction materials services provide high-quality sourcing supply and management of building materials for all projects',
    scopeItems: [
      { icon: 'Search', title: 'Material Sourcing', description: 'Identify and procure high-quality materials ensuring compliance with project specifications and standards consistently' },
      { icon: 'Users', title: 'Supplier Management', description: 'Coordinate with trusted suppliers to maintain timely delivery and material availability for construction needs effectively' },
      { icon: 'Archive', title: 'Inventory Control', description: 'Monitor stock levels and manage storage ensuring materials are protected and readily available for use reliably' },
      { icon: 'ClipboardCheck', title: 'Quality Inspection', description: 'Conduct material testing and inspection ensuring compliance with specifications durability and performance requirements consistently' },
      { icon: 'Target', title: 'Cost Optimization', description: 'Analyze and manage material costs ensuring budget adherence without compromising quality and project efficiency effectively' },
      { icon: 'Plane', title: 'Logistics and Delivery', description: 'Plan and execute timely transportation and delivery of materials to construction sites minimizing delays and damages' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Material Assessment & Selection', description: 'Evaluate project requirements and select high-quality, durable, and cost-effective construction materials' },
      { icon: 'Briefcase', title: 'Procurement & Logistics', description: 'Source materials from reliable suppliers, manage transportation, and ensure timely delivery to the construction site' },
      { icon: 'TestTube2', title: 'Inspection & Testing', description: 'Conduct quality checks and testing to verify material compliance with project specifications and industry standards' },
      { icon: 'Warehouse', title: 'Storage & On-Site Management', description: 'Organize material storage, prevent damage or wastage, and manage inventory for smooth construction workflow' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Materials Supplied',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Grade Structural Steel", imageKey: 'projectImg1' },
      { id: 2, title: "Reinforced Concrete Supply", imageKey: 'projectImg2' },
      { id: 3, "title": "Architectural Glass & Facades", "imageKey": "projectImg3" },
      { id: 4, title: "Sustainable Timber Delivery", imageKey: 'projectImg4' },
      { id: 5, title: "MEP Components & Piping", imageKey: 'projectImg5' },
      { id: 6, title: "Interior Finishing Materials", imageKey: 'projectImg6' },
      { id: 7, title: "Bulk Aggregate & Cement", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Need Quality Materials for Your Project?',
    description: 'Ensure the success of your build with our reliable supply of high-quality construction materials Contact us for a quote'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their material sourcing service was a game-changer for our project They found high-quality, cost-effective options that we wouldn't have found on our own", name: "Hans Müller", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "Timely delivery and excellent quality control We could always count on them to supply the right materials exactly when we needed them", name: "Claudia Schneider", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '1000+', label: 'Projects Supplied' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Construction Materials services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};