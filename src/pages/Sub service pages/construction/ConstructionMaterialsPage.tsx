import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { constructionMaterialsPageData } from '../../../sub-service-data/construction/constructionMaterialsData';

// --- IMPORTANT ---
// The keys used here (e.g., 'scopeImage') MUST match the keys in your data file.

// Standardized scope and testimonial images from the 'construction' folder
import scopeImage from '../../../assert/Sub Services/construction/Construction-testimonials-13.jpg'; 
import testimonialImage from '../../../assert/Sub Services/construction/Construction-testimonials-15.jpg';

// Importing the specific project images you requested.
import projectImg1 from '../../../assert/projects/pro (19).png';
import projectImg2 from '../../../assert/projects/pro (24).png';
import projectImg3 from '../../../assert/projects/pro (29).png';
import projectImg4 from '../../../assert/projects/pro (34).png';
import projectImg5 from '../../../assert/projects/pro (39).png';
import projectImg6 from '../../../assert/projects/pro (44).png';
import projectImg7 from '../../../assert/projects/pro (49).png';

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

const ConstructionMaterialsPage = () => {
  return (
    <SubServicePageLayout 
      pageData={constructionMaterialsPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default ConstructionMaterialsPage;