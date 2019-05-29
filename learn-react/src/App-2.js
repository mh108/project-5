// jshint esversion: 6

import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    //1. use the property value in the element
    return <h1>Hello, {this.props.greetTarget}!</h1>;
  }
}

export default App;
