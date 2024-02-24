import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";


function App() {
  const [count, setCount]= useState(0);
  const handleAdd=(e)=>{
    setCount(count+1);
  }

  const handleMinus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleAdd}>Increment</button>
      <button onClick={handleMinus}>Decrement</button>


    </div>
  );
}

export default App;
