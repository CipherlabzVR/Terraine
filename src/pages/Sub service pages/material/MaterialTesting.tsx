// Suggested Filename: MaterialTesting.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { materialTestingPageData } from '../../../sub-service-data/material/materialTestingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '../../../assert/Sub Services/material/Material-testimonials-18.jpg'; 
import testimonialImage from '../../../assert/Sub Services/material/Material-testimonials-19.jpg';

// Importing the specific project images for material testing.
import projectImg1 from '../../../assert/projects/pro15.png';
import projectImg2 from '../../../assert/projects/pro94.png';
import projectImg3 from '../../../assert/projects/pro73.png';
import projectImg4 from '../../../assert/projects/pro41.png';
import projectImg5 from '../../../assert/projects/pro23.png';
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

const MaterialTestingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={materialTestingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default MaterialTestingPage;