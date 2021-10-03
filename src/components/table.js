import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: "expand-true",
    };
  }
  expand() {
    document.getElementById("table").classList.toggle("expand-true");
  }
  render() {
    const { id, firstName, lastName, email } = this.props;
    return (
      <div>
        <button onClick={() => this.expand()}>Expand</button>
        <table id="table" className={this.state.expand}>
          <thead>
            <tr>
              <th>#</th>
              <th>Full Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{id}</td>
              <td>{firstName + " " + lastName}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
