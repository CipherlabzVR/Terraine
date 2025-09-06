import React from 'react';
import GenericPageLayout from '@/pages/GenericPageLayout';
import { engineeringDrawingsPageData } from '@/service-data/drawingData';

// --- IMPORTANT ---
// 1. Import the specific images and videos for this page.
// 2. Make sure the file paths below are correct for your project structure.

// Import images from your 'src/assert' folder.
import aboutMainImage from '@/assert/about/about2.jpg';
import aboutSecondaryImage from '@/assert/about/draw.jpg';
import testimonialFeaturedImage from '@/assert/about/draw2.webp';

// Import videos from your 'src' folder.
import aboutVideo from '/pro.mp4';
import testimonialsVideo from '/site.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  aboutMainImage: aboutMainImage,
  aboutSecondaryImage: aboutSecondaryImage,
  testimonialFeaturedImage: testimonialFeaturedImage,
};

const videoAssets = {
  aboutVideo: aboutVideo,
  testimonialsVideo: testimonialsVideo,
};

const EngineeringDrawingsPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={engineeringDrawingsPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default EngineeringDrawingsPage;