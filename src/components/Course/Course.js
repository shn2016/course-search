import React from 'react';
import './Course.scss';
import beginner from '../../assets/beginner.svg';
import intermediate from '../../assets/intermediate.svg';
import advanced from '../../assets/advanced.svg';

function getLevelImg(level) {
  switch(level) {
    case '初级': return beginner;
    case '中级': return intermediate;
    case '高级': return advanced;
    default: return null;
  }
}

const Course = ({course}) => {
  const { image, title, level, summary, short_summary, projectQuantity } = course;
  const levelImg = getLevelImg(level)
  return (
    <div className="course">
      <div className="course-image-wrapper">
        <img 
          src={image}
          alt={title}
        />
      </div>
      <div className="course-content-wrapper">
        <div className="course-content">
          <div className="course-header">
            <div>{title}</div>
            <div>
              <img src={levelImg}/>
              <span>
              {level}
              </span>
            </div>
          </div>
          <div className="course-project-quantity">
            {`${projectQuantity} Projects`}
          </div>
          <div className="course-short-summary">
            {short_summary}
          </div>
          <div 
            className="course-summary"
            dangerouslySetInnerHTML={{__html:summary}}
          >
          </div>
        </div>
      </div>
    </div>
  )
}

export default Course;