// jshint esversion: 6
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Buttonify from "./App";
import HelloWorld from "./helloWorld";
import * as serviceWorker from "./serviceWorker";

var destinationA = document.querySelector(".a");
var destinationB = document.querySelector(".b");
var destinationC = document.querySelector(".c");

ReactDOM.render(<HelloWorld greetTarget="Component World" />, destinationA);

ReactDOM.render(<HelloWorld greetTarget="Hello" />, destinationB);

ReactDOM.render(
  //pass the property value to the component
  <Buttonify behavior="button">Go!</Buttonify>,
  //destinationC
  document.querySelector(".c").appendChild(document.createElement("div"))
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
