import React from 'react';
import Search from '../Search';
import Courses from '../Courses';
import Pagination from '../Pagination';
import './Content.scss';

const Content = () => (
  <div className="content">
    <Search />
    <div className="banner">
      <h2>All Nanodegree projects and single course</h2>
      <p>
        Study the Nanodegree projects and courses from Google, Amazon, Facebook and world-leading technology companies, learn Artificial Intellegence, Machine Learning from scratch.
      </p>
    </div>
    <Courses/>
    <Pagination/>
  </div>
);

export default Content;