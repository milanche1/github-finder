import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import "../App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" icon="fab fa-github" />
        <Users />
      </div>
    );
  }
}
export default App;
