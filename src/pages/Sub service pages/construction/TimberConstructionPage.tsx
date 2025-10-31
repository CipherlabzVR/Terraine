import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { timberConstructionPageData } from '../../../sub-service-data/construction/timberConstructionData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '/Timber Construction.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/timber-construction-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (51).png';
import projectImg2 from '../../../assert/projects/pro (56).png';
import projectImg3 from '../../../assert/projects/pro (61).png';
import projectImg4 from '../../../assert/projects/pro (66).png';
import projectImg5 from '../../../assert/projects/pro (71).png';
import projectImg6 from '../../../assert/projects/pro (76).png';
import projectImg7 from '../../../assert/projects/pro (81).png';


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

const TimberConstructionPage = () => {
  return (
    <SubServicePageLayout 
      pageData={timberConstructionPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default TimberConstructionPage;