import React, { Component } from "react";
import reactDOM from "react-dom";
import Header from "./header";
import Search from "./searchBar";
import Employee from "./employee";
import Footer from "./footer";
import API from "./API";
import "./app.css";
//.sort for alphabetize
class App extends Component {
  state = {
    employee: [],
    employeeSort: [],
    inputValue: "",
  };
  componentDidMount() {
    console.log("component was born");
    API.getRandEmpInfo().then((res) => {
      //  console.log(res.data.results);
      this.setState({
        employee: res.data.results,
        employeeSort: res.data.results,
      });
    });
  }
  searchFilterOnChange = (event) => {
    console.log("OnChange running", event.target.value);
    this.setState({
      inputValue: event.target.value,
    });
    let filteredList = this.state.employee.filter((employee) => {
      let e = employee.name.first.toLowerCase();
      // console.log("E: ", e);
      let l = employee.name.last.toLowerCase();
      return (
        e.includes(event.target.value.toLowerCase()) ||
        l.includes(event.target.value.toLowerCase())
      );
    });
    this.setState({
      employeeSort: filteredList,
    });
  };

  // handleSubmit = (event) => {};
  render() {
    return (
      <>
        <Header />
        <Search
          emp={this.state.employeeSort}
          inp={this.state.inputValue}
          searchFilterOnChange={this.searchFilterOnChange}
        />
        <Employee emp={this.state.employeeSort} />;
        <Footer />
      </>
    );
  }
}

export default App;
