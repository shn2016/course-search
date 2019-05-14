import React from 'react';
import './Filter.css';



const Filter = ({name, selected, list, onSelect}) => (
  <div className="filter">
    <div className="filter-title">{name}</div>
    <div>
    {
      list.map(type =>(
        <div 
          className={`type ${type===selected ? 'selected' : ''}`}
          key={type}
          onClick={() => onSelect(type)}
        >
          {type}
        </div>
      ))
    }
        <div 
          className={`type ${!selected ? 'selected' : ""}`}
          key="all"
          onClick={() => onSelect(null)}
        >
          {"All"}
        </div>
    </div>
  </div>
);

export default Filter;