import { PageData } from '../../pages/SubServicePageLayout';

export const consultancyFurniturePlanningPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Consultancy & Furniture</span> Planning',
    tagline: 'Expert guidance for furniture solutions that transform every space beautifully',
    description: 'Our consultancy and furniture planning service provides comprehensive expert advice, strategic planning, and innovative solutions for residential, commercial, and institutional projects, ensuring functional, aesthetic, and cost-effective furniture arrangements that perfectly suit client needs and enhance space usability.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Users', title: 'Professional Guidance', description: 'Expert consultants deliver tailored advice for optimal furniture planning and space utilization' },
      { icon: 'Lightbulb', title: 'Strategic Solutions', description: 'Innovative strategies ensure functional, aesthetic, and cost-effective furniture arrangements throughout projects' },
      { icon: 'Heart', title: 'Client-Focused Approach', description: 'Every plan is customized to match unique requirements, lifestyle, and organizational objectives' },
      { icon: 'Eye', title: 'Holistic Planning', description: 'Comprehensive services consider design, workflow, ergonomics, and future adaptability seamlessly' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our consultancy and furniture planning service transforms spaces through strategic analysis, professional guidance, and creative solutions, ensuring furniture arrangements are functional, visually appealing, and aligned with project objectives and client preferences.',
    scopeItems: [
      { icon: 'Clipboard', title: 'Initial Consultation & Assessment', description: 'Detailed meetings evaluate client needs, space dimensions, usage requirements, and design objectives comprehensively.' },
      { icon: 'Layout', title: 'Conceptual Planning & Layouts', description: 'Develop innovative furniture layouts and plans that optimize flow, ergonomics, and aesthetic appeal effectively.' },
      { icon: 'Package', title: 'Material & Product Recommendations', description: 'Suggest high-quality materials, finishes, and furniture products tailored to function, style, and budget constraints.' },
      { icon: 'Maximize', title: 'Space Optimization Strategies', description: 'Provide solutions for maximizing available space efficiently while maintaining comfort, usability, and visual balance.' },
      { icon: 'Map', title: 'Implementation Roadmap & Guidance', description: 'Detailed step-by-step plan ensures smooth execution, procurement, and integration of furniture solutions professionally.' },
      { icon: 'Headphones', title: 'Post-Project Support & Review', description: 'Offer follow-up advice, adjustments, and maintenance guidance to ensure long-term satisfaction and performance.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Assessment & Space Analysis', description: 'Understand client needs, space layout, and functionality requirements to develop a strategic furniture plan.' },
      { icon: 'Palette', title: 'Concept Development & Material Selection', description: 'Create design concepts, select suitable materials, and propose furniture solutions tailored to client goals.' },
      { icon: 'Settings', title: 'Planning & Coordination', description: 'Develop procurement strategies, coordinate with vendors, and plan installation for smooth project execution.' },
      { icon: 'CheckCircle', title: 'Final Review & Recommendations', description: 'Provide detailed reports, layout suggestions, and expert guidance to optimize furniture usage and space efficiency.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Consultancy & Planning Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Residential Space Planning", imageKey: 'projectImg1' },
      { id: 2, title: "Office Layout Optimization", imageKey: 'projectImg2' },
      { id: 3, title: "Retail Space Planning", imageKey: 'projectImg3' },
      { id: 4, title: "Hospitality Furniture Planning", imageKey: 'projectImg4' },
      { id: 5, title: "Educational Institution Layout", imageKey: 'projectImg5' },
      { id: 6, title: "Healthcare Facility Planning", imageKey: 'projectImg6' },
      { id: 7, title: "Mixed-Use Space Planning", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Expert Furniture Planning?',
    description: 'Transform your space with strategic furniture planning and expert consultancy. Contact our planning specialists today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their consultancy transformed our space planning approach and delivered exceptional results.", name: "Laura Wilson", role: "Property Developer", rating: 5, image: "https://randomuser.me/api/portraits/women/41.jpg" },
        { quote: "The furniture planning expertise helped us maximize our space efficiently and beautifully.", name: "Marcus Taylor", role: "Business Owner", rating: 5, image: "https://randomuser.me/api/portraits/men/42.jpg" }
    ],
    summary: { count: '200+', label: 'Plans Created' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Consultancy & Furniture Planning services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
