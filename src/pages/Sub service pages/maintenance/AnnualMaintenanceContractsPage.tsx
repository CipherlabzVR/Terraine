import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { annualMaintenanceContractsPageData } from '../../../sub-service-data/maintenance/annualMaintenanceContractsData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'maintenance' folder
import scopeImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-9.jpg'; 
import testimonialImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-1.webp';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (95).png';
import projectImg2 from '../../../assert/projects/pro (55).png';
import projectImg3 from '../../../assert/projects/pro (42).png';
import projectImg4 from '../../../assert/projects/pro (36).png';
import projectImg5 from '../../../assert/projects/pro (25).png';
import projectImg6 from '../../../assert/projects/pro (35).png';
import projectImg7 from '../../../assert/projects/pro (101).png';

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

const AnnualMaintenanceContractsPage = () => {
  return (
    <SubServicePageLayout 
      pageData={annualMaintenanceContractsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default AnnualMaintenanceContractsPage;