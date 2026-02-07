import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  const IncreamentAndDecrement = (identifier) => {
    setCount((prev) => (identifier == "+" ? prev + 1 : prev - 1));
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => IncreamentAndDecrement("+")}>Increament</button>
      <button
        onClick={() => {
          IncreamentAndDecrement("-");
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
