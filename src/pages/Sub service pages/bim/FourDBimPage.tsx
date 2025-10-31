import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { fourDBimPageData } from '../../../sub-service-data/bim/fourDBimData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'bim' folder
import scopeImage from '/4D BIM – Time (Scheduling).jpg'; 
import testimonialImage from '../../../assert/Sub Services/bim/BIM-testimonials-5.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (9).png';
import projectImg2 from '../../../assert/projects/pro (18).png';
import projectImg3 from '../../../assert/projects/pro (27).png';
import projectImg4 from '../../../assert/projects/pro (36).png';
import projectImg5 from '../../../assert/projects/pro (45).png';
import projectImg6 from '../../../assert/projects/pro (54).png';
import projectImg7 from '../../../assert/projects/pro (63).png';

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

const FourDBimPage = () => {
  return (
    <SubServicePageLayout 
      pageData={fourDBimPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default FourDBimPage;