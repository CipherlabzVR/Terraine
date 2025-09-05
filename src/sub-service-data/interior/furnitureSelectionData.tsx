// Suggested Filename: furnitureSelectionData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const furnitureSelectionPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Furniture</span> Selection & Procurement',
    tagline: 'Curating the perfect pieces for your space.',
    description: 'Our furniture selection services provide curated options that enhance comfort, aesthetics, and functionality in interior spaces.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Sofa', title: 'Curated Choices', description: 'Expertly selected furniture that perfectly matches your style and needs.' },
      { icon: 'LayoutGrid', title: 'Functional Layouts', description: 'Strategic furniture placement to optimize space and flow effectively.' },
      { icon: 'Package', title: 'Quality Sourcing', description: 'Access to a wide network of trusted suppliers for high-quality pieces.' },
      { icon: 'Workflow', title: 'Seamless Process', description: 'A hassle-free experience from selection to final installation reliably.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our process ensures every piece of furniture is perfectly suited to your space, from selection to final placement.',
    scopeItems: [
      { icon: 'Users', title: 'Client Consultation', description: 'Discuss client needs, style preferences, and functional requirements to recommend suitable furniture pieces accurately.' },
      { icon: 'Search', title: 'Product Research', description: 'Explore available furniture options from reliable vendors matching quality, design, and budget requirements effectively.' },
      { icon: 'LayoutGrid', title: 'Layout Planning', description: 'Position selected furniture within spaces optimizing circulation, aesthetics, and usability consistently.' },
      { icon: 'Palette', title: 'Material and Finish Review', description: 'Evaluate materials, textures, and finishes to ensure durability, visual appeal, and design alignment reliably.' },
      { icon: 'ShoppingCart', title: 'Procurement Management', description: 'Source and coordinate delivery of chosen furniture ensuring timely arrival and installation efficiently.' },
      { icon: 'Wrench', title: 'Installation and Setup', description: 'Arrange and install furniture pieces accurately to create functional and visually pleasing interior arrangements effectively.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Needs Assessment', description: 'Understand client lifestyle, space requirements, and design preferences to recommend suitable furniture solutions.' },
      { icon: 'Search', title: 'Research & Sourcing', description: 'Explore furniture options, materials, and suppliers to find high-quality, durable, and aesthetically fitting pieces.' },
      { icon: 'Eye', title: 'Presentation & Approval', description: 'Provide mock-ups, samples, and layout proposals to help clients visualize furniture placement and design harmony.' },
      { icon: 'CheckCircle', title: 'Procurement & Installation', description: 'Coordinate ordering, delivery, and professional installation of furniture, ensuring proper fit and finish in the space.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Furniture Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Living Room Furniture Curation", imageKey: 'projectImg1' },
      { id: 2, title: "Corporate Office Furnishing", imageKey: 'projectImg2' },
      { id: 3, "title": "Dining Area Selections", "imageKey": "projectImg3" },
      { id: 4, title: "Boutique Hotel Furniture", imageKey: 'projectImg4' },
      { id: 5, title: "Outdoor Patio Furnishing", imageKey: 'projectImg5' },
      { id: 6, title: "Bedroom Suite Selection", imageKey: 'projectImg6' },
      { id: 7, title: "Custom Furniture Sourcing", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Furnish Your Space?',
    description: 'Find the perfect pieces that combine style and comfort. Contact us for a furniture selection consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "They saved us so much time and found unique pieces we never would have discovered on our own. Our living room feels complete and perfectly styled now.", name: "Ayesha Khan", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/71.jpg" },
        { quote: "The furniture layout plan for our new office was brilliant. They made the space feel open and functional while accommodating all our staff comfortably. The process was seamless.", name: "Ravi Fernando", role: "Startup Founder", rating: 5, image: "https://randomuser.me/api/portraits/men/81.jpg" }
    ],
    summary: { count: '180+', label: 'Spaces Furnished' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Furniture Selection & Procurement services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};