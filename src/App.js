import React, { Component } from "react";
import reactDOM from "react-dom";
import Header from "./header";
import Search from "./searchBar";
import Employee from "./employee";
import Footer from "./footer";
import API from "./API";
import "./app.css";
class App extends Component {
  state = {
    employee: [],
    inputValue: "",
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
  searchFilterOnChange = (event) => {
    console.log("OnChange running", event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
    this.state.employee.filter((employee) => {
      return employee.name.first
        .toLowercase()
        .include(this.state.inputValue.toLowerCase());
    });
  };

  // handleSubmit = (event) => {};
  render() {
    return (
      <>
        <Header />
        <Search
          emp={this.state.employee}
          inp={this.state.inputValue}
          searchFilterOnChange={this.searchFilterOnChange}
        />
        <Employee emp={this.state.employee} />;
        <Footer />
      </>
    );
  }
}

export default App;
