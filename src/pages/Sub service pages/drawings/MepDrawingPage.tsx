import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { mepDrawingPageData } from '../../../sub-service-data/drawings/mepDrawingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'drawings' folder
import scopeImage from '../../../assert/Sub Services/drawings/public - hero/Drawings-testimonials-7.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/mep-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro1.png';
import projectImg2 from '../../../assert/projects/pro5.png';
import projectImg3 from '../../../assert/projects/pro53.png';
import projectImg4 from '../../../assert/projects/pro61.png';
import projectImg5 from '../../../assert/projects/pro45.png';
import projectImg6 from '../../../assert/projects/pro56.png';
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

const MepDrawingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={mepDrawingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default MepDrawingPage;