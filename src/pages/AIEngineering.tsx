import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout'; 
import { aiEngineeringPageData } from '../service-data/aiEngineeringData'; 

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/ai1.jpg';
import aboutSecondaryImage from '../assert/about/ai2.jpg';
import testimonialFeaturedImage from '../assert/about/ai3.jpg';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/pack.mp4';
import testimonialsVideo from '/hero.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  aiMainImage: aboutMainImage,
  aiSecondaryImage: aboutSecondaryImage,
  aiTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  aiAboutVideo: aboutVideo,
  aiTestimonialsVideo: testimonialsVideo,
};

const AiEngineeringPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={aiEngineeringPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default AiEngineeringPage;
