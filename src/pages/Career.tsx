import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import {
  Phone, Mail, MapPin, Clock, Send, ArrowDown,Briefcase, Quote, ArrowLeft, ArrowRight, X, Building, LucideNewspaper, HardHat, Layers, Code, Megaphone, Users, Banknote, Bookmark, Presentation, Laptop} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import heroVideo from '/car.mp4';
import aboutVideo from '/about.mp4';
import proVideo from '/pro.mp4';
import packVideo from '/pack.mp4';
import { Link } from 'react-router-dom';

// Image imports
import whyWorkWithUsImage from '../assert/why-work-with-us.jpg';
import imageComposition from '../assert/projects/pro1.png';

// --- Company Overview ---
const companyOverview = "Terrene Engineering (Pvt) Ltd is a dynamic engineering consulting and contracting company with a growing global footprint We are seeking experienced professionals to lead strategy, implementation, and team coordination across multiple projects Our leadership roles require exceptional technical expertise and project management skills to drive digital transformation.";

// --- Expanded Job Positions Data ---
const positions = [
  // --- BATCH 1 ---
  {
    id: 1,
    title: "BIM MANAGER",
    department: "BIM & Digital Twin",
    location: "Hybrid",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "3 days ago",
    tags: ["BIM", "Revit", "ISO 19650"],
    description: "Lead BIM strategy, implementation, and team coordination across multiple high-impact projects.",
    overview: "Terrene Engineering (Pvt) Ltd is a dynamic engineering consulting and contracting company with a growing global footprint. We are seeking an experienced BIM Manager to lead BIM strategy, implementation, and team coordination across multiple projects. This leadership role requires exceptional technical expertise and project management skills to drive digital transformation.",
    responsibilities: [
      "Develop and enforce BIM Execution Plans and workflows.",
      "Oversee multidisciplinary BIM teams, ensuring model accuracy and coordination.",
      "Conduct model reviews, clash detection, and issue resolution.",
      "Train, mentor, and support BIM Engineers and Modelers.",
      "Liaise with clients and stakeholders regarding BIM deliverables.",
      "Drive innovation through new BIM technologies and standards."
    ],
    requirements: [
      "Bachelor Honors Degree in Engineering, Architecture, or a related field.",
      "5+ years’ experience in BIM management.",
      "Proficiency in Revit, Navisworks, AutoCAD, and BIM 360.",
      "Familiarity with ISO 19650 standards.",
      "Strong leadership and communication skills."
    ],
    benefits: [
      "Industry-leading salary and benefits ",
      "Performance bonuses.",
      "Professional development and BIM certification support.",
      "Travel and meeting expenses covered.",
      "Opportunity to lead high-impact digital initiatives."
    ]
  },
  {
    id: 2,
    title: "BIM MODELER (STRUCTURAL / ARCHITECTURAL / MEP)",
    department: "BIM & Digital Twin",
    location: "Hybrid",
    type: "Full-Time / Part-Time / Freelance",
    remote: "Hybrid",
    postedAgo: "4 days ago",
    tags: ["Revit", "AutoCAD", "Modeling"],
    description: "Contribute to complex projects using cutting-edge BIM workflows and technologies.",
    overview: "Terrene Engineering (Pvt) Ltd is expanding its digital delivery team and hiring BIM Modelers specializing in Structural, Architectural, and MEP disciplines. This is an opportunity to contribute to complex projects using cutting-edge BIM workflows and technologies.",
    responsibilities: [
      "Develop accurate 3D models using Revit, AutoCAD, and other BIM tools.",
      "Interpret design documents and convert them into coordinated BIM models.",
      "Participate in clash detection and coordination meetings.",
      "Work closely with engineers and BIM Coordinators to maintain model integrity.",
      "Assist in the production of drawings and construction documentation."
    ],
    requirements: [
      "Diploma or Degree in Engineering, Architecture, or Drafting.",
      "2+ years’ experience in BIM modeling in your respective discipline (Structural, Architectural, or MEP).",
      "Proficient in Autodesk Revit, Navisworks, and AutoCAD.",
      "Understanding of LOD, model standards, and drawing conventions.",
      "Detail-oriented and capable of meeting tight deadlines."
    ],
    benefits: [
      "Competitive salary or project-based compensation.",
      "Exposure to international modeling standards (ISO 19650, etc.).",
      "Opportunity to grow into BIM Coordinator or Engineer roles.",
      "Flexible work arrangements."
    ]
  },
  {
    id: 3,
    title: "BIM COORDINATOR",
    department: "BIM & Digital Twin",
    location: "Hybrid",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "5 days ago",
    tags: ["Navisworks", "BIM 360", "Coordination"],
    description: "Oversee model coordination and ensure BIM execution across multi-disciplinary projects.",
    overview: "Terrene Engineering (Pvt) Ltd is hiring a BIM Coordinator to oversee model coordination and ensure BIM execution across multi-disciplinary projects. The ideal candidate will bridge the gap between design and delivery teams by managing model integration and compliance with industry standards.",
    responsibilities: [
      "Coordinate BIM models across Structural, Architectural, and MEP disciplines.",
      "Lead clash detection and issue resolution using Navisworks or equivalent.",
      "Support BIM Execution Plan (BEP) implementation.",
      "Ensure adherence to modeling standards (ISO 19650, company protocols).",
      "Collaborate with project managers, modelers, and engineers.",
      "Conduct BIM reviews and quality assurance checks."
    ],
    requirements: [
      "Bachelor’s Degree in Architecture, Engineering, or Construction Technology.",
      "3–6 years’ BIM experience with at least 2 years in coordination roles.",
      "Proficiency in Revit, Navisworks, BIM 360, and AutoCAD.",
      "Familiarity with IFC standards and CDE environments.",
      "Strong communication and organizational skills."
    ],
    benefits: [
      "Attractive salary package.",
      "Opportunities for leadership in BIM delivery.",
      "International project exposure.",
      "Training in advanced BIM workflows and standards."
    ]
  },
  {
    id: 4,
    title: "CHARTERED ARCHITECT",
    department: "Architecture",
    location: "Hybrid",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "1 week ago",
    tags: ["RIBA", "Revit", "Design"],
    description: "Lead innovative design solutions and oversee project delivery from concept to completion.",
    overview: "Terrene Engineering (Pvt) Ltd seeks an accomplished Chartered Architect to lead innovative design solutions and oversee project delivery from concept to completion. This role requires design excellence, leadership, and deep knowledge of construction practices.",
    responsibilities: [
      "Lead conceptual and detailed architectural designs.",
      "Prepare drawings, presentations, and specifications.",
      "Oversee project approvals and statutory compliance.",
      "Coordinate with engineers, consultants, and clients.",
      "Mentor junior architects and designers."
    ],
    requirements: [
      "Chartered status (RIBA or equivalent).",
      "Bachelors Honours Degree/Master’s in Architecture.",
      "Minimum 6 years of experience.",
      "Proficiency in Revit, AutoCAD, SketchUp.",
      "Strong design portfolio and communication skills."
    ],
    benefits: [
      "Competitive salary.",
      "Leadership performance incentives.",
      "Professional development and CPD support.",
      "Project travel allowances."
    ]
  },
  {
    id: 5,
    title: "CHARTERED CIVIL ENGINEER",
    department: "Engineering",
    location: "On-site / Hybrid",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "1 week ago",
    tags: ["CEng", "Infrastructure", "Civil"],
    description: "Lead complex infrastructure and construction projects, ensuring compliance with technical standards and driving engineering excellence.",
    overview: "Terrene Engineering (Pvt) Ltd is seeking a highly qualified and experienced Chartered Civil Engineer to lead complex infrastructure and construction projects. The successful candidate will ensure compliance with technical standards, drive engineering excellence, and support project teams from design to execution.",
    responsibilities: [
      "Lead the planning, design, and delivery of civil engineering works.",
      "Review and approve structural calculations, drawings, and specifications.",
      "Ensure adherence to local and international engineering standards.",
      "Provide technical guidance and mentorship to engineering teams.",
      "Liaise with clients, consultants, and contractors on technical issues.",
      "Support project approvals, compliance documentation, and QA/QC."
    ],
    requirements: [
      "Chartered Engineer status (CEng/MICE or equivalent).",
      "Bachelor’s Honours Degree in Civil Engineering.",
      "7+ years of post-qualification experience in infrastructure or building projects.",
      "Strong knowledge of structural design, site management, and local authority regulations.",
      "Excellent leadership, coordination, and problem-solving skills."
    ],
    benefits: [
      "High-tier salary and performance bonuses.",
      "Opportunities to lead landmark projects.",
      "Professional membership support and CPD.",
      "Site travel and accommodation (if applicable)."
    ]
  },
  {
    id: 6,
    title: "CHARTERED MEP ENGINEER",
    department: "Engineering",
    location: "Sri Lanka / International",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "1 week ago",
    tags: ["MEP", "Revit MEP", "HVAC"],
    description: "Lead design, supervision, and project delivery for Mechanical, Electrical, and Plumbing works on complex projects.",
    overview: "Terrene Engineering (Pvt) Ltd is a multidisciplinary engineering consultancy and contracting firm with a growing global footprint. We deliver innovative, sustainable MEP solutions across complex building and infrastructure projects. We are looking for a Chartered MEP Engineer to lead design, supervision, and project delivery for Mechanical, Electrical, and Plumbing works.",
    responsibilities: [
      "Develop and review detailed MEP designs, drawings, and specifications.",
      "Oversee project implementation, ensuring compliance with international codes and standards.",
      "Conduct site inspections and resolve technical issues during construction.",
      "Coordinate with architects, structural engineers, contractors, and clients.",
      "Prepare technical reports, design calculations, and progress documentation.",
      "Mentor junior engineers and technicians in MEP design and project management best practices."
    ],
    requirements: [
      "Chartered Engineer status in Mechanical or Electrical Engineering.",
      "Bachelor Honours Degree in Mechanical, Electrical, or Building Services Engineering.",
      "Minimum 5 years’ experience in MEP design and project supervision.",
      "Proficiency in AutoCAD, Revit MEP, and relevant simulation tools.",
      "In-depth knowledge of international MEP standards and sustainable design practices.",
      "Strong leadership, coordination, and communication skills."
    ],
    benefits: [
      "Competitive salary based on experience and qualifications.",
      "Performance-linked bonuses.",
      "Travel and accommodation provided for project assignments.",
      "Professional development support, including CPD programs and certifications."
    ]
  },
  {
    id: 7,
    title: "CHARTERED GEOTECHNICAL ENGINEER",
    department: "Engineering",
    location: "Sri Lanka / International",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "2 weeks ago",
    tags: ["Geotechnical", "PLAXIS", "Foundation Design"],
    description: "Deliver expert design, investigation, and supervision services for infrastructure and building projects.",
    overview: "Terrene Engineering (Pvt) Ltd provides integrated consultancy and contracting services across geotechnical, civil, and structural disciplines. We are seeking an experienced Chartered Geotechnical Engineer to deliver expert design, investigation, and supervision services for infrastructure and building projects.",
    responsibilities: [
      "Lead geotechnical investigations and site assessments.",
      "Develop foundation designs, retaining structures, and ground improvement solutions.",
      "Conduct geotechnical analyses and interpret soil and rock testing results.",
      "Prepare technical reports and risk assessments.",
      "Supervise site works and ensure compliance with geotechnical design specifications.",
      "Liaise with clients, contractors, and multidisciplinary teams."
    ],
    requirements: [
      "Chartered Engineer status in Civil or Geotechnical Engineering.",
      "Bachelor Honours Degree or Master’s degree in Geotechnical or Civil Engineering.",
      "Minimum 5 years’ experience in geotechnical design and construction.",
      "Proficiency in geotechnical software (e.g., PLAXIS, GeoStudio).",
      "Strong technical writing and project management skills."
    ],
    benefits: [
      "Attractive remuneration package.",
      "Project-specific allowances and international travel support.",
      "Continuous training and professional development.",
      "Opportunities to work on landmark infrastructure projects."
    ]
  },
  {
    id: 8,
    title: "COMMISSIONING ENGINEER",
    department: "Engineering",
    location: "Sri Lanka / Project Sites",
    type: "Full-Time / Part-Time",
    remote: "On-site",
    postedAgo: "2 weeks ago",
    tags: ["Commissioning", "MEP Systems", "QA/QC"],
    description: "Plan, execute, and document commissioning activities for mechanical, electrical, and plumbing systems.",
    overview: "Terrene Engineering (Pvt) Ltd is a leader in delivering integrated engineering and construction solutions. We are seeking a Commissioning Engineer to plan, execute, and document commissioning activities for mechanical, electrical, and plumbing systems.",
    responsibilities: [
      "Develop commissioning plans, checklists, and schedules.",
      "Coordinate pre-commissioning and commissioning activities with project teams.",
      "Conduct functional testing of systems and equipment.",
      "Prepare commissioning reports and as-built documentation.",
      "Troubleshoot and resolve system performance issues.",
      "Train end users on operation and maintenance procedures."
    ],
    requirements: [
      "Bachelor Honours Degree in Mechanical, Electrical, or Building Services Engineering.",
      "3+ years’ experience in commissioning MEP systems.",
      "Familiarity with relevant codes and standards.",
      "Strong technical and documentation skills."
    ],
    benefits: [
      "Competitive salary based on experience.",
      "Performance incentives.",
      "Ongoing professional training and certification support.",
      "Career progression in a dynamic engineering environment."
    ]
  },
  // --- BATCH 2 ---
  {
    id: 9,
    title: "SENIOR INTERIOR DESIGNER",
    department: "Architecture",
    location: "Sri Lanka / Remote",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "3 weeks ago",
    tags: ["Interior Design", "SketchUp", "AutoCAD"],
    description: "Lead concept development, design execution, and project management for high-end interior projects.",
    overview: "Terrene Engineering (Pvt) Ltd delivers award-winning architecture and interior design solutions across residential, commercial, and hospitality sectors. We are seeking a creative and experienced Senior Interior Designer to lead concept development, design execution, and project management.",
    responsibilities: [
      "Develop and present interior design concepts and mood boards.",
      "Prepare detailed drawings, 3D visualizations, and material specifications.",
      "Manage project timelines and deliverables.",
      "Coordinate with clients, consultants, and contractors.",
      "Supervise junior designers and provide design guidance."
    ],
    requirements: [
      "Bachelor Honours Degree in Interior Design or Architecture.",
      "Minimum 5 years’ experience in interior design.",
      "Proficiency in AutoCAD, SketchUp, Revit, and Adobe Creative Suite.",
      "Strong project management and client communication skills.",
      "Portfolio demonstrating completed interior design projects."
    ],
    benefits: [
      "Competitive compensation and project bonuses.",
      "Health insurance and wellness programs.",
      "Opportunities to work on high-profile design projects."
    ]
  },
  {
    id: 10,
    title: "JUNIOR INTERIOR DESIGNER",
    department: "Architecture",
    location: "Hybrid",
    type: "Full-Time / Part-Time / Freelance",
    remote: "Hybrid",
    postedAgo: "3 weeks ago",
    tags: ["Interior Design", "CAD", "3D Modeling"],
    description: "Support the development of innovative, functional, and aesthetically pleasing interior spaces.",
    overview: "Terrene Engineering (Pvt) Ltd is looking for a creative and detail-oriented Junior Interior Designer to support the development of innovative, functional, and aesthetically pleasing interior spaces for residential, commercial, and hospitality projects.",
    responsibilities: [
      "Assist in preparing concept designs, drawings, and presentations.",
      "Produce detailed CAD drawings and 3D models.",
      "Coordinate material samples and specifications.",
      "Support project scheduling and site supervision."
    ],
    requirements: [
      "Bachelor Honours Degree or Diploma in Interior Design or related field.",
      "1–3 years of professional experience or strong internship experience.",
      "Proficiency in AutoCAD, SketchUp, and Adobe Creative Suite.",
      "Good communication and teamwork skills."
    ],
    benefits: [
      "Competitive salary based on experience.",
      "Career growth opportunities.",
      "Training and mentorship programs."
    ]
  },
  {
    id: 11,
    title: "CONSTRUCTION MANAGER",
    department: "Project Management",
    location: "Sri Lanka / Overseas",
    type: "Full-Time / Part-Time",
    remote: "On-site",
    postedAgo: "4 weeks ago",
    tags: ["Construction", "Site Management", "FIDIC"],
    description: "Lead multidisciplinary construction teams and oversee site operations, safety, quality, and timelines.",
    overview: "Terrene Engineering (Pvt) Ltd is a full-spectrum construction firm managing diverse civil engineering and infrastructure projects. We are seeking an experienced Construction Manager to lead multidisciplinary construction teams and oversee site operations, safety, quality, and timelines.",
    responsibilities: [
      "Manage the day-to-day operations on construction sites.",
      "Supervise project teams, subcontractors, and site staff.",
      "Ensure adherence to construction schedules and budgets.",
      "Monitor quality control, HSE compliance, and risk management.",
      "Conduct regular progress reviews and stakeholder reporting."
    ],
    requirements: [
      "Bachelor Honours Degree in Civil Engineering or Construction Management.",
      "Minimum 8 years’ experience in site/project management roles.",
      "Proven leadership and team coordination abilities.",
      "Familiar with FIDIC and other contract administration frameworks."
    ],
    benefits: [
      "Industry-competitive salary.",
      "Accommodation and transport for project assignments.",
      "Incentives for project performance and delivery milestones."
    ]
  },
  {
    id: 12,
    title: "SITE SUPERVISOR",
    department: "Project Management",
    location: "Sri Lanka / International",
    type: "Full-Time",
    remote: "On-site",
    postedAgo: "1 month ago",
    tags: ["Supervision", "Construction", "Safety"],
    description: "Manage civil and architectural work at site level, ensuring smooth execution and compliance.",
    overview: "Terrene Engineering (Pvt) Ltd is committed to delivering safe, sustainable, and high-quality construction solutions. We are hiring experienced Site Supervisors to manage civil and architectural work at site level, ensuring smooth execution and compliance.",
    responsibilities: [
      "Supervise daily site activities and subcontractor work.",
      "Enforce safety, quality, and productivity standards.",
      "Coordinate materials, tools, and labour on site.",
      "Maintain site records and daily reports."
    ],
    requirements: [
      "Diploma or NVQ Level 5 in Civil Engineering or Construction Technology.",
      "3+ years' experience in site supervision.",
      "Sound understanding of construction methods and safety protocols.",
      "Strong team management and timekeeping skills."
    ],
    benefits: [
      "Competitive remuneration.",
      "Travel allowances.",
      "Opportunities for long-term growth and training."
    ]
  },
  {
    id: 13,
    title: "MATERIAL ENGINEER",
    department: "Engineering",
    location: "Sri Lanka / Project Labs",
    type: "Full-Time / Part-Time",
    remote: "On-site",
    postedAgo: "1 month ago",
    tags: ["Material Testing", "QA/QC", "ASTM"],
    description: "Ensure high standards in the sourcing, testing, and performance of construction materials.",
    overview: "Terrene Engineering (Pvt) Ltd provides comprehensive engineering services, including material testing and quality assurance. We are looking for a Material Engineer to ensure high standards in the sourcing, testing, and performance of construction materials.",
    responsibilities: [
      "Develop and implement materials testing plans.",
      "Evaluate material properties for suitability and compliance.",
      "Supervise laboratory and field-testing procedures.",
      "Review supplier documentation and approve materials."
    ],
    requirements: [
      "Bachelor Honours Degree in Material Science, Civil Engineering, or related field.",
      "3–5 years’ experience in material testing or quality control.",
      "Familiarity with ASTM, BS, and ISO standards.",
      "Proficiency in lab testing procedures and documentation."
    ],
    benefits: [
      "Competitive salary and field allowance.",
      "Insurance coverage.",
      "Long-term growth in QA/QC or technical consultancy."
    ]
  },
  {
    id: 14,
    title: "FURNITURE DESIGNER",
    department: "Architecture",
    location: "Head Office / Remote",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "1 month ago",
    tags: ["Furniture Design", "SketchUp", "Industrial Design"],
    description: "Develop custom furniture solutions aligned with modern interior and user needs.",
    overview: "Terrene Engineering (Pvt) Ltd also operates a specialized division in custom furniture and interior fit-out. We are looking for a creative Furniture Designer to develop custom furniture solutions aligned with modern interior and user needs.",
    responsibilities: [
      "Design custom furniture pieces for residential and commercial projects.",
      "Prepare detailed shop drawings and 3D visualizations.",
      "Coordinate with production teams and material suppliers.",
      "Select suitable materials and finishes."
    ],
    requirements: [
      "Bachelor Honours Degree or Diploma in Furniture Design / Industrial Design / Interior Design.",
      "Minimum 2 years’ experience in furniture design.",
      "Proficiency in SketchUp, AutoCAD, and rendering tools.",
      "Understanding of ergonomics, joinery, and fabrication methods."
    ],
    benefits: [
      "Competitive salary based on skill and experience.",
      "Exposure to luxury design projects.",
      "Incentives based on product delivery."
    ]
  },
  {
    id: 15,
    title: "HVAC TECHNICIAN",
    department: "Engineering",
    location: "Sri Lanka / International",
    type: "Full-Time / Part-Time",
    remote: "On-site",
    postedAgo: "2 months ago",
    tags: ["HVAC", "MEP", "Technician"],
    description: "Carry out the installation, testing, and maintenance of HVAC systems.",
    overview: "Terrene Engineering (Pvt) Ltd delivers complete MEP and building services solutions. We are seeking an experienced HVAC Technician to carry out the installation, testing, and maintenance of HVAC systems.",
    responsibilities: [
      "Install and maintain air conditioning and ventilation systems.",
      "Conduct preventive and corrective maintenance.",
      "Diagnose and repair faults in HVAC systems.",
      "Read and follow mechanical drawings and schematics."
    ],
    requirements: [
      "NVQ or Diploma in HVAC / Refrigeration / Mechanical Services.",
      "Minimum 2 years’ hands-on HVAC experience.",
      "Knowledge of VRV/VRF systems and ductwork installations.",
      "Ability to handle tools, gauges, and refrigerants safely."
    ],
    benefits: [
      "Competitive trade-level salary.",
      "Overtime and site allowance.",
      "PPE and tool support provided."
    ]
  },
  {
    id: 16,
    title: "ENGINEERING MATERIAL LABORATORY TECHNICIAN",
    department: "Engineering",
    location: "Central Lab – Sri Lanka",
    type: "Full-Time / Part-Time",
    remote: "On-site",
    postedAgo: "2 months ago",
    tags: ["Lab Testing", "Soil", "Concrete"],
    description: "Carry out soil, concrete, and material testing as per international standards.",
    overview: "Terrene Engineering (Pvt) Ltd operates state-of-the-art materials labs supporting quality assurance for civil and structural projects. We are looking for a Laboratory Technician to carry out soil, concrete, and material testing as per international standards.",
    responsibilities: [
      "Conduct laboratory and field tests (soil, concrete, aggregates, etc.).",
      "Record and report test data.",
      "Maintain testing equipment and lab safety standards.",
      "Assist in sample collection and test preparation."
    ],
    requirements: [
      "NVQ Level 4/5 or Diploma in Civil Engineering / Laboratory Technology.",
      "1–2 years of lab experience preferred.",
      "Familiarity with ASTM and BS testing standards.",
      "Attention to detail and quality-focused approach."
    ],
    benefits: [
      "Entry-level competitive salary.",
      "Hands-on training and lab certification.",
      "Opportunities for QA/QC career growth."
    ]
  },
  // --- BATCH 3 ---
  {
    id: 17,
    title: "PMP CERTIFIED PLANNING ENGINEER",
    department: "Engineering",
    location: "Hybrid",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "2 months ago",
    tags: ["PMP", "Primavera P6", "Planning"],
    description: "Manage project timelines, resource allocation, and scheduling across high-value engineering projects.",
    overview: "Terrene Engineering (Pvt) Ltd is seeking an experienced Planning Engineer with PMP certification to manage project timelines, resource allocation, and scheduling across high-value engineering and construction projects. This role demands strong analytical skills and practical experience with project planning software.",
    responsibilities: [
      "Develop and monitor project schedules using Primavera P6/MS Project.",
      "Coordinate with project teams to ensure timely task execution.",
      "Analyze progress, variances, and prepare recovery plans.",
      "Generate regular project progress reports and dashboards."
    ],
    requirements: [
      "Bachelor's Honours Degree in Engineering or Construction Management.",
      "PMP certification is mandatory.",
      "5+ years of planning experience in construction or infrastructure.",
      "Proficient in Primavera P6, MS Project, and Excel."
    ],
    benefits: [
      "Attractive salary package.",
      "Project-based performance bonuses.",
      "International project exposure.",
      "Professional development and PMP recertification support."
    ]
  },
  {
    id: 18,
    title: "PLANNER",
    department: "Engineering",
    location: "Hybrid / On-site",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "2 months ago",
    tags: ["Planning", "Primavera P6", "Scheduling"],
    description: "Support the planning and scheduling of construction and engineering projects.",
    overview: "Terrene Engineering (Pvt) Ltd is looking for a proactive and detail-oriented Planner to support the planning and scheduling of construction and engineering projects. This role requires strong analytical and coordination skills to ensure effective project execution.",
    responsibilities: [
      "Prepare baseline and detailed project schedules using Primavera P6 or MS Project.",
      "Monitor and update progress schedules and look-ahead programs.",
      "Assist in preparing resource histograms and cash flow forecasts.",
      "Coordinate with project managers, site engineers, and stakeholders."
    ],
    requirements: [
      "Bachelor's Degree or Diploma in Engineering, Project Management, or related field.",
      "2–5 years of experience in project planning and scheduling.",
      "Proficiency in Primavera P6 and/or MS Project.",
      "Knowledge of construction workflows and project controls."
    ],
    benefits: [
      "Competitive salary.",
      "Mentorship from senior planning professionals.",
      "Project-based incentives and exposure to international planning practices."
    ]
  },
  {
    id: 19,
    title: "CHARTERED QUANTITY SURVEYOR",
    department: "Engineering",
    location: "On-site / Hybrid",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "3 months ago",
    tags: ["QS", "MRICS", "FIDIC"],
    description: "Oversee cost control, procurement, and contract administration for major projects.",
    overview: "We are seeking a Chartered Quantity Surveyor to oversee cost control, procurement, and contract administration for major projects. This leadership role requires deep knowledge of construction economics and contractual practices.",
    responsibilities: [
      "Prepare and manage project budgets and BOQs.",
      "Evaluate tenders and subcontractor pricing.",
      "Monitor project expenditures and financial reporting.",
      "Manage contract negotiations and claims.",
      "Ensure compliance with FIDIC and other contract standards."
    ],
    requirements: [
      "Chartered status (MRICS or equivalent).",
      "Bachelor’s Honours Degree in Quantity Surveying.",
      "7+ years of post-qualification experience.",
      "Knowledge of local/international contract law.",
      "Strong leadership and negotiation skills."
    ],
    benefits: [
      "Industry-leading salary.",
      "Professional membership fee support.",
      "Project bonuses.",
      "Opportunities to lead commercial teams."
    ]
  },
  {
    id: 20,
    title: "QUANTITY SURVEYOR",
    department: "Engineering",
    location: "On-site / Hybrid",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "3 months ago",
    tags: ["QS", "BOQ", "Contracts"],
    description: "Assist in cost estimation, contract administration, and financial management across a variety of projects.",
    overview: "Terrene Engineering (Pvt) Ltd is seeking an experienced Quantity Surveyor to assist in cost estimation, contract administration, and financial management across a variety of civil and infrastructure projects.",
    responsibilities: [
      "Assist in the preparation of BOQs, cost estimates, and tender documentation.",
      "Track project costs and prepare payment applications.",
      "Support contract negotiations and sub-contractor evaluations.",
      "Maintain records for variations and claims."
    ],
    requirements: [
      "Bachelor's Degree in Quantity Surveying or relevant field.",
      "3–6 years of experience in construction or engineering projects.",
      "Proficient in MS Excel and quantity surveying software.",
      "Knowledge of FIDIC or other contract standards is an advantage."
    ],
    benefits: [
      "Competitive salary.",
      "Project-based bonuses.",
      "Mentorship and training programs.",
      "Growth opportunities toward Chartered status."
    ]
  },
  {
    id: 21,
    title: "CONTRACT & CLAIM ENGINEER",
    department: "Engineering",
    location: "Hybrid / On-site",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "3 months ago",
    tags: ["Contracts", "Claims", "FIDIC"],
    description: "Handle contractual documentation, prepare claims, and mitigate project risks in line with international standards.",
    overview: "We are looking for a knowledgeable Contract & Claim Engineer to handle contractual documentation, prepare claims, and mitigate project risks in line with international contract standards.",
    responsibilities: [
      "Draft and review contractual correspondence and notices.",
      "Prepare claims, variations, and time extensions.",
      "Support project teams in dispute resolution.",
      "Liaise with legal teams and consultants.",
      "Ensure adherence to FIDIC, NEC, or JCT contracts."
    ],
    requirements: [
      "Bachelor’s Degree in Engineering or Quantity Surveying.",
      "5+ years’ experience in contracts and claims.",
      "Familiarity with FIDIC, SBD, and construction law.",
      "Excellent writing and communication skills."
    ],
    benefits: [
      "Attractive salary and legal consultation allowances.",
      "Professional development in construction law.",
      "Career advancement into contract management."
    ]
  },
  {
    id: 22,
    title: "LEGAL OFFICER (INTERNATIONAL & SRI LANKAN LAW)",
    department: "Project Management",
    location: "Hybrid / On-site",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "4 months ago",
    tags: ["Legal", "Law", "Contracts"],
    description: "Provide legal counsel on construction law, contracts, and compliance for both local and international projects.",
    overview: "Terrene Engineering (Pvt) Ltd is expanding its legal and compliance unit. We are looking for a Legal Officer with knowledge of both international construction law and Sri Lankan legal practices.",
    responsibilities: [
      "Review contracts, agreements, and procurement documentation.",
      "Advise on legal implications of construction claims and disputes.",
      "Represent the company in legal proceedings if required.",
      "Support project compliance with local and international law."
    ],
    requirements: [
      "LLB or equivalent legal qualification.",
      "Licensed attorney in Sri Lanka.",
      "Minimum 4 years' experience in legal practice (construction preferred).",
      "Familiarity with FIDIC, SBDs, and international law protocols."
    ],
    benefits: [
      "Competitive legal retainer or salary.",
      "International exposure in contract law.",
      "CPD and bar membership fee assistance."
    ]
  },
  {
    id: 23,
    title: "ESTIMATOR",
    department: "Engineering",
    location: "On-site / Hybrid",
    type: "Full-Time / Part-Time",
    remote: "Hybrid",
    postedAgo: "4 months ago",
    tags: ["Estimation", "Tendering", "Costing"],
    description: "Prepare accurate cost estimates for tendering and project execution phases across various works.",
    overview: "Terrene Engineering (Pvt) Ltd is seeking a detail-oriented Estimator to prepare accurate cost estimates for tendering and project execution phases across infrastructure, building, and interior works.",
    responsibilities: [
      "Prepare detailed cost estimates and rate build-ups.",
      "Analyze drawings, specifications, and scope documents.",
      "Liaise with suppliers and subcontractors for pricing.",
      "Assist in bid preparation and tender submissions."
    ],
    requirements: [
      "Diploma or Bachelor’s in Quantity Surveying, Engineering, or relevant field.",
      "3+ years of experience in estimation and tendering.",
      "Familiarity with pricing software and MS Excel.",
      "Strong analytical and documentation skills."
    ],
    benefits: [
      "Competitive salary and tender success incentives.",
      "Estimation software and pricing database training.",
      "Exposure to multidisciplinary project scopes."
    ]
  },
  {
    id: 24,
    title: "FACILITY MANAGER",
    department: "Project Management",
    location: "Sri Lanka / International",
    type: "Full-Time / Part-Time",
    remote: "On-site",
    postedAgo: "4 months ago",
    tags: ["Facility Management", "Operations", "Safety"],
    description: "Oversee building operations, maintenance, and health & safety compliance across commercial projects.",
    overview: "We are looking for an experienced Facility Manager to oversee building operations, maintenance, and health & safety compliance across commercial and institutional projects.",
    responsibilities: [
      "Manage daily operations of building systems and equipment.",
      "Coordinate repairs, maintenance, and vendor services.",
      "Ensure regulatory compliance and documentation.",
      "Develop preventive maintenance schedules."
    ],
    requirements: [
      "Bachelor's Degree in Facilities Management, Engineering, or related field.",
      "5+ years in building operations or property management.",
      "Familiar with FM software and systems.",
      "Excellent leadership and coordination skills."
    ],
    benefits: [
      "Competitive industry salary.",
      "Project site allowances.",
      "Health, safety, and operational training."
    ]
  },
    // --- BATCH 4 ---
    {
        id: 25,
        title: "DIGITAL TWIN EXPERT",
        department: "BIM & Digital Twin",
        location: "Hybrid / Remote",
        type: "Full-Time / Part-Time",
        remote: "Remote",
        postedAgo: "5 months ago",
        tags: ["Digital Twin", "IoT", "BIM"],
        description: "Implement and manage digital twin models for smart construction and lifecycle asset management.",
        overview: "Terrene Engineering (Pvt) Ltd is looking for a Digital Twin Expert to implement and manage digital twin models for smart construction, building performance monitoring, and lifecycle asset management.",
        responsibilities: [
            "Integrate BIM with IoT and cloud platforms for real-time monitoring.",
            "Develop digital twin models for buildings and infrastructure.",
            "Analyze and visualize operational data through dashboards.",
            "Collaborate with engineering, MEP, and IT teams."
        ],
        requirements: [
            "Bachelor's/Master’s in Engineering, Computer Science, or Data Science.",
            "3+ years of experience with Digital Twin solutions.",
            "Proficient in tools such as Autodesk Tandem, Azure, or Siemens.",
            "Strong understanding of IoT, BIM, and simulation."
        ],
        benefits: [
            "High-value project exposure.",
            "Competitive digital tech-based salary.",
            "R&D and innovation project involvement."
        ]
    },
    {
        id: 26,
        title: "DATA ANALYST",
        department: "IT",
        location: "Remote / Hybrid",
        type: "Full-Time / Part-Time",
        remote: "Remote",
        postedAgo: "5 months ago",
        tags: ["Data Analysis", "Power BI", "SQL"],
        description: "Support data-driven decision-making across engineering, project management, and business functions.",
        overview: "We are seeking a Data Analyst to support data-driven decision-making across engineering, project management, and business development functions.",
        responsibilities: [
            "Collect, clean, and interpret project and business data.",
            "Develop dashboards, KPIs, and reporting tools.",
            "Perform trend analysis and predictive modelling.",
            "Automate reports and data visualizations."
        ],
        requirements: [
            "Bachelor’s Degree in Statistics, Data Science, or Engineering.",
            "Strong skills in Excel, Power BI, Python, or SQL.",
            "Minimum 2 years of experience in data analytics.",
            "Knowledge of project or construction data is a plus."
        ],
        benefits: [
            "Competitive compensation.",
            "Access to BI tools and analytics platforms.",
            "Opportunities in digital transformation projects."
        ]
    },
    {
        id: 27,
        title: "SENIOR TECH LEAD",
        department: "IT",
        location: "Hybrid / Remote",
        type: "Full-Time / Part-Time",
        remote: "Remote",
        postedAgo: "5 months ago",
        tags: ["Tech Lead", "Agile", "Cloud"],
        description: "Manage software development, system integrations, and technical R&D in construction tech applications.",
        overview: "Terrene Engineering (Pvt) Ltd is expanding its technology leadership team and is looking for a Senior Tech Lead to manage software development, system integrations, and technical R&D in construction tech applications.",
        responsibilities: [
            "Oversee development teams for internal tools and external client platforms.",
            "Set technical standards and ensure clean, scalable architecture.",
            "Manage DevOps, CI/CD pipelines, and version control.",
            "Review code, mentor junior developers, and lead sprints."
        ],
        requirements: [
            "Bachelor’s Degree in Computer Science or Software Engineering.",
            "6+ years in software development, with 2+ in leadership roles.",
            "Proficiency in .NET, Node.js, React, or Python.",
            "Strong understanding of cloud platforms (AWS/Azure)."
        ],
        benefits: [
            "Senior leadership pay scale.",
            "Remote/hybrid work model.",
            "Technology budget and certification support."
        ]
    },
    {
        id: 28,
        title: "FULL-STACK DEVELOPER",
        department: "IT",
        location: "Remote",
        type: "Full-Time / Part-Time",
        remote: "Remote",
        postedAgo: "6 months ago",
        tags: ["Full-Stack", "React", "Node.js"],
        description: "Build tools and platforms that support engineering, project monitoring, and business automation.",
        overview: "Join our digital transformation team to build tools and platforms that support engineering, project monitoring, and business automation.",
        responsibilities: [
            "Design and develop front-end and back-end web applications.",
            "Integrate third-party APIs and services.",
            "Maintain databases and cloud deployments.",
            "Collaborate with designers, engineers, and analysts."
        ],
        requirements: [
            "Degree or Diploma in Software Engineering / IT.",
            "2+ years of experience in full-stack development.",
            "Proficient in JavaScript (React/Vue), Node.js, and PostgreSQL/MySQL.",
            "Experience with REST APIs and Git workflows."
        ],
        benefits: [
            "Competitive developer salary.",
            "Remote-first team culture.",
            "Technical mentorship and project bonuses."
        ]
    },
    {
        id: 29,
        title: "OPERATIONAL COORDINATOR",
        department: "Project Management",
        location: "Head Office & Project Sites",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "6 months ago",
        tags: ["Operations", "Coordination", "Logistics"],
        description: "Support day-to-day project logistics, scheduling, and internal team coordination.",
        overview: "Terrene Engineering (Pvt) Ltd is seeking proactive Operational Coordinators to support day-to-day project logistics, scheduling, and internal team coordination.",
        responsibilities: [
            "Coordinate project schedules, team assignments, and resource logistics.",
            "Maintain operational records and assist with reporting.",
            "Liaise with departments to ensure smooth workflow.",
            "Monitor site readiness and materials tracking."
        ],
        requirements: [
            "Diploma or Degree in Business, Engineering, or Project Management.",
            "2–4 years’ experience in operations or project support.",
            "Excellent organizational and multitasking skills.",
            "Strong proficiency in MS Office and Google Workspace."
        ],
        benefits: [
            "Competitive salary.",
            "Hands-on training with project managers.",
            "Career progression to Operations or PMO roles."
        ]
    },
    {
        id: 30,
        title: "OPERATIONAL MANAGER",
        department: "Project Management",
        location: "Head Office & Regional Projects",
        type: "Full-Time",
        remote: "Hybrid",
        postedAgo: "6 months ago",
        tags: ["Operations", "Management", "Strategy"],
        description: "Oversee resource management, departmental coordination, and strategic execution of project operations.",
        overview: "We are seeking an experienced Operational Manager to oversee resource management, departmental coordination, and the strategic execution of project operations.",
        responsibilities: [
            "Oversee daily operations across engineering and support departments.",
            "Develop operational strategies and monitor KPI performance.",
            "Coordinate inter-departmental project delivery.",
            "Support the implementation of project management systems."
        ],
        requirements: [
            "Bachelor’s Degree in Engineering or Business Management.",
            "7+ years of operations or project experience.",
            "Strong leadership and decision-making skills.",
            "Proficient in ERP, CRM, or operations management tools."
        ],
        benefits: [
            "Competitive executive compensation.",
            "Company transport and allowances.",
            "Performance-based bonuses."
        ]
    },
    {
        id: 31,
        title: "COST AND PLANNING ENGINEER",
        department: "Engineering",
        location: "Hybrid",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "7 months ago",
        tags: ["Cost Control", "Planning", "Scheduling"],
        description: "Integrate project planning with cost tracking and control across construction and infrastructure projects.",
        overview: "Terrene Engineering (Pvt) Ltd is hiring a skilled Cost and Planning Engineer to integrate project planning with cost tracking and control across construction and infrastructure projects.",
        responsibilities: [
            "Prepare and monitor cost-loaded schedules.",
            "Analyze project performance against budgets and timelines.",
            "Support claims preparation and cost forecasting.",
            "Integrate planning and financial data for reporting."
        ],
        requirements: [
            "Bachelor's in Civil Engineering, Quantity Surveying, or related field.",
            "4+ years’ experience in cost planning and project control.",
            "Knowledge of planning software and cost management tools.",
            "Strong numerical and analytical skills."
        ],
        benefits: [
            "Attractive salary.",
            "Site travel allowances.",
            "Access to planning/cost control software tools."
        ]
    },
    {
        id: 32,
        title: "PLANNING AND SCHEDULING ENGINEER",
        department: "Engineering",
        location: "Hybrid / On-site",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "7 months ago",
        tags: ["Planning", "Scheduling", "Primavera P6"],
        description: "Manage detailed schedules and monitor project performance across infrastructure and construction projects.",
        overview: "Terrene Engineering (Pvt) Ltd is seeking a Planning and Scheduling Engineer to manage detailed schedules and monitor project performance across infrastructure, construction, and design projects.",
        responsibilities: [
            "Develop and maintain baseline project schedules using Primavera P6.",
            "Monitor progress and update look-ahead schedules.",
            "Analyze delays and propose mitigation strategies.",
            "Coordinate with project managers and site teams."
        ],
        requirements: [
            "Bachelor's Honours Degree in Engineering or Project Management.",
            "3–6 years of planning/scheduling experience.",
            "Proficiency in Primavera P6, MS Project, and Excel.",
            "Strong understanding of construction methodologies."
        ],
        benefits: [
            "Competitive salary.",
            "Opportunities for rapid growth into senior planning roles.",
            "Performance incentives and planning certifications."
        ]
    },
    {
        id: 33,
        title: "MECHANICAL ENGINEER",
        department: "Engineering",
        location: "On-site / Hybrid",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "7 months ago",
        tags: ["Mechanical", "HVAC", "MEP"],
        description: "Lead the design, supervision, and implementation of HVAC, plumbing, and mechanical systems.",
        overview: "We are seeking a Mechanical Engineer to lead the design, supervision, and implementation of HVAC, plumbing, and mechanical systems across building and industrial projects.",
        responsibilities: [
            "Design and review HVAC, plumbing, and fire protection systems.",
            "Prepare technical specifications and material submittals.",
            "Conduct site supervision and inspection of installations.",
            "Coordinate with MEP, architectural, and structural teams."
        ],
        requirements: [
            "Bachelor's Honours Degree in Mechanical Engineering.",
            "3–6 years’ experience in MEP project execution.",
            "Familiar with ASHRAE, SMACNA, and relevant codes.",
            "Proficiency in AutoCAD, Revit MEP, and simulation tools."
        ],
        benefits: [
            "Industry-aligned salary.",
            "Site allowances and accommodation (if applicable).",
            "Training and CPD programs."
        ]
    },
    {
        id: 34,
        title: "PROJECT MANAGER",
        department: "Project Management",
        location: "Sri Lanka / Overseas",
        type: "Full-Time (Project Basis)",
        remote: "On-site",
        postedAgo: "8 months ago",
        tags: ["Project Management", "FIDIC", "PMP"],
        description: "Lead multi-disciplinary engineering and construction projects from initiation to close-out.",
        overview: "Terrene Engineering (Pvt) Ltd is hiring an experienced Project Manager to lead multi-disciplinary engineering and construction projects from initiation to close-out.",
        responsibilities: [
            "Lead planning, execution, and delivery of projects.",
            "Coordinate stakeholders, teams, consultants, and contractors.",
            "Ensure compliance with contract terms, budget, and timeline.",
            "Oversee procurement, safety, and quality management."
        ],
        requirements: [
            "Bachelor's Degree in Engineering or Construction Management.",
            "7+ years' project leadership experience.",
            "Strong knowledge of FIDIC contracts and project controls.",
            "PMP or equivalent certification is an advantage."
        ],
        benefits: [
            "Premium project-based salary.",
            "Project completion incentives.",
            "Travel and accommodation."
        ]
    },
    {
        id: 35,
        title: "COST ANALYST",
        department: "Engineering",
        location: "Hybrid / On-site",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "8 months ago",
        tags: ["Cost Analysis", "Finance", "Budgeting"],
        description: "Support budget forecasting, financial control, and cost optimization across our project portfolio.",
        overview: "We are seeking a Cost Analyst to support budget forecasting, financial control, and cost optimization across our engineering and construction portfolio.",
        responsibilities: [
            "Track actual vs. forecasted costs.",
            "Analyze budget variances and project profitability.",
            "Support procurement with cost benchmarking.",
            "Provide input for financial reports and dashboards."
        ],
        requirements: [
            "Bachelor's Degree in Finance, Quantity Surveying, or Engineering.",
            "2–4 years of experience in cost control or analysis.",
            "Proficient in Excel, cost software, and reporting tools.",
            "Financial modeling and analytical capabilities."
        ],
        benefits: [
            "Competitive compensation.",
            "Exposure to multi-currency and international cost systems.",
            "Performance-linked bonuses."
        ]
    },
    {
        id: 36,
        title: "CLIENT RELATIONSHIP EXECUTIVE",
        department: "Marketing",
        location: "Head Office / Remote",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "8 months ago",
        tags: ["Client Relations", "CRM", "Sales"],
        description: "Maintain key client accounts, support business development, and ensure customer satisfaction.",
        overview: "Terrene Engineering (Pvt) Ltd is seeking a Client Relationship Executive to maintain key client accounts, support business development, and ensure customer satisfaction.",
        responsibilities: [
            "Maintain client communication and handle inquiries.",
            "Support pre-sales documentation and presentations.",
            "Coordinate meetings, proposals, and follow-ups.",
            "Maintain CRM records and client feedback."
        ],
        requirements: [
            "Degree in Business, Marketing, or Communication.",
            "2–5 years' experience in client-facing roles.",
            "Strong interpersonal and communication skills.",
            "Familiarity with CRM tools and proposal preparation."
        ],
        benefits: [
            "Attractive base salary + incentives.",
            "Travel and communication allowances.",
            "Training in technical services and business strategy."
        ]
    },
    {
        id: 37,
        title: "ELECTRICAL & ELECTRONIC ENGINEER",
        department: "Engineering",
        location: "On-site / Hybrid",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "9 months ago",
        tags: ["Electrical", "ELV", "BMS"],
        description: "Design, install, and maintain power, communication, and control systems for building projects.",
        overview: "Terrene Engineering (Pvt) Ltd is looking for a competent Electrical & Electronic Engineer to design, install, and maintain power, communication, and control systems across a range of building and industrial projects.",
        responsibilities: [
            "Prepare electrical designs, layouts, and load calculations.",
            "Review and approve material submissions and shop drawings.",
            "Conduct site inspections and quality checks.",
            "Ensure compliance with IEC, IEE, and local standards."
        ],
        requirements: [
            "Bachelor's Honours Degree in Electrical/Electronic Engineering.",
            "3–5 years of relevant experience.",
            "Proficient in AutoCAD, Dialux, and electrical simulation software.",
            "Knowledge in ELV, BMS, and renewable energy systems is a plus."
        ],
        benefits: [
            "Market-based salary and project perks.",
            "Access to software tools and certifications.",
            "International project exposure."
        ]
    },
    {
        id: 38,
        title: "SOCIAL MEDIA MANAGER",
        department: "Marketing",
        location: "Head Office / Remote",
        type: "Full-Time / Part-Time",
        remote: "Remote",
        postedAgo: "9 months ago",
        tags: ["Social Media", "Marketing", "Content"],
        description: "Drive online engagement, manage digital campaigns, and boost our brand presence.",
        overview: "Terrene Engineering (Pvt) Ltd is looking for a creative and analytics-driven Social Media Manager to drive online engagement, manage digital campaigns, and boost our brand presence in the engineering and construction space.",
        responsibilities: [
            "Develop and implement social media strategies and content calendars.",
            "Manage company profiles across LinkedIn, Instagram, Facebook, and YouTube.",
            "Coordinate with marketing, design, and project teams.",
            "Monitor analytics and campaign KPIs."
        ],
        requirements: [
            "Bachelor's Degree in Marketing, Communications, or a related field.",
            "3+ years of social media management experience.",
            "Familiar with engineering, architecture, or construction content.",
            "Proficient in Meta Suite, Canva, and analytics platforms."
        ],
        benefits: [
            "Competitive salary.",
            "Remote work flexibility.",
            "Incentives for performance and engagement."
        ]
    },
    {
        id: 39,
        title: "MARKETING MANAGER (ENGINEERING INDUSTRY)",
        department: "Marketing",
        location: "Head Office / Hybrid",
        type: "Full-Time",
        remote: "Hybrid",
        postedAgo: "9 months ago",
        tags: ["Marketing", "B2B", "Strategy"],
        description: "Lead campaigns, build B2B visibility, and coordinate marketing efforts in the engineering industry.",
        overview: "We are seeking an experienced Marketing Manager to lead campaigns, build B2B visibility, and coordinate digital and traditional marketing efforts in the engineering and construction industry.",
        responsibilities: [
            "Design and implement marketing strategies tailored to engineering markets.",
            "Lead content development, digital campaigns, and promotional events.",
            "Manage and mentor junior marketing staff.",
            "Oversee CRM and client engagement tools."
        ],
        requirements: [
            "Degree in Marketing, Business, or Engineering with marketing experience.",
            "5+ years in marketing or business development (engineering preferred).",
            "Strong command of branding, advertising, and B2B strategy.",
            "Familiarity with SEO, paid campaigns, and construction industry norms."
        ],
        benefits: [
            "Executive-level salary.",
            "Professional development in construction marketing.",
            "Performance bonuses and travel support."
        ]
    },
    {
        id: 40,
        title: "MARKETING EXECUTIVE",
        department: "Marketing",
        location: "Head Office / Hybrid",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "10 months ago",
        tags: ["Marketing", "Campaigns", "CRM"],
        description: "Support the development and execution of marketing initiatives aimed at enhancing our brand visibility.",
        overview: "Terrene Engineering (Pvt) Ltd is looking for dynamic and energetic Marketing Executives to support the development and execution of marketing initiatives aimed at enhancing our brand visibility and client engagement in the engineering and construction sectors.",
        responsibilities: [
            "Assist in planning and executing marketing campaigns.",
            "Coordinate social media and email marketing tasks.",
            "Attend events, exhibitions, and networking opportunities.",
            "Support content creation, graphic design, and branding."
        ],
        requirements: [
            "Diploma or Degree in Marketing, Business, or related fields.",
            "1–3 years of marketing experience (construction/engineering is a plus).",
            "Familiar with Canva, MS Office, and basic marketing platforms.",
            "Strong communication and presentation skills."
        ],
        benefits: [
            "Attractive salary with commission-based incentives.",
            "Career progression into marketing strategy or business development.",
            "Ongoing mentorship and training in industry-specific marketing."
        ]
    },
    {
        id: 41,
        title: "AI SPECIALIST",
        department: "IT",
        location: "Remote / Hybrid",
        type: "Full-Time / Part-Time",
        remote: "Remote",
        postedAgo: "10 months ago",
        tags: ["AI", "Machine Learning", "Python"],
        description: "Lead machine learning, automation, and data integration initiatives to transform project efficiency.",
        overview: "Terrene Engineering (Pvt) Ltd is embracing AI to transform project efficiency, risk assessment, and data-driven construction insights. We are seeking an AI Specialist to lead machine learning, automation, and data integration initiatives.",
        responsibilities: [
            "Develop and deploy AI/ML models for construction analytics.",
            "Automate repetitive tasks, documentation, and scheduling functions.",
            "Integrate AI tools with BIM, ERP, and IoT platforms.",
            "Analyze project data to optimize resource allocation and risk detection."
        ],
        requirements: [
            "Bachelor’s or Master’s in Computer Science, AI, or related fields.",
            "Experience with Python, TensorFlow, PyTorch, or similar frameworks.",
            "Knowledge of construction or built environment AI applications is an asset.",
            "Familiar with APIs, cloud computing, and data visualization tools."
        ],
        benefits: [
            "High-tier salary.",
            "Flexibility to work remotely.",
            "Support for research, publication, and patenting."
        ]
    },
    {
        id: 42,
        title: "GRAPHIC DESIGNER",
        department: "Marketing",
        location: "Remote / Hybrid",
        type: "Full-Time / Freelance / Part-Time",
        remote: "Remote",
        postedAgo: "10 months ago",
        tags: ["Graphic Design", "Adobe CC", "Branding"],
        description: "Enhance our brand presence across digital and print platforms with a strong aesthetic sense.",
        overview: "We’re seeking a creative Graphic Designer to enhance our brand presence across digital and print platforms, with a strong understanding of engineering and architectural aesthetics.",
        responsibilities: [
            "Design marketing materials, reports, and presentations.",
            "Create engaging visuals for social media and web.",
            "Collaborate with marketing, HR, and technical teams.",
            "Maintain brand consistency across all media."
        ],
        requirements: [
            "Degree/Diploma in Graphic Design or related field.",
            "Proficiency in Adobe Creative Suite (Photoshop, Illustrator, InDesign).",
            "Experience with Canva, Figma, or motion tools is a plus.",
            "Strong creative portfolio and attention to detail."
        ],
        benefits: [
            "Project-based or monthly compensation.",
            "Flexibility in working hours and location.",
            "Creative freedom and collaborative work culture."
        ]
    },
    {
        id: 43,
        title: "HR MANAGER",
        department: "HR",
        location: "Head Office",
        type: "Full-Time",
        remote: "On-site",
        postedAgo: "11 months ago",
        tags: ["HR", "Management", "Recruitment"],
        description: "Oversee the human resource function, enhance workplace culture, and support organizational growth.",
        overview: "Terrene Engineering (Pvt) Ltd is seeking a strategic and experienced HR Manager to oversee the human resource function, enhance workplace culture, and support organizational growth through efficient talent management and HR operations.",
        responsibilities: [
            "Lead recruitment, onboarding, and employee development programs.",
            "Ensure compliance with labour laws and HR policies.",
            "Manage performance appraisals, payroll coordination, and benefits.",
            "Design and implement HR strategies aligned with business goals."
        ],
        requirements: [
            "Bachelor’s Degree in Human Resources, Business Administration, or related field.",
            "5+ years of HR experience with 2+ years in a managerial role.",
            "Excellent knowledge of HR software and local labour regulations.",
            "Strong leadership, interpersonal, and problem-solving skills."
        ],
        benefits: [
            "Competitive salary.",
            "Medical and leave benefits.",
            "Career development and HR certification support."
        ]
    },
    {
        id: 44,
        title: "HR EXECUTIVE",
        department: "HR",
        location: "Head Office",
        type: "Full-Time / Part-Time",
        remote: "On-site",
        postedAgo: "11 months ago",
        tags: ["HR", "Recruitment", "Onboarding"],
        description: "Support recruitment, employee engagement, and daily HR operations in a fast-paced environment.",
        overview: "We are hiring a driven HR Executive to support recruitment, employee engagement, and daily HR operations. This role is ideal for early-career professionals looking to grow in a fast-paced engineering company.",
        responsibilities: [
            "Assist with recruitment, interviews, and onboarding.",
            "Maintain employee records and HR databases.",
            "Support payroll processing and leave management.",
            "Organize training sessions and employee engagement activities."
        ],
        requirements: [
            "Degree or Diploma in HRM, Business Administration, or equivalent.",
            "1–3 years of experience in HR functions.",
            "Familiar with HR software and basic labour laws.",
            "Good communication and organization skills."
        ],
        benefits: [
            "Competitive salary.",
            "Hands-on experience in HR systems.",
            "Mentorship and growth opportunities."
        ]
    },
    {
        id: 45,
        title: "FINANCE MANAGER",
        department: "Finance",
        location: "Remote",
        type: "Full-Time/ Part-Time",
        remote: "Remote",
        postedAgo: "11 months ago",
        tags: ["Finance", "ACCA/CIMA", "ERP"],
        description: "Lead financial planning, reporting, and compliance to ensure the financial health of our operations.",
        overview: "Terrene Engineering (Pvt) Ltd is hiring a Finance Manager to lead financial planning, reporting, and compliance. This strategic role is crucial to ensuring the financial health of our expanding operations and projects.",
        responsibilities: [
            "Oversee budgeting, forecasting, and cash flow management.",
            "Prepare financial statements, audits, and management reports.",
            "Monitor project-based financial performance.",
            "Ensure tax compliance and regulatory filings."
        ],
        requirements: [
            "Bachelor’s Degree in Finance, Accounting, or related field (ACCA/CIMA preferred).",
            "5+ years of financial experience, with at least 2 years in a senior role.",
            "Strong knowledge of accounting standards, ERP systems, and local regulations.",
            "Analytical mindset and strong leadership capabilities."
        ],
        benefits: [
            "Attractive salary and executive-level incentives.",
            "Medical and retirement contributions.",
            "Career advancement opportunities."
        ]
    },
    {
        id: 46,
        title: "FINANCE EXECUTIVE",
        department: "Finance",
        location: "Head office/ Remote",
        type: "Full-Time / Part-Time",
        remote: "Hybrid",
        postedAgo: "1 year ago",
        tags: ["Finance", "Accounting", "QuickBooks"],
        description: "Support day-to-day accounting, billing, and financial operations to maintain accuracy in project finances.",
        overview: "We are looking for a Finance Executive to support day-to-day accounting, billing, and financial operations. This role is essential for maintaining accuracy in project and company finances.",
        responsibilities: [
            "Handle daily bookkeeping and ledger updates.",
            "Prepare invoices, receipts, and payment tracking.",
            "Assist with monthly closings and financial reporting.",
            "Coordinate with vendors and procurement for payment processing."
        ],
        requirements: [
            "Diploma or Degree in Accounting, Finance, or related field.",
            "1–3 years of experience in accounting or finance.",
            "Familiar with accounting software (QuickBooks, ERP systems).",
            "Attention to detail and numeric accuracy."
        ],
        benefits: [
            "Competitive salary.",
            "On-the-job training and mentorship.",
            "Opportunities to grow within the finance team."
        ]
    },
    {
        id: 47,
        title: "SECRETARY",
        department: "HR",
        location: "Head Office / Remote",
        type: "Full-Time",
        remote: "Hybrid",
        postedAgo: "1 year ago",
        tags: ["Admin", "Secretary", "MS Office"],
        description: "Provide administrative support to senior management and ensure smooth office operations.",
        overview: "Terrene Engineering (Pvt) Ltd is seeking a well-organized and professional Secretary to provide administrative support to senior management and ensure smooth office operations.",
        responsibilities: [
            "Manage schedules, appointments, and correspondence.",
            "Prepare meeting agendas, minutes, and documentation.",
            "Maintain records, reports, and filing systems.",
            "Handle phone and email communications with clients and partners."
        ],
        requirements: [
            "Diploma in Secretarial Practice or Business Administration.",
            "2+ years of experience in a similar role.",
            "Proficient in MS Office and document formatting.",
            "Excellent communication and organizational skills."
        ],
        benefits: [
            "Competitive salary.",
            "Professional working environment.",
            "Leave and medical benefits."
        ]
    },
    {
        id: 48,
        title: "BUSINESS DEVELOPMENT MANAGER",
        department: "Marketing",
        location: "Head Office / Hybrid",
        type: "Full-Time",
        remote: "Hybrid",
        postedAgo: "1 year ago",
        tags: ["Business Development", "Sales", "Strategy"],
        description: "Lead strategic growth, client acquisition, and partnership development initiatives.",
        overview: "Terrene Engineering (Pvt) Ltd is expanding its footprint in the construction and engineering sector and is seeking a results-driven Business Development Manager to lead strategic growth, client acquisition, and partnership development initiatives.",
        responsibilities: [
            "Identify and develop new business opportunities in local and international markets.",
            "Build and maintain strong relationships with clients, consultants, and industry stakeholders.",
            "Lead the preparation of proposals, bids, and presentations.",
            "Collaborate with the technical and marketing teams to align solutions with client needs."
        ],
        requirements: [
            "Bachelor’s Degree in Engineering, Business, or Marketing (MBA preferred).",
            "5+ years of experience in business development, preferably in engineering or construction sectors.",
            "Proven track record in client acquisition and project win strategies.",
            "Excellent communication, negotiation, and presentation skills."
        ],
        benefits: [
            "Attractive performance-based remuneration.",
            "Business travel and networking allowances.",
            "Leadership opportunities in strategic expansion initiatives."
        ]
    },
     {
        id: 49,
        title: "3D Visualizer",
        department: "Architecture",
        location: "Remote",
        type: "Full-Time",
        remote: "Hybrid",
        postedAgo: "1 year ago",
        tags: ["3D", "3D Visualizer", "Architecture"],
        description: "Specialize in realistic 3D visualization to communicate design intent and elevate project impact",
        overview: "Terrene Engineering (Pvt) Ltd integrates design, engineering, and visualization to deliver high-impact project concepts.   a creative 3D Visualizer to produce photorealistic renders and animations",
        responsibilities: [
            "ICreate high-quality 3D renders and walkthroughs",
            "Collaborate with architects and engineers on design",
            "Prepare visual materials for presentations and proposals",
            "Maintain asset libraries and rendering templates",
            "Assist in post-production editing using graphic tools"
        ],
        requirements: [
            "Diploma or Degree in Architecture, Design, or Multimedia",
            "2+ years of visualization experience",
            "Proficiency in 3ds Max, Lumion, V-Ray, SketchUp, Photoshop",
            "Portfolio showcasing 3D render and animation work"
        ],
        benefits: [
            "Competitive salary based on experience",
            "Access to licensed software and rendering hardware",
            "Creative development sessions and team-based projects",
            "Opportunities to lead visualization across landmark projects"
        ]
    },
    {
        id: 50,
        title: "Draftsman (Architectural / Structural / MEP)",
        department: "Architecture",
        location: "Hybrid",
        type: "Full-Time / Part-Time / Freelance",
        remote: "Hybrid",
        postedAgo: "1 year ago",
        tags: ["Draftsman", "Structural", "Architecture"],
        description: "Transform design concepts into accurate CAD drawings for architectural, structural, and MEP projects",
        overview: "Terrene Engineering (Pvt) Ltd delivers precision in every plan. We are looking for skilled Draftsmen in Architectural, Structural, and MEP disciplines to prepare detailed drawings and ensure project documentation accuracy",
        responsibilities: [
            "Prepare construction and shop drawings using CAD tools",
            "Collaborate with engineers and design coordinators",
            "Ensure drawing standards, layers, and details are consistent",
            "Revise and update drawings as per site feedback",
            "Maintain drawing registers and as-built documentation"
        ],
        requirements: [
            "Diploma in Drafting or Engineering Technology",
            "2–3 years of drafting experience in relevant field",
            "Expertise in AutoCAD, Revit preferred",
            "Strong technical drawing and spatial skills"
        ],
        benefits: [
            "Competitive salary structure",
            "Software training and Revit certification pathways",
            "Exposure to multidisciplinary projects",
            "Bonus for accuracy and timely delivery"
        ]
    }
];

// --- Job Categories Data ---
const jobCategories = [
    { title: "Architecture", jobsAvailable: 6, icon: <LucideNewspaper className="w-8 h-8 text-cyan-400" /> },
    { title: "Engineering", jobsAvailable: 21, icon: <HardHat className="w-8 h-8 text-cyan-400" /> },
    { title: "Project Management", jobsAvailable: 7, icon: <Presentation className="w-8 h-8 text-cyan-400" /> },
    { title: "BIM & Digital Twin", jobsAvailable: 6, icon: <Layers className="w-8 h-8 text-cyan-400" /> },
    { title: "IT", jobsAvailable: 4, icon: <Laptop className="w-8 h-8 text-cyan-400" /> },
    { title: "Marketing", jobsAvailable: 6, icon: <Megaphone className="w-8 h-8 text-cyan-400" /> },
    { title: "HR", jobsAvailable: 3, icon: <Users className="w-8 h-8 text-cyan-400" /> },
    { title: "Finance", jobsAvailable: 2, icon: <Banknote className="w-8 h-8 text-cyan-400" /> },
    // Adding other departments from positions data for completeness if necessary
    
];

// --- Sub-jobs for each category ---
const categoryJobsData = [
  {
    category: "Architecture",
    jobs: ["Chartered Architect", "Senior Interior Designer", "Junior Interior Designer", "Furniture Designer", "3D Visualizer", "Draftsman (Architectural / Structural / MEP)"]
  },
  {
    category: "Engineering",
    jobs: ["Chartered Civil Engineer", "Chartered MEP Engineer", "Chartered Geotechnical Engineer", "Commissioning Engineer", "Material Engineer", "HVAC Technician", "Engineering Material Laboratory Technician", "Mechanical Engineer", "Electrical & Electronic Engineer", "Safety Engineer", "Safety Officer", "Safety Manager", "QA/QC Engineer", "Chartered Quantity Surveyor", "Quantity Surveyor", "Contract & Claim Engineer", "Estimator", "Cost Analyst", "Cost and Planning Engineer", "PMP Certified Planning Engineer","Planner", "Planning and Scheduling Engineer"   ]
  },
  {
    category: "Project Management",
    jobs: ["Construction Manager", "Site Supervisor", "Project Manager", "Operational Coordinator", "Operational Manager","Legal Officer", "Facility Manager" ]
  },
  {
    category: "BIM & Digital Twin",
    jobs: ["BIM Manager", "BIM Modeler (Structural / Architectural / MEP)", "BIM Coordinator", "Digital Twin Expert", "BIM Trainer", "Digital Twin Instructor"]
  },
  {
    category: "IT",
    jobs: ["Data Analyst", "AI Specialist", "Senior Tech Lead", "Full-Stack Developer"]
  },
  {
    category: "Marketing",
    jobs: ["Client Relationship Executive", "Social Media Manager", "Marketing Manager (Engineering Industry)", "Marketing Executive", "Business Development Manager", "Graphic Designer"]
  },
  {
    category: "HR",
    jobs: ["HR Manager", "HR Executive", "Secretary"]
  },
  {
    category: "Finance",
    jobs: ["Finance Manager", "Finance Executive",]
  }
  
];


// --- Job Detail Modal Component ---
const JobDetailModal = ({ position, onClose }: { position: typeof positions[0], onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="bg-[#0b2741] border border-cyan-400/30 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/20 flex-shrink-0">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">{position.title}</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-300 mt-2">
              <span className="flex items-center gap-1.5"><Building className="w-4 h-4 text-cyan-400" />{position.department}</span>
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" />{position.location}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-cyan-400" />{position.type}</span>
              <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-cyan-400" />{position.remote}</span>
            </div>
          </div>
          <Button onClick={onClose} variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full">
            <X className="h-6 w-6" />
          </Button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 overflow-y-auto text-gray-200 space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Company Overview</h3>
            <p className="leading-relaxed">{position.overview}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Key Responsibilities</h3>
            <ul className="space-y-2 list-disc list-inside">
              {position.responsibilities.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Applicant Requirements</h3>
            <ul className="space-y-2 list-disc list-inside">
              {position.requirements.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Salary & Benefits</h3>
            <ul className="space-y-2 list-disc list-inside">
              {position.benefits.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-6 mt-auto border-t border-white/20 flex-shrink-0">
          <Button className="w-full bg-[#0050A0] hover:bg-cyan-500/80 text-white font-bold text-lg py-3 transition-all">
            APPLY NOW
          </Button>
        </div>
      </div>
    </div>
  );
};


const Career = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const [selectedPosition, setSelectedPosition] = useState<(typeof positions[0]) | null>(null);
  const [visiblePositions, setVisiblePositions] = useState(8);
  // NEW: State to hold both category and specific title for filtering
  const [filter, setFilter] = useState({ category: 'All', title: null as string | null });

  // --- Carousel Setup ---
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi]);
  // --- End Carousel Setup ---

  const testimonials = [
    {
      quote: "The best thing about my job at Terrene is the opportunity to work with talented people all over the world who all lean in and drive one goal",
      author: "Zoe Leach-Leeson",
      title: "Communications Officer, United Kingdom"
    },
    {
      quote: "I've grown more here in two years than I did in five years at my previous company. The mentorship and hands-on project experience are unparalleled",
      author: "Aarav Sharma",
      title: "Senior Structural Engineer, Colombo"
    },
    {
      quote: "Terrene's commitment to sustainability isn't just a talking point; it's integrated into every project we undertake. It's rewarding work",
      author: "Priya Singh",
      title: "Environmental Consultant, India"
    },
    {
      quote: "The collaborative environment and the freedom to innovate make every day exciting. We are truly building the future, together",
      author: "Johnathan Chen",
      title: "Lead MEP Engineer, Singapore"
    }
  ];

  const handleLoadMore = () => {
    setVisiblePositions(prevCount => prevCount + 8);
  };
  
  // NEW: Unified handler for all filter changes
  const handleFilterChange = (newFilter: { category: string; title: string | null }) => {
    setFilter(newFilter);
    setVisiblePositions(8); // Reset pagination on new filter
    // Smooth scroll to the open positions section
    const section = document.getElementById('open-positions');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // NEW: Updated filtering logic for both category and specific title
  const filteredPositions = positions.filter(position => {
    if (filter.category === 'All') return true;
  
    const categoryMatch = position.department === filter.category;
    if (!categoryMatch) return false;
  
    if (filter.title) {
      // A specific sub-job is selected, perform case-insensitive match
      return position.title.toLowerCase() === filter.title.toLowerCase();
    }
  
    // Only a category is selected
    return true;
  });


  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY.current || window.scrollY < 10);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="bg-[#0b2741]">
        <div
          className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
            showHeader ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <Header mode="transparent" />
        </div>

        <section className="relative h-screen flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                src={heroVideo}
            />
            <div className="absolute inset-0 bg-[#0b2741]/75"></div>
          </div>
          <div className="relative z-10 w-full px-4 md:px-8">
            <h1 className="text-4xl md:text-6xl font-bold">Build Your Career with Terrene</h1>
            <p className="mt-2 text-white/ max-w-2xl mx-auto text-2xl">
              Be part of an innovative team shaping the future of infrastructure and design. We value innovation, growth, and work-life balance
            </p>
            <a href="#category" className="mt-8 inline-block">
              <Button
                  size="lg"
                  className="bg-[#0050A0] hover:bg-cyan-500/80 text-white font-bold text-lg px-8 py-4 rounded-md shadow-lg
                            transition-transform hover:scale-110 flex items-center gap-2 animate-throb"
              >
                EXPLORE OPEN POSITIONS
                <ArrowDown className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </section>

        <main className="bg-[#0b2741]">

          <section className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
              >
                  <source src={heroVideo} type="video/mp4" />
                  Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-[#0b2741]/90"></div>
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute top-10 left-10 w-32 h-32 opacity-20">
                <div className="grid grid-cols-8 gap-1">
                  {[...Array(64)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                  ))}
                </div>
              </div>
              <div className="absolute top-20 right-20 w-20 h-20 border-2 border-cyan-400/30 rounded-lg rotate-45"></div>
              <div className="absolute bottom-32 left-32 w-16 h-16 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full"></div>
              <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-full"></div>
              <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-blue-500/5 to-transparent rounded-full"></div>
            </div>

            <div className="w-full px-4 md:px-8 relative z-10">
              <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                <div className="text-white">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-[#0050A0] text-white rounded-full text-lg font-medium">
                      Join Our Team
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    The <span className="text-cyan-400">Easiest Way</span><br />
                    to Get Your New Job
                  </h2>
                  <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-8">
                    At Terrene, we are a dynamic, growing company where innovation thrives, and collaboration drives success. We empower you to take on challenges your way, with a strong, supportive community behind you. Here, every voice matters, and you have the freedom to shape your role and make a real impact                   </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-[#0050A0] hover:bg-cyan-400/80 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all hover:scale-105">
                      <a href="#open-positions">BROWSE OPENINGS</a>
                    </Button>
                    <Button asChild variant="outline" className="border-2 border-white/30 bg-cyan-600 text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-all">
                      <Link to="/about">ABOUT US</Link>
                    </Button>
                  </div>
                </div>

                <div className="relative flex items-center justify-center min-h-[350px] sm:min-h-[450px]">
                  <div className="relative w-full max-w-sm sm:max-w-sm">
                    <div className="relative">
                      <div className="relative z-20 bg-white rounded-2xl p-4 shadow-2xl">
                        <img
                          src={whyWorkWithUsImage}
                          alt="Team collaborating on a project"
                          className="w-full h-64 object-cover rounded-xl"
                        />
                        <div className="absolute -bottom-4 -right-4 w-32 h-24 bg-white rounded-xl p-2 shadow-xl">
                          <img
                            src={imageComposition}
                            alt="Project success"
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-8 -left-8 w-48 h-32 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-white/10 z-10"></div>
                      <div className="absolute -top-4 -left-4 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center z-30 animate-pulse">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div className="absolute top-8 -right-8 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center z-30">
                        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <section id="category" className="py-10 md:py-10 bg-[#0f2c4a] text-white ">
            <div className="w-full px-4 md:px-10 mb-[3vh]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Browse by category</h2>
                    <p className="mt-2 text-white/70">Find the job that’s perfect for you. about 800+ new jobs everyday</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {jobCategories.map((category, index) => {
                        const subJobs = categoryJobsData.find(c => c.category === category.title)?.jobs || [];
                        const isActive = filter.category === category.title;
                        return (
                            <div key={index} className="relative group">
                                <div onClick={() => handleFilterChange({ category: category.title, title: null })} className={`bg-cyan-900 backdrop-blur-md p-6 rounded-xl flex items-center gap-4 border shadow-lg group-hover:shadow-cyan-400/50 transition-all duration-300 min-h-[110px] cursor-pointer ${isActive ? 'border-cyan-400' : 'border-white/10 group-hover:border-cyan-500'}`}>
                                    <div className="bg-cyan-500/10 p-3 rounded-lg self-start">
                                        {category.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg text-white">{category.title}</h3>
                                        <p className="text-sm text-white/60">{category.jobsAvailable} Positions</p>
                                    </div>
                                </div>

                                <div className="absolute top-full left-0 w-full z-20 mt-2 rounded-lg shadow-lg bg-[#0f2c4a] border border-cyan-500/30 p-4 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-300 transform-gpu">
                                    <div className="max-h-60 overflow-y-auto">
                                        <ul className="space-y-1">
                                            {subJobs.map(job => (
                                                <li key={job}>
                                                    <button onClick={(e) => { e.stopPropagation(); handleFilterChange({ category: category.title, title: job }); }} className="block text-cyan-200 hover:text-white px-2 py-1 rounded-md hover:bg-cyan-500/10 text-sm w-full text-left">
                                                        {job}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
          </section>

          <section id="open-positions" className="py-16 md:py-12 relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src={aboutVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-[#0b2741]/90"></div>
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-full px-4 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white capitalize">
                    {filter.title
                      ? `Position: ${filter.title.toLowerCase()}`
                      : filter.category === 'All'
                        ? 'Open Positions'
                        : `Open Positions in ${filter.category}`
                    }
                  </h2>
                  <p className="text-center text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                      Join our innovative team and help shape the future of engineering excellence
                  </p>
                </div>
                
                {/* "See All" Button */}
                {filter.category !== 'All' && (
                  <div className="text-center mb-10">
                    <Button 
                      onClick={() => handleFilterChange({ category: 'All', title: null })}
                      variant="outline" 
                      className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                    >
                      Show All Positions
                    </Button>
                  </div>
                )}


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredPositions.length > 0 ? (
                        filteredPositions.slice(0, visiblePositions).map((position) => (
                            <div
                                key={position.id}
                                className="bg-gradient-to-r from-cyan-800 to-[#0b2741]/90 backdrop-blur-sm rounded-2xl p-6 flex flex-col h-full group hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all duration-300"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                                            <Building className="w-6 h-6 text-cyan-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-white">Terrene Engineering</h4>
                                            <p className="text-xs text-gray-400">{position.location}</p>
                                        </div>
                                    </div>
                                    <Bookmark className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                </div>
                                
                                <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                                
                                <div className="flex items-center text-xs text-gray-400 gap-4 mb-4">
                                    <span>{position.type}</span>
                                    <span>•</span>
                                    <span>{position.postedAgo}</span>
                                </div>
    
                                <p className="text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                                    {position.description}
                                </p>
    
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {position.tags.map(tag => (
                                        <span key={tag} className="bg-cyan-400/10 text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                                    ))}
                                </div>
                                
                                <div className="flex justify-between items-center pt-4 mt-auto border-t border-white/20">
                                    <span className="bg-gray-400/10 text-gray-300 text-xs font-semibold px-2.5 py-1 rounded-full">{position.department}</span>
                                    <Button onClick={() => setSelectedPosition(position)} variant="outline" className=" bg-[#0050A0] hover:bg-cyan-500/20 text-white rounded-lg font-semibold px-3 py-1 text-sm h-auto">
                                       APPLY NOW
                                   </Button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-10">
                            <p className="text-xl text-gray-300">
                                {filter.title
                                  ? `The position "${filter.title}" is not available at the moment.`
                                  : `No open positions found in the "${filter.category}" category at the moment.`
                                }
                            </p>
                            <p className="text-gray-400 mt-2">Please check back later or view all open positions.</p>
                        </div>
                    )}
                </div>

                {/* View More Button */}
                {visiblePositions < filteredPositions.length && (
                    <div className="mt-12 text-center">
                        <Button
                            size="lg"
                            className="bg-[#0050A0] text-white hover:bg-cyan-500/80 transition-colors"
                            onClick={handleLoadMore}
                        >
                            View More
                        </Button>
                    </div>
                )}


                <div className="text-center mt-16 max-w-5xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 hover:bg-white/15 transition-all duration-300">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Don't see the perfect role?
                        </h3>
                        <p className="text-gray-200 text-lg mb-8 max-w-2xl mx-auto">
                            We're always looking for talented individuals to join our team. Send us your resume and tell us how you'd like to contribute to Terrene Engineering (Pvt) Ltd                         </p>
                        <Button className="bg-[#0050A0] backdrop-blur-sm hover:bg-cyan-500/80 text-white  hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                            SEND GENERAL APPLICATION
                        </Button>
                    </div>
                </div>
            </div>
          </section>

          <section className="py-16 md:py-12 relative overflow-hidden ">
            <div className="absolute inset-0 z-0">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                  <source src={proVideo} type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[#0b2741]/90"></div>
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="w-full relative z-10">
              <section className="mx-4 md:mx-8 py-16 md:py-24 rounded-2xl bg-gradient-to-r from-cyan-600 to-[#0b2741] overflow-hidden">
                <div className="relative z-10">
                  <div className="embla relative max-w-4xl mx-auto overflow-hidden" ref={emblaRef}>
                      <div className="embla__container flex">
                          {testimonials.map((testimonial, index) => (
                              <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
                                  <div className="text-center  bg-transparent backdrop-blur-md border border-white/20 rounded-2xl p-8 md:p-10">
                                      <Quote className="w-16 h-16 text-white/50 mx-auto mb-6" fill="currentColor"/>
                                      <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl mx-auto">
                                          {testimonial.quote}
                                      </p>
                                      <footer className="mt-8">
                                          <p className="text-lg font-semibold text-white">{testimonial.author}</p>
                                          <p className="text-white/80">{testimonial.title}</p>
                                      </footer>
                                  </div>
                              </div>
                          ))}
                      </div>

                      <button onClick={scrollPrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10">
                          <ArrowLeft className="w-6 h-6" />
                      </button>
                      <button onClick={scrollNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-colors z-10">
                          <ArrowRight className="w-6 h-6" />
                      </button>
                  </div>
                  <div className="flex justify-center items-center gap-3 mt-8">
                      {scrollSnaps.map((_, index) => (
                          <button
                              key={index}
                              onClick={() => scrollTo(index)}
                              className={`w-3 h-3 rounded-full transition-colors ${
                                  index === selectedIndex ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                              }`}
                          />
                      ))}
                  </div>
                </div>
              </section>
            </div>
          </section>
          
  {/* --- REDESIGNED GET IN TOUCH SECTION --- */}
  <ContactFormSection />
</main>
<Footer />

        {/* Animation styles for the "throb" effect */}
        <style>{`
          @keyframes throb {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
          .animate-throb {
            animation: throb 2.5s ease-in-out infinite;
          }
        `}</style>
      </div>

      {/* Conditionally render the modal */}
      {selectedPosition && (
        <JobDetailModal
          position={selectedPosition}
          onClose={() => setSelectedPosition(null)}
        />
      )}
    </>
  );
};

export default Career;

// --- Contact Form Section Component ---
const ContactFormSection = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <section className="relative py-20 lg:py-19 text-white">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover" src="/sof.mp4" />
        <div className="absolute inset-0 bg-[#0b2741]/95"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 w-full max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">HAVE QUESTIONS?</h2>
          <p className="mt-2 text-lg text-white/70">Contact us for more information about career opportunities at Terrene Engineering</p>
          <div className="mt-4 w-16 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 bg-slate-900 p-8 rounded-lg border border-white/10 shadow-2xl shadow-cyan-500/20">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/10">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold">Call Us</h4>
                  <p className="text-white/70">+94 77 948 7100</p>
                  <p className="text-white/70">+94 71 433 7100</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center border border-white/10">
                  <Mail className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-bold">Email Us</h4>
                  <p className="text-white/70">careers@terreneengineering.com</p>
                  <p className="text-white/70">info@terreneengineering.com</p>
                </div>
              </div>

              

              <div>
                <h4 className="font-bold mb-4">Follow Us</h4>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/facebook.png" alt="Facebook" /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/instagram.png" alt="Instagram" /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/linkedin.png" alt="LinkedIn" /></a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/10 p-2 hover:bg-white/20 transition-colors"><img src="/youtube.png" alt="YouTube" /></a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 bg-slate-900 p-8 rounded-lg border border-white/10 shadow-2xl shadow-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
            <form onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">Your Name</label>
                  <input type="text" id="name" required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">Email Address</label>
                  <input type="email" id="email" required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-1">Phone Number</label>
                  <input type="tel" id="phone" required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">Your Message</label>
                  <textarea id="message" rows={5} required className="w-full p-3 bg-slate-800 border border-white/20 rounded-md focus:ring-cyan-500 focus:border-cyan-400"></textarea>
                </div>
              </div>
              <Button type="submit" size="lg" className="w-full mt-6 bg-[#0050A0] text-white font-bold hover:bg-cyan-500 transition-colors">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};