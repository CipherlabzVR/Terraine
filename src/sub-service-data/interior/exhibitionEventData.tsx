// Suggested Filename: exhibitionEventData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const exhibitionEventPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Exhibition</span> & Event Design',
    tagline: 'Engaging designs creating memorable event experiences.',
    description: 'Our exhibition and event design services deliver visually striking, functional, and immersive spaces, enhancing audience engagement and leaving lasting impressions through creative, well executed designs.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Users', title: 'Engaging Spaces', description: 'Designs creating memorable event experiences consistently.' },
      { icon: 'Lightbulb', title: 'Creative Concepts', description: 'Unique ideas enhancing audience interaction effectively.' },
      { icon: 'Workflow', title: 'Seamless Execution', description: 'Projects completed on time and flawlessly reliably.' },
      { icon: 'Settings2', title: 'Customized Solutions', description: 'Tailored designs matching client event objectives.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our exhibition and event design services create engaging, functional, and visually appealing spaces for exhibitions, trade shows, and events.',
    scopeItems: [
      { icon: 'Lightbulb', title: 'Concept Development', description: 'Develop creative themes and layouts tailored to event objectives, brand identity, and audience engagement effectively.' },
      { icon: 'LayoutGrid', title: 'Space Planning', description: 'Optimize booth layouts, circulation paths, and interactive zones ensuring functional and accessible designs accurately.' },
      { icon: 'Palette', title: 'Material and Finish Selection', description: 'Recommend appropriate materials and finishes for durability, aesthetics, and brand representation consistently.' },
      { icon: 'Projector', title: 'Lighting and AV Integration', description: 'Design lighting, audiovisual setups, and display systems enhancing engagement, visibility, and presentation quality reliably.' },
      { icon: 'HardHat', title: 'Fabrication and Installation Oversight', description: 'Supervise booth and event structure assembly ensuring adherence to design, safety, and schedule effectively.' },
      { icon: 'CheckCircle', title: 'Event Execution Support', description: 'Coordinate final setup, troubleshooting, and post-event teardown to ensure seamless operations and client satisfaction accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Concept Development', description: 'Understand event objectives, branding, and audience experience to create innovative and engaging design concepts.' },
      { icon: 'LayoutGrid', title: 'Design & Layout Planning', description: 'Develop detailed layouts, 3D visualizations, and material selections to optimize flow, aesthetics, and functionality.' },
      { icon: 'HardHat', title: 'Construction & Installation', description: 'Oversee fabrication, setup, and decoration of exhibition stands, booths, or event spaces, ensuring quality and safety.' },
      { icon: 'CheckCircle', title: 'Final Touches & Handover', description: 'Complete styling, signage, and quality checks, delivering an immersive, functional, and visually appealing event environment.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Event Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "International Trade Show Booth", imageKey: 'projectImg1' },
      { id: 2, title: "Corporate Conference Stage Design", imageKey: 'projectImg2' },
      { id: 3, "title": "Product Launch Event", "imageKey": "projectImg3" },
      { id: 4, title: "Art Exhibition Layout", imageKey: 'projectImg4' },
      { id: 5, title: "Pop-Up Retail Space", imageKey: 'projectImg5' },
      { id: 6, title: "Gala Dinner & Awards Ceremony", imageKey: 'projectImg6' },
      { id: 7, title: "Brand Activation Experience", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Make an Impact?',
    description: 'Create an unforgettable experience for your audience. Contact us for innovative event and exhibition design.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their trade show booth design was a showstopper. It attracted a huge crowd and perfectly captured our brand's message. Our lead generation exceeded all expectations.", name: "Praveen Kumar", role: "Marketing Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/97.jpg" },
        { quote: "From concept to execution, the team was phenomenal. They designed a stunning and functional stage for our annual conference that made the entire event feel more professional and engaging.", name: "Shanika Weerasekara", role: "Event Coordinator", rating: 5, image: "https://randomuser.me/api/portraits/women/98.jpg" }
    ],
    summary: { count: '120+', label: 'Events Designed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Exhibition & Event Design services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};