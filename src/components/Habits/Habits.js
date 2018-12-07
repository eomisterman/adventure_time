import React, { Component } from 'react';

import Stats from './components/Stats';
import './css/Habits.css'
import pills from './assets/pills.svg';
import background from './assets/background2.svg';
import bong from './assets/bong.svg';
import cigs from './assets/cigs.svg';
import cocaine from './assets/cocaine.svg';
import heroin from './assets/heroin.svg';
import rehab from './assets/rehab.svg';
import snorter from './assets/snorter.svg';
import water from './assets/water.svg';
import weights from './assets/weights.svg';
import yoga from './assets/yoga.svg';
import coffee from './assets/coffee.svg';


// import $ from 'jquery';

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

class Habits extends Component {
  constructor(props) {
    super();
    this.state = {
      healthy: 28,
      unhealthy: 0,
      health: 100,
      wellness: 100,
      anxiety: 0,
      coffee: null
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
    this.handleAnxietyAttack = this.handleAnxietyAttack.bind(this);
    this.handleCoffee = this.handleCoffee.bind(this);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  handleCoffee() {
    if(!this.interval || this.state.anxiety === 0) {
      this.interval = setInterval(() => {
        this.setState({anxiety: this.state.anxiety+1});
      }, 100);
    }
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
    if(this.state.health > 0) {
      this.setState({health: this.state.health-5});
    }
    if(this.state.wellness > 0) {
      this.setState({wellness: this.state.wellness-8});
    }
    if(this.state.unhealthy < this.MAX_HABIT) {
      this.setState({unhealthy: this.state.unhealthy+5});
    }
    if(this.state.healthy > 0) {
      this.setState({healthy: this.state.healthy-5});
    }
  }

  handleCocaine() {
    if(this.state.health > 0) {
      this.setState({health: this.state.health-3});
    }
    if(this.state.wellness > 0) {
      this.setState({wellness: this.state.wellness-2});
    }
    if(this.state.unhealthy < this.MAX_HABIT) {
      this.setState({unhealthy: this.state.unhealthy+4});
    }
    if(this.state.healthy > 0) {
      this.setState({healthy: this.state.healthy-4});
    }
  }

  handleOpiod() {
    if(this.state.health > 0) {
      this.setState({health: this.state.health-7});
    }
    if(this.state.wellness > 0) {
      this.setState({wellness: this.state.wellness-15});
    }
    if(this.state.unhealthy < this.MAX_HABIT) {
      this.setState({unhealthy: this.state.unhealthy+7});
    }
    if(this.state.healthy > 0) {
      this.setState({healthy: this.state.healthy-7});
    }
  }

  handleWeed() {
    if(this.state.unhealthy < this.MAX_HABIT) {
      this.setState({unhealthy: this.state.unhealthy + 0.5});
    }
  }

  handleCigarettes() {
    if(this.state.health > 0) {
      this.setState({health: this.state.health-1});
    }
    if(this.state.wellness > 0) {
      this.setState({wellness: this.state.wellness-0.5});
    }
    if(this.state.healthy > 0) {
      this.setState({healthy: this.state.healthy-1});
    }
  }

  handleYoga() {
    if(this.state.health < this.MAX_HEALTH_WELLNESS) {
      this.setState({health: this.state.health+2});
    }
    if(this.state.wellness < this.MAX_HEALTH_WELLNESS) {
      this.setState({wellness: this.state.wellness+3});
    }
    if(this.state.unhealthy > 0) {
      this.setState({unhealthy: this.state.unhealthy-1});
    }
    if(this.state.healthy < this.MAX_HABIT) {
      this.setState({healthy: this.state.healthy+1});
    }
  }

  handleExercise() {
    if(this.state.health < this.MAX_HEALTH_WELLNESS) {
      this.setState({health: this.state.health+3});
    }
    if(this.state.wellness < this.MAX_HEALTH_WELLNESS) {
      this.setState({wellness: this.state.wellness+2});
    }
    if(this.state.unhealthy > 0) {
      this.setState({unhealthy: this.state.unhealthy-1});
    }
    if(this.state.healthy < this.MAX_HABIT) {
      this.setState({healthy: this.state.healthy+1});
    }
  }

  handleRehab() {
    if(this.state.wellness < this.MAX_HEALTH_WELLNESS) {
      this.setState({wellness: this.state.wellness+20});
    }
    if(this.state.unhealthy > 0) {
      this.setState({unhealthy: this.state.unhealthy-14});
    }
    if(this.state.healthy < this.MAX_HABIT) {
      this.setState({healthy: this.state.healthy+14});
    }
  }

  handleWater() {
    if(this.state.health < this.MAX_HEALTH_WELLNESS) {
      this.setState({health: this.state.health + 1});
    }
    if(this.state.wellness < this.MAX_HEALTH_WELLNESS) {
      this.setState({wellness: this.state.wellness+0.5});
    }
    if(this.state.anxiety >= 25) {
      this.setState({anxiety: this.state.anxiety - 25})
    } else {
      clearInterval(this.interval);
      this.setState({anxiety: 0});
    }
  }

  handleAnxietyAttack() {
    alert("YOUR HEART IS BEATING OUT OF YOUR CHEST\n" + 
      "YOURE STRESSED ABOUT EVERYTHING\n" +
      "YOU KNEW THIS WOULD HAPPEN AND YOU STILL NEVER LEARN!");
    clearInterval(this.interval);
    this.setState({anxiety: 0})
  }

  render() {
    if(this.state.anxiety >= 100) {
      this.handleAnxietyAttack();
    }
    return (
      <div className="Habits">
        
        <Stats health={this.state.health} wellness={this.state.wellness} anxiety={this.state.anxiety}/>
        <img className="Background" src={background} alt="background" />
        <img className="Pills" src={pills} alt="pills" onClick={this.handleHydro} />
        <img className="Cocaine" src={cocaine} alt="cocaine" onClick={this.handleCocaine} />
        <img className="Snorter" src={snorter} alt="snorter" onClick={this.handleCocaine} />
        <img className="Heroin" src={heroin} alt="heroin" onClick={this.handleOpiod}/>
        <img className="Bong" src={bong} alt="bong" onClick={this.handleWeed} />
        <img className="Cigs" src={cigs} alt="cigs" onClick={this.handleCigarettes} />
        <img className="Coffee" src={coffee} alt="coffee" onClick={this.handleCoffee} />
        <img className="Water" src={water} alt="water" onClick={this.handleWater} />
        <img className="Yoga" src={yoga} alt="yoga" onClick={this.handleYoga} style={{opacity:(this.state.healthy/28)}} />
        <img className="Weights" src={weights} alt="weights" onClick={this.handleExercise} style={{opacity:(this.state.healthy/28)}} />
        <img className="Rehab" src={rehab} alt="rehab" onClick={this.handleRehab} style={{opacity:(this.state.healthy/28)}} />
        <div>
          <h3>Good Habit: {this.state.healthy}</h3>
          <button onClick={this.handleHealthy}>Good Habit</button>
        </div>
        <div>
          <h3>Bad Habit: {this.state.unhealthy}</h3>
          <button onClick={this.handleUnhealthy}>Bad Habit</button>
        </div>
        {/* <div>
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
          <button onClick={this.handleCoffee}>Coffee</button>
        </div>
        <div className="goodHabits">
          <button onClick={this.handleWater}>Water</button>
          <button onClick={this.handleYoga} style={{opacity:(this.state.healthy/28)}}>Yoga</button>
          <button onClick={this.handleExercise} style={{opacity:(this.state.healthy/28)}}>Exercise</button>
          <button onClick={this.handleRehab} style={{opacity:(this.state.healthy/28)}}>Rehab</button>
        </div> */}
        

      </div>
    );
  }
}

export default Habits;