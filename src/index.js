import React from "react";
import ReactDOM from "react-dom";
import IfElse from "./components/IfElse.jsx";
import CheckUserAge from "./components/CheckUserAge.jsx";
import ConditionalFromProps from "./components/ConditionalFromPorps.jsx";
import ConditionalCSS from "./components/ConditionalCSS.jsx";
import TodoList from "./components/TodoList.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  return (
    <>
      <IfElse />
      <CheckUserAge />
      <ConditionalFromProps />
      <ConditionalCSS />
      <TodoList />
      <Filter />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
