import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowDown, X, Folder, ArrowRight, CheckCircle } from 'lucide-react';

// --- Single, consolidated import for all blog images ---
import blogImages from "../assert/blog";

// --- Updated and Detailed Blog Data (12 Posts) ---
const allBlogPosts = [
  // Post 1
  {
    id: 1,
    cardTitle: "How BIM Is Transforming Modern Construction",
    image: blogImages.blogImage1,
    category: "BIM Services",
    description: "In an industry historically reliant on paper-based plans and fragmented communication, Building Information Modeling (BIM) has emerged as a game changer.",
    mainTitle: "How BIM Is Transforming Modern Construction",
    subTitle: "Revolutionizing Construction: The Role of BIM in Modern Project Delivery",
    introduction: "In an industry historically reliant on paper-based plans and fragmented communication, Building Information Modeling (BIM) has emerged as a game changer. Today, construction projects demand precision, collaboration, and sustainability. BIM delivers all three and more.",
    sections: [
      {
        heading: "What is BIM?",
        content: "BIM is a digital representation of the physical and functional characteristics of a facility. It goes beyond 2D drawings to create collaborative 3D models that integrate architecture, engineering, and construction (AEC) disciplines.",
      },
      {
        heading: "Key Benefits",
        isList: true,
        items: [
          { title: "Improved Collaboration", text: "All stakeholders from architects to contractors work on a single shared model." },
          { title: "Risk Mitigation", text: "Clash detection ensures issues are resolved in the planning stage, saving time and cost." },
          { title: "Cost and Time Savings", text: "BIM enables accurate scheduling, cost estimation, and resource management." },
        ],
      },
      {
        heading: "Case Example",
        content: "In one of our recent mid-rise residential projects, using BIM reduced rework by 35% and shortened the timeline by 18%. Our clients received timely updates through real-time 3D models.",
      },
      {
        heading: "Future Outlook",
        content: "The integration of BIM with AI and Digital Twin technology is on the horizon. These smart systems will allow predictive analytics, ongoing facility monitoring, and lifecycle management.",
      }
    ],
    callToAction: "Want your project to benefit from cutting-edge BIM technology? Contact our BIM experts today.",
  },
  // Post 2
  {
    id: 2,
    cardTitle: "Why You Need a Planning Engineer for Your Next Project",
    category: "Project Management",
    image: blogImages.blogImage2,
    description: "Behind every well-executed construction project is a Planning Engineer ensuring timelines, budgets, and resources are optimally managed. Here's why your project needs one.",
    mainTitle: "Why You Need a Planning Engineer for Your Next Project",
    subTitle: "Planning Engineers: The Backbone of Every Successful Construction Project",
    introduction: "Behind every well-executed construction project is a Planning Engineer ensuring timelines, budgets, and resources are optimally managed. Here's why your project needs one.",
    sections: [
       { heading: "Who is a Planning Engineer?", content: "A Planning Engineer oversees the development and tracking of project schedules, forecasts budgets, coordinates activities, and manages risk." },
       {
        heading: "Core Responsibilities",
        isList: true,
        items: [
            { title: "Project Scheduling", text: "Using tools like Primavera P6 or MS Project." },
            { title: "Cost Forecasting", text: "Predicting and managing project costs." },
            { title: "Risk Management", text: "Identifying risks and mitigation planning." }
        ]
      },
      {
        heading: "Real-life Impact",
        content: "Our involvement in a large infrastructure project led to a 22% improvement in schedule adherence and helped the client save over 10% in projected costs.",
      },
      {
        heading: "How We Help",
        content: "We bring internationally certified Planning Engineers equipped with modern tools to keep your project on track and efficient.",
      },
    ],
    callToAction: "Ready to plan for success? Schedule a consultation with our planning team."
  },
  // Post 3
  {
    id: 3,
    cardTitle: "Top 5 Mistakes to Avoid in Structural Design",
    category: "Structural Engineering",
    image: blogImages.blogImage3,
    description: "Structural design is the foundation of safe, durable buildings. Even minor missteps can lead to major consequences. Learn how we avoid them.",
    mainTitle: "Top 5 Mistakes to Avoid in Structural Design",
    subTitle: "Avoiding Disaster: Top 5 Structural Design Mistakes and How We Prevent Them",
    introduction: "Structural design is the foundation of safe, durable buildings. Even minor missteps can lead to major consequences. Here are the top 5 design mistakes and how we ensure they're avoided.",
    sections: [
        { heading: "Mistake 1: Poor Site Data Analysis", content: "Without accurate geotechnical surveys, the foundation design can fail." },
        { heading: "Mistake 2: Ignoring Load Paths and Stability", content: "Overlooking how forces travel through a structure can led to weak points." },
        { heading: "Mistake 3: Overlooking Future Expansions", content: "Failing to design for future additions limits functionality." },
        { heading: "Mistake 4: Misuse of Design Tools", content: "Incorrect use of structural software can create calculation errors." },
        { heading: "Mistake 5: Poor Coordination with Other Disciplines", content: "Designs that don't align with MEP or architectural layouts cause costly rework." },
        { heading: "Our Prevention Strategy", content: "We use rigorous QA/QC protocols, collaborative modeling, and peer reviews to ensure design integrity." },
    ],
    callToAction: "Ensure your structure stands the test of time. Talk to our structural experts."
  },
  // Post 4
  {
    id: 4,
    cardTitle: "AI in Civil Engineering – The Future Has Begun",
    category: "AI Engineering",
    image: blogImages.blogImage4,
    description: "The integration of Artificial Intelligence in civil engineering is no longer just a concept—it’s a reality that’s shaping how projects are designed and monitored.",
    mainTitle: "AI in Civil Engineering – The Future Has Begun",
    subTitle: "Civil Engineering Meets AI: Smarter, Safer, and More Predictive",
    introduction: "The integration of Artificial Intelligence in civil engineering is no longer just a concept—it’s a reality that’s shaping how projects are designed, monitored, and maintained.",
    sections: [
        {
            heading: "What AI Brings",
            isList: true,
            items: [
                { title: "Predictive Maintenance", text: "AI analyzes patterns in wear and usage to forecast maintenance." },
                { title: "Smart Scheduling", text: "Algorithms optimize task sequences and resource allocation." },
                { title: "Automated Risk Analysis", text: "AI identifies potential delays and hazards early." }
            ]
        },
        { heading: "Use Cases", content: "We’ve implemented drone-based AI inspections to monitor progress and detect safety issues automatically. It’s reduced manual inspection time by 40%." },
        { heading: "Future Outlook", content: "Coupled with BIM and IoT, AI will form the backbone of Digital Twins, enabling real-time project and asset management." },
    ],
    callToAction: "Join the AI revolution in engineering. Partner with us for smarter solutions."
  },
  // Post 5
  {
    id: 5,
    cardTitle: "Site Safety Best Practices Every Client Should Know",
    category: "Construction",
    image: blogImages.blogImage5,
    description: "Safety is not solely the responsibility of the contractor; it is a shared commitment. As a client, being aware of safety best practices contributes to project success.",
    mainTitle: "Site Safety Best Practices Every Client Should Know",
    subTitle: "Site Safety Essentials: What Every Construction Client Must Understand",
    introduction: "Safety is not solely the responsibility of the contractor; it is a shared commitment. As a client, being aware of safety best practices contributes significantly to the overall success of the project.",
    sections: [
        {
            heading: "Top Practices",
            isList: true,
            items: [
                { title: "Daily Safety Briefings", text: "Start each day with focused awareness." },
                { title: "Mandatory PPE Compliance", text: "Enforcing proper gear at all times." },
                { title: "Access Control & Signage", text: "Clearly defined zones and restricted areas." },
                { title: "Regular Safety Audits", text: "Scheduled and surprise checks to ensure standards." }
            ]
        },
        { heading: "Our Commitment", content: "We adhere to ISO and OSHA standards and continuously train our teams to ensure maximum safety on every site." },
    ],
    callToAction: "Safety starts with partnership. Get in touch to learn about our safety-first approach."
  },
  // Post 6
  {
    id: 6,
    cardTitle: "How Smart Project Management Is Revolutionizing Construction",
    category: "Project Management",
    image: blogImages.blogImage6,
    description: "Embracing innovative tools and intelligent strategies, smart management transforms how projects are planned, executed, and monitored.",
    mainTitle: "How Smart Project Management Is Revolutionizing Modern Construction Workflows",
    subTitle: "Smart Project Management: Revolutionizing Construction Efficiency & Success",
    introduction: "In today’s fast-paced construction and engineering world, Smart Project Management is the key to delivering projects on time, within budget, and beyond expectations. Embracing innovative tools and intelligent strategies, smart management transforms how projects are planned, executed, and monitored.",
    sections: [
        { heading: "What is Smart Project Management?", content: "Smart Project Management combines advanced technology, real-time data, and collaborative workflows to enhance every phase of the project lifecycle, from initial planning to successful completion." },
        {
            heading: "Benefits of Smart Project Management for Your Project",
            isList: true,
            items: [
                { title: "Improved timeline adherence", text: "and reduced delays." },
                { title: "Cost savings", text: "through precise budgeting and resource optimization." },
                { title: "Enhanced communication", text: "and coordination among stakeholders." }
            ]
        }
    ],
    callToAction: "Ready to elevate your next project with smart management solutions? Contact us today to learn how we can help make your vision a reality."
  },
  // Post 7
  {
    id: 7,
    cardTitle: "The Power of Cost & Value Engineering in Maximizing Project ROI",
    image: blogImages.blogImage7,
    category: "Consultancy Services",
    description: "In construction, success goes beyond simply building; it’s about building smart. This involves maximizing value while maintaining the highest standards of quality and safety.",
    mainTitle: "The Power of Cost & Value Engineering in Maximizing Project ROI",
    subTitle: "Cost & Value Engineering: Maximize Quality While Minimizing Costs in Construction",
    introduction: "In construction, success goes beyond simply building; it’s about building smart. This involves maximizing value while maintaining the highest standards of quality and safety. Cost and Value Engineering makes this possible by balancing innovation, efficiency, and economy.",
    sections: [
      { heading: "What is Cost & Value Engineering?", content: "Cost & Value Engineering is a systematic approach to improving the value of a project by analyzing its functions, materials, and processes. It ensures that every rupee invested enhances the performance, durability, and functionality of the structure, avoiding unnecessary costs." },
      {
        heading: "Benefits of Cost & Value Engineering for Your Project",
        isList: true,
        items: [
          { title: "Reduced Construction Costs", text: "Achieve substantial savings without compromising quality." },
          { title: "Smart Design Decisions", text: "Choose designs that serve core functions efficiently." },
          { title: "Boosted ROI", text: "Get better outcomes from your project investment." },
        ],
      }
    ],
    callToAction: "Looking to stretch your construction budget without cutting corners? Contact us today to explore how our cost and value engineering solutions can transform your next project.",
  },
  // Post 8
  {
    id: 8,
    cardTitle: "Why BIM & Digital Twin Technologies Are Game Changers",
    image: blogImages.blogImage8,
    category: "BIM & Digital Twin",
    description: "At the core of this transformation are Building Information Modeling (BIM) and Digital Twin technology, which offer exceptional clarity, coordination and control.",
    mainTitle: "Why BIM & Digital Twin Technologies Are Game Changers in Construction",
    subTitle: "BIM & Digital Twin Consultancy: Transforming the Future of Construction with Smart Data",
    introduction: "The construction industry is rapidly advancing with the integration of technology. At the core of this transformation are Building Information Modeling (BIM) and Digital Twin technology, which offer exceptional clarity, coordination and control throughout the entire lifecycle of a building.",
    sections: [
      { heading: "What is BIM & Digital Twin Consultancy?", content: "Building Information Modeling (BIM) is the process of developing a digital representation of a facility's physical and functional characteristics. A Digital Twin is a real-time virtual replica of a built asset that mirrors its current condition, performance and usage." },
      {
        heading: "Benefits of BIM & Digital Twin for Your Project",
        isList: true,
        items: [
            { title: "Improved design accuracy", text: "and coordination." },
            { title: "Faster project delivery", text: "with real-time collaboration." },
            { title: "Enhanced building performance", text: "monitoring and facility management post-construction." }
        ]
      }
    ],
    callToAction: "Ready to future-proof your construction project with BIM and Digital Twin technology? Get in touch with us today."
  },
  // Post 9
  {
    id: 9,
    cardTitle: "Beneath the Surface: The Importance of Geotechnical Investigation",
    image: blogImages.blogImage9,
    category: "Consultancy Services",
    description: "Understanding soil behavior and subsurface conditions is crucial to avoiding costly surprises and ensuring long-term stability. Geotechnical and soil investigation is the first and most critical step.",
    mainTitle: "Beneath the Surface: How Geotechnical Investigation Ensures Strong Foundations",
    subTitle: "Geotechnical & Soil Investigation: Building Strong Foundations with Confidence",
    introduction: "Every great structure begins with the ground beneath it. Understanding soil behavior and subsurface conditions is crucial to avoiding costly surprises and ensuring long-term stability. Geotechnical and soil investigation is the first and most critical step in any construction project.",
    sections: [
        { heading: "What is Geotechnical & Soil Investigation?", content: "Geotechnical and soil investigation involves the study of soil properties, rock formations, groundwater levels, and other subsurface conditions that can affect the design and safety of a structure." },
        { heading: "How Our Company Excels", content: "Terrene Engineers partners with certified laboratories and uses advanced field-testing techniques such as borehole drilling, standard penetration tests (SPT), and cone penetration tests (CPT)." }
    ],
    callToAction: "Planning a construction project? Start with a strong foundation. Contact us today for professional geotechnical services."
  },
  // Post 10
  {
    id: 10,
    cardTitle: "Rethinking Structural Design: Innovations Shaping the Future",
    image: blogImages.blogImage10,
    category: "Structural Engineering",
    description: "From towering skyscrapers to elegant homes, every structure depends on the strength and precision of its design. Structural engineering shapes safe, functional, and resilient buildings.",
    mainTitle: "Rethinking Structural Design: Innovations Shaping the Future of Engineering",
    subTitle: "Structural Engineering Excellence: Designing Safety, Strength, and Sustainability",
    introduction: "From towering skyscrapers to elegant homes, every structure depends on the strength and precision of its design. Structural engineering plays a critical role in shaping safe, functional, and resilient buildings that stand the test of time.",
    sections: [
        { heading: "What is Structural Engineering?", content: "Structural engineering involves the analysis and design of load-bearing elements like beams, columns, slabs, and foundations to ensure that buildings and infrastructure can withstand all applied forces." },
        {
            heading: "Benefits of Structural Engineering for Your Project",
            isList: true,
            items: [
                { title: "Reliable load-bearing design", text: "for safety and compliance." },
                { title: "Cost-effective structural systems", text: "with optimal material usage." },
                { title: "Increased durability", text: "and long-term performance." }
            ]
        }
    ],
    callToAction: "If you are seeking a structural engineering partner who delivers strength, precision and innovation, contact us today."
  },
  // Post 11
  {
    id: 11,
    cardTitle: "From Sketch to Skyline: The Power of Modern Architecture",
    image: blogImages.blogImage11,
    category: "Architectural Design",
    description: "Architecture is more than just structure; it is a fusion of art, science and vision. A well-designed space performs efficiently and enriches the experience of its users.",
    mainTitle: "From Sketch to Skyline: How Modern Architecture is Redefining Urban Design",
    subTitle: "Architectural Design That Inspires: Blending Creativity, Function, and Purpose",
    introduction: "Architecture is more than just structure; it is a fusion of art, science and vision. A well-designed space not only looks appealing but also performs efficiently and enriches the experience of its users. Professional architectural design guarantees that every aspect of your project is purposeful, sustainable and visually impactful.",
    sections: [
        { heading: "What is Architectural Design?", content: "Architectural design involves conceptualizing and planning the layout, form, aesthetics, and function of built environments. It considers spatial planning, safety, structural systems, materials, and local regulations." }
    ],
    callToAction: "Ready to turn your ideas into a design that works and inspires? Contact us to collaborate on an architectural solution."
  },
  // Post 12
  {
    id: 12,
    cardTitle: "The Art of Space: How Interior Design Impacts Environments",
    image: blogImages.blogImage12,
    category: "Interior Design",
    description: "The interior of a space is where people live, work and find comfort. Interior design transforms empty rooms into meaningful environments that reflect personality, purpose and lifestyle.",
    mainTitle: "The Art of Space: How Interior Design Impacts Living & Working Environments",
    subTitle: "Interior Design with Purpose: Creating Beautiful, Functional Spaces That Reflect You",
    introduction: "The interior of a space is more than just walls and furniture; it is where people live, work and find comfort. Interior design transforms empty rooms into meaningful environments that reflect personality, purpose and lifestyle. It combines beauty with practicality to create lasting impressions.",
    sections: [
      {
        heading: "What is Interior Design?",
        content: "Interior design is the art and science of enhancing the interior of a space to achieve a healthier and more aesthetically pleasing environment. It includes space planning, material selection, color coordination, lighting, furniture layout, and décor to meet both functional and emotional needs."
      },
      {
        heading: "How Our Company Excels in Interior Design",
        content: "Terrene Engineers offers custom interior design solutions for residential, commercial, and hospitality spaces. Our designers work closely with clients to understand their style, needs, and budget. We combine creative vision with technical expertise to craft interiors that are both visually stunning and practically efficient."
      },
      {
        heading: "Benefits of Interior Design for Your Project",
        isList: true,
        items: [
          { title: "Personalized Spaces", text: "Spaces that reflect your personality or brand identity." },
          { title: "Optimized Layouts", text: "For better comfort and usability." },
          { title: "Smart Material Choices", text: "For durability and visual impact." },
          { title: "Enhanced Ambiance", text: "Enhanced lighting and ambiance for every room." },
          { title: "Increased Property Value", text: "Increased property value and long-term appeal." }
        ]
      },
      {
        heading: "Why Choose Us for Interior Design?",
        content: "Our interior design team brings a unique balance of creativity, precision, and personalized service. With a strong focus on functionality, aesthetics, and budget-friendly execution, Terrene Engineers transforms ordinary spaces into exceptional experiences."
      }
    ],
    callToAction: "Looking to redesign your space with style and function in mind? Reach out today to discover how our interior design services can bring your vision to life."
  },
  {
    id: 13,
    cardTitle: "Building Smarter: How Material Consultancy Drives Better Project Outcomes",
    image: blogImages.blogImage13,
    category: "Material Consultancy",
    description: "The durability, cost, sustainability and performance of your project all rely on intelligent material selection and consultancy.",
    mainTitle: "Building Smarter: How Material Consultancy Drives Better Project Outcomes",
    subTitle: "Material Consultancy That Builds Better: Choosing the Right Materials for Smarter Construction",
    introduction: "Choosing the right construction materials is not only a technical decision but also a strategic one. The durability, cost, sustainability and performance of your project all rely on intelligent material selection. Material consultancy guarantees that every choice aligns with your design, budget and long-term objectives.",
    sections: [
      {
        heading: "What is Material Consultancy?",
        content: "Material consultancy involves advising on the selection, sourcing, and application of construction and interior materials. It considers factors like structural performance, aesthetics, environmental impact, local availability, and cost-effectiveness to guide clients toward the best options for their specific project needs."
      },
      {
        heading: "How Our Company Excels in Material Consultancy",
        content: "Terrene Engineers provides expert consultancy on structural, architectural, interior, and finishing materials. We help clients balance quality and cost while considering environmental conditions, load requirements, lifecycle value, and design compatibility. Our network includes trusted suppliers and manufacturers to ensure product authenticity and timely delivery."
      },
      {
        heading: "Benefits of Material Consultancy for Your Project",
        isList: true,
        items: [
          { title: "Informed Decisions", text: "Informed decisions on materials that match your project’s demands." },
          { title: "Cost Savings", text: "Cost savings through alternative options without compromising quality." },
          { title: "Improved Sustainability", text: "Improved sustainability and energy efficiency." },
          { title: "Enhanced Durability", text: "Enhanced durability, aesthetics, and performance." },
          { title: "Reduced Waste", text: "Reduced waste and construction time." }
        ]
      },
      {
        heading: "Why Choose Us for Material Consultancy?",
        content: "With experience in both design and execution, Terrene Engineers provides a comprehensive understanding of how materials perform in real-world conditions. Whether you are sourcing materials for a home, high-rise or infrastructure project, we guide you to options that make sense technically, financially and aesthetically."
      }
    ],
    callToAction: "Need guidance in selecting the right materials for your next project? Contact our team today to unlock expert material consultancy that adds value from the ground up."
  },
  // Post 13
{
    id: 14,
    cardTitle: "Behind the Walls: Why MEP Engineering Is the Backbone of Modern Buildings",
    image: blogImages.blogImage14, // Make sure blogImage13 exists in your images index
    category: "MEP Engineering",
    description: "Mechanical, Electrical, and Plumbing (MEP) systems are the hidden backbone of every modern building, ensuring comfort, safety, and operational efficiency.",
    mainTitle: "Behind the Walls: Why MEP Engineering Is the Backbone of Modern Buildings",
    subTitle: "MEP Engineering: Powering Efficient, Safe, and Sustainable Building Systems",
    introduction: "Mechanical, Electrical, and Plumbing (MEP) systems are the hidden backbone of every modern building. Effective MEP engineering ensures comfort, safety, and operational efficiency, making your building not just functional but sustainable and user-friendly.",
    sections: [
      {
        heading: "What is MEP Engineering?",
        content: "MEP engineering involves the design, installation, and maintenance of mechanical, electrical, and plumbing systems within buildings. This includes HVAC, lighting, power distribution, water supply, drainage, fire protection, and more, all integrated to meet building codes and occupant needs."
      },
      {
        heading: "How Our Company Excels in MEP Engineering",
        content: "Terrene Engineers delivers comprehensive MEP solutions that are tailored to each project’s requirements. We use advanced design software and collaborate closely with architects and structural engineers to create integrated systems that optimize performance and reduce energy consumption."
      },
      {
        heading: "Benefits of MEP Engineering for Your Project",
        isList: true,
        items: [
          { title: "Energy Efficiency", text: "Improved energy efficiency and reduced operating costs." },
          { title: "Occupant Comfort", text: "Enhanced occupant comfort and safety." },
          { title: "Regulatory Compliance", text: "Compliance with international and local regulations." },
          { title: "Seamless Integration", text: "Seamless integration with building design." },
          { title: "Future-Ready Systems", text: "Future-ready systems that support sustainability goals." }
        ]
      },
      {
        heading: "Why Choose Us for MEP Engineering?",
        content: "Our experienced MEP engineers combine technical expertise with practical knowledge to deliver robust, innovative, and cost-effective building systems. We prioritize quality and reliability to ensure your building performs optimally throughout its lifecycle."
      }
    ],
    callToAction: "Looking for expert MEP engineering services that power your building efficiently and safely? Contact us today to discuss how we can support your next project."
  },
  // Post 14
  {
    id: 15,
    cardTitle: "Mastering Climate Control: How HVAC Design Elevates Building Efficiency",
    image: blogImages.blogImage15, // Make sure blogImage14 exists in your images index
    category: "MEP & HVAC Design",
    description: "The comfort and health of building occupants heavily depend on efficient heating, ventilation, and air conditioning (HVAC) systems.",
    mainTitle: "Mastering Climate Control: How HVAC Design Elevates Building Efficiency",
    subTitle: "MEP & HVAC System Design: Creating Comfortable and Energy-Efficient Environments",
    introduction: "The comfort and health of building occupants heavily depend on efficient heating, ventilation, and air conditioning (HVAC) systems. When combined with expert MEP system design, these elements ensure buildings are safe, functional, and energy-conscious.",
    sections: [
      {
        heading: "What is MEP & HVAC System Design?",
        content: "MEP & HVAC system design focuses on planning and engineering the mechanical, electrical, plumbing, heating, ventilation, and air conditioning systems of a building. The goal is to optimize indoor air quality, thermal comfort, and energy efficiency while meeting regulatory standards."
      },
      {
        heading: "How Our Company Excels in MEP & HVAC System Design",
        content: "Terrene Engineers employs state of the art design tools and simulation software to develop HVAC and MEP systems tailored to the unique needs of each project. Our multidisciplinary team collaborates closely to integrate these systems seamlessly within the architectural and structural framework."
      },
      {
        heading: "Benefits of MEP & HVAC System Design for Your Project",
        isList: true,
        items: [
          { title: "Air Quality", text: "Enhanced indoor air quality and occupant comfort." },
          { title: "Energy Savings", text: "Energy savings through efficient system design and controls." },
          { title: "Full Compliance", text: "Compliance with health, safety, and environmental regulations." },
          { title: "Reduced Costs", text: "Reduced maintenance and operating costs." },
          { title: "Scalable Designs", text: "Scalable designs that accommodate future upgrades." }
        ]
      },
      {
        heading: "Why Choose Us for MEP & HVAC System Design?",
        content: "With a focus on innovation, sustainability, and precision, Terrene Engineers provides comprehensive MEP and HVAC solutions that improve building performance and occupant well-being. Our expertise ensures systems are reliable, effective, and cost-efficient."
      }
    ],
    callToAction: "Ready to design MEP and HVAC systems that deliver comfort and efficiency? Contact us today to discuss your project requirements and discover our tailored solutions."
  },
  // Post 15
  {
    id: 16,
    cardTitle: "Sustainable by Design: How Environmental Consulting Shapes Greener Projects",
    image: blogImages.blogImage16, // Make sure blogImage15 exists in your images index
    category: "Sustainability Consulting",
    description: "Environmental and sustainability consulting helps projects reduce their ecological footprint while maximizing resource efficiency.",
    mainTitle: "Sustainable by Design: How Environmental Consulting Shapes Greener Projects",
    subTitle: "Environmental & Sustainability Consulting: Building a Greener, More Responsible Future",
    introduction: "Sustainability is no longer optional in construction; it is essential. Environmental and sustainability consulting helps projects reduce their ecological footprint while maximizing resource efficiency and ensuring compliance with green building standards.",
    sections: [
      {
        heading: "What is Environmental & Sustainability Consulting?",
        content: "This service involves assessing environmental impacts, advising on sustainable materials and practices, and guiding projects toward certification programs like LEED or BREEAM. It focuses on energy efficiency, waste reduction, water conservation, and overall environmental responsibility."
      },
      {
        heading: "How Our Company Excels in Environmental & Sustainability Consulting",
        content: "Terrene Engineers integrates cutting-edge sustainability principles into every stage of design and construction. We conduct environmental impact assessments, recommend eco-friendly solutions, and help clients meet local and international sustainability benchmarks."
      },
      {
        heading: "Benefits of Environmental & Sustainability Consulting for Your Project",
        isList: true,
        items: [
          { title: "Reduced Impact", text: "Reduced environmental impact and improved resource use." },
          { title: "Regulatory Compliance", text: "Compliance with environmental regulations and standards." },
          { title: "Enhanced Performance", text: "Enhanced building performance and occupant health." },
          { title: "Brand Reputation", text: "Positive brand reputation as a responsible developer." },
          { title: "Long-Term Savings", text: "Long-term operational savings through energy efficiency." }
        ]
      },
      {
        heading: "Why Choose Us for Environmental & Sustainability Consulting?",
        content: "Our multidisciplinary team combines technical expertise with a passion for green building. We tailor strategies that align with your goals, budget, and project scope to create sustainable, future-ready developments."
      }
    ],
    callToAction: "Looking to make your project greener and more sustainable? Contact us today to learn how our environmental consulting can support your vision."
  },
  // Post 16
  {
    id: 17,
    cardTitle: "Clearing the Maze: How Regulatory Advisory Helps Projects Stay Compliant",
    image: blogImages.blogImage17, // Make sure blogImage16 exists in your images index
    category: "Regulatory Advisory",
    description: "Ensuring full compliance with a complex web of laws, codes, and regulations is critical to avoid costly delays, penalties, or legal issues.",
    mainTitle: "Clearing the Maze: How Regulatory Advisory Helps Projects Stay Compliant",
    subTitle: "Regulatory & Compliance Advisory: Navigating Construction Laws with Confidence",
    introduction: "Construction projects are governed by a complex web of laws, codes, and regulations. Ensuring full compliance is critical to avoid costly delays, penalties, or legal issues. Regulatory and compliance advisory services guide you through these requirements smoothly.",
    sections: [
      {
        heading: "What is Regulatory & Compliance Advisory?",
        content: "This service involves reviewing applicable regulations, obtaining necessary permits, and advising on standards related to safety, environment, zoning, and building codes. It ensures your project meets all legal obligations from planning through execution."
      },
      {
        heading: "How Our Company Excels in Regulatory & Compliance Advisory",
        content: "Terrene Engineers has extensive experience liaising with government bodies, understanding local and international construction laws, and preparing compliance documentation. Our proactive approach helps clients anticipate and resolve regulatory challenges early."
      },
      {
        heading: "Benefits of Regulatory & Compliance Advisory for Your Project",
        isList: true,
        items: [
          { title: "Avoid Complications", text: "Avoidance of fines, delays, and legal complications." },
          { title: "Faster Approvals", text: "Faster permit approvals and smoother inspections." },
          { title: "Assured Responsibility", text: "Assurance of safety and environmental responsibility." },
          { title: "Clear Obligations", text: "Clear understanding of obligations and timelines." },
          { title: "Enhanced Credibility", text: "Enhanced project credibility and stakeholder trust." }
        ]
      },
      {
        heading: "Why Choose Us for Regulatory & Compliance Advisory?",
        content: "Our knowledgeable team stays updated with evolving regulations and offers practical solutions tailored to your project’s location and scale. We simplify compliance so you can focus on building with peace of mind."
      }
    ],
    callToAction: "Need expert guidance to navigate construction regulations confidently? Contact us today for comprehensive regulatory and compliance advisory services."
  },
  // Post 17
  {
    id: 18,
    cardTitle: "Mapping Success: The Role of Surveying & Digital Mapping in Smart Construction",
    image: blogImages.blogImage18, // Make sure blogImage17 exists in your images index
    category: "Surveying & Mapping",
    description: "Accurate site data is the cornerstone of any successful construction project, reducing risks and improving outcomes.",
    mainTitle: "Mapping Success: The Role of Surveying & Digital Mapping in Smart Construction",
    subTitle: "Surveying & Digital Mapping: Precision Foundations for Every Successful Project",
    introduction: "Accurate site data is the cornerstone of any successful construction project. Surveying and digital mapping provide the detailed, reliable information needed for design, planning, and execution, reducing risks and improving outcomes.",
    sections: [
      {
        heading: "What is Surveying & Digital Mapping?",
        content: "This service involves measuring and mapping land features, boundaries, elevations, and existing infrastructure using advanced equipment and technologies such as GPS, drones, and 3D scanners. Digital mapping transforms collected data into detailed, usable digital models."
      },
      {
        heading: "How Our Company Excels in Surveying & Digital Mapping",
        content: "Terrene Engineers employs modern surveying tools and software to deliver high-precision data quickly and efficiently. Our experienced surveyors provide topographic surveys, boundary determination, construction staking, and digital terrain models that guide project teams with confidence."
      },
      {
        heading: "Benefits of Surveying & Digital Mapping for Your Project",
        isList: true,
        items: [
          { title: "Accurate Data", text: "Accurate site information for informed decision-making." },
          { title: "Reduced Errors", text: "Reduced design errors and construction rework." },
          { title: "Improved Planning", text: "Improved project planning and resource allocation." },
          { title: "Clear Communication", text: "Enhanced communication with clear visual data." },
          { title: "Guaranteed Compliance", text: "Compliance with legal and regulatory requirements." }
        ]
      },
      {
        heading: "Why Choose Us for Surveying & Digital Mapping?",
        content: "Our commitment to precision and technology ensures you get reliable, detailed data tailored to your project’s needs. We support projects of all sizes with fast turnaround times and expert analysis."
      }
    ],
    callToAction: "Want to start your project on the right foot with precise surveying and mapping? Contact us today to learn more about our services."
  },
  // Post 18
  {
    id: 19,
    cardTitle: "Quality in Every Brick: The Value of Construction Supervision & QA/QC",
    image: blogImages.blogImage19, // Make sure blogImage18 exists in your images index
    category: "Construction Supervision",
    description: "Effective supervision and quality assurance/quality control (QA/QC) ensure that projects meet design specifications and deliver lasting value.",
    mainTitle: "Quality in Every Brick: The Value of Construction Supervision & QA/QC",
    subTitle: "Construction Supervision & QA/QC: Ensuring Excellence and Compliance on Every Site",
    introduction: "Quality and safety are non-negotiable in construction. Effective supervision and quality assurance/quality control (QA/QC) ensure that projects meet design specifications, comply with regulations, and deliver lasting value.",
    sections: [
      {
        heading: "What is Construction Supervision & QA/QC?",
        content: "This service involves on-site monitoring of construction activities, verification of material and workmanship quality, and adherence to safety and design standards. It includes inspections, testing, reporting, and corrective action management."
      },
      {
        heading: "How Our Company Excels in Construction Supervision & QA/QC",
        content: "Terrene Engineers deploys skilled supervisors and QA/QC specialists who maintain rigorous oversight throughout project phases. We use systematic checklists, digital documentation, and close collaboration with contractors to uphold quality and safety."
      },
      {
        heading: "Benefits of Construction Supervision & QA/QC for Your Project",
        isList: true,
        items: [
          { title: "Adherence to Standards", text: "Consistent adherence to design and technical standards." },
          { title: "Early Defect Detection", text: "Early detection and resolution of defects or issues." },
          { title: "Enhanced Safety", text: "Enhanced safety and reduced risk of accidents." },
          { title: "Client Confidence", text: "Improved client confidence and satisfaction." },
          { title: "On-Time Completion", text: "On-time project completion with fewer reworks." }
        ]
      },
      {
        heading: "Why Choose Us for Construction Supervision & QA/QC?",
        content: "Our dedicated team combines technical knowledge with practical experience to ensure your project is executed flawlessly. We focus on transparency, communication, and proactive management for superior results."
      }
    ],
    callToAction: "Looking for reliable construction supervision and QA/QC services? Contact Terrene Engineers today to safeguard your project’s quality and success."
  },
  // Post 19
{
    id: 20,
    cardTitle: "Testing the Truth: Why Field & Lab Testing Matters More Than You Think",
    image: blogImages.blogImage20, // Make sure blogImage19 exists in your images index
    category: "Quality Assurance",
    description: "Field and laboratory testing provides the essential data needed to ensure project safety, durability, and compliance with all required standards.",
    mainTitle: "Testing the Truth: Why Field & Lab Testing Matters More Than You Think",
    subTitle: "Field and Laboratory Testing: Guaranteeing Quality and Safety Through Accurate Analysis",
    introduction: "Reliable testing is essential to verify that construction materials and site conditions meet the required standards. Field and laboratory testing provides the data needed to ensure project safety, durability, and compliance.",
    sections: [
      {
        heading: "What is Field and Laboratory Testing?",
        content: "This service encompasses onsite sampling and testing as well as laboratory analysis of materials such as soil, concrete, aggregates, and steel. Tests assess strength, composition, moisture content, and other critical properties to confirm suitability for construction."
      },
      {
        heading: "How Our Company Excels in Field and Laboratory Testing",
        content: "Terrene Engineers partners with accredited laboratories and uses state-of-the-art equipment for precise testing. Our experienced engineers interpret results and provide clear reports that inform design adjustments and construction decisions."
      },
      {
        heading: "Benefits of Field and Laboratory Testing for Your Project",
        isList: true,
        items: [
          { title: "Material Verification", text: "Verification of material quality and conformity." },
          { title: "Early Issue Detection", text: "Early identification of potential issues." },
          { title: "Increased Safety", text: "Increased safety and reliability of structures." },
          { title: "Code Compliance", text: "Compliance with codes and specifications." },
          { title: "Data-Driven Decisions", text: "Data-driven decisions for project success." }
        ]
      },
      {
        heading: "Why Choose Us for Field and Laboratory Testing?",
        content: "With our technical expertise and commitment to accuracy, Terrene Engineers ensures your project is built on trustworthy data. We deliver timely, transparent reports and practical recommendations tailored to your needs."
      }
    ],
    callToAction: "Ensure your project’s integrity with professional field and laboratory testing. Contact us today to schedule testing services."
  },
  // Post 20
  {
    id: 21,
    cardTitle: "Engineering with Evidence: How Technical Reports Drive Smart Decisions",
    image: blogImages.blogImage21, // Make sure blogImage20 exists in your images index
    category: "Documentation",
    description: "Detailed technical reports provide essential data, analysis, and recommendations that keep stakeholders informed and projects on track.",
    mainTitle: "Engineering with Evidence: How Technical Reports Drive Smart Decisions",
    subTitle: "Technical Reports: Delivering Clear, Accurate Insights for Informed Construction Decisions",
    introduction: "Effective communication through detailed technical reports is vital to the success of any engineering or construction project. These reports provide essential data, analysis, and recommendations that keep stakeholders informed and projects on track.",
    sections: [
      {
        heading: "What are Technical Reports?",
        content: "Technical reports document findings from investigations, analyses, and inspections related to design, materials, site conditions, and construction progress. They serve as official records that guide decision-making and compliance."
      },
      {
        heading: "How Our Company Excels in Technical Reports",
        content: "Terrene Engineers produces comprehensive, well-structured technical reports tailored to client requirements. Our reports are clear, accurate, and timely, incorporating data visualization, expert interpretation, and actionable recommendations."
      },
      {
        heading: "Benefits of Technical Reports for Your Project",
        isList: true,
        items: [
          { title: "Enhanced Transparency", text: "Enhanced transparency and documentation." },
          { title: "Regulatory Support", text: "Support for regulatory approvals and audits." },
          { title: "Clear Guidance", text: "Clear guidance for project adjustments and problem-solving." },
          { title: "Improved Communication", text: "Improved communication among project teams and stakeholders." },
          { title: "Reliable Records", text: "Reliable records for future reference and accountability." }
        ]
      },
      {
        heading: "Why Choose Us for Technical Reports?",
        content: "Our experienced engineers and analysts ensure your reports meet professional standards and serve your project’s unique needs. We prioritize clarity, accuracy, and usability to empower your decisions."
      }
    ],
    callToAction: "Need precise and insightful technical reports? Contact Terrene Engineers today to discuss how our reporting services can support your project success."
  },
  // Post 21
  {
    id: 22,
    cardTitle: "Blueprints to Greenlights: The Importance of Approval Drawings",
    image: blogImages.blogImage22, // Make sure blogImage21 exists in your images index
    category: "Architectural Design",
    description: "Approval drawings are your essential first step to demonstrate that a project meets all building codes, zoning laws, and safety standards.",
    mainTitle: "Blueprints to Greenlights: The Importance of Approval Drawings in Project Success",
    subTitle: "Approval Drawings: Your Essential Step for Smooth Construction Permits and Compliance",
    introduction: "Securing approvals from local authorities is a crucial step before construction begins. Approval drawings demonstrate that your project meets all building codes, zoning laws, and safety standards.",
    sections: [
      {
        heading: "What Are Approval Drawings?",
        content: "These are technical plans submitted for permit review, including site plans, floor plans, elevations, and sections. They provide a clear view of your project to facilitate approvals."
      },
      {
        heading: "Why Are Approval Drawings Important?",
        isList: true,
        items: [
          { title: "Legal Compliance", text: "Ensure legal compliance with local and national regulations." },
          { title: "Permit Acquisition", text: "Facilitate a smoother, faster permit acquisition process." },
          { title: "Minimize Redesigns", text: "Minimize costly redesigns by addressing issues upfront." },
          { title: "Provide Clarity", text: "Provide clarity for all stakeholders before detailed design begins." }
        ]
      },
      {
        heading: "How We Assist You",
        content: "Terrene Engineers prepares accurate, compliant drawings and works with authorities to streamline the approval process, reducing delays."
      }
    ],
    callToAction: "Avoid permit delays by contacting Terrene Engineers today for dependable approval drawing services."
  },
  // Post 22
  {
    id: 23,
    cardTitle: "Designing the Future: How Modern Architecture Shapes the Way We Live",
    image: blogImages.blogImage23, // Make sure blogImage22 exists in your images index
    category: "Architectural Design",
    description: "Architectural drawings are the blueprint of your project’s design, translating ideas into detailed plans that guide construction decisions.",
    mainTitle: "Designing the Future: How Modern Architecture Shapes the Way We Live and Work",
    subTitle: "Architectural Drawings: Bringing Your Building Vision to Life with Precision",
    introduction: "Architectural drawings are the blueprint of your project’s design, translating ideas into detailed plans that guide construction and design decisions.",
    sections: [
      {
        heading: "What Are Architectural Drawings?",
        content: "These include floor plans, elevations, sections, and details that define the layout, appearance, and function of your building, shaping the user experience."
      },
      {
        heading: "Why Are Architectural Drawings Important?",
        isList: true,
        items: [
          { title: "Visualize Design", text: "Visualize the final design with clarity and detail." },
          { title: "Coordinate Construction", text: "Coordinate construction activities effectively among all teams." },
          { title: "Guide Selection", text: "Guide the selection of materials, finishes, and fixtures." },
          { title: "Ensure Functionality", text: "Ensure the final build meets all functional and aesthetic goals." }
        ]
      },
      {
        heading: "How We Assist You",
        content: "Terrene Engineers combines creativity and technical expertise to deliver accurate, detailed architectural drawings that align with your vision."
      }
    ],
    callToAction: "Bring your architectural vision to life. Contact Terrene Engineers for expert architectural drawing services today."
  },
  // Post 23
  {
    id: 24,
    cardTitle: "Built to Last: The Role of Structural Engineering in Safe Construction",
    image: blogImages.blogImage24, // Make sure blogImage23 exists in your images index
    category: "Structural Engineering",
    description: "Structural drawings are essential for ensuring your building’s safety and durability by detailing the framework that supports it.",
    mainTitle: "Built to Last: The Role of Structural Engineering in Safe, Modern Construction",
    subTitle: "Structural Drawings: Engineering Safety and Stability for Every Project",
    introduction: "Structural drawings are essential for ensuring your building’s safety and durability by detailing the framework that supports it.",
    sections: [
      {
        heading: "What Are Structural Drawings?",
        content: "These drawings specify the dimensions, materials, and placement of beams, columns, foundations, and reinforcements that make your structure stable."
      },
      {
        heading: "Why Are Structural Drawings Important?",
        isList: true,
        items: [
          { title: "Guarantee Integrity", text: "Guarantee the structural integrity and safety of the building." },
          { title: "Optimize Costs", text: "Optimize material usage and overall construction costs." },
          { title: "Ensure Compliance", text: "Ensure full compliance with all engineering codes and standards." },
          { title: "Prevent Errors", text: "Prevent costly and dangerous construction errors on site." }
        ]
      },
      {
        heading: "How We Assist You",
        content: "Our experienced engineers create detailed, code-compliant structural drawings tailored to your project’s unique needs."
      }
    ],
    callToAction: "Secure your project with expert structural drawings. Contact Terrene Engineers today."
  },
  // Post 24
  {
    id: 25,
    cardTitle: "From Concept to Comfort: The Power of Interior Design in Everyday Spaces",
    image: blogImages.blogImage25, // Make sure blogImage24 exists in your images index
    category: "Interior Design",
    description: "Interior design drawings transform your space by detailing layouts, finishes, and lighting to create environments that are both stylish and functional.",
    mainTitle: "From Concept to Comfort: The Power of Interior Design in Everyday Spaces",
    subTitle: "Interior Design Drawings: Crafting Functional and Beautiful Spaces",
    introduction: "Interior design drawings transform your space by detailing layouts, finishes, furniture, and lighting to create environments that are both stylish and functional.",
    sections: [
      {
        heading: "What Are Interior Design Drawings?",
        content: "These plans include detailed layouts, material specifications, furniture placement, and lighting designs tailored to enhance your space’s usability and aesthetics."
      },
      {
        heading: "Why Are Interior Design Drawings Important?",
        isList: true,
        items: [
          { title: "Optimize Space", text: "Optimize space utilization for maximum functionality." },
          { title: "Reflect Style", text: "Reflect your unique personal or brand style." },
          { title: "Guide Contractors", text: "Guide contractors and suppliers with clear instructions." },
          { title: "Enhance Comfort", text: "Enhance the comfort, appeal, and value of the space." }
        ]
      },
      {
        heading: "How We Assist You",
        content: "Terrene Engineers combines creativity and technical skill to produce interior drawings that bring your vision to life efficiently."
      }
    ],
    callToAction: "Elevate your interiors with professional design drawings. Contact us today."
  },
  // Post 25
{
    id: 26,
    cardTitle: "Invisible Systems, Essential Impact: The Importance of MEP Engineering",
    image: blogImages.blogImage26, // Make sure blogImage25 exists in your images index
    category: "MEP Engineering",
    description: "MEP drawings coordinate essential building systems like mechanical, electrical, and plumbing to ensure safety, comfort, and efficiency.",
    mainTitle: "Invisible Systems, Essential Impact: The Importance of MEP Engineering",
    subTitle: "MEP Drawings: Integrating Mechanical, Electrical, and Plumbing Systems Seamlessly",
    introduction: "MEP drawings coordinate essential building systems to ensure safety, comfort, and efficiency throughout your project.",
    sections: [
      {
        heading: "What Are MEP Drawings?",
        content: "These technical plans detail the design and routing of mechanical, electrical, and plumbing systems within your building."
      },
      {
        heading: "Why Are MEP Drawings Important?",
        isList: true,
        items: [
          { title: "System Integration", text: "Enable system integration and coordination between different trades." },
          { title: "Code Compliance", text: "Ensure compliance with codes and safety standards." },
          { title: "Efficient Installation", text: "Facilitate efficient installation and future maintenance." },
          { title: "Building Performance", text: "Support overall building performance and occupant comfort." }
        ]
      },
       {
        heading: "How We Assist You",
        content: "Our multidisciplinary team delivers precise, coordinated MEP drawings tailored to your project’s needs."
      }
    ],
    callToAction: "Ensure seamless building systems with expert MEP drawing services. Contact Terrene Engineers today."
  },
  // Post 26
  {
    id: 27,
    cardTitle: "Cool, Clean, and Efficient: How HVAC Design Enhances Indoor Living",
    image: blogImages.blogImage27, // Make sure blogImage26 exists in your images index
    category: "HVAC Design",
    description: "HVAC drawings detail the heating, ventilation, and air conditioning systems that keep indoor environments comfortable and healthy.",
    mainTitle: "Cool, Clean, and Efficient: How HVAC Design Enhances Indoor Living",
    subTitle: "HVAC Drawings: Designing Comfortable and Energy-Efficient Climate Control Systems",
    introduction: "HVAC drawings detail the heating, ventilation, and air conditioning systems that keep indoor environments comfortable and healthy.",
    sections: [
      {
        heading: "What Are HVAC Drawings?",
        content: "These specialized plans illustrate ductwork layouts, equipment placement, airflow design, and control systems to ensure optimal climate control."
      },
      {
        heading: "Why Are HVAC Drawings Important?",
        isList: true,
        items: [
          { title: "Air Quality", text: "Maintain excellent indoor air quality and thermal comfort." },
          { title: "Energy Optimization", text: "Optimize energy consumption for lower operational costs." },
          { title: "Simplified Maintenance", text: "Simplify the process of installation and future maintenance." },
          { title: "Sustainability", text: "Support sustainability goals and regulatory compliance." }
        ]
      },
      {
        heading: "How We Assist You",
        content: "Terrene Engineers uses advanced design tools to create efficient and integrated HVAC drawings tailored to your building."
      }
    ],
    callToAction: "Create comfortable, efficient environments with expert HVAC drawing services. Contact us today."
  },
  // Post 27
  {
    id: 28,
    cardTitle: "How Modern Residential Construction Is Redefining Everyday Living",
    image: blogImages.blogImage28, // Make sure blogImage27 exists in your images index
    category: "Construction Services",
    description: "Residential construction transforms your vision of a dream home into reality, focusing on comfort, safety, and personal style.",
    mainTitle: "How Modern Residential Construction Is Redefining Everyday Living",
    subTitle: "Residential Construction: Building Homes Tailored to Your Lifestyle",
    introduction: "Residential construction transforms your vision of a dream home into reality, focusing on comfort, safety, and personal style.",
    sections: [
      {
        heading: "What is Residential Construction?",
        content: "This service covers building single-family houses, apartments, townhouses, and other living spaces designed for families and individuals."
      },
      {
        heading: "Benefits of Residential Construction",
        isList: true,
        items: [
          { title: "Custom Designs", text: "Customized home designs that fit your needs and preferences." },
          { title: "Quality Craftsmanship", text: "High-quality craftsmanship and durable materials." },
          { title: "Code Compliance", text: "Full compliance with local safety and building codes." },
          { title: "Function & Aesthetics", text: "A strong focus on both functionality and aesthetics." }
        ]
      },
      {
        heading: "Why Choose Us for Residential Construction?",
        content: "Terrene Engineers combines technical expertise and client-focused service to deliver homes that exceed expectations."
      }
    ],
    callToAction: "Ready to build your perfect home? Contact us for expert residential construction services."
  },
  // Post 28
  {
    id: 29,
    cardTitle: "The Future of Business Spaces: How Commercial Construction Is Evolving",
    image: blogImages.blogImage29, // Make sure blogImage28 exists in your images index
    category: "Construction Services",
    description: "Commercial construction delivers tailored spaces that support business operations, customer engagement, and brand identity.",
    mainTitle: "The Future of Business Spaces: How Commercial Construction Is Evolving",
    subTitle: "Commercial Construction: Creating Functional and Attractive Business Spaces",
    introduction: "Commercial construction delivers tailored spaces that support business operations, customer engagement, and brand identity.",
    sections: [
      {
        heading: "What is Commercial Construction?",
        content: "This includes office buildings, retail centers, hotels, restaurants, and other commercial facilities designed for business use."
      },
      {
        heading: "Benefits of Commercial Construction",
        isList: true,
        items: [
          { title: "Efficient Layouts", text: "Efficient layouts designed for maximum productivity." },
          { title: "Brand Image", text: "Attractive designs that enhance your brand image." },
          { title: "Regulatory Compliance", text: "Full compliance with all commercial regulations." },
          { title: "Scalable Solutions", text: "Scalable solutions that accommodate future business growth." }
        ]
      },
      {
        heading: "Why Choose Us for Commercial Construction?",
        content: "We provide expert management and quality construction to ensure your commercial project succeeds."
      }
    ],
    callToAction: "Looking to build or renovate your business space? Contact Terrene Engineers today."
  },
  // Post 29
  {
    id: 30,
    cardTitle: "How Precision Engineering Is Powering Industrial Construction",
    image: blogImages.blogImage30, // Make sure blogImage29 exists in your images index
    category: "Construction Services",
    description: "Industrial construction focuses on durable, functional facilities for the demands of manufacturing, warehousing, and processing.",
    mainTitle: "How Precision Engineering Is Powering the Next Wave of Industrial Construction",
    subTitle: "Industrial Construction: Building Robust Facilities for Manufacturing and Production",
    introduction: "Industrial construction focuses on durable, functional facilities tailored to the demands of manufacturing, warehousing, and processing.",
    sections: [
      {
        heading: "What is Industrial Construction?",
        content: "This includes factories, warehouses, distribution centers, and plants designed to support industrial activities."
      },
      {
        heading: "Benefits of Industrial Construction",
        isList: true,
        items: [
          { title: "Durable Structures", text: "Strong, durable structures built for heavy use." },
          { title: "Efficient Workflows", text: "Efficient workflow layouts to optimize operations." },
          { title: "Safety Compliance", text: "Compliance with strict safety and environmental standards." },
          { title: "Adaptable Designs", text: "Adaptable designs suitable for a wide range of industries." }
        ]
      },
      {
        heading: "Why Choose Us for Industrial Construction?",
        content: "Our team delivers reliable industrial buildings built to withstand heavy use and optimize operations."
      }
    ],
    callToAction: "Need industrial construction expertise? Contact us to discuss your project requirements."
  },
  // Post 30
  {
    id: 31,
    cardTitle: "How Smart Infrastructure Construction Is Building Tomorrow’s Cities",
    image: blogImages.blogImage31, // Make sure blogImage30 exists in your images index
    category: "Construction Services",
    description: "Infrastructure construction builds the foundational systems that support communities, such as utilities and public facilities.",
    mainTitle: "How Smart Infrastructure Construction Is Building Tomorrow’s Cities",
    subTitle: "Infrastructure Construction: Developing Essential Public Facilities and Utilities",
    introduction: "Infrastructure construction builds the foundational systems that support communities and economies, such as utilities and public facilities.",
    sections: [
      {
        heading: "What is Infrastructure Construction?",
        content: "This includes water supply systems, sewage, power lines, telecommunications, and public buildings."
      },
      {
        heading: "Benefits of Infrastructure Construction",
        isList: true,
        items: [
          { title: "Enhanced Public Services", text: "Enhances and expands essential public services." },
          { title: "Sustainable Growth", text: "Supports sustainable and long-term community growth." },
          { title: "Regulatory Compliance", text: "Meets all regulatory and environmental standards." },
          { title: "Reliable Construction", text: "Long-lasting, reliable construction for public trust." }
        ]
      },
      {
        heading: "Why Choose Us for Infrastructure Construction?",
        content: "Terrene Engineers ensures infrastructure projects meet technical and social needs with quality execution."
      }
    ],
    callToAction: "Building infrastructure that supports progress? Contact us for professional infrastructure construction services."
  },
  // Post 31
{
    id: 32,
    cardTitle: "How Innovative Road Construction Is Driving Connectivity and Growth",
    image: blogImages.blogImage32, // Make sure blogImage31 exists in your images index
    category: "Civil Engineering",
    description: "Road construction creates essential transportation links that improve mobility, enhance regional connectivity, and drive economic growth.",
    mainTitle: "How Innovative Road Construction Is Driving Connectivity and Growth",
    subTitle: "Road Construction: Designing and Building Safe, Durable Transportation Networks",
    introduction: "Road construction creates essential transportation links that improve mobility and connectivity.",
    sections: [
      {
        heading: "What is Road Construction?",
        content: "This service covers highways, city roads, bridges, and related civil works for vehicular and pedestrian traffic."
      },
      {
        heading: "Benefits of Road Construction",
        isList: true,
        items: [
          { title: "Improved Safety", text: "Improved transportation safety and efficiency for all users." },
          { title: "Durable Surfaces", text: "Durable, weather-resistant surfaces designed for longevity." },
          { title: "Standard Compliance", text: "Full compliance with all engineering and safety standards." },
          { title: "Enhanced Connectivity", text: "Enhanced regional connectivity for communities and businesses." }
        ]
      },
      {
        heading: "Why Choose Us for Road Construction?",
        content: "We bring expertise and precision to every road project, ensuring durability and safety."
      }
    ],
    callToAction: "Planning a road construction project? Contact Terrene Engineers to build roads that last."
  },
  // Post 32
  {
    id: 33,
    cardTitle: "Why Timber Construction Is Making a Strong Comeback in Modern Projects",
    image: blogImages.blogImage33, // Make sure blogImage32 exists in your images index
    category: "Sustainable Construction",
    description: "Timber construction blends natural beauty with structural strength, offering versatile and eco-friendly building solutions.",
    mainTitle: "Why Timber Construction Is Making a Strong Comeback in Modern Projects",
    subTitle: "Timber Construction: Crafting Sustainable and Elegant Wooden Structures",
    introduction: "Timber construction blends natural beauty with structural strength, offering versatile and eco-friendly building solutions.",
    sections: [
      {
        heading: "What is Timber Construction?",
        content: "This involves designing and building structures using wood, including frames, floors, roofs, and finishes, suitable for residential and commercial projects."
      },
      {
        heading: "Benefits of Timber Construction",
        isList: true,
        items: [
          { title: "Eco-Friendly", text: "A renewable and sustainable material with a low carbon footprint." },
          { title: "Aesthetic Appeal", text: "Offers natural aesthetic warmth and design versatility." },
          { title: "Fast Assembly", text: "Lightweight and fast to assemble, reducing construction time." },
          { title: "Great Insulation", text: "Provides excellent natural insulation properties." }
        ]
      },
      {
        heading: "Why Choose Us for Timber Construction?",
        content: "Terrene Engineers specializes in timber design and construction, ensuring durability and style."
      }
    ],
    callToAction: "Interested in timber construction? Contact us to explore sustainable wooden building solutions."
  },
  // Post 33
  {
    id: 34,
    cardTitle: "How Steel Construction Is Setting New Standards in Strength and Speed",
    image: blogImages.blogImage34, // Make sure blogImage33 exists in your images index
    category: "Structural Engineering",
    description: "Steel construction offers high strength and flexibility, making it ideal for large-scale, modern, and innovative building designs.",
    mainTitle: "How Steel Construction Is Setting New Standards in Strength and Speed",
    subTitle: "Steel Construction: Delivering Strong, Flexible, and Modern Structures",
    introduction: "Steel construction offers high strength and flexibility, ideal for large-scale and innovative building designs.",
    sections: [
      {
        heading: "What is Steel Construction?",
        content: "This includes steel frames, beams, and components for commercial, industrial, and infrastructure projects."
      },
      {
        heading: "Benefits of Steel Construction",
        isList: true,
        items: [
          { title: "High Strength", text: "A high strength-to-weight ratio allows for long spans and open spaces." },
          { title: "Fast Construction", text: "Prefabrication leads to faster construction times and reduced labor costs." },
          { title: "Design Flexibility", text: "Offers immense design flexibility and scalability for future expansion." },
          { title: "High Resistance", text: "Naturally resistant to pests, decay, and fire." }
        ]
      },
      {
        heading: "Why Choose Us for Steel Construction?",
        content: "Our team ensures precise steel fabrication and erection for robust, efficient buildings."
      }
    ],
    callToAction: "Build with confidence using steel. Contact Terrene Engineers for expert steel construction services."
  },
  // Post 34
  {
    id: 35,
    cardTitle: "How Cladding Engineering Is Changing Building Aesthetics and Performance",
    image: blogImages.blogImage35, // Make sure blogImage34 exists in your images index
    category: "Building Envelope",
    description: "Cladding engineering improves building aesthetics while protecting the structure from weather, wear, and thermal loss.",
    mainTitle: "How Cladding Engineering Is Changing Building Aesthetics and Performance",
    subTitle: "Cladding Engineering: Enhancing Building Exteriors with Style and Protection",
    introduction: "Cladding engineering improves building aesthetics and protects structures from weather and wear.",
    sections: [
      {
        heading: "What is Cladding Engineering?",
        content: "This involves designing and installing exterior surfaces using materials like metal, stone, glass, or composite panels."
      },
      {
        heading: "Benefits of Cladding Engineering",
        isList: true,
        items: [
          { title: "Improved Resistance", text: "Improved thermal and weather resistance for better protection." },
          { title: "Modern Facades", text: "Creates modern, attractive building facades." },
          { title: "Increased Lifespan", text: "Increased overall building lifespan and durability." },
          { title: "Energy Efficiency", text: "Significant energy efficiency gains through better insulation." }
        ]
      },
      {
        heading: "Why Choose Us for Cladding Engineering?",
        content: "We deliver innovative, durable cladding solutions tailored to your architectural vision."
      }
    ],
    callToAction: "Transform your building’s exterior with expert cladding engineering. Contact us today."
  },
  // Post 35
  {
    id: 36,
    cardTitle: "How Aluminum Fabrication Is Reinventing Lightweight, Durable Design",
    image: blogImages.blogImage36, // Make sure blogImage35 exists in your images index
    category: "Fabrication Services",
    description: "Aluminum fabrication provides lightweight, corrosion-resistant components for a wide range of structural and aesthetic applications.",
    mainTitle: "How Aluminum Fabrication Is Reinventing Lightweight, Durable Design",
    subTitle: "Aluminum Fabrication: Precision Metalwork for Structural and Decorative Needs",
    introduction: "Aluminum fabrication provides lightweight, corrosion-resistant components for structural and aesthetic applications.",
    sections: [
      {
        heading: "What is Aluminum Fabrication?",
        content: "This service includes cutting, shaping, and assembling aluminum parts for windows, doors, facades, and custom structures."
      },
      {
        heading: "Benefits of Aluminum Fabrication",
        isList: true,
        items: [
          { title: "Lightweight & Durable", text: "Extremely lightweight yet strong and durable." },
          { title: "Low Maintenance", text: "Highly corrosion-resistant and requires low maintenance." },
          { title: "Versatile Design", text: "Offers versatile design options for complex shapes." },
          { title: "Eco-Friendly", text: "Environmentally friendly with high recycling potential." }
        ]
      },
      {
        heading: "Why Choose Us for Aluminum Fabrication?",
        content: "Our skilled fabricators produce high-quality aluminum components meeting exact specifications."
      }
    ],
    callToAction: "Looking for precision aluminum fabrication? Contact Terrene Engineers to discuss your needs."
  },
  // Post 36
  {
    id: 37,
    cardTitle: "Why Strategic Subcontracting Is Essential for Complex Projects",
    image: blogImages.blogImage37, // Make sure blogImage36 exists in your images index
    category: "Project Management",
    description: "Subcontracting allows you to access specialized skills and resources to keep your construction project on time and within budget.",
    mainTitle: "Why Strategic Subcontracting Is Essential for Complex Construction Projects",
    subTitle: "Subcontracting Services: Reliable Support for Your Construction Projects",
    introduction: "Subcontracting allows you to access specialized skills and resources to keep your project on time and budget.",
    sections: [
      {
        heading: "What is Subcontracting?",
        content: "We provide skilled labor and technical expertise in various construction trades, working under your project management."
      },
      {
        heading: "Benefits of Subcontracting Services",
        isList: true,
        items: [
          { title: "Access to Experts", text: "Access to experienced and specialized professionals." },
          { title: "Workforce Flexibility", text: "Flexibility to scale your workforce as project needs change." },
          { title: "Cost-Effective", text: "Cost-effective project execution without hiring full-time staff." },
          { title: "Improved Efficiency", text: "Improved efficiency and quality control through specialized teams." }
        ]
      },
      {
        heading: "Why Choose Us for Subcontracting?",
        content: "Terrene Engineers offers trustworthy subcontracting services with a focus on reliability and performance."
      }
    ],
    callToAction: "Need dependable subcontracting support? Contact us today to partner on your construction project."
  },
  // Post 37
{
    id: 38,
    cardTitle: "How Concept-Driven Interior Design Brings Vision to Life",
    image: blogImages.blogImage38, // Make sure blogImage37 exists in your images index
    category: "Design & Planning",
    description: "Concept development and design serve as the blueprint for your entire project, capturing your vision while addressing functional needs.",
    mainTitle: "How Concept-Driven Interior Design Brings Vision to Life",
    subTitle: "Concept Development & Design: Turning Ideas into Reality",
    introduction: "Every successful project begins with a strong concept and thoughtful design. Concept development and design serve as the blueprint for your entire project, capturing your vision while addressing functional and aesthetic needs.",
    sections: [
      {
        heading: "What is Concept Development & Design?",
        content: "This service involves collaborating with clients to understand their goals and aspirations, then creating initial design ideas, sketches, and plans. It includes exploring site possibilities, defining spatial layouts, selecting styles, and integrating technical requirements. This stage sets the foundation for detailed design and construction."
      },
      {
        heading: "How We Execute Concept Development & Design",
        content: "Our team at Terrene Engineers uses innovative tools and creative expertise to develop concepts that are practical, sustainable, and tailored to your needs. We balance design innovation with budget and regulatory considerations to produce feasible, inspiring project ideas."
      },
      {
        heading: "Benefits of Concept Development & Design",
        isList: true,
        items: [
          { title: "Clarifies Scope", text: "Clarifies project scope and direction early in the process." },
          { title: "Cost-Effective Planning", text: "Enables cost-effective planning and budgeting." },
          { title: "Visualize Outcomes", text: "Helps visualize potential outcomes before committing resources." },
          { title: "Stakeholder Alignment", text: "Encourages stakeholder input and alignment on goals." },
          { title: "Identifies Challenges", text: "Identifies challenges and opportunities before detailed design." }
        ]
      },
      {
        heading: "Why Choose Us for Concept Development & Design?",
        content: "We combine creativity, technical skill, and client collaboration to ensure your project starts on a strong, clear footing that drives success."
      }
    ],
    callToAction: "Start your project with confidence. Contact Terrene Engineers for expert concept development and design services that turn your vision into reality."
  },
  // Post 38
  {
    id: 39,
    cardTitle: "How Expert Project Management Ensures Seamless Interior Execution",
    image: blogImages.blogImage39, // Make sure blogImage38 exists in your images index
    category: "Project Management",
    description: "Efficient project management and procurement are critical to delivering projects on time, within budget, and according to quality standards.",
    mainTitle: "How Expert Project Management Ensures Seamless Interior Execution",
    subTitle: "Project Management & Procurement: Ensuring Efficient and Timely Delivery",
    introduction: "Efficient project management and procurement are critical to delivering projects on time, within budget, and according to quality standards. This service coordinates all moving parts of construction to ensure seamless progress.",
    sections: [
      {
        heading: "What is Project Management & Procurement?",
        content: "Project management involves planning, scheduling, resource allocation, risk management, and communication among stakeholders. Procurement manages the sourcing, negotiation, and purchasing of materials, equipment, and subcontractor services essential for construction."
      },
      {
        heading: "How We Execute Project Management & Procurement",
        content: "At Terrene Engineers, our experienced project managers use proven methodologies and technology to monitor progress, control costs, and maintain quality. Our procurement team secures materials and services at competitive prices while ensuring timely delivery and compliance."
      },
      {
        heading: "Benefits of Project Management & Procurement",
        isList: true,
        items: [
          { title: "Improved Coordination", text: "Improved coordination and communication among all teams." },
          { title: "Reduced Delays", text: "Reduced delays and costly budget overruns." },
          { title: "Better Risk Management", text: "Better risk identification, mitigation, and control." },
          { title: "Full Transparency", text: "Transparent reporting and clear accountability." },
          { title: "Optimized Resources", text: "Optimized resource use and supplier relationships." }
        ]
      },
      {
        heading: "Why Choose Us for Project Management & Procurement?",
        content: "Our integrated approach combines hands-on management with strategic procurement to deliver efficient, successful projects with peace of mind."
      }
    ],
    callToAction: "Achieve project excellence through professional management and procurement. Contact Terrene Engineers today."
  },
  // Post 39
  {
    id: 40,
    cardTitle: "Why Precision Interior Drawings Are the Backbone of Flawless Design",
    image: blogImages.blogImage40, // Make sure blogImage39 exists in your images index
    category: "Interior Design",
    description: "Detailed interior drawings are essential for translating design concepts into practical, buildable plans for contractors and suppliers.",
    mainTitle: "Why Precision Interior Drawings Are the Backbone of Flawless Design",
    subTitle: "Detailed Interior Drawings: Precision Plans for Stunning Interiors",
    introduction: "Detailed interior drawings are essential for translating interior design concepts into practical, buildable plans. They provide contractors and suppliers with clear instructions for execution.",
    sections: [
      {
        heading: "What Are Detailed Interior Drawings?",
        content: "These drawings include precise layouts of furniture, fixtures, lighting, finishes, partition walls, and millwork. They show dimensions, materials, and installation details, ensuring that every interior element fits and functions as intended."
      },
      {
        heading: "How We Execute Detailed Interior Drawings",
        content: "Our team creates highly detailed, coordinated interior drawings using CAD and BIM software. We integrate architectural, structural, and MEP details to avoid conflicts and facilitate smooth construction."
      },
      {
        heading: "Benefits of Detailed Interior Drawings",
        isList: true,
        items: [
          { title: "Minimize Errors", text: "Minimize installation errors and the need for rework." },
          { title: "Accurate Procurement", text: "Ensure accurate procurement of materials and furnishings." },
          { title: "Facilitate Coordination", text: "Facilitate clear coordination among different trades on site." },
          { title: "Maintain Design Integrity", text: "Maintain the original design integrity and quality." },
          { title: "Enhance Efficiency", text: "Enhance overall project efficiency and timelines." }
        ]
      },
      {
        heading: "Why Choose Us for Detailed Interior Drawings?",
        content: "Terrene Engineers delivers meticulous drawings that help bring your interior vision to life accurately and efficiently."
      }
    ],
    callToAction: "Looking for precise interior plans? Contact us to receive detailed interior drawings tailored to your project."
  },
  // Post 40
  {
    id: 41,
    cardTitle: "How Turnkey Interior Solutions Simplify Your Dream Space Delivery",
    image: blogImages.blogImage41, // Make sure blogImage40 exists in your images index
    category: "Interior Solutions",
    description: "Turnkey interior solutions offer a hassle-free approach by managing the entire fit-out process from design to completion under one roof.",
    mainTitle: "How Turnkey Interior Solutions Simplify Your Dream Space Delivery",
    subTitle: "Turnkey Interior Solutions: Complete Interior Fit-Outs from Start to Finish",
    introduction: "Turnkey interior solutions offer a hassle-free approach to interiors by managing the entire fit-out process from design to completion under one roof.",
    sections: [
      {
        heading: "What Are Turnkey Interior Solutions?",
        content: "This service includes design development, procurement, construction, installation, and finishing. The client receives a fully completed interior ready for immediate use, without managing multiple contractors."
      },
      {
        heading: "How We Execute Turnkey Interior Solutions",
        content: "Terrene Engineers oversees every phase, coordinating designers, suppliers, and contractors. Our streamlined process ensures quality control, timely delivery, and budget adherence."
      },
      {
        heading: "Benefits of Turnkey Interior Solutions",
        isList: true,
        items: [
          { title: "Single Point of Contact", text: "A single point of responsibility simplifies communication." },
          { title: "Simplified Management", text: "Simplified project management and oversight for clients." },
          { title: "Faster Delivery", text: "Faster project delivery times and reduced risks." },
          { title: "High-Quality Finishes", text: "High-quality, consistent finishes throughout the space." },
          { title: "Budget Control", text: "Complete budget transparency and better cost control." }
        ]
      },
      {
        heading: "Why Choose Us for Turnkey Interior Solutions?",
        content: "Our integrated teams provide seamless, end-to-end interior solutions tailored to your style and functional needs."
      }
    ],
    callToAction: "Enjoy a stress-free interior fit-out with Terrene Engineers’ turnkey solutions. Contact us today."
  },
  // Post 41
  {
    id: 42,
    cardTitle: "How Strategic Material and Color Choices Transform Interior Experiences",
    image: blogImages.blogImage42, // Make sure blogImage41 exists in your images index
    category: "Design Consultancy",
    description: "Material and color consultancy guides you in selecting finishes, textures, and schemes that complement your design vision and project goals.",
    mainTitle: "How Strategic Material and Color Choices Transform Interior Experiences",
    subTitle: "Material & Color Consultancy: Choosing the Perfect Palette for Your Project",
    introduction: "Material and color consultancy guides you through selecting finishes, textures, and color schemes that complement your design vision and project goals.",
    sections: [
      {
        heading: "What is Material & Color Consultancy?",
        content: "This service involves expert advice on selecting building materials, surface finishes, and colors that balance aesthetics, durability, cost, and sustainability."
      },
      {
        heading: "How We Execute Material & Color Consultancy",
        content: "Our consultants analyze your design objectives, site conditions, and budget to recommend optimal material and color palettes. We consider trends, client preferences, and environmental impacts."
      },
      {
        heading: "Benefits of Material & Color Consultancy",
        isList: true,
        items: [
          { title: "Cohesive Design", text: "Creates cohesive and harmonious design schemes." },
          { title: "Enhanced Durability", text: "Ensures enhanced durability and simplifies maintenance." },
          { title: "Cost-Effective Choices", text: "Leads to cost-effective and high-value material choices." },
          { title: "Improved Experience", text: "Improved occupant experience and stronger brand identity." },
          { title: "Sustainable Selections", text: "Promotes sustainable and environment-friendly selections." }
        ]
      },
      {
        heading: "Why Choose Us for Material & Color Consultancy?",
        content: "Terrene Engineers’ experts provide personalized recommendations to help you make informed, confident decisions on materials and colors."
      }
    ],
    callToAction: "Make your design stand out with expert material and color advice. Contact us today."
  },
  // Post 42
  {
    id: 43,
    cardTitle: "How Smart Renovations Breathe New Life into Existing Spaces",
    image: blogImages.blogImage43, // Make sure blogImage42 exists in your images index
    category: "Renovation Services",
    description: "Renovation and makeover services breathe new life into existing spaces, enhancing aesthetics, functionality, and value.",
    mainTitle: "How Smart Renovations Breathe New Life into Existing Spaces",
    subTitle: "Renovation & Makeover Services: Revitalize Your Space with Expert Upgrades",
    introduction: "Renovation and makeover services breathe new life into existing spaces, enhancing aesthetics, functionality, and value without full reconstruction.",
    sections: [
      {
        heading: "What Is Renovation & Makeover Services?",
        content: "This involves remodeling interiors and exteriors, updating finishes, reconfiguring layouts, and modernizing design elements to suit current needs and trends."
      },
      {
        heading: "How We Execute Renovation & Makeover Services",
        content: "Terrene Engineers assesses your space and goals, develops tailored renovation plans, and manages the entire process for minimal disruption and quality results."
      },
      {
        heading: "Benefits of Renovation & Makeover Services",
        isList: true,
        items: [
          { title: "Improved Functionality", text: "Improved functionality and day-to-day comfort." },
          { title: "Updated Style", text: "An updated style and modern appearance." },
          { title: "Increased Property Value", text: "A significant increase in overall property value." },
          { title: "Cost-Effective", text: "A cost-effective alternative to new construction." },
          { title: "Customized Solutions", text: "Customized solutions to meet your evolving needs." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our team blends creative design with technical expertise to deliver exceptional renovations."
      }
    ],
    callToAction: "Ready to refresh your space? Contact Terrene Engineers for expert renovation services."
  },
  // Post 43
{
    id: 44,
    cardTitle: "Why Furniture Selection Can Make or Break Interior Harmony",
    image: blogImages.blogImage44, // Make sure blogImage43 exists in your images index
    category: "Interior Design",
    description: "Choosing the right furniture is essential for comfort, style, and functionality. This service advises on pieces that complement your interior design.",
    mainTitle: "Why Furniture Selection Can Make or Break Interior Harmony",
    subTitle: "Furniture Selection: Finding the Perfect Pieces for Your Space",
    introduction: "Choosing the right furniture is essential for comfort, style, and functionality in any interior space.",
    sections: [
      {
        heading: "What is Furniture Selection?",
        content: "This service advises on furniture types, sizes, materials, and styles that complement your interior design and meet practical needs."
      },
      {
        heading: "How We Execute Furniture Selection",
        content: "We assess your space, lifestyle, and budget to recommend furniture balancing aesthetics and usability, sourcing from trusted suppliers."
      },
      {
        heading: "Benefits of Furniture Selection",
        isList: true,
        items: [
          { title: "Cohesive Interiors", text: "Creates cohesive and functional interiors." },
          { title: "Enhanced Comfort", text: "Enhances comfort and everyday usability." },
          { title: "Optimized Space", text: "Optimizes space planning and flow." },
          { title: "Access to Quality", text: "Provides access to quality, durable pieces." },
          { title: "Time-Saving Guidance", text: "Offers time-saving professional guidance." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide personalized, detail-oriented furniture advice transforming interiors into inviting environments."
      }
    ],
    callToAction: "Need help selecting furniture? Contact us for expert guidance."
  },
  // Post 44
  {
    id: 45,
    cardTitle: "How Styling & Décor Add the Final Touch of Elegance",
    image: blogImages.blogImage45, // Make sure blogImage44 exists in your images index
    category: "Interior Design",
    description: "Styling and décor add character and warmth through thoughtful accents like art, textiles, lighting, and accessories.",
    mainTitle: "How Styling & Décor Add the Final Touch of Elegance to Every Room",
    subTitle: "Styling & Décor: Adding Personality and Elegance to Your Interiors",
    introduction: "Styling and décor add character and warmth through thoughtful accents and design elements.",
    sections: [
      {
        heading: "What is Styling & Décor?",
        content: "Includes choosing art, textiles, lighting, plants, and accessories that enhance ambiance and reflect your personality or brand."
      },
      {
        heading: "How We Execute Styling & Décor",
        content: "We curate décor elements harmonizing with your design, balancing color, texture, and scale for a polished look."
      },
      {
        heading: "Benefits of Styling & Décor",
        isList: true,
        items: [
          { title: "Personalized Spaces", text: "Creates personalized and inviting spaces." },
          { title: "Visual Interest", text: "Enhances visual interest and detail." },
          { title: "Improved Atmosphere", text: "Improves the overall mood and atmosphere." },
          { title: "Easy Refreshes", text: "Allows for easy and impactful style refreshes." },
          { title: "Reflects Identity", text: "Reflects the client's unique identity or brand." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our styling experts create interiors that feel uniquely yours."
      }
    ],
    callToAction: "Elevate your interiors with professional styling. Contact us today."
  },
  // Post 45
  {
    id: 46,
    cardTitle: "Building Information Modeling (BIM): Revolutionizing Construction",
    image: blogImages.blogImage46, // Make sure blogImage45 exists in your images index
    category: "BIM Services",
    description: "BIM revolutionizes construction with digital collaboration, precise planning, and efficient project management across a building’s lifecycle.",
    mainTitle: "Building Information Modeling (BIM): Revolutionizing Construction with Smart Digital Solutions",
    subTitle: "A Comprehensive Overview of BIM Dimensions and Benefits",
    introduction: "Building Information Modeling (BIM) is revolutionizing the construction industry by facilitating digital collaboration, precise planning and efficient project management. BIM integrates multi-dimensional data into a comprehensive digital model, enhancing every phase of a building’s lifecycle, from design through to operation.",
    sections: [
      {
        heading: "What is BIM?",
        content: "BIM is a process supported by various tools and technologies to create, manage, and share accurate digital representations of physical and functional characteristics of a building. It fosters collaboration among architects, engineers, contractors, and owners, reducing errors and enhancing project outcomes."
      },
      {
        heading: "Key Benefits of BIM",
        isList: true,
        items: [
          { title: "Improved Collaboration", text: "Improved coordination and collaboration among all stakeholders." },
          { title: "Clash Detection", text: "Early clash detection to minimize costly rework on site." },
          { title: "Enhanced Visualization", text: "Enhanced visualization for better design decisions." },
          { title: "Accurate Estimation", text: "Accurate cost estimation and project scheduling." },
          { title: "Sustainability", text: "Direct support for sustainable building practices and energy analysis." }
        ]
      },
      {
        heading: "Our BIM Services",
        isList: true,
        items: [
          { title: "3D BIM – Digital Design & Modeling", text: "Detailed 3D models for precise visualization and coordination." },
          { title: "4D BIM – Time (Scheduling)", text: "Integration of project timelines for efficient scheduling." },
          { title: "5D BIM – Cost (Estimation)", text: "Real-time cost estimation linked to design changes." },
          { title: "6D BIM – Sustainability & Energy", text: "Energy analysis for sustainable design solutions." },
          { title: "7D BIM – Facility Management", text: "Digital tools for streamlined building operation and maintenance." },
          { title: "8D BIM – Safety & Risk Management", text: "Safety planning integrated into the BIM model." },
          { title: "9D BIM – Lean Construction & Productivity", text: "Enhancing efficiency and minimizing waste." }
        ]
      },
      {
        heading: "Why Choose Terrene Engineers for BIM?",
        content: "Our expert team leverages the latest BIM technologies and industry best practices to deliver high-quality, collaborative, and data-driven solutions that reduce risks, optimize resources, and ensure project success."
      }
    ],
    callToAction: "Embrace the future of construction with Terrene Engineers’ BIM services. Contact us today to learn how BIM can revolutionize your next project."
  },
  // Post 46
  {
    id: 47,
    cardTitle: "How 3D BIM is Revolutionizing Design Precision",
    image: blogImages.blogImage47, // Make sure blogImage46 exists in your images index
    category: "BIM Services",
    description: "3D BIM creates detailed digital models combining architectural, structural, and MEP elements for precise visualization and clash detection.",
    mainTitle: "How 3D BIM is Revolutionizing Design Precision and Visualization",
    subTitle: "3D BIM – Digital Design & Modeling: Bringing Projects to Life in a Virtual Space",
    introduction: "3D BIM (Building Information Modeling) creates detailed digital models of buildings, combining architectural, structural, and MEP elements to visualize the project fully.",
    sections: [
      {
        heading: "What is 3D BIM?",
        content: "It’s the process of generating precise three-dimensional digital representations that facilitate better coordination, design accuracy, and clash detection before construction begins."
      },
      {
        heading: "How We Execute 3D BIM",
        content: "Terrene Engineers uses advanced BIM software to develop accurate, comprehensive 3D models that enable collaboration and reduce errors."
      },
      {
        heading: "Benefits of 3D BIM",
        isList: true,
        items: [
          { title: "Improved Visualization", text: "Greatly improved design visualization for all stakeholders." },
          { title: "Early Conflict Detection", text: "Early detection of conflicts between different building systems." },
          { title: "Enhanced Collaboration", text: "Enhanced collaboration among multidisciplinary teams." },
          { title: "Reduced Changes", text: "Reduced costly changes and rework during the construction phase." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our skilled BIM specialists deliver high-quality 3D models that help you plan and execute projects efficiently."
      }
    ],
    callToAction: "Visualize your project accurately with 3D BIM. Contact us today."
  },
  // Post 47
  {
    id: 48,
    cardTitle: "How 4D BIM is Reshaping Construction Timelines",
    image: blogImages.blogImage48, // Make sure blogImage47 exists in your images index
    category: "BIM Services",
    description: "4D BIM integrates time management with 3D models, allowing visualization of construction sequences to identify potential delays.",
    mainTitle: "How 4D BIM is Reshaping Construction Timelines with Smart Scheduling",
    subTitle: "4D BIM – Time (Scheduling): Visualizing Construction Schedules",
    introduction: "4D BIM integrates time management with 3D models, allowing visualization of construction sequences over time.",
    sections: [
      {
        heading: "What is 4D BIM?",
        content: "It links project schedules with 3D models to simulate construction progress and identify potential delays or conflicts."
      },
      {
        heading: "How We Execute 4D BIM",
        content: "Our team adds scheduling data to BIM models, enabling clear visualization and optimization of project timelines."
      },
      {
        heading: "Benefits of 4D BIM",
        isList: true,
        items: [
          { title: "Improved Scheduling", text: "Improved and more reliable project scheduling." },
          { title: "Better Planning", text: "Better resource and logistics planning." },
          { title: "Early Risk Identification", text: "Early identification of scheduling and sequencing risks." },
          { title: "Enhanced Communication", text: "Enhanced communication with all project stakeholders." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We help you stay on schedule with precise 4D BIM modeling."
      }
    ],
    callToAction: "Optimize your construction timeline with 4D BIM. Reach out today."
  },
  // Post 48
  {
    id: 49,
    cardTitle: "How 5D BIM Delivers Accurate Cost Estimation",
    image: blogImages.blogImage49, // Make sure blogImage48 exists in your images index
    category: "BIM Services",
    description: "5D BIM links cost information directly to building models, offering real-time budget tracking and dynamic cost estimation.",
    mainTitle: "How 5D BIM Delivers Accurate Cost Estimation and Budget Control",
    subTitle: "5D BIM – Cost (Estimation): Accurate and Dynamic Cost Management",
    introduction: "5D BIM links cost information directly to building models, offering real-time budget tracking and cost estimation.",
    sections: [
      {
        heading: "What is 5D BIM?",
        content: "It integrates quantities and costs with BIM elements to dynamically update estimates as designs evolve."
      },
      {
        heading: "How We Execute 5D BIM",
        content: "Terrene Engineers provides detailed, real-time cost analysis aligned with BIM data to support financial decision-making."
      },
      {
        heading: "Benefits of 5D BIM",
        isList: true,
        items: [
          { title: "Real-Time Updates", text: "Real-time budget updates as the design changes." },
          { title: "Reduced Overruns", text: "Significant reduction in cost overruns." },
          { title: "Transparent Management", text: "Transparent and clear cost management." },
          { title: "Better Value Engineering", text: "Supports better value engineering decisions." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We offer precise, cost-effective BIM services to keep your project financially on track."
      }
    ],
    callToAction: "Manage your budget smartly with 5D BIM. Contact us now."
  },
  // Post 49
{
    id: 50,
    cardTitle: "How 6D BIM Drives Energy Efficiency and Sustainable Construction",
    image: blogImages.blogImage50, // Make sure blogImage49 exists in your images index
    category: "BIM Services",
    description: "6D BIM incorporates sustainability metrics and energy analysis into BIM models to support eco-friendly construction and green building standards.",
    mainTitle: "How 6D BIM Drives Energy Efficiency and Sustainable Construction",
    subTitle: "6D BIM – Sustainability & Energy: Designing for a Greener Future",
    introduction: "6D BIM incorporates sustainability metrics and energy analysis into BIM models to support eco-friendly construction.",
    sections: [
      {
        heading: "What is 6D BIM?",
        content: "It evaluates energy use, environmental impact, and sustainable design strategies within the BIM framework."
      },
      {
        heading: "How We Execute 6D BIM",
        content: "Our experts use 6D BIM to optimize building performance, reduce emissions, and meet green building standards."
      },
      {
        heading: "Benefits of 6D BIM",
        isList: true,
        items: [
          { title: "Energy Efficiency", text: "Promotes highly energy-efficient building designs." },
          { title: "Lower Carbon Footprint", text: "Helps achieve a lower overall carbon footprint." },
          { title: "Standard Compliance", text: "Ensures compliance with environmental standards like LEED." },
          { title: "Operational Savings", text: "Delivers long-term operational savings through reduced energy use." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We guide you toward sustainable building solutions through advanced 6D BIM."
      }
    ],
    callToAction: "Build green with 6D BIM. Contact us today."
  },
  // Post 50
  {
    id: 51,
    cardTitle: "How 7D BIM Enhances Facility Management Throughout a Building's Lifecycle",
    image: blogImages.blogImage51, // Make sure blogImage50 exists in your images index
    category: "BIM Services",
    description: "7D BIM integrates building information with facility management to streamline operations, maintenance, and asset management.",
    mainTitle: "How 7D BIM Enhances Facility Management Throughout a Building's Lifecycle",
    subTitle: "7D BIM – Facility Management: Enhancing Building Operations",
    introduction: "7D BIM integrates building information with facility management to streamline operations and maintenance.",
    sections: [
      {
        heading: "What is 7D BIM?",
        content: "It links asset data, maintenance schedules, and operational information directly to the BIM model."
      },
      {
        heading: "How We Execute 7D BIM",
        content: "We provide BIM-enabled facility management systems that improve building lifecycle efficiency."
      },
      {
        heading: "Benefits of 7D BIM",
        isList: true,
        items: [
          { title: "Simplified Maintenance", text: "Simplified and proactive maintenance planning." },
          { title: "Improved Asset Management", text: "More accurate and efficient asset management." },
          { title: "Reduced Operational Costs", text: "Significant reduction in long-term operational costs." },
          { title: "Enhanced Longevity", text: "Enhanced building longevity and performance." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our 7D BIM services support efficient, cost-effective building management."
      }
    ],
    callToAction: "Optimize operations with 7D BIM. Contact us to learn more."
  },
  // Post 51
  {
    id: 52,
    cardTitle: "How 8D BIM Improves Safety and Minimizes On-Site Risks",
    image: blogImages.blogImage52, // Make sure blogImage51 exists in your images index
    category: "BIM Services",
    description: "8D BIM integrates safety planning into the BIM process to identify hazards, mitigate risks, and enhance overall site safety.",
    mainTitle: "How 8D BIM Improves Safety and Minimizes On-Site Risks",
    subTitle: "8D BIM – Safety & Risk Management: Prioritizing Site Safety",
    introduction: "8D BIM integrates safety planning into the BIM process to identify risks and enhance site safety.",
    sections: [
      {
        heading: "What is 8D BIM?",
        content: "It involves embedding safety data, hazard identification, and risk mitigation strategies within the BIM model."
      },
      {
        heading: "How We Execute 8D BIM",
        content: "Our team uses 8D BIM to simulate safe workflows and ensure compliance with safety regulations."
      },
      {
        heading: "Benefits of 8D BIM",
        isList: true,
        items: [
          { title: "Reduced Accidents", text: "A significant reduction in on-site accidents and incidents." },
          { title: "Improved Awareness", text: "Improved hazard awareness for all site personnel." },
          { title: "Enhanced Compliance", text: "Enhanced compliance with rigorous safety standards." },
          { title: "Proactive Risk Management", text: "Proactive, data-driven risk management." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We help create safer construction environments using 8D BIM."
      }
    ],
    callToAction: "Ensure safety on site with 8D BIM. Contact Terrene Engineers today."
  },
  // Post 52
  {
    id: 53,
    cardTitle: "How 9D BIM Powers Lean Construction and Boosts Project Efficiency",
    image: blogImages.blogImage53, // Make sure blogImage52 exists in your images index
    category: "BIM Services",
    description: "9D BIM supports lean construction principles to minimize material waste, streamline processes, and maximize overall productivity.",
    mainTitle: "How 9D BIM Powers Lean Construction and Boosts Project Efficiency",
    subTitle: "9D BIM - Lean Construction & Productivity: Maximizing Efficiency",
    introduction: "9D BIM supports lean construction principles to minimize waste and maximize productivity.",
    sections: [
      {
        heading: "What is 9D BIM?",
        content: "It integrates lean management practices with BIM data to optimize workflows and resource utilization."
      },
      {
        heading: "How We Execute 9D BIM",
        content: "We use 9D BIM to identify inefficiencies, reduce waste, and improve project delivery speed."
      },
      {
        heading: "Benefits of 9D BIM",
        isList: true,
        items: [
          { title: "Increased Productivity", text: "A measurable increase in project productivity." },
          { title: "Reduced Waste", text: "A significant reduction in material and time waste." },
          { title: "Streamlined Processes", text: "More streamlined and efficient construction processes." },
          { title: "Enhanced Value", text: "Enhanced overall project value for the client." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Terrene Engineers applies lean principles with BIM for efficient, cost-effective construction."
      }
    ],
    callToAction: "Boost productivity with 9D BIM. Contact us to get started."
  },
  // Post 53
  {
    id: 54,
    cardTitle: "Digital Twin: The Future of Real-Time Asset and Infrastructure Management",
    image: blogImages.blogImage54, // Make sure blogImage53 exists in your images index
    category: "Digital Twin",
    description: "Digital Twin technology creates dynamic virtual replicas that mirror real-world systems in real time for advanced monitoring and management.",
    mainTitle: "Digital Twin: The Future of Real-Time Asset and Infrastructure Management",
    subTitle: "Creating Intelligent, Connected Systems with Virtual Replica Technology",
    introduction: "Digital Twin technology is revolutionizing how organizations design, monitor, and manage assets and infrastructure by creating dynamic virtual replicas that mirror real-world systems in real time.",
    sections: [
      {
        heading: "What is a Digital Twin?",
        content: "A Digital Twin is a digital representation of a physical asset, system, or process, continuously updated with real-time data from sensors and IoT devices. This virtual model simulates, predicts, and optimizes performance throughout the asset’s lifecycle."
      },
      {
        heading: "How We Execute Digital Twin Services",
        content: "Terrene Engineers develops customized Digital Twin solutions tailored to your specific needs. By integrating data from multiple sources, we create interactive, real-time models that enhance decision-making, predictive maintenance, and operational efficiency."
      },
      {
        heading: "Benefits of Digital Twin Technology",
        isList: true,
        items: [
          { title: "Real-Time Monitoring", text: "Real-time monitoring of all critical assets and systems." },
          { title: "Predictive Analytics", text: "Predictive analytics to foresee and prevent system failures." },
          { title: "Enhanced Efficiency", text: "Enhanced operational efficiency and significant cost savings." },
          { title: "Improved Planning", text: "Improved design, simulation, and planning capabilities." },
          { title: "Streamlined Management", text: "Streamlined facility and infrastructure management." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expert team leverages cutting-edge technology and industry knowledge to deliver Digital Twin solutions that drive innovation and performance."
      }
    ],
    callToAction: "Experience the power of Digital Twin technology. Contact Terrene Engineers today to transform your assets into intelligent, connected systems."
  },
  // Post 54
  {
    id: 55,
    cardTitle: "How Digital Twins Enable Real-Time Monitoring and Smarter Asset Management",
    image: blogImages.blogImage55, // Make sure blogImage54 exists in your images index
    category: "Digital Twin",
    description: "Real-time asset monitoring empowers managers with up-to-the-minute data on the health and performance of building systems and equipment.",
    mainTitle: "How Digital Twins Enable Real-Time Monitoring and Smarter Asset Management",
    subTitle: "Real-Time Asset Monitoring & Performance Tracking: Stay Ahead with Instant Insights",
    introduction: "Real-time asset monitoring empowers facility managers with up-to-the-minute data on the health and performance of building systems and equipment, enabling proactive decision-making.",
    sections: [
      {
        heading: "What is Real-Time Asset Monitoring?",
        content: "This service uses sensors, IoT devices, and advanced software platforms to continuously track the operational status of assets, alerting stakeholders instantly about anomalies or inefficiencies."
      },
      {
        heading: "How We Execute Real-Time Monitoring",
        content: "Terrene Engineers integrates smart monitoring technologies and dashboards that provide accessible, actionable insights anytime and anywhere."
      },
      {
        heading: "Benefits of Real-Time Asset Monitoring",
        isList: true,
        items: [
          { title: "Early Fault Detection", text: "Early detection of faults and potential performance issues." },
          { title: "Reduced Downtime", text: "Reduced asset downtime and lower repair costs." },
          { title: "Extended Lifespan", text: "Extended overall asset lifespan through proactive care." },
          { title: "Data-Driven Decisions", text: "Data-driven maintenance and operational decisions." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We deliver cutting-edge monitoring solutions tailored to your assets and operational needs."
      }
    ],
    callToAction: "Take control of your facility’s performance with real-time asset monitoring. Contact us today."
  },
  // Post 55
{
    id: 56,
    cardTitle: "How Digital Twins Help Predict Problems Before They Happen",
    image: blogImages.blogImage56, // Make sure blogImage55 exists in your images index
    category: "Digital Twin",
    description: "Predictive and preventive maintenance strategies use data to anticipate and prevent equipment failures, ensuring asset longevity and reliability.",
    mainTitle: "How Digital Twins Help Predict Problems Before They Happen",
    subTitle: "Predictive & Preventive Maintenance: Minimizing Downtime, Maximizing Reliability",
    introduction: "Effective maintenance is key to asset longevity and uninterrupted operations. Predictive and preventive maintenance strategies help anticipate and prevent equipment failures.",
    sections: [
      {
        heading: "What is Predictive & Preventive Maintenance?",
        content: "Predictive maintenance analyzes sensor data to forecast potential failures, while preventive maintenance schedules regular upkeep to avoid breakdowns."
      },
      {
        heading: "How We Execute Maintenance Services",
        content: "Our team develops customized maintenance plans based on data analytics and industry best practices, ensuring timely interventions."
      },
      {
        heading: "Benefits of Predictive & Preventive Maintenance",
        isList: true,
        items: [
          { title: "Reduced Failures", text: "Reduced number of unexpected equipment failures." },
          { title: "Lower Expenses", text: "Lower overall maintenance and repair expenses." },
          { title: "Increased Uptime", text: "Increased operational uptime and productivity." },
          { title: "Enhanced Reliability", text: "Enhanced asset performance and long-term reliability." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Terrene Engineers offers expert maintenance planning that safeguards your investments and operations."
      }
    ],
    callToAction: "Keep your assets running smoothly with our predictive and preventive maintenance services. Contact us now."
  },
  // Post 56
  {
    id: 57,
    cardTitle: "How Digital Twins Maximize Energy Efficiency and Resource Use",
    image: blogImages.blogImage57, // Make sure blogImage56 exists in your images index
    category: "Digital Twin",
    description: "Optimizing energy and resource use is essential for reducing operational costs and minimizing environmental impact.",
    mainTitle: "How Digital Twins Maximize Energy Efficiency and Resource Use",
    subTitle: "Energy & Resource Optimization: Building Efficiency for a Sustainable Future",
    introduction: "Optimizing energy and resource use is essential for reducing costs and minimizing environmental impact while maintaining occupant comfort.",
    sections: [
      {
        heading: "What is Energy & Resource Optimization?",
        content: "This service involves analyzing consumption data and implementing strategies to reduce waste and improve efficiency across HVAC, lighting, water, and other systems."
      },
      {
        heading: "How We Execute Optimization",
        content: "We deploy smart meters, analytics tools, and control systems to monitor usage and recommend tailored solutions for energy savings."
      },
      {
        heading: "Benefits of Energy & Resource Optimization",
        isList: true,
        items: [
          { title: "Lower Costs", text: "Lower utility bills and operational costs." },
          { title: "Reduced Footprint", text: "Reduced carbon footprint and environmental impact." },
          { title: "Improved Comfort", text: "Improved occupant comfort and productivity." },
          { title: "Standard Compliance", text: "Compliance with modern sustainability standards." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our experts guide you through effective energy management to achieve your sustainability goals."
      }
    ],
    callToAction: "Boost your building’s efficiency with our energy and resource optimization solutions. Contact us today."
  },
  // Post 57
  {
    id: 58,
    cardTitle: "How Digital Twins Are Redefining Smart Facility Management",
    image: blogImages.blogImage58, // Make sure blogImage57 exists in your images index
    category: "Digital Twin",
    description: "Efficient facility management and optimized space utilization are vital for maximizing operational effectiveness and reducing overhead costs.",
    mainTitle: "How Digital Twins Are Redefining Smart Facility Management",
    subTitle: "Facility Management & Space Utilization: Maximizing Building Potential",
    introduction: "Efficient facility management and optimized space utilization are vital for maximizing operational effectiveness and reducing costs.",
    sections: [
      {
        heading: "What is Facility Management & Space Utilization?",
        content: "This service focuses on managing building operations, maintenance, and optimizing how space is allocated and used."
      },
      {
        heading: "How We Execute Facility Management",
        content: "Terrene Engineers uses BIM, IoT, and data analytics to track space usage, streamline maintenance, and enhance workplace environments."
      },
      {
        heading: "Benefits of Facility Management & Space Utilization",
        isList: true,
        items: [
          { title: "Increased Efficiency", text: "Increased day-to-day operational efficiency." },
          { title: "Better Space Planning", text: "Better space planning, allocation, and utilization." },
          { title: "Reduced Costs", text: "Reduced overhead and operational costs." },
          { title: "Enhanced Satisfaction", text: "Enhanced occupant satisfaction and productivity." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We offer comprehensive facility management solutions that optimize your assets and space."
      }
    ],
    callToAction: "Make the most of your building with expert facility management and space utilization services. Contact us now."
  },
  // Post 58
  {
    id: 59,
    cardTitle: "How Digital Twins Enable Remote Operations Like Never Before",
    image: blogImages.blogImage59, // Make sure blogImage58 exists in your images index
    category: "Digital Twin",
    description: "Remote operations and virtual control centers enable centralized, real-time monitoring and management of facilities from anywhere in the world.",
    mainTitle: "How Digital Twins Enable Remote Operations Like Never Before",
    subTitle: "Remote Operations & Virtual Control Centers: Managing Facilities from Anywhere",
    introduction: "Remote operations and virtual control centers enable centralized, real-time monitoring and management of facilities regardless of location.",
    sections: [
      {
        heading: "What are Remote Operations & Virtual Control Centers?",
        content: "These services use cloud-based platforms and IoT to remotely control building systems, monitor performance, and respond to issues instantly."
      },
      {
        heading: "How We Execute Remote Operations",
        content: "Our team implements secure, integrated control systems that provide comprehensive remote access and analytics."
      },
      {
        heading: "Benefits of Remote Operations & Virtual Control Centers",
        isList: true,
        items: [
          { title: "24/7 Monitoring", text: "Complete 24/7 facility monitoring and control." },
          { title: "Faster Response", text: "Faster response times to maintenance and emergencies." },
          { title: "Reduced On-Site Staff", text: "Reduced need for on-site staff, lowering costs." },
          { title: "Enhanced Transparency", text: "Enhanced operational transparency and reporting." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Terrene Engineers delivers state-of-the-art remote management solutions tailored to your facility’s needs."
      }
    ],
    callToAction: "Experience the future of facility management with remote operations and virtual control centers. Contact us today."
  },
  // Post 59
  {
    id: 60,
    cardTitle: "How Digital Twins Offer Unmatched Infrastructure Monitoring",
    image: blogImages.blogImage60, // Make sure blogImage59 exists in your images index
    category: "Digital Twin",
    description: "Infrastructure monitoring uses advanced technology to continuously assess the condition of vital assets, helping prevent failures and extend asset life.",
    mainTitle: "How Digital Twins Offer Unmatched Infrastructure Monitoring Capabilities",
    subTitle: "Infrastructure Monitoring: Ensuring the Safety and Longevity of Critical Assets",
    introduction: "Infrastructure monitoring leverages advanced technology to continuously assess the condition of vital infrastructure, helping prevent failures and extend asset life.",
    sections: [
      {
        heading: "What is Infrastructure Monitoring?",
        content: "This service employs sensors and data analytics to track the health of bridges, roads, utilities, and other key structures in real time."
      },
      {
        heading: "How We Execute Infrastructure Monitoring",
        content: "Terrene Engineers integrates IoT sensors with powerful analytics platforms, delivering actionable insights and early warnings."
      },
      {
        heading: "Benefits of Infrastructure Monitoring",
        isList: true,
        items: [
          { title: "Early Problem Detection", text: "Early detection of structural problems and degradation." },
          { title: "Enhanced Safety", text: "Enhanced public safety and asset reliability." },
          { title: "Prolonged Lifespan", text: "Prolonged overall asset lifespan." },
          { title: "Cost Savings", text: "Significant cost savings through proactive maintenance." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our innovative monitoring solutions help you protect your infrastructure investments efficiently."
      }
    ],
    callToAction: "Secure your infrastructure’s future with our expert monitoring services. Contact us today."
  },
  // Post 60
  {
    id: 61,
    cardTitle: "How Digital Twins Are Shaping the Smart Cities of Tomorrow",
    image: blogImages.blogImage61, // Make sure blogImage60 exists in your images index
    category: "Digital Twin",
    description: "Smart city and urban digital twin services create dynamic, real-time virtual models that help improve urban living and efficiency.",
    mainTitle: "How Digital Twins Are Shaping the Smart Cities of Tomorrow",
    subTitle: "Smart City & Urban Digital Twin Services: Shaping the Cities of Tomorrow",
    introduction: "Smart city and urban digital twin services create dynamic, real-time virtual models that help city planners and managers improve urban living and efficiency.",
    sections: [
      {
        heading: "What is Smart City & Urban Digital Twins?",
        content: "Digital twins are comprehensive digital replicas of urban environments, integrating data from multiple sources to simulate and optimize city operations."
      },
      {
        heading: "How We Execute Smart City & Urban Digital Twin Services",
        content: "Our team develops interactive digital twins that monitor traffic, energy use, environmental conditions, and infrastructure status for better planning."
      },
      {
        heading: "Benefits of Smart City & Urban Digital Twins",
        isList: true,
        items: [
          { title: "Smarter Urban Planning", text: "Data-driven, smarter urban planning and development." },
          { title: "Optimized Resources", text: "Optimized city-wide resource management." },
          { title: "Improved Public Safety", text: "Improved public safety and emergency services." },
          { title: "Enhanced Sustainability", text: "Enhanced urban sustainability and resilience efforts." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide tailored smart city solutions to help build sustainable, resilient urban environments."
      }
    ],
    callToAction: "Transform your city with our smart digital twin services. Get in touch today."
  },
  // Post 61
{
    id: 62,
    cardTitle: "How Digital Twins Help Simulate Disasters and Save Lives",
    image: blogImages.blogImage62, // Make sure blogImage61 exists in your images index
    category: "Digital Twin",
    description: "Preparing for emergencies is crucial. Our disaster simulation services use digital twins to help organizations train and plan effectively.",
    mainTitle: "How Digital Twins Help Simulate Disasters and Save Lives",
    subTitle: "Emergency Preparedness & Disaster Simulation: Building Resilience for the Unexpected",
    introduction: "Preparing for emergencies is crucial to minimize risks and damage. Our disaster simulation services help organizations train and plan effectively.",
    sections: [
      {
        heading: "What is Emergency Preparedness & Disaster Simulation?",
        content: "Using sophisticated simulation software, we model disasters such as floods, fires, and earthquakes to test response plans."
      },
      {
        heading: "How We Execute Emergency Preparedness & Disaster Simulation",
        content: "Terrene Engineers creates realistic scenarios and facilitates drills to improve readiness and coordination."
      },
      {
        heading: "Benefits of Emergency Preparedness & Disaster Simulation",
        isList: true,
        items: [
          { title: "Better Emergency Response", text: "A significantly better and more coordinated emergency response." },
          { title: "Reduced Downtime", text: "Reduced operational downtime after an incident." },
          { title: "Improved Team Coordination", text: "Improved coordination among response teams." },
          { title: "Data-Driven Enhancements", text: "Data-driven enhancements to your emergency plans." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We help clients enhance resilience with thorough preparedness strategies."
      }
    ],
    callToAction: "Prepare for any crisis with our expert simulation services. Contact us today."
  },
  // Post 62
  {
    id: 63,
    cardTitle: "How Digital Twins Integrate AR/VR for Immersive Training and Control",
    image: blogImages.blogImage63, // Make sure blogImage62 exists in your images index
    category: "Digital Twin",
    description: "AR and VR technologies revolutionize training and operations by offering immersive, hands-on experiences without physical risks.",
    mainTitle: "How Digital Twins Integrate AR/VR for Immersive Training and Control",
    subTitle: "AR/VR-based Operations & Training: Immersive Learning for Safer, Smarter Workplaces",
    introduction: "AR and VR technologies revolutionize training and operations by offering immersive, hands-on experiences without physical risks.",
    sections: [
      {
        heading: "What is AR/VR-based Operations & Training?",
        content: "These solutions use augmented and virtual reality platforms to simulate real-world conditions for education and operational management."
      },
      {
        heading: "How We Execute AR/VR-based Operations & Training",
        content: "Our specialists design customized AR/VR modules that enhance learning retention and operational control."
      },
      {
        heading: "Benefits of AR/VR-based Operations & Training",
        isList: true,
        items: [
          { title: "Safer Training", text: "Completely safe, risk-free training environments." },
          { title: "Higher Engagement", text: "Higher learner engagement and knowledge retention." },
          { title: "Reduced Costs", text: "Reduced overall training costs and logistical needs." },
          { title: "Enhanced Accuracy", text: "Enhanced operational accuracy and performance." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Terrene Engineers delivers cutting-edge AR/VR tools to transform how your team learns and works."
      }
    ],
    callToAction: "Step into the future with immersive AR/VR training solutions. Contact us now."
  },
  // Post 63
  {
    id: 64,
    cardTitle: "How Digital Twins Turn Data into Smarter Decisions",
    image: blogImages.blogImage64, // Make sure blogImage63 exists in your images index
    category: "Digital Twin",
    description: "Data-driven decision-making transforms operations by turning complex data from digital twins into clear, actionable insights.",
    mainTitle: "How Digital Twins Turn Data into Smarter Decisions",
    subTitle: "Operational Analytics & Decision-Making: Harnessing Data to Drive Excellence",
    introduction: "Data-driven decision-making transforms operations by turning complex data into clear, actionable insights.",
    sections: [
      {
        heading: "What is Operational Analytics & Decision-Making?",
        content: "This service uses data collection and analysis tools to optimize processes, predict challenges, and guide strategic planning."
      },
      {
        heading: "How We Execute Operational Analytics",
        content: "We implement integrated analytics platforms that deliver real-time dashboards and predictive models tailored to your needs."
      },
      {
        heading: "Benefits of Operational Analytics & Decision-Making",
        isList: true,
        items: [
          { title: "Greater Transparency", text: "Greater operational transparency and visibility." },
          { title: "Early Issue Identification", text: "Early identification of potential issues and bottlenecks." },
          { title: "Informed Decisions", text: "Informed, data-backed strategic decisions." },
          { title: "Continuous Improvements", text: "Continuous process and performance improvements." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Terrene Engineers equips you with powerful analytics for smarter, faster decisions."
      }
    ],
    callToAction: "Unlock the potential of your data with our operational analytics services. Contact us today."
  },
  // Post 64
  {
    id: 65,
    cardTitle: "How Smart Facility Management Enhances Building Efficiency and Longevity",
    image: blogImages.blogImage65, // Make sure blogImage64 exists in your images index
    category: "Facility Management",
    description: "Facility management ensures the smooth operation, maintenance, and safety of your buildings, maximizing asset value.",
    mainTitle: "How Smart Facility Management Enhances Building Efficiency and Longevity",
    subTitle: "Facility Management Services: Comprehensive Care for Your Buildings",
    introduction: "Facility management ensures the smooth operation, maintenance, and safety of your buildings, creating comfortable, efficient environments for occupants and maximizing asset value.",
    sections: [
      {
        heading: "What are Facility Management Services?",
        content: "These services cover all aspects of building operations, including maintenance, space management, compliance, and vendor coordination."
      },
      {
        heading: "How We Execute Facility Management",
        content: "Terrene Engineers offers customized facility management solutions, leveraging technology and best practices to optimize your building’s performance and reduce operating costs."
      },
      {
        heading: "Benefits of Facility Management Services",
        isList: true,
        items: [
          { title: "Enhanced Functionality", text: "Enhanced building functionality and safety." },
          { title: "Extended Asset Lifespan", text: "Extended lifespan of all building assets." },
          { title: "Improved Satisfaction", text: "Improved occupant satisfaction and comfort." },
          { title: "Cost-Effective Operations", text: "Cost-effective operations through preventive care." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide expert, reliable facility management tailored to your unique needs."
      }
    ],
    callToAction: "Optimize your building’s performance with our expert facility management services. Contact us today."
  },
  // Post 65
  {
    id: 66,
    cardTitle: "How Scheduled Maintenance Prevents Downtime and Saves Costs",
    image: blogImages.blogImage66, // Make sure blogImage65 exists in your images index
    category: "Facility Management",
    description: "Preventive and scheduled maintenance programs keep your building systems running efficiently by addressing issues before they cause downtime.",
    mainTitle: "How Scheduled Maintenance Prevents Downtime and Saves Costs",
    subTitle: "Preventive & Scheduled Maintenance: Proactive Care for Continuous Performance",
    introduction: "Preventive and scheduled maintenance programs keep your building systems running efficiently by addressing potential issues before they cause downtime.",
    sections: [
      {
        heading: "What is Preventive & Scheduled Maintenance?",
        content: "Regularly planned inspections and upkeep of equipment to avoid unexpected failures."
      },
      {
        heading: "How We Execute Maintenance",
        content: "Our team designs tailored schedules based on manufacturer recommendations and asset conditions to maximize reliability."
      },
      {
        heading: "Benefits of Preventive Maintenance",
        isList: true,
        items: [
          { title: "Reduced Emergency Repairs", text: "A significant reduction in emergency repairs." },
          { title: "Lower Maintenance Costs", text: "Lower overall maintenance costs over time." },
          { title: "Increased Lifespan", text: "Increased equipment and asset lifespan." },
          { title: "Improved Efficiency", text: "Improved system efficiency and performance." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We help you stay ahead with well-planned maintenance strategies."
      }
    ],
    callToAction: "Ensure uninterrupted building performance with our preventive maintenance services. Contact us now."
  },
  // Post 66
  {
    id: 67,
    cardTitle: "How Quick-Response Maintenance Restores Operations Fast",
    image: blogImages.blogImage67, // Make sure blogImage66 exists in your images index
    category: "Facility Management",
    description: "Corrective maintenance addresses unexpected equipment failures promptly to restore operations and minimize costly downtime.",
    mainTitle: "How Quick-Response Maintenance Restores Operations Fast",
    subTitle: "Corrective & Breakdown Maintenance: Fast and Effective Repairs When You Need Them",
    introduction: "Corrective maintenance addresses unexpected equipment failures promptly to restore operations and minimize downtime.",
    sections: [
      {
        heading: "What is Corrective & Breakdown Maintenance?",
        content: "This service involves repairing or replacing faulty systems as issues arise."
      },
      {
        heading: "How We Execute Maintenance",
        content: "Terrene Engineers provides rapid response teams equipped to diagnose and fix problems efficiently."
      },
      {
        heading: "Benefits of Corrective Maintenance",
        isList: true,
        items: [
          { title: "Quick Restoration", text: "Quick restoration of critical operations." },
          { title: "Minimized Disruption", text: "Minimized disruption to occupants and business." },
          { title: "Prevention of Damage", text: "Prevention of further damage to systems." },
          { title: "Reliable Repairs", text: "Reliable and effective repair services." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expert technicians ensure fast and effective breakdown support."
      }
    ],
    callToAction: "Get prompt, reliable repair services with our corrective maintenance solutions. Contact us today."
  },
  // Post 67
{
    id: 68,
    cardTitle: "How Reliable Electrical Maintenance Keeps Your Systems Safe and Stable",
    image: blogImages.blogImage68, // Make sure blogImage67 exists in your images index
    category: "Facility Management",
    description: "Electrical maintenance is critical for ensuring a safe, continuous power supply and compliance with all relevant safety standards.",
    mainTitle: "How Reliable Electrical Maintenance Keeps Your Systems Safe and Stable",
    subTitle: "Electrical Maintenance: Ensuring Safe and Reliable Power Systems",
    introduction: "Electrical maintenance is critical for safe, continuous power supply and compliance with safety standards.",
    sections: [
      {
        heading: "What is Electrical Maintenance?",
        content: "Routine inspections, testing, and repairs of electrical systems including wiring, panels, lighting, and backup power."
      },
      {
        heading: "How We Execute Electrical Maintenance",
        content: "Our certified electricians conduct thorough checks and preventive repairs to avoid hazards and outages."
      },
      {
        heading: "Benefits of Electrical Maintenance",
        isList: true,
        items: [
          { title: "Reduced Failure Risk", text: "A significantly reduced risk of electrical failures and outages." },
          { title: "Enhanced Safety", text: "Enhanced safety and protection for all occupants." },
          { title: "Energy Efficiency", text: "More energy-efficient system operation." },
          { title: "Regulatory Compliance", text: "Full compliance with all electrical regulations." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We deliver high-quality electrical maintenance with safety as the top priority."
      }
    ],
    callToAction: "Keep your electrical systems safe and reliable with our expert maintenance. Contact us today."
  },
  // Post 68
  {
    id: 69,
    cardTitle: "How HVAC Maintenance Creates Comfortable and Energy-Efficient Spaces",
    image: blogImages.blogImage69, // Make sure blogImage68 exists in your images index
    category: "Facility Management",
    description: "HVAC and mechanical maintenance ensure optimal indoor air quality, temperature control, and improved energy efficiency.",
    mainTitle: "How HVAC Maintenance Creates Comfortable and Energy-Efficient Spaces",
    subTitle: "HVAC & Mechanical Maintenance: Comfortable and Efficient Climate Control",
    introduction: "HVAC and mechanical maintenance ensure optimal indoor air quality, temperature control, and energy efficiency.",
    sections: [
      {
        heading: "What is HVAC & Mechanical Maintenance?",
        content: "Regular servicing of heating, ventilation, air conditioning, and mechanical systems."
      },
      {
        heading: "How We Execute HVAC & Mechanical Maintenance",
        content: "Our technicians perform inspections, cleaning, and repairs to maintain system performance and prolong equipment life."
      },
      {
        heading: "Benefits of HVAC & Mechanical Maintenance",
        isList: true,
        items: [
          { title: "Improved Comfort", text: "Improved and consistent occupant comfort." },
          { title: "Lower Energy Use", text: "Lower overall energy consumption and utility bills." },
          { title: "Reduced Repair Costs", text: "Reduced frequency of expensive emergency repair costs." },
          { title: "Extended Lifespan", text: "Extended equipment and system lifespan." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide comprehensive HVAC and mechanical maintenance tailored to your building’s needs."
      }
    ],
    callToAction: "Experience consistent comfort and efficiency with our HVAC and mechanical maintenance services. Contact us now."
  },
  // Post 69
  {
    id: 70,
    cardTitle: "How Proactive Plumbing Maintenance Prevents Costly Leaks and Failures",
    image: blogImages.blogImage70, // Make sure blogImage69 exists in your images index
    category: "Facility Management",
    description: "Maintaining plumbing and water systems is essential for ensuring clean water supply and efficient drainage in any building.",
    mainTitle: "How Proactive Plumbing Maintenance Prevents Costly Leaks and Failures",
    subTitle: "Plumbing & Water Systems Maintenance: Ensuring Reliable Water Supply and Drainage",
    introduction: "Maintaining plumbing and water systems is essential for the smooth functioning of any building, ensuring clean water supply and efficient drainage.",
    sections: [
      {
        heading: "What is Plumbing & Water Systems Maintenance?",
        content: "This service includes regular inspections, repairs, and upkeep of water supply lines, drainage systems, sewage, and fixtures."
      },
      {
        heading: "How We Execute Plumbing Maintenance",
        content: "Terrene Engineers performs leak detection, pipe cleaning, fixture maintenance, and timely repairs to prevent water damage and system failures."
      },
      {
        heading: "Benefits of Plumbing & Water Systems Maintenance",
        isList: true,
        items: [
          { title: "Prevents Leaks", text: "Prevents water leaks and subsequent property damage." },
          { title: "Maintains Water Quality", text: "Maintains consistent water quality and pressure." },
          { title: "Avoids Emergencies", text: "Avoids costly and disruptive emergency repairs." },
          { title: "Extends System Lifespan", text: "Extends the overall lifespan of the plumbing system." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide reliable plumbing maintenance to keep your water systems efficient and trouble-free."
      }
    ],
    callToAction: "Protect your building’s water infrastructure with our expert plumbing maintenance services. Contact us today."
  },
  // Post 70
  {
    id: 71,
    cardTitle: "How Facility Services Ensure Fire Safety and Secure Premises",
    image: blogImages.blogImage71, // Make sure blogImage70 exists in your images index
    category: "Facility Management",
    description: "Proper maintenance of fire safety and security systems is critical to protect occupants and assets from emergencies and threats.",
    mainTitle: "How Facility Services Ensure Fire Safety and Secure Premises",
    subTitle: "Fire Safety & Security Systems: Protecting Life and Property",
    introduction: "Proper maintenance of fire safety and security systems is critical to protect occupants and assets from emergencies and security threats.",
    sections: [
      {
        heading: "What is Fire Safety & Security Systems Maintenance?",
        content: "This involves regular inspection, testing, and servicing of fire alarms, extinguishers, sprinklers, CCTV, access control, and security alarms."
      },
      {
        heading: "How We Execute Fire Safety & Security Maintenance",
        content: "Our certified professionals ensure all systems comply with regulations and function optimally to provide maximum safety."
      },
      {
        heading: "Benefits of Fire Safety & Security Maintenance",
        isList: true,
        items: [
          { title: "Enhanced Safety", text: "Enhanced occupant safety and peace of mind." },
          { title: "Regulatory Compliance", text: "Full compliance with all safety regulations and codes." },
          { title: "Early Threat Detection", text: "Early detection and faster response to potential threats." },
          { title: "Reduced Risk", text: "Reduced risk of property damage and loss." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We deliver comprehensive, reliable maintenance for all your fire safety and security systems."
      }
    ],
    callToAction: "Keep your building safe with our expert fire safety and security maintenance services. Contact us now."
  },
  // Post 71
  {
    id: 72,
    cardTitle: "How Structural Maintenance Protects the Integrity of Your Building",
    image: blogImages.blogImage72, // Make sure blogImage71 exists in your images index
    category: "Facility Management",
    description: "Maintaining your building’s fabric and structure is essential to ensure its long-term safety, appearance, and durability.",
    mainTitle: "How Structural Maintenance Protects the Integrity of Your Building",
    subTitle: "Building Fabric & Structural Maintenance: Preserving Structural Integrity",
    introduction: "Maintaining your building’s fabric and structure is essential to ensure safety, appearance, and durability.",
    sections: [
      {
        heading: "What is Building Fabric & Structural Maintenance?",
        content: "This service includes upkeep of walls, roofs, floors, facades, windows, and load-bearing components."
      },
      {
        heading: "How We Execute Structural Maintenance",
        content: "Terrene Engineers conducts regular inspections, repairs cracks, waterproofs surfaces, and addresses wear and tear promptly."
      },
      {
        heading: "Benefits of Building Fabric & Structural Maintenance",
        isList: true,
        items: [
          { title: "Prevents Deterioration", text: "Prevents deterioration and serious structural damage." },
          { title: "Maintains Appeal", text: "Maintains the aesthetic appeal and value of the property." },
          { title: "Ensures Safety", text: "Ensures the safety of all occupants." },
          { title: "Minimizes Future Repairs", text: "Minimizes the need for costly future repairs." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide expert maintenance to safeguard your building’s structural health."
      }
    ],
    callToAction: "Protect your building’s integrity with our professional structural maintenance services. Contact us today."
  },
  // Post 72
  {
    id: 73,
    cardTitle: "How AMCs Deliver Peace of Mind and Predictable Performance",
    image: blogImages.blogImage73, // Make sure blogImage72 exists in your images index
    category: "Facility Management",
    description: "Annual Maintenance Contracts offer ongoing, scheduled maintenance to ensure your facility operates smoothly all year round.",
    mainTitle: "How AMCs Deliver Peace of Mind and Predictable Performance",
    subTitle: "Annual Maintenance Contracts (AMC): Hassle-Free, Continuous Support",
    introduction: "Annual Maintenance Contracts offer ongoing, scheduled maintenance to ensure your facility operates smoothly year-round.",
    sections: [
      {
        heading: "What is an AMC?",
        content: "An AMC is a service agreement covering routine inspections, preventive care, and timely repairs."
      },
      {
        heading: "How We Execute AMC",
        content: "Terrene Engineers offers customizable AMC packages tailored to your building’s unique needs and systems."
      },
      {
        heading: "Benefits of AMC",
        isList: true,
        items: [
          { title: "Predictable Costs", text: "Predictable and manageable maintenance costs." },
          { title: "Priority Service", text: "Receive priority service and faster response times." },
          { title: "Extended Asset Lifespan", text: "Achieve an extended lifespan for your assets." },
          { title: "Peace of Mind", text: "Gain peace of mind with professional, continuous support." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our flexible AMC plans provide reliable, continuous facility care."
      }
    ],
    callToAction: "Simplify your maintenance with our comprehensive Annual Maintenance Contracts. Contact us now."
  },
  // Post 73
{
    id: 74,
    cardTitle: "How AI-Driven Maintenance Predicts Issues Before They Happen",
    image: blogImages.blogImage74, // Make sure blogImage73 exists in your images index
    category: "Facility Management",
    description: "Predictive and smart maintenance uses IoT and data analytics to anticipate equipment issues before they happen, optimizing maintenance efforts.",
    mainTitle: "How AI-Driven Maintenance Predicts Issues Before They Happen",
    subTitle: "Predictive & Smart Maintenance: The Future of Facility Care",
    introduction: "Predictive and smart maintenance uses advanced technology to anticipate equipment issues before they happen, optimizing maintenance efforts.",
    sections: [
      {
        heading: "What is Predictive & Smart Maintenance?",
        content: "This approach utilizes IoT sensors, data analytics, and real-time monitoring to schedule maintenance based on actual equipment condition."
      },
      {
        heading: "How We Execute Predictive Maintenance",
        content: "We implement smart monitoring systems that analyze data trends and predict maintenance needs, reducing unplanned downtime."
      },
      {
        heading: "Benefits of Predictive & Smart Maintenance",
        isList: true,
        items: [
          { title: "Fewer Breakdowns", text: "Fewer unexpected equipment breakdowns." },
          { title: "Lower Costs", text: "Lower overall maintenance and operational costs." },
          { title: "Improved Reliability", text: "Improved asset reliability and performance." },
          { title: "Extended Life", text: "Extended equipment and asset life." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Terrene Engineers delivers cutting-edge, data-driven maintenance solutions to keep your operations running smoothly."
      }
    ],
    callToAction: "Upgrade to smart maintenance and prevent costly failures. Contact us today."
  },
  // Post 74
  {
    id: 75,
    cardTitle: "AI Engineering: Building Intelligent Systems for the Future",
    image: blogImages.blogImage75, // Make sure blogImage74 exists in your images index
    category: "AI Engineering",
    description: "AI Engineering combines artificial intelligence with engineering to deploy smart systems that optimize construction and infrastructure management.",
    mainTitle: "AI Engineering: Building Intelligent Systems for the Future of Construction",
    subTitle: "Integrating Advanced AI with Proven Engineering Principles",
    introduction: "AI Engineering combines advanced artificial intelligence techniques with engineering principles to design, develop, and deploy smart systems that optimize construction processes and infrastructure management.",
    sections: [
      {
        heading: "What is AI Engineering?",
        content: "AI Engineering involves developing AI-driven solutions that integrate with engineering workflows, including automation, predictive modeling and intelligent decision support, to improve efficiency, safety and accuracy."
      },
      {
        heading: "How We Execute AI Engineering",
        content: "Terrene Engineers applies machine learning, computer vision, natural language processing, and other AI technologies to develop custom applications tailored to construction and engineering challenges."
      },
      {
        heading: "Benefits of AI Engineering",
        isList: true,
        items: [
          { title: "Streamlined Workflows", text: "Streamlined project workflows through intelligent automation." },
          { title: "Enhanced Prediction", text: "Enhanced predictive maintenance and risk management." },
          { title: "Improved Accuracy", text: "Improved accuracy in design, planning, and construction." },
          { title: "Real-Time Support", text: "Real-time, data-driven decision-making support." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our multidisciplinary team combines AI expertise with deep engineering knowledge to deliver innovative, practical solutions that meet industry demands."
      }
    ],
    callToAction: "Transform your engineering projects with AI-powered innovation. Contact Terrene Engineers today to explore AI engineering solutions tailored for your needs."
  },
  // Post 75
  {
    id: 76,
    cardTitle: "How AI-Driven Design Is Revolutionizing Planning in Construction",
    image: blogImages.blogImage76, // Make sure blogImage75 exists in your images index
    category: "AI Engineering",
    description: "Artificial Intelligence (AI) is reshaping design and planning by enabling faster, more accurate, and optimized project outcomes.",
    mainTitle: "How AI-Driven Design Is Revolutionizing Planning in Construction",
    subTitle: "AI-Powered Design & Planning: Transforming Projects with Intelligent Innovation",
    introduction: "Artificial Intelligence (AI) is reshaping design and planning by enabling faster, more accurate, and optimized project outcomes.",
    sections: [
      {
        heading: "What is AI-Powered Design & Planning?",
        content: "This service integrates AI algorithms to automate design iterations, optimize layouts, and predict project risks."
      },
      {
        heading: "How We Execute AI-Powered Design & Planning",
        content: "Terrene Engineers employs AI tools that analyze vast data to enhance architectural and engineering designs, improving efficiency and innovation."
      },
      {
        heading: "Benefits of AI-Powered Design & Planning",
        isList: true,
        items: [
          { title: "Accelerated Design", text: "Significantly accelerated design and iteration processes." },
          { title: "Enhanced Accuracy", text: "Enhanced accuracy and opportunities for creativity." },
          { title: "Reduced Errors", text: "A reduction in costly errors and rework." },
          { title: "Informed Decisions", text: "Better, more informed decision-making from the start." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our AI-driven approach delivers smarter, faster project planning tailored to your needs."
      }
    ],
    callToAction: "Revolutionize your design and planning with our AI-powered solutions. Contact us today."
  },
  // Post 76
  {
    id: 77,
    cardTitle: "How Predictive Analytics Is Shaping the Future of Project Success",
    image: blogImages.blogImage77, // Make sure blogImage76 exists in your images index
    category: "AI Engineering",
    description: "Predictive analytics leverages historical and real-time data to forecast project outcomes, risks, and resource needs for better planning.",
    mainTitle: "How Predictive Analytics Is Shaping the Future of Project Success",
    subTitle: "Predictive Analytics & Forecasting: Anticipating Project Success with Data",
    introduction: "Predictive analytics leverages data to forecast project outcomes, risks, and resource needs for better planning.",
    sections: [
      {
        heading: "What is Predictive Analytics & Forecasting?",
        content: "Using AI and machine learning, this service analyzes historical and real-time data to predict trends and potential issues."
      },
      {
        heading: "How We Execute Predictive Analytics",
        content: "Terrene Engineers develops predictive models that inform scheduling, budgeting, and risk management."
      },
      {
        heading: "Benefits of Predictive Analytics",
        isList: true,
        items: [
          { title: "Early Risk Identification", text: "Early and more accurate risk identification." },
          { title: "Optimized Resources", text: "Optimized resource allocation and management." },
          { title: "Improved Timelines", text: "Improved project timelines and deadline adherence." },
          { title: "Data-Driven Support", text: "Reliable, data-driven decision support." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We empower you with insights to stay ahead of project challenges."
      }
    ],
    callToAction: "Make smarter predictions with our predictive analytics services. Contact us now."
  },
  // Post 77
  {
    id: 78,
    cardTitle: "How Robotics and AI Are Powering the Next Era of Smart Construction",
    image: blogImages.blogImage78, // Make sure blogImage77 exists in your images index
    category: "AI Engineering",
    description: "Smart construction integrates robotics and automation to increase productivity, safety, and precision on construction sites.",
    mainTitle: "How Robotics and AI Are Powering the Next Era of Smart Construction",
    subTitle: "Smart Construction & Robotics: Enhancing Efficiency through Automation",
    introduction: "Smart construction integrates robotics and automation to increase productivity, safety, and precision on site.",
    sections: [
      {
        heading: "What is Smart Construction & Robotics?",
        content: "This service employs robotic machinery, drones, and AI-powered tools to automate repetitive or hazardous tasks."
      },
      {
        heading: "How We Execute Smart Construction",
        content: "Terrene Engineers deploys advanced robotics and monitoring technologies to streamline construction workflows."
      },
      {
        heading: "Benefits of Smart Construction & Robotics",
        isList: true,
        items: [
          { title: "Increased Safety", text: "Increased safety for on-site personnel." },
          { title: "Faster Timelines", text: "Faster construction timelines and project delivery." },
          { title: "Higher Accuracy", text: "Higher accuracy, quality, and consistency." },
          { title: "Reduced Labor Costs", text: "Reduced labor costs on repetitive tasks." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We bring cutting-edge automation solutions to modernize your construction projects."
      }
    ],
    callToAction: "Boost your construction efficiency with our smart robotics services. Contact us today."
  },
  // Post 78
  {
    id: 79,
    cardTitle: "How AI-Enhanced Digital Twins Improve Accuracy and Performance",
    image: blogImages.blogImage79, // Make sure blogImage78 exists in your images index
    category: "AI Engineering",
    description: "Combining Digital Twin technology with AI creates powerful virtual models that learn and optimize asset performance in real time.",
    mainTitle: "How AI-Enhanced Digital Twins Improve Accuracy and Performance",
    subTitle: "Digital Twins with AI: Intelligent Virtual Replicas for Smarter Management",
    introduction: "Combining Digital Twin technology with AI creates powerful virtual models that learn and optimize in real time.",
    sections: [
      {
        heading: "What are Digital Twins with AI?",
        content: "AI-enhanced digital twins simulate and predict asset behavior, enabling proactive management and optimization."
      },
      {
        heading: "How We Execute AI-Powered Digital Twins",
        content: "Terrene Engineers develops intelligent digital twins integrated with machine learning to improve operational performance."
      },
      {
        heading: "Benefits of Digital Twins with AI",
        isList: true,
        items: [
          { title: "Predictive Insights", text: "Real-time predictive insights into asset performance." },
          { title: "Automated Detection", text: "Automated anomaly and fault detection." },
          { title: "Optimized Utilization", text: "Optimized asset and resource utilization." },
          { title: "Enhanced Lifecycle Management", text: "Enhanced end-to-end lifecycle management." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We deliver AI-driven digital twins that transform how you manage assets and infrastructure."
      }
    ],
    callToAction: "Unlock smart management with our AI-powered digital twin solutions. Contact us now."
  },
  // Post 79
{
    id: 80,
    cardTitle: "How AI-Enhanced Digital Twins Improve Accuracy and Performance",
    image: blogImages.blogImage80, // Make sure blogImage79 exists in your images index
    category: "AI Engineering",
    description: "Integrating AI with BIM and construction management systems improves coordination, risk management, and overall cost control.",
    mainTitle: "How AI-Enhanced Digital Twins Improve Accuracy and Performance",
    subTitle: "AI for BIM & Construction Management: Revolutionizing Project Coordination",
    introduction: "Integrating AI with BIM and construction management systems improves coordination, risk management, and cost control.",
    sections: [
      {
        heading: "What is AI for BIM & Construction Management?",
        content: "AI algorithms analyze BIM data to detect clashes, optimize schedules, and forecast project costs."
      },
      {
        heading: "How We Execute AI for BIM",
        content: "Terrene Engineers leverages AI-enhanced BIM tools to automate clash detection, optimize workflows, and provide actionable insights."
      },
      {
        heading: "Benefits of AI in BIM & Construction Management",
        isList: true,
        items: [
          { title: "Reduced Delays", text: "A reduction in project delays and costly errors." },
          { title: "Improved Estimation", text: "Improved cost estimation and budget accuracy." },
          { title: "Enhanced Collaboration", text: "Enhanced collaboration between project teams." },
          { title: "Proactive Risk Mitigation", text: "Proactive and data-driven risk mitigation." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our AI-enabled BIM solutions drive smarter, more efficient project delivery."
      }
    ],
    callToAction: "Transform your construction management with AI-integrated BIM. Contact us today."
  },
  // Post 80
  {
    id: 81,
    cardTitle: "How Construction Data Unlocks Powerful Insights and Smarter Decisions",
    image: blogImages.blogImage81, // Make sure blogImage80 exists in your images index
    category: "AI Engineering",
    description: "Data analytics converts vast amounts of raw construction data into meaningful insights that drive better business decisions and strategies.",
    mainTitle: "How Construction Data Unlocks Powerful Insights and Smarter Decisions",
    subTitle: "Data Analytics & Insights: Turning Construction Data into Business Intelligence",
    introduction: "Data analytics converts vast construction data into meaningful insights that drive better business decisions.",
    sections: [
      {
        heading: "What is Data Analytics & Insights?",
        content: "This service collects, processes, and analyzes project data to identify trends, inefficiencies, and opportunities."
      },
      {
        heading: "How We Execute Data Analytics",
        content: "Terrene Engineers implements data platforms and visualization tools that provide real-time, actionable insights."
      },
      {
        heading: "Benefits of Data Analytics",
        isList: true,
        items: [
          { title: "Enhanced Efficiency", text: "Enhanced operational and project efficiency." },
          { title: "Informed Planning", text: "Better informed strategic and long-term planning." },
          { title: "Improved Risk Management", text: "Improved and more proactive risk management." },
          { title: "Increased Profitability", text: "Increased overall profitability and ROI." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We empower your team with data-driven intelligence for competitive advantage."
      }
    ],
    callToAction: "Leverage your data with our expert analytics and insights services. Contact us now."
  },
  // Post 81
  {
    id: 82,
    cardTitle: "How Tailored AI Solutions Drive Innovation in Engineering Projects",
    image: blogImages.blogImage82, // Make sure blogImage81 exists in your images index
    category: "AI Engineering",
    description: "Every project is unique, and our custom AI solutions are designed to fit your specific challenges, workflows, and goals.",
    mainTitle: "How Tailored AI Solutions Drive Innovation in Engineering Projects",
    subTitle: "Custom AI Solutions & Consulting: Tailored AI to Meet Your Unique Needs",
    introduction: "Every project is unique, and our custom AI solutions are designed to fit your specific challenges and goals.",
    sections: [
      {
        heading: "What are Custom AI Solutions & Consulting?",
        content: "We develop and implement AI applications customized for your workflows, processes, and objectives."
      },
      {
        heading: "How We Execute Custom AI Consulting",
        content: "Terrene Engineers works closely with clients to identify opportunities and design AI strategies that deliver measurable results."
      },
      {
        heading: "Benefits of Custom AI Solutions",
        isList: true,
        items: [
          { title: "Tailored Automation", text: "Tailored automation and process optimization." },
          { title: "Scalable Applications", text: "Scalable and flexible AI applications that grow with you." },
          { title: "Expert Guidance", text: "Expert guidance and ongoing support from specialists." },
          { title: "Competitive Advantage", text: "A significant competitive business advantage." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our AI consulting ensures your investment drives real, impactful outcomes."
      }
    ],
    callToAction: "Discover custom AI solutions that transform your operations. Contact us today."
  },
  // Post 82
  {
    id: 83,
    cardTitle: "How Custom Furniture Design Brings Unique Vision to Life",
    image: blogImages.blogImage83, // Make sure blogImage82 exists in your images index
    category: "Furniture Solutions",
    description: "Custom furniture design brings your personal style and functional needs into your space by creating unique pieces crafted specifically for you.",
    mainTitle: "How Custom Furniture Design Brings Unique Vision to Life",
    subTitle: "Custom Furniture Design: Unique Pieces Tailored to Your Vision",
    introduction: "Custom furniture design allows you to bring your personal style and functional needs into your living or work environment by creating unique pieces crafted specifically for your space.",
    sections: [
      {
        heading: "What is Custom Furniture Design?",
        content: "Custom furniture is designed and built from scratch based on your specific requirements, including size, material, finish, and style, ensuring every piece complements your interior perfectly."
      },
      {
        heading: "How We Execute Custom Furniture Design",
        content: "At Terrene Engineers, we engage closely with clients throughout the design process, from conceptual sketches to 3D modeling, ensuring that the final piece reflects your vision and lifestyle. We use high-quality materials and skilled artisans to deliver superior craftsmanship."
      },
      {
        heading: "Benefits of Custom Furniture Design",
        isList: true,
        items: [
          { title: "Personalized Style", text: "Personalized style and function that standard furniture cannot match." },
          { title: "Optimized Use of Space", text: "Optimized use of available space, especially in challenging layouts." },
          { title: "Superior Craftsmanship", text: "Superior craftsmanship tailored to your durability expectations." },
          { title: "Unique Character", text: "Unique pieces that enhance the character and ambiance of your space." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "With our blend of design expertise and precision fabrication, we transform ideas into timeless furniture that fits perfectly and lasts for years."
      }
    ],
    callToAction: "Turn your furniture dreams into reality with our custom design services. Contact us today for a consultation."
  },
  // Post 83
  {
    id: 84,
    cardTitle: "How Modular Furniture Offers Flexibility and Functionality",
    image: blogImages.blogImage84, // Make sure blogImage83 exists in your images index
    category: "Furniture Solutions",
    description: "Modular furniture is designed for flexibility, enabling spaces to adapt quickly to changing needs without major renovations.",
    mainTitle: "How Modular Furniture Offers Flexibility and Functionality for Every Space",
    subTitle: "Modular Furniture Solutions: Flexible and Efficient Space Planning",
    introduction: "Modular furniture is designed for flexibility, enabling spaces to adapt quickly to changing needs without major renovations, making it ideal for modern homes, offices, and commercial spaces.",
    sections: [
      {
        heading: "What are Modular Furniture Solutions?",
        content: "These systems consist of standardized, interchangeable units that can be configured in various ways, allowing for easy rearrangement, expansion, or downsizing."
      },
      {
        heading: "How We Execute Modular Furniture Solutions",
        content: "Terrene Engineers designs modular units that combine functionality and style, offering a wide range of materials, finishes, and ergonomic options. We work to ensure easy assembly, durability, and aesthetic appeal."
      },
      {
        heading: "Benefits of Modular Furniture",
        isList: true,
        items: [
          { title: "Adaptable Layouts", text: "Adaptable layouts for growing or evolving needs." },
          { title: "Cost-Effective", text: "A cost-effective alternative to full furniture replacements." },
          { title: "Quick Installation", text: "Quick installation and reconfiguration, reducing downtime." },
          { title: "Sustainable Choice", text: "A sustainable choice by minimizing waste through reusable components." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our modular furniture solutions offer you the ultimate flexibility without sacrificing design or quality."
      }
    ],
    callToAction: "Discover adaptable furniture that grows with you. Contact us for modular furniture solutions tailored to your space."
  },
  // Post 84
  {
    id: 85,
    cardTitle: "How Quality Manufacturing Shapes Durable and Elegant Furniture",
    image: blogImages.blogImage85, // Make sure blogImage84 exists in your images index
    category: "Furniture Solutions",
    description: "Furniture manufacturing and fabrication is the backbone of turning designs into durable, functional, and aesthetically pleasing pieces.",
    mainTitle: "How Quality Manufacturing Shapes Durable and Elegant Furniture",
    subTitle: "Furniture Manufacturing & Fabrication: Quality Craftsmanship You Can Trust",
    introduction: "Furniture manufacturing and fabrication is the backbone of turning designs into durable, functional, and aesthetically pleasing pieces that meet client expectations.",
    sections: [
      {
        heading: "What is Furniture Manufacturing & Fabrication?",
        content: "This service covers the entire process of crafting furniture, from material selection and cutting to assembly and finishing, combining skilled craftsmanship with modern manufacturing technology."
      },
      {
        heading: "How We Execute Manufacturing & Fabrication",
        content: "At Terrene Engineers, we use state-of-the-art equipment alongside traditional woodworking techniques to produce furniture that meets strict quality standards. Our quality control ensures every piece is flawless and built to last."
      },
      {
        heading: "Benefits of Our Manufacturing Services",
        isList: true,
        items: [
          { title: "Precision Engineering", text: "Precision engineering and meticulous attention to detail." },
          { title: "Premium Materials", text: "Use of premium materials for both strength and beauty." },
          { title: "Consistent Quality", text: "Consistent production quality across all individual pieces." },
          { title: "Handles Custom Orders", text: "Ability to handle custom orders and large-scale projects efficiently." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We blend the best of technology and craftsmanship to produce furniture that combines functionality, durability, and style."
      }
    ],
    callToAction: "Entrust your furniture manufacturing needs to us for unmatched quality and service. Contact us today."
  },
  // Post 85
{
    id: 86,
    cardTitle: "How Turnkey Fit-Outs Simplify Complete Interior Transformations",
    image: blogImages.blogImage86, // Make sure blogImage85 exists in your images index
    category: "Furniture Solutions",
    description: "Turnkey fit-outs provide a complete solution, managing everything from design and procurement to installation, saving you time and stress.",
    mainTitle: "How Turnkey Fit-Outs Simplify Complete Interior Transformations",
    subTitle: "Turnkey Interior & Furniture Fit-Outs: Seamless Project Delivery",
    introduction: "Turnkey fit-outs provide a complete solution, managing everything from design and procurement to installation, saving clients time and stress.",
    sections: [
      {
        heading: "What are Turnkey Interior & Furniture Fit-Outs?",
        content: "A turnkey fit-out is a comprehensive service where the provider handles all aspects of furnishing and fitting out a space, delivering a ready-to-use environment upon completion."
      },
      {
        heading: "How We Execute Turnkey Fit-Outs",
        content: "Terrene Engineers manages every stage of the process, including design development, sourcing, manufacturing, delivery and professional installation, ensuring the project is completed on time, within budget and to precise specifications."
      },
      {
        heading: "Benefits of Turnkey Fit-Outs",
        isList: true,
        items: [
          { title: "Single Point of Contact", text: "A single point of accountability and communication." },
          { title: "Streamlined Process", text: "Streamlined project timeline and better cost control." },
          { title: "High-Quality Results", text: "High-quality, coordinated results that meet brand and functional needs." },
          { title: "Reduced Client Involvement", text: "Reduced client involvement in day-to-day management." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our turnkey services offer peace of mind and ensure your space is completed to the highest standards without hassle."
      }
    ],
    callToAction: "Let us handle your next interior and furniture fit-out with professionalism and care. Contact us for turnkey solutions."
  },
  // Post 86
  {
    id: 87,
    cardTitle: "How Purpose-Built Furniture Elevates Commercial and Institutional Spaces",
    image: blogImages.blogImage87, // Make sure blogImage86 exists in your images index
    category: "Furniture Solutions",
    description: "Furniture for commercial and institutional settings must withstand heavy use while providing comfort and professionalism to users.",
    mainTitle: "How Purpose-Built Furniture Elevates Commercial and Institutional Spaces",
    subTitle: "Commercial & Institutional Furniture: Durable and Functional Solutions",
    introduction: "Furniture for commercial and institutional settings must withstand heavy use while providing comfort and professionalism to users.",
    sections: [
      {
        heading: "What is Commercial & Institutional Furniture?",
        content: "This furniture category includes desks, chairs, storage, and specialized furnishings designed specifically for offices, educational institutions, hospitals, and other public spaces."
      },
      {
        heading: "How We Execute Commercial Furniture Solutions",
        content: "Terrene Engineers designs and manufactures furniture that complies with industry standards for durability and ergonomics, using robust materials and finishes that resist wear."
      },
      {
        heading: "Benefits of Commercial & Institutional Furniture",
        isList: true,
        items: [
          { title: "Long-Lasting", text: "Long-lasting and built to endure daily heavy use." },
          { title: "Ergonomic Design", text: "Designed for ergonomic comfort and productivity." },
          { title: "Regulatory Compliant", text: "Compliant with safety and accessibility regulations." },
          { title: "Professional Appearance", text: "Enhances the professional appearance of your space." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide commercial and institutional furniture that supports your operational needs without compromising on style or quality."
      }
    ],
    callToAction: "Equip your workspace or institution with reliable, stylish furniture from Terrene Engineers. Contact us today."
  },
  // Post 87
  {
    id: 88,
    cardTitle: "How Innovative Outdoor Furniture Enhances Open-Air Living",
    image: blogImages.blogImage88, // Make sure blogImage87 exists in your images index
    category: "Furniture Solutions",
    description: "Outdoor furniture is designed to withstand diverse weather conditions while offering comfort and style for unique environments.",
    mainTitle: "How Innovative Outdoor Furniture Enhances Open-Air Living",
    subTitle: "Outdoor & Specialty Furniture: Durable Designs for Every Environment",
    introduction: "Outdoor and specialty furniture is designed to withstand diverse weather conditions while offering comfort and style tailored to unique environments and uses.",
    sections: [
      {
        heading: "What is Outdoor & Specialty Furniture?",
        content: "This category includes furniture specifically crafted for outdoor spaces such as gardens, patios, and public areas, as well as specialized pieces for unique commercial or residential needs."
      },
      {
        heading: "How We Execute Outdoor & Specialty Furniture Projects",
        content: "Terrene Engineers selects weather-resistant materials like treated wood, metal alloys, and synthetic fibers, combining them with innovative designs that balance durability, functionality, and aesthetics."
      },
      {
        heading: "Benefits of Outdoor & Specialty Furniture",
        isList: true,
        items: [
          { title: "Weather Resilient", text: "Resilient to harsh environmental factors like UV rays, moisture, and temperature changes." },
          { title: "Designed for Comfort", text: "Designed for comfort and usability in open-air settings." },
          { title: "Customizable", text: "Customizable to suit specific themes and space requirements." },
          { title: "Enhances Spaces", text: "Enhances outdoor spaces with stylish and practical furniture." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expertise in sourcing and crafting specialty furniture ensures long-lasting pieces that elevate your outdoor environments."
      }
    ],
    callToAction: "Create inviting outdoor spaces with our durable, stylish outdoor and specialty furniture solutions. Contact us today."
  },
  // Post 88
  {
    id: 89,
    cardTitle: "How Strategic Sourcing Ensures Quality and Affordability in Furniture",
    image: blogImages.blogImage89, // Make sure blogImage88 exists in your images index
    category: "Furniture Solutions",
    description: "Reliable furniture supply and sourcing ensure you get high-quality products on time and within budget for any project.",
    mainTitle: "How Strategic Sourcing Ensures Quality and Affordability in Furniture Supply",
    subTitle: "Furniture Supply & Sourcing: Quality Pieces Delivered to Your Doorstep",
    introduction: "Reliable furniture supply and sourcing ensure you get high-quality products on time and within budget, whether for residential, commercial, or institutional needs.",
    sections: [
      {
        heading: "What is Furniture Supply & Sourcing?",
        content: "This service involves procuring furniture from trusted manufacturers and suppliers, managing logistics, and delivering the right products to your project site."
      },
      {
        heading: "How We Execute Furniture Supply & Sourcing",
        content: "Terrene Engineers partners with reputable vendors locally and internationally, carefully selecting products that meet quality standards, design preferences, and project specifications."
      },
      {
        heading: "Benefits of Furniture Supply & Sourcing",
        isList: true,
        items: [
          { title: "Wide Range of Options", text: "Access to a wide range of quality furniture options." },
          { title: "Streamlined Process", text: "Streamlined procurement and delivery processes." },
          { title: "Cost-Effective", text: "Cost-effective purchasing through strong supplier relationships." },
          { title: "Reduced Delays", text: "Reduced lead times and project delays." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We manage your furniture sourcing needs with professionalism and efficiency, ensuring timely delivery of the best products."
      }
    ],
    callToAction: "Simplify your furniture procurement with our expert supply and sourcing services. Contact us today."
  },
  // Post 89
  {
    id: 90,
    cardTitle: "How Expert Restoration Extends the Life of Your Furniture Assets",
    image: blogImages.blogImage90, // Make sure blogImage89 exists in your images index
    category: "Furniture Solutions",
    description: "Restoration and maintenance services help extend the life and beauty of your furniture, preserving its value and functionality over time.",
    mainTitle: "How Expert Restoration Extends the Life of Your Furniture Assets",
    subTitle: "Restoration & Maintenance Services: Preserving the Life of Your Furniture",
    introduction: "Restoration and maintenance services help extend the life and beauty of your furniture, preserving its value and functionality over time.",
    sections: [
      {
        heading: "What are Restoration & Maintenance Services?",
        content: "These services include cleaning, repairing, refinishing, and refurbishing furniture to restore appearance and structural integrity."
      },
      {
        heading: "How We Execute Restoration & Maintenance",
        content: "Our skilled technicians assess each piece’s condition, applying appropriate restoration techniques and using quality materials to maintain original aesthetics and strength."
      },
      {
        heading: "Benefits of Restoration & Maintenance",
        isList: true,
        items: [
          { title: "Extends Lifespan", text: "Extends furniture lifespan and day-to-day usability." },
          { title: "Maintains Appeal", text: "Maintains or enhances the original aesthetic appeal." },
          { title: "Protects Investment", text: "Protects your investment by avoiding premature replacement." },
          { title: "Restores Comfort", text: "Restores original comfort and functionality." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We combine craftsmanship with care to breathe new life into your valued furniture pieces."
      }
    ],
    callToAction: "Protect your furniture investment with our professional restoration and maintenance services. Contact us now."
  },
  // Post 90
  {
    id: 91,
    cardTitle: "How Smart Furniture Is Redefining Modern Living & Workspaces",
    image: blogImages.blogImage91, // Make sure blogImage90 exists in your images index
    category: "Furniture Solutions",
    description: "Smart and innovative furniture incorporates technology to enhance functionality, comfort, and user experience in today’s connected world.",
    mainTitle: "How Smart Furniture Is Redefining Modern Living & Workspaces",
    subTitle: "Smart & Innovative Furniture: Integrating Technology for Modern Living",
    introduction: "Smart and innovative furniture incorporates technology to enhance functionality, comfort, and user experience in today’s connected world.",
    sections: [
      {
        heading: "What is Smart & Innovative Furniture?",
        content: "This furniture includes features like built-in charging ports, adjustable ergonomics, modular tech integrations, and IoT-enabled components."
      },
      {
        heading: "How We Execute Smart Furniture Solutions",
        content: "Terrene Engineers designs and fabricates furniture that seamlessly blends technology and design, offering convenience and efficiency for homes and offices."
      },
      {
        heading: "Benefits of Smart & Innovative Furniture",
        isList: true,
        items: [
          { title: "Enhanced Convenience", text: "Enhanced user comfort and convenience." },
          { title: "Multifunctional Designs", text: "Space-saving multifunctional designs." },
          { title: "Future-Ready", text: "Future-ready integration with smart home/office systems." },
          { title: "Increased Productivity", text: "Increased productivity and overall lifestyle quality." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We lead the way in creating furniture solutions that meet the demands of modern, tech-savvy lifestyles."
      }
    ],
    callToAction: "Upgrade your space with our smart and innovative furniture solutions. Contact us today."
  },
  // Post 91
{
    id: 92,
    cardTitle: "How Professional Planning Delivers Functional and Aesthetic Furniture",
    image: blogImages.blogImage92, // Make sure blogImage91 exists in your images index
    category: "Furniture Solutions",
    description: "Furniture consultancy and planning ensure your space is furnished effectively to meet aesthetic, functional, and budgetary goals.",
    mainTitle: "How Professional Planning Delivers Functional and Aesthetic Furniture Solutions",
    subTitle: "Consultancy & Furniture Planning: Expert Guidance for Perfect Spaces",
    introduction: "Furniture consultancy and planning ensure your space is furnished effectively to meet aesthetic, functional, and budgetary goals.",
    sections: [
      {
        heading: "What is Furniture Consultancy & Planning?",
        content: "This service involves analyzing space requirements, recommending furniture layouts, styles, and materials, and assisting in procurement and installation."
      },
      {
        heading: "How We Execute Consultancy & Planning",
        content: "Terrene Engineers works closely with clients to understand needs, then develops detailed plans, 3D visualizations, and procurement strategies tailored to each project."
      },
      {
        heading: "Benefits of Furniture Consultancy & Planning",
        isList: true,
        items: [
          { title: "Optimized Space", text: "Optimized use of both your space and budget." },
          { title: "Harmonized Design", text: "Harmonized aesthetics and day-to-day functionality." },
          { title: "Expert Recommendations", text: "Expert recommendations based on trends and best practices." },
          { title: "Smooth Coordination", text: "Smooth coordination from initial concept to final installation." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our experienced consultants help you make informed decisions, ensuring your furniture choices enhance your environment."
      }
    ],
    callToAction: "Achieve the perfect furniture plan with our expert consultancy services. Contact us now."
  },
  // Post 92
  {
    id: 93,
    cardTitle: "How Expert Material Selection Drives Project Success",
    image: blogImages.blogImage93, // Make sure blogImage92 exists in your images index
    category: "Material Consultancy",
    description: "Selecting the right materials is crucial for the durability, safety, and aesthetic success of any construction or engineering project.",
    mainTitle: "How Expert Material Selection Drives Project Success",
    subTitle: "Material Selection & Specification: Choosing the Right Materials for Every Project",
    introduction: "Selecting the right materials is crucial for the durability, safety, and aesthetic success of any construction or engineering project.",
    sections: [
      {
        heading: "What is Material Selection & Specification?",
        content: "This service involves identifying and recommending appropriate materials based on project requirements, environmental conditions, and performance criteria."
      },
      {
        heading: "How We Execute Material Selection & Specification",
        content: "Terrene Engineers assesses project goals and site conditions to specify materials that meet quality, durability, and budget needs, ensuring compliance with relevant standards."
      },
      {
        heading: "Benefits of Material Selection & Specification",
        isList: true,
        items: [
          { title: "Improved Longevity", text: "Improved project longevity and long-term performance." },
          { title: "Cost-Effective Choices", text: "Cost-effective material choices without compromising quality." },
          { title: "Enhanced Safety", text: "Enhanced safety and full regulatory compliance." },
          { title: "Tailored Solutions", text: "Tailored solutions for unique and challenging project needs." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expert knowledge ensures you get the best materials suited to your project’s specific demands."
      }
    ],
    callToAction: "Get expert guidance on material selection for your next project. Contact us today."
  },
  // Post 93
  {
    id: 94,
    cardTitle: "Why Rigorous Material Testing Ensures Quality You Can Trust",
    image: blogImages.blogImage94, // Make sure blogImage93 exists in your images index
    category: "Material Consultancy",
    description: "Material testing and certification validate the quality and suitability of construction materials, ensuring safety and regulatory compliance.",
    mainTitle: "Why Rigorous Material Testing Ensures Quality You Can Trust",
    subTitle: "Material Testing & Certification: Ensuring Quality and Compliance",
    introduction: "Material testing and certification validate the quality and suitability of construction materials, ensuring safety and regulatory compliance.",
    sections: [
      {
        heading: "What is Material Testing & Certification?",
        content: "This involves laboratory and field testing of materials such as concrete, steel, and soil, followed by certification confirming adherence to standards."
      },
      {
        heading: "How We Execute Material Testing & Certification",
        content: "Terrene Engineers partners with accredited labs to conduct comprehensive testing and provide reliable certifications for your materials."
      },
      {
        heading: "Benefits of Material Testing & Certification",
        isList: true,
        items: [
          { title: "Confidence in Performance", text: "Full confidence in material performance and safety." },
          { title: "Standard Compliance", text: "Compliance with all national and international standards." },
          { title: "Early Defect Detection", text: "Early detection of material defects or inconsistencies." },
          { title: "Reduced Risk", text: "A significantly reduced risk of structural failures." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We ensure your materials meet the highest quality standards for successful project delivery."
      }
    ],
    callToAction: "Secure your project’s integrity with our trusted material testing and certification services. Contact us now."
  },
  // Post 94
  {
    id: 95,
    cardTitle: "How Smart Sourcing Secures the Best Prices Without Compromise",
    image: blogImages.blogImage95, // Make sure blogImage94 exists in your images index
    category: "Material Consultancy",
    description: "Obtaining the best price for quality materials is essential for keeping your project within budget while maintaining high standards.",
    mainTitle: "How Smart Sourcing Secures the Best Prices Without Compromise",
    subTitle: "Best Material Price: Cost-Effective Procurement Without Compromise",
    introduction: "Obtaining the best price for quality materials is essential for keeping your project within budget while maintaining standards.",
    sections: [
      {
        heading: "What is Best Material Price Service?",
        content: "This service focuses on sourcing materials at competitive prices through strong supplier relationships and market knowledge."
      },
      {
        heading: "How We Execute Material Pricing",
        content: "Terrene Engineers leverages an extensive supplier network to negotiate favorable terms and identify cost-saving opportunities without sacrificing quality."
      },
      {
        heading: "Benefits of Best Material Price",
        isList: true,
        items: [
          { title: "Reduced Project Costs", text: "A significant reduction in overall project costs." },
          { title: "Access to Reliable Suppliers", text: "Access to reliable suppliers and high-quality materials." },
          { title: "Transparent Pricing", text: "Transparent pricing and clear procurement processes." },
          { title: "Improved Budget Management", text: "Improved and more predictable budget management." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expertise helps you maximize value on material purchases."
      }
    ],
    callToAction: "Achieve the best prices for your project materials with our procurement expertise. Contact us today."
  },
  // Post 95
  {
    id: 96,
    cardTitle: "Building Green: How Sustainable Materials Shape the Future",
    image: blogImages.blogImage96, // Make sure blogImage95 exists in your images index
    category: "Material Consultancy",
    description: "Sustainable material consultancy guides your project towards eco-friendly choices that minimize environmental impact.",
    mainTitle: "Building Green: How Sustainable Materials Shape the Future",
    subTitle: "Sustainable & Green Material Consultancy: Building a Greener Future",
    introduction: "Sustainable material consultancy guides your project towards eco-friendly material choices that minimize environmental impact.",
    sections: [
      {
        heading: "What is Sustainable & Green Material Consultancy?",
        content: "This service identifies and recommends materials that are renewable, recyclable, and have low carbon footprints."
      },
      {
        heading: "How We Execute Sustainable Material Consultancy",
        content: "Terrene Engineers evaluates environmental goals and compliance requirements, suggesting green alternatives that support sustainability certifications."
      },
      {
        heading: "Benefits of Sustainable Material Consultancy",
        isList: true,
        items: [
          { title: "Reduced Environmental Impact", text: "A reduced overall environmental impact." },
          { title: "Green Building Compliance", text: "Compliance with green building standards like LEED." },
          { title: "Enhanced Building Performance", text: "Enhanced building performance and occupant health." },
          { title: "Positive Brand Image", text: "A positive brand image and social responsibility." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We help you integrate sustainability into your material selection and procurement."
      }
    ],
    callToAction: "Go green with expert guidance on sustainable materials. Contact us now."
  },
  // Post 96
  {
    id: 97,
    cardTitle: "Mastering Concrete: Expert Guidance for Stronger Foundations",
    image: blogImages.blogImage97, // Make sure blogImage96 exists in your images index
    category: "Material Consultancy",
    description: "Concrete and cementitious materials are foundational to construction, requiring expert consultancy for optimal mix design and performance.",
    mainTitle: "Mastering Concrete: Expert Guidance for Stronger Foundations",
    subTitle: "Concrete & Cementitious Material Consultancy: Expert Advice for Structural Strength",
    introduction: "Concrete and cementitious materials are foundational to construction, requiring expert consultancy for optimal mix design and performance.",
    sections: [
      {
        heading: "What is Concrete & Cementitious Material Consultancy?",
        content: "This involves advising on material selection, mix proportions, additives, and testing to ensure strength, durability, and workability."
      },
      {
        heading: "How We Execute Concrete Consultancy",
        content: "Terrene Engineers collaborates with clients and suppliers to develop concrete mixes tailored to project specifications and environmental conditions."
      },
      {
        heading: "Benefits of Concrete & Cementitious Material Consultancy",
        isList: true,
        items: [
          { title: "Improved Structural Integrity", text: "Improved structural integrity and long-term longevity." },
          { title: "Optimized Material Usage", text: "Optimized material usage and better cost efficiency." },
          { title: "Enhanced Workability", text: "Enhanced workability and predictable setting times." },
          { title: "Full Compliance", text: "Compliance with all project and regulatory requirements." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expertise ensures your concrete materials perform reliably under all conditions."
      }
    ],
    callToAction: "Ensure durable construction with our concrete and cementitious material consultancy. Contact us today."
  },
  // Post 97
{
    id: 98,
    cardTitle: "Steel Solutions: Optimizing Strength and Durability in Construction",
    image: blogImages.blogImage98, // Make sure blogImage97 exists in your images index
    category: "Material Consultancy",
    description: "Steel and metal materials require precise consultancy to ensure safety, durability, and cost-effectiveness in modern construction.",
    mainTitle: "Steel Solutions: Optimizing Strength and Durability in Construction",
    subTitle: "Steel & Metal Material Consultancy: Expert Guidance for Stronger Structures",
    introduction: "Steel and metal materials form the backbone of many construction projects, requiring precise consultancy to ensure safety, durability, and cost-effectiveness.",
    sections: [
      {
        heading: "What is Steel & Metal Material Consultancy?",
        content: "This service includes selection, specification, and testing of steel and metal components suitable for structural, architectural, and mechanical applications."
      },
      {
        heading: "How We Execute Steel & Metal Consultancy",
        content: "Terrene Engineers evaluates project needs, recommends appropriate grades and treatments, and advises on fabrication and installation best practices."
      },
      {
        heading: "Benefits of Steel & Metal Consultancy",
        isList: true,
        items: [
          { title: "Ensures Strength", text: "Ensures structural strength and long-term longevity." },
          { title: "Optimizes Cost", text: "Optimizes material use and overall project cost." },
          { title: "Enhances Safety", text: "Enhances corrosion resistance and operational safety." },
          { title: "Guarantees Compliance", text: "Full compliance with industry standards and regulations." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our specialized knowledge guarantees your steel and metal components meet all technical and performance requirements."
      }
    ],
    callToAction: "Strengthen your projects with our expert steel and metal material consultancy. Contact us today."
  },
  // Post 98
  {
    id: 99,
    cardTitle: "Innovating with Polymers: Advanced Materials for Modern Construction",
    image: blogImages.blogImage99, // Make sure blogImage98 exists in your images index
    category: "Material Consultancy",
    description: "Polymer, plastic, and composite materials offer lightweight, durable, and versatile alternatives for various construction and engineering needs.",
    mainTitle: "Innovating with Polymers: Advanced Materials for Modern Construction",
    subTitle: "Polymer, Plastic & Composite Material Services: Modern Solutions for Diverse Applications",
    introduction: "Polymer, plastic, and composite materials offer lightweight, durable alternatives for various construction and engineering needs.",
    sections: [
      {
        heading: "What are Polymer, Plastic & Composite Material Services?",
        content: "This service covers material selection, testing, and application advice for polymers, plastics, and composites used in construction, insulation, coatings, and more."
      },
      {
        heading: "How We Execute Polymer & Composite Services",
        content: "Terrene Engineers assesses project requirements to recommend materials that provide optimal performance and sustainability."
      },
      {
        heading: "Benefits of Polymer & Composite Services",
        isList: true,
        items: [
          { title: "Lightweight & Resistant", text: "Lightweight and highly corrosion-resistant materials." },
          { title: "Design Flexibility", text: "Versatile applications and greater design flexibility." },
          { title: "Enhanced Durability", text: "Enhanced durability and product longevity." },
          { title: "Cost Savings", text: "Potential for significant cost savings and sustainability." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We help integrate advanced polymer and composite materials into your projects for innovative solutions."
      }
    ],
    callToAction: "Explore the benefits of polymers and composites with our expert consultancy. Contact us now."
  },
  // Post 99
  {
    id: 100,
    cardTitle: "Cutting Costs, Not Corners: Smart Material Procurement Strategies",
    image: blogImages.blogImage100, // Make sure blogImage99 exists in your images index
    category: "Material Consultancy",
    description: "Understanding material costs and securing favorable procurement terms is vital for successful project budgeting and execution.",
    mainTitle: "Cutting Costs, Not Corners: Smart Material Procurement Strategies",
    subTitle: "Material Cost Analysis & Procurement Support: Maximizing Value on Every Purchase",
    introduction: "Understanding material costs and securing favorable procurement terms is vital for project budgeting and success.",
    sections: [
      {
        heading: "What is Material Cost Analysis & Procurement Support?",
        content: "This service analyzes material pricing, market trends, and procurement strategies to optimize purchasing decisions."
      },
      {
        heading: "How We Execute Cost Analysis & Procurement Support",
        content: "Terrene Engineers conducts thorough cost evaluations, supplier assessments, and negotiates terms to deliver value without compromising quality."
      },
      {
        heading: "Benefits of Cost Analysis & Procurement Support",
        isList: true,
        items: [
          { title: "Accurate Budgeting", text: "More accurate budgeting and better cost control." },
          { title: "Cost-Saving Opportunities", text: "Identification of significant cost-saving opportunities." },
          { title: "Reliable Supplier Selection", text: "Reliable supplier selection and management." },
          { title: "Minimized Delays", text: "Minimized project delays due to procurement issues." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expertise ensures efficient, transparent, and cost-effective material procurement."
      }
    ],
    callToAction: "Optimize your project budget with our material cost analysis and procurement support. Contact us today."
  },
  // Post 100
  {
    id: 101,
    cardTitle: "Preventing Failures: How Material Analysis Protects Your Projects",
    image: blogImages.blogImage101, // Make sure blogImage100 exists in your images index
    category: "Material Consultancy",
    description: "Material failures can jeopardize projects. Prompt analysis and troubleshooting prevent costly delays and ensure structural integrity.",
    mainTitle: "Preventing Failures: How Material Analysis Protects Your Projects",
    subTitle: "Failure Analysis & Material Troubleshooting: Diagnosing and Resolving Material Issues",
    introduction: "Material failures can jeopardize projects; prompt analysis and troubleshooting prevent costly delays and repairs.",
    sections: [
      {
        heading: "What is Failure Analysis & Material Troubleshooting?",
        content: "This service investigates causes of material failure, identifies defects or misuse, and recommends corrective actions."
      },
      {
        heading: "How We Execute Failure Analysis",
        content: "Terrene Engineers utilizes lab testing, site inspections, and expert evaluation to diagnose issues and develop solutions."
      },
      {
        heading: "Benefits of Failure Analysis & Troubleshooting",
        isList: true,
        items: [
          { title: "Early Detection", text: "Early detection and resolution of material problems." },
          { title: "Prevention of Recurrence", text: "Prevention of recurring and systemic failures." },
          { title: "Enhanced Safety", text: "Enhanced safety and overall project reliability." },
          { title: "Cost Savings", text: "Cost savings by avoiding major repairs or replacements." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide accurate diagnosis and effective solutions to material challenges."
      }
    ],
    callToAction: "Protect your project with our expert failure analysis and material troubleshooting. Contact us now."
  },
  // Post 101
  {
    id: 102,
    cardTitle: "Pushing Boundaries: Exploring Next-Gen Construction Materials",
    image: blogImages.blogImage102, // Make sure blogImage101 exists in your images index
    category: "Material Consultancy",
    description: "Advanced materials drive innovation in construction, offering improved performance, sustainability, and new design possibilities.",
    mainTitle: "Pushing Boundaries: Exploring Next-Gen Construction Materials",
    subTitle: "Innovative & Advanced Materials: Pioneering Solutions for Modern Construction",
    introduction: "Advanced materials drive innovation, offering improved performance, sustainability, and new possibilities in construction.",
    sections: [
      {
        heading: "What are Innovative & Advanced Materials?",
        content: "This includes cutting-edge materials like high-performance concretes, nanomaterials, smart coatings, and self-healing composites."
      },
      {
        heading: "How We Execute Advanced Material Consultancy",
        content: "Terrene Engineers researches and integrates novel materials tailored to project goals and environmental demands."
      },
      {
        heading: "Benefits of Innovative Materials",
        isList: true,
        items: [
          { title: "Enhanced Durability", text: "Enhanced durability and unique functionality." },
          { title: "Reduced Environmental Impact", text: "A reduced overall environmental impact." },
          { title: "Increased Design Flexibility", text: "Increased design flexibility and new aesthetics." },
          { title: "Future-Proofing", text: "Future-proofing for structures and systems." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We bring the latest material innovations to your projects for superior results."
      }
    ],
    callToAction: "Stay ahead with our consultancy on innovative and advanced construction materials. Contact us today."
  },
  // Post 102
  {
    id: 103,
    cardTitle: "Safety First: Expert Advice on Fire-Resistant and Protective Materials",
    image: blogImages.blogImage103, // Make sure blogImage102 exists in your images index
    category: "Material Consultancy",
    description: "Selecting appropriate fire and safety materials is critical to protect lives, assets, and meet strict regulatory requirements.",
    mainTitle: "Safety First: Expert Advice on Fire-Resistant and Protective Materials",
    subTitle: "Fire & Safety Material Consultancy: Ensuring Compliance and Protection",
    introduction: "Selecting appropriate fire and safety materials is critical to protect lives, assets, and meet regulatory requirements.",
    sections: [
      {
        heading: "What is Fire & Safety Material Consultancy?",
        content: "This service advises on fire-resistant materials, coatings, barriers, and safety equipment suited for various applications."
      },
      {
        heading: "How We Execute Fire & Safety Consultancy",
        content: "Terrene Engineers evaluates project needs and regulations to recommend compliant, effective fire and safety materials."
      },
      {
        heading: "Benefits of Fire & Safety Material Consultancy",
        isList: true,
        items: [
          { title: "Enhanced Protection", text: "Enhanced occupant and asset protection." },
          { title: "Code Compliance", text: "Full compliance with fire safety codes and standards." },
          { title: "Improved Resilience", text: "Improved building resilience to fire hazards." },
          { title: "Peace of Mind", text: "Peace of mind for all project stakeholders." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expertise ensures your materials contribute to a safe and compliant built environment."
      }
    ],
    callToAction: "Protect your projects with our expert fire and safety material consultancy. Contact us now."
  },
  // Post 103
{
    id: 104,
    cardTitle: "How Seamless Importing Fuels Construction Success",
    image: blogImages.blogImage104, // Make sure blogImage103 exists in your images index
    category: "Logistics Services",
    description: "Efficient importation of construction materials and equipment ensures your projects have access to the best resources on time and at competitive prices.",
    mainTitle: "How Seamless Importing Fuels Construction Success",
    subTitle: "Import of Construction Materials & Equipment: Reliable Sourcing for Your Projects",
    introduction: "Efficient importation of construction materials and equipment ensures your projects have access to the best resources on time and at competitive prices.",
    sections: [
      {
        heading: "What is Import of Construction Materials & Equipment?",
        content: "This service manages the international procurement, logistics, and delivery of building materials and construction machinery."
      },
      {
        heading: "How We Execute Imports",
        content: "Terrene Engineers leverages global supplier networks and efficient customs processes to ensure timely, cost-effective import of quality materials and equipment."
      },
      {
        heading: "Benefits of Import Services",
        isList: true,
        items: [
          { title: "Access to International Products", text: "Access to a wide range of international products and brands." },
          { title: "Competitive Pricing", text: "Competitive pricing through strategic global sourcing." },
          { title: "Reliable Delivery", text: "Reliable delivery and efficient supply chain management." },
          { title: "Regulatory Compliance", text: "Full compliance with all import regulations and standards." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our expertise in import logistics reduces delays and ensures materials meet your project specifications."
      }
    ],
    callToAction: "Secure your project’s materials and equipment with our trusted import services. Contact us today."
  },
  // Post 104
  {
    id: 105,
    cardTitle: "Expanding Horizons: Exporting Quality Engineering Materials Worldwide",
    image: blogImages.blogImage105, // Make sure blogImage104 exists in your images index
    category: "Logistics Services",
    description: "Exporting engineering and construction materials opens new markets and business opportunities for your products worldwide.",
    mainTitle: "Expanding Horizons: Exporting Quality Engineering Materials Worldwide",
    subTitle: "Export of Engineering & Construction Materials: Expanding Your Reach Globally",
    introduction: "Exporting engineering and construction materials opens new markets and business opportunities worldwide.",
    sections: [
      {
        heading: "What is Export of Engineering & Construction Materials?",
        content: "This service handles the logistics, documentation, and compliance for sending local materials and products to international clients."
      },
      {
        heading: "How We Execute Exports",
        content: "Terrene Engineers manages end-to-end export processes, ensuring your products reach global destinations efficiently and safely."
      },
      {
        heading: "Benefits of Export Services",
        isList: true,
        items: [
          { title: "Access to New Markets", text: "Gain access to new international markets and customers." },
          { title: "Professional Handling", text: "Professional handling of all export regulations and paperwork." },
          { title: "Secure Transportation", text: "Secure packaging and reliable global transportation." },
          { title: "Enhanced Reputation", text: "An enhanced global business reputation." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We simplify complex export procedures to help your business grow internationally."
      }
    ],
    callToAction: "Expand your business globally with our reliable export services. Contact us now."
  },
  // Post 105
  {
    id: 106,
    cardTitle: "Bringing Innovation Home: Importing Cutting-Edge Construction Technology",
    image: blogImages.blogImage106, // Make sure blogImage105 exists in your images index
    category: "Logistics Services",
    description: "Accessing advanced technology and tools from global suppliers keeps your projects at the forefront of construction innovation.",
    mainTitle: "Bringing Innovation Home: Importing Cutting-Edge Construction Technology",
    subTitle: "Import of Advanced Technology & Tools: Bringing Innovation to Your Site",
    introduction: "Accessing advanced technology and tools from global suppliers keeps your projects at the forefront of construction innovation.",
    sections: [
      {
        heading: "What is Import of Advanced Technology & Tools?",
        content: "This service sources and imports cutting-edge construction technologies, machinery, and tools."
      },
      {
        heading: "How We Execute Technology Imports",
        content: "Terrene Engineers identifies trusted technology providers and handles logistics, customs, and delivery to equip your projects with the latest tools."
      },
      {
        heading: "Benefits of Technology Imports",
        isList: true,
        items: [
          { title: "Enhanced Efficiency", text: "Enhanced project efficiency, precision, and accuracy." },
          { title: "Access to Innovation", text: "Direct access to innovative construction solutions." },
          { title: "Competitive Advantage", text: "A strong competitive advantage through advanced equipment." },
          { title: "Professional Support", text: "Professional support for installation and team training." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We connect you with global technology leaders to boost your project capabilities."
      }
    ],
    callToAction: "Stay ahead with our import services for advanced construction technology and tools. Contact us today."
  },
  // Post 106
  {
    id: 107,
    cardTitle: "Keeping Projects Running: Reliable Supply of Machinery & Spare Parts",
    image: blogImages.blogImage107, // Make sure blogImage106 exists in your images index
    category: "Logistics Services",
    description: "A reliable supply of machinery and spare parts is vital to minimize downtime and maintain productivity on construction sites.",
    mainTitle: "Keeping Projects Running: Reliable Supply of Machinery & Spare Parts",
    subTitle: "Machinery & Spare Parts Supply: Keeping Your Equipment Running Smoothly",
    introduction: "Reliable supply of machinery and spare parts is vital to minimize downtime and maintain productivity on construction sites.",
    sections: [
      {
        heading: "What is Machinery & Spare Parts Supply?",
        content: "This service provides sourcing, procurement, and timely delivery of construction machinery and essential spare parts."
      },
      {
        heading: "How We Execute Supply Services",
        content: "Terrene Engineers maintains strong supplier relationships and efficient logistics to ensure quick availability of machinery and parts."
      },
      {
        heading: "Benefits of Machinery & Spare Parts Supply",
        isList: true,
        items: [
          { title: "Reduced Downtime", text: "Significantly reduced equipment downtime." },
          { title: "Access to Genuine Parts", text: "Access to genuine and high-quality parts." },
          { title: "Cost-Effective Solutions", text: "Cost-effective and reliable maintenance solutions." },
          { title: "Improved Longevity", text: "Improved equipment longevity and performance." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our supply chain expertise keeps your projects moving without interruption."
      }
    ],
    callToAction: "Ensure continuous operation with our reliable machinery and spare parts supply. Contact us now."
  },
  // Post 107
  {
    id: 108,
    cardTitle: "Sourcing Style Globally: Importing Quality Interior and Furniture Solutions",
    image: blogImages.blogImage108, // Make sure blogImage107 exists in your images index
    category: "Logistics Services",
    description: "Importing interior and furniture items from global markets allows you to access diverse styles and high-quality, unique products.",
    mainTitle: "Sourcing Style Globally: Importing Quality Interior and Furniture Solutions",
    subTitle: "Interior & Furniture Imports: Bringing Global Styles to Your Space",
    introduction: "Importing interior and furniture items from global markets allows you to access diverse styles and high-quality products.",
    sections: [
      {
        heading: "What is Interior & Furniture Imports?",
        content: "This service manages the procurement and importation of furniture and interior décor from international manufacturers and designers."
      },
      {
        heading: "How We Execute Furniture Imports",
        content: "Terrene Engineers sources unique, stylish, and quality furniture pieces, managing all logistics for seamless delivery and installation."
      },
      {
        heading: "Benefits of Furniture Imports",
        isList: true,
        items: [
          { title: "Exclusive Designs", text: "Access to exclusive and diverse international designs." },
          { title: "High-Quality Craftsmanship", text: "High-quality craftsmanship from global artisans." },
          { title: "Enhanced Aesthetics", text: "Enhanced and unique interior aesthetics." },
          { title: "Simplified Process", text: "A simplified and streamlined import and delivery process." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We bring the best of international furniture and décor to elevate your spaces."
      }
    ],
    callToAction: "Transform your interiors with our expert furniture import services. Contact us today."
  },
  // Post 108
  {
    id: 109,
    cardTitle: "Smart Sourcing: Ensuring Quality Raw Materials for Every Project",
    image: blogImages.blogImage109, // Make sure blogImage108 exists in your images index
    category: "Logistics Services",
    description: "Raw material sourcing is the foundation of any successful project, ensuring the availability of high-quality materials that meet specifications.",
    mainTitle: "Smart Sourcing: Ensuring Quality Raw Materials for Every Project",
    subTitle: "Raw Material Sourcing: Securing Quality Materials for Your Projects",
    introduction: "Raw material sourcing is the foundation of any successful construction or engineering project, ensuring availability of high-quality materials that meet specifications.",
    sections: [
      {
        heading: "What is Raw Material Sourcing?",
        content: "This service involves identifying reliable suppliers, evaluating material quality, negotiating terms, and managing procurement of essential raw materials like aggregates, metals, and chemicals."
      },
      {
        heading: "How We Execute Raw Material Sourcing",
        content: "Terrene Engineers collaborates with trusted global and local suppliers, performing rigorous quality assurance to guarantee materials meet project requirements and timelines."
      },
      {
        heading: "Benefits of Raw Material Sourcing",
        isList: true,
        items: [
          { title: "Consistent Quality", text: "Consistent and reliable quality assurance." },
          { title: "Competitive Pricing", text: "Competitive pricing through strong supplier relationships." },
          { title: "Reliable Delivery", text: "Reliable and predictable delivery schedules." },
          { title: "Reduced Risks", text: "Reduced procurement risks and potential delays." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our extensive supplier network and quality control ensure your project materials are sourced efficiently and effectively."
      }
    ],
    callToAction: "Secure your project’s raw materials with our expert sourcing services. Contact us today."
  },
  // Post 109
{
    id: 110,
    cardTitle: "Streamlining Success: Expert Logistics & Supply Chain Solutions",
    image: blogImages.blogImage110, // Make sure blogImage109 exists in your images index
    category: "Logistics Services",
    description: "Efficient logistics and supply chain management keep your project on schedule by ensuring timely and secure delivery of all materials and equipment.",
    mainTitle: "Streamlining Success: Expert Logistics & Supply Chain Solutions",
    subTitle: "Logistics & Supply Chain Services: Streamlining Material Movement",
    introduction: "Efficient logistics and supply chain management keep your project on schedule by ensuring timely and secure delivery of materials and equipment.",
    sections: [
      {
        heading: "What are Logistics & Supply Chain Services?",
        content: "These services include transportation planning, inventory management, warehousing, and coordination of supply flows tailored for construction projects."
      },
      {
        heading: "How We Execute Logistics & Supply Chain",
        content: "Terrene Engineers develops customized logistics strategies, leveraging technology and trusted partners to optimize delivery routes, storage, and inventory control."
      },
      {
        heading: "Benefits of Logistics & Supply Chain Services",
        isList: true,
        items: [
          { title: "Minimized Delays", text: "Minimized project delays and on-site downtime." },
          { title: "Reduced Costs", text: "Reduced overall transportation and storage costs." },
          { title: "Real-Time Tracking", text: "Real-time tracking and complete inventory visibility." },
          { title: "Enhanced Coordination", text: "Enhanced project coordination and demand forecasting." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "We provide end-to-end logistics solutions that improve efficiency and reliability across your supply chain."
      }
    ],
    callToAction: "Optimize your material flow with our professional logistics and supply chain services. Contact us now."
  },
  // Post 110
  {
    id: 111,
    cardTitle: "Tailored Excellence: Supplying Specialized Engineering Solutions",
    image: blogImages.blogImage111, // Make sure blogImage110 exists in your images index
    category: "Logistics Services",
    description: "Specialized engineering products are essential for projects requiring custom designs, high precision, or advanced material properties.",
    mainTitle: "Tailored Excellence: Supplying Specialized Engineering Solutions",
    subTitle: "Specialized Engineering Products: Customized Solutions for Complex Needs",
    introduction: "Specialized engineering products are essential for projects requiring custom designs, high precision, or advanced material properties.",
    sections: [
      {
        heading: "What are Specialized Engineering Products?",
        content: "These include custom-fabricated components, precision-engineered parts, advanced materials, and systems designed for specific engineering challenges."
      },
      {
        heading: "How We Execute Specialized Product Supply",
        content: "Terrene Engineers partners with expert manufacturers and uses advanced technology to source or fabricate products tailored to exact project requirements."
      },
      {
        heading: "Benefits of Specialized Engineering Products",
        isList: true,
        items: [
          { title: "Tailored Performance", text: "Tailored performance that meets exact specifications." },
          { title: "Enhanced Quality", text: "Enhanced overall project quality and safety." },
          { title: "Solutions for Challenges", text: "Solutions for unique or challenging environments." },
          { title: "Compliance with Standards", text: "Compliance with stringent technical and industry standards." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our technical expertise ensures delivery of specialized products that meet your precise engineering needs."
      }
    ],
    callToAction: "Meet complex project demands with our specialized engineering product services. Contact us today."
  },
  // Post 111
  {
    id: 112,
    cardTitle: "Strategic Procurement: Expert Consulting for Smarter Purchasing",
    image: blogImages.blogImage112, // Make sure blogImage111 exists in your images index
    category: "Logistics Services",
    description: "Effective consulting and procurement support streamline purchasing processes, ensuring you get the best materials and services for your project.",
    mainTitle: "Strategic Procurement: Expert Consulting for Smarter Purchasing",
    subTitle: "Consulting & Procurement Support: Expert Guidance for Successful Purchasing",
    introduction: "Effective consulting and procurement support streamline purchasing processes, ensuring you get the best materials and services for your project.",
    sections: [
      {
        heading: "What is Consulting & Procurement Support?",
        content: "This service offers professional advice, market analysis, supplier evaluation, and procurement management tailored to construction and engineering projects."
      },
      {
        heading: "How We Execute Consulting & Procurement",
        content: "Terrene Engineers provides detailed procurement strategies, risk assessments, and supplier negotiations to maximize value and minimize risks."
      },
      {
        heading: "Benefits of Consulting & Procurement Support",
        isList: true,
        items: [
          { title: "Informed Decisions", text: "Better, more informed purchasing decisions." },
          { title: "Cost Savings", text: "Significant cost savings through optimized sourcing." },
          { title: "Reduced Risks", text: "Reduced procurement delays and supply chain risks." },
          { title: "Improved Performance", text: "Improved supplier performance and relationship management." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our experienced consultants help you navigate complex procurement challenges efficiently."
      }
    ],
    callToAction: "Enhance your procurement outcomes with our expert consulting and support. Contact us now."
  },
  // Post 112
  {
    id: 113,
    cardTitle: "Complete Care: Turnkey Supply Solutions for Hassle-Free Projects",
    image: blogImages.blogImage113, // Make sure blogImage112 exists in your images index
    category: "Logistics Services",
    description: "Turnkey supply solutions offer complete management of your material procurement and delivery, ensuring seamless project execution.",
    mainTitle: "Complete Care: Turnkey Supply Solutions for Hassle-Free Projects",
    subTitle: "Turnkey Supply Solutions: Comprehensive End-to-End Material Management",
    introduction: "Turnkey supply solutions offer complete management of your material procurement and delivery, ensuring seamless project execution.",
    sections: [
      {
        heading: "What are Turnkey Supply Solutions?",
        content: "This service covers everything from sourcing and purchasing to logistics, delivery, and inventory management under a single contract."
      },
      {
        heading: "How We Execute Turnkey Supply",
        content: "Terrene Engineers manages the entire supply chain process, coordinating suppliers, transport, and on-site delivery to meet your project schedule and quality standards."
      },
      {
        heading: "Benefits of Turnkey Supply Solutions",
        isList: true,
        items: [
          { title: "Single Point of Contact", text: "A single point of accountability for the entire supply chain." },
          { title: "Streamlined Process", text: "Streamlined procurement, logistics, and delivery." },
          { title: "Reduced Admin Burden", text: "A reduced administrative burden for your internal teams." },
          { title: "Enhanced Quality Control", text: "Enhanced quality control and guaranteed timely delivery." }
        ]
      },
      {
        heading: "Why Choose Us?",
        content: "Our turnkey solutions provide peace of mind by handling all supply chain aspects efficiently."
      }
    ],
    callToAction: "Simplify your material management with our turnkey supply solutions. Contact us today."
  },
];


// --- Modal Component ---
const BlogModal = ({ post, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-2 sm:p-4 animate-fade-in">
      <Button onClick={onClose} variant="ghost" size="icon" className="absolute top-4 right-4 text-white hover:text-cyan-300 z-[51] bg-black/50 rounded-full">
        <X className="h-6 w-6" />
      </Button>

      <div className="bg-[#0b2741] border border-white/10 rounded-lg shadow-2xl w-full max-w-4xl max-h-[95vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="p-6 md:p-8">
          <img src={post.image} alt={post.mainTitle} className="w-full h-60 sm:h-80 object-cover rounded-lg mb-6" />
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{post.mainTitle}</h2>
            <p className="text-lg text-cyan-400">{post.subTitle}</p>
          </div>
          <hr className="border-white/10 mb-6" />
          <div className="space-y-6 text-gray-300">
            <p className="text-base md:text-lg leading-relaxed">{post.introduction}</p>
            {post.sections.map((section, index) => (
              <div key={index}>
                <h3 className="text-xl font-semibold text-white mb-3">{section.heading}</h3>
                {section.isList ? (
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-white">{item.title}:</strong> {item.text}
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed">{section.content}</p>
                )}
              </div>
            ))}
            <div>
              <hr className="border-white/10 mt-8 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">Call to Action</h3>
              <p className="leading-relaxed text-gray-300">{post.callToAction}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOpenModal = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    setSearchParams({});
  };
  useEffect(() => {
    const postId = searchParams.get('post');
    if (postId) {
      const postToOpen = allBlogPosts.find(p => p.id === parseInt(postId, 10));
      if (postToOpen) {
        handleOpenModal(postToOpen);
      }
    }
  }, [searchParams]);

  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <>
      <Header mode="transparent" className="fixed top-0 left-0 w-full z-40" />
      
      <div>
        <section className="relative min-h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover brightness-50" src="/soft.mp4" />
            <div className="absolute inset-0 bg-[#0b2741]/80"></div>
          </div>
          <div className="relative z-10 container mx-auto px-4">
            <h1 className="text-4xl md:text-7xl font-bold">OUR BLOG</h1>
            <p className="mt-2 text-2xl text-white max-w-2xl mx-auto">
              Insights, news and technical articles from Terrene Engineering             </p>
          </div>
        </section>

        <main className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/about.mp4" />
                <div className="absolute inset-0 bg-[#0b2741]/90"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {allBlogPosts.slice(0, visiblePosts).map((post) => (
                    <div key={post.id} className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-lg shadow-lg overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-cyan-500/20 hover:border-white/20">
                    <div className="overflow-hidden cursor-pointer" onClick={() => handleOpenModal(post)}>
                        <img src={post.image} alt={post.cardTitle} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                        <span className="text-xs font-semibold text-cyan-400 uppercase mb-2">{post.category}</span>
                        <h2 className="text-lg font-semibold text-white mb-2 flex-grow">{post.cardTitle}</h2>
                        <p className="text-gray-300 text-sm leading-relaxed mb-4">{post.description}</p>
                        <button onClick={() => handleOpenModal(post)} className="text-cyan-400 font-semibold text-sm mt-auto self-start hover:text-cyan-300 flex items-center">
                        read more <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                    </div>
                    </div>
                ))}
                </div>
                
                {/* View More Button */}
                {visiblePosts < allBlogPosts.length && (
                    <div className="mt-12 text-center">
                        <Button 
                            size="lg" 
                            className="bg-[#0050A0] text-white text-lg hover:bg-cyan-500/80 transition-colors" 
                            onClick={handleLoadMore}
                        >
                            View More
                        </Button>
                    </div>
                )}
            </div>
        </main>

        <Footer />
      </div>

      {isModalOpen && selectedPost && (
        <BlogModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Blog;