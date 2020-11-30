import React from "react";
import tree from "./tree.png";
import "./ClickTree.css";

function ClickTree({ clickCount, setClickCount, clickAmount }) {
  function clickHandler() {
    setClickCount((c) => c + clickAmount);
    console.log(clickAmount);
  }
  return (
    <div className="clicktree">
      <img
        src={tree}
        alt="tree"
        className="clicktree__img"
        onClick={clickHandler}
      />
    </div>
  );
}

export default ClickTree;
