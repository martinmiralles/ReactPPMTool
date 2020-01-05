import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import setJWTToken from "../securityUtils/setJWTToken";
import jwt_decode from "jwt-decode";

export const createNewUser = (newUser, history) => async dispatch => {
  try {
    await axios.post("/api/users/register", newUser);
    history.push("/login");
    dispatch({
      type: GET_ERRORS,
      payload: {}
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};

export const login = LoginRequest => async dispatch => {
  try {
    //POST => Login Request
    const res = await axios.post("/api/users/login", LoginRequest);

    //Extract token from the res.data; When response is successful, we are given that long token string
    const { token } = res.data;

    //Store the token in the localStorage
    localStorage.setItem("jwtToken", token);

    //Set our token in the header, like we do in Postman
    setJWTToken(token);

    //Decode the long token on React
    const decoded = jwt_decode(token);

    //Dispatch to our security Reducers
    dispatch({
      type: SET_CURRENT_USER,
      payload: decoded
    });
  } catch (err) {
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    });
  }
};
