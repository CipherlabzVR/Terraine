import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { rawMaterialSourcingPageData } from '../../../sub-service-data/import-export/rawMaterialSourcingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'import-export' folder
import scopeImage from '../../../assert/Sub Services/import-export/Import-export-testimonials-3.jpg'; 
import testimonialImage from '../../../assert/Sub Services/import-export/Import-export-testimonials-18.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro21.png';
import projectImg2 from '../../../assert/projects/pro93.png';
import projectImg3 from '../../../assert/projects/pro11.png';
import projectImg4 from '../../../assert/projects/pro61.png';
import projectImg5 from '../../../assert/projects/pro85.png';
import projectImg6 from '../../../assert/projects/pro96.png';
import projectImg7 from '../../../assert/projects/pro17.png';

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

const RawMaterialSourcingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={rawMaterialSourcingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default RawMaterialSourcingPage;
