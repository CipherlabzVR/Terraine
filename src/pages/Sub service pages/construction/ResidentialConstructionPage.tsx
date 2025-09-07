import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
// --- CORRECTED PATH ---
// This path now correctly navigates from the 'pages' folder to the 'sub-service-data' folder.
import { residentialConstructionPageData } from '../../../sub-service-data/construction/residentialConstructionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '../../../assert/Sub Services/construction/Construction-testimonials-21.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/residential-construction-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (37).png';
import projectImg2 from '../../../assert/projects/pro (42).png';
import projectImg3 from '../../../assert/projects/pro (47).png';
import projectImg4 from '../../../assert/projects/pro (52).png';
import projectImg5 from '../../../assert/projects/pro (57).png';
import projectImg6 from '../../../assert/projects/pro (62).png';
import projectImg7 from '../../../assert/projects/pro (67).png';


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

const ResidentialConstructionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={residentialConstructionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ResidentialConstructionPage;
