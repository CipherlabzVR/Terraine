import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { hvacDrawingPageData } from '../../../sub-service-data/drawings/hvacDrawingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'drawings' folder
import scopeImage from '../../../assert/Sub Services/drawings/public - hero/Drawings-testimonials-4.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/hvac-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (5).png';
import projectImg2 from '../../../assert/projects/pro (40).png';
import projectImg3 from '../../../assert/projects/pro (55).png';
import projectImg4 from '../../../assert/projects/pro (10).png';
import projectImg5 from '../../../assert/projects/pro (65).png';
import projectImg6 from '../../../assert/projects/pro (73).png';
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

const HvacDrawingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={hvacDrawingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default HvacDrawingPage;