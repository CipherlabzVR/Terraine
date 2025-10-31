import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { constructionMaterialsImportPageData } from '../../../sub-service-data/import-export/constructionMaterialsImportData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'import-export' folder
import scopeImage from '/Import of Construction Materials.jpg'; 
import testimonialImage from '../../../assert/Sub Services/import-export/Import-export-testimonials-2.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (46).png';
import projectImg2 from '../../../assert/projects/pro (55).png';
import projectImg3 from '../../../assert/projects/pro (33).png';
import projectImg4 from '../../../assert/projects/pro (12).png';
import projectImg5 from '../../../assert/projects/pro (36).png';
import projectImg6 from '../../../assert/projects/pro (69).png';
import projectImg7 from '../../../assert/projects/pro (111).png';

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

const ConstructionMaterialsImportPage = () => {
  return (
    <SubServicePageLayout 
      pageData={constructionMaterialsImportPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ConstructionMaterialsImportPage;
