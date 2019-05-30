// jshint esversion: 6
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Buttonify from "./App";
import HelloWorld from "./hello";
import * as serviceWorker from "./serviceWorker";

var destination = document.querySelector("root");

ReactDOM.render(
  //pass the property value to the component
  <Buttonify behavior="button">Go!</Buttonify>,
  destination
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
