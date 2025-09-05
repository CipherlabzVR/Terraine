import { PageData } from '../pages/GenericPageLayout'; 

export const materialConsultancyPageData: PageData = {
  hero: {
    title: "Material Consultancy",
    subtitle: "“Providing expert advice on premium construction materials to ensure quality, durability, and project efficiency”",
    description: "Expert material consultancy offering selection, testing, sustainable solutions, cost analysis, and advanced materials to ensure quality, durability, and efficiency for every project.",
    backgroundImage: "/material-hero.jpg", // TODO: Update with your actual image path.
    buttons: [
      { text: "GET A CONSULTATION", link: "/inquiry", variant: "primary" },
      { text: "OUR MATERIALS", link: "#about-us-section", variant: "secondary" }
    ]
  },
  about: {
    title: "Expert Material Consultancy",
    description: "Delivering expert material consultancy that blends technical knowledge with practical insights. Our approach ensures optimal material selection, cost efficiency, and quality, driving sustainable, high-performance, and reliable construction outcomes.",
    button: { text: "OUR EXPERTISE", link: "/about" },
    images: {
      main: "materialMainImage",
      secondary: "materialSecondaryImage"
    },
    stat: {
      value: "20+",
      label: "Material Categories"
    },
    videoBackground: "materialAboutVideo"
  },
  services: {
    superTitle: "OUR SERVICES",
    title: "Material Consultancy Services",
    list: [
      { icon: "ClipboardCheck", title: "Material Selection & Specification", description: "Expert guidance to choose the right materials for durability, performance, and cost-efficiency." },
      { icon: "Beaker", title: "Material Testing & Certification", description: "Ensure quality, compliance, and safety with precise testing and certification services." },
      { icon: "BadgePercent", title: "Best Material Price", description: "Access top-quality materials at the most competitive prices for smart, cost-effective projects." },
      { icon: "Leaf", title: "Sustainable & Green Material Consultancy", description: "Promote eco-friendly, sustainable materials for greener, responsible construction." },
      { icon: "Cuboid", title: "Concrete & Cementitious Material Consultancy", description: "Optimize concrete performance and longevity with expert material insights." },
      { icon: "TowerControl", title: "Steel & Metal Material Consultancy", description: "Ensure structural strength and reliability through precise steel and metal selection." },
      { icon: "Layers", title: "Polymer, Plastic & Composite Material Services", description: "Innovative solutions with advanced polymers, plastics, and composites for modern construction needs." },
      { icon: "DollarSign", title: "Material Cost Analysis & Procurement Support", description: "Reduce expenses and streamline procurement with expert material cost insights." },
      { icon: "SearchX", title: "Failure Analysis & Material Troubleshooting", description: "Identify, analyze, and resolve material failures to prevent project setbacks." },
      { icon: "FlaskConical", title: "Innovative & Advanced Materials", description: "Integrate cutting-edge materials for performance, aesthetics, and innovation." },
      { icon: "Flame", title: "Fire & Safety Material Consultancy", description: "Ensure safety compliance with expert selection of fire-resistant and protective materials." }
    ],
    videoBackground: "materialAboutVideo"
  },
  workingSteps: {
    superTitle: "HOW IT WORKS",
    title: "Our Easy Working Steps",
    steps: [
      { icon: "Clipboard", title: "Project Assessment & Analysis", description: "Evaluate your project requirements to recommend the most suitable materials." },
      { icon: "TestTube2", title: "Material Selection & Testing", description: "Identify, test, and certify materials for durability, quality, and compliance." },
      { icon: "BadgeDollarSign", title: "Procurement & Cost Optimization", description: "Source materials efficiently while reducing costs and ensuring project success." },
      { icon: "ShieldCheck", title: "Lifetime Support & Assurance", description: "Benefit in sustainable material guidance and lifetime warranty for performance reliability." }
    ],
    backgroundImage: "/blueprint-bg.png"
  },
  // TODO: Update the placeholder data below with your specific Material Consultancy projects.
  projects: {
    superTitle: "CASE STUDIES",
    title: "Our Material Expertise in Action",
    list: [
      { image: "/pro49.png", name: "High-Strength Concrete Mix" },
      { image: "/pro69.png", name: "Sustainable Timber Sourcing" },
      { image: "/pro5.png", name: "Advanced Composite Facades" },
      { image: "/pro77.png", name: "Corrosion-Resistant Steel" },
      { image: "/16.png", name: "Fire-Rated Material Selection" },
      
    ],
    videoBackground: "materialAboutVideo"
  },
  cta: {
    title: "Ready to Build with the Best?",
    description: "Ensure the success of your project with the right materials. Contact our consultants for expert advice and sourcing support.",
    buttons: [
      { text: "GET EXPERT ADVICE", link: "/contact", variant: "primary" },
      { text: "VIEW CASE STUDIES", link: "/completed-projects", variant: "secondary" }
    ]
  },
testimonials: {
    superTitle: "TESTIMONIALS",
    title: "Global Praise for Our Material Consultancy Services",
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
      label: "Materials Certified"
    },
    featuredImage: "materialTestimonialImage",
    videoBackground: "materialTestimonialsVideo"
  }
};
