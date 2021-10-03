import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);

    this.state = { firstName: "benjamin" };
    console.log("lifeCyce: constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifeCycle: getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("lifeCycle:componentDidMount");
  }
  render() {
    console.log("lifeCycle: render");
    return (
      <div>
        <span>life cycle</span>
      </div>
    );
  }
}

export default LifeCycle;
