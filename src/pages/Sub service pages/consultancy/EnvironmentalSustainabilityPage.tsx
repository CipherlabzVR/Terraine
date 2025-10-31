import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { environmentalSustainabilityPageData } from '../../../sub-service-data/consultancy/environmentalSustainabilityData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope image as requested
import scopeImage from '/Environmental & Sustainability Consulting.jpg'; 
import testimonialImage from '../../../assert/Sub Services/consultancy/Consultancy-testimonials-19.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (60).png';
import projectImg2 from '../../../assert/projects/pro (65).png';
import projectImg3 from '../../../assert/projects/pro (70).png';
import projectImg4 from '../../../assert/projects/pro (75).png';
import projectImg5 from '../../../assert/projects/pro (80).png';
import projectImg6 from '../../../assert/projects/pro (85).png';
import projectImg7 from '../../../assert/projects/pro (90).png';


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

const EnvironmentalSustainabilityPage = () => {
  return (
    <SubServicePageLayout 
      pageData={environmentalSustainabilityPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default EnvironmentalSustainabilityPage;