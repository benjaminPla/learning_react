import React from "react";
import ReactDOM from "react-dom";

import { Header } from "./Components/Header.js";
import Button from "./Components/Button.js";
import Toggle from "./Components/Hooks/useState.js";
import InputEvent from "./Components/InputEvent.js";
import UseStateArray from "./Components/Hooks/useStateArray.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header text="Hello world" />
        <Button text="Change humor" />
        <Toggle />
        <InputEvent />
        <UseStateArray />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
