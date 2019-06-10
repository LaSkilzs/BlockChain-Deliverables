import React from "react";
import Profile from "../containers/Profile";
import Login from "../containers/Login";
import Dashboard from "../containers/Dashboard";
import Navbar from "../presentational/Navbar";
import "./app.css";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" />
        </Switch>
      </div>
    );
  }
}

export default App;
