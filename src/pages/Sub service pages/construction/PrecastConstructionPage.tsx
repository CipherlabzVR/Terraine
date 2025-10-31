import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
// Correct the import path and filename if necessary
import { precastConstructionPageData } from '../../../sub-service-data/construction/precastConstructionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '/Precast Construction.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/precast-construction-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (36).png';
import projectImg2 from '../../../assert/projects/pro (41).png';
import projectImg3 from '../../../assert/projects/pro (46).png';
import projectImg4 from '../../../assert/projects/pro (51).png';
import projectImg5 from '../../../assert/projects/pro (56).png';
import projectImg6 from '../../../assert/projects/pro (61).png';
import projectImg7 from '../../../assert/projects/pro (66).png';

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

const PrecastConstructionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={precastConstructionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default PrecastConstructionPage;