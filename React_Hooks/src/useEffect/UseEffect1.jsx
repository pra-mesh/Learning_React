import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);
  const [countDown, setCountDown] = useState(10);

  // Level 0
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown === 0) return;
      setCountDown((countDown) => countDown - 1);
    }, 1000);
    //clean function
    return () => clearInterval(interval);
  });
  //Level 1 states as dependencies
  //Level 2 clean up function
  //Level 3 param controlled Pagination
  return (
    <div>
      {count}
      <hr />
      Count down is {countDown}
    </div>
  );
};

export default UseEffect1;
