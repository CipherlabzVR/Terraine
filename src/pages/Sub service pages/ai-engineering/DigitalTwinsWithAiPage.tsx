import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { digitalTwinsWithAiPageData } from '../../../sub-service-data/ai-engineering/digitalTwinsWithAiData';

// Standardized scope image as requested
import scopeImage from '/Digital Twins with AI.jpg';
import testimonialImage from '../../../assert/Sub Services/ai-engineering/AI-testimonials-10.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro18.png';
import projectImg2 from '../../../assert/projects/pro92.png';
import projectImg3 from '../../../assert/projects/pro63.png';
import projectImg4 from '../../../assert/projects/pro71.png';
import projectImg5 from '../../../assert/projects/pro85.png';
import projectImg6 from '../../../assert/projects/pro36.png';
import projectImg7 from '../../../assert/projects/pro47.png';

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

const DigitalTwinsWithAiPage = () => {
  return (
    <SubServicePageLayout
      pageData={digitalTwinsWithAiPageData}
      imageAssets={imageAssets}
    />
  );
};

export default DigitalTwinsWithAiPage;
