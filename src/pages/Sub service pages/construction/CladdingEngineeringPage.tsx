import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { claddingEngineeringPageData } from '../../../sub-service-data/construction/claddingEngineeringData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '../../../assert/Sub Services/construction/Construction-testimonials-11.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/Construction-testimonials-10.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (17).png';
import projectImg2 from '../../../assert/projects/pro (22).png';
import projectImg3 from '../../../assert/projects/pro (27).png';
import projectImg4 from '../../../assert/projects/pro (32).png';
import projectImg5 from '../../../assert/projects/pro (37).png';
import projectImg6 from '../../../assert/projects/pro (42).png';
import projectImg7 from '../../../assert/projects/pro (47).png';

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

const CladdingEngineeringPage = () => {
  return (
    <SubServicePageLayout 
      pageData={claddingEngineeringPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default CladdingEngineeringPage;