import React from "react";
import ReactDOM from "react-dom";
import IfElse from "./components/IfElse.jsx";
import CheckUserAge from "./components/CheckUserAge.jsx";
import ConditionalFromProps from "./components/ConditionalFromPorps.jsx";
import ConditionalCSS from "./components/ConditionalCSS.jsx";
import MyToDoList from "./components/ToDoList.jsx";

function App() {
  return (
    <>
      <IfElse />
      <CheckUserAge />
      <ConditionalFromProps />
      <ConditionalCSS />
      <MyToDoList />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
