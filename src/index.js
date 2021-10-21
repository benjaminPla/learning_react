import React from "react";
import ReactDOM from "react-dom";
import IfElse from "./components/IfElse.jsx";
import CheckUserAge from "./components/CheckUserAge.jsx";
import ConditionalFromProps from "./components/ConditionalFromPorps.jsx";

function App() {
  return (
    <>
      <IfElse />
      <CheckUserAge />
      <ConditionalFromProps />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
