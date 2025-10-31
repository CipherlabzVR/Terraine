import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { smartProjectManagementPageData } from '../../../sub-service-data/consultancy/smartproject';

// --- IMPORTANT ---
// 1. Import the specific images for THIS page from your assert folder.
// 2. The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

import scopeImage from '/Smart Project Management.jpg';
import testimonialImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-1.jpg';

// Assuming you have an easy way to import project images. 
// If not, you can import them individually like the others.
import projectImg1 from '../../../assert/projects/pro (68).png';
import projectImg2 from '../../../assert/projects/pro (73).png';
import projectImg3 from '../../../assert/projects/pro (78).png';
import projectImg4 from '../../../assert/projects/pro (83).png';
import projectImg5 from '../../../assert/projects/pro (88).png';
import projectImg6 from '../../../assert/projects/pro (93).png';
import projectImg7 from '../../../assert/projects/pro (95).png';



const imageAssets = {
  scopeImage,
  testimonialImage,
  projectImg1,
  projectImg2,
  projectImg3,
  projectImg4,
  projectImg5,
  projectImg6,
  
};

const SmartProjectManagementPage = () => {
  return (
    <SubServicePageLayout 
      pageData={smartProjectManagementPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SmartProjectManagementPage;