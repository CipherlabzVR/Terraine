// Suggested Filename: TurnkeySolutions.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { turnkeySolutionsPageData } from '../../../sub-service-data/interior/turnkeySolutionsData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'interior' folder
import scopeImage from '../../../assert/Sub Services/interior/Interior-testimonials-18.jpg'; 
import testimonialImage from '../../../assert/Sub Services/interior/Interior-testimonials-26.jpg';

// Importing the specific project images for turnkey solutions.
import projectImg1 from '../../../assert/projects/pro (65).png';
import projectImg2 from '../../../assert/projects/pro (60).png';
import projectImg3 from '../../../assert/projects/pro (55).png';
import projectImg4 from '../../../assert/projects/pro (45).png';
import projectImg5 from '../../../assert/projects/pro (35).png';
import projectImg6 from '../../../assert/projects/pro (10).png';
import projectImg7 from '../../../assert/projects/pro (15).png';

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

const TurnkeySolutionsPage = () => {
  return (
    <SubServicePageLayout 
      pageData={turnkeySolutionsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default TurnkeySolutionsPage;