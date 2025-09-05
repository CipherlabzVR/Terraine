import React from 'react';
import { Camera, Users, Briefcase } from 'lucide-react';

export const visualizationData = {
  // --- Hero Section ---
  heroTitle: "Master Diploma in 3D Visualization with VR",
  heroSubtitle: "Master the creation of realistic 3D models, immersive VR experiences, and visual presentations to enhance architectural and engineering projects.",
  heroImage: "/3d-visualization.jpeg", // Suggested image path, please replace if different

  // --- Key Course Features in Hero ---
  keyCourseFeatures: [
    { title: "Flexible Schedule", description: "Online or Physical Fastrack options" },
    { title: "Recognized Certification", description: "Internationally Industry recognized Certificate" },
    { title: "Expert Faculty", description: "Internationally certified experienced trainers " }
  ],

  // --- "Why This Course Stands Out" Section ---
  whyStandOutTitle: "Why This Course Stands Out",
  whyStandOutSubtitle: "Learn to create immersive 3D models and visualizations that improve design clarity and project impact.",
  courseFeatures: [
    {
      icon: <Camera className="w-10 h-10 text-cyan-400" />,
      title: "Hands on Practical Training",
      description: "Work on real-world 3D visualization and VR projects to gain industry-ready skills.",
      tag: "Industry-Ready Skills",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Expert Guidance",
      description: "Learn from experienced visualization specialists with expertise in architecture, engineering, and construction design.",
      tag: "Specialist Instructors",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
      title: "Career Focused Curriculum",
      description: "Gain skills that enhance employability and open global opportunities in AEC industries.",
      tag: "Global Opportunities",
    },
  ],

  // --- "Course Details" Section ---
  programOverview: "The Master Diploma in 3D Visualization program trains professionals to create realistic and detailed 3D models, renderings, and walkthroughs for engineering and construction projects. Participants gain hands-on experience with industry-standard software, improving design communication, project presentation, and stakeholder engagement across architectural, structural, and infrastructure projects.",
  whatYouWillLearn: [
    { title: "3D Modeling Techniques", description: "Build precise architectural, structural, and MEP models." },
    { title: "Rendering & Lighting", description: "Create photorealistic renderings with advanced lighting and material settings." },
    { title: "Walkthroughs & Animations", description: "Develop interactive walkthroughs and animated project presentations." },
    { title: "Virtual Reality Integration", description: "Design immersive VR experiences for real-time project visualization." },
    { title: "Visualization Software Mastery", description: "Gain expertise in leading 3D visualization and VR tools." },
    { title: "Design Communication", description: "Improve clarity and presentation of complex engineering and architectural designs." },
    { title: "Collaboration & BIM Integration", description: "Connect visualization outputs with BIM and project workflows." },
    { title: "Real-World Project Simulations", description: "Apply visualization and VR techniques to practical AEC projects." },
    { title: "Portfolio Development", description: "Build a professional portfolio showcasing your 3D visualization and VR expertise." }
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
      answer: "This AI in Engineering course is suitable for civil engineers, architects, MEP engineers, quantity surveyors, draughtsman, construction professionals, under graduates and students who required to apply artificial intelligence in design, planning and project execution."
    },
    {
      question: "What are the system requirements?",
      answer: "A computer with at least 8GB RAM (16GB recommended), Intel i5 or i7 processor, dedicated graphics card with 2GB or more and Windows 10 or 11 operating system is recommended for smooth AI based applications."
    },
    {
      question: "What specific software will we learn?",
      answer: "You will learn latest software enhanced with AI tools for automation, prediction and decision making."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the course you will receive a recognized certificate which highlights your expertise in AI applications for engineering."
    },
    {
      question: "What if I miss a class?",
      answer: "Do not worry, all sessions are recorded and you will receive access to the recordings and learning resources so you can review them anytime."
    },
    {
      question: "Is there career support after the course?",
      answer: "Yes, we provide career support, project portfolio guidance and job placement assistance to help you move into AI driven engineering roles."
    }
  ],
  
  // --- Other text ---
  exploreCoursesSubtitle: "Develop advanced 3D visualization with VR skills that enhance project communication and professional opportunities.",
  contactFormSubtitle: "Contact us for more information about the Master Diploma in 3D Visualization with VR.",
};
