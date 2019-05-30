// jshint esversion: 6

import React from "react";
import logo from "./logo.svg";
import "./App.css";

//declare a component
// components are functions that return an html element
class HelloWorld extends React.Component {
  render() {
    return <h1>Hello, Component World!</h1>;
  }
}

export default HelloWorld;
