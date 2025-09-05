// Suggested Filename: stylingDecorData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const stylingDecorPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Styling</span> & Decor',
    tagline: 'Elevating interiors with unique style and Decor.',
    description: 'Our styling and Decor services add personality, elegance, and charm to interiors, creating visually appealing, cohesive, and memorable spaces that reflect client taste and lifestyle.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Sparkles', title: 'Creative Touch', description: 'Unique styling enhancing interior appeal consistently.' },
      { icon: 'Palette', title: 'Harmonious Designs', description: 'Decor complementing overall interior theme effectively.' },
      { icon: 'Eye', title: 'Attention to Detail', description: 'Every element meticulously curated reliably.' },
      { icon: 'User', title: 'Client Focused', description: 'Tailored Decor reflecting personal preferences perfectly.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our styling and Decor services enhance interiors with curated accessories, lighting, and decorative elements for visual impact.',
    scopeItems: [
      { icon: 'Lightbulb', title: 'Concept Development', description: 'Create styling concepts reflecting client preferences, brand identity, and overall interior design theme accurately.' },
      { icon: 'Package', title: 'Accessory Selection', description: 'Choose decorative items, artworks, and furnishings that complement the interior style and function effectively.' },
      { icon: 'Lamp', title: 'Lighting Design', description: 'Plan and position lighting fixtures to highlight design elements, create ambiance, and improve functionality reliably.' },
      { icon: 'Layers', title: 'Material Coordination', description: 'Integrate textures, fabrics, and finishes with interior elements ensuring cohesive visual and tactile experience consistently.' },
      { icon: 'Wrench', title: 'Installation Oversight', description: 'Supervise placement of Decor items, lighting, and accessories to achieve precise design intent efficiently.' },
      { icon: 'CheckCircle', title: 'Final Styling Review', description: 'Conduct walkthrough and adjustments ensuring the interior achieves aesthetic harmony, functionality, and client satisfaction accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Concept Development', description: 'Understand client taste, lifestyle, and design vision to develop cohesive styling and Decor concepts.' },
      { icon: 'Search', title: 'Selection & Sourcing', description: 'Choose decorative elements, artworks, lighting, and accessories that complement the interior design theme.' },
      { icon: 'Sofa', title: 'Placement & Styling', description: 'Arrange furniture, Decor items, and accessories to enhance aesthetics, flow, and functional appeal.' },
      { icon: 'CheckCircle', title: 'Final Review & Handover', description: 'Conduct quality checks, make adjustments, and deliver a beautifully styled, ready-to-enjoy interior space.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Styling Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Residential Home Styling", imageKey: 'projectImg1' },
      { id: 2, title: "Show Apartment Decor", imageKey: 'projectImg2' },
      { id: 3, "title": "Retail Visual Merchandising", "imageKey": "projectImg3" },
      { id: 4, title: "Boutique Hotel Finishing Touches", imageKey: 'projectImg4' },
      { id: 5, title: "Corporate Event Styling", imageKey: 'projectImg5' },
      { id: 6, title: "Photo Shoot Set Decor", imageKey: 'projectImg6' },
      { id: 7, title: "Cafe Ambiance Styling", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Add the Finishing Touch?',
    description: 'Elevate your space with professional styling and decor. Contact us to bring your interior to life.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The styling service took our house and made it feel like a home. Their attention to detail and creative flair made all the difference. It's the best investment we made!", name: "Chamari Atapattu", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/85.jpg" },
        { quote: "They have an incredible eye for decor. The way they styled our retail space has significantly improved the customer experience. Every little detail was perfect.", name: "Dinesh Chandimal", role: "Retail Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/86.jpg" }
    ],
    summary: { count: '300+', label: 'Spaces Styled' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Styling & Decor services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};