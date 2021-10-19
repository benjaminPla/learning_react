import React, { useState } from "react";

const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

export default function UseStateArray() {
  const [selected, setSelected] = useState([]);

  const handleClick = ({ target }) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
      if (prev.includes(clickedTopping)) {
        return prev.filter((t) => t !== clickedTopping);
      } else {
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map((option) => (
        <button value={option} onClick={handleClick} key={option}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} pizza</p>
    </div>
  );
}
