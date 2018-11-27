import React, { Component } from 'react';
import Path_01 from './Path_01';

class Path_00 extends Component {
  constructor(props) {
    super();
    this.state = { 
      path: null,
      healthy: 28,
      unhealthy: 0,
      health: 100,
      wellness: 100
    };
    this.handlePath = this.handlePath.bind(this);
    this.handleHealthy = this.handleHealthy.bind(this);
    this.handleUnhealthy = this.handleUnhealthy.bind(this);
  }
  /*
   *
   * Vices:
   *  - Alcohol (-.5 health, -1 wellness, -1 unhealthy, 1% alcohol poisioning)
   *  - Marijuana (-.2 unhealthy, 2% "You got too high")
   *  - Cocaine (-3 health, -2 wellness, -4 unhealthy, 5% overdose, 10% on first time)
   *  - Heroin (-7 health, -15 wellness, -7 unhealthy, 15% overdose)
   *  - Pills (-5 health, -8 wellness, -5 unhealthy, 7% overdose)
   *  - Cigarrettes (-1 health, -.5 wellness, -1 unhealthy, 5% chance cancer/death)
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

  render() {
    console.log("this.state:\t" + this.state.path);
    var NextPath;
    if(this.state.path === 1) {
      NextPath = <Path_01/>;
    } else {
      NextPath = null;
    }
    return (
      <div className="Path_00">
        <div>
          <h1 onClick={this.handleHealthy}>Good Habit</h1>
        </div>
        <div>
          <h1 onClick={this.handleUnhealthy}>Bad Habit</h1>
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
          <h3>Wellnes: {this.state.wellness}</h3>
        </div>
        <div className="ChosenPath">
          {NextPath}
        </div>
      </div>
    );
  }
}

export default Path_00;