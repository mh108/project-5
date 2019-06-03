// jshint esversion: 6
import React from "react";

// See comp-demo-4.html.
// React components are functions that return an html element

class HelloWorld2 extends React.Component {
  render() {
    //1. use the property value in the element
    return <h2 className="hello">Hello, {this.props.greetTarget}!</h2>;
  }
}

export default HelloWorld2;
