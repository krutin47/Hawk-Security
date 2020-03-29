import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/employee/add", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/employee/login", userData)
    .then(res => {
      //* Save to localStorage
      console.log("User fetched...");

      // Set token to localStorage
      console.log("trying to store it in the local_Storage...");
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      console.log("User Stored...");
      
      // Set token to Auth header
      console.log("Setting token to Auth Header...");
      setAuthToken(token);
      console.log("Token set...");

      // Decode token to get user data
      console.log("Decoding the Token...");
      const decoded = jwt_decode(token);
      console.log("Decoded...");

      // Set current user
      console.log("Setting the Current User...");
      dispatch(setCurrentUser(decoded));
      console.log("Current User Set...");
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.data
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};