import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { remoteOperationsPageData } from '../../../sub-service-data/digitaltwin/remoteOperationsData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'digitaltwin' folder
import scopeImage from '/Remote Operations & Virtual Control Centers.jpg'; 
import testimonialImage from '../../../assert/Sub Services/digitaltwin/Digitaltwin-testimonials-16.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (79).png';
import projectImg2 from '../../../assert/projects/pro (84).png';
import projectImg3 from '../../../assert/projects/pro (89).png';
import projectImg4 from '../../../assert/projects/pro (94).png';
import projectImg5 from '../../../assert/projects/pro (99).png';
import projectImg6 from '../../../assert/projects/pro (104).png';
import projectImg7 from '../../../assert/projects/pro (109).png';

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

const RemoteOperationsPage = () => {
  return (
    <SubServicePageLayout 
      pageData={remoteOperationsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default RemoteOperationsPage;