import React from "react";

// const Message = () => <span>Message!</span>;

class Message extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Click the button",
    };
  }
  changeMessage() {
    this.setState({ message: "Thanks a lot!" });
  }
  render() {
    return (
      <div>
        <span>{this.state.message}</span><br/>
        <button onClick={() => this.changeMessage()}>Click me!</button>
      </div>
    );
  }
}

export default Message;
