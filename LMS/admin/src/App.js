import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminHome from "./components/AdminHome";
import CreateSubject from "./components/CreateSubject";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/adminHome" component={AdminHome}></Route>
          <Route path="/createSubject" component={CreateSubject}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
