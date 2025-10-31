import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { facilityManagementServicesPageData } from '../../../sub-service-data/maintenance/facilityManagementServicesData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'maintenance' folder
import scopeImage from '/Facility Management Services.jpg'; 
import testimonialImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-4.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (74).png';
import projectImg2 from '../../../assert/projects/pro (64).png';
import projectImg3 from '../../../assert/projects/pro (25).png';
import projectImg4 from '../../../assert/projects/pro (29).png';
import projectImg5 from '../../../assert/projects/pro (11).png';
import projectImg6 from '../../../assert/projects/pro (55).png';
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

const FacilityManagementServicesPage = () => {
  return (
    <SubServicePageLayout 
      pageData={facilityManagementServicesPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default FacilityManagementServicesPage;