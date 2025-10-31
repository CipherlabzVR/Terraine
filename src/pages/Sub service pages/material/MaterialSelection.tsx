// Suggested Filename: MaterialSelection.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { materialSelectionPageData } from '../../../sub-service-data/material/materialSelectionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '/Material Selection & Specification.jpg'; 
import testimonialImage from '../../../assert/Sub Services/material/Material-testimonials-5.jpg';

// Importing the specific project images for material selection.
import projectImg1 from '../../../assert/projects/pro (75).png';
import projectImg2 from '../../../assert/projects/pro (67).png';
import projectImg3 from '../../../assert/projects/pro (28).png';
import projectImg4 from '../../../assert/projects/pro (59).png';
import projectImg5 from '../../../assert/projects/pro (11).png';
import projectImg6 from '../../../assert/projects/pro (52).png';
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

const MaterialSelectionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={materialSelectionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default MaterialSelectionPage;