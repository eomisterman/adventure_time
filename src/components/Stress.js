import React, { Component } from 'react';
import Hydro from './Habits/components/Hydro';

class Stress extends Component {
    constructor() {
        super();
        this.state = {
            anx: 0,
            anxImgRep: 0,
            coffee: null,
            hydro: null

        };
        this.handleCoffee = this.handleCoffee.bind(this);
        this.handleHydro = this.handleHydro.bind(this);
    }

    handleCoffee() {
        this.setState({coffee: "coffee"});
    }

    handleHydro() {
        this.setState({hydro: "hydro"});
    }


    render() {
        console.log("counter:\t" + this.state.coffee);
        if(this.state.coffee) {
            return (
                <div className="Stress">
                    <h3>Increment Stress</h3>
                    <Increment onCancel={() => {this.setState({coffee: null})}}/>
                </div>
            );
        }
        else {
            return (
                <div className="Stress">
                    <h3>Stress Component</h3>
                    <div className="Coffee">
                        <h1>Drink Coffee</h1>
                        <button onClick={this.handleCoffee}>Coffee</button>
                        
                    </div>
                    <div className="Hydro">
                        <h1>Hydro Component</h1>
                        <Hydro onCancel={this.handleHydro}/>
                    </div>
                </div>
            );
        }
        
    }
}

class Increment extends Component {
    constructor() {
        super();
        this.state = {count: 0}
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count+1});
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return(
            <div className="Increment">
                <h3>{this.state.count}</h3>
                <button onClick={this.props.onCancel}>Cancel</button>
            </div>
        );
    }
}

export default Stress;