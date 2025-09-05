import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { mepHvacData } from '../course-data/hvacData';

const HVAC = () => {
  return (
    <CoursePageLayout courseData={mepHvacData} />
  );
};

export default HVAC;