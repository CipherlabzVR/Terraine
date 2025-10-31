import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { steelConstructionPageData } from '../../../sub-service-data/construction/steelConstructionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '/Steel Construction.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/timber-construction-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (39).png';
import projectImg2 from '../../../assert/projects/pro (44).png';
import projectImg3 from '../../../assert/projects/pro (49).png';
import projectImg4 from '../../../assert/projects/pro (54).png';
import projectImg5 from '../../../assert/projects/pro (59).png';
import projectImg6 from '../../../assert/projects/pro (64).png';
import projectImg7 from '../../../assert/projects/pro (69).png';


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

const SteelConstructionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={steelConstructionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SteelConstructionPage;