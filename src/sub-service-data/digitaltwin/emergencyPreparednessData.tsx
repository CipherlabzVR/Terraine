import { PageData } from '../../pages/SubServicePageLayout';

export const emergencyPreparednessPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Emergency Preparedness</span> & Disaster Simulation',
    tagline: 'Prepare Smart Simulate Disasters Respond Better.',
    description: 'Deliver advanced digital twin disaster simulation tools to enhance preparedness, test emergency strategies, reduce risks, improve safety, and ensure resilience in unpredictable crisis scenarios effectively.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'ShieldAlert', title: 'Risk Anticipation', description: 'Identify and mitigate disaster vulnerabilities effectively.' },
      { icon: 'Box', title: 'Simulation Accuracy', description: 'Realistic disaster models for proactive training.' },
      { icon: 'ClipboardList', title: 'Preparedness Planning', description: 'Develop effective emergency response strategies efficiently.' },
      { icon: 'ShieldCheck', title: 'Resilient Communities', description: 'Strengthen safety and disaster readiness consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our disaster simulation services empower cities, industries, and organizations to prepare for emergencies by testing strategies, minimizing risks, and ensuring resilient response systems.',
    scopeItems: [
      { icon: 'Wind', title: 'Hazard Simulation', description: 'Model earthquakes floods fires and storms to assess impacts accurately.' },
      { icon: 'Users', title: 'Emergency Drills', description: 'Conduct virtual training simulations to improve team preparedness effectively.' },
      { icon: 'Building', title: 'Infrastructure Risk Analysis', description: 'Identify weak points in buildings utilities and transport systems.' },
      { icon: 'Siren', title: 'Crisis Response Testing', description: 'Evaluate and refine response strategies under simulated emergency conditions efficiently.' },
      { icon: 'Truck', title: 'Resource Allocation', description: 'Optimize deployment of emergency services equipment and supplies effectively.' },
      { icon: 'TrendingUp', title: 'Resilience Building', description: 'Support long term preparedness through continuous monitoring and scenario planning thoroughly.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Database', title: 'Data Collection & Risk Assessment', description: 'Gather information on hazards, infrastructure, and population data to evaluate potential risks effectively.' },
      { icon: 'Box', title: 'Digital Twin Simulation', description: 'Model disaster scenarios, emergency responses, and resource allocation in a virtual environment for preparedness planning.' },
      { icon: 'LineChart', title: 'Analysis & Strategy Development', description: 'Identify vulnerabilities, simulate mitigation measures, and optimize emergency response strategies for safety and efficiency.' },
      { icon: 'FilePieChart', title: 'Reporting & Training Support', description: 'Provide actionable insights, detailed reports, and guidance for disaster management, training, and continuous improvement.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Simulation Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "City-Wide Flood Simulation", imageKey: 'projectImg1' },
      { id: 2, title: "Earthquake Response Drill", imageKey: 'projectImg2' },
      { id: 3, "title": "Industrial Fire Evacuation Plan", "imageKey": "projectImg3" },
      { id: 4, title: "Hurricane Impact Analysis", imageKey: 'projectImg4' },
      { id: 5, title: "Emergency Resource Deployment", imageKey: 'projectImg5' },
      { id: 6, title: "Power Grid Failure Simulation", imageKey: 'projectImg6' },
      { id: 7, title: "Pandemic Response Modeling", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Prepare for the Unexpected?',
    description: 'Strengthen your resilience and enhance your emergency response with our advanced disaster simulation services. Contact us for a consultation.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The disaster simulation was an eye-opener. It allowed us to test our emergency response in a safe, virtual environment and identify critical gaps in our plan.", name: "James Bennett", role: "Emergency Services Chief", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Their infrastructure risk analysis helped us prioritize and reinforce our most vulnerable assets. An essential service for any city's resilience strategy.", name: "Ahmad Faizal", role: "Director of Public Works", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" }
    ],
    summary: { count: '100+', label: 'Scenarios Simulated' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Emergency Preparedness & Disaster Simulation services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};