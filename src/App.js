import React, { Component } from "react";
import reactDOM from "react-dom";
import Header from "./header";
import Employee from "./employee";
import API from "./API";
import "./app.css";
class App extends Component {
  state = {
    employee: [],
  };
  componentDidMount() {
    console.log("component was born");
    API.getRandEmpInfo().then((res) => {
      //  console.log(res.data.results);
      this.setState({
        employee: res.data.results,
      });
    });
  }

  handleSubmit = (event) => {};
  //main code will go here
  render() {
    return (
      <>
        {/* employee(this.state.employeee) */}
        <Header />
        <Employee emp={this.state.employee} handleSubmit={this.handleSubmit} />;
      </>
    );
  }
}

export default App;
