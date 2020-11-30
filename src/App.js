import "./App.css";
import Panel from "./components/Panel";
import Board from "./components/Board";
import React, { useState, useEffect } from "react";

function App() {
  //states
  const [count, setCount] = useState(0);
  const [tps, setTps] = useState(10); //is added to clicks
  const [clickCount, setClickCount] = useState(0);
  const [clickAmount, setClickAmount] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + tps);
    }, 1000);
    // clearing interval
    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      <Panel
        count={count}
        setCount={setCount}
        tps={tps}
        setTps={setTps}
        clickCount={clickCount}
        setClickCount={setClickCount}
        clickAmount={clickAmount}
        setClickAmount={setClickCount}
      />
      <Board tps={tps} setTps={setTps} count={count} setCount={setCount} />
    </div>
  );
}

export default App;
