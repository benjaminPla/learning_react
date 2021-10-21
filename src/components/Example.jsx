import React from "react";

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      name: "deaultValue",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange({ target }) {
    this.setState({ inputValue: target.value });
  }
  handleClick() {
    this.setState({ name: capitalizeFirstLetter(this.state.inputValue) });
  }
  render() {
    return (
      <div>
        <Navbar name={this.state.name} />
        <Input value={this.state.inputValue} handleChange={this.handleChange} />
        <Button handleClick={this.handleClick} />
      </div>
    );
  }
}

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, my name is: {this.props.name}</h1>
      </div>
    );
  }
}

function Input(props) {
  return <input type="text" value={props.value} onChange={props.handleChange} />;
}

function Button(props) {
  return <button onClick={props.handleClick}>Change Name!</button>;
}

function capitalizeFirstLetter(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}
