// Suggested Filename: HealthcareInteriors.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { healthcareInteriorsPageData } from '../../../sub-service-data/interior/healthcareInteriorsData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'interior' folder
import scopeImage from '/Healthcare Interiors.jpg'; 
import testimonialImage from '../../../assert/Sub Services/interior/Interior-testimonials-14.jpg';

// Importing the specific project images for healthcare interiors.
import projectImg1 from '../../../assert/projects/pro (15).png';
import projectImg2 from '../../../assert/projects/pro (20).png';
import projectImg3 from '../../../assert/projects/pro (65).png';
import projectImg4 from '../../../assert/projects/pro (80).png';
import projectImg5 from '../../../assert/projects/pro (19).png';
import projectImg6 from '../../../assert/projects/pro (12).png';
import projectImg7 from '../../../assert/projects/pro (100).png';

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

const HealthcareInteriorsPage = () => {
  return (
    <SubServicePageLayout 
      pageData={healthcareInteriorsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default HealthcareInteriorsPage;