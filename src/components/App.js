import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import "../App.css";

class App extends Component {
  componentDidMount() {
    console.log(123);
  }
  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" icon="fab fa-github" />
        <div className="container">
          <Users />
        </div>
      </div>
    );
  }
}
export default App;
