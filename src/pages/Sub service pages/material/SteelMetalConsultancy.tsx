// Suggested Filename: SteelMetalConsultancy.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { steelMetalConsultancyPageData } from '../../../sub-service-data/material/steelMetalConsultancyData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage', 'testimonialImage', 'projectImg1'...'projectImg7')
// MUST match the keys in your steelMetalConsultancyPageData file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '../../../assert/Sub Services/construction/smart.webp';
import testimonialImage from '../../../assert/Sub Services/construction/about6.jpg';

// Project images (reuse or swap with steel-specific images if you have them)
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

const SteelMetalConsultancyPage = () => {
  return (
    <SubServicePageLayout
      pageData={steelMetalConsultancyPageData}
      imageAssets={imageAssets}
    />
  );
};

export default SteelMetalConsultancyPage;
