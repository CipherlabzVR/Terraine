import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { realTimeAssetMonitoringPageData } from '../../../sub-service-data/digitaltwin/realTimeAssetMonitoringData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'digitaltwin' folder
import scopeImage from '../../../assert/Sub Services/digitaltwin/smart.webp'; 
import testimonialImage from '../../../assert/Sub Services/digitaltwin/about6.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro1.png';
import projectImg2 from '../../../assert/projects/pro9.png';
import projectImg3 from '../../../assert/projects/pro13.png';
import projectImg4 from '../../../assert/projects/pro41.png';
import projectImg5 from '../../../assert/projects/pro25.png';
import projectImg6 from '../../../assert/projects/pro36.png';
import projectImg7 from '../../../assert/projects/pro17.png';

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

const RealTimeAssetMonitoringPage = () => {
  return (
    <SubServicePageLayout 
      pageData={realTimeAssetMonitoringPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default RealTimeAssetMonitoringPage;