import React from "react";
import { items } from "../types/app";

const Stats = ({ addItems }: { addItems: items[] }) => {
  if (!addItems.length) {
    return (
      <div className="stats ">
        <span>Start adding some items to your packing list 🚀</span>
      </div>
    );
  }

  let packedItems = addItems.filter((item) => item.packed).length;

  const presntagePacked = () => {
    let result = (packedItems / addItems.length) * 100;

    return Number.isNaN(result)
      ? 0
      : Number.isInteger(result)
      ? result
      : result.toFixed(2);
  };
  return (
    <div className="stats ">
      <span>
        {presntagePacked() === 100
          ? "You got everything! Ready to go ✈️"
          : `💼 You have ${
              addItems.length
            } items on your list,and you already packed ${packedItems} (${presntagePacked()}%)`}
      </span>
    </div>
  );
};

export default Stats;
