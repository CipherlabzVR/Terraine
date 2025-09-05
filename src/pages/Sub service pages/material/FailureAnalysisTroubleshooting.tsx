// Suggested Filename: FailureAnalysisTroubleshooting.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { failureAnalysisTroubleshootingPageData } from '../../../sub-service-data/material/failureAnalysisTroubleshootingData';

// NOTE: Keys MUST match those used in failureAnalysisTroubleshootingPageData
// (scopeImage, testimonialImage, projectImg1..projectImg7)

// Reuse standard images or replace with failure-analysis-specific visuals when ready
import scopeImage from '../../../assert/Sub Services/construction/smart.webp';
import testimonialImage from '../../../assert/Sub Services/construction/about6.jpg';

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
  projectImg7
};

const FailureAnalysisTroubleshootingPage: React.FC = () => {
  return (
    <SubServicePageLayout
      pageData={failureAnalysisTroubleshootingPageData}
      imageAssets={imageAssets}
    />
  );
};

export default FailureAnalysisTroubleshootingPage;
