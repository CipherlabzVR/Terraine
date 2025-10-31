import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { commercialInstitutionalFurniturePageData } from '../../../sub-service-data/furniture/commercialInstitutionalFurnitureData';

// Standardized scope image as requested
import scopeImage from '/Commercial & Institutional Furniture.jpg'; 
import testimonialImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-4.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/1.jpg';
import projectImg2 from '../../../assert/projects/2.jpg';
import projectImg3 from '../../../assert/projects/3.jpg';
import projectImg4 from '../../../assert/projects/4.jpg';
import projectImg5 from '../../../assert/projects/5.jpg';
import projectImg6 from '../../../assert/projects/6.jpg';
import projectImg7 from '../../../assert/projects/7.jpg';

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

const CommercialInstitutionalFurnitureService = () => {
  return (
    <SubServicePageLayout 
      pageData={commercialInstitutionalFurniturePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default CommercialInstitutionalFurnitureService;
