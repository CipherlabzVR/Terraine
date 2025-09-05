import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout'; 
import { materialConsultancyPageData } from '../service-data/materialConsultancyData'; 

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/material1.jpg';
import aboutSecondaryImage from '../assert/about/material2.jpg';
import testimonialFeaturedImage from '../assert/about/material3.jpg';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/about.mp4';
import testimonialsVideo from '/pack.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  materialMainImage: aboutMainImage,
  materialSecondaryImage: aboutSecondaryImage,
  materialTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  materialAboutVideo: aboutVideo,
  materialTestimonialsVideo: testimonialsVideo,
};

const MaterialConsultancyPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={materialConsultancyPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default MaterialConsultancyPage;
