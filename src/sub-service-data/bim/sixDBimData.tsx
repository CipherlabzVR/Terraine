import { PageData } from '../../pages/SubServicePageLayout';

export const sixDBimPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">6D BIM</span> – Sustainability & Energy',
    tagline: 'Driving sustainable solutions with intelligent 6D modeling.',
    description: 'Our 6D BIM services analyze energy use, materials, and sustainability factors, enabling ecofriendly designs, reduced costs, and long term environmental responsibility in every project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'GaugeCircle', title: 'Energy Efficiency', description: 'Models optimizing building energy consumption consistently.' },
      { icon: 'Leaf', title: 'Sustainable Design', description: 'Supports environmentally responsible construction effectively.' },
      { icon: 'BarChart3', title: 'Performance Analysis', description: 'Evaluates building sustainability reliably.' },
      { icon: 'TrendingUp', title: 'Long Term Savings', description: 'Reduces operational costs through efficient planning.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our 6D BIM services integrate lifecycle data to analyze and optimize the environmental and energy performance of your project.',
    scopeItems: [
      { icon: 'Gauge', title: 'Energy Performance Analysis', description: 'Analyze building models to predict and optimize energy consumption, thermal performance, and HVAC efficiency.' },
      { icon: 'Sun', title: 'Daylight & Solar Analysis', description: 'Simulate natural lighting and solar radiation to enhance occupant comfort and reduce artificial lighting costs.' },
      { icon: 'Recycle', title: 'Sustainable Material Tracking', description: 'Integrate data on recycled content and material lifecycle to support green building certifications.' },
      { icon: 'Droplets', title: 'Water Efficiency Modeling', description: 'Analyze water usage for fixtures and landscaping, and model rainwater harvesting systems for conservation.' },
      { icon: 'RefreshCw', title: 'Lifecycle Assessment (LCA)', description: 'Evaluate the environmental impact of the building over its entire lifespan, from construction to demolition.' },
      { icon: 'Wind', title: 'Renewable Energy Integration', description: 'Model the performance and integration of solar panels, geothermal systems, and other renewable energy sources.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Assessment', description: 'Gather building design, materials, and systems data to evaluate energy performance and sustainability potential.' },
      { icon: 'Box', title: 'Energy Modeling & Simulation', description: 'Create BIM-integrated simulations to analyze energy consumption, daylight, HVAC efficiency, and environmental impact.' },
      { icon: 'LineChart', title: 'Optimization & Recommendations', description: 'Identify opportunities for energy savings, sustainable material use, and efficient building system integration.' },
      { icon: 'FilePieChart', title: 'Reporting & Implementation Support', description: 'Provide actionable insights, sustainability reports, and guidance to enhance building performance and reduce environmental footprint.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured 6D BIM Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Green Building Energy Audit", imageKey: 'projectImg1' },
      { id: 2, title: "Solar Panel Integration Study", imageKey: 'projectImg2' },
      { id: 3, "title": "Lifecycle Carbon Footprint Analysis", "imageKey": "projectImg3" },
      { id: 4, title: "Natural Ventilation Simulation", imageKey: 'projectImg4' },
      { id: 5, title: "LEED Certification Support", imageKey: 'projectImg5' },
      { id: 6, title: "Water Conservation Modeling", imageKey: 'projectImg6' },
      { id: 7, title: "Sustainable Material Tracking", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Build a Greener Future?',
    description: 'Optimize your project for sustainability and long-term efficiency with our 6D BIM services. Contact us for an analysis.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The 6D BIM analysis was incredibly insightful. It helped us make crucial design changes that significantly improved our building's energy performance and lowered future operational costs.", name: "James Bennett", role: "Construction Director", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their sustainability reports were clear, actionable, and essential for achieving our green building certification. A truly valuable service for any eco-conscious project.", name: "Ahmad Faizal", role: "Sustainability Manager", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '30%', label: 'Avg. Energy Reduction' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our 6D BIM – Sustainability & Energy services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};