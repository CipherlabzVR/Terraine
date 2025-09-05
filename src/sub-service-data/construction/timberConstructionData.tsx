import { PageData } from '../../pages/SubServicePageLayout';

export const timberConstructionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Timber</span> Construction',
    tagline: 'Crafting strong durable and elegant timber structures',
    description: 'Our timber construction services deliver high quality, sustainable, and precisely built wooden structures, combining strength, aesthetics, and functionality for residential, commercial, and specialized projects',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldCheck', title: 'Durable Woodwork', description: 'High-quality timber ensuring long-lasting structures consistently' },
      { icon: 'Scaling', title: 'Precision Crafting', description: 'Expertly designed wooden elements for perfect fit effectively' },
      { icon: 'Sparkles', title: 'Aesthetic Appeal', description: 'Elegant timber designs enhancing visual charm reliably' },
      { icon: 'Leaf', title: 'Sustainable Practices', description: 'Eco-friendly timber sourcing supporting responsible construction' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our timber construction services combine sustainability strength and aesthetics to deliver eco-friendly structures with exceptional performance',
    scopeItems: [
      { icon: 'Package', title: 'Material Selection and Sourcing', description: 'Choose high-quality sustainable timber species ensuring durability structural integrity and compliance with environmental standards' },
      { icon: 'Pen', title: 'Structural Design and Detailing', description: 'Develop precise structural drawings and timber detailing ensuring safe load distribution and long-term performance' },
      { icon: 'Puzzle', title: 'Prefabrication and Assembly', description: 'Manufacture timber components offsite for efficient on-site assembly reducing waste and ensuring construction speed' },
      { icon: 'Grip', title: 'Joinery and Connections', description: 'Implement advanced joinery techniques and secure connections ensuring strong durable and aesthetically pleasing timber structures' },
      { icon: 'Paintbrush', title: 'Finishing and Treatment', description: 'Apply protective coatings fire resistance and aesthetic finishes enhancing durability weather resistance and visual appeal' },
      { icon: 'ClipboardCheck', title: 'Inspection and Quality Assurance', description: 'Conduct regular inspections load tests and quality checks ensuring timber structures meet safety and design standards' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Design & Material Selection', description: 'Plan timber structures and select high-quality, durable wood suited for structural and aesthetic purposes' },
      { icon: 'Factory', title: 'Fabrication & Preassembly', description: 'Cut, shape, and assemble timber components in controlled environments for accuracy and efficiency' },
      { icon: 'HardHat', title: 'On-Site Construction', description: 'Erect timber frameworks, joinery, and structural elements, ensuring precise alignment and structural integrity' },
      { icon: 'CheckCircle', title: 'Finishing & Quality Check', description: 'Apply protective treatments, finishes, and conduct inspections for durability, safety, and visual appeal' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Timber Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Laminated Timber Pavilion", imageKey: 'projectImg1' },
      { id: 2, title: "Custom Wood Frame House", imageKey: 'projectImg2' },
      { id: 3, "title": "Heavy Timber Commercial Roof", "imageKey": "projectImg3" },
      { id: 4, title: "Glulam Beam Bridge", imageKey: 'projectImg4' },
      { id: 5, title: "Prefabricated Timber Cabin", imageKey: 'projectImg5' },
      { id: 6, title: "Exposed Beam Interior", imageKey: 'projectImg6' },
      { id: 7, title: "Outdoor Timber Pergola", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build with Timber?',
    description: 'Discover the beauty, strength, and sustainability of timber construction Contact us to discuss your project today'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The precision crafting of the timber frame for our home was a work of art The structure is not only strong but absolutely beautiful", name: "Hans Müller", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "Their commitment to sustainable timber sourcing was a key reason we chose them They delivered an eco-friendly and stunning commercial space", name: "Emma Wilson", role: "Business Owner", rating: 5, image: "https://randomuser.me/api/portraits/women/6.jpg" }
    ],
    summary: { count: '50+', label: 'Timber Structures Built' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Timber Construction services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};