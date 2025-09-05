import { PageData } from '../../pages/SubServicePageLayout';

export const claddingEngineeringPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Cladding</span> Engineering',
    tagline: 'Innovative cladding solutions for striking facades',
    description: 'Our cladding engineering services deliver visually appealing, durable, and weather resistant exterior solutions enhancing aesthetics, performance, and long-lasting protection for every building project',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldCheck', title: 'Durable Facades', description: 'High-quality cladding ensuring long-lasting protection consistently' },
      { icon: 'Eye', title: 'Visual Appeal', description: 'Modern designs enhancing building aesthetics effectively' },
      { icon: 'CloudSun', title: 'Weather Resistance', description: 'Materials engineered to withstand harsh conditions reliably' },
      { icon: 'UserCog', title: 'Expert Installation', description: 'Skilled teams delivering precise and flawless cladding work' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our cladding engineering services enhance building aesthetics and performance by integrating durable innovative and energy efficient façade solutions',
    scopeItems: [
      { icon: 'Pen', title: 'Design and Detailing', description: 'Develop precise cladding designs with architectural integration ensuring visual appeal functionality and long-term structural compatibility' },
      { icon: 'TestTube2', title: 'Material Selection and Testing', description: 'Choose durable sustainable cladding materials tested for strength thermal efficiency weather resistance and fire safety compliance' },
      { icon: 'Factory', title: 'Fabrication and Prefabrication', description: 'Manufacture cladding panels with advanced technology ensuring accuracy high-quality finishes and efficient on-site installation' },
      { icon: 'Grip', title: 'Installation and Fixing Systems', description: 'Implement secure cladding systems ensuring correct alignment structural safety weatherproofing and long-lasting building protection' },
      { icon: 'Thermometer', title: 'Thermal and Acoustic Performance', description: 'Enhance energy efficiency and indoor comfort by optimizing insulation soundproofing and sustainable cladding system design' },
      { icon: 'ScanSearch', title: 'Maintenance and Inspection', description: 'Provide scheduled inspections repairs and upgrades ensuring façade performance safety and visual quality throughout lifespan' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Palette', title: 'Design & Material Selection', description: 'Choose appropriate cladding materials considering aesthetics, durability, weather resistance, and structural compatibility' },
      { icon: 'Puzzle', title: 'Fabrication & Preparation', description: 'Manufacture or cut cladding panels accurately, ensuring precision and quality for seamless installation' },
      { icon: 'HardHat', title: 'Installation & Alignment', description: 'Install cladding systems on building exteriors, maintaining alignment, fastening integrity, and structural support' },
      { icon: 'CheckCircle', title: 'Finishing & Quality Check', description: 'Inspect installed cladding, apply protective coatings if needed, and ensure visual and functional perfection' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Cladding Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Curtain Wall Facade", imageKey: 'projectImg1' },
      { id: 2, title: "Aluminum Composite Panels", imageKey: 'projectImg2' },
      { id: 3, "title": "Stone Veneer Cladding", "imageKey": "projectImg3" },
      { id: 4, title: "Terracotta Rainscreen System", imageKey: 'projectImg4' },
      { id: 5, title: "Insulated Metal Panels", imageKey: 'projectImg5' },
      { id: 6, title: "High-Pressure Laminate Facade", imageKey: 'projectImg6' },
      { id: 7, title: "Custom Perforated Screens", imageKey: 'projectImg7' },
    ]
  },
cta: {
    title: 'Ready to Enhance Your Building\'s Exterior?',
    description: 'Transform your facade with our durable, beautiful, and high-performance cladding solutions Contact us for a consultation'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The new cladding has completely transformed the look of our building The installation was precise, and the material quality is excellent", name: "James McAllister", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/10.jpg" },
        { quote: "Their expertise in weather-resistant facades gave us the durable and low-maintenance solution we needed for our coastal property The result is fantastic", name: "Emma Wilson", role: "Project Coordinator", rating: 5, image: "https://randomuser.me/api/portraits/women/6.jpg" }
    ],
    summary: { count: '1M+ sqft', label: 'of Facades Installed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Cladding Engineering services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};