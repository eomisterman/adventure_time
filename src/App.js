import React, { Component } from 'react';
import './App.css';

import Habits from './components/Habits/Habits';
import Stress from './components/Stress';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Path_00">
          <Stress/>
          <Habits/>
        </div>
      </div>
    );
  }
}

export default App;
