import { PageData } from '../../pages/SubServicePageLayout';

export const mepDrawingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">MEP</span> Drawings',
    tagline: 'Coordinated MEP drawings for efficient system installation.',
    description: 'Our MEP drawings deliver precise mechanical, electrical, and plumbing layouts, ensuring seamless installation, reduced conflicts, and optimal system performance throughout every construction project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'GitMerge', title: 'Integrated Systems', description: 'Coordinated MEP layouts reducing conflicts and errors.' },
      { icon: 'Scaling', title: 'Precision Detailing', description: 'Accurate drawings ensuring correct installation consistently.' },
      { icon: 'Zap', title: 'Efficiency Focused', description: 'Supporting smooth construction workflow effectively.' },
      { icon: 'ShieldCheck', title: 'Reliable Performance', description: 'Designs ensuring durable and functional MEP systems.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our MEP drawing services provide accurate mechanical electrical and plumbing layouts to guide precise system installation.',
    scopeItems: [
      { icon: 'Wind', title: 'Mechanical Layouts', description: 'Prepare HVAC and mechanical system layouts including ducts piping and equipment locations accurately for construction.' },
      { icon: 'Plug', title: 'Electrical Layouts', description: 'Develop electrical plans showing circuits panels lighting outlets and distribution for proper installation effectively.' },
      { icon: 'Droplets', title: 'Plumbing Layouts', description: 'Design plumbing layouts indicating pipe routes fixtures and connections ensuring efficient water management consistently.' },
      { icon: 'Users', title: 'Coordination with Architecture', description: 'Ensure MEP drawings integrate seamlessly with architectural and structural plans for clash free construction.' },
      { icon: 'Cog', title: 'System Detailing', description: 'Provide detailed drawings for equipment specifications connections and support structures for accurate installation.' },
      { icon: 'RefreshCw', title: 'Revisions and Updates', description: 'Update MEP drawings based on design changes client feedback and site observations reliably.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'System Assessment', description: 'Analyze mechanical, electrical, and plumbing requirements to plan integrated and efficient MEP layouts.' },
      { icon: 'DraftingCompass', title: 'Drafting & Modeling', description: 'Prepare detailed MEP drawings, including schematics, layouts, and 3D models for precise installation guidance.' },
      { icon: 'FileSearch', title: 'Coordination & Review', description: 'Collaborate with architects, structural, and other engineers to avoid clashes and ensure smooth system integration.' },
      { icon: 'Send', title: 'Final Drawings & Delivery', description: 'Deliver finalized MEP drawings ready for construction, approvals, and accurate on-site implementation.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured MEP Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "HVAC Ducting Layouts", imageKey: 'projectImg1' },
      { id: 2, title: "Electrical Schematics", imageKey: 'projectImg2' },
      { id: 3, "title": "Plumbing and Drainage Plans", "imageKey": "projectImg3" },
      { id: 4, title: "Fire Protection System Drawings", imageKey: 'projectImg4' },
      { id: 5, title: "Lighting and Power Layouts", imageKey: 'projectImg5' },
      { id: 6, title: "Plant Room Detailing", imageKey: 'projectImg6' },
      { id: 7, title: "Coordinated Services Drawings", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Coordinated Build?',
    description: 'Ensure a smooth and efficient installation with our precise MEP drawings. Contact our team to get started on your plans.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The MEP drawings were perfectly coordinated with the architectural and structural plans. This saved us a significant amount of time and prevented costly on-site clashes.", name: "Hans Müller", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "Clear, precise, and easy to follow. The level of detail in their drawings made the installation process for our complex electrical systems straightforward.", name: "Aisha Al Mazrouei", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/2.jpg" }
    ],
    summary: { count: '1000+', label: 'MEP Sheets Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our MEP Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};