import React, { useState } from "react";
import "./Board.css";
import CounterItem from "./CounterItem";
import { counterItemsDefault } from "./InitialData";

function Board({ count, setCount, tps, setTps, seconds }) {
  const [counterItems, setCounterItems] = useState([]);

  function initCounterItems() {
    setCounterItems(counterItemsDefault);
    console.log(counterItemsDefault, "above2");
  }

  //   function showCounterItems() {
  //     if (counterItems.length === 0) initCounterItems();
  //     console.log(counterItems);
  //     return counterItems.map((item, index) => {
  //       return <CounterItem name={item.name} />;
  //     });
  //   }

  const showCounterItems = () => {
    console.log(counterItems.length);
    if (counterItems.length === 0) initCounterItems();

    const allCounterItems = counterItems.map((item, index) => {
      return (
        <CounterItem
          todoClassName={"item"}
          counterItem={item}
          counterItems={counterItems}
          setCounterItems={setCounterItems}
          count={count}
          setCount={setCount}
          setTps={setTps}
          tps={tps}
        />
      );
    });
    return allCounterItems;
  };

  return (
    <div className="board">
      <ul>{showCounterItems()}</ul>
    </div>
  );
}

export default Board;
