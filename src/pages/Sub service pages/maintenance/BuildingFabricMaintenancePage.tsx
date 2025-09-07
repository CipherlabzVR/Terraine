import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { buildingFabricMaintenanceData } from '../../../sub-service-data/maintenance/buildingFabricMaintenanceData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'maintenance' folder
import scopeImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-18.jpg'; 
import testimonialImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-3.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (33).png';
import projectImg2 from '../../../assert/projects/pro (60).png';
import projectImg3 from '../../../assert/projects/pro (34).png';
import projectImg4 from '../../../assert/projects/pro (20).png';
import projectImg5 from '../../../assert/projects/pro (10).png';
import projectImg6 from '../../../assert/projects/pro (15).png';
import projectImg7 from '../../../assert/projects/pro (120).png';

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

const BuildingFabricMaintenancePage = () => {
  return (
    <SubServicePageLayout 
      pageData={buildingFabricMaintenanceData} 
      imageAssets={imageAssets}
    />
  );
};

export default BuildingFabricMaintenancePage;