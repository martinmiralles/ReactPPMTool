import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";
import backlogReducer from "./backlogReducer";
import securityReducer from "./securityReducer";

//This file is the 'root' reducers
//STEP 3: The invididual reducers must be listed below
//THEN:a method must be created in the 'projectActions.js', in the 'actions' folder

export default combineReducers({
  errors: errorReducer,
  project: projectReducer,
  backlog: backlogReducer,
  security: securityReducer
});
