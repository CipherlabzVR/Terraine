import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout'; 
import { furnitureDesignPageData } from '../service-data/furnitureDesignData'; 

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/furniture1.webp';
import aboutSecondaryImage from '../assert/about/furniture2.jpg';
import testimonialFeaturedImage from '../assert/about/furniture3.jpg';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/soft.mp4';
import testimonialsVideo from '/cons.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  furnitureMainImage: aboutMainImage,
  furnitureSecondaryImage: aboutSecondaryImage,
  furnitureTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  furnitureAboutVideo: aboutVideo,
  furnitureTestimonialsVideo: testimonialsVideo,
};

const FurnitureDesignPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={furnitureDesignPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default FurnitureDesignPage;
