import { combineReducers } from "redux";
import errorReducer from "./errorReducer";

//This file is the 'root' reducers

export default combineReducers({
  errors: errorReducer
});
