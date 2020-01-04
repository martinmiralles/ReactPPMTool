import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Header from "./components/Layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddProject from "./components/Project/AddProject";
import { Provider } from "react-redux";
import store from "./store";
import UpdateProject from "./components/Project/UpdateProject";
import ProjectBoard from "./components/ProjectBoard/ProjectBoard";
import AddProjectTask from "./components/ProjectBoard/ProjectTasks/AddProjectTask";
import UpdateProjectTask from "./components/ProjectBoard/ProjectTasks/UpdateProjectTask";
import Landing from "./components/Layout/Landing";
import Register from "./components/UserManagement/Register";
import Login from "./components/UserManagement/Login";

//Information taken from OTHER components
//This file sends info to 'index.js', which then sends info to 'index.html'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className='App'>
          <Header></Header>

          {
            //Public Routes
          }

          <Route exact path='/' component={Landing}></Route>
          <Route exact path='/register' component={Register}></Route>
          <Route exact path='/login' component={Login}></Route>

          {
            //Private Routes
          }

          <Route exact path='/dashboard' component={Dashboard}></Route>
          <Route exact path='/addProject' component={AddProject}></Route>
          <Route
            exact
            path='/updateProject/:id'
            component={UpdateProject}
          ></Route>
          <Route
            exact
            path='/projectBoard/:id'
            component={ProjectBoard}
          ></Route>
          <Route
            exact
            path='/addProjectTask/:id'
            component={AddProjectTask}
          ></Route>
          <Route
            exact
            path='/updateProjectTask/:backlog_id/:projectTask_id'
            component={UpdateProjectTask}
          ></Route>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
