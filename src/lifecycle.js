import { useState, useEffect } from "react";

export const Lifecycle = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("count", count);
    console.log("value", value);
  }, [count, value]);

  useEffect(() => {
    console.log("component mounted");
  }, []);

  useEffect(() => {
    return () => {
      console.log("component unmounted");
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};
