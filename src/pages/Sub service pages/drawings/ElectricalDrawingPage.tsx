import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { electricalDrawingPageData } from '../../../sub-service-data/drawings/electricalDrawingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'drawings' folder
import scopeImage from '../../../assert/Sub Services/drawings/public - hero/Drawings-testimonials-3.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/electrical-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (55).png';
import projectImg2 from '../../../assert/projects/pro (60).png';
import projectImg3 from '../../../assert/projects/pro (35).png';
import projectImg4 from '../../../assert/projects/pro (20).png';
import projectImg5 from '../../../assert/projects/pro (105).png';
import projectImg6 from '../../../assert/projects/pro (10).png';
import projectImg7 from '../../../assert/projects/pro (109).png';

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

const ElectricalDrawingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={electricalDrawingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ElectricalDrawingPage;