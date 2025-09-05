import { PageData } from '../pages/GenericPageLayout'; 

export const digitalTwinPageData: PageData = {
  hero: {
    title: "Digital Twin",
    subtitle: "“Creating real-time virtual replicas of your assets for smarter decisions and efficient management”",
    description: "Transforming assets and infrastructure into real-time digital twins for smarter operations, predictive maintenance, energy efficiency, facility management, and data-driven decision-making.",
    backgroundImage: "/twin-hero.jpg", // TODO: Update with your actual image path.
    buttons: [
      { text: "SCHEDULE A DEMO", link: "/inquiry", variant: "primary" },
      { text: "EXPLORE USE CASES", link: "#about-us-section", variant: "secondary" }
    ]
  },
  about: {
    title: "Digital Twin Services",
    description: "Our digital twin services create real-time virtual replicas of your assets, enabling proactive monitoring, predictive maintenance, and data-driven decisions, enhancing performance, efficiency, and long-term sustainability of your projects.",
    button: { text: "OUR TECHNOLOGY", link: "/about" },
    images: {
      main: "digitalTwinMainImage",
      secondary: "digitalTwinSecondaryImage"
    },
    stat: {
      value: "40%",
      label: "Reduction in OpEx"
    },
    videoBackground: "digitalTwinAboutVideo"
  },
  services: {
    superTitle: "OUR SERVICES",
    title: "Digital Twin Capabilities",
    list: [
      { icon: "Activity", title: "Real-Time Asset Monitoring & Performance Tracking", description: "Providing live digital replicas that track asset performance, enabling proactive decisions, reducing downtime, and ensuring operational efficiency." },
      { icon: "Wrench", title: "Predictive & Preventive Maintenance", description: "Utilizing digital insights to forecast failures, schedule preventive maintenance, and extend asset life with minimal operational disruption." },
      { icon: "Activity", title: "Energy & Resource Optimization", description: "Enhancing sustainability by monitoring usage patterns, reducing waste, and optimizing energy efficiency through smart digital twin technologies." },
      { icon: "Building", title: "Facility Management & Space Utilization", description: "Transforming facility management with intelligent digital twins that optimize space utilization, improve workflows, and reduce operational costs." },
      { icon: "Wifi", title: "Remote Operations & Virtual Control Centers", description: "Enabling remote oversight with digital control centers that improve efficiency, safety, and decision-making from anywhere." },
      { icon: "Tractor", title: "Infrastructure Monitoring", description: "Delivering advanced monitoring of bridges, roads, and utilities through digital twins, ensuring safety, longevity, and proactive maintenance." },
      { icon: "Building", title: "Smart City & Urban Digital Twin Services", description: "Empowering cities with virtual replicas for planning, sustainability, mobility, and infrastructure, creating smarter and more resilient urban environments." },
      { icon: "AlertTriangle", title: "Emergency Preparedness & Disaster Simulation", description: "Simulating disasters digitally to strengthen emergency response, reduce risks, and ensure rapid recovery strategies." },
      { icon: "Activity", title: "AR/VR-based Operations & Training", description: "Enhancing workforce skills and safety with immersive AR/VR training integrated into digital twin platforms." },
      { icon: "BarChart", title: "Operational Analytics & Decision-Making", description: "Transforming data into actionable insights through digital twins, enabling smarter strategies and faster, informed decision-making." }
    ],
    videoBackground: "digitalTwinAboutVideo"
  },
  workingSteps: {
    superTitle: "HOW IT WORKS",
    title: "Our Easy Working Steps",
    steps: [
      { icon: "Database", title: "Data Collection & Integration", description: "Gather real-time data to build accurate digital replicas of your assets." },
      { icon: "Box", title: "Digital Twin Modeling", description: "Create precise and sustainable virtual models for monitoring, simulation, and predictive insights." },
      { icon: "LineChart", title: "Analysis & Optimization", description: "Optimize performance, detect issues early, and improve operational efficiency." },
      { icon: "ShieldCheck", title: "Lifetime Monitoring & Support", description: "Receive ongoing updates, insights, and lifetime support for continuous asset performance." }
    ],
    backgroundImage: "/blueprint-bg.png"
  },
  // TODO: Update the placeholder data below with your specific Digital Twin projects.
  projects: {
    superTitle: "CASE STUDIES",
    title: "Digital Twins in Practice",
    list: [
      { image: "/22.png", name: "Smart Factory Twin" },
      { image: "/15.jpg", name: "City Infrastructure Replica" },
      { image: "/project-1.png", name: "Energy Grid Optimization" },
      { image: "/9.jpg", name: "Hospital Management unit" },
      { image: "/5.jpg", name: "Modern Villa" },
    ],
    videoBackground: "digitalTwinAboutVideo"
  },
  cta: {
    title: "Ready for a Smarter Future?",
    description: "Unlock the full potential of your assets with a real-time digital twin. Contact us to see how we can enhance your operational intelligence.",
    buttons: [
      { text: "GET STARTED", link: "/contact", variant: "primary" },
      { text: "VIEW CASE STUDIES", link: "/completed-projects", variant: "secondary" }
    ]
  },
  testimonials: {
    superTitle: "TESTIMONIALS",
    title: "Global Praise for Our Digital Twin Services",
    list: [
        { quote: "Terrene Engineers supported our luxury hotel project in Muscat with BIM coordination and structural detailing. Their precise planning reduced errors and sped up construction. They helped us save costs by improving material use and timelines.", name: "Ahmed Al-Harthy", role: "Civil Engineer", country: "Muscat, Oman", rating: 5, image: "https://randomuser.me/api/portraits/men/1.jpg" },
        { quote: "For our office complex in Salalah, Terrene Engineers handled MEP and facade coordination using BIM. Their accurate clash detection reduced rework costs by over 10 percent. Their involvement ensured timely delivery and quality execution.", name: "Fatima Al-Saidi", role: "Project Manager", country: "Salalah, Oman", rating: 5, image: "https://randomuser.me/api/portraits/women/1.jpg" },
        { quote: "During our mall expansion in Doha, Terrene Engineers provided BIM integration and interior design support. Their solutions optimized materials and enabled fast-track delivery, minimizing change orders. Their detailed coordination helped us stay on schedule and budget.", name: "Mohammed Al-Khalifa", role: "Senior Consultant", country: "Doha, Qatar", rating: 5, image: "https://randomuser.me/api/portraits/men/2.jpg" },
        { quote: "Terrene Engineers managed structural and MEP design for our hotel in Lusail. Their precise coordination avoided design conflicts and accelerated approvals. Their BIM workflow reduced errors and saved costs. Their support was vital to project success.", name: "Omar Saeed", role: "Project Manager", country: "Lusail, Qatar", rating: 5, image: "https://randomuser.me/api/portraits/men/3.jpg" },
        { quote: "Terrene Engineers helped design and coordinate a mixed-use development in Riyadh. Their BIM and scheduling services improved timeline accuracy and reduced waste. Their detailed approach made project phases efficient and cost effective.", name: "Fahad Al-Qahtani", role: "Senior Engineer", country: "Riyadh, Saudi Arabia", rating: 5, image: "https://randomuser.me/api/portraits/men/4.jpg" },
        { quote: "For our commercial complex in Jeddah, Terrene Engineers provided BIM and MEP coordination. Their energy efficiency strategies cut utility planning errors and kept costs down. Their work ensured on-budget delivery with minimal issues.", name: "Nasser Al-Harbi", role: "Project Director", country: "Jeddah, Saudi Arabia", rating: 5, image: "https://randomuser.me/api/portraits/men/5.jpg" },
        { quote: "Terrene Engineers supported a high-rise residential tower in Business Bay with BIM and structural design. Their services reduced turnaround time and improved contractor coordination. Their detailed 3D visualizations minimized rework and saved costs.", name: "Aisha Al Mazrouei", role: "Project Manager", country: "Dubai, UAE", rating: 5, image: "https://randomuser.me/api/portraits/women/2.jpg" },
        { quote: "For our mall interior revamp in Dubai, Terrene Engineers provided MEP redesign and 3D visualization. Their clarity eliminated scope confusion and reduced change orders by nearly 20 percent. Their precise planning sped up delivery and reduced costs.", name: "Omar Bin Saeed", role: "Operations Director", country: "Dubai, UAE", rating: 5, image: "https://randomuser.me/api/portraits/men/6.jpg" },
        { quote: "Terrene Engineers assisted with a data center expansion in Jurong. Their BIM and MEP coordination ensured seamless system integration with zero rework. Their organized planning kept the project on schedule and budget. Their expertise made all the difference.", name: "Emily Tan", role: "Project Engineer", country: "Singapore", rating: 5, image: "https://randomuser.me/api/portraits/women/3.jpg" },
        { quote: "We relied on Terrene Engineers for a retail fit-out at Orchard Road. Their BIM support reduced material waste and helped complete the project within a tight timeline. Their detailed planning ensured smooth construction.", name: "David Ong", role: "Construction Manager", country: "Singapore", rating: 5, image: "https://randomuser.me/api/portraits/men/7.jpg" },
        { quote: "Terrene Engineers provided architectural design and BIM services for our boutique resort in Malé. Their detailed planning optimized logistics for remote site construction. Their clear communication helped avoid delays and reduced costs.", name: "Aishath Nazima", role: "Project Coordinator", country: "Malé, Maldives", rating: 5, image: "https://randomuser.me/api/portraits/women/4.jpg" },
        { quote: "Their MEP design and BIM integration for our Hulhumalé marina apartments helped reduce change orders. Their proactive coordination improved site efficiency and timeline. Their technical expertise saved time and money.", name: "Ibrahim Shifaz", role: "Operations Manager", country: "Hulhumalé, Maldives", rating: 5, image: "https://randomuser.me/api/portraits/men/8.jpg" },
        { quote: "Terrene Engineers supported a university campus expansion in Sydney with MEP and structural BIM coordination. Their efficiency reduced delays and coordination issues. Their clear documentation improved stakeholder alignment.", name: "Jessica Martin", role: "Project Manager", country: "Sydney, Australia", rating: 5, image: "https://randomuser.me/api/portraits/women/5.jpg" },
        { quote: "For a residential high-rise in Melbourne, their clash detection and 4D planning minimized rework and controlled costs. Their organized BIM workflows improved construction scheduling. Their thorough approach helped meet all deadlines.", name: "Liam O’Connor", role: "Construction Director", country: "Melbourne, Australia", rating: 5, image: "https://randomuser.me/api/portraits/men/9.jpg" },
        { quote: "Terrene Engineers contributed BIM-based planning and facade coordination for an Auckland waterfront office. Their proactive support prevented delays and improved stakeholder communication. Their detailed models streamlined installation and reduced errors.", name: "Emma Wilson", role: "Project Coordinator", country: "Auckland, New Zealand", rating: 5, image: "https://randomuser.me/api/portraits/women/6.jpg" },
        { quote: "On the Wellington civic center renewal, Terrene Engineers handled MEP design and clash-free BIM models. Their solutions improved installation efficiency and lowered change orders by over 15 percent. Their thorough coordination reduced risks and costs.", name: "James McAllister", role: "Senior Engineer", country: "Wellington, New Zealand", rating: 5, image: "https://randomuser.me/api/portraits/men/10.jpg" },
        { quote: "Terrene Engineers worked on a mixed-use tower in Berlin using advanced BIM models. Their scheduling precision reduced design revisions and saved time. Their expertise enhanced project coordination and budget control.", name: "Hans Müller", role: "Project Manager", country: "Berlin, Germany", rating: 5, image: "https://randomuser.me/api/portraits/men/11.jpg" },
        { quote: "For a residential complex in Hamburg, Terrene Engineers provided 3D planning and structural BIM services. Their proactive coordination lowered site errors and avoided budget overruns. Their detailed workflows improved construction accuracy.", name: "Claudia Schneider", role: "Construction Director", country: "Hamburg, Germany", rating: 5, image: "https://randomuser.me/api/portraits/women/7.jpg" },
        { quote: "Terrene Engineers managed BIM and MEP layout for a Kuala Lumpur high-rise. Their services improved services routing and reduced last-minute changes. Their accurate models enhanced project reporting and cost control.", name: "Nur Aisyah", role: "Project Manager", country: "Kuala Lumpur, Malaysia", rating: 5, image: "https://randomuser.me/api/portraits/women/8.jpg" },
        { quote: "Their BIM coordination in Penang’s commercial center improved site execution. Their detailed planning contributed to excellent reporting and cost management. Their expertise helped minimize delays and overruns.", name: "Ahmad Faizal", role: "Construction Director", country: "Penang, Malaysia", rating: 5, image: "https://randomuser.me/api/portraits/men/12.jpg" },
        { quote: "For a Toronto mixed-use complex, Terrene Engineers provided high-quality BIM documentation. Their pre-construction insights saved time during execution. Their coordination improved service installations and workflows.", name: "Samantha Clarke", role: "Project Manager", country: "Toronto, Canada", rating: 5, image: "https://randomuser.me/api/portraits/women/9.jpg" },
        { quote: "In Vancouver’s waterfront redevelopment, they handled structural modeling and 4D sequencing. Their clear deliverables and coordination workflows made execution smooth. Their detailed planning kept the project on schedule.", name: "Michael Thompson", role: "Senior Engineer", country: "Vancouver, Canada", rating: 5, image: "https://randomuser.me/api/portraits/men/13.jpg" },
        { quote: "Terrene Engineers supported design and planning of a commercial tower in London. Their BIM services ensured excellent coordination with MEP contractors. Their efforts saved multiple design revisions and delays. Their responsiveness was greatly appreciated.", name: "Sarah Williams", role: "Project Manager", country: "London, UK", rating: 5, image: "https://randomuser.me/api/portraits/women/10.jpg" },
        { quote: "For a Manchester residential development, they managed facade and structural integration. Their detailed 3D plans and responsiveness avoided delays and controlled costs. Their thorough coordination improved project delivery.", name: "James Bennett", role: "Construction Director", country: "Manchester, UK", rating: 5, image: "https://randomuser.me/api/portraits/men/14.jpg" },
        { quote: "Terrene Engineers helped me build my luxury villa in Nuwara Eliya with detailed BIM design and MEP planning. Their precise coordination saved me time and reduced material waste by over 10 percent. The 3D visualization gave me full clarity.", name: "Dr. Chamari Gunasekara", role: "Medical Practitioner", country: "Nuwara Eliya, Sri Lanka", rating: 5, image: "https://randomuser.me/api/portraits/women/11.jpg" },
        { quote: "For my commercial and residential building in Galle, Terrene Engineers provided architectural and structural design with BIM coordination. Their efficient planning kept the project on budget and ensured smooth execution. The whole process was seamless.", name: "Mr. Dinusha Fernando", role: "Entrepreneur", country: "Galle, Sri Lanka", rating: 5, image: "https://randomuser.me/api/portraits/men/15.jpg" },
        { quote: "We built our luxury home in Hyderabad with Terrene Engineers handling architectural design, MEP services, and BIM modeling. Their thorough planning helped avoid rework and saved us both time and money. Their professionalism made the entire experience hassle-free.", name: "Dr. Anjali Verma", role: "Specialist Consultant", country: "Hyderabad, India", rating: 5, image: "https://randomuser.me/api/portraits/women/12.jpg" },
        { quote: "Terrene Engineers designed my dental clinic in Coimbatore, including HVAC and electrical layouts. Their BIM-based approach improved space use and ensured timely project delivery with great quality. I am very satisfied with their work and service.", name: "Dr. Ravi Sankar", role: "Clinic Owner", country: "Coimbatore, India", rating: 5, image: "https://randomuser.me/api/portraits/men/16.jpg" }
    ],
   summary: {
      count: "500+",
      label: "Satisfied Customers"
    },
    featuredImage: "digitalTwinTestimonialImage",
    videoBackground: "digitalTwinTestimonialsVideo"
  }
};