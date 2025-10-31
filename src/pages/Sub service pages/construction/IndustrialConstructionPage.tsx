import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { industrialConstructionPageData } from '../../../sub-service-data/construction/industrialConstructionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '/Industrial Construction.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/industrial-construction-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (23).png';
import projectImg2 from '../../../assert/projects/pro (28).png';
import projectImg3 from '../../../assert/projects/pro (33).png';
import projectImg4 from '../../../assert/projects/pro (38).png';
import projectImg5 from '../../../assert/projects/pro (43).png';
import projectImg6 from '../../../assert/projects/pro (48).png';
import projectImg7 from '../../../assert/projects/pro (53).png';

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

const IndustrialConstructionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={industrialConstructionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default IndustrialConstructionPage;