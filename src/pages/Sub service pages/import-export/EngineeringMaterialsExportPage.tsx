import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { engineeringMaterialsExportPageData } from '../../../sub-service-data/import-export/engineeringMaterialsExportData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'import-export' folder
import scopeImage from '../../../assert/Sub Services/import-export/smart.webp'; 
import testimonialImage from '../../../assert/Sub Services/import-export/about6.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro1.png';
import projectImg2 from '../../../assert/projects/pro9.png';
import projectImg3 from '../../../assert/projects/pro13.png';
import projectImg4 from '../../../assert/projects/pro41.png';
import projectImg5 from '../../../assert/projects/pro25.png';
import projectImg6 from '../../../assert/projects/pro36.png';
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

const EngineeringMaterialsExportPage = () => {
  return (
    <SubServicePageLayout 
      pageData={engineeringMaterialsExportPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default EngineeringMaterialsExportPage;
