import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { architecturalPageData } from '../../../sub-service-data/drawings/architecturalData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the new 'drawings' folder
import scopeImage from '/Architectural Drawing.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/architectural-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (17).png';
import projectImg2 from '../../../assert/projects/pro (21).png';
import projectImg3 from '../../../assert/projects/pro (25).png';
import projectImg4 from '../../../assert/projects/pro (29).png';
import projectImg5 from '../../../assert/projects/pro (33).png';
import projectImg6 from '../../../assert/projects/pro (37).png';
import projectImg7 from '../../../assert/projects/pro (41).png';

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

const ArchitecturalDrawPage = () => {
  return (
    <SubServicePageLayout 
      pageData={architecturalPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ArchitecturalDrawPage;