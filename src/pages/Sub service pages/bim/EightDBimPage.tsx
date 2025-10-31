import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { eightDBimPageData } from '../../../sub-service-data/bim/eightDBimData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'bim' folder
import scopeImage from '/8D BIM – Safety & Risk Management.jpg'; 
import testimonialImage from '../../../assert/Sub Services/bim/BIM-testimonials-2.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (6).png';
import projectImg2 from '../../../assert/projects/pro (12).png';
import projectImg3 from '../../../assert/projects/pro (18).png';
import projectImg4 from '../../../assert/projects/pro (24).png';
import projectImg5 from '../../../assert/projects/pro (30).png';
import projectImg6 from '../../../assert/projects/pro (36).png';
import projectImg7 from '../../../assert/projects/pro (42).png';

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

const EightDBimPage = () => {
  return (
    <SubServicePageLayout 
      pageData={eightDBimPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default EightDBimPage;