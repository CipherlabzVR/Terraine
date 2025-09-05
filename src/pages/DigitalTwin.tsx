// src/pages/DigitalTwin.tsx

import React from 'react';
import CoursePageLayout from '../pages/CoursePageLayout';
import { digitalTwinData } from '../course-data/digitalTwinData';

const DigitalTwin = () => {
  return (
    <CoursePageLayout courseData={digitalTwinData} />
  );
};

export default DigitalTwin;