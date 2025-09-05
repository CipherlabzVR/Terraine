import { PageData } from '../../pages/SubServicePageLayout';

export const customFurnitureDesignPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Custom Furniture</span> Design',
    tagline: 'Crafting unique furniture tailored to your vision',
    description: 'Our custom furniture design service blends artistry, innovation, and precision, creating bespoke pieces that elevate interiors, enhance functionality, and reflect personal lifestyles with lasting beauty and timeless craftsmanship.',
    backgroundImage: '/furniture-hero.jpg',
    uspItems: [
      { icon: 'Palette', title: 'Tailored Creations', description: 'Personalized designs reflect your taste, lifestyle, and vision with complete accuracy' },
      { icon: 'Shield', title: 'Quality Assurance', description: 'Premium craftsmanship and durable materials ensure unmatched longevity and reliability' },
      { icon: 'Zap', title: 'Innovative Approach', description: 'Creative solutions seamlessly merge functionality, comfort, and modern aesthetics' },
      { icon: 'Users', title: 'Client Collaboration', description: 'Your input guides every stage, ensuring furniture matches your exact expectations' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our custom furniture design service transforms imagination into functional, elegant, and timeless furniture, blending modern innovation with artisanal craftsmanship to create pieces that bring unique identity to every space.',
    scopeItems: [
      { icon: 'Users', title: 'Client Consultation', description: 'Detailed discussions capture unique requirements, ensuring personalized designs reflecting lifestyle, space, and specific goals.' },
      { icon: 'Lightbulb', title: 'Concept Development', description: 'Innovative ideas are translated into creative furniture concepts, perfectly aligned with interior style and preferences.' },
      { icon: 'Package', title: 'Material Selection', description: 'Choosing sustainable, durable, and aesthetically pleasing materials ensures furniture longevity, appeal, and environmental responsibility.' },
      { icon: 'Eye', title: 'Design Visualization', description: 'Technical drawings and 3D renderings provide a clear preview before moving forward to fabrication.' },
      { icon: 'Hammer', title: 'Expert Craftsmanship', description: 'Skilled artisans combine advanced techniques with timeless artistry, delivering elegant, durable, and precisely detailed furniture.' },
      { icon: 'Truck', title: 'Delivery & Installation', description: 'Careful handling, placement, and finishing guarantee flawless furniture integration into any designed space.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Clipboard', title: 'Requirement Gathering & Conceptualization', description: 'Understand client preferences, space, and functional needs to develop personalized furniture concepts.' },
      { icon: 'Eye', title: 'Design & 3D Visualization', description: 'Create detailed sketches, 3D models, and material selections to bring design ideas to life.' },
      { icon: 'Users', title: 'Client Review & Refinement', description: 'Collaborate with clients to refine designs, ensuring aesthetics, functionality, and budget alignment.' },
      { icon: 'CheckCircle', title: 'Final Approval & Handover', description: 'Deliver finalized designs and specifications for manufacturing or production with clear execution guidelines.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Custom Furniture Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Bespoke Living Room Collection", imageKey: 'projectImg1' },
      { id: 2, title: "Custom Kitchen Island Design", imageKey: 'projectImg2' },
      { id: 3, title: "Personalized Bedroom Suite", imageKey: 'projectImg3' },
      { id: 4, title: "Unique Office Furniture Set", imageKey: 'projectImg4' },
      { id: 5, title: "Custom Dining Room Collection", imageKey: 'projectImg5' },
      { id: 6, title: "Bespoke Storage Solutions", imageKey: 'projectImg6' },
      { id: 7, title: "Custom Outdoor Furniture", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Create Your Dream Furniture?',
    description: 'Transform your vision into reality with our custom furniture design expertise. Contact our designers today for personalized solutions.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their custom furniture design perfectly captured our vision and exceeded our expectations. The craftsmanship is exceptional.", name: "Sarah Mitchell", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/23.jpg" },
        { quote: "The personalized approach and attention to detail made our custom furniture truly unique and beautiful.", name: "David Chen", role: "Interior Designer", rating: 5, image: "https://randomuser.me/api/portraits/men/24.jpg" }
    ],
    summary: { count: '200+', label: 'Custom Pieces Created' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Custom Furniture Design services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
