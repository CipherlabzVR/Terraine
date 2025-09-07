import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { structuralDrawingPageData } from '../../../sub-service-data/drawings/structuralDrawingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'drawings' folder
import scopeImage from '../../../assert/Sub Services/drawings/public - hero/Drawings-testimonials-9.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/structural-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro18.png';
import projectImg2 from '../../../assert/projects/pro94.png';
import projectImg3 from '../../../assert/projects/pro99.png';
import projectImg4 from '../../../assert/projects/pro41.png';
import projectImg5 from '../../../assert/projects/pro36.png';
import projectImg6 from '../../../assert/projects/pro56.png';
import projectImg7 from '../../../assert/projects/pro16.png';

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

const StructuralDrawingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={structuralDrawingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default StructuralDrawingPage;