import { PageData } from '../../pages/SubServicePageLayout';

export const modularFurniturePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Modular Furniture</span> Solutions',
    tagline: 'Flexible furniture designed to adapt and transform',
    description: 'Our modular furniture solutions bring versatility, functionality, and style together, offering customizable layouts that seamlessly adapt to evolving spaces, modern lifestyles, and diverse design requirements with enduring quality.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Puzzle', title: 'Adaptable Designs', description: 'Flexible layouts easily adjust to different spaces and functional needs' },
      { icon: 'DollarSign', title: 'Cost Efficiency', description: 'Modular solutions reduce waste, optimize space, and minimize long-term costs' },
      { icon: 'Zap', title: 'Smart Innovation', description: 'Practical designs combine modern technology with enhanced functionality and comfort' },
      { icon: 'Leaf', title: 'Sustainable Choice', description: 'Eco-friendly materials ensure both durability and environmental responsibility' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our modular furniture solutions deliver smart, space-efficient, and contemporary designs that allow maximum flexibility, easy customization, and sustainable integration into residential, commercial, and institutional environments.',
    scopeItems: [
      { icon: 'Search', title: 'Space Analysis', description: 'Careful evaluation identifies requirements, ensuring modular furniture maximizes space functionality and enhances efficiency.' },
      { icon: 'Layout', title: 'Design Planning', description: 'Strategic layouts are created to optimize space, balancing aesthetics, practicality, and seamless modular integration.' },
      { icon: 'Settings', title: 'Custom Configuration', description: 'Flexible combinations of furniture modules allow personalized arrangements that adapt to changing requirements.' },
      { icon: 'Package', title: 'Material Selection', description: 'Durable, sustainable, and stylish materials guarantee lasting furniture performance with a modern aesthetic.' },
      { icon: 'Wrench', title: 'Installation Process', description: 'Professional setup ensures precise fitting, stability, and hassle-free modular furniture placement.' },
      { icon: 'ArrowUpDown', title: 'Future Scalability', description: 'Easy expandability and reconfiguration make modular furniture suitable for long-term adaptability and growth.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Analysis & Planning', description: 'Assess space, functionality, and user needs to design flexible and adaptable modular furniture solutions.' },
      { icon: 'Eye', title: 'Design & Prototype Development', description: 'Create 3D models, prototypes, and material selections to visualize modular configurations effectively.' },
      { icon: 'Users', title: 'Client Feedback & Refinement', description: 'Review designs with clients, make adjustments, and ensure alignment with usability and aesthetics.' },
      { icon: 'Truck', title: 'Production & Delivery', description: 'Manufacture modules, coordinate delivery, and provide installation instructions for seamless assembly on-site.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Modular Furniture Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Flexible Office Workstations", imageKey: 'projectImg1' },
      { id: 2, title: "Adaptable Living Room Systems", imageKey: 'projectImg2' },
      { id: 3, title: "Modular Kitchen Solutions", imageKey: 'projectImg3' },
      { id: 4, title: "Scalable Storage Systems", imageKey: 'projectImg4' },
      { id: 5, title: "Multi-Functional Furniture", imageKey: 'projectImg5' },
      { id: 6, title: "Space-Saving Bedroom Sets", imageKey: 'projectImg6' },
      { id: 7, title: "Commercial Modular Solutions", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Transform Your Space?',
    description: 'Discover the flexibility and efficiency of modular furniture solutions. Contact our experts today for adaptable designs.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The modular furniture perfectly adapts to our changing needs. It's both functional and beautiful.", name: "Emily Rodriguez", role: "Office Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/25.jpg" },
        { quote: "Their modular solutions saved us space and money while providing excellent functionality.", name: "Michael Thompson", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/men/26.jpg" }
    ],
    summary: { count: '150+', label: 'Modular Systems Installed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Modular Furniture Solutions.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
