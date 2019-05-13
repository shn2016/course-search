import React from 'react';
import './Filter.css';



const Filter = ({name, selected, list}) => (
  <div className="filter">
    <div className="filter-title">{name}</div>
    <div>
    {
      list.map(type =>(
        <div 
          className={`type ${type===selected ? 'selected' : ''}`}
          key={type}
        >
          {type}
        </div>
      ))
    }
    <div 
          className={`type ${!selected ? 'selected' : ""}`}
          key="all"
        >
          {"All"}
        </div>
    </div>
  </div>
);

export default Filter;