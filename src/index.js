import React from "react";
import ReactDOM from "react-dom";
import H1 from "./components/h1.js";
import Nav from "./components/nav.js";
import Table from "./components/table.js";

class SPA extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <H1></H1>
        <Table></Table>
      </div>
    );
  }
}

ReactDOM.render(<SPA></SPA>, document.getElementById("root"));
