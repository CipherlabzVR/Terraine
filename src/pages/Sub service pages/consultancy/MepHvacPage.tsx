import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { mepHvacPageData } from '../../../sub-service-data/consultancy/mepHvacData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope image as requested
import scopeImage from '/MEP & HVAC System Design.jpg'; 
import testimonialImage from '../../../assert/Sub Services/consultancy/Consultancy-testimonials-28.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (66).png';
import projectImg2 from '../../../assert/projects/pro (71).png';
import projectImg3 from '../../../assert/projects/pro (76).png';
import projectImg4 from '../../../assert/projects/pro (81).png';
import projectImg5 from '../../../assert/projects/pro (86).png';
import projectImg6 from '../../../assert/projects/pro (91).png';
import projectImg7 from '../../../assert/projects/pro (96).png';

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

const MepHvacPage = () => {
  return (
    <SubServicePageLayout 
      pageData={mepHvacPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default MepHvacPage;