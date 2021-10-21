import React from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "CamperBot",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ name: "Alf" });
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}
