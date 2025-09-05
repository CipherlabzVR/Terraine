import React from 'react';
import { Award, Users, Briefcase } from 'lucide-react';

export const bimData = {
  // --- Hero Section ---
  heroTitle: "Master Diploma in BIM (3D - 9D)",
  heroSubtitle: "Master digital project modeling and collaborative construction workflows with our hands-on expert Latest BIM program.",
  heroImage: "/bim.jpg", // Suggested image path, please replace if different

  // --- Key Course Features in Hero (Example, can be customized) ---
  keyCourseFeatures: [
    { title: "Flexible Schedule", description: "Online or Physical Fastrack options" },
    { title: "Recognized Certification", description: "Internationally Industry recognized Certificate" },
    { title: "Expert Faculty", description: "Internationally certified experienced trainers " }
  ],

  // --- "Why This Course Stands Out" Section ---
  whyStandOutTitle: "WHY THIS COURSE STANDS OUT",
  whyStandOutSubtitle: "Experience comprehensive BIM training combining concepts, practical skills, real projects, industry expertise, and future-ready knowledge.",
  courseFeatures: [
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
      title: "Hands on Practical Training",
      description: "Gain real world experience by working on live projects and industry relevant BIM workflows.",
      tag: "Real-World Projects",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Expert Guidance",
      description: "Learn directly from certified BIM professionals with extensive experience in global construction projects.",
      tag: "Industry Veterans",
    },
    {
      icon: <Award className="w-10 h-10 text-cyan-400" />,
      title: "Career Focused Curriculum",
      description: "Develop skills that enhance employability, professional growth, and opportunities in international AEC Industry.",
      tag: "Career-Ready Skills",
    },
  ],

  // --- "Course Details" Section ---
  programOverview: "The Master Diploma in BIM (3D – 9D) program provides comprehensive training in digital project modeling, collaborative workflows, and multi-dimensional building information management. Participants gain hands-on experience with real projects, learn industry best practices, and develop the skills needed to deliver efficient, accurate, and future-ready construction solutions.",
  whatYouWillLearn: [
    { title: "3D BIM Modeling", description: "Master architectural, structural, and MEP digital modeling for accurate designs." },
    { title: "Clash Detection & Coordination", description: "Identify and resolve design conflicts across disciplines effectively." },
    { title: "4D BIM Scheduling", description: "Integrate time management into project workflows for efficient construction planning." },
    { title: "5D BIM Cost Estimation", description: "Learn to perform accurate budget analysis and cost control." },
    { title: "6D BIM Sustainability Analysis", description: "Evaluate energy efficiency and eco-friendly building strategies." },
    { title: "7D BIM Facility Management", description: "Manage building lifecycle and operational efficiency using BIM tools." },
    { title: "Collaboration & Documentation", description: "Produce coordinated project documentation for seamless communication among teams." },
    { title: "8D BIM Safety & Risk Management", description: "Learn to apply BIM for proactive safety planning and effective risk mitigation." },
    { title: "9D BIM Lean Construction & Productivity", description: "Discover how to use BIM to streamline processes, minimize waste, and boost efficiency." },
    { title: "Advanced BIM Tools", description: "Gain hands-on experience with Latest BIM softwares." }
  ],
  courseInfo: {
    duration: "4 Months (Fast Track) <br /> 6 Months (Weekday Batch)<br /> 8 Months (Weekend Batch)",
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

  // --- FAQs (Example, please replace with actual BIM FAQs) ---
  faqs: [
    {
      question: "Who is this course suitable for?",
      answer: "This BIM course is ideal for civil engineers, architects, MEP engineers, quantity surveyors, draughtsman, construction professionals, under graduates and students who is willing enhance digital and latest construction industry skills."
    },
    {
      question: "What are the system requirements?",
      answer: "A computer with at least 8GB RAM (16GB recommended), Intel i5 or i7 processor, dedicated graphics card with 2GB or more and Windows 10 or 11 operating system is recommended for smooth construction software performance."
    },
    {
      question: "What specific software will we learn?",
      answer: "You will learn latest construction software for building information modeling, project coordination and digital workflow management."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the course you will receive a recognized certificate which can strengthen your professional portfolio."
    },
    {
      question: "What if I miss a class?",
      answer: "Do not worry, all sessions are recorded and you will receive access to the recordings and learning materials so you can catch up at your own pace."
    },
    {
      question: "Is there career support after the course?",
      answer: "Yes, we provide career guidance, portfolio development support and job placement assistance to help you advance in the construction and engineering industry."
    }
  ],
  
  // --- Text for other sections ---
  exploreCoursesSubtitle: "Gain essential BIM expertise that top employers seek for modern construction projects.",
  contactFormSubtitle: "Contact us for more information about the Master Diploma in Building Information Modeling.",
};