import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { customFurnitureDesignPageData } from '../../../sub-service-data/furniture/customFurnitureDesignData';

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-6.jpg'; 
import testimonialImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-4.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (5).png';
import projectImg2 from '../../../assert/projects/pro (9).png';
import projectImg3 from '../../../assert/projects/pro (15).png';
import projectImg4 from '../../../assert/projects/pro (25).png';
import projectImg5 from '../../../assert/projects/pro (109).png';
import projectImg6 from '../../../assert/projects/pro (114).png';
import projectImg7 from '../../../assert/projects/pro (119).png';

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

const CustomFurnitureDesignService = () => {
  return (
    <SubServicePageLayout 
      pageData={customFurnitureDesignPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default CustomFurnitureDesignService;
