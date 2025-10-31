import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { bimDigitalTwinPageData } from '../../../sub-service-data/consultancy/bimDigitalTwinData';

// --- IMPORTANT ---
// 1. You will need to add these specific image files to your assert folder.
// 2. The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

import scopeImage from '/BIM & Digital Twin Consultancy.jpg';
import testimonialImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-3.jpg';

// Import the specific project images for this page's carousel.
import projectImg1 from '../../../assert/projects/pro (57).png';
import projectImg2 from '../../../assert/projects/pro (62).png';
import projectImg3 from '../../../assert/projects/pro (67).png';
import projectImg4 from '../../../assert/projects/pro (72).png';
import projectImg5 from '../../../assert/projects/pro (77).png';
import projectImg6 from '../../../assert/projects/pro (82).png';
import projectImg7 from '../../../assert/projects/pro (87).png';


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

const BimDigitalTwinPage = () => {
  return (
    <SubServicePageLayout 
      pageData={bimDigitalTwinPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default BimDigitalTwinPage;