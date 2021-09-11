import React, { Component } from "react";

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "Nothing yet",
    };
    this.tempo = null;
  }

  componentDidMount() {
    // this.displayHour()
  }

  displayHour = () => {
    this.tempo = setInterval(() => {
      this.setState({ hour: new Date().toLocaleTimeString() });
    }, 1000);
  };

  stopHour = () => {
    clearInterval(this.tempo);
  };

  render() {
    return (
      <>
        <h3>Ciclo de Vida</h3>
        <p>{this.state.hour}</p>
        <button onClick={this.displayHour}>Start</button>
        <button onClick={this.stopHour}>Stop</button>
      </>
    );
  }
}

export default Reloj;
