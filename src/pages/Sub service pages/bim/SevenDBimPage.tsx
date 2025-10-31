import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { sevenDBimPageData } from '../../../sub-service-data/bim/sevenDBimData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'bim' folder
import scopeImage from '/7D BIM – Facility Management.jpg'; 
import testimonialImage from '../../../assert/Sub Services/bim/BIM-testimonials-11.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (11).png';
import projectImg2 from '../../../assert/projects/pro (22).png';
import projectImg3 from '../../../assert/projects/pro (33).png';
import projectImg4 from '../../../assert/projects/pro (44).png';
import projectImg5 from '../../../assert/projects/pro (55).png';
import projectImg6 from '../../../assert/projects/pro (66).png';
import projectImg7 from '../../../assert/projects/pro (77).png';

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

const SevenDBimPage = () => {
  return (
    <SubServicePageLayout 
      pageData={sevenDBimPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SevenDBimPage;