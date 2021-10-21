import React from "react";
import ReactDOM from "react-dom";
import Example from "./components/Example.jsx";
import CallbackAsProps from "./components/CallbackAsProps.jsx";

function App() {
  return (
    <>
      <Example />
      <CallbackAsProps />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
