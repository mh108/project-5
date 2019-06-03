// jshint esversion: 6
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Buttonify from "./Buttonify";
import HelloWorld2 from "./HelloWorld2";
import * as serviceWorker from "./serviceWorker";

var destinationA = document.querySelector(".a");
var destinationB = document.querySelector(".b");
var destinationC = document.querySelector(".c");

//render a component in box a
ReactDOM.render(<HelloWorld2 greetTarget="Component World" />, destinationA);

//render a component in box b
ReactDOM.render(<HelloWorld2 greetTarget="Hello" />, destinationB);

//render a component in box c
ReactDOM.render(
  <Buttonify behavior="button">Go!</Buttonify>,
  //destinationC
  document.querySelector(".c").appendChild(document.createElement("span"))
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
