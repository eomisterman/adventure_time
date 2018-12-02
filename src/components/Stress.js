import React, { Component } from 'react';

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
                    <Increment onCancel={() => {this.setState({coffee: null})}} anxietyAttack={this.props.anxietyAttack}/>
                </div>
            );
        }
        else {
            return (
                <div className="Stress">
                    <div className="Coffee">
                        <h3>Drink Coffee</h3>
                        <button onClick={this.handleCoffee}>Coffee</button>
                    </div>
                </div>
            );
        }
        
    }
}

class Increment extends Component {
    constructor() {
        super();
        this.state = {count: 0};

        this.anxietyAttack = this.anxietyAttack.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({count: this.state.count+1});
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    anxietyAttack() {
        this.props.anxietyAttack();
        clearInterval(this.interval);
        this.props.onCancel();
    }

    render() {
        if(this.state.count >= 100) {
            this.anxietyAttack();
        }
        return(
            <div className="Increment">
                <h3>{this.state.count}</h3>
                <button onClick={this.props.onCancel}>Cancel</button>
            </div>
        );
    }
}

export default Stress;