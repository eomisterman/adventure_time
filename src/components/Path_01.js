import React, { Component } from 'react';

class Path_01 extends Component {
  constructor(props) {
    super();
    this.state = { path: null};
    this.handlePath = this.handlePath.bind(this);
  }

  handlePath() {
    this.setState((state, props) => {
      return {path:1};
    }
    )
  }

  render() {
    // console.log("this.state:\t" + this.state.path);
    return (
      <div className="Path_01">
        
      </div>
    );
  }
}

export default Path_01;