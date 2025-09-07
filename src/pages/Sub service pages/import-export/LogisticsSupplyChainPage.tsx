import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { logisticsSupplyChainPageData } from '../../../sub-service-data/import-export/logisticsSupplyChainData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'import-export' folder
import scopeImage from '../../../assert/Sub Services/import-export/smart.webp'; 
import testimonialImage from '../../../assert/Sub Services/import-export/Import-export-testimonials-3.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro6.png';
import projectImg2 from '../../../assert/projects/pro95.png';
import projectImg3 from '../../../assert/projects/pro93.png';
import projectImg4 from '../../../assert/projects/pro71.png';
import projectImg5 from '../../../assert/projects/pro65.png';
import projectImg6 from '../../../assert/projects/pro56.png';
import projectImg7 from '../../../assert/projects/pro47.png';

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

const LogisticsSupplyChainPage = () => {
  return (
    <SubServicePageLayout 
      pageData={logisticsSupplyChainPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default LogisticsSupplyChainPage;
