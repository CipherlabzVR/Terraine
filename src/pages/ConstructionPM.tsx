import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { constructionPmData } from '../course-data/constructionData';


const ConstructionPM = () => {
  return (
    <CoursePageLayout courseData={constructionPmData} />
  );
};

export default ConstructionPM;