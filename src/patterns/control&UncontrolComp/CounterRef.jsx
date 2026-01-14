import React, { useRef, useState } from "react";

const CounterRef = () => {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const increment = () => {
    countRef.current = countRef.current + 1;
    console.log("Ref Count: ", countRef.current);
  };
  return (
    <div className="flex justify-around gap-2 w-full">
      <div>
        <h2 className="text-2xl">Ref Count: {countRef.current}</h2>
        <button
          className="bg-purple-500 text-white p-1 rounded "
          onClick={increment}
        >
          Increment Ref Count
        </button>
      </div>
      <div>
        <h2 className="text-2xl">Render Count: {count}</h2>
        <button
          className="bg-purple-500 text-white p-1 rounded "
          onClick={()=>setCount(count+1)}
        >
          Force Re-render
        </button>
      </div>
    </div>
  );
};

export default CounterRef;
