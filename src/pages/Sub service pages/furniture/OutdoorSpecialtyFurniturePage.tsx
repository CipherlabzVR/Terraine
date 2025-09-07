import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { outdoorSpecialtyFurniturePageData } from '../../../sub-service-data/furniture/outdoorSpecialtyFurnitureData';

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-7.jpg'; 
import testimonialImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-5.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (12).png';
import projectImg2 from '../../../assert/projects/pro (24).png';
import projectImg3 from '../../../assert/projects/pro (36).png';
import projectImg4 from '../../../assert/projects/pro (48).png';
import projectImg5 from '../../../assert/projects/pro (60).png';
import projectImg6 from '../../../assert/projects/pro (72).png';
import projectImg7 from '../../../assert/projects/pro (84).png';

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

const OutdoorSpecialtyFurnitureService = () => {
  return (
    <SubServicePageLayout 
      pageData={outdoorSpecialtyFurniturePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default OutdoorSpecialtyFurnitureService;
