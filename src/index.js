import React from "react";
import ReactDOM from "react-dom";
import Todo from "./components/Todo.jsx";
import "./index.css";

const App = () => (
  <>
    <Todo />
  </>
);

ReactDOM.render(<App />, document.getElementById("root"));
