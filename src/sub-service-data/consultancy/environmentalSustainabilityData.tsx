import { PageData } from '../../pages/SubServicePageLayout';

export const environmentalSustainabilityPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Environmental & Sustainability</span> Consulting',
    tagline: 'Promoting sustainable solutions for responsible project development.',
    description: 'Our environmental and sustainability consulting provides innovative strategies to minimize impact, optimize resources, and ensure ecofriendly, compliant, and long-lasting solutions for every project.',
    backgroundImage: '/hero-consultancy-sustainability.jpg', // Updated hero background image
    uspItems: [
      { icon: 'Leaf', title: 'Eco-friendly Solutions', description: 'Minimizing environmental impact through sustainable practices.' },
      { icon: 'FileCheck2', title: 'Regulatory Compliance', description: 'Ensuring projects meet environmental standards effectively.' },
      { icon: 'Recycle', title: 'Resource Optimization', description: 'Efficient use of energy and materials consistently.' },
      { icon: 'TrendingUp', title: 'Long Term Benefits', description: 'Sustainable strategies enhancing project lifecycle value.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our environmental and sustainability consulting services focus on eco-friendly and compliant solutions for all construction projects.',
    scopeItems: [
      { icon: 'Globe2', title: 'Environmental Impact Assessment', description: 'Evaluate project effects on environment and propose mitigation measures accurately.' },
      { icon: 'Package', title: 'Sustainable Material Recommendations', description: 'Suggest eco-friendly materials to reduce carbon footprint and resource consumption effectively.' },
      { icon: 'GaugeCircle', title: 'Energy Efficiency Analysis', description: 'Assess building systems to optimize energy consumption and promote sustainability reliably.' },
      { icon: 'Trash2', title: 'Waste Management Planning', description: 'Develop strategies for construction and operational waste reduction and recycling consistently.' },
      { icon: 'ShieldCheck', title: 'Regulatory Compliance', description: 'Ensure projects meet environmental laws codes and green building standards effectively.' },
      { icon: 'FilePieChart', title: 'Monitoring and Reporting', description: 'Track sustainability performance and prepare reports for stakeholders and regulatory approval consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ScanSearch', title: 'Environmental Assessment', description: 'Conduct site evaluations, identify environmental impacts, and assess sustainability challenges for informed decision-making.' },
      { icon: 'Lightbulb', title: 'Strategy Development', description: 'Develop practical sustainability strategies, green building practices, and compliance plans for long-term environmental performance.' },
      { icon: 'Construction', title: 'Implementation Support', description: 'Guide the adoption of sustainable materials, technologies, and processes to minimize ecological footprint effectively.' },
      { icon: 'Activity', title: 'Monitoring & Reporting', description: 'Track sustainability metrics, provide detailed reports, and recommend improvements for continuous environmental and operational efficiency.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Sustainability Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Green Building Certification", imageKey: 'projectImg1' },
      { id: 2, title: "Waste Reduction Program", imageKey: 'projectImg2' },
      { id: 3, "title": "Energy Efficiency Audit", "imageKey": "projectImg3" },
      { id: 4, title: "Environmental Impact Report", imageKey: 'projectImg4' },
      { id: 5, title: "Sustainable Material Sourcing", imageKey: 'projectImg5' },
      { id: 6, title: "Carbon Footprint Analysis", imageKey: 'projectImg6' },
      { id: 7, title: "Water Management Plan", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build Responsibly?',
    description: 'Integrate sustainability into your project from the start. Contact our environmental consultants for a strategic assessment.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their environmental consulting was critical for our project's approval. The impact assessment was thorough, and their sustainable solutions were both practical and effective.", name: "Emma Wilson", role: "Project Coordinator", rating: 5, image: "https://randomuser.me/api/portraits/women/6.jpg" },
        { quote: "We were impressed by their commitment to sustainability. They helped us optimize our resource usage and significantly reduce our environmental footprint.", name: "Michael Thompson", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/13.jpg" }
    ],
    summary: { count: '100+', label: 'Projects Advised' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Environmental & Sustainability Consulting services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};