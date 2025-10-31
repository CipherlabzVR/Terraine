// Suggested Filename: MaterialColor.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { materialColorPageData } from '../../../sub-service-data/interior/materialColorData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'interior' folder
import scopeImage from '/Material & Color Consultancy.jpg'; 
import testimonialImage from '../../../assert/Sub Services/interior/Interior-testimonials-20.jpg';

// Importing the specific project images for material & color consultation.
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

const MaterialColorPage = () => {
  return (
    <SubServicePageLayout 
      pageData={materialColorPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default MaterialColorPage;