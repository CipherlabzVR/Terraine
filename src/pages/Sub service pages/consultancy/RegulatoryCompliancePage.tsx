import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { regulatoryCompliancePageData } from '../../../sub-service-data/consultancy/regulatoryComplianceData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope image as requested
import scopeImage from '/Regulatory & Compliance Advisory.jpg'; 
import testimonialImage from '../../../assert/Sub Services/consultancy/Consultancy-testimonials-22.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (67).png';
import projectImg2 from '../../../assert/projects/pro (72).png';
import projectImg3 from '../../../assert/projects/pro (77).png';
import projectImg4 from '../../../assert/projects/pro (82).png';
import projectImg5 from '../../../assert/projects/pro (87).png';
import projectImg6 from '../../../assert/projects/pro (92).png';
import projectImg7 from '../../../assert/projects/pro (97).png';

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

const RegulatoryCompliancePage = () => {
  return (
    <SubServicePageLayout 
      pageData={regulatoryCompliancePageData} 
      imageAssets={imageAssets}
    />
  );
};

export default RegulatoryCompliancePage;