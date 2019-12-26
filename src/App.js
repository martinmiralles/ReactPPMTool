import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";

//Information taken from OTHER components
//This file sends info to 'index.js', which then sends info to 'index.html'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header></Header>
          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/addProject' component={AddProject}></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
