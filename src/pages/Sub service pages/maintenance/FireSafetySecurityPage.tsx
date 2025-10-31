import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { fireSafetySecurityData } from '../../../sub-service-data/maintenance/fireSafetySecurityData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'maintenance' folder
import scopeImage from '/Fire Safety & Security Systems.jpg'; 
import testimonialImage from '../../../assert/Sub Services/maintenance/Maintenance-testimonials-10.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (77).png';
import projectImg2 from '../../../assert/projects/pro (44).png';
import projectImg3 from '../../../assert/projects/pro (21).png';
import projectImg4 from '../../../assert/projects/pro (26).png';
import projectImg5 from '../../../assert/projects/pro (11).png';
import projectImg6 from '../../../assert/projects/pro (54).png';
import projectImg7 from '../../../assert/projects/pro (120).png';

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

const FireSafetySecurityPage = () => {
  return (
    <SubServicePageLayout 
      pageData={fireSafetySecurityData} 
      imageAssets={imageAssets}
    />
  );
};

export default FireSafetySecurityPage;