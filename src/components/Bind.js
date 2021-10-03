import React from "react";

class Bind extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "hi",
    };
  }
  clickHandler() {
    this.setState({ message: "bye" });
  }
  render() {
    return (
      <div>
        {this.state.message}
        <button onClick={() => this.clickHandler()}>Click</button>
      </div>
    );
  }
}

export default Bind;
