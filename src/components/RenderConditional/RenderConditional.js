import React, { Component } from "react";

function LogIn({ selected = (fn) => fn }) {
  return <button onClick={selected}>Log in</button>;
}

// function LogOut() {
//   return <button>Log out</button>;
// }

class RenderConditional extends Component {
  state = {
    isLog: false,
  };

  handleClick(e) {
    this.setState((prev) => ({
      isLog: prev.isLog ? false : true,
    }));
  }
  render() {
    return (
      <>
        <h3>Eventos</h3>
        <button onClick={(e) => this.handleClick()}>Log out</button>
        <LogIn selected={(e) => this.handleClick()} />
        {this.state.isLog ? "User is Logged" : "User is not Logged"}
      </>
    );
  }
}

export default RenderConditional;
