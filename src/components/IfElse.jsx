import React, { useState } from "react";

const styles = {
  border: "1px solid #000",
  paddingLeft: "1rem",
};

export default function IfElse() {
  const [value, setValue] = useState(true);
  const handleClick = () => {
    setValue(value ? false : true);
  };
  return (
    <div style={styles}>
      <h2>If Else</h2>
      <button onClick={handleClick}>Click Me!</button>
      <p>{value ? "True" : "False"}</p>
    </div>
  );
}
