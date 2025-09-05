import { PageData } from '../../pages/SubServicePageLayout';

export const residentialConstructionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Residential</span> Construction',
    tagline: 'Building dream homes with quality and precision',
    description: 'Our residential construction services deliver beautifully crafted, durable, and functional homes, ensuring exceptional quality, timely completion, and personalized solutions tailored to every client’s lifestyle and vision',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Award', title: 'Quality Craftsmanship', description: 'Delivering durable and aesthetically appealing homes consistently' },
      { icon: 'Clock', title: 'Timely Completion', description: 'Projects finished on schedule without compromise effectively' },
      { icon: 'UserCog', title: 'Personalized Designs', description: 'Tailored solutions matching client lifestyle and preferences always' },
      { icon: 'ShieldCheck', title: 'Reliable Execution', description: 'Skilled teams ensuring flawless construction processes efficiently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our residential construction services deliver customized homes with functional designs quality materials and timely completion',
    scopeItems: [
      { icon: 'FileText', title: 'Site Preparation', description: 'Clear site boundaries conduct leveling and prepare foundations ensuring proper ground conditions for construction activities' },
      { icon: 'Building', title: 'Structural Framework', description: 'Construct foundations columns beams and slabs providing stability and safety for residential buildings effectively' },
      { icon: 'Box', title: 'Wall Construction', description: 'Build exterior and interior walls using bricks blocks or concrete ensuring durability and energy efficiency' },
      { icon: 'Home', title: 'Roofing Installation', description: 'Install pitched or flat roofs with proper insulation waterproofing and drainage for long-lasting performance' },
      { icon: 'PaintRoller', title: 'Interior Works', description: 'Complete plastering flooring painting and finishes to achieve functional and aesthetically pleasing residential interiors' },
      { icon: 'Plug', title: 'Utility Integration', description: 'Coordinate plumbing electrical and HVAC systems to provide comfort and efficiency within the residential property' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Project Planning & Design', description: 'Collaborate with clients to develop tailored home designs, timelines, and budget estimates for efficient execution' },
      { icon: 'FileText', title: 'Site Preparation & Foundation', description: 'Prepare the construction site, lay foundations, and ensure structural stability for safe residential development' },
      { icon: 'HardHat', title: 'Construction & Supervision', description: 'Build the structure, monitor progress, and maintain quality standards throughout walls, roofing, and finishing stages' },
      { icon: 'Key', title: 'Finishing & Handover', description: 'Complete interior, exterior, and landscaping works, ensuring a fully functional, aesthetic, and ready-to-occupy home' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Residential Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Modern Family Villa", imageKey: 'projectImg1' },
      { id: 2, title: "Custom Urban Townhouse", imageKey: 'projectImg2' },
      { id: 3, "title": "Luxury Countryside Estate", "imageKey": "projectImg3" },
      { id: 4, title: "Sustainable Eco-Home", imageKey: 'projectImg4' },
      { id: 5, title: "Beachfront Property", imageKey: 'projectImg5' },
      { id: 6, title: "Multi-Unit Apartment Building", imageKey: 'projectImg6' },
      { id: 7, title: "Classic Suburban Home", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build Your Dream Home?',
    description: 'From concept to completion, our team is ready to bring your vision to life with quality, precision, and care'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "They built our dream home exactly as we envisioned it The quality of craftsmanship is outstanding, and they completed the project right on schedule", name: "Aisha Al Mazrouei", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { quote: "The entire construction process was managed flawlessly Their team's reliability and attention to detail made a complex project feel easy", name: "David Ong", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/men/7.jpg" }
    ],
    summary: { count: '100+', label: 'Homes Built' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Residential Construction services',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};