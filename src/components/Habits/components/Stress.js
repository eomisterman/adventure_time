import React, { Component } from 'react';

class Stress extends Component {
    constructor() {
        super();
        this.state = {
            anx: 0,
            anxImgRep: 0,
            interval: false

        };
    }



    render() {
        if(this.state.coffee) {
            return (
                <div className="Stress">
                    
                    <Increment onCancel={this.props.onCancel}
                        anxiety={this.props.anxiety}
                        anxietyAttack={this.props.anxietyAttack}
                        handleAnxiety={this.props.handleAnxiety}
                        handleInterval={this.clearAnxInterval}/>
                </div>
            );
        }
        else {
            return (
                <div className="Stress">
                   <button onClick={this.props.handleCoffee}>Coffee</button>
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
        console.log("Before:\t" + this.interval);
        this.interval = setInterval(() => {
            this.props.handleAnxiety();
        }, 100);
        console.log("After:\t" + this.interval);
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
        if(this.props.anxiety >= 100) {
            this.anxietyAttack();
        }
        return(
            <div className="Increment">
                <h3>{this.props.anxiety}</h3>
                <button onClick={this.props.onCancel}>Cancel</button>
            </div>
        );
    }
}

export default Stress;