import { PageData } from '../pages/GenericPageLayout'; // Updated import path for PageData

// NOTE: Please update the placeholder data for 'projects' and 'testimonials' with relevant content.

export const constructionPageData: PageData = {
  hero: {
    title: "Construction",
    subtitle: "“Building excellence from foundation to Completion, delivering quality, durable, and innovative structures in every project with lifetime warranty”",
    description: "We deliver excellence across residential, commercial, industrial, and infrastructure projects through sustainable construction practices. Our services include timber, steel, cladding, aluminum works, and professional subcontracting solutions, all carried out with a commitment to using high-quality materials and reliable execution.",
    backgroundImage: "/con-hero.jpg", // TODO: Update with your actual image path.
    buttons: [
      { text: "GET A QUOTE", link: "/inquiry", variant: "primary" },
      { text: "OUR PROJECTS", link: "/completed-projects", variant: "secondary" }
    ]
  },
  about: {
    title: "Sustainable Construction Services",
    description: "Our sustainable construction services combine skilled craftsmanship, innovative techniques, and timely execution to deliver durable, high-quality structures that exceed expectations, ensuring every project is completed efficiently and with exceptional precision.",
    button: { text: "LEARN MORE", link: "/about" },
    images: {
      main: "constructionMainImage",
      secondary: "constructionSecondaryImage"
    },
    stat: {
      value: "30+",
      label: "Years of Building Excellence"
    },
    videoBackground: "constructionAboutVideo"
  },
  services: {
    superTitle: "OUR SERVICES",
    title: "Construction Services",
    list: [
      { icon: "Home", title: "Residential Construction", description: "Building stylish, durable residence with modern designs and quality craftsmanship, creating comfortable living spaces tailored to family needs and lifestyles." },
      { icon: "Building2", title: "Commercial Construction", description: "Delivering efficient, innovative commercial spaces designed for functionality, branding, and long-term business success." },
      { icon: "Factory", title: "Industrial Construction", description: "Constructing robust industrial facilities with precision, ensuring safety, efficiency, and adaptability for modern production and operations." },
      { icon: "Tractor", title: "Infrastructure Construction", description: "Developing reliable infrastructure projects that enhance connectivity, support growth, and deliver lasting community and economic benefits." },
      { icon: "Car", title: "Road Construction", description: "Creating smooth, durable, and safe roadways with advanced techniques, ensuring long-lasting performance and seamless transportation." },
      { icon: "TreePine", title: "Timber Construction", description: "Designing sustainable timber structures that blend natural aesthetics with strength, efficiency, and eco-friendly solutions." },
      { icon: "TowerControl", title: "Steel Construction", description: "Delivering modern steel structures with unmatched strength, flexibility, and durability to support complex architectural and engineering needs." },
      { icon: "Blocks", title: "Precast Construction", description: "Delivering high-quality precast solutions that ensure speed, precision, and durability, while enhancing efficiency and sustainability across diverse construction projects." },
      { icon: "Layers", title: "Cladding Engineering", description: "Providing innovative cladding solutions that enhance building aesthetics, improve energy efficiency, and ensure long-lasting protection." },
      { icon: "PanelTop", title: "Aluminum Fabrication", description: "Crafting precision aluminum works that combine durability, lightweight performance, and sleek modern finishes for versatile construction needs." },
      { icon: "Users", title: "Subcontracting", description: "Offering reliable subcontracting services with skilled teams, timely delivery, and high-quality standards to support successful project completion." },
      { icon: "Blocks", title: "Construction Materials", description: "Supplying high-quality sustainable construction materials that ensure durability, cost-efficiency, and consistent performance for every project scale." },
    ],
    videoBackground: "constructionAboutVideo"
  },
  workingSteps: {
    superTitle: "HOW IT WORKS",
    title: "Our Easy Working Steps",
    steps: [
      { icon: "Map", title: "Site Assessment & Planning", description: "Evaluate your site to create a precise, efficient construction roadmap." },
      { icon: "HardHat", title: "Execution & Quality Building", description: "Construct with skilled teams, premium materials, and attention to every detail." },
      { icon: "ClipboardCheck", title: "Inspection & Finishing Touches", description: "Ensure perfect completion with quality checks and flawless sustainable finishes." },
      { icon: "ShieldCheck", title: "Lifetime Warranty & Support", description: "Enjoy peace of mind with our lifetime warranty and continuous expert’s support." }
    ],
    backgroundImage: "/blueprint-bg.png"
  },
  // TODO: Update the placeholder data below with your specific Construction projects.
  projects: {
    superTitle: "OUR WORK",
    title: "Our Landmark Projects",
    list: [
      { image: "/pro29.png", name: "Modern Residential Complex" },
      { image: "/pro97.png", name: "Downtown Commercial Tower" },
      { image: "/pro65.png", name: "State-of-the-Art Factory" },
      { image: "/15.jpg", name: "City Tower" },
      { image: "/pro33.png", name: "Timber Frame Pavilion" },
      { image: "/17.jpg", name: "Steel Skeleton Skyscraper" },
      { image: "/pro29.png", name: "Precast Apartment Building" },
      { image: "/pro17.png", name: "Aluminum Facade Office" }
    ],
    videoBackground: "constructionAboutVideo"
  },
  cta: {
    title: "Ready to Build Your Future?",
    description: "Let's lay the foundation for your next project. Our team is ready to build your vision with quality, integrity, and a lifetime warranty.",
    buttons: [
      { text: "START YOUR PROJECT", link: "/contact", variant: "primary" },
      { text: "VIEW OUR PORTFOLIO", link: "/completed-projects", variant: "secondary" }
    ]
  },
  // TODO: Update the placeholder data below with testimonials about your Construction services.
  testimonials: {
    superTitle: "TESTIMONIALS",
    title: "Global Praise for Our Constructions",
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
    featuredImage: "constructionTestimonialImage",
    videoBackground: "constructionTestimonialsVideo"
  }
};