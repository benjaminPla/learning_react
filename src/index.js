import React from "react";
import ReactDOM from "react-dom";
import Greet from "./Components/Greet.js";
import Message from "./Components/Message.js";
import Table from "./Components/Table.js";
import Cat from "./Components/Cat.js";
import LifeCycle from "./Components/LifeCycle.js";
import Click from "./Components/Click.js";
import Bind from "./Components/Bind.js";

sessionStorage.setItem("user-name", "Benjamin");

class Index extends React.Component {
  render() {
    return (
      <div>
        <Greet />
        <Message />
        <Table id="1" firstName="Benjamin" lastName="Pla" email="benjaminpla.dev@gmail.com" />
        <Cat catName="Felix" eyeColor="Yellow" age="4" />
        <LifeCycle />
        <Click />
        <Bind />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("root"));
