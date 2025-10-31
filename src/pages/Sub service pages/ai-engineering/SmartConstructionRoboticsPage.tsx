import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { smartConstructionRoboticsPageData } from '../../../sub-service-data/ai-engineering/smartConstructionRoboticsData';

// Standardized scope image as requested
import scopeImage from '/Smart Construction & Robotics.jpg';
import testimonialImage from '../../../assert/Sub Services/ai-engineering/AI-testimonials-14.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro91.png';
import projectImg2 from '../../../assert/projects/pro99.png';
import projectImg3 from '../../../assert/projects/pro (5).png';
import projectImg4 from '../../../assert/projects/pro (10).png';
import projectImg5 from '../../../assert/projects/pro (15).png';
import projectImg6 from '../../../assert/projects/pro (20).png';
import projectImg7 from '../../../assert/projects/pro (25).png';

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

const SmartConstructionRoboticsPage = () => {
  return (
    <SubServicePageLayout
      pageData={smartConstructionRoboticsPageData}
      imageAssets={imageAssets}
    />
  );
};

export default SmartConstructionRoboticsPage;
