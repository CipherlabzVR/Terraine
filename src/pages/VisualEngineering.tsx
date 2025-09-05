import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { visualizationData } from '../course-data/visualizationData';

const VisualEngineering = () => {
  return (
    <CoursePageLayout courseData={visualizationData} />
  );
};

export default VisualEngineering;