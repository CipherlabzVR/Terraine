import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout'; 
import { maintenancePageData } from '../service-data/maintenanceData'; 

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/maintenance1.png';
import aboutSecondaryImage from '../assert/about/maintenance2.avif';
import testimonialFeaturedImage from '../assert/about/maintenance3.webp';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/about.mp4';
import testimonialsVideo from '/pack.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  maintenanceMainImage: aboutMainImage,
  maintenanceSecondaryImage: aboutSecondaryImage,
  maintenanceTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  maintenanceAboutVideo: aboutVideo,
  maintenanceTestimonialsVideo: testimonialsVideo,
};

const MaintenancePage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={maintenancePageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default MaintenancePage;