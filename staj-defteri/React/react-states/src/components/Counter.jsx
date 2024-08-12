import { useState } from "react";
import './counter.css'
const Counter = () => {
  const [count, setCount] = useState(0);
  const Increase=()=> {
    setCount(count+1);
  }
  const Decrease=()=> {
    setCount(count-1);
  }
  return (
    <div className="den">
      <h1>{count}</h1>
      <button onClick={Decrease}>Decrease</button>
      <button onClick={Increase}>Increase</button>
    </div>
  );
};

export default Counter;
