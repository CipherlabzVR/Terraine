import { PageData } from '../../pages/SubServicePageLayout';

export const smartInnovativeFurniturePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Smart & Innovative</span> Furniture',
    tagline: 'Intelligent, stylish furniture designed to enhance modern living and workspaces beautifully',
    description: 'Our smart and innovative furniture solutions integrate advanced technology, ergonomic design, and modern aesthetics, offering interactive, space-saving, and multifunctional pieces that improve convenience, comfort, and efficiency for homes, offices, and commercial environments.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Cpu', title: 'Integrated Technology', description: 'Furniture incorporates advanced smart features for seamless automation, comfort, and modern lifestyle convenience' },
      { icon: 'Maximize', title: 'Space Optimization', description: 'Innovative, modular, and multifunctional designs maximize space efficiency while enhancing usability in every environment' },
      { icon: 'Users', title: 'User-Centric Design', description: 'Ergonomic, interactive, and adaptive solutions ensure optimal comfort, productivity, and overall user satisfaction' },
      { icon: 'Star', title: 'Premium Craftsmanship', description: 'High-quality materials and precision construction guarantee long-lasting durability, elegance, and exceptional aesthetic appeal' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our smart and innovative furniture service delivers technologically advanced, ergonomically designed, and visually appealing solutions, combining creativity, functionality, and durability to meet modern living and working requirements effectively.',
    scopeItems: [
      { icon: 'Clipboard', title: 'Requirement Analysis & Consultation', description: 'Detailed assessment identifies client needs, spatial constraints, and desired smart furniture features comprehensively for optimal planning.' },
      { icon: 'Lightbulb', title: 'Concept Development & Design', description: 'Transform creative ideas into functional, ergonomic, and interactive furniture concepts with modern aesthetics and practical features.' },
      { icon: 'Package', title: 'Material & Technology Selection', description: 'Choose durable, sustainable materials and compatible smart technologies ensuring safety, longevity, and seamless integration.' },
      { icon: 'TestTube', title: 'Prototyping, Testing & Refinement', description: 'Build and test prototypes to guarantee functionality, usability, safety, and high-performance standards before production.' },
      { icon: 'Factory', title: 'Fabrication & Integration Process', description: 'Expert manufacturing integrates smart features seamlessly into furniture while maintaining quality, durability, and precise craftsmanship.' },
      { icon: 'Truck', title: 'Delivery, Installation & Support', description: 'Professional setup with detailed guidance ensures immediate usability, operational understanding, and long-term maintenance efficiency.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Analysis & Conceptualization', description: 'Understand client needs, space, and technology integration requirements for innovative furniture solutions.' },
      { icon: 'Eye', title: 'Design & Prototyping', description: 'Develop 3D models, prototypes, and smart features such as modularity, automation, or IoT integration.' },
      { icon: 'Factory', title: 'Manufacturing & Technology Integration', description: 'Produce furniture with embedded smart systems, ensuring durability, functionality, and seamless operation.' },
      { icon: 'CheckCircle', title: 'Testing & Handover', description: 'Conduct functionality tests, quality inspections, and provide client training for optimal usage of smart furniture.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Smart & Innovative Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "IoT-Enabled Smart Desks", imageKey: 'projectImg1' },
      { id: 2, title: "Automated Storage Solutions", imageKey: 'projectImg2' },
      { id: 3, title: "Smart Home Furniture", imageKey: 'projectImg3' },
      { id: 4, title: "Multifunctional Office Systems", imageKey: 'projectImg4' },
      { id: 5, title: "Innovative Modular Furniture", imageKey: 'projectImg5' },
      { id: 6, title: "Smart Bedroom Solutions", imageKey: 'projectImg6' },
      { id: 7, title: "Interactive Living Room Furniture", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Smart Furniture Innovation?',
    description: 'Experience the future of furniture with our smart and innovative solutions. Contact our technology specialists today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The smart furniture has transformed our workspace with incredible functionality and modern appeal.", name: "Rachel Kim", role: "Tech Startup CEO", rating: 5, image: "https://randomuser.me/api/portraits/women/39.jpg" },
        { quote: "Their innovative solutions combine technology and design perfectly for modern living.", name: "Kevin Zhang", role: "Interior Designer", rating: 5, image: "https://randomuser.me/api/portraits/men/40.jpg" }
    ],
    summary: { count: '80+', label: 'Smart Solutions' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Smart & Innovative Furniture services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
