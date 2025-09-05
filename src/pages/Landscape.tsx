import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { landscapeArchitectureData } from '../course-data/landData';

const Landscape = () => {
  return (
    <CoursePageLayout courseData={landscapeArchitectureData} />
  );
};

export default Landscape;