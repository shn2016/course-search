import React from 'react';

const Course = (course) => {
  const { image, title, level, summary, short_summary, projectQuantity } = course;
  return (
    <div className="course">
      <div className="image">
        <image ref={image}/>
      </div>
      <div className="course-content">
        <div className="course-header">
          <p>{title}</p>
          <p>{level}</p>
        </div>
        <div className="course-project-quantity">
          {`${projectQuantity} Projects`}
        </div>
        <div className="course-short-summary">
          {short_summary}
        </div>
        <div className="course-summary">
          {summary}
        </div>
      </div>
    </div>
  )
}

export default Course;