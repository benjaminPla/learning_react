import React from "react";

const keyboardStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  width: "30%",
};
const keyStyles = {
  border: "1px solid #000",
  cursor: "pointer",
  height: "50px",
};

const keys = [
  { id: "7" },
  { id: "8" },
  { id: "9" },
  { id: "/" },
  { id: "4" },
  { id: "5" },
  { id: "6" },
  { id: "*" },
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "-" },
  { id: "AC" },
  { id: "0" },
  { id: "=" },
  { id: "+" },
];

export default function Keyboard(props) {
  return (
    <div style={keyboardStyles}>
      {keys.map((key, index) => {
        return (
          <div style={keyStyles} id={key.id} key={index} onClick={props.handleClick}>
            {key.id}
          </div>
        );
      })}
    </div>
  );
}
