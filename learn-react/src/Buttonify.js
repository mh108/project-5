// jshint esversion: 6

import React from "react";
import "./App.css";

class Buttonify extends React.Component {
  render() {
    return (
      <button className="clickable" type={this.props.behavior}>
        {this.props.children}
      </button>
    );
  }
}

export default Buttonify;
