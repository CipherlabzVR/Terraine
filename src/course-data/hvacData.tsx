import React from 'react';
import { Zap, Wind, Wrench, Users, Briefcase } from 'lucide-react';

export const mepHvacData = {
  // --- Hero Section ---
  heroTitle: "Master Diploma in MEP and HVAC Systems",
  heroSubtitle: "Master the design, modeling, and optimization of mechanical, electrical, plumbing, and HVAC systems for high-performance buildings and infrastructure.",
  heroImage: "/mep.jpeg", // Suggested image path

  // --- Key Course Features in Hero ---
  keyCourseFeatures: [
    { title: "Flexible Schedule", description: "Online or Physical Fastrack options" },
    { title: "Recognized Certification", description: "Internationally Industry recognized Certificate" },
    { title: "Expert Faculty", description: "Internationally certified experienced trainers " }
  ],

  // --- "Why This Course Stands Out" Section ---
  whyStandOutTitle: "Why This Course Stands Out",
  whyStandOutSubtitle: "Learn to design and model MEP and HVAC systems efficiently, ensuring safety, comfort, and sustainability in modern construction.",
  courseFeatures: [
    {
      icon: <Wrench className="w-10 h-10 text-cyan-400" />,
      title: "Hands on Practical Training",
      description: "Apply MEP and HVAC design techniques on real building projects effectively.",
      tag: "Real-World Projects",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Expert Guidance",
      description: "Learn from experienced engineers with extensive MEP and HVAC system expertise.",
      tag: "Industry Experts",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
      title: "Career Focused Curriculum",
      description: "Gain skills that increase employability and leadership opportunities in building services engineering.",
      tag: "Career Advancement",
    },
  ],

  // --- "Course Details" Section ---
  programOverview: "The Master Diploma in MEP and HVAC Systems program trains professionals to design, model, and optimize mechanical, electrical, plumbing, and HVAC systems. Participants gain hands-on experience with industry-standard software, apply best practices, and develop skills to deliver energy-efficient, safe, and high-performance building services solutions.",
  whatYouWillLearn: [
    { title: "Mechanical System Design", description: "Design HVAC systems with accurate load calculations, duct layouts, and equipment selection for optimal indoor comfort and energy performance." },
    { title: "Electrical System Modeling", description: "Develop electrical system layouts including lighting, power distribution, panel schedules, and load balancing." },
    { title: "Plumbing System Design", description: "Plan and design efficient water supply, drainage, and fire-fighting systems in line with building requirements." },
    { title: "Energy Optimization & Sustainability", description: "Apply strategies for energy-efficient HVAC design, green building practices, and sustainable system operation." },
    { title: "Software Mastery", description: "Gain practical expertise in softwares and other simulation tools used by industry professionals." },
    { title: "Coordination & Collaboration", description: "Integrate MEP models with architectural and structural disciplines, ensuring clash-free designs and seamless workflows." },
    { title: "System Analysis & Simulation", description: "Perform thermal load analysis, airflow simulation, and system performance checks to optimize building services." },
    { title: "Project Documentation & Compliance", description: "Prepare construction-ready drawings, specifications, and ensure compliance with international standards." },
    { title: "Real-World Project Applications", description: "Apply MEP and HVAC design knowledge to case studies and project simulations across residential, commercial, and infrastructure developments." }
  ],
  courseInfo: {
    duration: "3 Months (Fast Track) <br /> 5 Months (Weekday Batch)<br /> 6 Months (Weekend Batch)",
    nextBatch: "Every Month",
    deliveryMode: "Online or Physical",
    certification: "Internationally Industry Recognized Diploma Certificate"
  },
  assessmentMethods: ["Assignments"],
  prerequisites: [
    { icon: "Shapes", text: "No prior experience required" },
    { icon: "Code2", text: "Basic computer skills" },
    { icon: "Laptop", text: "Laptop" }
  ],

  // --- FAQs ---
 faqs: [
    {
      question: "Who is this course suitable for?",
      answer: "This MEP and HVAC Systems course is suitable for mechanical engineers, electrical engineers, civil engineers, project managers, construction professionals, under graduates and students who required to gain practical knowledge in building services design and coordination."
    },
    {
      question: "What are the system requirements?",
      answer: "A computer with at least 8GB RAM (16GB recommended), Intel i5 or i7 processor, dedicated graphics card with 2GB or more and Windows 10 or 11 operating system is recommended for smooth MEP and HVAC software performance."
    },
    {
      question: "What specific software will we learn?",
      answer: "You will learn latest MEP and HVAC design software for system modeling, analysis and project coordination."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the course you will receive a recognized certificate which strengthens your professional profile in building services engineering."
    },
    {
      question: "What if I miss a class?",
      answer: "Do not worry, all sessions are recorded and you will receive access to the recordings and learning materials so you can catch up at your own pace."
    },
    {
      question: "Is there career support after the course?",
      answer: "Yes, we provide career guidance, portfolio support and job placement assistance to help you pursue opportunities in MEP and HVAC design and management."
    }
  ],
  
  // --- Other text ---
  exploreCoursesSubtitle: "Acquire advanced MEP and HVAC design, modeling, and simulation skills essential for delivering modern, energy-efficient, and code-compliant building projects worldwide.",
  contactFormSubtitle: "Contact us for more information about the Master Diploma in MEP and HVAC Systems.",
};
