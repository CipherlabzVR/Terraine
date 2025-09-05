import React from 'react';
import { Palette, Users, Briefcase } from 'lucide-react';

export const interiorDesignData = {
  // --- Hero Section ---
  heroTitle: "Master Diploma in Interior Design",
  heroSubtitle: "Master the art and science of interior design, creating functional, aesthetic, and innovative spaces.",
  heroImage: "/showcase-4.jpeg", // Suggested image path

  // --- Key Course Features in Hero ---
  keyCourseFeatures: [
    { title: "Flexible Schedule", description: "Online or Physical Fastrack options" },
    { title: "Recognized Certification", description: "Internationally Industry recognized Certificate" },
    { title: "Expert Faculty", description: "Internationally certified experienced trainers " }
  ],

  // --- "Why This Course Stands Out" Section ---
  whyStandOutTitle: "Why This Course Stands Out",
  whyStandOutSubtitle: "Learn to design inspiring interior spaces by combining creativity, functionality, and modern design principles.",
  courseFeatures: [
    {
      icon: <Palette className="w-10 h-10 text-cyan-400" />,
      title: "Hands on Practical Training",
      description: "Work on real interior design projects to gain practical, industry-ready experience.",
      tag: "Real-World Projects",
    },
    {
      icon: <Users className="w-10 h-10 text-cyan-400" />,
      title: "Expert Guidance",
      description: "Learn from experienced interior designers with extensive design and project expertise.",
      tag: "Industry Experts",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-cyan-400" />,
      title: "Career Focused Curriculum",
      description: "Acquire skills that enhance employability and open opportunities in the global interior design industry.",
      tag: "Global Opportunities",
    },
  ],

  // --- "Course Details" Section ---
  programOverview: "The Master Diploma in Interior Design equips learners with the knowledge and skills to conceptualize, plan, and execute innovative spaces. Participants gain practical experience in space planning, material selection, lighting, and design visualization using advanced software. The program balances design creativity with technical execution, preparing professionals for residential, commercial, and hospitality projects.",
  whatYouWillLearn: [
    { title: "Concept Development", description: "Develop creative design concepts that align with client needs, project goals, and brand identity." },
    { title: "Space Planning", description: "Optimize layouts for comfort, circulation, functionality, and aesthetics." },
    { title: "Material & Color Selection", description: "Select materials, finishes, and colors to achieve the desired style and durability." },
    { title: "Furniture & Fixture Design", description: "Design or specify furniture, fittings, and décor elements suited to the project vision." },
    { title: "3D Visualization & Design Software", description: "Create realistic 3D models, renderings, and walkthroughs using latest tools." },
    { title: "Lighting Design", description: "Plan effective artificial and natural lighting schemes to complement functionality and ambiance." },
    { title: "Project Documentation", description: "Prepare detailed drawings, construction documents, and specifications for project execution." },
    { title: "Sustainability & Green Interiors", description: "Apply eco-friendly materials and sustainable design practices." },
    { title: "Trend & Innovation Awareness", description: "Incorporate current design trends, smart technologies, and innovative interior solutions." },
    { title: "Portfolio Development", description: "Build a professional portfolio showcasing design projects to attract clients and employers." }
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
      answer: "This Interior Design course is suitable for interior designers, architects, civil engineers, draughtsman construction professionals, under graduates and students who required to develop skills in space planning, design concepts and visualization."
    },
    {
      question: "What are the system requirements?",
      answer: "A computer with at least 8GB RAM (16GB recommended), Intel i5 or i7 processor, dedicated graphics card with 2GB or more and Windows 10 or 11 operating system is recommended for smooth design software performance."
    },
    {
      question: "What specific software will we learn?",
      answer: "You will learn latest interior design software for 3D modeling, rendering, space planning and visualization."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion of the course you will receive a recognized certificate which enhances your professional portfolio in interior design."
    },
    {
      question: "What if I miss a class?",
      answer: "Do not worry, all sessions are recorded and you will receive access to the recordings and learning materials so you can review them at your convenience."
    },
    {
      question: "Is there career support after the course?",
      answer: "Yes, we provide career guidance, portfolio development support and job placement assistance to help you establish a successful career in interior design."
    }
  ],
  
  // --- Other text ---
  exploreCoursesSubtitle: "Gain advanced interior design and visualization skills that prepare you for a successful career in residential, commercial, and hospitality design projects worldwide.",
  contactFormSubtitle: "Contact us for more information about the Master Diploma in Interior Design.",
};
