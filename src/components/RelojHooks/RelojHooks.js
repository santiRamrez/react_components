import React, { useEffect, useState } from "react";

const RelojHooks = () => {
  let [time, setTime] = useState(new Date().toLocaleTimeString());
  let [running, setRunning] = useState(false);

  useEffect(() => {
    let a;
    if (running) {
      a = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    } else {
      setTime(new Date().toLocaleTimeString());
    }
    //Return means componentWillUnmount() -> time to cleanup
    return () => {
      clearInterval(a);
    };
  }, [running]);

  let handleClick = () => {
    let btn = document.querySelector("button");
    if (!running) {
      setRunning(true);
      setTimeout(() => {
        btn.textContent = "Detener";
      }, 500);
    } else {
      setRunning(false);
      setTimeout(() => {
        btn.textContent = "Iniciar";
      }, 500);
    }
  };

  return (
    <>
      <h2>Reloj Hooks</h2>
      <h3>
        Hora: <span>{time}</span>
      </h3>
      <button onClick={handleClick}>Iniciar</button>
    </>
  );
};

export default RelojHooks;
