import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { constructionSupervisionPageData } from '../../../sub-service-data/consultancy/constructionSupervisionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope image as requested
import scopeImage from '/Construction Supervision & QAQC.jpg'; 
import testimonialImage from '../../../assert/Sub Services/consultancy/consultancy-testimonial-14.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (58).png';
import projectImg2 from '../../../assert/projects/pro (63).png';
import projectImg3 from '../../../assert/projects/pro (68).png';
import projectImg4 from '../../../assert/projects/pro (73).png';
import projectImg5 from '../../../assert/projects/pro (78).png';
import projectImg6 from '../../../assert/projects/pro (83).png';
import projectImg7 from '../../../assert/projects/pro (88).png';


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

const ConstructionSupervisionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={constructionSupervisionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ConstructionSupervisionPage;