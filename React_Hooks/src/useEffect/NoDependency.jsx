import React, { useState, useEffect } from "react";

const NoDependency = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Effect is called ${count}`);
  });
  let value = 0;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default NoDependency;
