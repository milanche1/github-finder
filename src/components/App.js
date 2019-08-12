import React, { Component } from "react";
import Navbar from "./Navbar";
import Users from "./Users";
import Search from "./Search";
import Alert from "./Alert";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };

  // async componentDidMount() {
  //   // console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/search/users?client_id=${
  //       process.env.REACT_APP_GITHUB_CLIENT_ID
  //     }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${
        process.env.REACT_APP_GITHUB_CLIENT_ID
      }&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    this.setState({
      alert: {
        msg: msg,
        type: type
      }
    });
    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    return (
      <div className="App">
        <Navbar title="GitHub Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
