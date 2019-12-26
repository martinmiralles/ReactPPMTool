import { GET_PROJECTS } from "../actions/types";

const initialState = {
  projects: [],
  project: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };

    default:
      return state;
  }
}

//STEP 2: create the reducer
//info is then send to the index.js, in the 'reducers' folder
