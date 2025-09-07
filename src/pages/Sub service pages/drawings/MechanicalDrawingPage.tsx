import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { mechanicalDrawingPageData } from '../../../sub-service-data/drawings/mechanicalDrawingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'drawings' folder
import scopeImage from '../../../assert/Sub Services/drawings/public - hero/Drawings-testimonials-6.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/mechanical-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro6.png';
import projectImg2 from '../../../assert/projects/pro96.png';
import projectImg3 from '../../../assert/projects/pro14.png';
import projectImg4 from '../../../assert/projects/pro61.png';
import projectImg5 from '../../../assert/projects/pro55.png';
import projectImg6 from '../../../assert/projects/pro86.png';
import projectImg7 from '../../../assert/projects/pro33.png';

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

const MechanicalDrawingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={mechanicalDrawingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default MechanicalDrawingPage;