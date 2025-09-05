import React from 'react';
import SubServicePageLayout from '../../SubServicePageLayout';
import { costValueEngineeringPageData } from '../../../sub-service-data/consultancy/costValueData';

// Import the other specific images for this page.
import scopeImage from '../../../assert/Sub Services/consultancy/cost.jpg';
import testimonialImage from '../../../assert/Sub Services/consultancy/about6.jpg';

// Manually import the specific project photos you want to display.
import projectImg1 from '../../../assert/projects/pro1.png';
import projectImg2 from '../../../assert/projects/pro9.png';
import projectImg3 from '../../../assert/projects/pro13.png';
import projectImg4 from '../../../assert/projects/pro41.png';
import projectImg5 from '../../../assert/projects/pro25.png';
import projectImg6 from '../../../assert/projects/pro36.png';
import projectImg7 from '../../../assert/projects/pro17.png';

// Map the imported images to the keys that the layout expects.
const imageAssets = {
  scopeImage,
  testimonialImage,
  projectImg1: projectImg1,
  projectImg2: projectImg2,
  projectImg3: projectImg3,
  projectImg4: projectImg4,
  projectImg5: projectImg5,
  projectImg6: projectImg6,
  projectImg7: projectImg7,
};

const CostValueEngineeringPage: React.FC = () => {
  return (
    <SubServicePageLayout 
      pageData={costValueEngineeringPageData} 
      imageAssets={imageAssets}
    />
  );
};

export default CostValueEngineeringPage;