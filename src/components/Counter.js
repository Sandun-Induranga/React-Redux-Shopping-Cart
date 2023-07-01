import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex gap-2">
      <button
        className="w-6 rounded bg-pink-300 text-pink-900"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
      <span>{count}</span>
      <button
        className="w-6 rounded bg-pink-300 text-pink-900"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
