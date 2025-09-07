import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { interiorDesignPageData } from '../../../sub-service-data/consultancy/interiorDesignData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-8.jpg'; 
import testimonialImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-7.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (63).png';
import projectImg2 from '../../../assert/projects/pro (68).png';
import projectImg3 from '../../../assert/projects/pro (73).png';
import projectImg4 from '../../../assert/projects/pro (78).png';
import projectImg5 from '../../../assert/projects/pro (83).png';
import projectImg6 from '../../../assert/projects/pro (88).png';
import projectImg7 from '../../../assert/projects/pro (93).png';

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

const InteriorDesignService = () => {
  return (
    <SubServicePageLayout 
      pageData={interiorDesignPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default InteriorDesignService;