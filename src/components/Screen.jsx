import React from "react";

const styles = {
  backgroundColor: "#000",
  color: "#fff",
  height: "50px",
  textAlign: "right",
  width: "30%",
};

export default function Screen(props) {
  return (
    <div style={styles}>
      <p></p>
      <p>{props.operation}</p>
    </div>
  );
}
