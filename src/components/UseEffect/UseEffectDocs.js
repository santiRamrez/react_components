import React, { useState, useEffect } from "react";

const UseEffectDocs = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <>
      <h1>Learning Use Effect Hook</h1>
      <p>You have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </>
  );
};

export default UseEffectDocs;
