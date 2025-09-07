import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { materialConsultancyPageData } from '../../../sub-service-data/consultancy/materialConsultancyData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-9.jpg'; 
import testimonialImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-8.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (64).png';
import projectImg2 from '../../../assert/projects/pro (69).png';
import projectImg3 from '../../../assert/projects/pro (74).png';
import projectImg4 from '../../../assert/projects/pro (79).png';
import projectImg5 from '../../../assert/projects/pro (84).png';
import projectImg6 from '../../../assert/projects/pro (89).png';
import projectImg7 from '../../../assert/projects/pro (94).png';

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

const MaterialConsultancyService = () => {
  return (
    <SubServicePageLayout 
      pageData={materialConsultancyPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default MaterialConsultancyService;