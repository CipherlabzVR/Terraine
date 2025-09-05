import { PageData } from '../../pages/SubServicePageLayout';

export const restorationMaintenancePageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Restoration & Maintenance</span> Services',
    tagline: 'Reviving furniture to restore beauty and functionality',
    description: 'Our restoration and maintenance services bring worn, damaged, or outdated furniture back to life, combining expert craftsmanship, modern techniques, and high-quality materials to preserve durability, aesthetics, and usability.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Search', title: 'Expert Restoration', description: 'Skilled artisans carefully restore furniture to its original or improved condition' },
      { icon: 'Shield', title: 'Durable Solutions', description: 'Repairs ensure long-lasting performance and continued structural integrity' },
      { icon: 'Settings', title: 'Customized Approach', description: 'Tailored restoration techniques match specific furniture types, materials, and client requirements' },
      { icon: 'Star', title: 'Aesthetic Enhancement', description: 'Finishes and details restore or enhance visual appeal seamlessly' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our restoration and maintenance service revitalizes furniture, extending lifespan, improving functionality, and enhancing visual appeal through expert craftsmanship, careful material selection, and precise workmanship.',
    scopeItems: [
      { icon: 'Search', title: 'Condition Assessment', description: 'Detailed inspection identifies damage, wear, and potential restoration requirements for accurate planning.' },
      { icon: 'Package', title: 'Material Analysis', description: 'Select appropriate materials, finishes, and repair methods suitable for original furniture type.' },
      { icon: 'Wrench', title: 'Restoration Process', description: 'Skilled techniques repair, strengthen, and restore furniture structural integrity and aesthetic quality.' },
      { icon: 'Brush', title: 'Refinishing & Detailing', description: 'Sanding, polishing, and finishing ensure flawless appearance and enhanced visual appeal.' },
      { icon: 'CheckCircle', title: 'Quality Assurance', description: 'Thorough checks confirm durability, stability, and accurate restoration results.' },
      { icon: 'BookOpen', title: 'Post-Maintenance Support', description: 'Guidance provided on care and maintenance to prolong furniture longevity and beauty.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Search', title: 'Assessment & Inspection', description: 'Examine existing furniture for wear, damage, or deterioration to determine restoration needs.' },
      { icon: 'Clipboard', title: 'Planning & Material Selection', description: 'Develop restoration plan, select appropriate materials, and decide on repair techniques for quality results.' },
      { icon: 'Wrench', title: 'Repair & Refurbishment', description: 'Execute restoration, refinishing, and maintenance work to restore furniture functionality and aesthetics.' },
      { icon: 'CheckCircle', title: 'Final Inspection & Handover', description: 'Conduct quality checks, ensure client satisfaction, and provide guidance for ongoing maintenance.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Restoration & Maintenance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Antique Furniture Restoration", imageKey: 'projectImg1' },
      { id: 2, title: "Vintage Wood Furniture Repair", imageKey: 'projectImg2' },
      { id: 3, title: "Upholstery Restoration", imageKey: 'projectImg3' },
      { id: 4, title: "Metal Furniture Refinishing", imageKey: 'projectImg4' },
      { id: 5, title: "Furniture Structural Repair", imageKey: 'projectImg5' },
      { id: 6, title: "Finish Restoration", imageKey: 'projectImg6' },
      { id: 7, title: "Preventive Maintenance", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Restore Your Furniture?',
    description: 'Give new life to your furniture with our expert restoration and maintenance services. Contact our restoration specialists today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "They restored our family heirloom to its original beauty. The craftsmanship is exceptional.", name: "Patricia Martinez", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/37.jpg" },
        { quote: "The restoration work exceeded our expectations. Our furniture looks better than ever.", name: "Daniel Brown", role: "Antique Collector", rating: 5, image: "https://randomuser.me/api/portraits/men/38.jpg" }
    ],
    summary: { count: '180+', label: 'Pieces Restored' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Restoration & Maintenance Services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
