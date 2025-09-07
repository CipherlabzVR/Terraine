// Suggested Filename: Renovation.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { renovationPageData } from '../../../sub-service-data/interior/renovationData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'interior' folder
import scopeImage from '../../../assert/Sub Services/interior/Interior-testimonials-16.jpg'; 
import testimonialImage from '../../../assert/Sub Services/interior/Interior-testimonials-22.jpg';

// Importing the specific project images for renovation services.
import projectImg1 from '../../../assert/projects/pro (85).png';
import projectImg2 from '../../../assert/projects/pro (64).png';
import projectImg3 from '../../../assert/projects/pro (44).png';
import projectImg4 from '../../../assert/projects/pro (11).png';
import projectImg5 from '../../../assert/projects/pro (33).png';
import projectImg6 from '../../../assert/projects/pro (99).png';
import projectImg7 from '../../../assert/projects/pro (111).png';

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

const RenovationPage = () => {
  return (
    <SubServicePageLayout 
      pageData={renovationPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default RenovationPage;