// jshint esversion: 6
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HelloWorld1 from "./HelloWorld1";
import * as serviceWorker from "./serviceWorker";

var destination = document.querySelector("#root");

//create an instance of a component, and add to DOM
ReactDOM.render(
  // call the component
  <HelloWorld1 />,
  destination
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
