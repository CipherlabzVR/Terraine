import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { roadConstructionPageData } from '../../../sub-service-data/construction/roadConstructionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '../../../assert/Sub Services/construction/Construction-testimonials-22.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/Construction-testimonials-15.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (38).png';
import projectImg2 from '../../../assert/projects/pro (43).png';
import projectImg3 from '../../../assert/projects/pro (48).png';
import projectImg4 from '../../../assert/projects/pro (53).png';
import projectImg5 from '../../../assert/projects/pro (58).png';
import projectImg6 from '../../../assert/projects/pro (63).png';
import projectImg7 from '../../../assert/projects/pro (68).png';


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

const RoadConstructionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={roadConstructionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default RoadConstructionPage;