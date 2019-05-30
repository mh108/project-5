// jshint esversion: 6
import React from "react";

//define a component
//components are functions that return an html element

class HelloWorld extends React.Component {
  render() {
    //1. use the property value in the element
    return <h2 className="hello">Hello, {this.props.greetTarget}!</h2>;
  }
}

export default HelloWorld;
