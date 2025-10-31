// Suggested Filename: MaterialCostProcurement.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { materialCostProcurementPageData } from '../../../sub-service-data/material/materialCostProcurementData';

// NOTE: Keys MUST match those in materialCostProcurementPageData
// (scopeImage, testimonialImage, projectImg1..projectImg7)

// Reuse shared visuals or replace with procurement-specific images later
import scopeImage from '/Material Cost Analysis & Procurement.jpg';
import testimonialImage from '../../../assert/Sub Services/material/Material-testimonials-3.jpg';

import projectImg1 from '../../../assert/projects/pro (34).png';
import projectImg2 from '../../../assert/projects/pro (64).png';
import projectImg3 from '../../../assert/projects/pro (21).png';
import projectImg4 from '../../../assert/projects/pro (22).png';
import projectImg5 from '../../../assert/projects/pro (11).png';
import projectImg6 from '../../../assert/projects/pro (59).png';
import projectImg7 from '../../../assert/projects/pro (19).png';

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

const MaterialCostProcurementPage: React.FC = () => {
  return (
    <SubServicePageLayout
      pageData={materialCostProcurementPageData}
      imageAssets={imageAssets}
    />
  );
};

export default MaterialCostProcurementPage;
