import React from 'react';
import './App.css';
import text from "./lorem.js";

var text1 = text.slice(0,Math.floor(text.length/3));

function App() {

  const [darkMode, setDarkMode] = React.useState(false);
  const [counter, setCounter] = React.useState(0);
  document.body.className = darkMode? "dark":"light";

  return (
    <div className="App">
      <div className = {(darkMode? "dark":"light") + " space"}>
        <h3>Lorem TEXT:</h3>
        <p>{text1}</p>
      </div>
      <button className= {(darkMode? "light":"dark") + " toggle-button"} onClick={() => setDarkMode(prevMode => !prevMode)}>Toggle Light</button>
      <h2 className={darkMode? "dark":"light"}>{"Counter: " + counter}</h2>
      <button className={(darkMode? "light":"dark") + " button"}  onClick={() => setCounter(prevMode => (prevMode+1))}>+</button>
      <span> </span>
      <button className={(darkMode? "light":"dark") + " button"}  onClick={() => setCounter(prevMode => (prevMode-1))}>-</button>
    </div>
  );
}

export default App;
