import React, { useState, useEffect } from "react";

const EmptyArray = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Empty Array Effect`);
  }, []);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default EmptyArray;
