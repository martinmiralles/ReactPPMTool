import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import projectReducer from "./projectReducer";

//This file is the 'root' reducers
//STEP 3: The invididual reducers must be listed below
//THEN:a method must be created in the 'projectActions.js', in the 'actions' folder

export default combineReducers({
  errors: errorReducer,
  project: projectReducer
});
