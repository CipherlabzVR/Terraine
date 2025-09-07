import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { predictiveAnalyticsForecastingPageData } from '../../../sub-service-data/ai-engineering/predictiveAnalyticsForecastingData';

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/ai-engineering/AI-testimonials-11.jpg';
import testimonialImage from '../../../assert/Sub Services/ai-engineering/AI-testimonials-13.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro100.png';
import projectImg2 from '../../../assert/projects/pro91.png';
import projectImg3 from '../../../assert/projects/pro43.png';
import projectImg4 from '../../../assert/projects/pro49.png';
import projectImg5 from '../../../assert/projects/pro55.png';
import projectImg6 from '../../../assert/projects/pro86.png';
import projectImg7 from '../../../assert/projects/pro12.png';

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

const PredictiveAnalyticsForecastingPage = () => {
  return (
    <SubServicePageLayout
      pageData={predictiveAnalyticsForecastingPageData}
      imageAssets={imageAssets}
    />
  );
};

export default PredictiveAnalyticsForecastingPage;
