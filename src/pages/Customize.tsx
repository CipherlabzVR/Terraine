import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { customizedTrainingData } from '../course-data/customData';

const Customize = () => {
  return (
    <CoursePageLayout courseData={customizedTrainingData} />
  );
};

export default Customize;