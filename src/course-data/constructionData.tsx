import React from 'react';
import { ClipboardCheck, Users, Briefcase } from 'lucide-react';

export const constructionPmData = {
  // --- Hero Section ---
  heroTitle: "Master Diploma in Construction Project Management",
  heroSubtitle: "Master planning, execution, and control of construction projects to deliver on time, budget, and quality.",
  heroImage: "/construction-management.jpg", // Suggested image path

  // --- Key Course Features in Hero ---
  keyCourseFeatures: [
    { title: "Flexible Schedule", description: "Online or Physical Fastrack options" },
    { title: "Recognized Certification", description: "Internationally Industry recognized Certificate" },
    { title: "Expert Faculty", description: "Internationally certified experienced trainers " }
  ],

  // --- "Why This Course Stands Out" Section ---
  whyStandOutTitle: "Why This Course Stands Out",
  whyStandOutSubtitle: "Learn to efficiently plan, execute, and control construction projects, enhancing productivity, quality, and successful completion.",
  courseFeatures: [
    {
      icon: <ClipboardCheck className="w-10 h-10 text-cyan-400" />,
      title: "Hands on Practical Training",
      description: "Apply project management techniques with latest softwares on real construction scenarios for industry-ready experience.",
      tag: "Industry-Ready Experience",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Expert Guidance",
      description: "Learn from PMP Certified experienced project managers with proven success in large scale projects.",
      tag: "PMP Certified Instructors",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
      title: "Career Focused Curriculum",
      description: "Gain skills that increase employability and leadership opportunities in the construction industry.",
      tag: "Leadership Skills",
    },
  ],

  // --- "Course Details" Section ---
  programOverview: "The Master Diploma in Construction Project Management program equips professionals with the skills to plan, execute, and monitor construction projects efficiently. Participants gain hands-on experience with scheduling, budgeting, risk management, and quality control, preparing them to lead projects successfully while optimizing resources, timelines, and team performance.",
  whatYouWillLearn: [
    { title: "Project Integration & Initiation", description: "Develop project charters, define scope, and align objectives with organizational goals." },
    { title: "Project Planning & Scheduling", description: "Create efficient project timelines, work breakdown structures (WBS), and milestones using modern tools." },
    { title: "Cost & Budget Management", description: "Apply cost estimation, budgeting, earned value management (EVM), and financial control techniques." },
    { title: "Risk Assessment & Mitigation", description: "Identify, analyze, and manage risks with proactive mitigation strategies." },
    { title: "Quality Control & Assurance", description: "Implement quality planning, control processes, and continuous improvement practices." },
    { title: "Resource & Team Management", description: "Lead teams effectively, allocate manpower, equipment, and materials to optimize efficiency." },
    { title: "Procurement & Contract Administration", description: "Understand contract management, bidding, claims, and procurement strategies in construction." },
    { title: "Construction Laws & Compliance", description: "Gain knowledge of construction regulations, safety standards, and legal frameworks." },
    { title: "Stakeholder Communication & Leadership", description: "Master reporting, negotiation, and coordination with clients, consultants, and authorities." },
    { title: "Project Monitoring & Reporting", description: "Use KPIs, dashboards, and analytics to track performance, ensure progress, and support decision-making." }
  ],
  courseInfo: {
    duration: "2 Months (Fast Track) <br /> 3 Months (Weekday Batch)<br /> 4 Months (Weekend Batch)",
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
      answer: "This Construction Project Management course is suitable for civil engineers, architects, project managers, quantity surveyors’, construction professionals, under graduates and students who required to improve project planning, execution and leadership skills."
    },
    {
      question: "What are the system requirements?",
      answer: "A computer with at least 8GB RAM (16GB recommended), Intel i5 or i7 processor, dedicated graphics card with 2GB or more and Windows 10 or 11 operating system is recommended for smooth project management applications."
    },
    {
      question: "What specific software will we learn?",
      answer: "You will learn latest construction project management software focused on scheduling, resource allocation and cost control."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the course you will receive a recognized certificate which adds strong value to your professional qualifications."
    },
    {
      question: "What if I miss a class?",
      answer: "Do not worry, all sessions are recorded and you will receive access to the recordings and learning resources so you can catch up anytime."
    },
    {
      question: "Is there career support after the course?",
      answer: "Yes, we provide career guidance, portfolio support and job placement assistance to help you advance into project management roles in the construction industry."
    }
  ],
  
  // --- Other text ---
  exploreCoursesSubtitle: "Acquire globally aligned project management skills that prepare you for PMP certification and empower you to lead successful, efficient, and high-quality construction projects.",
  contactFormSubtitle: "Contact us for more information about the Master Diploma in Construction Project Management.",
};
