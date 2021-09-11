import React, { Component } from "react";

class Counting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.handleSum = this.handleSum.bind(this);
    this.handleRest = this.handleRest.bind(this);
  }

  handleSum() {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  }

  handleRest() {
    this.setState((prev) => ({
      count: prev.count - 1,
    }));
  }

  render() {
    return (
      <>
        <button onClick={this.handleRest}>-</button>
        <p>Counter: {this.state.count}</p>
        <button onClick={this.handleSum}>+</button>
      </>
    );
  }
}

export default Counting;
