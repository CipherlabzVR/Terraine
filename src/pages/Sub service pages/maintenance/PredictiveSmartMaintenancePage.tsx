import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { predictiveSmartMaintenanceData } from '../../../sub-service-data/maintenance/predictiveSmartMaintenanceData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'maintenance' folder
import scopeImage from '/Predictive & Smart Maintenance.jpg'; 
import testimonialImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-14.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (94).png';
import projectImg2 from '../../../assert/projects/pro (14).png';
import projectImg3 from '../../../assert/projects/pro (65).png';
import projectImg4 from '../../../assert/projects/pro (45).png';
import projectImg5 from '../../../assert/projects/pro (111).png';
import projectImg6 from '../../../assert/projects/pro (120).png';
import projectImg7 from '../../../assert/projects/pro (13).png';

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

const PredictiveSmartMaintenancePage = () => {
  return (
    <SubServicePageLayout 
      pageData={predictiveSmartMaintenanceData} 
      imageAssets={imageAssets}
    />
  );
};

export default PredictiveSmartMaintenancePage;