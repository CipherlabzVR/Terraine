import { PageData } from '../../pages/SubServicePageLayout';

export const approvalDrawingPageData: PageData = {
  hero: {
    serviceName: '<span class="text-cyan-400">Approval</span> Drawing',
    tagline: 'Precise drawings ensuring swift project approvals.',
    description: 'Our approval drawings provide accurate, detailed, and fully compliant plans, streamlining submission, reducing delays, and ensuring smooth regulatory approvals for every construction project.',
    backgroundImage: '/con-hero.jpg', // Standardized background image
    uspItems: [
      { icon: 'FileCheck2', title: 'Regulatory Compliance', description: 'Ensuring drawings meet all approval requirements accurately.' },
      { icon: 'Pen', title: 'Precise Detailing', description: 'Clear plans reducing approval delays effectively.' },
      { icon: 'Clock', title: 'Timely Submissions', description: 'Fast preparation supporting prompt project approvals.' },
      { icon: 'UserCheck', title: 'Expert Guidance', description: 'Professional support throughout the approval process consistently.' }
    ]
  },
  scope: {
    title: 'Comprehensive Project Scope',
    description: 'Our approval drawing services ensure all project plans meet regulatory standards and are ready for official submission.',
    scopeItems: [
      { icon: 'FileSearch', title: 'Regulatory Review', description: 'Check all drawings comply with local building codes standards and regulations accurately.' },
      { icon: 'DraftingCompass', title: 'Plan Preparation', description: 'Prepare detailed site plans layouts and documents required for approval effectively.' },
      { icon: 'Send', title: 'Submission Support', description: 'Assist in submitting drawings to relevant authorities and managing follow ups reliably.' },
      { icon: 'Replace', title: 'Correction Handling', description: 'Revise drawings based on feedback from authorities to ensure compliance consistently.' },
      { icon: 'FolderKanban', title: 'Documentation Management', description: 'Maintain organized records of all approved plans and correspondence effectively.' },
      { icon: 'History', title: 'Approval Tracking', description: 'Monitor application status and provide updates until final approvals are granted consistently.' }
    ],
    imageKey: 'scopeImage'
  },
  workingSteps: {
    superTitle: 'HOW IT WORKS',
    title: 'Our Easy Working Steps',
    steps: [
      { icon: 'ClipboardList', title: 'Requirement Gathering', description: 'Collect all project specifications, regulatory requirements, and client inputs to prepare compliant drawings accurately.' },
      { icon: 'PenTool', title: 'Preliminary Drafting', description: 'Create initial drawings based on collected data, ensuring alignment with local regulations and project objectives.' },
      { icon: 'FileSignature', title: 'Review & Modification', description: 'Collaborate with clients and authorities to refine drawings, addressing feedback and compliance issues effectively.' },
      { icon: 'CheckCircle', title: 'Submission & Approval', description: 'Submit finalized drawings to relevant authorities, track approval status, and ensure timely authorization for project commencement.' }
    ],
    backgroundImage: '/blueprint-bg.png'
  },
  projects: {
    title: 'Featured Approval Drawings',
    videoBackground: '/about.mp4',
    projectList: [
      { id: 1, title: "Municipal Building Permit Set", imageKey: 'projectImg1' },
      { id: 2, title: "Zoning Variance Application", imageKey: 'projectImg2' },
      { id: 3, "title": "Environmental Clearance Drawings", "imageKey": "projectImg3" },
      { id: 4, title: "Fire Department Approval Plans", imageKey: 'projectImg4' },
      { id: 5, title: "Commercial Site Plan Approval", imageKey: 'projectImg5' },
      { id: 6, title: "Historical Commission Review Set", imageKey: 'projectImg6' },
      { id: 7, title: "Utility Connection Drawings", imageKey: 'projectImg7' },
    ]
  },
  cta: {
    title: 'Ready for a Smooth Approval Process?',
    description: 'Get your project started without delays. Contact us for compliant, precise approval drawings that meet all regulatory standards.'
  },
  testimonials: {
    title: 'What Our Clients Say',
    testimonialList: [
        { quote: "Their team's knowledge of the regulatory landscape is unmatched. The approval drawings were perfect, and we got our permits much faster than anticipated.", name: "Sarah Williams", role: "Project Manager", rating: 5, image: "https://randomuser.me/api/portraits/women/10.jpg" },
        { quote: "The clarity and precision of the drawings made the submission process incredibly smooth. They handled all the revisions professionally and efficiently.", name: "Michael Thompson", role: "Senior Engineer", rating: 5, image: "https://randomuser.me/api/portraits/men/13.jpg" }
    ],
    summary: { count: '500+', label: 'Permits Secured' },
    featuredImageKey: 'testimonialImage',
    videoBackground: '/bud.mp4'
  },
  contact: {
    title: 'SEND AN INQUIRY',
    description: 'Contact us for more information about our Approval Drawing services.',
    phoneNumbers: ['+94 77 948 7100', '+94 71 433 7100'],
    emails: ['info@terrene.lk', 'contact@terrene.lk'],
    videoBackground: '/about.mp4'
  }
};