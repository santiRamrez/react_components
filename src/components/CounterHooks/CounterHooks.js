import React, { useState } from "react";

const CounterHooks = () => {
  const [counter, setCounter] = useState(0);
  const add = () => setCounter(counter + 1);
  const substract = () => setCounter(counter - 1);

  return (
    <>
      <h2>Hooks useState</h2>
      <nav>
        <button onClick={substract}>-</button>
        <p>{counter}</p>
        <button onClick={add}>+</button>
      </nav>
    </>
  );
};

CounterHooks.defaultProps = {
  msg: "hola",
};

export default CounterHooks;
