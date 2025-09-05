import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { interiorDesignData } from '../course-data/interiorData';

const interiorDesign = () => {
  return (
    <CoursePageLayout courseData={interiorDesignData} />
  );
};

export default interiorDesign;