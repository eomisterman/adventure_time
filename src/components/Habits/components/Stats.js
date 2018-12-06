import React, { Component } from 'react';
import '../css/Stats.css';

class Stats extends Component {

    render() {
        return (
            <div className="Stats">
                <h3 className="title">Stats</h3>
                <div className="healthBar">
                    <div className="bar" style={{width: `${this.props.health}%`}}></div><div className="empty"></div>
                </div>
                <div className="wellnessBar">
                    <div className="bar" style={{width: `${this.props.wellness}%`}}></div><div className="empty"></div>
                </div>
                <div className="anxietyBar">
                    <div className="bar" style={{width: `${this.props.anxiety}%`}}></div><div className="empty"></div>
                </div>
            </div>
        );
    }
}

export default Stats;