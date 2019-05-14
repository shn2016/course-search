import React from 'react';
import Filter from '../Filter';
import './Sidebar.css';

const categories = [
  '数据科学',
  'Android',
  '网站开发',
  '软件工程',
  'iOS',
  '佐治亚理工学院计算机科学硕士',
  '非技术类',
];

const Difficulties = [
  '初级',
  '中级',
  '高级',
];

const Sidebar = ({selectedCategory, selectedDifficulty, onCategoryChange, onDifficultyChange}) => (
  <div className="sidebar">
    <h2>Free Course and Nanodegree Program</h2>
    <Filter
      name='Category'
      list={categories}
      selected={selectedCategory}
      onSelect={onCategoryChange}
    />
    <hr/>
    <Filter
      name='Difficulty'
      list={Difficulties}
      selected={selectedDifficulty}
      onSelect={onDifficultyChange}
    />
  </div>
);

export default Sidebar;