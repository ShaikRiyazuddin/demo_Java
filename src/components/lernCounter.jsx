import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

  return (
    <div>
        <h1>Counter</h1>
        <button onClick = {()=>{setCount(count-1)}}>-</button>
        <span>{count}</span>
        <button onClick = {()=>{setCount(count+1)}}>+</button>
        
    </div>
  )
}
