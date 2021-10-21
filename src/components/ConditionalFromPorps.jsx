import React from "react";

class Results extends React.Component {
  render() {
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
  }
}

export default class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }
  render() {
    const expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Results fiftyFifty={expression} />
        <p>{"Turn: " + this.state.counter}</p>
      </div>
    );
  }
}
