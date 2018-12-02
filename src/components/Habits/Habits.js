import React, { Component } from 'react';
import './css/Habits.css'
import $ from 'jquery';

class Habits extends Component {
  constructor(props) {
    super();
    this.state = {
      healthy: 28,
      unhealthy: 0,
      health: 100,
      wellness: 100,
      anxiety: 0,
      awake: 100,
      hydro: null
    };

    this.MAX_HEALTH_WELLNESS = 100;
    this.MAX_HABIT = 28;

    this.handleHealthy = this.handleHealthy.bind(this);
    this.handleUnhealthy = this.handleUnhealthy.bind(this);
    this.handleHydro = this.handleHydro.bind(this);
    this.handleCocaine = this.handleCocaine.bind(this);
    this.handleOpiod = this.handleOpiod.bind(this);
    this.handleWeed = this.handleWeed.bind(this);
    this.handleCigarettes = this.handleCigarettes.bind(this);
    this.handleYoga = this.handleYoga.bind(this);
    this.handleExercise = this.handleExercise.bind(this);
    this.handleRehab = this.handleRehab.bind(this);
    this.handleWater = this.handleWater.bind(this);
  }
  /*
   *
   * Vices:
   *  - Alcohol (-.5 health, -1 wellness, -1 unhealthy, 1% alcohol poisioning)
   *  - Marijuana (-.2 unhealthy, 2% "You got too high")
   *  - Cocaine (-3 health, -2 wellness, +4 unhealthy, 5% overdose, 10% on first time)
   *  - Heroin (-7 health, -15 wellness, +7 unhealthy, 15% overdose)
   *  - Pills (-5 health, -8 wellness, +5 unhealthy, 7% overdose)
   *  - Cigarrettes (-1 health, -.5 wellness, -1 unhealthy, 5% chance cancer/death)
   *  - Coffee (50% chance of ANXIETY ATTACK YAY, if so -15 wellness)
   *
   * Healthy Habits:
   *  - Exercise
   *  - Detox
   *  - Rehab
   */

  componentDidUpdate() {
    console.log("Max Health:\t" + this.MAX_HEALTH_WELLNESS);
  }

  handleHealthy() {
    var well = this.state.healthy;
    var unwell = this.state.unhealthy;
    // if well less than 28, increase
      // if unwell is greater than 0, subtract too 
    if(well < this.MAX_HABIT) {
      this.setState((state, props) => {
        return {healthy: state.healthy+1}
      })
    }
    if(unwell > 0) {
      this.setState((state, props) => {
        return {unhealthy: state.unhealthy-1}
      })
    }
    if(this.state.health < this.MAX_HEALTH_WELLNESS) {
      this.setState((state, props) => {
        return {health: state.health+1}
      })
    }
    if(this.state.wellness < this.MAX_HEALTH_WELLNESS) {
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
    this.setState({
      health: this.state.health-5,
      wellness: this.state.wellness-8,
      unhealthy: this.state.unhealthy+5,
      healthy: this.state.healthy-5
    });
  }

  handleCocaine() {
    this.setState({
      health: this.state.health-3,
      wellness: this.state.wellness-2,
      unhealthy: this.state.unhealthy+4,
      healthy: this.state.healthy-4
    });
  }

  handleOpiod() {
    this.setState({
      health: this.state.health-7,
      wellness: this.state.wellness-15,
      unhealthy: this.state.unhealthy+7,
      healthy: this.state.healthy-7
    })
  }

  handleWeed() {
    this.setState({
      unhealthy: this.state.unhealthy-0.5
    })
  }

  handleCigarettes() {
    this.setState({
      health: this.state.health-1,
      wellness: this.state.wellness-0.5
    });
  }

  handleYoga() {
    this.setState({
      health: this.state.health+2,
      wellness: this.state.wellness+3,
      unhealthy: this.state.unhealthy-1,
      healthy: this.state.healthy+1
    });
  }

  handleExercise() {
    this.setState({
      health: this.state.health+3,
      wellness: this.state.wellness+2,
      unhealthy: this.state.unhealthy-1,
      healthy: this.state.healthy+1
    });
  }

  handleRehab() {
    this.setState({
      wellness: this.state.wellness+20,
      unhealthy: this.state.unhealthy-14,
      healthy: this.state.unhealthy+14
    });
  }

  handleWater() {
    if(this.state.health < this.MAX_HEALTH_WELLNESS) {
      this.setState({health: this.state.health + 1});
    }
    if(this.state.wellness < this.MAX_HEALTH_WELLNESS) {
      this.setState({wellness: this.state.wellness+0.5});
    }
  }

  render() {
    return (
      <div className="Habits">
        <div className="Stats">
          <h3 className="title">Stats</h3>
          <div className="healthBar">
            <div className="bar" style={{width: `${this.state.health}%`}}></div><div className="empty"></div>
          </div>
          <div className="wellnessBar">
            <div className="bar" style={{width: `${this.state.wellness}%`}}></div><div className="empty"></div>
          </div>
        </div>
        <div>
          <h3>Good Habit: {this.state.healthy}</h3>
          <button onClick={this.handleHealthy}>Good Habit</button>
        </div>
        <div>
          <h3>Bad Habit: {this.state.unhealthy}</h3>
          <button onClick={this.handleUnhealthy}>Bad Habit</button>
        </div>
        <div>
          <h3>Health: {this.state.health}</h3>
        </div>
        <div>
          <h3>Wellness: {this.state.wellness}</h3>
        </div>
        <div className="badHabits">
          <button onClick={this.handleHydro}>Hydro</button>
          <button onClick={this.handleCocaine}>Blow</button>
          <button onClick={this.handleOpiod}>Opiod</button>
          <button onClick={this.handleWeed}>Bong</button>
          <button onClick={this.handleCigarettes}>Cigarettes</button>
        </div>
        <div className="goodHabits">
          <button onClick={this.handleWater}>Water</button>
          <button onClick={this.handleYoga}>Yoga</button>
          <button onClick={this.handleExercise}>Exercise</button>
          <button onClick={this.handleRehab}>Rehab</button>
        </div>
      </div>
    );
  }
}

export default Habits;