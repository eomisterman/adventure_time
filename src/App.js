import React, { Component } from 'react';
import './App.css';

import Habits from './components/Habits/Habits';
import Stress from './components/Stress';

class App extends Component {
  constructor() {
    super();
    this.state = {
      anxietyAttack: null,
    }

    this.handleAnxietyAttack = this.handleAnxietyAttack.bind(this);
  }

  handleAnxietyAttack() {
    alert("YOUR HEART IS BEATING OUT OF YOUR CHEST\n" + 
      "YOURE STRESSED ABOUT EVERYTHING\n" + 
      "THE WEIGHT OF THE WORLD IS GETTING HEAVIER\n" + 
      "YOU KNEW THIS WOULD HAPPEN AND YOU STILL NEVER LEARN!");
  }

  render() {
    return (
      <div className="App">
        <div className="Substances">
          <Stress anxietyAttack={this.handleAnxietyAttack}/>
          <Habits/>
        </div>
      </div>
    );
  }
}

export default App;
