import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { operationalAnalyticsPageData } from '../../../sub-service-data/digitaltwin/operationalAnalyticsData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'digitaltwin' folder
import scopeImage from '/Operational Analytics & Decision-Making.jpg'; 
import testimonialImage from '../../../assert/Sub Services/digitaltwin/Digitaltwin-testimonials-14.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (76).png';
import projectImg2 from '../../../assert/projects/pro (81).png';
import projectImg3 from '../../../assert/projects/pro (86).png';
import projectImg4 from '../../../assert/projects/pro (91).png';
import projectImg5 from '../../../assert/projects/pro (96).png';
import projectImg6 from '../../../assert/projects/pro (101).png';
import projectImg7 from '../../../assert/projects/pro (106).png';

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

const OperationalAnalyticsPage = () => {
  return (
    <SubServicePageLayout 
      pageData={operationalAnalyticsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default OperationalAnalyticsPage;