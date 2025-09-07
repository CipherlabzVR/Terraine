import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout';
import { consultancyServicesPageData } from '../service-data/consultancyData';

// 1. Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/about1.jpg';
import aboutSecondaryImage from '../assert/about/about2.jpg';
import testimonialFeaturedImage from '../assert/about/about6.jpg';

// 2. Import videos from your 'src' folder (update path as needed).
import aboutVideo from '/about.mp4';
import testimonialsVideo from '/bud.mp4';


// 3. Create maps for both images and videos.
const imageAssets = {
  aboutMainImage: aboutMainImage,
  aboutSecondaryImage: aboutSecondaryImage,
  testimonialFeaturedImage: testimonialFeaturedImage,
};

const videoAssets = {
  aboutVideo: aboutVideo,
  testimonialsVideo: testimonialsVideo,
};

const ConsultancyServicesPage = () => {
  return (
    // 4. Pass both assets maps to the layout component.
    <GenericPageLayout 
      pageData={consultancyServicesPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default ConsultancyServicesPage;