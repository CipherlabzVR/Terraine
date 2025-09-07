// Suggested Filename: ProjectManagement.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { projectManagementPageData } from '../../../sub-service-data/interior/projectManagementData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'interior' folder
import scopeImage from '../../../assert/Sub Services/interior/Interior-testimonials-15.jpg'; 
import testimonialImage from '../../../assert/Sub Services/interior/Interior-testimonials-21.jpg';

// Importing the specific project images for project management.
import projectImg1 from '../../../assert/projects/pro (53).png';
import projectImg2 from '../../../assert/projects/pro (64).png';
import projectImg3 from '../../../assert/projects/pro (35).png';
import projectImg4 from '../../../assert/projects/pro (21).png';
import projectImg5 from '../../../assert/projects/pro (103).png';
import projectImg6 from '../../../assert/projects/pro (104).png';
import projectImg7 from '../../../assert/projects/pro (119).png';

const imageAssets = {
  scopeImage,
  testimonialImage,
  projectImg1,
  projectImg2,
  projectImg3,
  projectImg4,
  projectImg5,
  projectImg6,
  projectImg7,
};

const ProjectManagementPage = () => {
  return (
    <SubServicePageLayout 
      pageData={projectManagementPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ProjectManagementPage;