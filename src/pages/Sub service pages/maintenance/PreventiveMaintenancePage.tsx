import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { preventiveMaintenancePageData } from '../../../sub-service-data/maintenance/preventiveMaintenanceData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'maintenance' folder
import scopeImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-18.jpg'; 
import testimonialImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-16.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (79).png';
import projectImg2 from '../../../assert/projects/pro (67).png';
import projectImg3 from '../../../assert/projects/pro (21).png';
import projectImg4 from '../../../assert/projects/pro (28).png';
import projectImg5 from '../../../assert/projects/pro (16).png';
import projectImg6 from '../../../assert/projects/pro (120).png';
import projectImg7 from '../../../assert/projects/pro (115).png';

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

const PreventiveMaintenancePage = () => {
  return (
    <SubServicePageLayout 
      pageData={preventiveMaintenancePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default PreventiveMaintenancePage;