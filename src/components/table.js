import React from "react";
import ReactDom from "react-dom";

const responseFromApi = {
  id: "1",
  full_name: "Benjamin Pla",
  email: "benjaminpla.dev@gmail.com",
  phone_number: "+34722485479",
};

class EditBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: "Yes", created: "Yes" };
  }
  changeClick = () => {
    this.setState({ click: "No" });
    console.log(this.state.click);
  };
  render() {
    return <button onClick={this.changeClick}>Edit</button>;
  }
}
const myArr = ["Ouch!", "Ay!", "So much pain!"];
class DeleteBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: myArr, created: "Yes" };
  }
  changeClick = () => {
    this.setState({ click: myArr[Math.floor(Math.random() * myArr.length)] });
    console.log(this.state.click);
  };
  render() {
    return <button onClick={this.changeClick}>Delete</button>;
  }
}

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{responseFromApi.id}</td>
            <td>{responseFromApi.full_name}</td>
            <td>{responseFromApi.email}</td>
            <td>{responseFromApi.phone_number}</td>
            <td>
              <EditBtn></EditBtn>
              <DeleteBtn></DeleteBtn>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
