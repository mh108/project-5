// jshint esversion: 6

import React from "react";
import logo from "./logo.svg";
import "./App.css";

class Buttonify extends React.Component {
  render() {
    return (
      <div>
        <button type={this.props.behavior}>{this.props.children}</button>
      </div>
    );
  }
}

export default Buttonify;
