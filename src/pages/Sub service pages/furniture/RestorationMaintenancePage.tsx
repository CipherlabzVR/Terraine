import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { restorationMaintenancePageData } from '../../../sub-service-data/furniture/restorationMaintenanceData';

// Standardized scope image as requested
import scopeImage from '/Restoration & Maintenance Services.jpg'; 
import testimonialImage from '../../../assert/Sub Services/furniture/Furniture-testimonials-9.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (11).png';
import projectImg2 from '../../../assert/projects/pro (22).png';
import projectImg3 from '../../../assert/projects/pro (33).png';
import projectImg4 from '../../../assert/projects/pro (44).png';
import projectImg5 from '../../../assert/projects/pro (55).png';
import projectImg6 from '../../../assert/projects/pro (66).png';
import projectImg7 from '../../../assert/projects/pro (77).png';

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

const RestorationMaintenanceService = () => {
  return (
    <SubServicePageLayout 
      pageData={restorationMaintenancePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default RestorationMaintenanceService;
