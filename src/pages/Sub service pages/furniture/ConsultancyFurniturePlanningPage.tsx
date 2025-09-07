import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { consultancyFurniturePlanningPageData } from '../../../sub-service-data/furniture/consultancyFurniturePlanningData';

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-11.jpg'; 
import testimonialImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-9.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/8.jpg';
import projectImg2 from '../../../assert/projects/9.jpg';
import projectImg3 from '../../../assert/projects/10.jpg';
import projectImg4 from '../../../assert/projects/11.jpg';
import projectImg5 from '../../../assert/projects/12.jpg';
import projectImg6 from '../../../assert/projects/13.png';
import projectImg7 from '../../../assert/projects/14.png';

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

const ConsultancyFurniturePlanningService = () => {
  return (
    <SubServicePageLayout 
      pageData={consultancyFurniturePlanningPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ConsultancyFurniturePlanningService;
