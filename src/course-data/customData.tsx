import React from 'react';
import { Wrench, Users, Briefcase } from 'lucide-react';

export const customizedTrainingData = {
  // --- Hero Section ---
  heroTitle: "Customized Professional Training",
  heroSubtitle: "We design industry-recognized training programs customized to meet the needs of individual learners, student groups, and company employees. Our expert team ensures that each program is aligned with your goals, skill gaps, and industry requirements.",
  heroImage: "/learn.jpg", // Suggested image path

  // --- Key Course Features in Hero ---
  keyCourseFeatures: [
    { title: "Flexible Schedule", description: "Online or Physical Fastrack options" },
    { title: "Recognized Certification", description: "Internationally Industry recognized Certificate" },
    { title: "Expert Faculty", description: "Internationally certified experienced trainers " }
  ],

  // --- "Why This Course Stands Out" Section ---
  whyStandOutTitle: "Why This Course Stands Out",
  whyStandOutSubtitle: "Whether you’re a student seeking career-focused learning, a professional aiming to upgrade skills, or an organization looking to upskill employees, our Customized Corporate Training adapts to you.",
  courseFeatures: [
    {
      icon: <Wrench className="w-10 h-10 text-cyan-400" />,
      title: "Hands on Practical Training",
      description: "Gain real-world experience by working on industry-relevant projects.",
      tag: "Real-World Application",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Expert Guidance",
      description: "Learn directly from seasoned professionals and industry experts.",
      tag: "Industry Veterans",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
      title: "Career-Focused Curriculum",
      description: "Acquire the right skills to boost employability and open global opportunities.",
      tag: "Career Advancement",
    },
  ],

  // --- "Course Details" Section ---
  programOverview: "Our Customized Corporate Training programs are designed to equip participants with practical skills, industry knowledge, and hands-on experience relevant to their specific field. Each program is carefully tailored to meet the learning needs of students, professionals, and company employees, ensuring real-world applicability and long-term career growth. Through a blend of theory, case studies, practical workshops, and project-based learning, participants gain the ability to address real industry challenges with confidence and innovation.",
  whatYouWillLearn: [
    { title: "Applied Skills & Knowledge", description: "Gain in-demand competencies directly relevant to your profession or industry." },
    { title: "Customized Content", description: "Training modules tailored to your organization’s or personal career goals." },
    { title: "Practical Application", description: "Work on live case studies, projects, and real-world scenarios." },
    { title: "Industry Best Practices", description: "Learn updated methods, tools, and technologies shaping your field." },
    { title: "Professional Development", description: "Strengthen problem-solving, teamwork, and leadership abilities." },
    { title: "Future-Ready Skills", description: "Stay competitive by mastering the latest trends and innovations in your sector." }
  ],
  courseInfo: {
    duration: "Customized to Fit Your Schedule",
    nextBatch: "Available On-Demand",
    deliveryMode: "Online, Physical, or Hybrid",
    certification: "Internationally Industry Recognized Certificate"
  },
  assessmentMethods: ["Assignments", "Final Project", "Presentations"],
  prerequisites: [
    { icon: "Shapes", text: "No prior experience required" },
    { icon: "Code2", text: "Basic computer skills" },
    { icon: "Laptop", text: "Laptop" }
  ],

  // --- FAQs ---
 faqs: [
    {
      question: "Who is this course suitable for?",
      answer: "This Customized Professional Training is suitable for professionals, engineers, architects and construction teams, under graduates and students who required tailored training to meet specific project, skill or organizational needs."
    },
    {
      question: "What are the system requirements?",
      answer: "A computer with at least 8GB RAM (16GB recommended), Intel i5 or i7 processor, dedicated graphics card with 2GB or more and Windows 10 or 11 operating system is recommended for smooth software performance during training."
    },
    {
      question: "What specific software will we learn?",
      answer: "You will learn latest construction and engineering software relevant to your customized training objectives and professional requirements."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the training you will receive a recognized certificate which highlights your specialized skills and expertise."
    },
    {
      question: "What if I miss a class?",
      answer: "Do not worry, all sessions are recorded and you will receive access to the recordings and learning materials so you can review them at your convenience."
    },
    {
      question: "Is there career support after the course?",
      answer: "Yes, we provide career guidance, skill development support and professional advice to help you apply your customized training in real world projects."
    }
  ],
  
  // --- Other text ---
  exploreCoursesSubtitle: "Equip your team or yourself with the precise skills needed to excel in today's competitive industry.",
  contactFormSubtitle: "Contact us for more information about the Customized Training Program.",
};
