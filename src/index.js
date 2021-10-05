import React from "react";
import ReactDOM from "react-dom";

import Header from "./Components/Header.js";
import Button from "./Components/Button.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header text="Hello world" />
        <Button />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
