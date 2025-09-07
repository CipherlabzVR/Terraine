// Suggested Filename: HospitalityInteriors.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { hospitalityInteriorsPageData } from '../../../sub-service-data/interior/hospitalityInteriorsData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'interior' folder
import scopeImage from '../../../assert/Sub Services/interior/Interior-testimonials-12.jpg'; 
import testimonialImage from '../../../assert/Sub Services/interior/Interior-testimonials-19.jpg';

// Importing the specific project images for hospitality interiors.
import projectImg1 from '../../../assert/projects/pro (55).png';
import projectImg2 from '../../../assert/projects/pro (64).png';
import projectImg3 from '../../../assert/projects/pro (31).png';
import projectImg4 from '../../../assert/projects/pro (20).png';
import projectImg5 from '../../../assert/projects/pro (15).png';
import projectImg6 from '../../../assert/projects/pro (10).png';
import projectImg7 from '../../../assert/projects/pro (19).png';

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

const HospitalityInteriorsPage = () => {
  return (
    <SubServicePageLayout 
      pageData={hospitalityInteriorsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default HospitalityInteriorsPage;