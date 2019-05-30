// jshint esversion: 6

import React from "react";
import logo from "./logo.svg";
import "./App.css";
/*
class App extends React.Component {
  render() {
    //1. use the property value in the element
    return <h1>Hello, {this.props.greetTarget}!</h1>;
  }
}
*/

class Buttonify extends React.Component {
  render() {
    return (
      <div>
        <button class="clickable" type={this.props.behavior}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Buttonify;
