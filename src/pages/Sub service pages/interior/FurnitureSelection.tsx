// Suggested Filename: FurnitureSelection.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { furnitureSelectionPageData } from '../../../sub-service-data/interior/furnitureSelectionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'interior' folder
import scopeImage from '../../../assert/Sub Services/interior/Interior-testimonials-9.jpg'; 
import testimonialImage from '../../../assert/Sub Services/interior/Interior-testimonials-10.jpg';

// Importing the specific project images for furniture selection services.
import projectImg1 from '../../../assert/projects/pro (35).png';
import projectImg2 from '../../../assert/projects/pro (45).png';
import projectImg3 from '../../../assert/projects/pro (55).png';
import projectImg4 from '../../../assert/projects/pro (65).png';
import projectImg5 from '../../../assert/projects/pro (75).png';
import projectImg6 from '../../../assert/projects/pro (85).png';
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
  projectImg7,
};

const FurnitureSelectionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={furnitureSelectionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default FurnitureSelectionPage;