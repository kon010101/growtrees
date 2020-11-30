import React from "react";
import "./CounterItem.css";

function CounterItem({
  counterItems,
  setCounterItems,
  counterItem,
  count,
  setCount,
  setTps,
  tps,
}) {
  function handleClick() {
    //increase counter for this certain object
    //CounterItem - Object: {name: "Earth Auger", cost: 100, amountInStock: 2, priceMultiplicator: 12, tpsIncrease: 10, tpsMultiplicator: 1.5 ,key: 1}
    setCounterItems(
      counterItems.map((el) => {
        if (el.key === counterItem.key) {
          //manipulate current Item
          //check price
          if (count >= el.price) {
            setCount((c) => c - el.price);
            el.amountInStock += 1;
            el.price *= el.costMultiplicator;
            //set current tps
            setTps((t) => t + el.tpsIncrease);
            //increase tps for next level
            el.tpsIncrease *= el.tpsMultiplicator;
          }
        }
        return el;
      })
    );
  }
  return (
    <div className="counterItem">
      <button className="counterItem__button" onClick={handleClick}>
        <div className="counterItem__price">{counterItem.price}</div>
        <div className="counterItem__buy-item-text">{counterItem.name}</div>
        <div className="counterItem__buy-item-counter">
          {counterItem.amountInStock}
        </div>
      </button>
    </div>
  );
}

export default CounterItem;
