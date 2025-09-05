import { PageData } from '../../pages/SubServicePageLayout';

export const materialConsultancyPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Material</span> Consultancy',
    tagline: 'Selecting quality materials for efficient project success.',
    description: 'Our material consultancy ensures the right choice of durable, cost effective, and high-quality materials, optimizing project performance, longevity, and overall construction value for every client.',
    backgroundImage: '/hero-consultancy-material.jpg', // Updated hero background image
    uspItems: [
      { icon: 'Award', title: 'Quality Assurance', description: 'Ensuring durable and reliable construction materials always.' },
      { icon: 'CircleDollarSign', title: 'Cost Optimization', description: 'Selecting materials providing best value efficiently.' },
      { icon: 'FlaskConical', title: 'Innovative Materials', description: 'Access to modern advanced construction solutions.' },
      { icon: 'Leaf', title: 'Sustainability Focus', description: 'Eco-friendly materials supporting long term projects.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our material selection and specification services ensure optimal choices for quality durability and project performance.',
    scopeItems: [
      { icon: 'Clipboard', title: 'Material Evaluation', description: 'Assess available materials to determine suitability for project requirements performance and longevity accurately.' },
      { icon: 'FileText', title: 'Specification Preparation', description: 'Develop detailed material specifications including grades standards and application guidelines effectively.' },
      { icon: 'Users', title: 'Supplier Assessment', description: 'Evaluate suppliers to ensure reliability quality and compliance with project standards consistently.' },
      { icon: 'Puzzle', title: 'Compatibility Analysis', description: 'Ensure materials work efficiently with other construction elements and project design reliably.' },
      { icon: 'Recycle', title: 'Sustainability Consideration', description: 'Recommend eco-friendly and sustainable materials for environmentally responsible construction effectively.' },
      { icon: 'FileCheck2', title: 'Documentation and Approval', description: 'Prepare and submit material specifications for client approval regulatory compliance and record keeping consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Material Assessment', description: 'Evaluate project requirements, durability, and sustainability to select the most suitable materials for optimal performance.' },
      { icon: 'TestTube2', title: 'Testing & Verification', description: 'Conduct laboratory and on-site testing to ensure materials meet quality, safety, and compliance standards.' },
      { icon: 'Briefcase', title: 'Procurement Support', description: 'Identify reliable suppliers, negotiate pricing, and streamline procurement for cost-effective and timely material delivery.' },
      { icon: 'HardHat', title: 'Implementation Guidance', description: 'Provide expert recommendations during construction to ensure proper usage, installation, and long-term material performance.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Material Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "High-Performance Concrete Mix", imageKey: 'projectImg1' },
      { id: 2, title: "Sustainable Timber Sourcing", imageKey: 'projectImg2' },
      { id: 3, "title": "Advanced Composite Panels", "imageKey": "projectImg3" },
      { id: 4, title: "Corrosion-Resistant Steel Supply", imageKey: 'projectImg4' },
      { id: 5, title: "Eco-Friendly Insulation Selection", imageKey: 'projectImg5' },
      { id: 6, title: "Supplier Vetting for a Major Project", imageKey: 'projectImg6' },
      { id: 7, title: "Quality Control and Testing", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build with the Right Materials?',
    description: 'Ensure your project\'s success with expert material guidance. Contact our consultants today for a comprehensive evaluation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their material consultancy was invaluable. They sourced high-quality, cost-effective materials that perfectly matched our project's sustainability goals.", name: "David Chen", role: "Developer", rating: 5, image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { quote: "The rigorous testing and verification process gave us complete confidence in our material choices. A truly professional and essential service.", name: "Fahad Al-Qahtani", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/4.jpg" }
    ],
    summary: { count: '100+', label: 'Materials Certified' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Material Consultancy services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};