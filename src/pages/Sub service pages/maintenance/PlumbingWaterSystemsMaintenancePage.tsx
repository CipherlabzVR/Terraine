import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { plumbingWaterSystemsMaintenancePageData } from '../../../sub-service-data/maintenance/plumbingWaterSystemsMaintenanceData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'maintenance' folder
import scopeImage from '/Plumbing & Water Systems Maintenance.jpg'; 
import testimonialImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-12.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (84).png';
import projectImg2 from '../../../assert/projects/pro (74).png';
import projectImg3 from '../../../assert/projects/pro (65).png';
import projectImg4 from '../../../assert/projects/pro (49).png';
import projectImg5 from '../../../assert/projects/pro (41).png';
import projectImg6 from '../../../assert/projects/pro (45).png';
import projectImg7 from '../../../assert/projects/pro (19).png';

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

const PlumbingWaterSystemsMaintenancePage = () => {
  return (
    <SubServicePageLayout 
      pageData={plumbingWaterSystemsMaintenancePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default PlumbingWaterSystemsMaintenancePage;