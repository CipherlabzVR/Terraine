// Suggested Filename: InnovativeAdvancedMaterials.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { innovativeAdvancedMaterialsPageData } from '../../../sub-service-data/material/innovativeAdvancedMaterialsData';

// NOTE: Keys MUST match those used in innovativeAdvancedMaterialsPageData
// (scopeImage, testimonialImage, projectImg1..projectImg7)

// Reuse your shared visuals or swap in innovation-specific assets later
import scopeImage from '../../../assert/Sub Services/construction/smart.webp';
import testimonialImage from '../../../assert/Sub Services/material/Material-testimonials-4.jpg';

import projectImg1 from '../../../assert/projects/pro (99).png';
import projectImg2 from '../../../assert/projects/pro (45).png';
import projectImg3 from '../../../assert/projects/pro (55).png';
import projectImg4 from '../../../assert/projects/pro (11).png';
import projectImg5 from '../../../assert/projects/pro (14).png';
import projectImg6 from '../../../assert/projects/pro (33).png';
import projectImg7 from '../../../assert/projects/pro (29).png';

const imageAssets = {
  scopeImage,
  testimonialImage,
  projectImg1,
  projectImg2,
  projectImg3,
  projectImg4,
  projectImg5,
  projectImg6,
  projectImg7
};

const InnovativeAdvancedMaterialsPage: React.FC = () => {
  return (
    <SubServicePageLayout
      pageData={innovativeAdvancedMaterialsPageData}
      imageAssets={imageAssets}
    />
  );
};

export default InnovativeAdvancedMaterialsPage;
