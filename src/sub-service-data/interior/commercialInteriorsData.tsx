// Suggested Filename: commercialInteriorsData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const commercialInteriorsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Commercial</span> Interiors',
    tagline: 'Innovative interiors boosting productivity and brand image.',
    description: 'Our commercial interiors deliver functional, stylish, and engaging spaces, enhancing employee productivity, customer experience, and brand identity through thoughtful design and efficient space utilization.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Award', title: 'Brand Enhancement', description: 'Interiors reflecting and boosting business identity consistently.' },
      { icon: 'LayoutGrid', title: 'Functional Spaces', description: 'Optimized layouts improving workflow and operations effectively.' },
      { icon: 'Sparkles', title: 'Modern Designs', description: 'Contemporary aesthetics creating appealing professional environments reliably.' },
      { icon: 'Clock', title: 'Efficient Execution', description: 'Timely project delivery with minimal disruption.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our commercial interior services design functional, efficient, and appealing workspaces for offices, retail stores, and showrooms.',
    scopeItems: [
      { icon: 'LayoutGrid', title: 'Functional Space Planning', description: 'Optimize layouts for workstations, circulation, and collaboration zones ensuring efficiency and comfort consistently.' },
      { icon: 'Award', title: 'Branding Integration', description: 'Incorporate client branding into interior elements enhancing corporate identity and visual appeal effectively.' },
      { icon: 'Palette', title: 'Material and Finish Selection', description: 'Recommend durable finishes and materials suitable for high traffic commercial environments reliably.' },
      { icon: 'Lamp', title: 'Lighting and Electrical Systems', description: 'Design lighting and electrical layouts supporting operations and aesthetic requirements accurately.' },
      { icon: 'Sofa', title: 'Furniture and Fixture Coordination', description: 'Select commercial furniture and fixtures ensuring functionality, ergonomics, and cohesive design consistently.' },
      { icon: 'HardHat', title: 'Installation Supervision', description: 'Oversee execution, quality control, and timely handover of interior spaces ensuring client satisfaction effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Analysis & Space Planning', description: 'Understand business needs, branding, and functionality to develop tailored commercial interior layouts.' },
      { icon: 'Eye', title: 'Design & Visualization', description: 'Create detailed floor plans, 3D renderings, and material selections to optimize aesthetics and operational efficiency.' },
      { icon: 'HardHat', title: 'Execution & Supervision', description: 'Oversee construction, furniture installation, and fit-outs, ensuring quality, safety, and adherence to timelines.' },
      { icon: 'CheckCircle', title: 'Finishing & Handover', description: 'Complete Decor, signage, and quality checks, delivering a fully functional, appealing, and client-ready commercial interior.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Commercial Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Modern Corporate Office", imageKey: 'projectImg1' },
      { id: 2, title: "Boutique Retail Store", imageKey: 'projectImg2' },
      { id: 3, "title": "Luxury Car Showroom", "imageKey": "projectImg3" },
      { id: 4, title: "Co-working Space Design", imageKey: 'projectImg4' },
      { id: 5, title: "Tech Startup Hub", imageKey: 'projectImg5' },
      { id: 6, title: "Flagship Store Interior", imageKey: 'projectImg6' },
      { id: 7, title: "Executive Office Suite", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Elevate Your Business Space?',
    description: 'Create an environment that enhances your brand and boosts productivity. Contact us for a commercial design proposal.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The new office layout has transformed our workflow. It's more collaborative, modern, and perfectly represents our brand. Our team loves the new space!", name: "Shehan Cooray", role: "CEO, Tech Solutions", rating: 5, image: "https://randomuser.me/api/portraits/men/91.jpg" },
        { quote: "Our retail store's redesign has been a huge success. The customer flow is much better, and the aesthetics have received countless compliments. We've seen a noticeable increase in foot traffic.", name: "Fathima Rizwan", role: "Retail Store Owner", rating: 5, image: "https://randomuser.me/api/portraits/women/92.jpg" }
    ],
    summary: { count: '150+', label: 'Commercial Spaces Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Commercial Interior services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};