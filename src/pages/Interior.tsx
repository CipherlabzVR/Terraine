import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout'; 
import { interiorDesignPageData } from '../service-data/interiorData'; 

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/interior1.jpg';
import aboutSecondaryImage from '../assert/about/interior1.webp';
import testimonialFeaturedImage from '../assert/about/interior3.jpg';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/about.mp4';
import testimonialsVideo from '/pack.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  interiorMainImage: aboutMainImage,
  interiorSecondaryImage: aboutSecondaryImage,
  interiorTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  interiorAboutVideo: aboutVideo,
  interiorTestimonialsVideo: testimonialsVideo,
};

const InteriorDesignPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={interiorDesignPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default InteriorDesignPage;