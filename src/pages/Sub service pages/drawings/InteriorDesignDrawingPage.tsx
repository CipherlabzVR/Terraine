import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { interiorDesignDrawingPageData } from '../../../sub-service-data/drawings/interiorDesignDrawingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'drawings' folder
import scopeImage from '../../../assert/Sub Services/drawings/public - hero/Drawings-testimonials-5.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/interior-design-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (25).png';
import projectImg2 from '../../../assert/projects/pro (36).png';
import projectImg3 from '../../../assert/projects/pro (47).png';
import projectImg4 from '../../../assert/projects/pro (58).png';
import projectImg5 from '../../../assert/projects/pro (69).png';
import projectImg6 from '../../../assert/projects/pro (93).png';
import projectImg7 from '../../../assert/projects/pro (65).png';

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

const InteriorDesignDrawingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={interiorDesignDrawingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default InteriorDesignDrawingPage;