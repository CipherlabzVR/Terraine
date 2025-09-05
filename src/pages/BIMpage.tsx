import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout'; 
import { bimPageData } from '../service-data/bimData'; 

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/bim1.jpg';
import aboutSecondaryImage from '../assert/about/bim2.webp';
import testimonialFeaturedImage from '../assert/about/bim3.jpg';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/about.mp4';
import testimonialsVideo from '/hero.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  bimMainImage: aboutMainImage,
  bimSecondaryImage: aboutSecondaryImage,
  bimTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  bimAboutVideo: aboutVideo,
  bimTestimonialsVideo: testimonialsVideo,
};

const BimPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={bimPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default BimPage;