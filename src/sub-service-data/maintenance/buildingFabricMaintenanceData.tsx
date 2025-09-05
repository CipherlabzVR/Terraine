import { PageData } from '../../pages/SubServicePageLayout';

export const buildingFabricMaintenanceData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Building Fabric & Structural</span> Maintenance',
    tagline: 'Preserving structural integrity with expert maintenance solutions.',
    description: 'Our building fabric and structural maintenance services ensure durability, safety, and long-lasting performance through timely inspections, repairs, and preventive care for every type of structure.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Building', title: 'Durable Structures', description: 'Maintains building integrity and performance consistently.' },
      { icon: 'ShieldCheck', title: 'Preventive Care', description: 'Detects and fixes issues early effectively.' },
      { icon: 'Sparkles', title: 'Aesthetic Preservation', description: 'Keeps finishes and facades visually appealing reliably.' },
      { icon: 'CircleDollarSign', title: 'Cost Efficient', description: 'Reduces major repair expenses consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our building fabric and structural maintenance services protect, preserve, and enhance the integrity and longevity of structures effectively.',
    scopeItems: [
      { icon: 'ScanSearch', title: 'Structural Inspections', description: 'Conduct regular inspections of walls, beams, and columns to detect deterioration or damage accurately.' },
      { icon: 'Wrench', title: 'Preventive Repairs', description: 'Perform minor repairs and reinforcements to prevent further structural issues and extend building lifespan reliably.' },
      { icon: 'PanelTop', title: 'Facade Maintenance', description: 'Clean, repair, and maintain exterior surfaces ensuring durability, aesthetics, and weather protection consistently.' },
      { icon: 'Droplets', title: 'Waterproofing and Sealing', description: 'Apply treatments to prevent water ingress and structural degradation maintaining building integrity effectively.' },
      { icon: 'Weight', title: 'Load and Stress Monitoring', description: 'Assess structural elements under loads to identify potential risks and maintain safety accurately.' },
      { icon: 'FileText', title: 'Documentation and Reporting', description: 'Maintain detailed records of inspections, repairs, and maintenance activities for future reference and compliance efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Inspection & Condition Assessment', description: 'Examine walls, roofs, floors, and structural components to identify damage, wear, or potential risks.' },
      { icon: 'CalendarDays', title: 'Preventive Maintenance Planning', description: 'Develop schedules for routine inspections, repairs, and protective treatments to preserve structural integrity.' },
      { icon: 'Construction', title: 'Repair & Restoration', description: 'Execute corrective works, reinforce structures, and restore damaged components to ensure safety and longevity.' },
      { icon: 'FilePieChart', title: 'Monitoring & Reporting', description: 'Track building condition, document maintenance activities, and provide recommendations for long-term structural health.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Maintenance Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Concrete Crack Repair", imageKey: 'projectImg1' },
      { id: 2, title: "Facade Cleaning & Sealing", imageKey: 'projectImg2' },
      { id: 3, "title": "Roof Waterproofing", "imageKey": "projectImg3" },
      { id: 4, title: "Steel Beam Corrosion Treatment", imageKey: 'projectImg4' },
      { id: 5, title: "Foundation Integrity Check", imageKey: 'projectImg5' },
      { id: 6, title: "Expansion Joint Maintenance", imageKey: 'projectImg6' },
      { id: 7, title: "Masonry Repointing", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Preserve Your Building?',
    description: 'Ensure the long-term health and safety of your structure with our expert maintenance services. Contact us for an inspection.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their team's proactive approach to structural maintenance has saved us from costly repairs down the line. The building is in excellent condition thanks to their regular inspections.", name: "Hans Müller", role: "Property Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "The facade of our building looks brand new after their cleaning and repair work. A highly professional and reliable team.", name: "Claudia Schneider", role: "Building Owner", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '100+', label: 'Structures Maintained' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Building Fabric & Structural Maintenance services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};