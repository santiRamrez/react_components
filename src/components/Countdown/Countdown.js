import React, { Component } from "react";
import "./Countdown.css";

class Countdown extends Component {
  state = {
    userInput: "",
    showInput: "",
  };

  setUserInput = () => {
    this.setState((prev) => ({
      userInput: (prev.userInput = document.querySelector(".theInput").value),
    }));
  };

  start = () => {
    console.log(this.state.showInput);
  };

  render() {
    return (
      <div className="Countdown-Container">
        <h3>Countdown</h3>
        <p>
          {/[a-z]/.test(this.state.userInput)
            ? "Only type a number"
            : this.state.userInput}
        </p>
        <div className="Container-Inputs">
          <input
            className="theInput"
            placeholder="Select minutes"
            type="text"
            onChange={this.setUserInput}
          />
          <button onClick={this.start}>Start</button>
        </div>
      </div>
    );
  }
}

export default Countdown;
