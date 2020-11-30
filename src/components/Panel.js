import React, { useState, useEffect } from "react";
import ClickTree from "./ClickTree";
import "./Panel.css";

function Panel({
  count,
  setCount,
  tps,
  setTps,
  clickCount,
  setClickCount,
  clickAmount,
  setClickAmount,
}) {
  const [showCounter, setShowCounter] = useState(0);

  useEffect(() => {
    const fps = tps < 100 ? tps : 100;
    const timer = setInterval(() => {
      setShowCounter((s) => Math.floor(s + (count - s) / fps));
      console.log(count);
    }, 1000 / fps);
    // clearing interval
    if (showCounter === count) clearInterval(timer);

    return () => {
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="panel">
      <ClickTree
        clickCount={clickCount}
        setClickCount={setClickCount}
        clickAmount={clickAmount}
      />
      <div className="panel__clickCounter">
        {showCounter + clickAmount}
        <div>trees planted</div>
        <div className="panel__tps">trees per second: {tps}</div>
      </div>
    </div>
  );
}

export default Panel;
