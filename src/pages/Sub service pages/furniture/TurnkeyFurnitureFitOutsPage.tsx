import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { turnkeyFurnitureFitOutsPageData } from '../../../sub-service-data/furniture/turnkeyFurnitureFitOutsData';

// Standardized scope image as requested
import scopeImage from '/Turnkey Interior & Furniture Fit-Outs.jpg'; 
import testimonialImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-1.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (9).png';
import projectImg2 from '../../../assert/projects/pro (18).png';
import projectImg3 from '../../../assert/projects/pro (27).png';
import projectImg4 from '../../../assert/projects/pro (37).png';
import projectImg5 from '../../../assert/projects/pro (74).png';
import projectImg6 from '../../../assert/projects/pro (47).png';
import projectImg7 from '../../../assert/projects/pro (96).png';

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

const TurnkeyFurnitureFitOutsService = () => {
  return (
    <SubServicePageLayout 
      pageData={turnkeyFurnitureFitOutsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default TurnkeyFurnitureFitOutsService;
