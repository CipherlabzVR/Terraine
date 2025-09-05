// Suggested Filename: concreteConsultancyData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const concreteConsultancyPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Concrete & Cementitious</span> Material Consultancy',
    tagline: 'Expert guidance on concrete and cement materials.',
    description: 'Our concrete and cementitious material consultancy ensures optimal mix design, quality, and durability, delivering strong, reliable, and long-lasting structures for all types of construction projects.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Layers', title: 'Durable Mixes', description: 'Ensures long-lasting concrete performance consistently.' },
      { icon: 'Settings2', title: 'Optimized Solutions', description: 'Tailored mix designs for project needs effectively.' },
      { icon: 'ShieldCheck', title: 'Quality Assurance', description: 'Reliable material testing and evaluation reliably.' },
      { icon: 'CircleDollarSign', title: 'Cost Efficiency', description: 'Maximizes performance while minimizing material waste consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our concrete consultancy ensures optimal mix design, quality control, and performance for durable and safe structures efficiently.',
    scopeItems: [
      { icon: 'Beaker', title: 'Mix Design Optimization', description: 'Develop concrete mixes tailored to structural requirements, strength, and durability accurately.' },
      { icon: 'FlaskConical', title: 'Material Testing', description: 'Conduct tests on cement, aggregates, and admixtures to ensure compliance and quality reliably.' },
      { icon: 'SlidersHorizontal', title: 'Workability Assessment', description: 'Evaluate concrete flow, setting time, and compaction for construction efficiency effectively.' },
      { icon: 'BarChart', title: 'Strength and Durability Analysis', description: 'Assess compressive, tensile, and flexural strengths to ensure long term structural integrity consistently.' },
      { icon: 'Users', title: 'Supplier Consultation', description: 'Advise on selecting reliable suppliers for quality cementitious materials effectively.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed records of mix designs, test results, and recommendations for project reference accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Project Assessment & Requirements', description: 'Analyze structural needs, durability, and performance criteria for concrete and cementitious materials.' },
      { icon: 'Beaker', title: 'Material Selection & Mix Design', description: 'Recommend suitable concrete types, admixtures, and mix proportions tailored to project specifications.' },
      { icon: 'FlaskConical', title: 'Testing & Quality Assurance', description: 'Conduct slump tests, strength analysis, and quality checks to ensure compliance and reliability.' },
      { icon: 'CheckCircle', title: 'Implementation Support & Reporting', description: 'Provide guidance on batching, placement, and curing, along with detailed documentation for project reference.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Concrete Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Rise Building Concrete Mix", imageKey: 'projectImg1' },
      { id: 2, title: "Bridge & Infrastructure Concrete", imageKey: 'projectImg2' },
      { id: 3, "title": "Precast Concrete Panels", "imageKey": "projectImg3" },
      { id: 4, title: "Specialty Grout Mix Design", imageKey: 'projectImg4' },
      { id: 5, title: "Mass Concrete Pour Analysis", imageKey: 'projectImg5' },
      { id: 6, title: "Self-Compacting Concrete", imageKey: 'projectImg6' },
      { id: 7, title: "Shotcrete Application Consultancy", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build a Strong Foundation?',
    description: 'Ensure the strength and durability of your project with expert concrete consultancy. Contact us today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their optimized mix design not only met but exceeded our strength requirements, all while keeping costs in check. Their expertise is evident in every recommendation.", name: "Kusum Perera", role: "Structural Engineer", rating: 5, image: "https://randomuser.me/api/portraits/women/69.jpg" },
        { quote: "The on-site support during our large concrete pour was invaluable. Their guidance on workability and curing prevented potential issues and ensured a flawless result.", name: "Tharindu Silva", role: "Site Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/70.jpg" }
    ],
    summary: { count: '400+', label: 'Mix Designs Optimized' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Concrete & Cementitious Material Consultancy services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};