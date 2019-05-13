import React from 'react';
import Course from '../Course';

const Courses = ({courses=[]}) => (
  courses.map(course => (
    <Course 
      course={course}
    />
  ))
);

export default Courses;