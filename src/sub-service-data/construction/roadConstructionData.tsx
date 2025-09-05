import { PageData } from '../../pages/SubServicePageLayout';

export const roadConstructionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Road</span> Construction',
    tagline: 'Building safe durable and efficient roadways',
    description: 'Our road construction services provide high quality, long lasting, and safe road networks, ensuring smooth traffic flow, durability, and optimized performance for every project',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Award', title: 'Smooth Pavements', description: 'Durable roads designed for long-lasting performance consistently' },
      { icon: 'ShieldCheck', title: 'Safety Focused', description: 'Ensuring safe and compliant road construction effectively' },
      { icon: 'Zap', title: 'Efficient Execution', description: 'Timely completion with minimal traffic disruption reliably' },
      { icon: 'Layers', title: 'Quality Materials', description: 'Using high grade materials for superior durability' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our road construction services ensure safe durable and efficient networks designed to improve connectivity and long-term performance',
    scopeItems: [
      { icon: 'Map', title: 'Site Survey and Preparation', description: 'Conduct detailed land surveys clearing and grading sites to establish stable foundations for reliable road construction' },
      { icon: 'Clipboard', title: 'Earthwork and Subgrade Development', description: 'Excavate fill and compact soil layers ensuring strong subgrade support for sustainable long-lasting road surfaces' },
      { icon: 'Tractor', title: 'Pavement Layer Construction', description: 'Install granular bases asphalt or concrete layers engineered for durability heavy traffic loads and long-term use' },
      { icon: 'Waves', title: 'Drainage System Installation', description: 'Integrate efficient roadside drainage networks preventing water accumulation erosion damage and enhancing road safety' },
      { icon: 'Paintbrush', title: 'Road Marking and Signage', description: 'Apply clear lane markings and install road signage improving traffic management safety and overall travel efficiency' },
      { icon: 'ClipboardCheck', title: 'Quality Control and Testing', description: 'Perform material testing strength checks and construction monitoring ensuring roads meet safety standards and specifications' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Survey & Planning', description: 'Conduct detailed site surveys, traffic studies, and design road alignment, layers, and drainage systems efficiently' },
      { icon: 'Hammer', title: 'Earthwork & Subgrade Preparation', description: 'Excavate, grade, and compact the base layers to ensure a stable foundation for road surfaces' },
      { icon: 'HardHat', title: 'Pavement & Structural Work', description: 'Lay asphalt, concrete, or composite pavements, including curbs, sidewalks, and structural supports for long-lasting roads' },
      { icon: 'CheckCircle', title: 'Finishing & Quality Assurance', description: 'Complete markings, signage, and inspection processes to ensure safe, durable, and fully operational roads' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Road Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "National Highway Development", imageKey: 'projectImg1' },
      { id: 2, title: "Urban Artery Road Resurfacing", imageKey: 'projectImg2' },
      { id: 3, "title": "Rural Access Road Construction", "imageKey": "projectImg3" },
      { id: 4, title: "Asphalt Pavement Installation", imageKey: 'projectImg4' },
      { id: 5, title: "Bridge Approach Roads", imageKey: 'projectImg5' },
      { id: 6, title: "Stormwater Drainage System", imageKey: 'projectImg6' },
      { id: 7, title: "Traffic Signage & Marking", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Pave the Way?',
    description: 'From major highways to local roads, we build durable and safe networks that connect communities Contact us for a project estimate'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The new road has drastically improved travel times in our area The construction was efficient, with minimal disruption, and the quality of the pavement is excellent", name: "James Bennett", role: "Public Works Official", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their team's focus on safety and quality was evident throughout the project The road markings and drainage systems were executed perfectly", name: "Ahmad Faizal", role: "Municipal Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '500+ km', label: 'of Roads Paved' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Road Construction services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};