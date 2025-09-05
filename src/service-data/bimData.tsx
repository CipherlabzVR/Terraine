import { PageData } from '../pages/GenericPageLayout'; // Updated import path for PageData

export const bimPageData: PageData = {
  hero: {
    title: "Building Information Modelling (BIM)",
    subtitle: "“Harnessing advanced BIM technology to plan, visualize, and manage your projects with precision”",
    description: "Harnessing BIM technology from 3D design to 9D lean construction for precise planning, efficient execution, and smarter, high-quality project delivery.",
    backgroundImage: "/bim-hero.webp", // TODO: Update with your actual image path.
    buttons: [
      { text: "REQUEST A DEMO", link: "/inquiry", variant: "primary" },
      { text: "LEARN MORE", link: "#about-us-section", variant: "secondary" }
    ]
  },
  about: {
    title: "BIM Services",
    description: "Our BIM services provide intelligent 3D modeling and coordination that optimize planning, reduce errors, and enhance collaboration, ensuring efficient project execution and delivering precise, data-driven results for every stage.",
    button: { text: "OUR TECHNOLOGY", link: "/about" },
    images: {
      main: "bimMainImage",
      secondary: "bimSecondaryImage"
    },
    stat: {
      value: "99%",
      label: "Clash Detection Accuracy"
    },
    videoBackground: "bimAboutVideo"
  },
  services: {
    superTitle: "OUR SERVICES",
    title: "Our BIM Dimensions",
    list: [
      { icon: "Box", title: "3D BIM – Digital Design & Modeling", description: "Delivering intelligent 3D models that enhance visualization, accuracy, and coordination, turning design concepts into efficient, buildable digital realities." },
      { icon: "Clock", title: "4D BIM – Time (Project Scheduling & Management)", description: "Integrating scheduling with 3D models to optimize timelines, streamline workflows, and ensure on-time, efficient project delivery." },
      { icon: "DollarSign", title: "5D BIM – Cost (Estimation and Budget Management)", description: "Linking costs with design for accurate estimation, enabling smarter budgeting, cost control, and value-driven decisions throughout projects." },
      { icon: "Leaf", title: "6D BIM – Sustainability & Energy", description: "Driving eco-friendly design with energy analysis, ensuring sustainable, efficient, and environmentally responsible construction outcomes." },
      { icon: "Building", title: "7D BIM – Facility Management", description: "Enhancing operations with digital models that streamline maintenance, asset management, and lifecycle performance of facilities." },
      { icon: "Shield", title: "8D BIM – Safety & Risk Management", description: "Integrating safety analysis into models to identify hazards early, reducing risks and ensuring secure project execution." },
      { icon: "Recycle", title: "9D BIM – Lean Construction & Productivity", description: "Maximizing efficiency with lean BIM workflows that minimize waste, improve collaboration, and boost overall construction productivity." }
    ],
    videoBackground: "bimAboutVideo"
  },
  workingSteps: {
    superTitle: "HOW IT WORKS",
    title: "Our Easy Working Steps",
    steps: [
      { icon: "Database", title: "Project Analysis & Data Collection", description: "Gather detailed project data to create accurate digital models." },
      { icon: "Users", title: "BIM Implementations & Collaboration", description: "Develop precise 3D BIM models ensuring seamless collaboration across all disciplines." },
      { icon: "SearchCheck", title: "Simulation & Optimization", description: "Optimize designs, detect clashes, and enhance efficiency before construction begins." },
      { icon: "RefreshCw", title: "Lifetime Support & Updates", description: "Enjoy continuous BIM model updates and lifetime technical support for project success." }
    ],
    backgroundImage: "/blueprint-bg.png"
  },
  // TODO: Update the placeholder data below with your specific BIM projects.
  projects: {
    superTitle: "CASE STUDIES",
    title: "Our BIM Projects in Action",
    list: [
      { image: "/pro29.png", name: "High-Rise Tower Coordination" },
      { image: "/pro9.png", name: "Infrastructure Scheduling (4D)" },
      { image: "/pro85.png", name: "Commercial Complex Costing (5D)" },
      { image: "/pro89.png", name: "Sustainable Hospital Design (6D)" },
      { image: "/pro41.png", name: "Airport Facility Management (7D)" },
      { image: "/pro1.png", name: "Industrial Plant Safety (8D)" },
      { image: "/pro13.png", name: "Lean Residential Construction (9D)" },
      { image: "/pro57.png", name: "3D MEP Modeling" }
    ],
    videoBackground: "bimAboutVideo"
  },
  cta: {
    title: "Ready to Build Smarter?",
    description: "Leverage our BIM expertise to enhance efficiency, reduce costs, and ensure the success of your next project. Contact us for a consultation.",
    buttons: [
      { text: "SCHEDULE A CONSULTATION", link: "/contact", variant: "primary" },
      { text: "VIEW CASE STUDIES", link: "/completed-projects", variant: "secondary" }
    ]
  },
  testimonials: {
    superTitle: "TESTIMONIALS",
    title: "Global Praise for Our BIM Services",
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
    featuredImage: "bimTestimonialImage",
    videoBackground: "bimTestimonialsVideo"
  }
};