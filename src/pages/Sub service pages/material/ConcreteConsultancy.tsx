// Suggested Filename: ConcreteConsultancy.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { concreteConsultancyPageData } from '../../../sub-service-data/material/concreteConsultancyData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '/Concrete & Cementitious Material.jpg'; 
import testimonialImage from '../../../assert/Sub Services/material/Material-testimonials-1.jpg';

// Importing the specific project images for concrete consultancy.
import projectImg1 from '../../../assert/projects/pro (8).png';
import projectImg2 from '../../../assert/projects/pro (44).png';
import projectImg3 from '../../../assert/projects/pro (15).png';
import projectImg4 from '../../../assert/projects/pro (39).png';
import projectImg5 from '../../../assert/projects/pro (41).png';
import projectImg6 from '../../../assert/projects/pro (5).png';
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

const ConcreteConsultancyPage = () => {
  return (
    <SubServicePageLayout 
      pageData={concreteConsultancyPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ConcreteConsultancyPage;