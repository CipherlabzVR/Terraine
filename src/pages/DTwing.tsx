import React from 'react';
import GenericPageLayout from '@/pages/GenericPageLayout'; 
import { digitalTwinPageData } from '@/service-data/digitalTwinData'; 

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '@/assert/about/twin1.jpeg';
import aboutSecondaryImage from '@/assert/about/twin2.webp';
import testimonialFeaturedImage from '@/assert/about/twin3.jpg';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/about.mp4';
import testimonialsVideo from '/site.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  digitalTwinMainImage: aboutMainImage,
  digitalTwinSecondaryImage: aboutSecondaryImage,
  digitalTwinTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  digitalTwinAboutVideo: aboutVideo,
  digitalTwinTestimonialsVideo: testimonialsVideo,
};

const DigitalTwinPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={digitalTwinPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default DigitalTwinPage;