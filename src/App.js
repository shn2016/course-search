import React from 'react';
import './App.css';
import Content from './components/Content';
import Sidebar from './components/Sidebar';
import { fetchCourses } from './actions';
import { connect } from "react-redux";

class App extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }
  
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Content />
      </div>
    )
  }
}

export default connect()(App);
