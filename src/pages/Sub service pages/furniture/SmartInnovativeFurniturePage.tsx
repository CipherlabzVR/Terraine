import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { smartInnovativeFurniturePageData } from '../../../sub-service-data/furniture/smartInnovativeFurnitureData';

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-15.jpg'; 
import testimonialImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-17.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (15).png';
import projectImg2 from '../../../assert/projects/pro (30).png';
import projectImg3 from '../../../assert/projects/pro (45).png';
import projectImg4 from '../../../assert/projects/pro (60).png';
import projectImg5 from '../../../assert/projects/pro (75).png';
import projectImg6 from '../../../assert/projects/pro (90).png';
import projectImg7 from '../../../assert/projects/pro (105).png';

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

const SmartInnovativeFurnitureService = () => {
  return (
    <SubServicePageLayout 
      pageData={smartInnovativeFurniturePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SmartInnovativeFurnitureService;
