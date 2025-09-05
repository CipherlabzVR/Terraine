import { PageData } from '../../pages/SubServicePageLayout';

export const commercialInstitutionalFurniturePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Commercial & Institutional</span> Furniture',
    tagline: 'Durable furniture designed for business and beyond',
    description: 'Our commercial and institutional furniture solutions focus on durability, functionality, and design excellence, offering tailored furniture for offices, schools, hospitals, and public spaces with long-lasting quality and comfort.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Shield', title: 'High Durability', description: 'Sturdy materials ensure reliability under heavy daily use' },
      { icon: 'Heart', title: 'Ergonomic Design', description: 'Comfort-focused furniture enhances productivity and well-being' },
      { icon: 'Settings', title: 'Custom Solutions', description: 'Tailored furniture matches institutional standards and functional needs' },
      { icon: 'Eye', title: 'Aesthetic Appeal', description: 'Modern designs blend seamlessly into diverse commercial environments' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our commercial and institutional furniture service ensures reliable, functional, and stylish solutions for professional environments, delivering comfort, strength, and practicality tailored to specific organizational needs.',
    scopeItems: [
      { icon: 'Clipboard', title: 'Requirement Analysis', description: 'Careful evaluation identifies operational needs, ensuring furniture aligns with functional and institutional standards.' },
      { icon: 'Layout', title: 'Design Development', description: 'Smart layouts and ergonomic solutions are created to enhance productivity and user comfort effectively.' },
      { icon: 'Package', title: 'Material Selection', description: 'Strong, sustainable, and durable materials guarantee longevity, safety, and consistent furniture performance.' },
      { icon: 'Factory', title: 'Fabrication Process', description: 'Precision manufacturing ensures reliable structural strength, smooth finishes, and refined overall appearance.' },
      { icon: 'Wrench', title: 'Installation Services', description: 'Professional assembly ensures stability, correct placement, and immediate usability across large-scale projects.' },
      { icon: 'Headphones', title: 'After-Sales Support', description: 'Maintenance and service options ensure continuous performance and long-term value retention.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Assessment & Space Planning', description: 'Analyze client needs, functionality, and space to design furniture for commercial and institutional settings.' },
      { icon: 'Palette', title: 'Design & Material Selection', description: 'Develop layouts, select durable and ergonomic materials, and create 3D visualizations for approval.' },
      { icon: 'Factory', title: 'Production & Quality Assurance', description: 'Manufacture furniture with precision, conduct quality checks, and ensure compliance with safety standards.' },
      { icon: 'Truck', title: 'Delivery & Installation', description: 'Coordinate delivery, professional installation, and final inspection for fully functional and efficient furniture setups.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Commercial & Institutional Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Corporate Office Furniture", imageKey: 'projectImg1' },
      { id: 2, title: "Educational Institution Furniture", imageKey: 'projectImg2' },
      { id: 3, title: "Healthcare Facility Furniture", imageKey: 'projectImg3' },
      { id: 4, title: "Government Office Solutions", imageKey: 'projectImg4' },
      { id: 5, title: "Retail Store Furniture", imageKey: 'projectImg5' },
      { id: 6, title: "Conference Room Systems", imageKey: 'projectImg6' },
      { id: 7, title: "Public Space Furniture", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Professional Furniture Solutions?',
    description: 'Enhance your commercial or institutional space with durable, functional furniture. Contact our experts today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The commercial furniture is built to last and perfectly suited for our high-traffic environment.", name: "Dr. Amanda Foster", role: "Hospital Administrator", rating: 5, image: "https://randomuser.me/api/portraits/women/31.jpg" },
        { quote: "Their institutional furniture solutions meet all our requirements for durability and functionality.", name: "James Rodriguez", role: "School Principal", rating: 5, image: "https://randomuser.me/api/portraits/men/32.jpg" }
    ],
    summary: { count: '300+', label: 'Institutions Served' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Commercial & Institutional Furniture services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
