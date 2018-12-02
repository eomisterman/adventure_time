import React, { Component } from 'react';

class Hydro extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="Hydro">
                <button onClick={this.props.onCancel}>Cancel</button>
            </div>
        );
    }
}

export default Hydro;