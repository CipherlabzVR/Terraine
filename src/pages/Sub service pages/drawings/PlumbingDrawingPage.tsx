import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { plumbingDrawingPageData } from '../../../sub-service-data/drawings/plumbingDrawingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'drawings' folder
import scopeImage from '../../../assert/Sub Services/drawings/public - hero/Drawings-testimonials-8.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/plumbing-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro18.png';
import projectImg2 from '../../../assert/projects/pro53.png';
import projectImg3 from '../../../assert/projects/pro9.png';
import projectImg4 from '../../../assert/projects/pro6.png';
import projectImg5 from '../../../assert/projects/pro45.png';
import projectImg6 from '../../../assert/projects/pro3.png';
import projectImg7 from '../../../assert/projects/pro12.png';

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

const PlumbingDrawingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={plumbingDrawingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default PlumbingDrawingPage;