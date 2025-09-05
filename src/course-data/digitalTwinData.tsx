import React from 'react';
import { Award, Users, Briefcase } from 'lucide-react';

export const digitalTwinData = {
  // --- Hero Section ---
  heroTitle: "Master Diploma in Digital Twin",
  heroSubtitle: "Unlock the future of engineering with our Master Diploma in Digital Twin. This program equips you with the skills to create, manage, and leverage dynamic virtual replicas, driving innovation and efficiency in any industry.",
  heroImage: "/twin.jpg",

  // --- Key Course Features in Hero ---
  keyCourseFeatures: [
    { title: "Flexible Schedule", description: "Online or Physical Fastrack options" },
    { title: "Recognized Certification", description: "Internationally Industry recognized Certificate" },
    { title: "Expert Faculty", description: "Internationally certified experienced trainers " }
  ],

  // --- "Why This Course Stands Out" Section ---
  whyStandOutTitle: "WHY THIS COURSE STANDS OUT",
  whyStandOutSubtitle: "Our Master Diploma offers a unique blend of theoretical knowledge and practical application, ensuring you graduate as a proficient and confident Digital Twin specialist.",
  courseFeatures: [
    {
      icon: <Award className="w-10 h-10 text-cyan-400" />,
      title: "Hands on Practical Training",
      description: "Create real-time digital twin simulations for engineering and infrastructure projects effectively",
      tag: "Globally Recognized",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Expert Guidance",
      description: "Learn from experienced professionals specializing in AI, IoT, and digital twin technologies",
      tag: "Industry Veterans",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
      title: "Career Focused Curriculum ",
      description: "Gain skills that increase employability and leadership opportunities in smart engineering industries",
      tag: "Real Projects",
    },
  ],

  // --- "Course Details" Section ---
  programOverview: "This comprehensive Master Diploma in Digital Twin provides in-depth training in the creation and deployment of dynamic virtual models. Designed for aspiring engineers and tech professionals, the curriculum covers everything from fundamental concepts to advanced applications in IoT, AI, and predictive analytics, preparing you for leadership roles in the smart industry revolution.",
  whatYouWillLearn: [
    { title: "Digital Twin Fundamentals", description: "Understand concepts, architecture, and applications in engineering and infrastructure." },
    { title: "IoT Integration", description: "Connect sensors and devices to capture real-time operational data." },
    { title: "Data Analytics & Visualization", description: "Analyze and visualize asset performance for informed decision-making." },
    { title: "Predictive & Preventive Maintenance", description: "Use digital twins to forecast issues and plan maintenance effectively." },
    { title: "Simulation & Scenario Planning", description: "Test operational scenarios virtually to optimize processes and performance." },
    { title: "Software Mastery", description: "Gain hands-on experience with leading digital twin platforms and modeling tools." },
    { title: "Performance Monitoring", description: "Track assets and systems in real time for efficiency and reliability." },
    { title: "Operational Optimization", description: "Implement insights from digital twin models to improve productivity and sustainability." }
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
      answer: "This Digital Twin course is suitable for civil engineers, architects, MEP engineers, quantity surveyors, draughtsman, construction professionals, under graduates and students who is willing enhance digital and latest construction industry skills."
    },
    {
      question: "What are the system requirements?",
      answer: "A computer with at least 8GB RAM (16GB recommended), Intel i5 or i7 processor, dedicated graphics card with 2GB or more and Windows 10 or 11 operating system is recommended for smooth digital twin applications."
    },
    {
      question: "What specific software will we learn?",
      answer: "You will learn latest software designed for digital twin modeling, data integration and performance monitoring."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the course you will receive a recognized certificate which can add strong value to your professional profile."
    },
    {
      question: "What if I miss a class?",
      answer: "Do not worry, all sessions are recorded and you will receive access to the recordings and learning resources so you can catch up at your convenience."
    },
    {
      question: "Is there career support after the course?",
      answer: "Yes, we provide career development guidance, project portfolio support and job placement assistance to help you explore new opportunities in the digital engineering field."
    }
  ],
  
  // --- Contact Form ---
  contactFormSubtitle: "Contact us for more information about the Master Diploma in Digital Twin",
};