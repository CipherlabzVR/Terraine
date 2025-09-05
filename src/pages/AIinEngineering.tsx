import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { aiInData } from '../course-data/aiInData';

const AIinEngineering = () => {
  return (
    <CoursePageLayout courseData={aiInData} />
  );
};

export default AIinEngineering;