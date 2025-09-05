import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { aiForBimConstructionManagementPageData } from '../../../sub-service-data/ai-engineering/aiForBimConstructionManagementData';

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/ai-engineering/ai1.jpg';
import testimonialImage from '../../../assert/Sub Services/ai-engineering/ai2.jpg';

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

const AiForBimConstructionManagementPage = () => {
  return (
    <SubServicePageLayout
      pageData={aiForBimConstructionManagementPageData}
      imageAssets={imageAssets}
    />
  );
};

export default AiForBimConstructionManagementPage;
