// jshint esversion: 6

import React from "react";
import "./App.css";

class Buttonify extends React.Component {
  render() {
    return (
      <div>
        <button className="clickable" type={this.props.behavior}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Buttonify;
