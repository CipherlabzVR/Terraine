import { PageData } from '../../pages/SubServicePageLayout';

export const customAiSolutionsConsultingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Custom AI Solutions</span> & Consulting',
    tagline: 'Tailored AI solutions for unique project challenges',
    description: 'Our custom AI solutions and consulting provide personalized strategies, innovative tools, and expert guidance, empowering projects with intelligent automation, data driven decisions, and optimized construction performance.',
    backgroundImage: '/ai-engineering.jpg',
    uspItems: [
      { icon: 'Settings', title: 'Tailored Strategies', description: 'AI solutions customized for project needs consistently' },
      { icon: 'Users', title: 'Expert Guidance', description: 'Professional consulting for optimal results effectively' },
      { icon: 'Lightbulb', title: 'Innovative Approaches', description: 'Creative AI applications enhancing outcomes reliably' },
      { icon: 'Zap', title: 'Efficiency Boost', description: 'Improves processes and reduces operational time consistently' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our custom AI solutions provide tailored tools and strategies to meet unique project requirements and optimize operations effectively.',
    scopeItems: [
      { icon: 'Search', title: 'Requirement Analysis', description: 'Evaluate client needs to design AI solutions that align with project objectives and goals accurately.' },
      { icon: 'Settings', title: 'Solution Design', description: 'Develop tailored AI models and workflows addressing specific challenges and operational needs reliably.' },
      { icon: 'Box', title: 'Implementation Support', description: 'Deploy AI solutions into existing systems ensuring seamless integration and functionality consistently.' },
      { icon: 'Users', title: 'Training and Capacity Building', description: 'Educate staff on AI tools and methodologies to maximize adoption and efficiency effectively.' },
      { icon: 'Monitor', title: 'Monitoring and Optimization', description: 'Continuously track AI performance and refine models to improve accuracy and outcomes efficiently.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Provide comprehensive documentation and performance reports for transparency, evaluation, and informed decision making accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Search', title: 'Requirement Analysis & Consultation', description: 'Understand client challenges, business goals, and operational needs to define tailored AI solutions.' },
      { icon: 'Settings', title: 'AI Solution Design & Development', description: 'Develop custom AI models, algorithms, and platforms aligned with project requirements and objectives.' },
      { icon: 'Box', title: 'Implementation & Integration', description: 'Deploy AI solutions into existing systems, ensuring seamless integration, functionality, and performance optimization.' },
      { icon: 'Monitor', title: 'Monitoring & Continuous Support', description: 'Track solution performance, provide insights, updates, and ongoing consulting to maximize efficiency and value.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Custom AI Solutions & Consulting Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Custom Workflow Automation", imageKey: 'projectImg1' },
      { id: 2, title: "Specialized Quality Control", imageKey: 'projectImg2' },
      { id: 3, title: "Bespoke Risk Management", imageKey: 'projectImg3' },
      { id: 4, title: "Specialized Analytics Platform", imageKey: 'projectImg4' },
      { id: 5, title: "Tailored Resource Optimization", imageKey: 'projectImg5' },
      { id: 6, title: "Specialized Predictive Models", imageKey: 'projectImg6' },
      { id: 7, title: "Bespoke Decision Support", imageKey: 'projectImg7' }
    ]
  },
  cta: {
    title: 'Ready for Your Custom AI Solution?',
    description: 'Let our custom AI solutions and consulting services address your unique project challenges.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      { quote: "The custom AI solution has perfectly addressed our unique challenges. The tailored approach has delivered exceptional results.", name: "Dr. Michael Chang", role: "CTO, Innovation Labs", rating: 5, image: "https://randomuser.me/api/portraits/men/19.jpg" },
      { quote: "The consulting expertise and custom development have transformed our operations. We now have a solution that fits our exact needs.", name: "Sophie Williams", role: "Operations Director, Custom Solutions Inc", rating: 5, image: "https://randomuser.me/api/portraits/women/20.jpg" },
      { quote: "The custom AI solution has given us a competitive advantage. The tailored approach has delivered results beyond our expectations.", name: "Raj Patel", role: "Project Manager, Specialized Build Corp", rating: 5, image: "https://randomuser.me/api/portraits/men/21.jpg" }
    ],
    summary: { count: '100+', label: 'Custom Solutions Delivered' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us to learn how our custom AI solutions and consulting can address your unique project challenges.',
    phoneNumbers: ['+1 (555) 123-4567'],
    emails: ['custom-ai@terrene.com'],
    videoBackground: '/about.mp4'
  }
};
