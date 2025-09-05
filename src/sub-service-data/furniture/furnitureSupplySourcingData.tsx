import { PageData } from '../../pages/SubServicePageLayout';

export const furnitureSupplySourcingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Furniture Supply</span> & Sourcing',
    tagline: 'Reliable sourcing for quality furniture solutions worldwide',
    description: 'Our furniture supply and sourcing service ensures access to premium, high-quality furniture and materials globally, delivering timely, cost-effective, and tailored solutions for residential, commercial, and institutional projects.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Globe', title: 'Global Sourcing Network', description: 'Access to premium suppliers ensures diverse, high-quality options' },
      { icon: 'DollarSign', title: 'Cost-Effective Solutions', description: 'Efficient procurement reduces expenses without compromising quality or style' },
      { icon: 'Clock', title: 'Timely Delivery', description: 'Reliable logistics guarantee prompt supply and project continuity' },
      { icon: 'Settings', title: 'Tailored Selection', description: 'Furniture is sourced to match specific design, functional, and space requirements' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our furniture supply and sourcing service provides clients with high-quality products, reliable logistics, and tailored solutions, ensuring seamless integration into any interior or exterior project environment.',
    scopeItems: [
      { icon: 'Clipboard', title: 'Requirement Analysis', description: 'Identify client needs, project specifications, and quality standards for accurate sourcing.' },
      { icon: 'Search', title: 'Supplier Identification', description: 'Vet and select reputable global and local suppliers matching project demands precisely.' },
      { icon: 'Package', title: 'Product Selection', description: 'Recommend furniture and materials aligning with design, functionality, and aesthetic requirements.' },
      { icon: 'Handshake', title: 'Procurement Management', description: 'Handle negotiations, purchasing, and documentation to ensure smooth and transparent transactions.' },
      { icon: 'Truck', title: 'Logistics Coordination', description: 'Manage shipping, customs, and delivery schedules for timely project implementation.' },
      { icon: 'Headphones', title: 'Post-Supply Support', description: 'Ensure products meet expectations, addressing any issues or additional requirements efficiently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Assessment & Specification', description: 'Identify client needs, furniture types, quantities, and quality standards for sourcing.' },
      { icon: 'Search', title: 'Supplier Research & Selection', description: 'Evaluate vendors, compare materials, pricing, and lead times to ensure reliable sourcing.' },
      { icon: 'CheckCircle', title: 'Procurement & Quality Verification', description: 'Place orders, inspect received furniture for quality, and confirm compliance with specifications.' },
      { icon: 'Truck', title: 'Delivery Coordination & Handover', description: 'Manage logistics, ensure timely delivery, and coordinate installation for seamless integration into the space.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Supply & Sourcing Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Global Furniture Procurement", imageKey: 'projectImg1' },
      { id: 2, title: "Premium Material Sourcing", imageKey: 'projectImg2' },
      { id: 3, title: "Custom Furniture Supply", imageKey: 'projectImg3' },
      { id: 4, title: "Bulk Furniture Procurement", imageKey: 'projectImg4' },
      { id: 5, title: "Specialty Furniture Sourcing", imageKey: 'projectImg5' },
      { id: 6, title: "International Supply Chain", imageKey: 'projectImg6' },
      { id: 7, title: "Quality Furniture Distribution", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Quality Furniture Supply?',
    description: 'Access premium furniture and materials through our global sourcing network. Contact our supply specialists today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their sourcing network provides access to the best furniture at competitive prices with reliable delivery.", name: "Sophie Chen", role: "Procurement Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/35.jpg" },
        { quote: "The supply service is efficient, transparent, and delivers exactly what we need on time.", name: "Alex Johnson", role: "Project Director", rating: 5, image: "https://randomuser.me/api/portraits/men/36.jpg" }
    ],
    summary: { count: '250+', label: 'Suppliers Network' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Furniture Supply & Sourcing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
