import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { smartProjectManagementPageData } from '../../../sub-service-data/consultancy/smartproject';

// --- IMPORTANT ---
// 1. Import the specific images for THIS page from your assert folder.
// 2. The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

import scopeImage from '../../../assert/Sub Services/consultancy/smart.webp';
import testimonialImage from '../../../assert/Sub Services/consultancy/about6.jpg';

// Assuming you have an easy way to import project images. 
// If not, you can import them individually like the others.
import projectImg1 from '../../../assert/Sub Services/consultancy/5.jpg';
import projectImg2 from '../../../assert/Sub Services/consultancy/6.jpg';
import projectImg3 from '../../../assert/Sub Services/consultancy/9.jpg';
import projectImg4 from '../../../assert/Sub Services/consultancy/19.png';
import projectImg5 from '../../../assert/Sub Services/consultancy/22.png';
import projectImg6 from '../../../assert/Sub Services/consultancy/23.png';



const imageAssets = {
  scopeImage,
  testimonialImage,
  projectImg1,
  projectImg2,
  projectImg3,
  projectImg4,
  projectImg5,
  projectImg6,
  
};

const SmartProjectManagementPage = () => {
  return (
    <SubServicePageLayout 
      pageData={smartProjectManagementPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SmartProjectManagementPage;