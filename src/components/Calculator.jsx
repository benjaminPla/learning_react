import React, { useState } from "react";
import Keyboard from "./Keyboard.jsx";
import Screen from "./Screen.jsx";

export default function Calculator() {
  const [operations, setOperations] = useState("");
  const handleClick = ({ target }) => {
    setOperations(operations + target.id);
  };
  return (
    <>
      <h1>Calculator</h1>
      <Screen operation={operations} />
      <Keyboard handleClick={handleClick} />
    </>
  );
}
