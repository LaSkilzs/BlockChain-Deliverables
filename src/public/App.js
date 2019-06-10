import React from "react";
import Profile from "../containers/Profile";
import Login from "../containers/Login";
import "./app.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="app-container">
        <h1>Hello World!</h1>
        <Login />
        <Profile />
      </div>
    );
  }
}

export default App;
