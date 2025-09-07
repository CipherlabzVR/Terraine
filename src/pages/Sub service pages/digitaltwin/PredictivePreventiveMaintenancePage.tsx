import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { predictivePreventiveMaintenancePageData } from '../../../sub-service-data/digitaltwin/predictivePreventiveMaintenanceData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'digitaltwin' folder
import scopeImage from '../../../assert/Sub Services/digitaltwin/Digitaltwin-testimonials-18.jpg'; 
import testimonialImage from '../../../assert/Sub Services/digitaltwin/Digitaltwin-testimonials-13.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (77).png';
import projectImg2 from '../../../assert/projects/pro (83).png';
import projectImg3 from '../../../assert/projects/pro (87).png';
import projectImg4 from '../../../assert/projects/pro (93).png';
import projectImg5 from '../../../assert/projects/pro (97).png';
import projectImg6 from '../../../assert/projects/pro (102).png';
import projectImg7 from '../../../assert/projects/pro (107).png';

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

const PredictivePreventiveMaintenancePage = () => {
  return (
    <SubServicePageLayout 
      pageData={predictivePreventiveMaintenancePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default PredictivePreventiveMaintenancePage;