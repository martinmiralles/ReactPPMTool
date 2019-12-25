import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";

//Information taken from OTHER components
//This file sends info to 'index.js', which then sends info to 'index.html'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
