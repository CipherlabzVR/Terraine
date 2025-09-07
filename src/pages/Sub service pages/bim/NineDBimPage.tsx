import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { nineDBimPageData } from '../../../sub-service-data/bim/nineDBimData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'bim' folder
import scopeImage from '../../../assert/Sub Services/bim/BIM-testimonials-6.jpg'; 
import testimonialImage from '../../../assert/Sub Services/bim/BIM-testimonials-8.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (10).png';
import projectImg2 from '../../../assert/projects/pro (20).png';
import projectImg3 from '../../../assert/projects/pro (30).png';
import projectImg4 from '../../../assert/projects/pro (40).png';
import projectImg5 from '../../../assert/projects/pro (50).png';
import projectImg6 from '../../../assert/projects/pro (60).png';
import projectImg7 from '../../../assert/projects/pro (70).png';

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

const NineDBimPage = () => {
  return (
    <SubServicePageLayout 
      pageData={nineDBimPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default NineDBimPage;