import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { smartCityDigitalTwinPageData } from '../../../sub-service-data/digitaltwin/smartCityDigitalTwinData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'digitaltwin' folder
import scopeImage from '/Smart City & Urban Digital Twin Services.jpg'; 
import testimonialImage from '../../../assert/Sub Services/digitaltwin/Digitaltwin-testimonials-20.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (80).png';
import projectImg2 from '../../../assert/projects/pro (85).png';
import projectImg3 from '../../../assert/projects/pro (90).png';
import projectImg4 from '../../../assert/projects/pro (95).png';
import projectImg5 from '../../../assert/projects/pro (100).png';
import projectImg6 from '../../../assert/projects/pro (105).png';
import projectImg7 from '../../../assert/projects/pro (110).png';

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

const SmartCityDigitalTwinPage = () => {
  return (
    <SubServicePageLayout 
      pageData={smartCityDigitalTwinPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SmartCityDigitalTwinPage;