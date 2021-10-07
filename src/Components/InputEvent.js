import React, { useState } from "react";

export default function InputEvent() {
  const [current, setCurrent] = useState("initial value");

  const handleChange = ({ target }) => {
    setCurrent(target.value);
    // console.log(current);
  };

  return (
    <div>
      <input value={current} onChange={handleChange} />
    </div>
  );
}
