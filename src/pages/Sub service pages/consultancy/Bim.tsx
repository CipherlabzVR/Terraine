import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { bimDigitalTwinPageData } from '../../../sub-service-data/consultancy/bimDigitalTwinData';

// --- IMPORTANT ---
// 1. You will need to add these specific image files to your assert folder.
// 2. The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

import scopeImage from '../../../assert/Sub Services/consultancy/smart.webp';
import testimonialImage from '../../../assert/Sub Services/consultancy/about6.jpg';

// Import the specific project images for this page's carousel.
import projectImg1 from '../../../assert/projects/pro21.png';
import projectImg2 from '../../../assert/projects/pro39.png';
import projectImg3 from '../../../assert/projects/pro43.png';
import projectImg4 from '../../../assert/projects/pro91.png';
import projectImg5 from '../../../assert/projects/pro35.png';
import projectImg6 from '../../../assert/projects/pro39.png';
import projectImg7 from '../../../assert/projects/pro57.png';

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