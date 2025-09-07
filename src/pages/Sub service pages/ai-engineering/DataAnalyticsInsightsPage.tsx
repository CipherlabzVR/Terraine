import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { dataAnalyticsInsightsPageData } from '../../../sub-service-data/ai-engineering/dataAnalyticsInsightsData';

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/ai-engineering/AI-testimonials-6.jpg';
import testimonialImage from '../../../assert/Sub Services/ai-engineering/AI-testimonials-9.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro19.png';
import projectImg2 from '../../../assert/projects/pro99.png';
import projectImg3 from '../../../assert/projects/pro43.png';
import projectImg4 from '../../../assert/projects/pro49.png';
import projectImg5 from '../../../assert/projects/pro55.png';
import projectImg6 from '../../../assert/projects/pro96.png';
import projectImg7 from '../../../assert/projects/pro7.png';

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

const DataAnalyticsInsightsPage = () => {
  return (
    <SubServicePageLayout
      pageData={dataAnalyticsInsightsPageData}
      imageAssets={imageAssets}
    />
  );
};

export default DataAnalyticsInsightsPage;
