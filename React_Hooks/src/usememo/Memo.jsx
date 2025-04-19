import { useMemo, useState } from "react";
const heavyFunction = (n) => {
  console.log("Heavy Function");

  if (n <= 1) return n;
  return heavyFunction(n - 1) + heavyFunction(n - 2);
};
const Memo = () => {
  const [number, setNumber] = useState(2);
  const [otherState, setOtherState] = useState(false);
  const double = useMemo(() => heavyFunction(number), [number]);
  return (
    <div>
      <p>Number: {number}</p>
      <button onClick={() => setNumber((n) => n + 1)}>Add number </button>
      <button onClick={() => setOtherState(!otherState)}>
        Toggle Other State {String(otherState)}
      </button>
      <p>Value: {double}</p>
    </div>
  );
};

export default Memo;
