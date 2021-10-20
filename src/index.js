import React from "react";
import ReactDOM from "react-dom";
import AppClass from "./components/AppClass.jsx";
import AppFunction from "./components/AppFunction.jsx";
import "./index.css";

function App() {
  return (
    <>
      <AppClass />
      <AppFunction />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
