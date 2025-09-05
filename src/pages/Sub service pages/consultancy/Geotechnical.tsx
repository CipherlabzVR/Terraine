import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { geotechnicalSoilPageData } from '../../../sub-service-data/consultancy/geotechnicalSoilData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

import scopeImage from '../../../assert/Sub Services/consultancy/smart.webp';
import testimonialImage from '../../../assert/Sub Services/consultancy/about6.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro31.png';
import projectImg2 from '../../../assert/projects/pro59.png';
import projectImg3 from '../../../assert/projects/pro33.png';
import projectImg4 from '../../../assert/projects/pro61.png';
import projectImg5 from '../../../assert/projects/pro95.png';
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

const GeotechnicalSoilPage = () => {
  return (
    <SubServicePageLayout 
      pageData={geotechnicalSoilPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default GeotechnicalSoilPage;