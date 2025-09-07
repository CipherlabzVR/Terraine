import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout'; // Updated import path for layout
import { constructionPageData } from '../service-data/constructionData'; // Updated import path for data

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/construction1.webp';
import aboutSecondaryImage from '../assert/about/construction2.avif';
import testimonialFeaturedImage from '../assert/about/construction3.jpg';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/about.mp4';
import testimonialsVideo from '/sof.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  constructionMainImage: aboutMainImage,
  constructionSecondaryImage: aboutSecondaryImage,
  constructionTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  constructionAboutVideo: aboutVideo,
  constructionTestimonialsVideo: testimonialsVideo,
};

const ConstructionPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={constructionPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default ConstructionPage;
