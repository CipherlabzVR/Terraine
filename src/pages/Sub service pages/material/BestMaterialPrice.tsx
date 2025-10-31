// Suggested Filename: BestMaterialPrice.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { bestMaterialPricePageData } from '../../../sub-service-data/material/bestMaterialPriceData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '/Best Material Price.jpg'; 
import testimonialImage from '../../../assert/Sub Services/material/Material-testimonials-2.jpg';

// Importing the specific project images for material pricing services.
import projectImg1 from '../../../assert/projects/pro (94).png';
import projectImg2 from '../../../assert/projects/pro (74).png';
import projectImg3 from '../../../assert/projects/pro (55).png';
import projectImg4 from '../../../assert/projects/pro (49).png';
import projectImg5 from '../../../assert/projects/pro (11).png';
import projectImg6 from '../../../assert/projects/pro (54).png';
import projectImg7 from '../../../assert/projects/pro (110).png';

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

const BestMaterialPricePage = () => {
  return (
    <SubServicePageLayout 
      pageData={bestMaterialPricePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default BestMaterialPricePage;