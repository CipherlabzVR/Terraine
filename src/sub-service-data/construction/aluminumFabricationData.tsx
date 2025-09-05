import { PageData } from '../../pages/SubServicePageLayout';

export const aluminumFabricationPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Aluminum</span> Fabrication',
    tagline: 'Custom aluminum solutions for modern constructions.',
    description: 'Our aluminum fabrication services provide precise, durable, and visually appealing components, enhancing building aesthetics, functionality, and structural efficiency with expert craftsmanship and innovative designs.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Scaling', title: 'Precision Fabrication', description: 'Accurately crafted aluminum components for seamless integration consistently' },
      { icon: 'ShieldCheck', title: 'Durable Materials', description: 'High-quality aluminum ensuring long-lasting performance effectively' },
      { icon: 'Sparkles', title: 'Aesthetic Designs', description: 'Stylish finishes enhancing building appearance reliably' },
      { icon: 'Settings2', title: 'Customized Solutions', description: 'Tailored fabrication meeting unique project requirements efficiently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our aluminum fabrication services deliver precise durable and lightweight components for architectural and structural applications with superior quality',
    scopeItems: [
      { icon: 'Package', title: 'Material Selection', description: 'Choose high-quality aluminum alloys suitable for strength corrosion resistance and aesthetic finishes in construction projects' },
      { icon: 'Scissors', title: 'Cutting and Shaping', description: 'Fabricate aluminum components using advanced cutting bending and shaping techniques ensuring precision and design accuracy' },
      { icon: 'Glasses', title: 'Assembly and Welding', description: 'Assemble and join aluminum elements securely using specialized welding and fastening methods for structural reliability' },
      { icon: 'Paintbrush', title: 'Surface Finishing', description: 'Apply anodizing powder coating or polishing finishes enhancing durability aesthetics and resistance to environmental factors' },
      { icon: 'ClipboardCheck', title: 'Quality Control', description: 'Conduct rigorous inspections dimensional checks and tests ensuring fabricated aluminum meets required standards consistently' },
      { icon: 'HardHat', title: 'Installation Support', description: 'Guide on site installation and alignment ensuring seamless integration with building structures and design intent effectively' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Pen', title: 'Design & Planning', description: 'Develop precise aluminum component designs, considering structural requirements, aesthetics, and fabrication feasibility' },
      { icon: 'Scissors', title: 'Cutting & Shaping', description: 'Use advanced machinery to cut, bend, and shape aluminum profiles with high accuracy and consistency' },
      { icon: 'Glasses', title: 'Assembly & Welding', description: 'Assemble aluminum parts, weld or fasten components securely, ensuring structural integrity and design compliance' },
      { icon: 'CheckCircle', title: 'Finishing & Inspection', description: 'Apply surface treatments, coatings, and perform quality checks for durability, functionality, and visual appeal' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Aluminum Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Custom Window Frames", imageKey: 'projectImg1' },
      { id: 2, title: "Architectural Louvers", imageKey: 'projectImg2' },
      { id: 3, "title": "Curtain Wall Systems", "imageKey": "projectImg3" },
      { id: 4, title: "Perforated Facade Panels", imageKey: 'projectImg4' },
      { id: 5, title: "Aluminum Railing Systems", imageKey: 'projectImg5' },
      { id: 6, title: "Structural Support Beams", imageKey: 'projectImg6' },
      { id: 7, title: "Bespoke Aluminum Gates", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Modern Finish?',
    description: 'Enhance your project with our high-quality, custom aluminum fabrication. Contact us for a quote.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The precision of the aluminum fabrication was outstanding. The components fit perfectly on-site, which made the installation process incredibly fast and smooth.", name: "David Ong", role: "Construction Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/7.jpg" },
        { quote: "The aesthetic quality of the powder-coated aluminum panels has truly elevated our building's facade. A durable and beautiful solution delivered by a professional team.", name: "Samantha Clarke", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/9.jpg" }
    ],
    summary: { count: '100+', label: 'Fabrication Projects' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Aluminum Fabrication services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};