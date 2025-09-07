import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { interiorFurnitureImportPageData } from '../../../sub-service-data/import-export/interiorFurnitureImportData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'import-export' folder
import scopeImage from '../../../assert/Sub Services/import-export/smart.webp'; 
import testimonialImage from '../../../assert/Sub Services/import-export/Import-export-testimonials-6.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (9).png';
import projectImg2 from '../../../assert/projects/pro (15).png';
import projectImg3 from '../../../assert/projects/pro (36).png';
import projectImg4 from '../../../assert/projects/pro (21).png';
import projectImg5 from '../../../assert/projects/pro (105).png';
import projectImg6 from '../../../assert/projects/pro (13).png';
import projectImg7 from '../../../assert/projects/pro (100).png';

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

const InteriorFurnitureImportPage = () => {
  return (
    <SubServicePageLayout 
      pageData={interiorFurnitureImportPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default InteriorFurnitureImportPage;
