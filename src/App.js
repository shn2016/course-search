import React from 'react';
import './App.css';
import getCourses from './services/getCourses';
import Content from './components/Content';
import Sidebar from './components/Sidebar';

class App extends React.Component {

  componentDidMount() {
    getCourses()
      .then(res => {
        console.log(res);
      })
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

export default App;
