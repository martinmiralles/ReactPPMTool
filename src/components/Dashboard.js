import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";
import CreateProjectButton from "./Project/CreateProjectButton";
import { connect } from "react-redux";
import { getProjects } from "../actions/projectActions";
import PropTypes from "prop-types";

//A className-based component, via the shortcut 'rcc'
//All information here will be send to 'App.js', then send to 'index.js'

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

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
              <CreateProjectButton></CreateProjectButton>
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

Dashboard.propTypes = {
  project: PropTypes.func.isRequired,
  getProjects: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  project: state.project
});

export default connect(mapStateToProps, { getProjects })(Dashboard);
