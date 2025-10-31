import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { machinerySparePartsPageData } from '../../../sub-service-data/import-export/machinerySparePartsData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'import-export' folder
import scopeImage from '/Machinery & Spare Parts Supply.jpg'; 
import testimonialImage from '../../../assert/Sub Services/import-export/Import-export-testimonials-17.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro16.png';
import projectImg2 from '../../../assert/projects/pro45.png';
import projectImg3 from '../../../assert/projects/pro33.png';
import projectImg4 from '../../../assert/projects/pro61.png';
import projectImg5 from '../../../assert/projects/pro25.png';
import projectImg6 from '../../../assert/projects/pro86.png';
import projectImg7 from '../../../assert/projects/pro77.png';

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

const MachinerySparePartsPage = () => {
  return (
    <SubServicePageLayout 
      pageData={machinerySparePartsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default MachinerySparePartsPage;
