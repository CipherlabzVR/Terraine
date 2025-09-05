import React from 'react';
import { DraftingCompass, Users, Briefcase } from 'lucide-react';

export const structuralDesignData = {
  // --- Hero Section ---
  heroTitle: "Master Diploma in Structural Design and Modelling",
  heroSubtitle: "Master structural analysis, design, and 3D modeling to create safe, efficient, and optimized structures.",
  heroImage: "/showcase-1.jpg", // Suggested image path

  // --- Key Course Features in Hero ---
 keyCourseFeatures: [
    { title: "Flexible Schedule", description: "Online or Physical Fastrack options" },
    { title: "Recognized Certification", description: "Internationally Industry recognized Certificate" },
    { title: "Expert Faculty", description: "Internationally certified experienced trainers " }
  ],

  // --- "Why This Course Stands Out" Section ---
  whyStandOutTitle: "Why This Course Stands Out",
  whyStandOutSubtitle: "Learn advanced structural design and modeling techniques to deliver safe, efficient, and innovative structures.",
  courseFeatures: [
    {
      icon: <DraftingCompass className="w-10 h-10 text-cyan-400" />,
      title: "Hands on Practical Training",
      description: "Apply structural design and modeling techniques on real engineering projects effectively.",
      tag: "Real-World Application",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Expert Guidance",
      description: "Learn from experienced structural engineers with extensive industry and project experience.",
      tag: "Industry Experts",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
      title: "Career Focused Curriculum",
      description: "Gain skills that enhance employability and leadership opportunities in structural engineering.",
      tag: "Career Advancement",
    },
  ],

  // --- "Course Details" Section ---
  programOverview: "The Master Diploma in Structural Design and Modelling program equips professionals to analyze, design, and model structural systems efficiently. Participants gain hands-on experience with industry-standard software, learn best practices in structural engineering, and develop skills to deliver safe, cost-effective, and high-performance structures across building and infrastructure projects.",
  whatYouWillLearn: [
    { title: "Structural Analysis", description: "Perform accurate analysis of beams, columns, slabs, frames, and complex structural systems using methods such as static, dynamic, and FEM-based approaches." },
    { title: "Design Optimization", description: "Create efficient and cost-effective structural designs that balance safety, serviceability, sustainability, and material efficiency in line with international standards." },
    { title: "3D Modeling Techniques", description: "Develop detailed 3D structural models for visualization, coordination, and integration with BIM workflows across architectural and MEP disciplines." },
    { title: "Software Mastery", description: "Gain hands-on experience with industry-standard tools for design, analysis, and detailing." },
    { title: "Load Calculations & Codes", description: "Learn to calculate dead, live, wind, and seismic loads, and apply international codes for global project compliance." },
    { title: "Structural Detailing", description: "Prepare precise reinforcement drawings, bar-bending schedules, and steel connection details to generate construction-ready documentation." },
    { title: "Collaboration & Coordination", description: "Integrate structural models with multidisciplinary teams through BIM, ensuring seamless project workflows, clash detection, and effective communication." },
    { title: "Project Simulation & Analysis", description: "Test structural performance under real-world loading conditions (earthquake, wind, foundation settlement), and work on full-scale project simulations from concept to execution." },
    { title: "Professional Practice & Portfolio Development", description: "Build a strong portfolio with real project case studies, technical reports, and structural simulations that enhance employability in global engineering industry." }
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
      answer: "This Structural Design and Modelling course is suitable for civil engineers, structural engineers, draughtsman, construction professionals, under graduates and students who required to gain expertise in analyzing and modeling structural systems."
    },
    {
      question: "What are the system requirements?",
      answer: "A computer with at least 8GB RAM (16GB recommended), Intel i5 or i7 processor, dedicated graphics card with 2GB or more and Windows 10 or 11 operating system is recommended for smooth structural design performance."
    },
    {
      question: "What specific software will we learn?",
      answer: "You will learn latest structural design and modeling software applied for analysis, detailing and project documentation."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the course you will receive a recognized certificate which enhances your professional engineering portfolio."
    },
    {
      question: "What if I miss a class?",
      answer: "Do not worry, all sessions are recorded and you will receive access to the recordings and course materials so you can review them at your convenience."
    },
    {
      question: "Is there career support after the course?",
      answer: "Yes, we provide career guidance, project portfolio support and job placement assistance to help you pursue opportunities in structural engineering and design."
    }
  ],
  
  // --- Other text ---
  exploreCoursesSubtitle: "Advance your career with globally recognized skills in structural design, BIM modeling, and project simulation, preparing you for leadership roles in engineering and construction.",
  contactFormSubtitle: "Contact us for more information about the Master Diploma in Structural Design and Modelling.",
};