import React, { Component } from 'react';
// import $ from 'jquery';
import Hydro from './components/Hydro';

class Habits extends Component {
  constructor(props) {
    super();
    this.state = { 
      path: null,
      healthy: 28,
      unhealthy: 0,
      health: 100,
      wellness: 100,
      anxiety: 0,
      awake: 100,
      hydro: null
    };
    this.handlePath = this.handlePath.bind(this);
    this.handleHealthy = this.handleHealthy.bind(this);
    this.handleUnhealthy = this.handleUnhealthy.bind(this);
    this.handleHydro = this.handleHydro.bind(this);
  }
  /*
   *
   * Vices:
   *  - Alcohol (-.5 health, -1 wellness, -1 unhealthy, 1% alcohol poisioning)
   *  - Marijuana (-.2 unhealthy, 2% "You got too high")
   *  - Cocaine (-3 health, -2 wellness, +4 unhealthy, 5% overdose, 10% on first time)
   *  - Heroin (-7 health, -15 wellness, +7 unhealthy, 15% overdose)
   *  - Pills (-5 health, -8 wellness, -5 unhealthy, 7% overdose)
   *  - Cigarrettes (-1 health, -.5 wellness, -1 unhealthy, 5% chance cancer/death)
   *  - Coffee (50% chance of ANXIETY ATTACK YAY, if so -15 wellness)
   *
   * Healthy Habits:
   *  - Exercise
   *  - Detox
   *  - Rehab
   */

  handlePath() {
    this.setState((state, props) => {
      return {path:1};
    })
  }
  handleHealthy() {
    var well = this.state.healthy;
    var unwell = this.state.unhealthy;
    // if well less than 28, increase
      // if unwell is greater than 0, subtract too 
    if(well < 28) {
      this.setState((state, props) => {
        return {healthy: state.healthy+1}
      })
    }
    if(unwell > 0) {
      this.setState((state, props) => {
        return {unhealthy: state.unhealthy-1}
      })
    }
    if(this.state.health < 100) {
      this.setState((state, props) => {
        return {health: state.health+1}
      })
    }
    if(this.state.wellness < 100) {
      this.setState((state, props) => {
        return {wellness: state.wellness + 2}
      })
    }
    
  }
  handleUnhealthy() {
    var well = this.state.healthy;
    var unwell = this.state.unhealthy;

    // if less than 28, increase
      // if unwell greater than 0, decrease
    if(unwell < 28) {
      this.setState((state, props) => {
        return{unhealthy: state.unhealthy+1}
      })
    }
    if(well > 0) {
      this.setState((state, props) => {
        return{healthy: state.healthy-1}
      })
    }
    if(this.state.health > 0) {
      this.setState((state, props) => {
        return {health: state.health-1}
      })
    }
    if(this.state.wellness > 0) {
      this.setState((state, props) => {
        return {wellness: state.wellness-2}
      })
    }
  }

  handleHydro() {
    console.log("Handled Hydro");
    this.setState({hydro: "hydro",
    health: this.state.health-3,
    wellness: this.state.wellness-2,
    unhealthy: this.state.unhealthy+4,
    healthy: this.state.healthy-4
    });
  }

  

  render() {
    if(this.state.hydro) {
      return (
        <div className="Habits">
          <div>
            <h1 onClick={this.handleHealthy}>Good Habit</h1>
          </div>
          <div>
            <h1 className="unhealthy" onClick={this.handleUnhealthy}>Bad Habit</h1>
          </div>
          <div>
            <Hydro onCancel={() => {this.setState({hydro: null})}}/>
          </div>
          <div>
            <h3>Good habit: {this.state.healthy}</h3>
          </div>
          <div>
            <h3>Bad Habit: {this.state.unhealthy}</h3>
          </div>
          <div>
            <h3>Health: {this.state.health}</h3>
          </div>
          <div>
            <h3>Wellness: {this.state.wellness}</h3>
          </div>
        </div>
      );
    } 
    else {
      return (
        <div className="Habits">
          <div>
            <h1 onClick={this.handleHealthy}>Good Habit</h1>
          </div>
          <div>
            <h1 className="unhealthy" onClick={this.handleUnhealthy}>Bad Habit</h1>
          </div>
          <div className="Hydro">
            <h3>Hydro Component</h3>
            <button onClick={this.handleHydro}>Hydro</button>
          </div>
          <div>
            <h3>Good habit: {this.state.healthy}</h3>
          </div>
          <div>
            <h3>Bad Habit: {this.state.unhealthy}</h3>
          </div>
          <div>
            <h3>Health: {this.state.health}</h3>
          </div>
          <div>
            <h3>Wellness: {this.state.wellness}</h3>
          </div>
        </div>
      );
    }
    
  }
}

export default Habits;