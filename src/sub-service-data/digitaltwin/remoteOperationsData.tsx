import { PageData } from '../../pages/SubServicePageLayout';

export const remoteOperationsPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Remote Operations</span> & Virtual Control Centers',
    tagline: 'Manage Operations Remotely Ensure Continuous Control.',
    description: 'Implement remote operations and virtual control centers to monitor, manage, and optimize systems efficiently while reducing on-site resource dependency.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'Signal', title: 'Remote Monitoring', description: 'Track operations in real time from any location.' },
      { icon: 'Computer', title: 'Centralized Control', description: 'Manage multiple systems through a single interface.' },
      { icon: 'GaugeCircle', title: 'Operational Efficiency', description: 'Reduce delays and streamline processes remotely.' },
      { icon: 'ShieldCheck', title: 'Risk Reduction', description: 'Minimize human errors and operational risks effectively.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our remote operations and virtual control center services enable centralized monitoring and management, enhancing efficiency and reducing operational risks.',
    scopeItems: [
      { icon: 'Combine', title: 'System Integration', description: 'Connect all operational systems to enable seamless remote monitoring and control effectively.' },
      { icon: 'Activity', title: 'Real Time Monitoring', description: 'Continuously track performance metrics to identify issues and optimize operations consistently.' },
      { icon: 'Bell', title: 'Alert Management', description: 'Generate automated notifications for deviations, failures, or inefficiencies to ensure timely response.' },
      { icon: 'BarChart3', title: 'Operational Analytics', description: 'Analyze data from remote systems to improve decision making and resource allocation.' },
      { icon: 'Bot', title: 'Process Automation', description: 'Implement automated workflows to enhance efficiency and reduce manual intervention reliably.' },
      { icon: 'FileText', title: 'Reporting and Documentation', description: 'Maintain detailed records of remote operations, interventions, and performance improvements accurately.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'Plug', title: 'System Integration & Connectivity', description: 'Connect physical assets, sensors, and operational systems to a centralized digital platform.' },
      { icon: 'Box', title: 'Digital Twin Modeling', description: 'Build virtual replicas of assets and processes to enable real-time monitoring and control remotely.' },
      { icon: 'Computer', title: 'Monitoring & Control', description: 'Operate, track, and manage systems from virtual control centers, ensuring smooth operations and quick response.' },
      { icon: 'FilePieChart', title: 'Reporting & Optimization', description: 'Generate performance reports, identify bottlenecks, and recommend improvements for enhanced operational efficiency.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Remote Operations Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Smart Factory Control Center", imageKey: 'projectImg1' },
      { id: 2, title: "Utility Grid Remote Monitoring", imageKey: 'projectImg2' },
      { id: 3, "title": "City-Wide Traffic Management", "imageKey": "projectImg3" },
      { id: 4, title: "Building Automation System", imageKey: 'projectImg4' },
      { id: 5, title: "Remote Asset Performance Hub", imageKey: 'projectImg5' },
      { id: 6, title: "Automated Process Control", imageKey: 'projectImg6' },
      { id: 7, title: "Virtual Power Plant Operations", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for Centralized Control?',
    description: 'Enhance your operational efficiency and manage assets from anywhere with our remote solutions. Contact us to learn more.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The virtual control center has transformed how we manage our facilities. We now have complete visibility and control from a single dashboard, which is incredibly efficient.", name: "Hans Müller", role: "Operations Director", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "Their remote monitoring and alert system has been crucial in preventing downtime. We can address issues before they escalate, saving time and money.", name: "Claudia Schneider", role: "Facility Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" }
    ],
    summary: { count: '50+', label: 'Control Centers Deployed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Remote Operations & Virtual Control Centers services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};