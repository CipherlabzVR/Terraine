import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { approvalDrawingPageData } from '../../../sub-service-data/drawings/approvalDrawingData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope image as requested
import scopeImage from '../../../assert/Sub Services/drawings/public - hero/Drawings-testimonials-1.jpg'; 
import testimonialImage from '../../../assert/Sub Services/drawings/approval-drawing-testimonial.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (100).png';
import projectImg2 from '../../../assert/projects/pro (105).png';
import projectImg3 from '../../../assert/projects/pro (110).png';
import projectImg4 from '../../../assert/projects/pro (115).png';
import projectImg5 from '../../../assert/projects/pro (120).png';
import projectImg6 from '../../../assert/projects/pro (118).png';
import projectImg7 from '../../../assert/projects/pro (119).png';

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

const ApprovalDrawingPage = () => {
  return (
    <SubServicePageLayout 
      pageData={approvalDrawingPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ApprovalDrawingPage;