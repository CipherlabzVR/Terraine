import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { surveyingDigitalMappingPageData } from '../../../sub-service-data/consultancy/surveyingDigitalMappingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-15.jpg'; 
import testimonialImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-13.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (70).png';
import projectImg2 from '../../../assert/projects/pro (75).png';
import projectImg3 from '../../../assert/projects/pro (80).png';
import projectImg4 from '../../../assert/projects/pro (85).png';
import projectImg5 from '../../../assert/projects/pro (90).png';
import projectImg6 from '../../../assert/projects/pro (95).png';
import projectImg7 from '../../../assert/projects/pro (100).png';

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

const SurveyingDigitalMappingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={surveyingDigitalMappingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SurveyingDigitalMappingPage;