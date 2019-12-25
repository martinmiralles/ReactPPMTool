import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";

//A class-based component, via the shortcut 'rcc'
//All information here will be send to 'App.js', then send to 'index.js'

class Dashboard extends Component {
  render() {
    return (
      //JSX rule: can only return 1 parent div.  The code below wouldn't work without the div below this line
      <div>
        <h1>Welcome to the Dashboard</h1>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
        <ProjectItem></ProjectItem>
      </div>
    );
  }
}

export default Dashboard;
