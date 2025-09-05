// Suggested Filename: materialColorData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const materialColorPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Material & Color</span> Consultation',
    tagline: 'Crafting cohesive palettes for stunning interior spaces.',
    description: 'Our material and color consultation services help you select the perfect finishes, textures, and hues to create a harmonious and visually appealing interior that reflects your personal style and functional needs.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'UserCheck', title: 'Expert Guidance', description: 'Professional advice to navigate endless choices and find the perfect fit.' },
      { icon: 'Palette', title: 'Cohesive Designs', description: 'Ensuring a harmonious flow of colors and materials throughout your space.' },
      { icon: 'Lightbulb', title: 'Informed Choices', description: 'Understanding the practical and aesthetic benefits of each option effectively.' },
      { icon: 'Package', title: 'Quality Sourcing', description: 'Connecting you with trusted suppliers for high-quality materials reliably.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'We guide you through every step of the material and color selection process, ensuring a perfect match for your design vision and lifestyle.',
    scopeItems: [
      { icon: 'Heart', title: 'Lifestyle Analysis', description: 'Assessing your daily routines and preferences to recommend practical and suitable materials.' },
      { icon: 'Search', title: 'Material Sourcing', description: 'Researching and sourcing a wide range of material options, from flooring to textiles.' },
      { icon: 'Palette', title: 'Color Palette Development', description: 'Creating custom color schemes that enhance mood, light, and spatial perception.' },
      { icon: 'Paintbrush', title: 'Finish Selection', description: 'Advising on the best finishes for walls, cabinetry, and fixtures for durability and style.' },
      { icon: 'Layers', title: 'Sample Presentation', description: 'Providing physical samples and mood boards for a tangible sense of the final look and feel.' },
      { icon: 'Users', title: 'Supplier Coordination', description: 'Liaising with vendors to ensure timely procurement and quality control of selected materials.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Assessment', description: 'Understand client preferences, functional needs, and design objectives to guide material and color choices effectively.' },
      { icon: 'Search', title: 'Research & Selection', description: 'Explore a wide range of materials, finishes, and color palettes for aesthetics, durability, and sustainability.' },
      { icon: 'Eye', title: 'Presentation & Visualization', description: 'Prepare sample boards, 3D mock-ups, and mood boards to help clients visualize final outcomes clearly.' },
      { icon: 'CheckCircle', title: 'Final Recommendation & Support', description: 'Provide expert guidance on material and color combinations, ensuring cohesive, practical, and visually appealing interiors.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Consultation Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Residential Color Scheme", imageKey: 'projectImg1' },
      { id: 2, title: "Commercial Material Board", imageKey: 'projectImg2' },
      { id: 3, "title": "Retail Finish Selection", "imageKey": "projectImg3" },
      { id: 4, title: "Hospitality Palette Design", imageKey: 'projectImg4' },
      { id: 5, title: "Office Texture Consultation", imageKey: 'projectImg5' },
      { id: 6, title: "Modern Home Finishes", imageKey: 'projectImg6' },
      { id: 7, title: "Cafe Interior Palette", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready to Find the Perfect Palette?',
    description: 'Elevate your space with expert material and color guidance. Contact us for a consultation today.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "The color and material consultation was the best decision we made. It turned a confusing process into an exciting one, and our home now feels perfectly cohesive and beautiful.", name: "Nimali Silva", role: "Homeowner", rating: 5, image: "https://randomuser.me/api/portraits/women/65.jpg" },
        { quote: "Their team suggested materials for our cafe that were not only stylish but also incredibly durable and easy to maintain. Their expertise was invaluable.", name: "Kasun Almeida", role: "Business Owner", rating: 5, image: "https://randomuser.me/api/portraits/men/68.jpg" }
    ],
    summary: { count: '250+', label: 'Consultations Completed' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Material & Color Consultation services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};