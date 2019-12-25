import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Information is taken from 'App.js'
//This file sends info to 'index.html'

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
