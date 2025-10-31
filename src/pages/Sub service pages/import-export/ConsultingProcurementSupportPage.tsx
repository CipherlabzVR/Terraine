import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { consultingProcurementSupportPageData } from '../../../sub-service-data/import-export/consultingProcurementSupportData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'import-export' folder
import scopeImage from '/Consulting & Procurement Support.jpg'; 
import testimonialImage from '../../../assert/Sub Services/import-export/Import-export-testimonials-11.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (45).png';
import projectImg2 from '../../../assert/projects/pro (55).png';
import projectImg3 from '../../../assert/projects/pro (65).png';
import projectImg4 from '../../../assert/projects/pro (75).png';
import projectImg5 from '../../../assert/projects/pro (85).png';
import projectImg6 from '../../../assert/projects/pro (95).png';
import projectImg7 from '../../../assert/projects/pro (105).png';

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

const ConsultingProcurementSupportPage = () => {
  return (
    <SubServicePageLayout 
      pageData={consultingProcurementSupportPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ConsultingProcurementSupportPage;
