import React from 'react'
import { useState } from 'react';
const Buttons = () => {
    const [count, setCount] = useState(0);
    const handleme = () => {
    setCount(count + 1);
    console.log("Button clicked", count);

    }
    const decrese = () => {
        setCount(count - 1);
        console.log("Button decrese", count);
    }
  return (
    <div>
        <h1> {count} </h1>
        <button onClick={handleme}  >Increse Count</button>
        <button onClick={decrese}>Decrease Count</button>
    </div>
  )
}

export default Buttons ;
