// Suggested Filename: ExhibitionEvent.tsx

import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { exhibitionEventPageData } from '../../../sub-service-data/interior/exhibitionEventData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'interior' folder
import scopeImage from '/Exhibition & Event Design.jpg'; 
import testimonialImage from '../../../assert/Sub Services/interior/Interior-testimonials-4.jpg';

// Importing the specific project images for exhibition & event design.
import projectImg1 from '../../../assert/projects/pro (52).png';
import projectImg2 from '../../../assert/projects/pro (55).png';
import projectImg3 from '../../../assert/projects/pro (39).png';
import projectImg4 from '../../../assert/projects/pro (78).png';
import projectImg5 from '../../../assert/projects/pro (15).png';
import projectImg6 from '../../../assert/projects/pro (14).png';
import projectImg7 from '../../../assert/projects/pro (115).png';

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

const ExhibitionEventPage = () => {
  return (
    <SubServicePageLayout 
      pageData={exhibitionEventPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ExhibitionEventPage;