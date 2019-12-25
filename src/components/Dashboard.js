import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";

//A className-based component, via the shortcut 'rcc'
//All information here will be send to 'App.js', then send to 'index.js'

class Dashboard extends Component {
  render() {
    return (
      //JSX rule: can only return 1 parent div.  The code below wouldn't work without the div below this line

      //Dashboard Component (Project Item included) -->
      <div className='projects'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='display-4 text-center'>Projects</h1>
              <br />
              <a href='ProjectForm.html' className='btn btn-lg btn-info'>
                Create a Project
              </a>
              <br />
              <hr />
              <ProjectItem></ProjectItem>
              <ProjectItem></ProjectItem>
            </div>
          </div>
        </div>
      </div>
      //End of Dashboard Component
    );
  }
}

export default Dashboard;
