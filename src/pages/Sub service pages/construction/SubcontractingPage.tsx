import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { subcontractingPageData } from '../../../sub-service-data/construction/subcontractingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '../../../assert/Sub Services/construction/steel-construction-testimonial.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/Construction-testimonials-10.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (50).png';
import projectImg2 from '../../../assert/projects/pro (55).png';
import projectImg3 from '../../../assert/projects/pro (60).png';
import projectImg4 from '../../../assert/projects/pro (65).png';
import projectImg5 from '../../../assert/projects/pro (70).png';
import projectImg6 from '../../../assert/projects/pro (75).png';
import projectImg7 from '../../../assert/projects/pro (80).png';


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

const SubcontractingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={subcontractingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SubcontractingPage;