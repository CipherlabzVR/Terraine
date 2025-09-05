import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { structuralDesignData } from '../course-data/structuralData';

const Structural = () => {
  return (
    <CoursePageLayout courseData={structuralDesignData} />
  );
};

export default Structural;