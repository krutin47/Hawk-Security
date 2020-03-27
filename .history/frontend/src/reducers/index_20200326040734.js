import { combineReducers } from "redux";
import authReducer from "../reducers/authReducers";
import errorReducer from "./errorReducers";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});