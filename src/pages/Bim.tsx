// src/pages/DigitalTwin.tsx

import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { bimData } from '../course-data/bimData';

const Bim = () => {
  return (
    <CoursePageLayout courseData={bimData} />
  );
};

export default Bim;