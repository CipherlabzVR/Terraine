// Suggested Filename: SustainableMaterial.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { sustainableMaterialPageData } from '../../../sub-service-data/material/sustainableMaterialData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '../../../assert/Sub Services/material/Material-testimonials-8.jpg'; 
import testimonialImage from '../../../assert/Sub Services/material/Material-testimonials-15.jpg';

// Importing the specific project images for sustainable materials.
import projectImg1 from '../../../assert/projects/pro19.png';
import projectImg2 from '../../../assert/projects/pro11.png';
import projectImg3 from '../../../assert/projects/pro33.png';
import projectImg4 from '../../../assert/projects/pro61.png';
import projectImg5 from '../../../assert/projects/pro15.png';
import projectImg6 from '../../../assert/projects/pro56.png';
import projectImg7 from '../../../assert/projects/pro97.png';

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

const SustainableMaterialPage = () => {
  return (
    <SubServicePageLayout 
      pageData={sustainableMaterialPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default SustainableMaterialPage;