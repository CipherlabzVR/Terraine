import { PageData } from '../pages/GenericPageLayout';

// The video background properties now use simple keys.
// The actual videos will be imported in the page component.

export const consultancyServicesPageData: PageData = {
  hero: {
    title: "Consultancy Services",
    subtitle: "“Expert guidance and innovative solutions to transform your ideas into successful, sustainable projects”",
    description: "Expert consultancy from Planning to Delivery with smart Project management, Engineering Design, MEP, sustainability and QA QC solutions ensuring seamless high Quality and innovative Sustainable projects.",
    backgroundImage: "/consultancy.jpg", 
    buttons: [
      { text: "CONTACT US", link: "/inquiry", variant: "primary" },
      { text: "EXPLORE SERVICES", link: "#about-us-section", variant: "secondary" }
    ]
  },
  about: {
    title: "Engineering Consultancy Services",
    description: "Our consultancy services deliver expert insights and tailored Engineering solutions that optimize your projects, reduce risks, and maximize efficiency, ensuring every decision drive success and elevates your business above the competition.",
    button: { text: "ABOUT US", link: "/about" },
    images: {
      main: "aboutMainImage", 
      secondary: "aboutSecondaryImage" 
    },
    stat: {
      value: "20+",
      label: "Years of Excellence"
    },
    videoBackground: "aboutVideo" // Key for the video
  },
  services: {
    superTitle: "OUR SERVICES",
    title: "We Provide Consultancy Services",
    list: [
      { icon: "Briefcase", title: "Smart Project Management", description: "Optimizing project delivery with real-time monitoring, efficient resource allocation, and innovative strategies that ensure timely, cost-effective, and successful outcomes" },
      { icon: "SlidersHorizontal", title: "Cost & Value Engineering", description: "Maximizing project value and minimizing costs through expert analysis, innovative alternatives, and efficient resource management without compromising quality" },
      { icon: "Layers", title: "BIM & Digital Twin", description: "Transforming project planning and execution with intelligent 3D models and real-time digital replicas for precision and collaboration" },
      { icon: "Search", title: "Geotechnical Investigation", description: "Providing reliable soil and site analysis to ensure safe, durable, and optimized foundation and structural designs" },
      { icon: "Building", title: "Structural Engineering", description: "Designing robust, safe, and innovative structures with advanced analysis, ensuring efficiency, compliance, and long-term performance" },
      { icon: "PenTool", title: "Architectural Design", description: "Delivering creative, functional, and aesthetically compelling designs that harmonize with client vision and project goals" },
      { icon: "Palette", title: "Interior Design", description: "Transforming spaces with stylish, functional, and personalized interior solutions that enhance comfort and visual appeal" },
      { icon: "Package", title: "Material Consultancy", description: "Offering expert guidance on material selection and usage, ensuring quality, cost-effectiveness, and sustainability" },
      { icon: "Zap", title: "MEP Engineering", description: "Designing efficient mechanical, electrical, and plumbing systems that optimize performance, safety, and energy efficiency" },
      { icon: "Zap", title: "MEP & HVAC System Design", description: "Creating innovative, energy-efficient HVAC and MEP solutions that enhance comfort, performance, and operational reliability" },
      { icon: "Globe", title: "Environmental Consulting", description: "Promoting eco-friendly, sustainable practices to minimize impact while maximizing efficiency and regulatory compliance" },
      { icon: "ShieldCheck", title: "Regulatory & Compliance", description: "Ensuring projects meet all legal, safety, and industry standards with precise guidance and expert oversight" },
      { icon: "Map", title: "Surveying & Digital Mapping", description: "Delivering accurate land and site data using advanced surveying and digital mapping technologies for precise planning" },
      { icon: "UserCheck", title: "Construction Supervision", description: "Monitoring construction with rigorous quality assurance, timely inspections, and proactive problem-solving for flawless project execution" },
      { icon: "Beaker", title: "Field & Laboratory Testing", description: "Providing precise material and structural testing to ensure safety, compliance, and long-term performance" },
      { icon: "FileText", title: "Technical Reports", description: "Producing clear, accurate, and actionable reports that inform decisions and optimize project outcomes" }
    ],
    videoBackground: "aboutVideo" // Key for the video
  },
  workingSteps: {
    superTitle: "HOW IT WORKS",
    title: "Our Easy Working Steps",
    steps: [
      { icon: "ClipboardList", title: "Understanding Your Vision", description: "We analyze your goals to craft personalized, high-impact consultancy strategies" },
      { icon: "DraftingCompass", title: "Tailored Strategy Development", description: "Design innovative, efficient sustainable solutions for maximum growth and project success" },
      { icon: "PenTool", title: "Implementation & Support", description: "Execute strategies seamlessly while providing expert guidance every step of the project phase" },
      { icon: "HardHat", title: "Lifetime Assurance & Success", description: "Enjoy continuous support and expert guidance, ensuring long-term success and reliability" }
    ],
    backgroundImage: "/blueprint-bg.png" 
  },
  projects: {
    superTitle: "OUR PROJECTS",
    title: "Our Outstanding Consultancy Works",
    list: [
      { image: "/project-1.png", name: "Modern Residence" },
      { image: "/project-2.jpeg", name: "Commercial Hub" },
      { image: "/project-3.jpg", name: "Urban Apartment" },
      { image: "/showcase-4.jpeg", name: "Luxury Villa" },
      { image: "/project-1.png", name: "Corporate Headquarters" },
      { image: "/project-2.jpeg", name: "Retail Center" },
      { image: "/project-3.jpg", name: "Loft Conversion" },
      { image: "/showcase-4.jpeg", name: "Seaside Estate" }
    ],
    videoBackground: "aboutVideo" // Key for the video
  },
  cta: {
    title: "Ready to Transform Your Vision?",
    description: "Let our architectural consultants help bring your vision to life with innovative design solutions that exceed expectations.",
    buttons: [
      { text: "SCHEDULE A CONSULTATION", link: "/contact", variant: "primary" },
      { text: "VIEW PORTFOLIO", link: "/completed-projects", variant: "secondary" }
    ]
  },
  testimonials: {
    superTitle: "TESTIMONIALS",
    title: "Global Praise for Our Consultancy Services",
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
    featuredImage: "testimonialFeaturedImage", 
    videoBackground: "testimonialsVideo" // Key for the video
  }
};