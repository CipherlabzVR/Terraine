import React from 'react';
import GenericPageLayout from '../pages/GenericPageLayout'; 
import { importExportPageData } from '../service-data/importExportData'; 

// --- IMPORTANT ---
// 1. You will need to add the actual image and video files to your 'src/assert' folder.
// 2. Make sure the file paths below match the location of your new assets.

// Import images from your 'src/assert' folder.
import aboutMainImage from '../assert/about/import1.webp';
import aboutSecondaryImage from '../assert/about/import2.jpg';
import testimonialFeaturedImage from '../assert/about/import3.jpg';

// Import videos from your 'src/assert' folder.
import aboutVideo from '/twin.mp4';
import testimonialsVideo from '/site.mp4';


// Create maps for both images and videos to link the keys from the data file.
const imageAssets = {
  importExportMainImage: aboutMainImage,
  importExportSecondaryImage: aboutSecondaryImage,
  importExportTestimonialImage: testimonialFeaturedImage,
};

const videoAssets = {
  importExportAboutVideo: aboutVideo,
  importExportTestimonialsVideo: testimonialsVideo,
};

const ImportExportPage = () => {
  return (
    // Pass the data and asset maps to the layout component.
    <GenericPageLayout 
      pageData={importExportPageData} 
      imageAssets={imageAssets} 
      videoAssets={videoAssets}
    />
  );
};

export default ImportExportPage;
