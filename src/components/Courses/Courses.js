import React from 'react';
import Course from '../Course';

export default ({courses}) => (
  (courses.results.length === 0) 
    ?
    (<div> sorry there is no courses found</div>)
    :
    (
      courses.results.map(course => (
        <Course 
          course={course}
          key={courses.results.indexOf(course)}
        />
      ))
    )
);;