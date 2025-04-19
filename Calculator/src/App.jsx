import React,{ useState } from "react";
import "./App.css";

function App() {
  
  const [display, setDisplay] = useState("0");
  const [showHistory, setShowHistory] = useState(false);
  const [history, setHistory] = useState([]);

  const buttons = [
    "AC", "+/-", "%", "÷",
    "7", "8", "9", "×",   
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];
  

  function handleClick(value) {
    if (value === "AC") {
      setDisplay("0");
    } else if (value === "+/-") {
      setDisplay((prev) => (parseFloat(prev) * -1).toString());
    } else if (value === "%") {
      setDisplay((prev) => (parseFloat(prev) / 100).toString());
    } else if (value === "=") {
      try {
        const expression = display.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(expression);
        setHistory((prev) => [...prev, `${display} = ${result}`]); // Add to history
        setDisplay(result.toString());
      } catch {
        setDisplay("Error");
      }
    } else if (value === ".") {
      const parts = display.split(/[\+\-\×\÷]/);
      const last = parts[parts.length - 1];
      if (last.includes(".")) return; // Prevent multiple dots in the current number
      setDisplay((prev) => prev + value);
    } else {
      setDisplay((prev) => (prev === "0" ? value : prev + value));
    }
  }
  return (
    <>
    <title> Calculator</title>

  <div className="app-container">

    {/* ✅ Top-left History Toggle Button */}
    <button className="history-toggle" onClick={() => setShowHistory(!showHistory)}>
  
  <span className="hamburger">
    <div></div>
    <div></div>
    <div></div>
  </span>
</button>


    {/* ✅ Calculator UI */}
    <div className="calculator">
      <div className="display">{display}</div>

      <div className="buttons">
        {buttons.map((btn, i) => (
          <button
            key={i}
            className={`btn ${btn === "0" ? "span-two" : ""} ${btn === '+/-' ? 'btn-plusminus' : `btn-${btn}`}`}
            onClick={() => handleClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>

    {/* ✅ Sliding History Panel */}
    {showHistory && (
      <div className="history-panel">
        <h3>History</h3>
        <div className="history-list">
          {history.length === 0 ? (
            <p>No history yet.</p>
          ) : (
            history.slice().reverse().map((item, index) => (
              <div key={index} className="history-item">{item}</div>
            ))
          )}
        </div>
      </div>
    )}

  </div>

    </>
  );
}

export default App
