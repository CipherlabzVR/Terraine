// Suggested Filename: failureAnalysisTroubleshootingData.ts

import { PageData } from '../../pages/SubServicePageLayout';

export const failureAnalysisTroubleshootingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Failure Analysis</span> & Material Troubleshooting',
    tagline: 'Identifying and resolving material performance issues effectively',
    description:
      'Our failure analysis and material troubleshooting services diagnose defects, provide expert solutions, and ensure reliable, high quality, and long-lasting material performance for every construction project.',
    backgroundImage: '/con-hero.jpg',
    uspItems: [
      { icon: 'Search',           title: 'Root Cause Detection', description: 'Identifies material failures accurately consistently.' },
      { icon: 'Wrench',           title: 'Effective Solutions',  description: 'Provides corrective measures reliably.' },
      { icon: 'ShieldCheck',      title: 'Expert Evaluation',    description: 'Skilled analysis for project safety effectively.' },
      { icon: 'AlertTriangle',    title: 'Prevention Focused',   description: 'Avoids future material issues consistently.' }
    ]
  },

  scope: {
    title: 'Comprehensive Project Scope',
    description:
      'Our failure analysis services identify material defects, determine causes, and provide solutions to prevent recurrence effectively.',
    scopeItems: [
      {
        icon: 'Inspect',
        title: 'Material Inspection',
        description: 'Examine failed materials using visual and instrumental methods to identify defects accurately.'
      },
      {
        icon: 'GitBranch',
        title: 'Root Cause Analysis',
        description: 'Determine underlying causes of material failures to implement corrective measures reliably.'
      },
      {
        icon: 'FlaskConical',
        title: 'Testing and Verification',
        description: 'Conduct laboratory tests to confirm material performance and identify weaknesses effectively.'
      },
      {
        icon: 'ClipboardCheck',
        title: 'Corrective Recommendations',
        description: 'Provide solutions to prevent future failures and improve material selection and handling consistently.'
      },
      {
        icon: 'MessageSquare',
        title: 'Supplier Feedback',
        description: 'Communicate findings with suppliers to ensure quality control and prevent recurrence accurately.'
      },
      {
        icon: 'FileText',
        title: 'Documentation and Reporting',
        description: 'Maintain detailed reports of failures, tests, and corrective actions for project reference efficiently.'
      }
    ],
    imageKey: 'scopeImage'
  },

  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      {
        icon: 'ClipboardList',
        title: 'Inspection & Data Collection',
        description: 'Examine failed materials, structures, or components to identify defects, wear, or damage patterns.'
      },
      {
        icon: 'Beaker',
        title: 'Root Cause Analysis',
        description: 'Use laboratory tests, simulations, and engineering methods to determine the cause of material failure.'
      },
      {
        icon: 'Wrench',
        title: 'Corrective Recommendations',
        description: 'Provide solutions, material alternatives, or design adjustments to prevent future failures.'
      },
      {
        icon: 'CheckCircle',
        title: 'Reporting & Implementation Support',
        description: 'Prepare detailed analysis reports and guide clients on implementing corrective measures effectively.'
      }
    ],
    backgroundImage: '/blueprint-bg.png'
  },

  projects: {
    title: 'Featured Failure Analysis Projects',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: 'Concrete Spalling & Rebar Corrosion Study', imageKey: 'projectImg1' },
      { id: 2, title: 'Weld Failure in Structural Steel Members', imageKey: 'projectImg2' },
      { id: 3, title: 'Coating Delamination & Moisture Ingress', imageKey: 'projectImg3' },
      { id: 4, title: 'Anchor Bolt & Fastener Fatigue Analysis', imageKey: 'projectImg4' },
      { id: 5, title: 'Composite Panel Impact Damage Assessment', imageKey: 'projectImg5' },
      { id: 6, title: 'Masonry Cracking & Settlement Diagnosis', imageKey: 'projectImg6' },
      { id: 7, title: 'Waterproofing Membrane Failure Review', imageKey: 'projectImg7' }
    ]
  },

  cta: {
    title: 'Need Answers on a Material Failure?',
    description: 'Get fast, evidence-based diagnostics and corrective actions to keep your project safe and on track.'
  },

  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
      {
        quote:
          'They pinpointed a weld procedure issue in days and helped us implement a fix that prevented costly rework.',
        name: 'Nadeesha Perera',
        role: 'Construction Director',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/women/71.jpg'
      },
      {
        quote:
          'The report was thorough and actionable. Their recommendations eliminated recurring defects on site.',
        name: 'Kasun Ranatunga',
        role: 'QA/QC Lead',
        rating: 5,
        image: 'https://randomuser.me/api/portraits/men/71.jpg'
      }
    ],
    summary: { count: '180+', label: 'Failure Cases Resolved' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },

  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for Failure Analysis & Material Troubleshooting services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};
